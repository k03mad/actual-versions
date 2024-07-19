import assert from 'node:assert/strict';
import cp from 'node:child_process';
import {before, describe, it} from 'node:test';
import {promisify} from 'node:util';

import stripAnsi from 'strip-ansi';
import {getBorderCharacters} from 'table';

import config from '../config.js';

const cliFile = process.env.npm_package_bin_acver;
const exec = promisify(cp.exec);

const tableBorderChars = Object.values(getBorderCharacters(config.table.border));
const tableBorderCharsRe = new RegExp(tableBorderChars.join('|'), 'g');

const STDOUT_TOOLS = [
    'aria',
    'chrome',
    'curl',
];

const versionRe = tool => new RegExp(`^${tool}\\s+${config.version.re}`);

describe('cli', () => {
    let versions;

    before(async () => {
        const {stdout} = await exec(cliFile);

        versions = stdout
            .split('\n')
            .map(elem => stripAnsi(elem)
                .replaceAll(tableBorderCharsRe, '')
                .trim(),
            )
            .filter(Boolean);
    });

    it('check tests count', () => {
        assert.equal(STDOUT_TOOLS.length, versions.length);
    });

    STDOUT_TOOLS.forEach((tool, i) => {
        it(`check stdout output: #${i + 1} tool: ${tool}`, () => {
            assert.match(versions[i], versionRe(tool));
        });
    });
});

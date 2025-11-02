import assert from 'node:assert/strict';
import cp from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import {before, describe, it} from 'node:test';
import {promisify} from 'node:util';

import stripAnsi from 'strip-ansi';
import {getBorderCharacters} from 'table';

import config from '../config.js';

const cliFile = process.env.npm_package_bin_acver;
const exec = promisify(cp.exec);

const tableBorderChars = Object.values(getBorderCharacters(config.table.border));
const tableBorderCharsRe = new RegExp(tableBorderChars.join('|'), 'g');

const versionRe = tool => new RegExp(String.raw`^${tool}\s+${config.version.re}`);

const dir = await fs.readdir('./app/tools');
const tools = dir.map(elem => path.basename(elem, '.js'));

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

    it('check tools count', () => {
        assert.equal(tools.length, versions.length);
    });

    tools.forEach((tool, i) => {
        it(`check stdout output: #${i + 1} tool: ${tool}`, () => {
            assert.match(versions[i], versionRe(tool));
        });
    });
});

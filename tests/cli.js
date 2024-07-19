import assert from 'node:assert/strict';
import cp from 'node:child_process';
import {before, describe, it} from 'node:test';
import {promisify} from 'node:util';

import stripAnsi from 'strip-ansi';
import {getBorderCharacters} from 'table';

import config from '../config.js';

const cliFile = process.env.npm_package_bin_acver;
const exec = promisify(cp.exec);

const TESTS = [
    /^aria\s+\d\.\d+\.\d$/,
    /^chrome\s+\d{3}(?:\.\d+){3}$/,
    /^curl\s+\d\.\d\.\d$/,
];

const tableBorderChars = Object.values(getBorderCharacters(config.table.border));
const tableBorderCharsRe = new RegExp(tableBorderChars.join('|'), 'g');

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
        assert.equal(TESTS.length, versions.length);
    });

    TESTS.forEach((re, i) => it(
        `check stdout output: #${i + 1} tool: ${String(re)}`,
        () => assert.match(versions[i], re),
    ));
});

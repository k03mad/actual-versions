import assert from 'node:assert/strict';
import {describe, it} from 'node:test';

import * as api from '../app/api.js';
import config from '../config.js';

const API_FUNCTIONS = [
    'getAriaVersion',
    'getChromeVersion',
    'getCurlVersion',
    'getNodeJsVersion',
];

const versionRe = new RegExp(`^${config.version.re}`);

describe('api', () => {
    it('check tests count', () => {
        assert.equal(API_FUNCTIONS.length, Object.keys(api).length);
    });

    API_FUNCTIONS.forEach(fn => {
        it(`check fn output: ${fn}()`, async () => {
            const version = await api[fn]();
            assert.match(version, versionRe);
        });
    });
});

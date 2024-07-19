import assert from 'node:assert/strict';
import {describe, it} from 'node:test';

import * as api from '../app/api.js';

const TESTS = {
    getAriaVersion: /^\d\.\d+\.\d$/,
    getChromeVersion: /^\d{3}(?:\.\d+){3}$/,
    getCurlVersion: /^\d\.\d\.\d$/,
};

describe('api', () => {
    const steps = Object.entries(TESTS);

    it('check tests count', () => {
        assert.equal(steps.length, Object.keys(api).length);
    });

    Object.entries(TESTS).forEach(([key, value]) => {
        it(`check fn output: ${key}()`, async () => {
            const version = await api[key]();
            assert.match(version, value);
        });
    });
});

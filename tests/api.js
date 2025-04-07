import assert from 'node:assert/strict';
import {describe, it} from 'node:test';

import * as api from '../app/api.js';
import config from '../config.js';

const versionRe = new RegExp(`^${config.version.re}`);

describe('api', () => {
    Object.entries(api).forEach(([name, fn]) => {
        it(`check fn output: ${name}()`, async () => {
            const version = await fn();
            assert.match(version, versionRe);
        });
    });
});

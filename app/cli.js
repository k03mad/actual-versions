#!/usr/bin/env node

import chalk from 'chalk';
import {getBorderCharacters, table} from 'table';

import config from '../config.js';

import * as api from './api.js';

const {blue, bold, green, red} = chalk;

const TOOL_NAME_RE = /get(.+)Version/;

const output = await Promise.all(
    Object.entries(api).map(async ([key, value]) => {
        try {
            const version = await value();
            const tool = key.match(TOOL_NAME_RE)[1].toLowerCase();

            return [
                blue(bold(tool)),
                version ? green(version) : red('———'),
            ];
        } catch (err) {
            console.log(`[${key}] ${err}`);
        }
    }),
);

const formattedTable = table(output.filter(Boolean), {
    border: getBorderCharacters(config.table.border),
});

console.log(formattedTable);

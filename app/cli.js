#!/usr/bin/env node

import {log} from '@k03mad/simple-log';
import chalk from 'chalk';
import {table} from 'table';

import * as api from './api.js';

const {blue, bold, green} = chalk;

const output = await Promise.all(
    Object.entries(api).map(async ([key, value]) => {
        const version = await value();
        const tool = key.replaceAll(/Version|get/g, '').toLowerCase();
        return [blue(bold(tool)), green(version)];
    }),
);

log(table(output));

import {requestCache} from '@k03mad/request';

const NODE_VERSIONS_URL = 'https://nodejs.org/dist/';
const NODE_VERSION_RE = /"v([\d.]+)/g;

const NODE_VERSION_DELIMITER = '.';
const NODE_VERSION_DELIMITER_COUNT = 2;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const {body} = await requestCache(NODE_VERSIONS_URL);

    return [...body.matchAll(NODE_VERSION_RE)]
        .map(elem => elem[1])
        .sort((a, b) => {
            const first = a.split(NODE_VERSION_DELIMITER);
            const second = b.split(NODE_VERSION_DELIMITER);

            for (let i = 0; i <= NODE_VERSION_DELIMITER_COUNT; i++) {
                if (second[i] !== first[i]) {
                    return Number(second[i]) - Number(first[i]);
                }
            }

            return 0;
        })[0];
};

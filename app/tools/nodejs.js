import {requestCache} from '@k03mad/request';

const NODE_VERSIONS_URL = 'https://nodejs.org/dist/index.json';

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const {body} = await requestCache(NODE_VERSIONS_URL);
    return body[0].version.replace('v', '');
};

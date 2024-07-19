import {requestCache} from '@k03mad/request';

const ARIA_VERSIONS_URL = 'https://aria2.github.io/';
const ARIA_VERSION_RE = /href=".+\/releases\/tag\/release-([\d.]+)"/;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const {body} = await requestCache(ARIA_VERSIONS_URL);
    return body.match(ARIA_VERSION_RE)?.[1];
};

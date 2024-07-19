import {requestCache} from '@k03mad/request';

const CHROME_VERSIONS_URL = 'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json';

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const {body} = await requestCache(CHROME_VERSIONS_URL);
    return body.channels.Stable.version;
};

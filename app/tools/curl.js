import {requestCache} from '@k03mad/request';

const CURL_VERSIONS_URL = 'https://curl.se/download.html';
const CURL_VERSION_RE = /href="\/download\/curl-([\d.]+).tar.gz"/;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const {body} = await requestCache(CURL_VERSIONS_URL);
    return body.match(CURL_VERSION_RE)[1];
};

const CURL_VERSIONS_URL = 'https://curl.se/download.html';
const CURL_VERSION_RE = /href="\/download\/curl-([\d.]+).tar.gz"/;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const response = await fetch(CURL_VERSIONS_URL);
    const text = await response.text();

    return text.match(CURL_VERSION_RE)?.[1];
};

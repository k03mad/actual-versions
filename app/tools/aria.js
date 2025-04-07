const ARIA_VERSIONS_URL = 'https://aria2.github.io/';
const ARIA_VERSION_RE = /href=".+\/releases\/tag\/release-([\d.]+)"/;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const response = await fetch(ARIA_VERSIONS_URL);
    const text = await response.text();

    return text.match(ARIA_VERSION_RE)?.[1];
};

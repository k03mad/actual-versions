const CHROME_VERSIONS_URL = 'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json';

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const response = await fetch(CHROME_VERSIONS_URL);
    const json = await response.json();

    return json?.channels?.Stable?.version;
};

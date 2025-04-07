const UBUNTU_VERSIONS_URL = 'https://launchpad.net/ubuntu/+series';
const UBUNTU_VERSION_RE = / \((\d+\.\d+)\).+\n.+Current Stable Release/;

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const response = await fetch(UBUNTU_VERSIONS_URL);
    const text = await response.text();

    return text.match(UBUNTU_VERSION_RE)?.[1];
};

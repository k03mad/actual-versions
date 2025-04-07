const NODE_VERSIONS_URL = 'https://nodejs.org/dist/index.json';

/**
 * @returns {Promise<string>}
 */
export default async () => {
    const response = await fetch(NODE_VERSIONS_URL);
    const json = await response.json();

    return json[0].version.replace('v', '');
};

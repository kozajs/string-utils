/**
 * Capitalizes the first letter of a string
 * @param {string} string Input string
 * @returns {string} The input string with the first letter capitalized
 */
export function capitalize(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Checks if a URL is valid
 * @param {string} url URL to check
 * @returns {boolean} True if the provided URL is valid
 */
export function isValidURL(string: string): boolean {
	try {
		new URL(string);
		return true;
	} catch (err) {
		return false;
	}
};
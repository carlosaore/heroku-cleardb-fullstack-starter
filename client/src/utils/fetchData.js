/**
 * Fetches an API and stores the result in a state together with boolean to flag the loading status as completed
 * @param url {string} The URL to fetch
 * @param setState {function} Callback function that updates a state to store the result of the fetch
 * @param setLoaded {Function} Callback function that updates a state as "true" after the fetch result is stored
 */
const fetchData = (url, setState, setLoaded) => {
	fetch(url).then((response) => {
		// Shorthand to check for an HTTP 2xx response status.
		// See https://fetch.spec.whatwg.org/#dom-response-ok
		if (response.ok) {
			return response;
		}
		// Raise an exception to reject the promise and trigger the outer .catch() handler.
		// By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
		throw Error(response.statusText);
	}).then((response) => {
		return response.json();
	}).then((json) => {
		setState(json);
	}).then(() => {
		setLoaded(true);
	}).catch((error) => {
		console.error('Request failed:', error.message);
	});
};

export default fetchData;
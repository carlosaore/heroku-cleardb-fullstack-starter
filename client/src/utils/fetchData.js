// helper function to fetch an API and store the result in a state
// and a boolean to tell if we have loaded the data in another state
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
		setLoaded(true);
	}).catch((error) => {
		console.error('Request failed:', error.message);
	});
};

export default fetchData;
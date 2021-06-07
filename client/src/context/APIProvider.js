import React, { useState, useEffect } from 'react';

export const context = React.createContext();

const APIProvider = (props) => {

	//states to store data coming from various APIs
	const [users, setUsers] = useState({});
	const [usersLoaded, setUsersLoaded] = useState(false);
	const [movies, setMovies] = useState({});
	const [moviesLoaded, setMoviesLoaded] = useState(false);

	//helper function to fetch an API and store the result in set state
	const fetchData = (url, setState, setLoaded) => {
		fetch(url).then(function(response) {
			// Shorthand to check for an HTTP 2xx response status.
			// See https://fetch.spec.whatwg.org/#dom-response-ok
			if (response.ok) {
				return response;
			}
			// Raise an exception to reject the promise and trigger the outer .catch() handler.
			// By default, an error response status (4xx, 5xx) does NOT cause the promise to reject!
			throw Error(response.statusText);
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			setState(json);
			setLoaded(true);
		}).catch(function(error) {
			console.error('Request failed:', error.message);
		});
	};

	useEffect(() => {
		//using the helper function to fetch from 2 APIs
		fetchData('/api/users', setUsers, setUsersLoaded);
		fetchData('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json', setMovies, setMoviesLoaded)
	}, [])

	return (
		<context.Provider value={{users, usersLoaded, movies, moviesLoaded}} >
			{props.children}
		</context.Provider>
	)
};

export default APIProvider;
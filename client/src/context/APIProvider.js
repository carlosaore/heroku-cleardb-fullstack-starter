import React, { useState, useEffect } from 'react';
import fetchData from "../utils/fetchData";

export const context = React.createContext();

const APIProvider = (props) => {

	//states to store data coming from various APIs
	const [users, setUsers] = useState({});
	const [usersLoaded, setUsersLoaded] = useState(false);
	const [movies, setMovies] = useState({});
	const [moviesLoaded, setMoviesLoaded] = useState(false);

	useEffect(() => {
		// using the helper function to fetch from 2 APIs
		// you can store the result in this same context or create a new one using this code as a template
		fetchData('/api/users', setUsers, setUsersLoaded);
		fetchData('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json', setMovies, setMoviesLoaded)
	}, [])

	return (
		<context.Provider value={{ users, usersLoaded, movies, moviesLoaded }} >
			{ props.children }
		</context.Provider>
	)
};

export default APIProvider;
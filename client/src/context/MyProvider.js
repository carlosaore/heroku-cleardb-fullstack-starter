import React, {useState} from 'react';

export const context = React.createContext();

const MyProvider = (props) => {

	const [count, setCount] = useState(0);

	return (
		<context.Provider value={{count, setCount}}>
			{props.children}
		</context.Provider>
	)
};

export default MyProvider;
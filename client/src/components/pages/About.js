import {useContext} from 'react';
import {context} from "../../context/MyProvider";
import H2 from "../atoms/H2";
import P from "../atoms/P";
import logger from "../../utils/logger";

const About = () => {

	const myContext = useContext(context);

	return (
		<main>
			<H2>About</H2>
			<p>The following count comes from a state kept in a general purpose context.</p>
			<P>{`Count: ${myContext.count}`}</P>
			<button
				onClick={() => {
					myContext.setCount(prevState => prevState + 1);
				}}
			>
				+1
			</button>
			<p>The following button logs "Hello world!" to the console thanks to a function provided by
				/utils/logger.js</p>
			<button
				onClick={() => logger("Hello world!")}
			>
				Log
			</button>
		</main>

	)
};

export default About;
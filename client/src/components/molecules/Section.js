import H3 from "../atoms/H3";
import P from "../atoms/P";

const Section = (props) => {
	return (
		<section>
			<H3>{props.title}</H3>
			<P>{props.text}</P>
		</section>
	)
};

export default Section;
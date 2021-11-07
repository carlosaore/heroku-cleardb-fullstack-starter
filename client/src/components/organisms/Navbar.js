import {Link} from "react-router-dom";
import H3 from "../atoms/H3";
import P from "../atoms/P";
import Nav from "../atoms/Nav";

const Navbar = () => (
	<Nav>
		<H3>Navigation bar</H3>
		<P>This is a navigation bar</P>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
	</Nav>
)

export default Navbar;
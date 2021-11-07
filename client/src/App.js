import {Route, Switch} from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/organisms/Footer";

const App = () => {

	return (
		<>
			<header>
				<h1>Starter template</h1>
			</header>

			<Navbar/>

			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/contact" component={Contact}/>
			</Switch>

			<Footer/>
		</>
	)
};

export default App;

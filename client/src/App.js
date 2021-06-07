import { Switch, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () => {

    return (
        <>
            <header>
                <h1>Starter template</h1>
            </header>
            <Navbar />
            <Switch>
                <Route
                    exact path="/"
                    render={props =>
                      <Home {...props} />
                    }
                />
                <Route
                    path="/about"
                    render={props =>
                      <About {...props} />
                    }
                />
                <Route
                    path="/contact"
                    render={props =>
                      <Contact {...props} />
                    }
                />
            </Switch>
        </>
    )
};

export default App;

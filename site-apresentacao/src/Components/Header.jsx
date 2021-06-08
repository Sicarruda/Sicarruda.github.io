import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About"
import Curriculum from "./Curriculum"
import Portifolio from "./Portifolio"
import Contato from "./Contato"

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <span>
              <Link to="/"> Home </Link>
            </span>
            <span>
              <Link to="/about"> Sobre </Link>
            </span>
            <span>
              <Link to="/curriculum"> Curriculum </Link>
            </span>
            <span>
              <Link to="/portifolio"> Portifolio </Link>
            </span>
            <span>
              <Link to="/contato"> Contato </Link>
            </span>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/curriculum" component={Curriculum} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Header;

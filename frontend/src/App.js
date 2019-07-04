import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import createProduct from "../../components/createProduct";
import product from "../../components/product";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href=" " target="_blank">
              <img src="" width="30" height="30" alt="Riby krofax test" />
            </a>
            <Link to="/" className="navbar-brand">Riby Intern Test</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Product</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={product} />
          <Route path="/create" component={createProduct} />
        </div>
      </Router>
    );
  }
}
export default App;
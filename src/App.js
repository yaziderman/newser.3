// Import React and Component
import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const LazyNews = React.lazy(() => import("./Components/News"));
const logo = require("./logo.png");
const scrollerStyle = {
  backgroundColor: "#003768bd"
};

const override = css`
  display: block !important;
  margin: 0 auto;
  border-color: red;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading === true)
      return (
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      );
    return (
      <div>
        <div className="topheader">
          <header className="container is-fluid">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">
                  <img alt="Newser Logo" src={logo} />
                  <font>ewser</font>
                </span>
              </div>
              <div className="navbar-end">
                <span className="navbar-item">
                  <span className="linkTitle">Data Source:</span>{" "}
                  <a
                    className="navbar-item"
                    href="https://newsapi.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    newsapi.org
                  </a>
                </span>
              </div>
            </nav>
          </header>
        </div>
        <section className="section">
          <div className="container " />
          <div className="results--section__inner">
            <Router>
                <Route path="/" component={Home} exact />
                <Suspense
                  fallback={
                    <ClipLoader
                      css={override}
                      sizeUnit={"px"}
                      size={150}
                      color={"#123abc"}
                      loading={this.state.loading}
                    />
                  }
                >
                  <Route path="/:slug" component={LazyNews} />
                </Suspense>
            </Router>
          {/*}  <ScrollUpButton style={scrollerStyle} /> */}
          </div>
        </section>
      </div>
    );
  }
}

export default App;

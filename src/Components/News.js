import React, { Component } from "react";
import config from "../extra/config";
import ApiHelper from "../extra/ApiHelper";
import NewsCard from "./NewsCard";
import ScrollUpButton from "react-scroll-up-button";
import SearchBox from "../Ui/SearchBox";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import makeExpanding from "../Ui/expanding-animation";

const ExpandingSearchBox = makeExpanding(SearchBox);

const titleize = require("titleize");

const scrollerStyle = {
  backgroundColor: "#003768bd"
};

class News extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      news: null,
      searchNews: null
    };
  }

  componentDidMount() {
    injectTapEventPlugin();
  }

  fetchAllNewsByCategory(category) {
    let criteria = { category: category };
    ApiHelper.fetchNews(config.headlinesEndpoint, criteria, response => {
      this.setState({
        news: response.data.articles,
        searchNews: response.data.articles
      });
      localStorage.setItem(
        "FULLNEWS-" + category,
        JSON.stringify(response.data.articles)
      );
    });
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.setState({ category: slug }, function() {
      let cashedNews = localStorage.getItem("FULLNEWS-" + slug);
      if (cashedNews !== null) {
        let newsList = JSON.parse(cashedNews);
        this.setState({ news: newsList, searchNews: newsList });
      } else {
        this.fetchAllNewsByCategory(slug);
      }
    });
  }

  handleOnSearch = e => {
    let searchStr = e.target.value;
    let searchResults = this.state.news;
    if (searchStr.trim() != "") {
      searchResults = this.state.news.filter(item =>
        item.title.toLowerCase().includes(searchStr)
      );
    }
    this.setState({ searchNews: searchResults });
  };

  render() {
    let news = this.state.news;
    let searchNews = this.state.searchNews;
    const style = {
      float: "right"
    };

    return (
      <div>
        <section className="hero is-small">
          <div className="hero-body p-t-none">
            <div className="container">
              <h1 className="title">{titleize(this.state.category)} News</h1>
              <h2 className="subtitle">
                <a href="/" className="newserAction">
                  &#171;Categories
                </a>
                <MuiThemeProvider>
                  <div style={style}>
                    <ExpandingSearchBox handleOnSearch={this.handleOnSearch} />
                  </div>
                </MuiThemeProvider>
              </h2>
            </div>
          </div>
        </section>
        <div className="columns is-mobile- is-multiline is-centered">
          {!news ? (
            <React.Fragment>
              {[1, 2, 3, 4].map((mock, index) => (
                <div className="column is-half" key={index}>
                  <NewsCard />
                </div>
              ))}
            </React.Fragment>
          ) : news.length === 0 ? (
            <div className="skeleton">No News Found</div>
          ) : (
            searchNews.map((newsItem, index) => (
              <div className="column is-half" key={index}>
                <NewsCard newsItem={newsItem} />
              </div>
            ))
          )}
          <ScrollUpButton style={scrollerStyle} />
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from "react";
import config from "../extra/config";
import ApiHelper from "../extra/ApiHelper";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block !important;
  margin: 0 auto;
  border-color: red;
`;

class Headlines extends Component {
  constructor() {
    super();
    this.state = {
      headlines: null
    };
  }

  fetchHeadlines() {
    ApiHelper.fetchNews(config.headlinesEndpoint, {}, response => {
      this.setState({ headlines: response.data.articles });
      localStorage.setItem("HEADLINES", JSON.stringify(response.data.articles));
    });
  }

  componentDidMount() {
    let cashedHeadlines = localStorage.getItem("HEADLINES");
    if (cashedHeadlines !== null) {
      this.setState({ headlines: JSON.parse(cashedHeadlines) });
    } else {
      this.fetchHeadlines();
    }
  }

  render() {
    let headlines = this.state.headlines;

    if (!headlines)
      return (
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
      );
    if (headlines.length === 0) return <div>No News Available</div>;

    return (
      <div className="columns is-mobile- is-multiline is-centered">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd "
          >
            <div className="card is-full-height  with-shadow-on-hover">
              <div className="card-content">
                <p className="title">“{headline.title}”</p>
                <p className="subtitle">Jeff Atwood</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Headlines;

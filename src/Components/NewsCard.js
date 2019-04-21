import React, { Component } from "react";
import Helper from "../extra/custom";

class NewsCard extends Component {
  componentDidMount() {
    var imagesToLoad = document.querySelectorAll("img[data-src]");
    var loadImages = function(image) {
      image.setAttribute("src", image.getAttribute("data-src"));
      image.onload = function() {
        image.removeAttribute("data-src");
      };
    };
    imagesToLoad.forEach(function(img) {
      loadImages(img);
    });
  }

  render() {
    let newsItem = this.props.newsItem;
    let className = "card is-full-height with-shadow-on-hover";
    if (!newsItem) {
      className += " skeleton";
    }

    let newsImagePath =  newsItem && newsItem.urlToImage ? newsItem.urlToImage : "";
    let newsTitle =  newsItem && newsItem.title ? newsItem.title : "";
    let newsAuthor = newsItem && newsItem.author ? newsItem.author : "";
    let newsBody = newsItem && newsItem.content ? newsItem.content : "";
    return (
      <div className={className}>
        <div className="card-image">
          <figure className="image is-4by3 article">
            <img
              data-src={
                newsImagePath
              }
              alt={newsTitle}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {newsTitle}
              </p>
              <p className="subtitle is-6">
                {newsAuthor}
              </p>
            </div>
          </div>
          <div className="content">
            {newsBody}
            <br />
            {newsItem && newsItem.publishedAt ? (
              <time dateTime={newsItem.publishedAt}>
                {Helper.getDateInFormat(newsItem.publishedAt)}
              </time>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;

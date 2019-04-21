import React from "react";
import { toast } from "react-toastify";
import moment from "moment";
import config from "./config";
const queryString = require('query-string');

const Helpers = {
  isEmpty: value => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  },
  apiURL: urlConfig => {
    var endpoint = urlConfig.uri || "";
    var pathVar = urlConfig.pathVar || {};
    var query = urlConfig.query || {};
    endpoint = endpoint.replace(/:(\w+)(\/|\b)/g, function(
      substring,
      match,
      nextMatch
    ) {
      return pathVar[match] + nextMatch;
    });
    if (query) {
      var qString = queryString.stringify(query);
      if (qString !== "") {
        endpoint = endpoint + "?" + qString;
      }
    }
    if (endpoint.indexOf("http") === 0) {
      return endpoint;
    }
    return config.api(endpoint);
  },
  pushMsg: (msg, postion) => {
    toast(msg, { postion: postion });
  },
  pushSuccess: (msg, postion) => {
    toast.success(msg, { postion: postion });
  },
  pushError: (msg, postion) => {
    toast.error(msg, { postion: postion });
  },
  pushWarn: (msg, postion) => {
    toast.warn(msg, { postion: postion });
  },
  pushInfo: (msg, postion) => {
    toast.info(msg, { postion: postion });
  },

  handleError: data => {
    if (!data) {
      return;
    }
    if (data.message) {
      toast.error(data.message);
    } else {
      toast.error("GENERIC_ERROR");
    }
  },
  properExternalUrl: url => {
    let newUrl = url;
    if (!/^https?:\/\//i.test(url)) {
      newUrl = "http://" + url;
    }
    return newUrl;
  },
  getDateInFormat: (date, dateFormat) => {
    dateFormat = dateFormat || config.displayDateTimeFormat;
    return moment(date).format(dateFormat);
  },
  newLineToBr(str) {
    str = str+"";
    str = str.replace("<br>", "");
    let output = str.split("\n").map((item, key) => {
      return (
        // <Fragment key={key}>
        //   {item}
        //   <br />
        // </Fragment>
        <p key={key}>{item}</p>
      );
    });
    return output;
  },
  isAndroid: function() {
  return navigator.userAgent.match(/Android/i);
  },
  isBlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  isIOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  isOpera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  isWindows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  isMobile: function() {
    return (!this.isEmpty(this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isOpera() || this.isWindows()));
  },
  getCleanText:(str)=>{
    return str.replace(/<(.|\n)*?>/g, '').replace("&amp;" ,"&").replace( "&quot;","'");
  }
 
};

/**********  Toaster Notification to push messeges ***********/

/****
 *
 * toast("Your Msg");
 * toast.success("Success Msg");
 * toast.error("Error Msg");
 * toast.warn("warning Msg");
 * toast.info("info Msg");
 * toast("with custo class",{className:class'});
 * toast.POSITION.TOP_LEFT, toast.POSITION.TOP_RIGHT, toast.POSITION.TOP_CENTER
 * toast.POSITION.BOTTOM_LEFT,toast.POSITION.BOTTOM_RIGHT, toast.POSITION.BOTTOM_CENTER
 *
 *********/

export default Helpers;

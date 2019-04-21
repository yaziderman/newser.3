(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(292),s=a(223),c=a.n(s),o=a(37),l=a.n(o),u=a(225),m={isEmpty:function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},apiURL:function(e){var t=e.uri||"",a=e.pathVar||{},n=e.query||{};if(t=t.replace(/:(\w+)(\/|\b)/g,function(e,t,n){return a[t]+n}),n){var r=u.stringify(n);""!==r&&(t=t+"?"+r)}return 0===t.indexOf("http")?t:l.a.api(t)},pushMsg:function(e,t){Object(i.a)(e,{postion:t})},pushSuccess:function(e,t){i.a.success(e,{postion:t})},pushError:function(e,t){i.a.error(e,{postion:t})},pushWarn:function(e,t){i.a.warn(e,{postion:t})},pushInfo:function(e,t){i.a.info(e,{postion:t})},handleError:function(e){e&&(e.message?i.a.error(e.message):i.a.error("GENERIC_ERROR"))},properExternalUrl:function(e){var t=e;return/^https?:\/\//i.test(e)||(t="http://"+e),t},getDateInFormat:function(e,t){return t=t||l.a.displayDateTimeFormat,c()(e).format(t)},newLineToBr:function(e){return(e=(e+="").replace("<br>","")).split("\n").map(function(e,t){return r.a.createElement("p",{key:t},e)})},isAndroid:function(){return navigator.userAgent.match(/Android/i)},isBlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},isIOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},isOpera:function(){return navigator.userAgent.match(/Opera Mini/i)},isWindows:function(){return navigator.userAgent.match(/IEMobile/i)},isMobile:function(){return!this.isEmpty(this.isAndroid()||this.isBlackBerry()||this.isIOS()||this.isOpera()||this.isWindows())},getCleanText:function(e){return e.replace(/<(.|\n)*?>/g,"").replace("&amp;","&").replace("&quot;","'")}};t.a=m},166:function(e,t,a){"use strict";var n=a(293),r=a(37),i=a.n(r),s=a(217),c=a.n(s),o=a(153),l={fetchNews:function(e,t,a){var r={country:i.a.country,apiKey:i.a.apiKey},s=Object(n.a)({},r,t);c.a.get(o.a.apiURL({uri:"https://newsapi.org/v2/"+e,query:s})).then(function(e){a&&a(e)}).catch(function(e){console.log("Error fetching cities")})}};t.a=l},525:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),i=a(17),s=a(16),c=a(18),o=a(0),l=a.n(o),u=a(37),m=a.n(u),h=a(166),d=a(153),p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll("img[data-src]");e.forEach(function(e){var t;(t=e).setAttribute("src",t.getAttribute("data-src")),t.onload=function(){t.removeAttribute("data-src")}})}},{key:"render",value:function(){var e=this.props.newsItem,t="card is-full-height with-shadow-on-hover";e||(t+=" skeleton");var a=e&&e.urlToImage?e.urlToImage:"",n=e&&e.title?e.title:"",r=e&&e.author?e.author:"",i=e&&e.content?e.content:"";return l.a.createElement("div",{className:t},l.a.createElement("div",{className:"card-image"},l.a.createElement("figure",{className:"image is-4by3 article"},l.a.createElement("img",{"data-src":a,alt:n}))),l.a.createElement("div",{className:"card-content"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-content"},l.a.createElement("p",{className:"title is-4"},n),l.a.createElement("p",{className:"subtitle is-6"},r))),l.a.createElement("div",{className:"content"},i,l.a.createElement("br",null),e&&e.publishedAt?l.a.createElement("time",{dateTime:e.publishedAt},d.a.getDateInFormat(e.publishedAt)):"")))}}]),t}(o.Component),f=a(43),g=a.n(f),v=a(329),E=a(518),b=a.n(E),y=function(e){var t=e.isOpen,a=e.onClick,n=e.additionalStyles,r=e.handleOnSearch,i={open:{width:210},closed:{width:0},smallIcon:{width:30,height:30},icon:{width:40,height:40,padding:5,top:10},frame:{border:"solid 1px black",borderRadius:5}},s=t?i.open:i.closed;s=Object.assign(s,n?n.text:{});var c=Object.assign({},s,i.frame,n?n.frame:{});return c.width+=i.icon.width+5,l.a.createElement("div",{style:c},l.a.createElement(v.a,{iconStyle:i.smallIcon,style:i.icon,onClick:function(){return a()}},l.a.createElement(b.a,null)),l.a.createElement(v.b,{name:"search",style:s,onChange:function(e){return r(e)}}))},w=a(202),O=a.n(w),N=a(519),k=a.n(N),S={transition:"width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)"},j=function(e){return function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(s.a)(a).call(this,e))).onClick=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!1},t}return Object(c.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(e,Object.assign({},this.props,{isOpen:this.state.isOpen,onClick:this.onClick,additionalStyles:{text:S,frame:S},handleOnSearch:this.props.handleOnSearch}))}}]),a}(o.Component)}(y),A=a(53),C={backgroundColor:"#003768bd"},I=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).handleOnSearch=function(t){var a=t.target.value,n=e.state.news;""!=a.trim()&&(n=e.state.news.filter(function(e){return e.title.toLowerCase().includes(a)})),e.setState({searchNews:n})},e.state={category:"",news:null,searchNews:null},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){k()()}},{key:"fetchAllNewsByCategory",value:function(e){var t=this,a={category:e};h.a.fetchNews(m.a.headlinesEndpoint,a,function(a){t.setState({news:a.data.articles,searchNews:a.data.articles}),localStorage.setItem("FULLNEWS-"+e,JSON.stringify(a.data.articles))})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.slug;this.setState({category:e},function(){var t=localStorage.getItem("FULLNEWS-"+e);if(null!==t){var a=JSON.parse(t);this.setState({news:a,searchNews:a})}else this.fetchAllNewsByCategory(e)})}},{key:"render",value:function(){var e=this.state.news,t=this.state.searchNews;return l.a.createElement("div",null,l.a.createElement("section",{className:"hero is-small"},l.a.createElement("div",{className:"hero-body p-t-none"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},A(this.state.category)," News"),l.a.createElement("h2",{className:"subtitle"},l.a.createElement("a",{href:"/",className:"newserAction"},"\xabCategories"),l.a.createElement(O.a,null,l.a.createElement("div",{style:{float:"right"}},l.a.createElement(j,{handleOnSearch:this.handleOnSearch}))))))),l.a.createElement("div",{className:"columns is-mobile- is-multiline is-centered"},e?0===e.length?l.a.createElement("div",{className:"skeleton"},"No News Found"):t.map(function(e,t){return l.a.createElement("div",{className:"column is-half",key:t},l.a.createElement(p,{newsItem:e}))}):l.a.createElement(l.a.Fragment,null,[1,2,3,4].map(function(e,t){return l.a.createElement("div",{className:"column is-half",key:t},l.a.createElement(p,null))})),l.a.createElement(g.a,{style:C})))}}]),t}(o.Component);t.default=I}}]);
//# sourceMappingURL=6.c0848c34.chunk.js.map
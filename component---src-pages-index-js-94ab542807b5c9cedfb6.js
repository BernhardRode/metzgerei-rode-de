(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),r=a(7),l=a.n(r),s=a(0),o=a.n(s),c=a(148),u=a(4),m=a.n(u),d=a(161),p=a.n(d),h=function(e){return o.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("img",{src:p.a,height:"150",className:"icon",alt:"Partyservice Metzgerei Rode"}))),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){e.onOpenArticle("oeffnungszeiten")}},"Öffnungszeiten")),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){e.onOpenArticle("adresse")}},"Kontakt")))))};h.propTypes={onOpenArticle:m.a.func,timeout:m.a.bool};var f=h,E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this,t=o.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return o.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},o.a.createElement("article",{id:"oeffnungszeiten",className:("oeffnungszeiten"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Öffnungszeiten"),o.a.createElement("p",null,o.a.createElement("strong",null,"Montag bis Freitag"),o.a.createElement("br",null),"von 07.00 - 19.00",o.a.createElement("br",null),o.a.createElement("strong",null,"Samstag"),o.a.createElement("br",null),"von 07.00 - 13.00 Uhr",o.a.createElement("br",null)),t),o.a.createElement("article",{id:"adresse",className:("adresse"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Wo sie uns finden?"),o.a.createElement("address",null,o.a.createElement("strong",null,"Partyservice Metzgerei Rode"),o.a.createElement("br",null),"Ulrich Rode",o.a.createElement("br",null),"Hauptstraße 40",o.a.createElement("br",null),"71717 Beilstein",o.a.createElement("br",null),o.a.createElement("abbr",{title:"Phone"},"Telefon:")," ",o.a.createElement("a",{href:"tel:+4970623716"},"+49 (07062) 8866"),o.a.createElement("br",null),o.a.createElement("abbr",{title:"Fax"},"Fax:")," +49 (07062) 930756",o.a.createElement("br",null),o.a.createElement("br",null)),t))},t}(o.a.Component);E.propTypes={route:m.a.object,article:m.a.string,articleTimeout:m.a.bool,onCloseArticle:m.a.func,timeout:m.a.bool,setWrapperRef:m.a.func.isRequired};var b=E,g=function(e){return o.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},o.a.createElement("p",{className:"copyright"},"© Metzgerei Rode Beilstein - Partyservice ",(new Date).getFullYear()," ❤ ",o.a.createElement("a",{href:"https://unsplash.com/@single_lens_reflex?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from Dan Burton"},"picture by ",o.a.createElement("span",null,"Dan Burton"))))};g.propTypes={timeout:m.a.bool};var v=g,y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},o.a.createElement("div",{id:"wrapper"},o.a.createElement(f,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),o.a.createElement(b,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),o.a.createElement(v,{timeout:this.state.timeout})),o.a.createElement("div",{id:"bg"})))},t}(o.a.Component);t.default=y},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),s=a(32),o=a.n(s);a.d(t,"a",function(){return o.a});a(146);var c=i.a.createContext({}),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,a){"use strict";var n=a(149),i=a(0),r=a.n(i),l=a(4),s=a.n(l),o=a(151),c=a.n(o),u=a(147),m=(a(152),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(u.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Partyservice Metzgerei Rode Beilstein"},{name:"keywords",content:"party, service, metzgerei, local, german"}],link:[]},r.a.createElement("html",{lang:"de"})),t)},data:n})});m.propTypes={children:s.a.node.isRequired},t.a=m},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Metzgerei Rode Beilstein"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),s=a(53),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){e.exports=a.p+"static/logo-4b115e540d6190ab604a153973e97700.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-94ab542807b5c9cedfb6.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return y});var n=a(0),r=a.n(n),l=a(160),i=a(169),u=a(193),c=a.n(u),o=a(194),s=a.n(o),d=a(200),m=a.n(d),f=a(157),p=a.n(f),y="382641756";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=a.title,u=a.image,o=t.markdownRemark.html;return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:n}),r.a.createElement(c.a,null,r.a.createElement(m.a,{style:{height:"200px"},image:u}),r.a.createElement(s.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h2",component:"h2"},n),r.a.createElement(p.a,{dangerouslySetInnerHTML:{__html:o}}))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(147),c=a.n(u);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var o=a(158),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},160:function(e,t,a){"use strict";var n=a(164),r=a(0),l=a.n(r),i=a(178),u=a.n(i),c=a(146),o=function(e){return l.a.createElement(c.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return l.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};o.defaultProps={lang:"en",meta:[],keywords:[]},t.a=o;var s="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),u=a(53),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(160),i=a(159),u=a(146),c=(a(162),a(163),a(166)),o=a(172),s=a.n(o),d=function(e){var t=e.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(u.Link,{key:e.name,to:e.link},r.a.createElement(s.a,{style:{color:"#fff"}},e.name))}))},m=function(e){return r.a.createElement(u.StaticQuery,{query:"240237662",render:function(e){return r.a.createElement(d,{data:e})},data:c})},f=a(7),p=a.n(f),y=a(167),v=a(184),g=a.n(v),E=a(185),h=a.n(E),b=a(183),k=a.n(b),M=a(175),w=a.n(M),x=a(161),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return p()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{onClick:this.toggleMenu},r.a.createElement(x.a,{style:{color:"#efefef"}})),r.a.createElement(k.a,{onClickAway:this.toggleMenu},r.a.createElement(g.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return r.a.createElement(u.Link,{key:e.name,to:e.link},r.a.createElement(h.a,null,e.name))}))))},t}(r.a.Component),q=function(e){return r.a.createElement(u.StaticQuery,{query:"709782962",render:function(t){return r.a.createElement(P,{active:e.active,data:t})},data:y})},S=a(189),j=a.n(S),T=a(171),_=a.n(T),C=a(187),O=a.n(C),R=a(186),L=a.n(R),N=a(157),B=a.n(N),Q=a(188),A=a.n(Q),G=a(176),I=a.n(G),U=function(e){return r.a.createElement(L.a,{id:"appBar"},r.a.createElement(O.a,null,r.a.createElement(_.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},r.a.createElement(_.a,{item:!0},r.a.createElement(A.a,{id:"logo",variant:"outlined",avatar:r.a.createElement(I.a,{id:"logoIcon"},r.a.createElement(x.c,null)),label:r.a.createElement(u.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),r.a.createElement(_.a,{item:!0},r.a.createElement(j.a,{smDown:!0},r.a.createElement(B.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},r.a.createElement(m,null))))),r.a.createElement(_.a,{item:!0},r.a.createElement(j.a,{mdUp:!0},r.a.createElement(q,null)))))},F=function(e){return r.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(U,{data:e})},data:i})},D=a(190),J=a.n(D),z=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,l=n.email,i=n.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{style:{marginTop:"48px",marginBottom:"24px"}}),r.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},r.a.createElement("span",null,r.a.createElement(B.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",l," – ",i))))},H=function(e){return r.a.createElement(u.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(z,{data:e})},data:i})},V=a(192),Y=a.n(V),K=a(191),W=a(177),X=(a(168),Object(W.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}));t.a=function(e){return r.a.createElement(W.MuiThemeProvider,{theme:X},r.a.createElement(Y.a,null),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(l.a,null),r.a.createElement(F,null),r.a.createElement(K.Grid,{style:{marginTop:"94px"}},r.a.createElement(K.Row,null,r.a.createElement(K.Col,{xs:12},e.title?r.a.createElement(B.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},e.title):null,e.children,r.a.createElement(H,null)))))}},193:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(199))},194:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(202))},199:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),l=n(a(145)),i=n(a(0)),u=(n(a(4)),n(a(149))),c=n(a(174)),o=n(a(148)),s={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,o=(0,l.default)(e,["classes","className","raised"]);return i.default.createElement(c.default,(0,r.default)({className:(0,u.default)(t.root,a),elevation:n?8:1},o))}t.styles=s,d.defaultProps={raised:!1};var m=(0,o.default)(s,{name:"MuiCard"})(d);t.default=m},200:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(201))},201:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(51)),l=n(a(144)),i=n(a(145)),u=n(a(0)),c=(n(a(4)),n(a(149))),o=(n(a(153)),a(150),n(a(148))),s={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};t.styles=s;var d=["video","audio","picture","iframe","img"];function m(e){var t=e.classes,a=e.className,n=e.component,o=e.image,s=e.src,m=e.style,f=(0,i.default)(e,["classes","className","component","image","src","style"]),p=-1!==d.indexOf(n),y=!p&&o?(0,l.default)({backgroundImage:'url("'.concat(o,'")')},m):m;return u.default.createElement(n,(0,l.default)({className:(0,c.default)(t.root,(0,r.default)({},t.media,p),a),style:y,src:p?o||s:void 0},f))}m.defaultProps={component:"div"};var f=(0,o.default)(s,{name:"MuiCardMedia"})(m);t.default=f},202:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),l=n(a(145)),i=n(a(0)),u=(n(a(4)),n(a(149))),c=(a(150),n(a(148))),o={root:{padding:16,"&:last-child":{paddingBottom:24}}};function s(e){var t=e.classes,a=e.className,n=e.component,c=(0,l.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,r.default)({className:(0,u.default)(t.root,a)},c))}t.styles=o,s.defaultProps={component:"div"};var d=(0,c.default)(o,{name:"MuiCardContent"})(s);t.default=d}}]);
//# sourceMappingURL=component---src-templates-general-js-589caeab3e17b15acb37.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),c=a(169),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(c.a,{title:"Not Found"},l.a.createElement("p",null,"Hey! You just hit a page that doesn't exist..."))},t}(l.a.Component);t.default=o},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(147),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(158),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},160:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),l=a(178),c=a.n(l),o=a(146),u=function(e){return i.a.createElement(o.StaticQuery,{query:s,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(c.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var s="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(53),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),l=a(159),c=a(146),o=(a(162),a(163),a(166)),u=a(172),s=a.n(u),m=function(e){var t=e.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(s.a,{style:{color:"#fff"}},e.name))}))},d=function(e){return r.a.createElement(c.StaticQuery,{query:"240237662",render:function(e){return r.a.createElement(m,{data:e})},data:o})},f=a(7),p=a.n(f),E=a(167),y=a(184),g=a.n(y),h=a(185),v=a.n(h),k=a(183),w=a.n(k),x=a(175),b=a.n(x),M=a(161),q=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return p()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onClick:this.toggleMenu},r.a.createElement(M.a,{style:{color:"#efefef"}})),r.a.createElement(w.a,{onClickAway:this.toggleMenu},r.a.createElement(g.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return r.a.createElement(c.Link,{key:e.name,to:e.link},r.a.createElement(v.a,null,e.name))}))))},t}(r.a.Component),S=function(e){return r.a.createElement(c.StaticQuery,{query:"709782962",render:function(t){return r.a.createElement(q,{active:e.active,data:t})},data:E})},T=a(189),C=a.n(T),L=a(171),P=a.n(L),Q=a(187),R=a.n(Q),A=a(186),G=a.n(A),j=a(157),B=a.n(j),F=a(188),U=a.n(F),I=a(176),D=a.n(I),J=function(e){return r.a.createElement(G.a,{id:"appBar"},r.a.createElement(R.a,null,r.a.createElement(P.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},r.a.createElement(P.a,{item:!0},r.a.createElement(U.a,{id:"logo",variant:"outlined",avatar:r.a.createElement(D.a,{id:"logoIcon"},r.a.createElement(M.c,null)),label:r.a.createElement(c.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),r.a.createElement(P.a,{item:!0},r.a.createElement(C.a,{smDown:!0},r.a.createElement(B.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},r.a.createElement(d,null))))),r.a.createElement(P.a,{item:!0},r.a.createElement(C.a,{mdUp:!0},r.a.createElement(S,null)))))},N=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(J,{data:e})},data:l})},O=a(190),Y=a.n(O),H=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,i=n.email,l=n.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{style:{marginTop:"48px",marginBottom:"24px"}}),r.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},r.a.createElement("span",null,r.a.createElement(B.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",i," – ",l))))},V=function(e){return r.a.createElement(c.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(H,{data:e})},data:l})},z=a(192),K=a.n(z),W=a(191),X=a(177),Z=(a(168),Object(X.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}));t.a=function(e){return r.a.createElement(X.MuiThemeProvider,{theme:Z},r.a.createElement(K.a,null),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(i.a,null),r.a.createElement(N,null),r.a.createElement(W.Grid,{style:{marginTop:"94px"}},r.a.createElement(W.Row,null,r.a.createElement(W.Col,{xs:12},e.title?r.a.createElement(B.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},e.title):null,e.children,r.a.createElement(V,null)))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-d88c5ac04c3b44a0e8cd.js.map
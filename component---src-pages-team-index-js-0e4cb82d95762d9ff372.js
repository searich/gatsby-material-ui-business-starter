(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return v});var n=a(0),r=a.n(n),i=a(146),l=a(157),o=a.n(l),s=(a(160),a(169)),c=a(3804),u=a.n(c),d=a(3806),f=a.n(d),m=a(3808),p=a.n(m),h=a(175),g=a.n(h),y=a(161),v="491800992";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(s.a,{title:"Meet the Team"},r.a.createElement(o.a,{paragraph:!0},"We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team. We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team. We are here to help! Let us know what we can do. And we're of course always interested to find new recruits to join our amazing team."),r.a.createElement(u.a,{cellHeight:500,cols:3},t.map(function(e){var t=e.node.frontmatter,a=t.path,n=t.title,l=t.image,o=t.jobtitle;return r.a.createElement(i.Link,{to:a},r.a.createElement(f.a,{key:a,cols:1},r.a.createElement("img",{src:l,alt:n}),r.a.createElement(p.a,{title:n,subtitle:o,actionIcon:r.a.createElement(g.a,{className:"teamIcon",style:{color:"rgba(255, 255, 255, 0.54)"}},r.a.createElement(y.d,null))})))})))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(147),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(158),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},158:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter",contact:{email:"peter@foxandgeese.com",phone:"503-724-8522"}}}}}},160:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),l=a(178),o=a.n(l),s=a(146),c=function(e){return i.a.createElement(s.StaticQuery,{query:u,render:function(t){var a=e.title||t.site.siteMetadata.title;return i.a.createElement(o.a,{htmlAttributes:{lang:"en"},title:a,titleTemplate:"%s - "+t.site.siteMetadata.title},e.children)},data:n})};c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var u="1175772"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Business Starter"}}}}},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(53),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},166:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},167:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Products",link:"/products"},{name:"Team",link:"/team"}]}}}}},168:function(e,t,a){},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),l=a(159),o=a(146),s=(a(162),a(163),a(166)),c=a(172),u=a.n(c),d=function(e){var t=e.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(o.Link,{key:e.name,to:e.link},r.a.createElement(u.a,{style:{color:"#fff"}},e.name))}))},f=function(e){return r.a.createElement(o.StaticQuery,{query:"240237662",render:function(e){return r.a.createElement(d,{data:e})},data:s})},m=a(7),p=a.n(m),h=a(167),g=a(184),y=a.n(g),v=a(185),E=a.n(v),w=a(183),b=a.n(w),k=a(175),P=a.n(k),x=a(161),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState(function(e){return{menuActive:!e.menuActive}})},a.state={menuActive:!1},a}return p()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.menuLinks;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{onClick:this.toggleMenu},r.a.createElement(x.a,{style:{color:"#efefef"}})),r.a.createElement(b.a,{onClickAway:this.toggleMenu},r.a.createElement(y.a,{open:this.state.menuActive,onClose:this.toggleMenu},e.map(function(e){return r.a.createElement(o.Link,{key:e.name,to:e.link},r.a.createElement(E.a,null,e.name))}))))},t}(r.a.Component),L=function(e){return r.a.createElement(o.StaticQuery,{query:"709782962",render:function(t){return r.a.createElement(M,{active:e.active,data:t})},data:h})},S=a(189),R=a.n(S),T=a(171),j=a.n(T),N=a(187),I=a.n(N),q=a(186),A=a.n(q),W=a(157),C=a.n(W),O=a(188),F=a.n(O),_=a(176),G=a.n(_),z=function(e){return r.a.createElement(A.a,{id:"appBar"},r.a.createElement(I.a,null,r.a.createElement(j.a,{container:!0,justify:"space-between",alignItems:"center",spacing:16},r.a.createElement(j.a,{item:!0},r.a.createElement(F.a,{id:"logo",variant:"outlined",avatar:r.a.createElement(G.a,{id:"logoIcon"},r.a.createElement(x.c,null)),label:r.a.createElement(o.Link,{to:"/"},e.data.site.siteMetadata.title.toUpperCase())})),r.a.createElement(j.a,{item:!0},r.a.createElement(R.a,{smDown:!0},r.a.createElement(C.a,{style:{color:"#efefef",flex:1},component:"span",variant:"caption"},r.a.createElement(f,null))))),r.a.createElement(j.a,{item:!0},r.a.createElement(R.a,{mdUp:!0},r.a.createElement(L,null)))))},H=function(e){return r.a.createElement(o.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(z,{data:e})},data:l})},B=a(190),Q=a.n(B),U=function(e){var t=e.data.site.siteMetadata,a=t.title,n=t.contact,i=n.email,l=n.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{style:{marginTop:"48px",marginBottom:"24px"}}),r.a.createElement("footer",{style:{marginBottom:"24px",whiteSpace:"nowrap"},id:"footer"},r.a.createElement("span",null,r.a.createElement(C.a,{variant:"caption",component:"span"},"©",(new Date).getFullYear()," ",a," – ",i," – ",l))))},D=function(e){return r.a.createElement(o.StaticQuery,{query:"4102418190",render:function(e){return r.a.createElement(U,{data:e})},data:l})},V=a(192),Y=a.n(V),J=a(191),X=a(177),K=(a(168),Object(X.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{useNextVariants:!0}}));t.a=function(e){return r.a.createElement(X.MuiThemeProvider,{theme:K},r.a.createElement(Y.a,null),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement(i.a,null),r.a.createElement(H,null),r.a.createElement(J.Grid,{style:{marginTop:"94px"}},r.a.createElement(J.Row,null,r.a.createElement(J.Col,{xs:12},e.title?r.a.createElement(C.a,{variant:"h2",gutterBottom:!0,style:{textAlign:"center"}},e.title):null,e.children,r.a.createElement(D,null)))))}},3804:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(3805))},3805:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),i=n(a(145)),l=n(a(0)),o=(n(a(4)),n(a(149))),s=(n(a(153)),a(150),n(a(148))),c={root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}};function u(e){var t=e.cellHeight,a=e.children,n=e.classes,s=e.className,c=e.cols,u=e.component,d=e.spacing,f=e.style,m=(0,i.default)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return l.default.createElement(u,(0,r.default)({className:(0,o.default)(n.root,s),style:(0,r.default)({margin:-d/2},f)},m),l.default.Children.map(a,function(e){if(!l.default.isValidElement(e))return null;var a=e.props.cols||1,n=e.props.rows||1;return l.default.cloneElement(e,{style:(0,r.default)({width:"".concat(100/c*a,"%"),height:"auto"===t?"auto":t*n+d,padding:d/2},e.props.style)})}))}t.styles=c,u.defaultProps={cellHeight:180,cols:2,component:"ul",spacing:4};var d=(0,s.default)(c,{name:"MuiGridList"})(u);t.default=d},3806:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(3807))},3807:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),i=n(a(145)),l=n(a(219)),o=n(a(151)),s=n(a(152)),c=n(a(154)),u=n(a(155)),d=n(a(156)),f=n(a(0)),m=(n(a(4)),n(a(149))),p=n(a(198)),h=n(a(221)),g=(a(150),n(a(148))),y={root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}};t.styles=y;var v=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,c.default)(this,(0,u.default)(t).call(this))).fit=function(){var t=e.imgElement;if(t&&t.complete){var a,n,r,i;if(t.width/t.height>t.parentNode.offsetWidth/t.parentNode.offsetHeight)(a=t.classList).remove.apply(a,(0,l.default)(e.props.classes.imgFullWidth.split(" "))),(n=t.classList).add.apply(n,(0,l.default)(e.props.classes.imgFullHeight.split(" ")));else(r=t.classList).remove.apply(r,(0,l.default)(e.props.classes.imgFullHeight.split(" "))),(i=t.classList).add.apply(i,(0,l.default)(e.props.classes.imgFullWidth.split(" ")));t.removeEventListener("load",e.fit)}},"undefined"!=typeof window&&(e.handleResize=(0,h.default)(function(){e.fit()},166)),e}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.ensureImageCover()}},{key:"componentDidUpdate",value:function(){this.ensureImageCover()}},{key:"componentWillUnmount",value:function(){this.handleResize.clear()}},{key:"ensureImageCover",value:function(){this.imgElement&&(this.imgElement.complete?this.fit():this.imgElement.addEventListener("load",this.fit))}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.classes,l=t.className,o=(t.cols,t.component),s=(t.rows,(0,i.default)(t,["children","classes","className","cols","component","rows"]));return f.default.createElement(o,(0,r.default)({className:(0,m.default)(n.root,l)},s),f.default.createElement(p.default,{target:"window",onResize:this.handleResize}),f.default.createElement("div",{className:n.tile},f.default.Children.map(a,function(t){return f.default.isValidElement(t)?"img"===t.type?f.default.cloneElement(t,{ref:function(t){e.imgElement=t}}):t:null})))}}]),t}(f.default.Component);v.defaultProps={cols:1,component:"li",rows:1};var E=(0,g.default)(y,{name:"MuiGridListTile"})(v);t.default=E},3808:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(3809))},3809:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(144)),i=n(a(51)),l=n(a(145)),o=n(a(0)),s=(n(a(4)),n(a(149))),c=n(a(148)),u=function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:e.mixins.gutters().paddingLeft,marginRight:e.mixins.gutters().paddingRight,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}};function d(e){var t,a,n=e.actionIcon,c=e.actionPosition,u=e.classes,d=e.className,f=e.subtitle,m=e.title,p=e.titlePosition,h=(0,l.default)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),g=n&&c,y=(0,s.default)(u.root,(t={},(0,i.default)(t,u.titlePositionBottom,"bottom"===p),(0,i.default)(t,u.titlePositionTop,"top"===p),(0,i.default)(t,u.rootSubtitle,f),t),d),v=(0,s.default)(u.titleWrap,(a={},(0,i.default)(a,u.titleWrapActionPosLeft,"left"===g),(0,i.default)(a,u.titleWrapActionPosRight,"right"===g),a));return o.default.createElement("div",(0,r.default)({className:y},h),o.default.createElement("div",{className:v},o.default.createElement("div",{className:u.title},m),f?o.default.createElement("div",{className:u.subtitle},f):null),n?o.default.createElement("div",{className:(0,s.default)(u.actionIcon,(0,i.default)({},u.actionIconActionPosLeft,"left"===g))},n):null)}t.styles=u,d.defaultProps={actionPosition:"right",titlePosition:"bottom"};var f=(0,c.default)(u,{name:"MuiGridListTileBar"})(d);t.default=f}}]);
//# sourceMappingURL=component---src-pages-team-index-js-0e4cb82d95762d9ff372.js.map
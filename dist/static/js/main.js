(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[1],{135:function(e,t,a){e.exports=a(259)},215:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=a(42),l=a(71);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(53),m=a(262),u={themeColor:"red",fontSize:14},h=Object(m.a)("CHANGE_THEME_COLOR",(function(e,t){return{themeColor:t.payload}}),u),p=Object(s.b)({themeColor:h,fontSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FONT_SIZE":return Object.assign({},e,{fontSize:t.fontSize});default:return e}}}),d=a(6),f=a(5),v=a(8),b=a(7),E=(a(91),a(46)),g=a.n(E),O=a(14),y=a(66),j=a(265),C=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"height-100 width-100"},r.a.createElement(O.c,null,Object(y.a)(this.props.route.children)))}}]),a}(r.a.Component),k=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"ChildOne")}}]),a}(r.a.Component),N=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("div",{className:"margin-bottom-20"},"TestADetail-One",r.a.createElement(i.b,{className:"margin-left-15",to:"/routers/routerone/one"},"show ChildOne")),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/routers/routerone/one",component:k}))))}}]),a}(r.a.Component),x=(a(57),a(28)),w=a.n(x),_=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).routerToDetailUrl=function(){n.props.history.push({pathname:"/routers/detailurl/Nicole"})},n.routerToDetailQuery=function(){n.props.history.push({pathname:"/routers/detailquerystate",query:{query_msg:" \u6211\u662f\u6765\u81ea\u524d\u4e00\u4e2a\u8def\u7531\u7684\u6d88\u606f\uff5equery"}})},n.routerToDetailState=function(){n.props.history.push({pathname:"/routers/detailquerystate",state:{state_msg:" \u6211\u662f\u6765\u81ea\u524d\u4e00\u4e2a\u8def\u7531\u7684\u6d88\u606f\uff5estate"}})},n.state={query:new URLSearchParams(n.props.location.search)},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"\u8def\u7531\u4f20\u53c2",this.state.query.get("name"),r.a.createElement("div",null,r.a.createElement(w.a,{type:"dashed",className:"margin-top-20",onClick:this.routerToDetailUrl},"\u8def\u7531\u8df3\u8f6c\u5e76\u4f20\u53c2-url")),r.a.createElement("div",null,r.a.createElement(w.a,{type:"dashed",className:"margin-top-20",onClick:this.routerToDetailQuery},"\u8def\u7531\u8df3\u8f6c\u5e76\u4f20\u53c2-query")),r.a.createElement("div",null,r.a.createElement(w.a,{type:"dashed",className:"margin-top-20",onClick:this.routerToDetailState},"\u8def\u7531\u8df3\u8f6c\u5e76\u4f20\u53c2-state")))}}]),a}(r.a.Component),S=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={query_msg:"",state_msg:""},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.props.location.query?this.setState({query_msg:this.props.location.query.query_msg}):this.props.location.state&&this.setState({state_msg:this.props.location.state.state_msg})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.query_msg?r.a.createElement("div",null,"DetailQuery",r.a.createElement("div",null,"\u8fd9\u662f\u8def\u7531\u63a5\u6536\u5230\u7684\u53c2\u6570-query\uff1a",r.a.createElement("span",{className:"color-red"},this.state.query_msg)),r.a.createElement("div",{className:"color-9 margin-top-20"},"\u53c2\u6570\u5730\u5740\u680f\u4e0d\u663e\u793a\uff0c\u5237\u65b0\u5730\u5740\u680f\uff0c\u53c2\u6570\u4e22\u5931")):this.state.state_msg?r.a.createElement("div",null,"DetailState",r.a.createElement("div",null,"\u8fd9\u662f\u8def\u7531\u63a5\u6536\u5230\u7684\u53c2\u6570-state\uff1a",r.a.createElement("span",{className:"color-red"},this.state.state_msg)),r.a.createElement("div",{className:"color-9 margin-top-20"},"\u53c2\u6570\u5730\u5740\u680f\u4e0d\u663e\u793a\uff0c\u5237\u65b0\u5730\u5740\u680f\uff0c\u53c2\u6570\u4e0d\u4e22\u5931")):r.a.createElement("div",null,"\u672a\u6536\u5230\u53c2\u6570\u54e6\uff5e"))}}]),a}(r.a.Component),M=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:""},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){this.props.match.params&&this.setState({name:this.props.match.params.name})}},{key:"render",value:function(){return r.a.createElement("div",null,"DetailUrl",r.a.createElement("div",null,"\u8fd9\u662f\u8def\u7531\u63a5\u6536\u5230\u7684name\uff1a",r.a.createElement("span",{className:"color-red"},this.state.name)))}}]),a}(r.a.Component),q=new(a(127).EventEmitter),z=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={msg:""},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this;q.addListener("emitMsg",(function(t){e.setState({msg:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Customer"),this.state.msg&&r.a.createElement("span",{className:"color-red margin-left-10"},"\u6536\u5230\u6765\u81eaemitter\u7684\u6d88\u606f----",this.state.msg))}}]),a}(r.a.Component),T=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).emitMsg=function(){q.emit("emitMsg","\u6211\u662fEmitter\u53d1\u51fa\u7684\u6d88\u606f\u5662\uff5e")},n.state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("span",{className:"margin-right-20"},"Emitter"),r.a.createElement(w.a,{shape:"round",type:"primary",onClick:this.emitMsg},"emit")),r.a.createElement(z,null))}}]),a}(r.a.Component),D=a(26),I=a.n(D),K=r.a.createContext({}),L=K.Provider,A=K.Consumer,H=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n){var r;return Object(d.a)(this,a),(r=t.call(this,e,n)).state={},r}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-theme"},r.a.createElement("div",null,"ConsumerDetail"),r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("span",{className:"color-f"},"OldConsumer context:",this.context.title)),r.a.createElement(A,null,(function(e){return r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("span",{className:"color-f"},"NewConsumer context:",e.msg))})))}}]),a}(r.a.Component);H.contextTypes={title:I.a.string,methodA:I.a.func};var P=H,B=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n){var r;return Object(d.a)(this,a),(r=t.call(this,e,n)).state={},r}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-f padding-20"},r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("span",null,"Consumer"),r.a.createElement("span",{className:"color-red"},"Consumer context:",this.context.title)),r.a.createElement(P,null))}}]),a}(r.a.Component);B.contextTypes={title:I.a.string,methodA:I.a.func};var R=B,U=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"getChildContext",value:function(){return{title:"producer-title",methodA:function(){return"producer-method"}}}}]),Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom-20"},"OldProducer"),r.a.createElement(R,null))}}]),a}(r.a.Component);U.childContextTypes={title:I.a.string,methodA:I.a.func};var W,F=U,G=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={msg:"\u6765\u81eaNewContext-Provider"},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(L,{value:{msg:this.state.msg}},r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom-20"},"NewProducer"),r.a.createElement(R,null)))}}]),a}(r.a.Component),Q=a(264),J=Object(Q.a)("CHANGE_THEME_COLOR"),Z=Object(l.b)((function(e){return{themeColor:e.themeColor.themeColor,fontSize:e.fontSize.fontSize}}),(function(e){return{setThemeColor:function(t){return e(J(t))},setFontSize:function(t){return e(function(e){return{type:"CHANGE_FONT_SIZE",fontSize:e}}(t))}}}))(W=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).colorBtnClick=function(){n.props.setThemeColor("green")},n.fontBtnClick=function(){n.props.setFontSize(18)},n.state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("p",{className:"margin-bottom-20"},"themeColor:",r.a.createElement("span",{className:"bg-theme fw padding-10 margin-10",style:{background:this.props.themeColor}},this.props.themeColor)),r.a.createElement(w.a,{type:"dashed",onClick:this.colorBtnClick},"\u4fee\u6539 themeColor \u4e3a green")),r.a.createElement("div",{className:"margin-bottom-20"},r.a.createElement("p",{className:"margin-bottom-20"},"fontSize:",r.a.createElement("span",{className:"bg-theme fw padding-10 margin-10",style:{fontSize:this.props.fontSize}},this.props.fontSize)),r.a.createElement(w.a,{type:"dashed",onClick:this.fontBtnClick},"\u4fee\u6539 fontSize \u4e3a 18")))}}]),a}(r.a.Component))||W,$=a(61);function V(){return r.a.createElement("div",null,"Component By Func")}var X,Y,ee=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).addListItem=function(){n.setState({list:[].concat(Object($.a)(n.state.list),[n.state.list.length+1])}),n.setState((function(e,t){}))},n.delListItem=function(){var e=n.state.list;e.pop(),n.setState({list:e})},n.state={list:[]},n}return Object(f.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.$fetch({url:"mockdata/list"}).then((function(t){e.setState({list:t.data.list||[]})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.list.map((function(e,t){return r.a.createElement("span",{className:"color-9 f-14 margin-left-10",key:t},e)}))),r.a.createElement("div",{className:"margin-top-20"},r.a.createElement(w.a,{className:"margin-bottom-10 margin-right-10",onClick:this.addListItem},"add"),r.a.createElement(w.a,{onClick:this.delListItem},"del")),r.a.createElement(V,null))}}]),a}(r.a.Component),te=Object(O.f)(ee),ae=(Y=X=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"margin-bottom-20"},"\u8fd9\u662f\u6765\u81eamixin\u7684\u6d88\u606f\uff1a",r.a.createElement("span",{className:"color-red"},this.props.mixinMsg)),r.a.createElement(w.a,{type:"dashed",onClick:this.props.alertMixinMsg},"mixin\u7684alert"))}}]),a}(r.a.Component),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={mixinMsg:"I'm from Mixin~",alertMixinMsg:function(){alert(n.state.mixinMsg)}},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y,Object.assign({},this.props,this.state)))}}]),a}(r.a.Component)||X),ne=a(87),re=a.n(ne),oe=(a(215),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:re.a.bgred},"\u5c40\u90e8css"),r.a.createElement("div",{className:"red"},"font"),r.a.createElement("div",{className:"f-20 margin-top-20  ".concat(re.a["color-green"])},"\u5c40\u90e8\u548c\u5168\u5c40\u6df7\u5408css"))}}]),a}(r.a.Component)),ce=Object(O.f)(oe),ie=r.a.lazy((function(){return a.e(0).then(a.bind(null,266))})),le=[{path:"/",exact:!0,component:ie,redirect:"/home"},{path:"/home",name:"home",component:ie,exact:!0,meta:{title:"Home",icon:""}},{path:"/index",component:ie,redirect:"/home"},{path:"/mock",component:te,exact:!0,meta:{title:"mock",icon:""}},{path:"/mixin",component:ae,exact:!0,meta:{title:"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668mixin",icon:""}},{path:"/css",name:"css",component:C,meta:{title:"css",icon:""},children:[{path:"/css/cssmodule",name:"cssmodule",component:ce,meta:{title:"css\u6a21\u5757\u5316"}}]},{path:"/routers",name:"routers",component:C,meta:{title:"\u8def\u7531",icon:""},children:[{path:"/routers/routerone",name:"routerone",component:N,meta:{title:"\u7ec4\u4ef6\u5185\u5d4c\u5957\u5b50\u8def\u7531"}},{path:"/routers/routerone/one",name:"routeroneone",component:k},{path:"/routers/routertwo",name:"routertwo",component:_,meta:{title:"\u8def\u7531\u4f20\u53c2"}},{path:"/routers/detailquerystate",name:"detailquerystate",component:S},{path:"/routers/detailurl/:name",name:"detailurl",component:M}]},{path:"/communicate",name:"communicate",component:C,meta:{title:"\u7ec4\u4ef6\u901a\u4fe1",icon:""},children:[{path:"/communicate/emitter",name:"emitter",component:T,meta:{title:"\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0femit"}},{path:"/communicate/context",name:"context",component:C,meta:{title:"context(\u751f\u4ea7\u6d88\u8d39\u8005\u6a21\u5f0f)"},children:[{path:"/communicate/context/old",name:"oldcontext",component:F,meta:{title:"\u8001\u7248context"}},{path:"/communicate/context/new",name:"newcontext",component:G,meta:{title:"\u65b0\u7248context"}}]},{path:"/communicate/redux",name:"reduxpageone",component:C,meta:{title:"redux"},children:[{path:"/communicate/redux/pageone",name:"reduxpageone",component:Z,meta:{title:"demo-one"}}]}]}],se=(a(216),a(56)),me=a.n(se),ue=a(263),he=me.a.SubMenu,pe=g.a.Sider,de=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).tabClick=function(e){n.props.tabClick&&n.props.tabClick(e)},n.subMenuOpenCahnge=function(e){},n.state={},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(pe,{width:300,className:"height-100 site-layout-background"},r.a.createElement(me.a,{mode:"inline",defaultOpenKeys:["/home"],selectedKeys:this.props.selectedKeys,style:{height:"100%",borderRight:0},onClick:this.tabClick,onOpenChange:this.subMenuOpenCahnge},this.props.routes.map((function(e){var t;return e.meta&&(t=e.children&&e.children.length?r.a.createElement(he,{key:e.path,icon:r.a.createElement(ue.a,null),title:e.meta.title||""},e.children.map((function(e){var t;return e.meta&&(t=e.children&&e.children.length?r.a.createElement(he,{key:e.path,title:e.meta.title||""},e.children.map((function(e){var t;return e.meta&&(t=r.a.createElement(me.a.Item,{key:e.path},e.meta.title||"")),t}))):r.a.createElement(me.a.Item,{key:e.path},e.meta.title||"")),t}))):r.a.createElement(me.a.Item,{key:e.path,icon:r.a.createElement(ue.a,null)},e.meta.title||"")),t})))))}}]),a}(r.a.Component),fe=g.a.Header,ve=g.a.Content,be=Object(j.a)({scriptUrl:["//at.alicdn.com/t/font_1950826_tnscspygocc.js","//at.alicdn.com/t/font_1950826_hm6f8vn9sl8.js","//at.alicdn.com/t/font_1950826_9eb5cbnc328.js","//at.alicdn.com/t/font_1950826_0u7twki9mvrm.js"]}),Ee=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).menuClick=function(e){var t=e.key||"/home";n.setState((function(e){return{selectedKeys:[t],openKeys:["/"+t.split("/")[1]]}})),n.props.history&&n.props.history.push(t)},n.state={selectedKeys:[n.props.location.pathname]||!1,openKeys:["/"+n.props.location.pathname.split("/")[1]]},n}return Object(f.a)(a,[{key:"componentWillReceiveProps",value:function(){"/css/cssmodule"===this.props.history.location.pathname&&this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement("div",{className:"flex-column height-100"},r.a.createElement(g.a,{className:"width-100 height-100"},r.a.createElement(fe,{className:"header f-20 color-f"},r.a.createElement(be,{type:"icon-quhaidaowan",className:"header-icon margin-top-15 margin-right-20"}),"React Demo"),r.a.createElement(g.a,null,r.a.createElement(de,{routes:le,selectedKeys:this.state.selectedKeys,openKeys:this.state.openKeys,tabClick:this.menuClick}),r.a.createElement(g.a,{style:{padding:"0 24px 24px"}},r.a.createElement(ve,{className:"site-layout-background padding-24"},r.a.createElement("div",{className:"width-100 height-100 flex-column"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(O.c,null,Object(y.a)(le)))))))))}}]),a}(r.a.Component),ge=Object(O.f)(Ee),Oe=(a(238),a(239),a(240),a(129)),ye=a.n(Oe),je=a(130),Ce=a.n(je),ke=function(){return window.location.port?window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/":window.location.protocol+"//"+window.location.hostname+"/"},Ne=function(e){return function(e){if(e){for(var t in e){var a=e[t];"undefined"!==typeof a&&""!==a&&null!==a||delete e[t]}}}(e.data||{}),new Promise((function(t,a){var n=e.method?e.method.toLowerCase():"get",r={url:ke()+e.url,baseURL:"",method:n,timeout:e.timeout||1e6,headers:e.headers||{"Content-Type":"application/json"}};"post"===n?(r.data=e.data||"",e.noUseQs||(r.data=Ce.a.stringify(r.data))):r.params=e.data||"",ye()(r).then((function(e){var n,r;e.headers&&e.headers.token&&(n="token",r=e.headers.token,n&&("object"==typeof r&&(r=JSON.stringify(r)),window.localStorage.setItem("".concat("Nicole_react","+").concat(n),r)));var o=e.data;"object"==typeof o?0===o.code?t(o):(o.code,a(o)):a("\u975e\u6cd5\u8bf7\u6c42")})).catch((function(e){a(e)}))}))};r.a.Component.prototype.$fetch=Ne;var xe=Object(s.c)(p);c.a.render(r.a.createElement(l.a,{store:xe},r.a.createElement(i.a,null,r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){e.exports={bgred:"test_bgred__1-z_P","color-green":"test_color-green__2ZOqf"}}},[[135,21,3,2,5,15,13,9,10,8,11,12,16,14,4,6,7,17,18,19,20,22]]]);
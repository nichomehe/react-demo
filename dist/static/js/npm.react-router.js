(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[16],{14:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return A})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return E})),n.d(e,"f",(function(){return k}));var r=n(31),o=n(0),i=n.n(o),a=(n(26),n(35)),c=n(85),u=n(32),p=n(9),s=n(86),l=n.n(s),f=(n(41),n(25)),h=n(45),m=n.n(h),d=function(t){var e=Object(c.a)();return e.displayName=t,e}("Router-History"),v=function(t){var e=Object(c.a)();return e.displayName=t,e}("Router"),y=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(v.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i.a.Component);i.a.Component;i.a.Component;var g={},x=0;function E(t,e){void 0===e&&(e={}),("string"===typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,p=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=g[n]||(g[n]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,e),keys:o};return x<1e4&&(r[t]=i,x++),i}(n,{end:i,strict:c,sensitive:p}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var s=u[0],f=u.slice(1),h=t===s;return i&&!h?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:h,params:a.reduce((function(t,e,n){return t[e.name]=f[n],t}),{})}}),null)}var b=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(v.Consumer,null,(function(e){e||Object(u.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?E(n.pathname,t.props):e.match,o=Object(p.a)({},e,{location:n,match:r}),a=t.props,c=a.children,s=a.component,l=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(v.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:s?i.a.createElement(s,o):l?l(o):null:"function"===typeof c?c(o):null)}))},e}(i.a.Component);function C(t){return"/"===t.charAt(0)?t:"/"+t}function w(t,e){if(!t)return e;var n=C(t);return 0!==e.pathname.indexOf(n)?e:Object(p.a)({},e,{pathname:e.pathname.substr(n.length)})}function j(t){return"string"===typeof t?t:Object(a.e)(t)}function O(t){return function(){Object(u.a)(!1)}}function R(){}i.a.Component;var A=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(v.Consumer,null,(function(e){e||Object(u.a)(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?E(o.pathname,Object(p.a)({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);function k(t){var e="withRouter("+(t.displayName||t.name)+")",n=function(e){var n=e.wrappedComponentRef,r=Object(f.a)(e,["wrappedComponentRef"]);return i.a.createElement(v.Consumer,null,(function(e){return e||Object(u.a)(!1),i.a.createElement(t,Object(p.a)({},r,e,{ref:n}))}))};return n.displayName=e,n.WrappedComponent=t,m()(n,t)}i.a.useContext},145:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},86:function(t,e,n){var r=n(145);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",s=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],f=n[1],h=n.index;if(c+=t.slice(a,h),a=h+l.length,f)c+=f[1];else{var m=t[a],d=n[2],v=n[3],y=n[4],g=n[5],x=n[6],E=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=m&&m!==d,C="+"===x||"*"===x,w="?"===x||"*"===x,j=n[2]||s,O=y||g;r.push({name:v||i++,prefix:d||"",delimiter:j,optional:w,repeat:C,partial:b,asterisk:!!E,pattern:O?p(O):E?".*":"[^"+u(j)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,p=0;p<t.length;p++){var s=t[p];if("string"!==typeof s){var l,f=c[s.name];if(null==f){if(s.optional){s.partial&&(i+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(r(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=u(f[h]),!n[p].test(l))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?s.prefix:s.delimiter)+l}}else{if(l=s.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(f),!n[p].test(l))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+l+'"');i+=s.prefix+l}}else i+=s}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function s(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function f(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var p=t[c];if("string"===typeof p)a+=u(p);else{var f=u(p.prefix),h="(?:"+p.pattern+")";e.push(p),p.repeat&&(h+="(?:"+f+h+")*"),a+=h=p.optional?p.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(n.delimiter||"/"),d=a.slice(-m.length)===m;return o||(a=(d?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&d?"":"(?="+m+"|$)",s(new RegExp("^"+a,l(n)),e)}function h(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],e,n).source);return s(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return f(i(t,n),e,n)}(t,e,n)}}}]);
(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[8],{131:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(126);function i(e){var t=[];return o.a.Children.forEach(e,(function(e){t.push(e)})),t}function s(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function u(e,t,n){var r=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var c=n(12),l=n.n(c),p=n(89),f={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},y=function(e){function t(){return d(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),v(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){f.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){f.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){f.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=l.a.findDOMNode(this),o=this.props,a=o.transitionName,i="object"===typeof a;this.stop();var s=function(){n.stopper=null,t()};if((p.b||!o.animation[e])&&a&&o[h[e]]){var u=i?a[e]:a+"-"+e,c=u+"-active";i&&a[e+"Active"]&&(c=a[e+"Active"]),this.stopper=Object(p.a)(r,{name:u,active:c},s)}else this.stopper=o.animation[e](r,s)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(o.a.Component),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var w="rc_animate_"+Date.now();function A(e){var t=e.children;return o.a.isValidElement(t)&&!t.key?o.a.cloneElement(t,{key:w}):t}function k(){}var S=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return L.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:i(A(e))},n.childrenRefs={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=i(A(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){t.stop(e)}));var a=r.showProp,c=this.currentlyAnimatingKeys,l=r.exclusive?i(A(r)):this.state.children,p=[];a?(l.forEach((function(e){var t,r,i,u=e&&s(n,e.key),c=void 0;(c=u&&u.props[a]||!e.props[a]?u:o.a.cloneElement(u||e,(i=!0,(r=a)in(t={})?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t)))&&p.push(c)})),n.forEach((function(e){e&&s(l,e.key)||p.push(e)}))):p=function(e,t){var n=[],r={},o=[];return e.forEach((function(e){e&&s(t,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)})),t.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(r,e.key)&&(n=n.concat(r[e.key])),n.push(e)})),n=n.concat(o)}(l,n),this.setState({children:p}),n.forEach((function(e){var n=e&&e.key;if(!e||!c[n]){var r=e&&s(l,n);if(a){var o=e.props[a];if(r)!u(l,n,a)&&o&&t.keysToEnter.push(n);else o&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}})),l.forEach((function(e){var r=e&&e.key;if(!e||!c[r]){var o=e&&s(n,r);if(a){var i=e.props[a];if(o)!u(n,r,a)&&i&&t.keysToLeave.push(r);else i&&t.keysToLeave.push(r)}else o||t.keysToLeave.push(r)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?u(e,t,n):s(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map((function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return o.a.createElement(y,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)})));var a=t.component;if(a){var i=t;return"string"===typeof a&&(i=E({className:t.className,style:t.style},t.componentProps)),o.a.createElement(a,i,r)}return r[0]||null}}]),t}(o.a.Component);S.isAnimate=!0,S.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:k,onEnter:k,onLeave:k,onAppear:k};var L=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var o=i(A(r));e.isValidChildByKey(o,t)?"appear"===n?f.allowAppearCallback(r)&&(r.onAppear(t),r.onEnd(t,!0)):f.allowEnterCallback(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r=i(A(n));if(e.isValidChildByKey(r,t))e.performEnter(t);else{var o=function(){f.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};!function(e,t,n){var r=e.length===t.length;return r&&e.forEach((function(e,o){var a=t[o];e&&a&&(e&&!a||!e&&a||e.key!==a.key||n&&e.props[n]!==a.props[n])&&(r=!1)})),r}(e.state.children,r,n.showProp)?e.setState({children:r},o):o()}}}};t.a=Object(a.a)(S)},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.genCSSMotion=f;var a=l(n(0)),i=l(n(213)),s=l(n(3)),u=l(n(44)),c=n(214);function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e,n=!!a.default.forwardRef;function l(e){return!(!e.motionName||!t)}"object"===typeof e&&(t=e.transitionSupport,n="forwardRef"in e?e.forwardRef:n);var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onDomUpdate=function(){var t=e.state,n=t.status,r=t.newStatus,o=e.props,a=o.onAppearStart,i=o.onEnterStart,s=o.onLeaveStart,u=o.onAppearActive,c=o.onEnterActive,p=o.onLeaveActive,f=o.motionAppear,v=o.motionEnter,d=o.motionLeave;if(l(e.props)){var m=e.getElement();e.$cacheEle!==m&&(e.removeEventListener(e.$cacheEle),e.addEventListener(m),e.$cacheEle=m),r&&"appear"===n&&f?e.updateStatus(a,null,null,(function(){e.updateActiveStatus(u,"appear")})):r&&"enter"===n&&v?e.updateStatus(i,null,null,(function(){e.updateActiveStatus(c,"enter")})):r&&"leave"===n&&d&&e.updateStatus(s,null,null,(function(){e.updateActiveStatus(p,"leave")}))}},e.onMotionEnd=function(t){var n=e.state,r=n.status,o=n.statusActive,a=e.props,i=a.onAppearEnd,s=a.onEnterEnd,u=a.onLeaveEnd;"appear"===r&&o?e.updateStatus(i,{status:"none"},t):"enter"===r&&o?e.updateStatus(s,{status:"none"},t):"leave"===r&&o&&e.updateStatus(u,{status:"none"},t)},e.setNodeRef=function(t){var n=e.props.internalRef;e.node=t,"function"===typeof n?n(t):n&&"current"in n&&(n.current=t)},e.getElement=function(){try{return(0,i.default)(e.node||e)}catch(t){return e.$cacheEle}},e.addEventListener=function(t){t&&(t.addEventListener(c.transitionEndName,e.onMotionEnd),t.addEventListener(c.animationEndName,e.onMotionEnd))},e.removeEventListener=function(t){t&&(t.removeEventListener(c.transitionEndName,e.onMotionEnd),t.removeEventListener(c.animationEndName,e.onMotionEnd))},e.updateStatus=function(t,n,o,a){var i=t?t(e.getElement(),o):null;if(!1!==i&&!e._destroyed){var s=void 0;a&&(s=function(){e.nextFrame(a)}),e.setState(r({statusStyle:"object"===typeof i?i:null,newStatus:!1},n),s)}},e.updateActiveStatus=function(t,n){e.nextFrame((function(){if(e.state.status===n){var r=e.props.motionDeadline;e.updateStatus(t,{statusActive:!0}),r>0&&setTimeout((function(){e.onMotionEnd({deadline:!0})}),r)}}))},e.nextFrame=function(t){e.cancelNextFrame(),e.raf=(0,u.default)(t)},e.cancelNextFrame=function(){e.raf&&(u.default.cancel(e.raf),e.raf=null)},e.state={status:"none",statusActive:!1,newStatus:!1,statusStyle:null},e.$cacheEle=null,e.node=null,e.raf=null,e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.onDomUpdate()}},{key:"componentDidUpdate",value:function(){this.onDomUpdate()}},{key:"componentWillUnmount",value:function(){this._destroyed=!0,this.removeEventListener(this.$cacheEle),this.cancelNextFrame()}},{key:"render",value:function(){var e,t=this.state,n=t.status,o=t.statusActive,a=t.statusStyle,i=this.props,u=i.children,f=i.motionName,v=i.visible,d=i.removeOnLeave,m=i.leavedClassName,h=i.eventProps;return u?"none"!==n&&l(this.props)?u(r({},h,{className:(0,s.default)((e={},p(e,(0,c.getTransitionName)(f,n),"none"!==n),p(e,(0,c.getTransitionName)(f,n+"-active"),"none"!==n&&o),p(e,f,"string"===typeof f),e)),style:a}),this.setNodeRef):v?u(r({},h),this.setNodeRef):d?null:u(r({},h,{className:m}),this.setNodeRef):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,r=t.status;if(!l(e))return{};var o=e.visible,a=e.motionAppear,i=e.motionEnter,s=e.motionLeave,u=e.motionLeaveImmediately,c={prevProps:e};return("appear"===r&&!a||"enter"===r&&!i||"leave"===r&&!s)&&(c.status="none",c.statusActive=!1,c.newStatus=!1),!n&&o&&a&&(c.status="appear",c.statusActive=!1,c.newStatus=!0),n&&!n.visible&&o&&i&&(c.status="enter",c.statusActive=!1,c.newStatus=!0),(n&&n.visible&&!o&&s||!n&&u&&!o&&s)&&(c.status="leave",c.statusActive=!1,c.newStatus=!0),c}}]),t}(a.default.Component);return f.defaultProps={visible:!0,motionEnter:!0,motionAppear:!0,motionLeave:!0,removeOnLeave:!0},n?a.default.forwardRef((function(e,t){return a.default.createElement(f,r({internalRef:t},e))})):f}t.default=f(c.supportTransition)},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getVendorPrefixes=a,t.getVendorPrefixedEventName=c,t.getTransitionName=function(e,t){if(!e)return null;if("object"===typeof e){var n=t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}));return e[n]}return e+"-"+t};var r=!("undefined"===typeof window||!window.document||!window.document.createElement);function o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function a(e,t){var n={animationend:o("Animation","AnimationEnd"),transitionend:o("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var i=a(r,"undefined"!==typeof window?window:{}),s={};r&&(s=document.createElement("div").style);var u={};function c(e){if(u[e])return u[e];var t=i[e];if(t)for(var n=Object.keys(t),r=n.length,o=0;o<r;o+=1){var a=n[o];if(Object.prototype.hasOwnProperty.call(t,a)&&a in s)return u[e]=t[a],u[e]}return""}var l=t.animationEndName=c("animationend"),p=t.transitionEndName=c("transitionend");t.supportTransition=!(!l||!p)},73:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(70),i=n(3),s=n.n(i),u=n(44),c=n.n(u),l=!("undefined"===typeof window||!window.document||!window.document.createElement);function p(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}var f=function(e,t){var n={animationend:p("Animation","AnimationEnd"),transitionend:p("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}(l,"undefined"!==typeof window?window:{}),v={};l&&(v=document.createElement("div").style);var d={};function m(e){if(d[e])return d[e];var t=f[e];if(t)for(var n=Object.keys(t),r=n.length,o=0;o<r;o+=1){var a=n[o];if(Object.prototype.hasOwnProperty.call(t,a)&&a in v)return d[e]=t[a],d[e]}return""}var h=m("animationend"),y=m("transitionend"),E=!(!h||!y);function b(e,t){return e?"object"===typeof e?e[t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:e+"-"+t:null}var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=e,n=!!o.a.forwardRef;function r(e){return!(!e.motionName||!t)}"object"===typeof e&&(t=e.transitionSupport,n="forwardRef"in e?e.forwardRef:n);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onDomUpdate=function(){var t=e.state,n=t.status,o=t.newStatus,a=e.props,i=a.onAppearStart,s=a.onEnterStart,u=a.onLeaveStart,c=a.onAppearActive,l=a.onEnterActive,p=a.onLeaveActive,f=a.motionAppear,v=a.motionEnter,d=a.motionLeave;if(r(e.props)){var m=e.getElement();e.$cacheEle!==m&&(e.removeEventListener(e.$cacheEle),e.addEventListener(m),e.$cacheEle=m),o&&"appear"===n&&f?e.updateStatus(i,null,null,(function(){e.updateActiveStatus(c,"appear")})):o&&"enter"===n&&v?e.updateStatus(s,null,null,(function(){e.updateActiveStatus(l,"enter")})):o&&"leave"===n&&d&&e.updateStatus(u,null,null,(function(){e.updateActiveStatus(p,"leave")}))}},e.onMotionEnd=function(t){var n=e.state,r=n.status,o=n.statusActive,a=e.props,i=a.onAppearEnd,s=a.onEnterEnd,u=a.onLeaveEnd;"appear"===r&&o?e.updateStatus(i,{status:"none"},t):"enter"===r&&o?e.updateStatus(s,{status:"none"},t):"leave"===r&&o&&e.updateStatus(u,{status:"none"},t)},e.setNodeRef=function(t){var n=e.props.internalRef;e.node=t,"function"===typeof n?n(t):n&&"current"in n&&(n.current=t)},e.getElement=function(){try{return Object(a.a)(e.node||e)}catch(t){return e.$cacheEle}},e.addEventListener=function(t){t&&(t.addEventListener(y,e.onMotionEnd),t.addEventListener(h,e.onMotionEnd))},e.removeEventListener=function(t){t&&(t.removeEventListener(y,e.onMotionEnd),t.removeEventListener(h,e.onMotionEnd))},e.updateStatus=function(t,n,r,o){var a=t?t(e.getElement(),r):null;if(!1!==a&&!e._destroyed){var i=void 0;o&&(i=function(){e.nextFrame(o)}),e.setState(w({statusStyle:"object"===typeof a?a:null,newStatus:!1},n),i)}},e.updateActiveStatus=function(t,n){e.nextFrame((function(){if(e.state.status===n){var r=e.props.motionDeadline;e.updateStatus(t,{statusActive:!0}),r>0&&setTimeout((function(){e.onMotionEnd({deadline:!0})}),r)}}))},e.nextFrame=function(t){e.cancelNextFrame(),e.raf=c()(t)},e.cancelNextFrame=function(){e.raf&&(c.a.cancel(e.raf),e.raf=null)},e.state={status:"none",statusActive:!1,newStatus:!1,statusStyle:null},e.$cacheEle=null,e.node=null,e.raf=null,e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),A(t,[{key:"componentDidMount",value:function(){this.onDomUpdate()}},{key:"componentDidUpdate",value:function(){this.onDomUpdate()}},{key:"componentWillUnmount",value:function(){this._destroyed=!0,this.removeEventListener(this.$cacheEle),this.cancelNextFrame()}},{key:"render",value:function(){var e,t=this.state,n=t.status,o=t.statusActive,a=t.statusStyle,i=this.props,u=i.children,c=i.motionName,l=i.visible,p=i.removeOnLeave,f=i.leavedClassName,v=i.eventProps;return u?"none"!==n&&r(this.props)?u(w({},v,{className:s()((e={},k(e,b(c,n),"none"!==n),k(e,b(c,n+"-active"),"none"!==n&&o),k(e,c,"string"===typeof c),e)),style:a}),this.setNodeRef):l?u(w({},v),this.setNodeRef):p?null:u(w({},v,{className:f}),this.setNodeRef):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,o=t.status;if(!r(e))return{};var a=e.visible,i=e.motionAppear,s=e.motionEnter,u=e.motionLeave,c=e.motionLeaveImmediately,l={prevProps:e};return("appear"===o&&!i||"enter"===o&&!s||"leave"===o&&!u)&&(l.status="none",l.statusActive=!1,l.newStatus=!1),!n&&a&&i&&(l.status="appear",l.statusActive=!1,l.newStatus=!0),n&&!n.visible&&a&&s&&(l.status="enter",l.statusActive=!1,l.newStatus=!0),(n&&n.visible&&!a&&u||!n&&c&&!a&&u)&&(l.status="leave",l.statusActive=!1,l.newStatus=!0),l}}]),t}(o.a.Component);return i.defaultProps={visible:!0,motionEnter:!0,motionAppear:!0,motionLeave:!0,removeOnLeave:!0},n?o.a.forwardRef((function(e,t){return o.a.createElement(i,w({internalRef:t},e))})):i}(E)}}]);
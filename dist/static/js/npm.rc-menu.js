(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"SubMenu",(function(){return de})),n.d(t,"Item",(function(){return ze})),n.d(t,"MenuItem",(function(){return ze})),n.d(t,"MenuItemGroup",(function(){return Ve})),n.d(t,"ItemGroup",(function(){return Ve})),n.d(t,"Divider",(function(){return He}));var o=n(1),r=n(15),i=n(16),s=n(13),a=n(18),c=n(17),l=n(11),u=n(0),p=n.n(u),f=n(43),d=n(47),v=n(9),h=n(34),y=n(68),b=n(60),m=n.n(b),O=n(3),g=n.n(O),M=n(22),j=n(21);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=/iPhone/i,S=/iPod/i,D=/iPad/i,P=/\bAndroid(?:.+)Mobile\b/i,k=/Android/i,w=/\bAndroid(?:.+)SD4930UR\b/i,E=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,x=/Windows Phone/i,R=/\bWindows(?:.+)ARM\b/i,N=/BlackBerry/i,A=/BB10/i,T=/Opera Mini/i,F=/\b(CriOS|Chrome)(?:.+)Mobile/i,W=/Mobile(?:.+)Firefox\b/i;function z(e,t){return e.test(t)}function L(e){var t=e||("undefined"!==typeof navigator?navigator.userAgent:""),n=t.split("[FBAN");if("undefined"!==typeof n[1]){var o=n;t=Object(j.a)(o,1)[0]}if("undefined"!==typeof(n=t.split("Twitter"))[1]){var r=n;t=Object(j.a)(r,1)[0]}var i={apple:{phone:z(I,t)&&!z(x,t),ipod:z(S,t),tablet:!z(I,t)&&z(D,t)&&!z(x,t),device:(z(I,t)||z(S,t)||z(D,t))&&!z(x,t)},amazon:{phone:z(w,t),tablet:!z(w,t)&&z(E,t),device:z(w,t)||z(E,t)},android:{phone:!z(x,t)&&z(w,t)||!z(x,t)&&z(P,t),tablet:!z(x,t)&&!z(w,t)&&!z(P,t)&&(z(E,t)||z(k,t)),device:!z(x,t)&&(z(w,t)||z(E,t)||z(P,t)||z(k,t))||z(/\bokhttp\b/i,t)},windows:{phone:z(x,t),tablet:z(R,t),device:z(x,t)||z(R,t)},other:{blackberry:z(N,t),blackberry10:z(A,t),opera:z(T,t),firefox:z(W,t),chrome:z(F,t),device:z(N,t)||z(A,t)||z(T,t)||z(W,t)||z(F,t)},any:null,phone:null,tablet:null};return i.any=i.apple.device||i.android.device||i.windows.device||i.other.device,i.phone=i.apple.phone||i.android.phone||i.windows.phone,i.tablet=i.apple.tablet||i.android.tablet||i.windows.tablet,i}var U=K(K({},L()),{},{isMobile:L});function V(){}function B(e,t,n){var o=t||"";return e.key||"".concat(o,"item_").concat(n)}function H(e){return"".concat(e,"-menu-")}function G(e,t){var n=-1;p.a.Children.forEach(e,(function(e){n+=1,e&&e.type&&e.type.isMenuItemGroup?p.a.Children.forEach(e.props.children,(function(e){t(e,n+=1)})):t(e,n)}))}var $=["defaultSelectedKeys","selectedKeys","defaultOpenKeys","openKeys","mode","getPopupContainer","onSelect","onDeselect","onDestroy","openTransitionName","openAnimation","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","triggerSubMenuAction","level","selectable","multiple","onOpenChange","visible","focusable","defaultActiveFirst","prefixCls","inlineIndent","parentMenu","title","rootPrefixCls","eventKey","active","onItemHover","onTitleMouseEnter","onTitleMouseLeave","onTitleClick","popupAlign","popupOffset","isOpen","renderMenuItem","manualRef","subMenuKey","disabled","index","isSelected","store","activeKey","builtinPlacements","overflowedIndicator","motion","attribute","value","popupClassName","inlineCollapsed","menu","theme","itemIcon","expandIcon"],_=function(e){var t=e&&"function"===typeof e.getBoundingClientRect&&e.getBoundingClientRect().width;return t&&(t=+t.toFixed(6)),t||0},J=function(e,t,n){e&&"object"===Object(M.a)(e.style)&&(e.style[t]=n)},q=n(10),X=n(19),Y=n(12),Z=n.n(Y),Q=n(69),ee=n(72),te=n(73),ne={adjustX:1,adjustY:1},oe={topLeft:{points:["bl","tl"],overflow:ne,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ne,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:ne,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:ne,offset:[4,0]}},re={topLeft:{points:["bl","tl"],overflow:ne,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:ne,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:ne,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:ne,offset:[4,0]}};function ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=0,le={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"},ue=function(e,t,n){var r=H(t),i=e.getState();e.setState({defaultActiveFirst:ae(ae({},i.defaultActiveFirst),{},Object(o.a)({},r,n))})},pe=function(e){Object(a.a)(n,e);var t=ie(n);function n(e){var o;Object(r.a)(this,n),(o=t.call(this,e)).onDestroy=function(e){o.props.onDestroy(e)},o.onKeyDown=function(e){var t=e.keyCode,n=o.menuInstance,r=o.props,i=r.isOpen,s=r.store;if(t===h.a.ENTER)return o.onTitleClick(e),ue(s,o.props.eventKey,!0),!0;if(t===h.a.RIGHT)return i?n.onKeyDown(e):(o.triggerOpenChange(!0),ue(s,o.props.eventKey,!0)),!0;if(t===h.a.LEFT){var a;if(!i)return;return(a=n.onKeyDown(e))||(o.triggerOpenChange(!1),a=!0),a}return!i||t!==h.a.UP&&t!==h.a.DOWN?void 0:n.onKeyDown(e)},o.onOpenChange=function(e){o.props.onOpenChange(e)},o.onPopupVisibleChange=function(e){o.triggerOpenChange(e,e?"mouseenter":"mouseleave")},o.onMouseEnter=function(e){var t=o.props,n=t.eventKey,r=t.onMouseEnter,i=t.store;ue(i,o.props.eventKey,!1),r({key:n,domEvent:e})},o.onMouseLeave=function(e){var t=o.props,n=t.parentMenu,r=t.eventKey,i=t.onMouseLeave;n.subMenuInstance=Object(s.a)(o),i({key:r,domEvent:e})},o.onTitleMouseEnter=function(e){var t=o.props,n=t.eventKey,r=t.onItemHover,i=t.onTitleMouseEnter;r({key:n,hover:!0}),i({key:n,domEvent:e})},o.onTitleMouseLeave=function(e){var t=o.props,n=t.parentMenu,r=t.eventKey,i=t.onItemHover,a=t.onTitleMouseLeave;n.subMenuInstance=Object(s.a)(o),i({key:r,hover:!1}),a({key:r,domEvent:e})},o.onTitleClick=function(e){var t=Object(s.a)(o).props;t.onTitleClick({key:t.eventKey,domEvent:e}),"hover"!==t.triggerSubMenuAction&&(o.triggerOpenChange(!t.isOpen,"click"),ue(t.store,o.props.eventKey,!1))},o.onSubMenuClick=function(e){"function"===typeof o.props.onClick&&o.props.onClick(o.addKeyPath(e))},o.onSelect=function(e){o.props.onSelect(e)},o.onDeselect=function(e){o.props.onDeselect(e)},o.getPrefixCls=function(){return"".concat(o.props.rootPrefixCls,"-submenu")},o.getActiveClassName=function(){return"".concat(o.getPrefixCls(),"-active")},o.getDisabledClassName=function(){return"".concat(o.getPrefixCls(),"-disabled")},o.getSelectedClassName=function(){return"".concat(o.getPrefixCls(),"-selected")},o.getOpenClassName=function(){return"".concat(o.props.rootPrefixCls,"-submenu-open")},o.saveMenuInstance=function(e){o.menuInstance=e},o.addKeyPath=function(e){return ae(ae({},e),{},{keyPath:(e.keyPath||[]).concat(o.props.eventKey)})},o.triggerOpenChange=function(e,t){var n=o.props.eventKey,r=function(){o.onOpenChange({key:n,item:Object(s.a)(o),trigger:t,open:e})};"mouseenter"===t?o.mouseenterTimeout=setTimeout((function(){r()}),0):r()},o.isChildrenSelected=function(){var e={find:!1};return function e(t,n,o){t&&!o.find&&p.a.Children.forEach(t,(function(t){if(t){var r=t.type;if(!r||!(r.isSubMenu||r.isMenuItem||r.isMenuItemGroup))return;-1!==n.indexOf(t.key)?o.find=!0:t.props.children&&e(t.props.children,n,o)}}))}(o.props.children,o.props.selectedKeys,e),e.find},o.isOpen=function(){return-1!==o.props.openKeys.indexOf(o.props.eventKey)},o.adjustWidth=function(){if(o.subMenuTitle&&o.menuInstance){var e=Z.a.findDOMNode(o.menuInstance);e.offsetWidth>=o.subMenuTitle.offsetWidth||(e.style.minWidth="".concat(o.subMenuTitle.offsetWidth,"px"))}},o.saveSubMenuTitle=function(e){o.subMenuTitle=e},o.getBaseProps=function(){var e=Object(s.a)(o).props;return{mode:"horizontal"===e.mode?"vertical":e.mode,visible:o.props.isOpen,level:e.level+1,inlineIndent:e.inlineIndent,focusable:!1,onClick:o.onSubMenuClick,onSelect:o.onSelect,onDeselect:o.onDeselect,onDestroy:o.onDestroy,selectedKeys:e.selectedKeys,eventKey:"".concat(e.eventKey,"-menu-"),openKeys:e.openKeys,motion:e.motion,onOpenChange:o.onOpenChange,subMenuOpenDelay:e.subMenuOpenDelay,parentMenu:Object(s.a)(o),subMenuCloseDelay:e.subMenuCloseDelay,forceSubMenuRender:e.forceSubMenuRender,triggerSubMenuAction:e.triggerSubMenuAction,builtinPlacements:e.builtinPlacements,defaultActiveFirst:e.store.getState().defaultActiveFirst[H(e.eventKey)],multiple:e.multiple,prefixCls:e.rootPrefixCls,id:o.internalMenuId,manualRef:o.saveMenuInstance,itemIcon:e.itemIcon,expandIcon:e.expandIcon,direction:e.direction}},o.getMotion=function(e,t){var n=Object(s.a)(o).haveRendered,r=o.props,i=r.motion,a=r.rootPrefixCls;return ae(ae({},i),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:n||!t||"inline"!==e})};var i=e.store,a=e.eventKey,c=i.getState().defaultActiveFirst;o.isRootMenu=!1;var l=!1;return c&&(l=c[a]),ue(i,a,l),o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props,n=t.mode,o=t.parentMenu,r=t.manualRef;r&&r(this),"horizontal"===n&&o.isRootMenu&&this.props.isOpen&&(this.minWidthTimeout=setTimeout((function(){return e.adjustWidth()}),0))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onDestroy,n=e.eventKey;t&&t(n),this.minWidthTimeout&&clearTimeout(this.minWidthTimeout),this.mouseenterTimeout&&clearTimeout(this.mouseenterTimeout)}},{key:"renderChildren",value:function(e){var t=this,n=this.getBaseProps(),r=this.getMotion(n.mode,n.visible);if(this.haveRendered=!0,this.haveOpened=this.haveOpened||n.visible||n.forceSubMenuRender,!this.haveOpened)return p.a.createElement("div",null);var i=n.direction;return p.a.createElement(te.a,Object.assign({visible:n.visible},r),(function(r){var s=r.className,a=r.style,c=g()("".concat(n.prefixCls,"-sub"),s,Object(o.a)({},"".concat(n.prefixCls,"-rtl"),"rtl"===i));return p.a.createElement(De,Object.assign({},n,{id:t.internalMenuId,className:c,style:a}),e)}))}},{key:"render",value:function(){var e,t=ae({},this.props),n=t.isOpen,r=this.getPrefixCls(),i="inline"===t.mode,s=g()(r,"".concat(r,"-").concat(t.mode),(e={},Object(o.a)(e,t.className,!!t.className),Object(o.a)(e,this.getOpenClassName(),n),Object(o.a)(e,this.getActiveClassName(),t.active||n&&!i),Object(o.a)(e,this.getDisabledClassName(),t.disabled),Object(o.a)(e,this.getSelectedClassName(),this.isChildrenSelected()),e));this.internalMenuId||(t.eventKey?this.internalMenuId="".concat(t.eventKey,"$Menu"):(ce+=1,this.internalMenuId="$__$".concat(ce,"$Menu")));var a={},c={},l={};t.disabled||(a={onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter},c={onClick:this.onTitleClick},l={onMouseEnter:this.onTitleMouseEnter,onMouseLeave:this.onTitleMouseLeave});var u={},f=t.direction;i&&("rtl"===f?u.paddingRight=t.inlineIndent*t.level:u.paddingLeft=t.inlineIndent*t.level);var d={};this.props.isOpen&&(d={"aria-owns":this.internalMenuId});var v=null;"horizontal"!==t.mode&&(v=this.props.expandIcon,"function"===typeof this.props.expandIcon&&(v=p.a.createElement(this.props.expandIcon,ae({},this.props))));var h=p.a.createElement("div",Object.assign({ref:this.saveSubMenuTitle,style:u,className:"".concat(r,"-title"),role:"button"},l,c,{"aria-expanded":n},d,{"aria-haspopup":"true",title:"string"===typeof t.title?t.title:void 0}),t.title,v||p.a.createElement("i",{className:"".concat(r,"-arrow")})),y=this.renderChildren(t.children),b=t.parentMenu.isRootMenu?t.parentMenu.props.getPopupContainer:function(e){return e.parentNode},m=le[t.mode],O=t.popupOffset?{offset:t.popupOffset}:{},M="inline"===t.mode?"":t.popupClassName;M+="rtl"===f?" ".concat(r,"-rtl"):"";var j=t.disabled,C=t.triggerSubMenuAction,K=t.subMenuOpenDelay,I=t.forceSubMenuRender,S=t.subMenuCloseDelay,D=t.builtinPlacements;$.forEach((function(e){return delete t[e]})),delete t.onClick;var P="rtl"===f?Object.assign({},re,D):Object.assign({},oe,D);return delete t.direction,p.a.createElement("li",Object.assign({},t,a,{className:s,role:"menuitem"}),i&&h,i&&y,!i&&p.a.createElement(ee.a,{prefixCls:r,popupClassName:g()("".concat(r,"-popup"),M),getPopupContainer:b,builtinPlacements:P,popupPlacement:m,popupVisible:n,popupAlign:O,popup:y,action:j?[]:[C],mouseEnterDelay:K,mouseLeaveDelay:S,onPopupVisibleChange:this.onPopupVisibleChange,forceRender:I},h))}}]),n}(p.a.Component);pe.defaultProps={onMouseEnter:V,onMouseLeave:V,onTitleMouseEnter:V,onTitleMouseLeave:V,onTitleClick:V,manualRef:V,mode:"vertical",title:""};var fe=Object(f.b)((function(e,t){var n=e.openKeys,o=e.activeKey,r=e.selectedKeys,i=t.eventKey,s=t.subMenuKey;return{isOpen:n.indexOf(i)>-1,active:o[s]===i,selectedKeys:r}}))(pe);fe.isSubMenu=!0;var de=fe;function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var be=function(e){Object(a.a)(n,e);var t=ye(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.mutationObserver=null,e.originalTotalWidth=0,e.overflowedItems=[],e.menuItemSizes=[],e.cancelFrameId=null,e.state={lastVisibleIndex:void 0},e.getMenuItemNodes=function(){var t=e.props.prefixCls,n=Z.a.findDOMNode(Object(s.a)(e));return n?[].slice.call(n.children).filter((function(e){return e.className.split(" ").indexOf("".concat(t,"-overflowed-submenu"))<0})):[]},e.getOverflowedSubMenuItem=function(t,n,o){var r=e.props,i=r.overflowedIndicator,s=r.level,a=r.mode,c=r.prefixCls,l=r.theme;if(1!==s||"horizontal"!==a)return null;var u=e.props.children[0].props,f=(u.children,u.title,u.style),d=Object(X.a)(u,["children","title","style"]),v=he({},f),h="".concat(t,"-overflowed-indicator"),y="".concat(t,"-overflowed-indicator");0===n.length&&!0!==o?v=he(he({},v),{},{display:"none"}):o&&(v=he(he({},v),{},{visibility:"hidden",position:"absolute"}),h="".concat(h,"-placeholder"),y="".concat(y,"-placeholder"));var b=l?"".concat(c,"-").concat(l):"",m={};return $.forEach((function(e){void 0!==d[e]&&(m[e]=d[e])})),p.a.createElement(de,Object.assign({title:i,className:"".concat(c,"-overflowed-submenu"),popupClassName:b},m,{key:h,eventKey:y,disabled:!1,style:v}),n)},e.setChildrenWidthAndResize=function(){if("horizontal"===e.props.mode){var t=Z.a.findDOMNode(Object(s.a)(e));if(t){var n=t.children;if(n&&0!==n.length){var o=t.children[n.length-1];J(o,"display","inline-block");var r=e.getMenuItemNodes(),i=r.filter((function(e){return e.className.split(" ").indexOf("menuitem-overflowed")>=0}));i.forEach((function(e){J(e,"display","inline-block")})),e.menuItemSizes=r.map((function(e){return _(e)})),i.forEach((function(e){J(e,"display","none")})),e.overflowedIndicatorWidth=_(t.children[t.children.length-1]),e.originalTotalWidth=e.menuItemSizes.reduce((function(e,t){return e+t}),0),e.handleResize(),J(o,"display","none")}}}},e.handleResize=function(){if("horizontal"===e.props.mode){var t=Z.a.findDOMNode(Object(s.a)(e));if(t){var n=_(t);e.overflowedItems=[];var o,r=0;e.originalTotalWidth>n+.5&&(o=-1,e.menuItemSizes.forEach((function(t){(r+=t)+e.overflowedIndicatorWidth<=n&&(o+=1)}))),e.setState({lastVisibleIndex:o})}}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.setChildrenWidthAndResize(),1===this.props.level&&"horizontal"===this.props.mode){var t=Z.a.findDOMNode(this);if(!t)return;this.resizeObserver=new Q.a((function(t){t.forEach((function(){var t=e.cancelFrameId;cancelAnimationFrame(t),e.cancelFrameId=requestAnimationFrame(e.setChildrenWidthAndResize)}))})),[].slice.call(t.children).concat(t).forEach((function(t){e.resizeObserver.observe(t)})),"undefined"!==typeof MutationObserver&&(this.mutationObserver=new MutationObserver((function(){e.resizeObserver.disconnect(),[].slice.call(t.children).concat(t).forEach((function(t){e.resizeObserver.observe(t)})),e.setChildrenWidthAndResize()})),this.mutationObserver.observe(t,{attributes:!1,childList:!0,subTree:!1}))}}},{key:"componentWillUnmount",value:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.mutationObserver&&this.mutationObserver.disconnect(),cancelAnimationFrame(this.cancelFrameId)}},{key:"renderChildren",value:function(e){var t=this,n=this.state.lastVisibleIndex;return(e||[]).reduce((function(o,r,i){var s=r;if("horizontal"===t.props.mode){var a=t.getOverflowedSubMenuItem(r.props.eventKey,[]);void 0!==n&&-1!==t.props.className.indexOf("".concat(t.props.prefixCls,"-root"))&&(i>n&&(s=p.a.cloneElement(r,{style:{display:"none"},eventKey:"".concat(r.props.eventKey,"-hidden"),className:"".concat("menuitem-overflowed")})),i===n+1&&(t.overflowedItems=e.slice(n+1).map((function(e){return p.a.cloneElement(e,{key:e.props.eventKey,mode:"vertical-left"})})),a=t.getOverflowedSubMenuItem(r.props.eventKey,t.overflowedItems)));var c=[].concat(Object(q.a)(o),[a,s]);return i===e.length-1&&c.push(t.getOverflowedSubMenuItem(r.props.eventKey,[],!0)),c}return[].concat(Object(q.a)(o),[s])}),[])}},{key:"render",value:function(){var e=this.props,t=(e.visible,e.prefixCls,e.overflowedIndicator,e.mode,e.level,e.tag),n=e.children,o=(e.theme,Object(X.a)(e,["visible","prefixCls","overflowedIndicator","mode","level","tag","children","theme"])),r=t;return p.a.createElement(r,Object.assign({},o),this.renderChildren(n))}}]),n}(p.a.Component);be.defaultProps={tag:"div",className:""};var me=be;function Oe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t,n){var r=e.getState();e.setState({activeKey:Me(Me({},r.activeKey),{},Object(o.a)({},t,n))})}function Ce(e){return e.eventKey||"0-menu-"}function Ke(e,t){var n,o=t,r=e.children,i=e.eventKey;if(o&&(G(r,(function(e,t){e&&e.props&&!e.props.disabled&&o===B(e,i,t)&&(n=!0)})),n))return o;return o=null,e.defaultActiveFirst?(G(r,(function(e,t){o||!e||e.props.disabled||(o=B(e,i,t))})),o):o}function Ie(e){if(e){var t=this.instanceArray.indexOf(e);-1!==t?this.instanceArray[t]=e:this.instanceArray.push(e)}}var Se=function(e){Object(a.a)(n,e);var t=Oe(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onKeyDown=function(e,t){var n,o=e.keyCode;if(i.getFlatInstanceArray().forEach((function(t){t&&t.props.active&&t.onKeyDown&&(n=t.onKeyDown(e))})),n)return 1;var r=null;return o!==h.a.UP&&o!==h.a.DOWN||(r=i.step(o===h.a.UP?-1:1)),r?(e.preventDefault(),je(i.props.store,Ce(i.props),r.props.eventKey),"function"===typeof t&&t(r),1):void 0},i.onItemHover=function(e){var t=e.key,n=e.hover;je(i.props.store,Ce(i.props),n?t:null)},i.onDeselect=function(e){i.props.onDeselect(e)},i.onSelect=function(e){i.props.onSelect(e)},i.onClick=function(e){i.props.onClick(e)},i.onOpenChange=function(e){i.props.onOpenChange(e)},i.onDestroy=function(e){i.props.onDestroy(e)},i.getFlatInstanceArray=function(){return i.instanceArray},i.step=function(e){var t=i.getFlatInstanceArray(),n=i.props.store.getState().activeKey[Ce(i.props)],o=t.length;if(!o)return null;e<0&&(t=t.concat().reverse());var r=-1;if(t.every((function(e,t){return!e||e.props.eventKey!==n||(r=t,!1)})),i.props.defaultActiveFirst||-1===r||(s=t.slice(r,o-1)).length&&!s.every((function(e){return!!e.props.disabled}))){var s,a=(r+1)%o,c=a;do{var l=t[c];if(l&&!l.props.disabled)return l;c=(c+1)%o}while(c!==a);return null}},i.renderCommonMenuItem=function(e,t,n){var o=i.props.store.getState(),r=Object(s.a)(i).props,a=B(e,r.eventKey,t),c=e.props;if(!c||"string"===typeof e.type)return e;var l=a===o.activeKey,u=Me(Me({mode:c.mode||r.mode,level:r.level,inlineIndent:r.inlineIndent,renderMenuItem:i.renderMenuItem,rootPrefixCls:r.prefixCls,index:t,parentMenu:r.parentMenu,manualRef:c.disabled?void 0:Object(y.a)(e.ref,Ie.bind(Object(s.a)(i))),eventKey:a,active:!c.disabled&&l,multiple:r.multiple,onClick:function(e){(c.onClick||V)(e),i.onClick(e)},onItemHover:i.onItemHover,motion:r.motion,subMenuOpenDelay:r.subMenuOpenDelay,subMenuCloseDelay:r.subMenuCloseDelay,forceSubMenuRender:r.forceSubMenuRender,onOpenChange:i.onOpenChange,onDeselect:i.onDeselect,onSelect:i.onSelect,builtinPlacements:r.builtinPlacements,itemIcon:c.itemIcon||i.props.itemIcon,expandIcon:c.expandIcon||i.props.expandIcon},n),{},{direction:r.direction});return("inline"===r.mode||U.any)&&(u.triggerSubMenuAction="click"),p.a.cloneElement(e,u)},i.renderMenuItem=function(e,t,n){if(!e)return null;var o=i.props.store.getState(),r={openKeys:o.openKeys,selectedKeys:o.selectedKeys,triggerSubMenuAction:i.props.triggerSubMenuAction,subMenuKey:n};return i.renderCommonMenuItem(e,t,r)},e.store.setState({activeKey:Me(Me({},e.store.getState().activeKey),{},Object(o.a)({},e.eventKey,Ke(e,e.activeKey)))}),i.instanceArray=[],i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.manualRef&&this.props.manualRef(this)}},{key:"shouldComponentUpdate",value:function(e){return this.props.visible||e.visible||this.props.className!==e.className||!m()(this.props.style,e.style)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n="activeKey"in t?t.activeKey:t.store.getState().activeKey[Ce(t)],o=Ke(t,n);if(o!==n)je(t.store,Ce(t),o);else if("activeKey"in e){o!==Ke(e,e.activeKey)&&je(t.store,Ce(t),o)}}},{key:"render",value:function(){var e=this,t=Object(v.a)({},this.props);this.instanceArray=[];var n={className:g()(t.prefixCls,t.className,"".concat(t.prefixCls,"-").concat(t.mode)),role:t.role||"menu"};t.id&&(n.id=t.id),t.focusable&&(n.tabIndex=0,n.onKeyDown=this.onKeyDown);var o=t.prefixCls,r=t.eventKey,i=t.visible,s=t.level,a=t.mode,c=t.overflowedIndicator,l=t.theme;return $.forEach((function(e){return delete t[e]})),delete t.onClick,p.a.createElement(me,Object.assign({},t,{prefixCls:o,mode:a,tag:"ul",level:s,theme:l,visible:i,overflowedIndicator:c},n),p.a.Children.map(t.children,(function(t,n){return e.renderMenuItem(t,n,r||"0-menu-")})))}}]),n}(p.a.Component);Se.defaultProps={prefixCls:"rc-menu",className:"",mode:"vertical",level:1,inlineIndent:24,visible:!0,focusable:!0,style:{},manualRef:V};var De=Object(f.b)()(Se),Pe=n(23);function ke(e,t,n){var o=e.prefixCls,r=e.motion,i=e.defaultMotions,s=void 0===i?{}:i,a=e.openAnimation,c=e.openTransitionName,l=t.switchingModeFromInline;if(r)return r;if("object"===Object(M.a)(a)&&a)Object(Pe.a)(!1,"Object type of `openAnimation` is removed. Please use `motion` instead.");else if("string"===typeof a)return{motionName:"".concat(o,"-open-").concat(a)};if(c)return{motionName:c};var u=s[n];return u||(l?null:s.other)}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var Re=function(e){Object(a.a)(n,e);var t=xe(n);function n(e){var o;Object(r.a)(this,n),(o=t.call(this,e)).inlineOpenKeys=[],o.onSelect=function(e){var t=Object(s.a)(o).props;if(t.selectable){var n=o.store.getState().selectedKeys,r=e.key;n=t.multiple?n.concat([r]):[r],"selectedKeys"in t||o.store.setState({selectedKeys:n}),t.onSelect(Ee(Ee({},e),{},{selectedKeys:n}))}},o.onClick=function(e){var t=o.getRealMenuMode(),n=Object(s.a)(o),r=n.store,i=n.props.onOpenChange;"inline"===t||"openKeys"in o.props||(r.setState({openKeys:[]}),i([])),o.props.onClick(e)},o.onKeyDown=function(e,t){o.innerMenu.getWrappedInstance().onKeyDown(e,t)},o.onOpenChange=function(e){var t=Object(s.a)(o).props,n=o.store.getState().openKeys.concat(),r=!1,i=function(e){var t=!1;if(e.open)(t=-1===n.indexOf(e.key))&&n.push(e.key);else{var o=n.indexOf(e.key);(t=-1!==o)&&n.splice(o,1)}r=r||t};Array.isArray(e)?e.forEach(i):i(e),r&&("openKeys"in o.props||o.store.setState({openKeys:n}),t.onOpenChange(n))},o.onDeselect=function(e){var t=Object(s.a)(o).props;if(t.selectable){var n=o.store.getState().selectedKeys.concat(),r=e.key,i=n.indexOf(r);-1!==i&&n.splice(i,1),"selectedKeys"in t||o.store.setState({selectedKeys:n}),t.onDeselect(Ee(Ee({},e),{},{selectedKeys:n}))}},o.onMouseEnter=function(e){o.restoreModeVerticalFromInline();var t=o.props.onMouseEnter;t&&t(e)},o.onTransitionEnd=function(e){var t="width"===e.propertyName&&e.target===e.currentTarget,n=e.target.className,r="[object SVGAnimatedString]"===Object.prototype.toString.call(n)?n.animVal:n,i="font-size"===e.propertyName&&r.indexOf("anticon")>=0;(t||i)&&o.restoreModeVerticalFromInline()},o.setInnerMenu=function(e){o.innerMenu=e},o.isRootMenu=!0;var i=e.defaultSelectedKeys,a=e.defaultOpenKeys;return"selectedKeys"in e&&(i=e.selectedKeys||[]),"openKeys"in e&&(a=e.openKeys||[]),o.store=Object(f.c)({selectedKeys:i,openKeys:a,activeKey:{"0-menu-":Ke(e,e.activeKey)}}),o.state={switchingModeFromInline:!1},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateMiniStore(),this.updateMenuDisplay()}},{key:"componentDidUpdate",value:function(e){this.updateOpentKeysWhenSwitchMode(e),this.updateMiniStore();var t=this.props,n=t.siderCollapsed,o=t.inlineCollapsed,r=t.onOpenChange;(!e.inlineCollapsed&&o||!e.siderCollapsed&&n)&&r([]),this.updateMenuDisplay()}},{key:"updateOpentKeysWhenSwitchMode",value:function(e){var t=this.props,n=this.store,o=this.inlineOpenKeys,r=n.getState(),i={};"inline"===e.mode&&"inline"!==t.mode&&this.setState({switchingModeFromInline:!0}),"openKeys"in t||((t.inlineCollapsed&&!e.inlineCollapsed||t.siderCollapsed&&!e.siderCollapsed)&&(this.setState({switchingModeFromInline:!0}),this.inlineOpenKeys=r.openKeys.concat(),i.openKeys=[]),(!t.inlineCollapsed&&e.inlineCollapsed||!t.siderCollapsed&&e.siderCollapsed)&&(i.openKeys=o,this.inlineOpenKeys=[])),Object.keys(i).length&&n.setState(i)}},{key:"updateMenuDisplay",value:function(){var e=this.props.collapsedWidth,t=this.store,n=this.prevOpenKeys;this.getInlineCollapsed()&&(0===e||"0"===e||"0px"===e)?(this.prevOpenKeys=t.getState().openKeys.concat(),this.store.setState({openKeys:[]})):n&&(this.store.setState({openKeys:n}),this.prevOpenKeys=null)}},{key:"getRealMenuMode",value:function(){var e=this.props.mode,t=this.state.switchingModeFromInline,n=this.getInlineCollapsed();return t&&n?"inline":n?"vertical":e}},{key:"getInlineCollapsed",value:function(){var e=this.props,t=e.inlineCollapsed,n=e.siderCollapsed;return void 0!==n?n:t}},{key:"restoreModeVerticalFromInline",value:function(){this.state.switchingModeFromInline&&this.setState({switchingModeFromInline:!1})}},{key:"updateMiniStore",value:function(){"selectedKeys"in this.props&&this.store.setState({selectedKeys:this.props.selectedKeys||[]}),"openKeys"in this.props&&this.store.setState({openKeys:this.props.openKeys||[]})}},{key:"render",value:function(){var e=Ee({},Object(d.default)(this.props,["collapsedWidth","siderCollapsed","defaultMotions"])),t=this.getRealMenuMode();return e.className+=" ".concat(e.prefixCls,"-root"),"rtl"===e.direction&&(e.className+=" ".concat(e.prefixCls,"-rtl")),delete(e=Ee(Ee({},e),{},{mode:t,onClick:this.onClick,onOpenChange:this.onOpenChange,onDeselect:this.onDeselect,onSelect:this.onSelect,onMouseEnter:this.onMouseEnter,onTransitionEnd:this.onTransitionEnd,parentMenu:this,motion:ke(this.props,this.state,t)})).openAnimation,delete e.openTransitionName,p.a.createElement(f.a,{store:this.store},p.a.createElement(De,Object.assign({},e,{ref:this.setInnerMenu}),this.props.children))}}]),n}(p.a.Component);Re.defaultProps={selectable:!0,onClick:V,onSelect:V,onOpenChange:V,onDeselect:V,defaultSelectedKeys:[],defaultOpenKeys:[],subMenuOpenDelay:.1,subMenuCloseDelay:.1,triggerSubMenuAction:"hover",prefixCls:"rc-menu",className:"",mode:"vertical",style:{},builtinPlacements:{},overflowedIndicator:p.a.createElement("span",null,"\xb7\xb7\xb7")};var Ne=Re;function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var We=function(e){Object(a.a)(n,e);var t=Fe(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).onKeyDown=function(t){if(t.keyCode===h.a.ENTER)return e.onClick(t),!0},e.onMouseLeave=function(t){var n=e.props,o=n.eventKey,r=n.onItemHover,i=n.onMouseLeave;r({key:o,hover:!1}),i({key:o,domEvent:t})},e.onMouseEnter=function(t){var n=e.props,o=n.eventKey,r=n.onItemHover,i=n.onMouseEnter;r({key:o,hover:!0}),i({key:o,domEvent:t})},e.onClick=function(t){var n=e.props,o=n.eventKey,r=n.multiple,i=n.onClick,a=n.onSelect,c=n.onDeselect,l=n.isSelected,u={key:o,keyPath:[o],item:Object(s.a)(e),domEvent:t};i(u),r?l?c(u):a(u):l||a(u)},e.saveNode=function(t){e.node=t},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.callRef()}},{key:"componentDidUpdate",value:function(){this.callRef()}},{key:"componentWillUnmount",value:function(){var e=this.props;e.onDestroy&&e.onDestroy(e.eventKey)}},{key:"getPrefixCls",value:function(){return"".concat(this.props.rootPrefixCls,"-item")}},{key:"getActiveClassName",value:function(){return"".concat(this.getPrefixCls(),"-active")}},{key:"getSelectedClassName",value:function(){return"".concat(this.getPrefixCls(),"-selected")}},{key:"getDisabledClassName",value:function(){return"".concat(this.getPrefixCls(),"-disabled")}},{key:"callRef",value:function(){this.props.manualRef&&this.props.manualRef(this)}},{key:"render",value:function(){var e,t=Te({},this.props),n=g()(this.getPrefixCls(),t.className,(e={},Object(o.a)(e,this.getActiveClassName(),!t.disabled&&t.active),Object(o.a)(e,this.getSelectedClassName(),t.isSelected),Object(o.a)(e,this.getDisabledClassName(),t.disabled),e)),r=Te(Te({},t.attribute),{},{title:"string"===typeof t.title?t.title:void 0,className:n,role:t.role||"menuitem","aria-disabled":t.disabled});"option"===t.role?r=Te(Te({},r),{},{role:"option","aria-selected":t.isSelected}):null!==t.role&&"none"!==t.role||(r.role="none");var i={onClick:t.disabled?null:this.onClick,onMouseLeave:t.disabled?null:this.onMouseLeave,onMouseEnter:t.disabled?null:this.onMouseEnter},s=Te({},t.style);"inline"===t.mode&&("rtl"===t.direction?s.paddingRight=t.inlineIndent*t.level:s.paddingLeft=t.inlineIndent*t.level),$.forEach((function(e){return delete t[e]})),delete t.direction;var a=this.props.itemIcon;return"function"===typeof this.props.itemIcon&&(a=p.a.createElement(this.props.itemIcon,this.props)),p.a.createElement("li",Object.assign({},Object(d.default)(t,["onClick","onMouseEnter","onMouseLeave","onSelect"]),r,i,{style:s,ref:this.saveNode}),t.children,a)}}]),n}(p.a.Component);We.isMenuItem=!0,We.defaultProps={onSelect:V,onMouseEnter:V,onMouseLeave:V,manualRef:V};var ze=Object(f.b)((function(e,t){var n=e.activeKey,o=e.selectedKeys,r=t.eventKey;return{active:n[t.subMenuKey]===r,isSelected:-1!==o.indexOf(r)}}))(We);function Le(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var Ue=function(e){Object(a.a)(n,e);var t=Le(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).renderInnerMenuItem=function(t){var n=e.props;return(0,n.renderMenuItem)(t,n.index,e.props.subMenuKey)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=Object(v.a)({},this.props),t=e.className,n=void 0===t?"":t,o=e.rootPrefixCls,r="".concat(o,"-item-group-title"),i="".concat(o,"-item-group-list"),s=e.title,a=e.children;return $.forEach((function(t){return delete e[t]})),delete e.onClick,delete e.direction,p.a.createElement("li",Object.assign({},e,{className:"".concat(n," ").concat(o,"-item-group")}),p.a.createElement("div",{className:r,title:"string"===typeof s?s:void 0},s),p.a.createElement("ul",{className:i},p.a.Children.map(a,this.renderInnerMenuItem)))}}]),n}(p.a.Component);Ue.isMenuItemGroup=!0,Ue.defaultProps={disabled:!0};var Ve=Ue,Be=function(e){var t=e.className,n=e.rootPrefixCls,o=e.style;return p.a.createElement("li",{className:"".concat(t," ").concat(n,"-item-divider"),style:o})};Be.defaultProps={disabled:!0,className:"",style:{}};var He=Be;t.default=Ne}}]);
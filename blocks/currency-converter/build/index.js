/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@codeamp/block-components/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@codeamp/block-components/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! For license information please see index.js.LICENSE.txt */
!function(){var e={814:function(e,t,o){var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var l=c.apply(null,o);l&&e.push(l)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},922:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(c[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},499:function(e){"use strict";e.exports=function(e){return e[1]}},245:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,':root{--wp-admin-theme-color: #007cba;--wp-admin-theme-color--rgb: 0,124,186;--wp-admin-theme-color-darker-10: #006ba1;--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;--wp-admin-theme-color-darker-20: #005a87;--wp-admin-theme-color-darker-20--rgb: 0,90,135;--wp-admin-border-width-focus: 2px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){:root{--wp-admin-border-width-focus: 1.5px}}.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}.codeamp-components-multi-select-control__input-container{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;padding:6px 8px;box-shadow:0 0 0 transparent;transition:box-shadow 0.1s linear;border-radius:2px;border:1px solid #757575;font-size:16px;line-height:normal;width:100%;margin:0 0 8px 0;padding:0;cursor:text}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__input-container{transition-duration:0s;transition-delay:0s}}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}}.codeamp-components-multi-select-control__input-container:focus{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container::-webkit-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container::-moz-placeholder{opacity:1;color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container:-ms-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container.is-disabled{background:#ddd;border-color:#ddd}.codeamp-components-multi-select-control__input-container.is-active{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{display:inline-block;flex:1;font-family:inherit;font-size:16px;width:100%;max-width:100%;margin-left:4px;padding:0;min-height:24px;min-width:50px;background:inherit;border:0;color:#1e1e1e;box-shadow:none}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{font-size:13px}}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input:focus,.codeamp-components-multi-select-control.is-active .codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{outline:none;box-shadow:none}.codeamp-components-multi-select-control__input-container .codeamp-components-multi-select-control__token+input[type="text"].codeamp-components-multi-select-control__input{width:auto}.codeamp-components-multi-select-control__help{font-size:12px;font-style:normal;color:#757575}.codeamp-components-multi-select-control__tokens-container{padding:4px}.codeamp-components-multi-select-control__token{font-size:13px;display:flex;color:#1e1e1e;max-width:100%}.codeamp-components-multi-select-control__token.is-borderless{position:relative;padding:0 24px 0 0}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__token-text{background:transparent;color:var(--wp-admin-theme-color)}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__remove-token{background:transparent;color:#757575;position:absolute;top:1px;right:0;padding:0}.codeamp-components-multi-select-control__token.is-borderless.is-success .codeamp-components-multi-select-control__token-text{color:#4ab866}.codeamp-components-multi-select-control__token.is-borderless.is-error .codeamp-components-multi-select-control__token-text{color:#cc1818;border-radius:4px 0 0 4px;padding:0 4px 0 6px}.codeamp-components-multi-select-control__token.is-borderless.is-validating .codeamp-components-multi-select-control__token-text{color:#1e1e1e}.codeamp-components-multi-select-control__token.is-disabled .codeamp-components-multi-select-control__remove-token{cursor:default}.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{display:inline-block;line-height:24px;height:auto;background:#ddd;min-width:unset;transition:all 0.2s cubic-bezier(0.4, 1, 0.4, 1)}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-delay:0s}}.codeamp-components-multi-select-control__token-text{border-radius:2px 0 0 2px;padding:0 0 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codeamp-components-multi-select-control__remove-token.components-button{cursor:pointer;border-radius:0 2px 2px 0;padding:0 2px;color:#1e1e1e;line-height:10px;overflow:initial}.codeamp-components-multi-select-control__remove-token.components-button:hover{color:#1e1e1e}.codeamp-components-multi-select-control__suggestions-list{flex:1 0 100%;min-width:100%;max-height:9em;overflow-y:auto;transition:all 0.15s ease-in-out;list-style:none;border-top:1px solid #757575;margin:0;padding:0}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__suggestions-list{transition-duration:0s;transition-delay:0s}}.codeamp-components-multi-select-control__no-suggestions{color:#757575;font-size:13px;margin:0;display:block;padding:4px 8px}.codeamp-components-multi-select-control__suggestion{color:#757575;display:block;font-size:13px;padding:4px 8px;margin:0;cursor:pointer}.codeamp-components-multi-select-control__suggestion.is-selected{background:var(--wp-admin-theme-color);color:#fff}.codeamp-components-multi-select-control__suggestion-match{text-decoration:underline}\n',""]),t.Z=c},313:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,".codeamp-components-resource-select-control>.components-base-control__field{position:relative;display:flex;flex-wrap:wrap}.codeamp-components-resource-select-control>.components-base-control__field>.components-base-control__label{flex:2}.codeamp-components-resource-select-control__label{margin-bottom:8px}.codeamp-components-resource-select-control__add_button{padding:0;margin:0;min-height:revert;height:auto;color:var(--wp-admin-theme-color);align-self:center;justify-content:right;margin-bottom:8px}.codeamp-components-resource-select-control__add_button:hover{text-decoration:underline}.codeamp-components-resource-select-control__edit_button{height:auto;margin-bottom:8px}.codeamp-components-resource-select-control__select{width:auto;flex:1}.codeamp-components-resource-select-control .components-base-control{margin-bottom:8px}.codeamp-components-resource-select-control .components-base-control__field{margin-bottom:0}.codeamp-components-resource-select-control .components-base-control{flex:1}\n",""]),t.Z=c},379:function(e){"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},c=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var d=o(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=r(m,n);n.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var l=o(i[c]);t[l].references--}for(var a=n(e,r),s=0;s<i.length;s++){var u=o(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.amdO={},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};!function(){"use strict";o.r(n),o.d(n,{MultiSelectControl:function(){return we},ResourceSelectControl:function(){return O}});var e=window.wp.i18n,t=window.wp.components,r=window.wp.compose,i=o(379),c=o.n(i),l=o(795),a=o.n(l),s=o(569),u=o.n(s),p=o(565),d=o.n(p),m=o(216),f=o.n(m),v=o(589),b=o.n(v),y=o(313),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),c()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var g=o(814),_=o.n(g);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w.apply(this,arguments)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var S=function(){},O=function o(n){var i,c,l,a,s=n.onChange,u=void 0===s?S:s,p=n.onPrimaryAction,d=void 0===p?S:p,m=n.onSecondaryAction,f=void 0===m?S:m,v=n.label,b=void 0===v?"":v,y=n.primaryActionLabel,h=void 0===y?(0,e.__)("Edit","codeamp-block-components"):y,g=n.secondaryActionLabel,O=void 0===g?(0,e.__)("Add new","codeamp-block-components"):g,k=n.loadingLabel,E=void 0===k?(0,e.__)("Loading","codeamp-block-components"):k,j=n.showPrimaryAction,A=void 0===j||j,I=n.disabled,C=void 0!==I&&I,P=n.showSecondaryAction,L=void 0===P||P,R=n.defaultOption,T=n.options,M=n.value,N=n.help,D=n.primaryActionProps,B=n.secondaryActionProps,z=n.id,W=n.className,F=[];E&&(F=[{value:"loading",label:E}]),T&&(F=[],R&&F.push(R),(l=F).push.apply(l,function(e){if(Array.isArray(e))return x(e)}(a=T)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?x(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var H=(0,r.useInstanceId)(o,"codeamp-components-resource-select-control");return z&&(H=z),React.createElement(t.BaseControl,{id:H,className:_()("components-base-control codeamp-components-resource-select-control",W),help:N,label:b},L&&React.createElement(t.Button,w({className:"codeamp-components-resource-select-control__add_button",disabled:C,onClick:f},B),null!==(i=null==B?void 0:B.label)&&void 0!==i?i:O),React.createElement(t.__experimentalHStack,null,React.createElement(t.SelectControl,{id:H,value:M,options:F,className:"codeamp-components-resource-select-control__select",onChange:u,disabled:C}),A&&React.createElement(t.Button,w({onClick:d,variant:"secondary",disabled:C,className:"codeamp-components-resource-select-control__edit_button"},D),null!==(c=null==D?void 0:D.label)&&void 0!==c?c:h)))},k=window.wp.element,E=window.wp.a11y,j=window.wp.isShallowEqual,A=o.n(j),I=window.wp.primitives,C=(0,k.createElement)(I.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,k.createElement)(I.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),P=function(){};function L(o){var n=o.value,i=o.label,c=o.title,l=o.isBorderless,a=void 0!==l&&l,s=o.disabled,u=void 0!==s&&s,p=o.onClickRemove,d=void 0===p?P:p,m=o.onMouseEnter,f=o.onMouseLeave,v=o.messages,b=o.termPosition,y=o.termsCount,h=(0,r.useInstanceId)(L),g=_()("codeamp-components-multi-select-control__token",{"is-borderless":a,"is-disabled":u}),w=(0,e.sprintf)((0,e.__)("%1$s (%2$s of %3$s)"),i,b,y);return React.createElement("span",{className:g,onMouseEnter:m,onMouseLeave:f,title:c,style:{margin:"0"}},React.createElement("span",{className:"codeamp-components-multi-select-control__token-text",id:"codeamp-components-multi-select-control__token-text-".concat(h)},React.createElement(t.VisuallyHidden,{as:"span"},w),React.createElement("span",{"aria-hidden":"true"},i)),React.createElement(t.Button,{className:"codeamp-components-multi-select-control__remove-token",icon:C,onClick:!u&&function(){return d({value:n})},label:v.remove,"aria-describedby":"codeamp-components-multi-select-control__token-text-".concat(h)}))}var R=["value","isExpanded","instanceId","selectedSuggestionIndex","className","onChange","onFocus","onBlur"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},T.apply(this,arguments)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var N=(0,k.forwardRef)((function(e,t){var o=e.value,n=e.isExpanded,r=e.instanceId,i=e.selectedSuggestionIndex,c=e.className,l=e.onChange,a=e.onFocus,s=e.onBlur,u=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,R),p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),d=p[0],m=p[1],f=o?o.length+1:0;return React.createElement("input",T({ref:t,id:r,type:"text"},u,{value:o||"",onChange:function(e){l&&l({value:e.target.value})},onFocus:function(e){m(!0),null==a||a(e)},onBlur:function(e){m(!1),null==s||s(e)},size:f,className:_()(c,"codeamp-components-multi-select-control__input"),autoComplete:"off",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-owns":n?"".concat(r,"-suggestions"):void 0,"aria-activedescendant":d&&-1!==i&&n?"".concat(r,"-suggestions-").concat(i):void 0,"aria-describedby":"".concat(r,"-howto"),"data-lpignore":"true"}))}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e){return B="function"==typeof Symbol&&"symbol"===D(Symbol.iterator)?function(e){return D(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":D(e)},B(e)}function z(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function W(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function F(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if("number"!=typeof o){var r=e.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function H(e){return F(e)}function V(e){return F(e,!0)}function U(e){var t=function(e){var t,o,n,r=e.ownerDocument,i=r.body,c=r&&r.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=c.clientLeft||i.clientLeft||0,top:n-=c.clientTop||i.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=H(n),t.top+=V(n),t}var Z,$=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),q=/^(top|right|bottom|left)$/;function K(e,t){for(var o=0;o<e.length;o++)t(e[o])}function G(e){return"border-box"===Z(e,"boxSizing")}"undefined"!=typeof window&&(Z=window.getComputedStyle?function(e,t,o){var n="",r=e.ownerDocument,i=o||r.defaultView.getComputedStyle(e,null);return i&&(n=i.getPropertyValue(t)||i[t]),n}:function(e,t){var o=e.currentStyle&&e.currentStyle[t];if($.test(o)&&!q.test(t)){var n=e.style,r=n.left,i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,n.left="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n.left=r,e.runtimeStyle.left=i}return""===o?"auto":o});var J=["margin","border","padding"];function X(e,t,o){var n,r={},i=e.style;for(n in t)t.hasOwnProperty(n)&&(r[n]=i[n],i[n]=t[n]);for(n in o.call(e),t)t.hasOwnProperty(n)&&(i[n]=r[n])}function Y(e,t,o){var n,r,i,c=0;for(r=0;r<t.length;r++)if(n=t[r])for(i=0;i<o.length;i++){var l;l="border"===n?"".concat(n+o[i],"Width"):n+o[i],c+=parseFloat(Z(e,l))||0}return c}function Q(e){return null!=e&&e==e.window}var ee={};function te(e,t,o){if(Q(e))return"width"===t?ee.viewportWidth(e):ee.viewportHeight(e);if(9===e.nodeType)return"width"===t?ee.docWidth(e):ee.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,i=(Z(e),G(e)),c=0;(null==r||r<=0)&&(r=void 0,(null==(c=Z(e,t))||Number(c)<0)&&(c=e.style[t]||0),c=parseFloat(c)||0),void 0===o&&(o=i?1:-1);var l=void 0!==r||i,a=r||c;if(-1===o)return l?a-Y(e,["border","padding"],n):c;if(l){var s=2===o?-Y(e,["border"],n):Y(e,["margin"],n);return a+(1===o?0:s)}return c+Y(e,J.slice(o),n)}K(["Width","Height"],(function(e){ee["doc".concat(e)]=function(t){var o=t.document;return Math.max(o.documentElement["scroll".concat(e)],o.body["scroll".concat(e)],ee["viewport".concat(e)](o))},ee["viewport".concat(e)]=function(t){var o="client".concat(e),n=t.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var oe={position:"absolute",visibility:"hidden",display:"block"};function ne(e){var t,o=arguments;return 0!==e.offsetWidth?t=te.apply(void 0,o):X(e,oe,(function(){t=te.apply(void 0,o)})),t}function re(e,t,o){var n=o;if("object"!==B(t))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[t]=n)):Z(e,t);for(var r in t)t.hasOwnProperty(r)&&re(e,r,t[r])}K(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);ee["outer".concat(t)]=function(t,o){return t&&ne(t,e,o?0:1)};var o="width"===e?["Left","Right"]:["Top","Bottom"];ee[e]=function(t,n){return void 0===n?t&&ne(t,e,-1):t?(Z(t),G(t)&&(n+=Y(t,["padding","border"],o)),re(t,e,n)):void 0}}));var ie=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?W(o,!0).forEach((function(t){z(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return U(e);!function(e,t){"static"===re(e,"position")&&(e.style.position="relative");var o,n,r=U(e),i={};for(n in t)t.hasOwnProperty(n)&&(o=parseFloat(re(e,n))||0,i[n]=o+t[n]-r[n]);re(e,i)}(e,t)},isWindow:Q,each:K,css:re,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(Q(e)){if(void 0===t)return H(e);window.scrollTo(t,V(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(Q(e)){if(void 0===t)return V(e);window.scrollTo(H(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},ee);function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var le=function(e){e.preventDefault()},ae=function(t){var o=t.selectedIndex,n=t.scrollIntoView,i=t.searchValue,c=t.onHover,l=t.onSelect,a=t.suggestions,s=void 0===a?[]:a,u=t.instanceId,p=t.__experimentalRenderItem,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),m=d[0],f=d[1],v=(0,r.useRefEffect)((function(e){var t;return o>-1&&n&&e.children[o]&&(f(!0),function(e,t,o){o=o||{},9===t.nodeType&&(t=ie.getWindow(t));var n=o.allowHorizontalScroll,r=o.onlyScrollIfNeeded,i=o.alignWithTop,c=o.alignWithLeft,l=o.offsetTop||0,a=o.offsetLeft||0,s=o.offsetBottom||0,u=o.offsetRight||0;n=void 0===n||n;var p,d,m,f,v,b,y,h,g,_,w=ie.isWindow(t),x=ie.offset(e),S=ie.outerHeight(e),O=ie.outerWidth(e);w?(y=t,_=ie.height(y),g=ie.width(y),h={left:ie.scrollLeft(y),top:ie.scrollTop(y)},v={left:x.left-h.left-a,top:x.top-h.top-l},b={left:x.left+O-(h.left+g)+u,top:x.top+S-(h.top+_)+s},f=h):(p=ie.offset(t),d=t.clientHeight,m=t.clientWidth,f={left:t.scrollLeft,top:t.scrollTop},v={left:x.left-(p.left+(parseFloat(ie.css(t,"borderLeftWidth"))||0))-a,top:x.top-(p.top+(parseFloat(ie.css(t,"borderTopWidth"))||0))-l},b={left:x.left+O-(p.left+m+(parseFloat(ie.css(t,"borderRightWidth"))||0))+u,top:x.top+S-(p.top+d+(parseFloat(ie.css(t,"borderBottomWidth"))||0))+s}),v.top<0||b.top>0?!0===i?ie.scrollTop(t,f.top+v.top):!1===i?ie.scrollTop(t,f.top+b.top):v.top<0?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top):r||((i=void 0===i||!!i)?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top)),n&&(v.left<0||b.left>0?!0===c?ie.scrollLeft(t,f.left+v.left):!1===c?ie.scrollLeft(t,f.left+b.left):v.left<0?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left):r||((c=void 0===c||!!c)?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left)))}(e.children[o],e,{onlyScrollIfNeeded:!0}),t=requestAnimationFrame((function(){f(!1)}))),function(){void 0!==t&&cancelAnimationFrame(t)}}),[o,n]),b=function(e){return function(){m||null==c||c(e)}},y=function(e){return function(){null==l||l(e)}};return React.createElement("ul",{ref:v,className:"codeamp-components-multi-select-control__suggestions-list",id:"".concat(u,"-suggestions"),role:"listbox"},0===s.length&&React.createElement("li",{className:"codeamp-components-multi-select-control__no-suggestions",role:"option"},(0,e.__)("No results found.","codeamp-block-components")),s.map((function(e,t){var n,r=function(e){var t=e.label.toLocaleLowerCase().indexOf(i);return{suggestionBeforeMatch:e.label.substring(0,t),suggestionMatch:e.label.substring(t,t+i.length),suggestionAfterMatch:e.label.substring(t+i.length)}}(e),c=_()("codeamp-components-multi-select-control__suggestion",{"is-selected":t===o});return n="function"==typeof p?p({item:e}):r?React.createElement("span",{"aria-label":e.label},r.suggestionBeforeMatch,React.createElement("strong",{className:"codeamp-components-multi-select-control__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch):e.label,React.createElement("li",{id:"".concat(u,"-suggestions-").concat(t),role:"option",className:c,key:e.value,onMouseDown:le,onClick:y(e),onMouseEnter:b(e),"aria-selected":t===o},n)})))},se=o(245),ue={};function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},pe.apply(this,arguments)}function de(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function me(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ve(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ye(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||ye(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){if(e){if("string"==typeof e)return he(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(""===e)return null;var o=null!=e?e:"",n=t.find((function(e){return-1!==e.label.toLocaleLowerCase().indexOf(o.trim().toLocaleLowerCase())}));return n}ue.styleTagTransform=b(),ue.setAttributes=d(),ue.insert=u().bind(null,"head"),ue.domAPI=a(),ue.insertStyleElement=f(),c()(se.Z,ue),se.Z&&se.Z.locals&&se.Z.locals;var _e=function(){};function we(o){var n=o.autoCapitalize,i=o.autoComplete,c=o.maxLength,l=o.placeholder,a=o.label,s=void 0===a?(0,e.__)("Add item"):a,u=o.help,p=o.className,d=o.suggestions,m=void 0===d?[]:d,f=o.options,v=void 0===f?[]:f,b=o.maxSuggestions,y=void 0===b?100:b,h=o.value,g=void 0===h?[]:h,w=o.onChange,x=void 0===w?function(){}:w,S=o.onInputChange,O=void 0===S?function(){}:S,j=o.onFocus,I=void 0===j?void 0:j,C=(o.isBorderless,o.id),P=o.disabled,R=void 0!==P&&P,T=o.messages,M=void 0===T?{added:(0,e.__)("Item added."),removed:(0,e.__)("Item removed."),remove:(0,e.__)("Remove item"),__experimentalInvalid:(0,e.__)("Invalid item")}:T,D=o.__experimentalRenderItem,B=o.__experimentalAutoSelectFirstMatch,z=void 0===B||B,W=o.__experimentalValidateInput,F=void 0===W?function(){return!0}:W,H=o.__experimentalCloseSuggestionsOnSelect,V=void 0===H||H,U=o.__next36pxDefaultSize,Z=void 0!==U&&U,$=(0,r.useInstanceId)(we,"codeamp-components-multi-select-control");C&&($=C);var q=be((0,k.useState)(""),2),K=q[0],G=q[1],J=be((0,k.useState)(0),2),X=J[0],Y=J[1],Q=be((0,k.useState)(!1),2),ee=Q[0],te=Q[1],oe=be((0,k.useState)(!1),2),ne=oe[0],re=oe[1],ie=be((0,k.useState)(-1),2),ce=ie[0],le=ie[1],se=be((0,k.useState)(!1),2),ue=se[0],ye=se[1],he=(0,r.usePrevious)(m),xe=(0,r.usePrevious)(g),Se=(0,k.useRef)(null),Oe=(0,k.useRef)(null),ke=(0,r.useDebounce)(E.speak,500);function Ee(){var e;null===(e=Se.current)||void 0===e||e.focus()}function je(){var e;return Se.current===(null===(e=Se.current)||void 0===e?void 0:e.ownerDocument.activeElement)}function Ae(e){je()||e.target===Oe.current?(te(!0),re(!0)):te(!1),"function"==typeof I&&I(e)}function Ie(e){e.target===Oe.current&&ee&&e.preventDefault()}function Ce(e){Me(e.value),Ee()}function Pe(e){var t=!1;return je()&&We()&&(e(),t=!0),t}function Le(){var e=ze()-1;e>-1&&Me(g[e])}function Re(){var e=ze();e<g.length&&(Me(g[e]),function(e){Y(g.length-Math.max(e,-1)-1)}(e))}function Te(e){F(e.label)?(function(e){if(ve(new Set(e.filter((function(e){return!function(e){return g.some((function(t){return Ne(e)===Ne(t)}))}(e)})))),e.length>0){var t=ve(g);t.splice.apply(t,[ze(),0].concat(ve(e))),x(t)}}([e.value]),(0,E.speak)(M.added,"assertive"),G(""),ye(!1),le(-1),V&&re(!1),ee&&Ee()):(0,E.speak)(M.__experimentalInvalid,"assertive")}function Me(e){var t=g.filter((function(t){return Ne(t)!==Ne(e)}));x(t),(0,E.speak)(M.removed,"assertive")}function Ne(e){return"object"===fe(e)?e.value:e}function De(){return v.filter((function(e){return-1===g.indexOf(e.value)}))}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De(),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;if(""!==e.trim()){var n=[],r=[];t.forEach((function(t){var o=t.label.toLocaleLowerCase().indexOf(e.trim().toLocaleLowerCase());0===o?n.push(t):o>0&&r.push(t)})),t=n.concat(r)}return t.slice(0,o)}function ze(){return g.length-X}function We(){return 0===K.length}function Fe(){var e,t;return(null===(e=ge(K))||void 0===e||null===(t=e.label)||void 0===t?void 0:t.length)>0}function He(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=Be(K),n=o.length>0;t&&(z&&n?(le(0),ye(!0)):(le(-1),ye(!1))),le(0);var r=n?(0,e.sprintf)((0,e._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",o.length),o.length):(0,e.__)("No results.");ke(r,"assertive")}(0,k.useEffect)((function(){ee&&!je()&&Ee()}),[ee]),(0,k.useEffect)((function(){var e=!A()(m,he||[]);(e||g!==xe)&&He(e)}),[m,he,g,xe]),(0,k.useEffect)((function(){He()}),[K]),R&&ee&&(te(!1),G(""));var Ve,Ue,Ze=_()(p,"codeamp-components-multi-select-control__input-container",{"is-active":ee,"is-disabled":R}),$e={className:"components-base-control codeamp-components-multi-select-control",tabIndex:-1},qe=Be();return R||($e=Object.assign({},$e,{onKeyDown:function(e){var t=!1;if(!e.defaultPrevented){switch(e.code){case"Backspace":t=Pe(Le);break;case"Enter":case"Space":t=function(){var e=!1,t=function(){if(-1!==ce)return Be()[ce]}();return t&&ne?(Te(t),e=!0):Fe()&&""!==K.trim()&&(Te(K),e=!0),e}();break;case"ArrowLeft":t=function(){var e=!1;return We()&&(Y((function(e){return Math.min(e+1,g.length)})),e=!0),e}();break;case"ArrowUp":t=ne?(le((function(e){return(0===e?Be(K,De(),g,y).length:e)-1})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"ArrowRight":t=function(){var e=!1;return We()&&(Y((function(e){return Math.max(e-1,0)})),e=!0),e}();break;case"ArrowDown":t=ne?(le((function(e){return(e+1)%Be(K,De(),g,y).length})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"Delete":t=Pe(Re);break;case"Escape":t=function(e){return e.target instanceof HTMLInputElement&&(G(e.target.value),re(!1),le(-1),ye(!1)),!0}(e)}t&&e.preventDefault()}},onKeyPress:function(e){var t=!1;44===e.charCode&&(Fe()&&Te(K),t=!0),t&&e.preventDefault()},onFocus:Ae})),React.createElement(t.BaseControl,{id:$,label:s,help:u},React.createElement("div",$e,React.createElement("div",{ref:Oe,className:Ze,tabIndex:-1,onMouseDown:Ie,onTouchStart:Ie},React.createElement(t.Flex,{className:"codeamp-components-multi-select-control__tokens-container",justify:"flex-start",align:"flex-start",gap:"4px",wrap:!0,__next36pxDefaultSize:Z,hasTokens:!!g.length},(Ue=g.map((function(e){return v.find((function(t){return t.value===e}))||null})).map((function(e,o){return function(e,o){var n=e.value,r=e.label,i=e.onMouseEnter,c=void 0===i?_e:i,l=e.onMouseLeave,a=void 0===l?_e:l,s=e.isBorderless,u=void 0!==s&&s,p=n,d=o+1;return React.createElement(t.FlexItem,{key:"token-"+p},React.createElement(L,{value:p,label:r,title:"string"!=typeof token?r:void 0,onClickRemove:Ce,isBorderless:u,onMouseEnter:c,onMouseLeave:a,disabled:R,messages:M,termPosition:d,termsCount:g.length}))}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?de(Object(o),!0).forEach((function(t){me(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),o)})),Ue.splice(ze(),0,(Ve={instanceId:$,autoCapitalize:n,autoComplete:i,placeholder:0===g.length?l:"",key:"input",disabled:R,value:K,onBlur:function(){Fe()?te(!1):(G(""),Y(0),te(!1),re(!1),le(-1),ye(!1))},isExpanded:ne,selectedSuggestionIndex:ce,style:{lineHeight:"24px"},onClick:Ae},React.createElement(N,pe({},Ve,{onChange:c&&g.length>=c?void 0:function(e){var t=e.value;G(t),re(!0),O(t)},ref:Se})))),Ue)),ne&&React.createElement(ae,{instanceId:$,match:ge(K,v),searchValue:K.trim(),suggestions:qe,selectedIndex:ce,scrollIntoView:ue,onHover:function(e){var t=Be().indexOf(e);t>=0&&(le(t),ye(!1))},onSelect:function(e){Te(e)},__experimentalRenderItem:D}))))}}();var r=exports;for(var i in n)r[i]=n[i];n.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/styles/editor.scss");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codeamp/block-components */ "./node_modules/@codeamp/block-components/dist/index.js");
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/preview */ "./src/scripts/preview.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */










/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const [currencies, setCurrencies] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [pluginConfigured, setPluginConfigured] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onChangeDefaultCurrencyTop = currency => {
    setAttributes({
      default_currency_top: currency
    });
  };
  const onChangeDefaultCurrencyBottom = currency => {
    setAttributes({
      default_currency_bottom: currency
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!currencies) _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('/wp/v2/currency_converter_rates', {})
    }).then(response => {
      if (response.success) {
        const currenciesEntries = [];
        for (const [label, rate] of Object.entries(response.rates)) {
          currenciesEntries.push({
            value: label,
            label: label
          });
        }
        setCurrencies(currenciesEntries);
        setPluginConfigured(true);
      }
    });
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), currencies && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_7__.MultiSelectControl, {
    label: 'Select currencies available in selects',
    value: attributes.currencies,
    options: currencies,
    onChange: val => setAttributes({
      currencies: val
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    value: attributes.default_currency_top,
    options: currencies.filter(obj => attributes.currencies.includes(obj.value)),
    onChange: onChangeDefaultCurrencyTop,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency on top select', 'currency-converter')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    value: attributes.default_currency_bottom,
    options: currencies.filter(obj => attributes.currencies.includes(obj.value)),
    onChange: onChangeDefaultCurrencyBottom,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency on bottom select', 'currency-converter')
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_scripts_preview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultCurrencyTop: attributes.default_currency_top,
    defaultCurrencyBottom: attributes.default_currency_bottom,
    currencies: currencies,
    pluginConfigured: pluginConfigured
  }));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/scripts/preview.js":
/*!********************************!*\
  !*** ./src/scripts/preview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preview)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/editor.scss */ "./src/styles/editor.scss");






function Preview({
  defaultCurrencyTop,
  defaultCurrencyBottom,
  currencies,
  pluginConfigured
}) {
  const siteUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const settings = select('core').getEntityRecord('root', 'site');
    return settings?.url;
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Card, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), pluginConfigured && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardHeader, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "1 ", defaultCurrencyTop, ' ', (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('equals', 'currency-converter')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'result'
  }, "0.91 ", defaultCurrencyBottom)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardBody, null, pluginConfigured && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: 1,
    disabled: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: defaultCurrencyTop,
    options: currencies,
    disabled: true
  }))), pluginConfigured && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: 0.91,
    disabled: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    value: defaultCurrencyBottom,
    options: currencies,
    disabled: true
  }))), !pluginConfigured && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, {
    size: 14
  }, "Please configure plugin first.", ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: '_blank',
    href: siteUrl + '/wp-admin/admin.php?page=currency-converter'
  }, "Go to settings page."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalText, {
    size: 10,
    color: 'red'
  }, "In editor's preview currency rates are not calculated.")));
}

/***/ }),

/***/ "./src/styles/editor.scss":
/*!********************************!*\
  !*** ./src/styles/editor.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/frontend.scss":
/*!**********************************!*\
  !*** ./src/styles/frontend.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wilnet/currency-converter","version":"0.1.0","title":"Currency Converter","category":"widgets","icon":"money-alt","description":"This block gives shows currency converter on your page","supports":{"html":false,"typography":{"fontSize":true}},"textdomain":"currency-converter","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"currencies":{"type":"array","default":[]},"default_currency_top":{"type":"string","default":""},"default_currency_bottom":{"type":"string","default":""},"selectField":{"type":"string"},"message":{"type":"string","source":"text","selector":"div","default":""},"bg_color":{"type":"string","default":"#000000"},"text_color":{"type":"string","default":"#ffffff"},"style":{"type":"object","default":{"typography":{"fontSize":"28px"}}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/frontend.scss */ "./src/styles/frontend.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[14],{368:function(n,e,t){n.exports=t.p+"static/media/lantern-hero-top.0e901363.png"},369:function(n,e,t){n.exports=t.p+"static/media/lantern-footer.da139363.png"},370:function(n,e,t){n.exports=t.p+"static/media/light-up-map.7293af69.gif"},371:function(n,e,t){var r=t(372);n.exports=function(n,e){if(null==n)return{};var t,a,o=r(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}},372:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}},373:function(n,e){function t(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.exports=t=function(n){return typeof n}:n.exports=t=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(e)}n.exports=t},374:function(n,e,t){n.exports={parse:t(375),stringify:t(378)}},375:function(n,e,t){var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,a=t(376),o=Object.create?Object.create(null):{};function i(n,e,t,r,a){var o=e.indexOf("<",r),i=e.slice(r,-1===o?void 0:o);/^\s*$/.test(i)&&(i=" "),(!a&&o>-1&&t+n.length>=0||" "!==i)&&n.push({type:"text",content:i})}n.exports=function(n,e){e||(e={}),e.components||(e.components=o);var t,l=[],c=-1,s=[],u={},p=!1;return n.replace(r,(function(r,o){if(p){if(r!=="</"+t.name+">")return;p=!1}var f,m="/"!==r.charAt(1),h=0===r.indexOf("\x3c!--"),d=o+r.length,g=n.charAt(d);m&&!h&&(c++,"tag"===(t=a(r)).type&&e.components[t.name]&&(t.type="component",p=!0),t.voidElement||p||!g||"<"===g||i(t.children,n,c,d,e.ignoreWhitespace),u[t.tagName]=t,0===c&&l.push(t),(f=s[c-1])&&f.children.push(t),s[c]=t),(h||!m||t.voidElement)&&(h||c--,!p&&"<"!==g&&g&&i(f=-1===c?l:s[c].children,n,c,d,e.ignoreWhitespace))})),!l.length&&n.length&&i(l,n,0,0,e.ignoreWhitespace),l}},376:function(n,e,t){var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,a=t(377);n.exports=function(n){var e,t=0,o=!0,i={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return n.replace(r,(function(r){if("="===r)return o=!0,void t++;o?0===t?((a[r]||"/"===n.charAt(n.length-2))&&(i.voidElement=!0),i.name=r):(i.attrs[e]=r.replace(/^['"]|['"]$/g,""),e=void 0):(e&&(i.attrs[e]=e),e=r),t++,o=!1})),i}},377:function(n,e){n.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},378:function(n,e){function t(n,e){switch(e.type){case"text":return n+e.content;case"tag":return n+="<"+e.name+(e.attrs?function(n){var e=[];for(var t in n)e.push(t+'="'+n[t]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?n:n+e.children.reduce(t,"")+"</"+e.name+">"}}n.exports=function(n){return n.reduce((function(n,e){return n+t("",e)}),"")}},429:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),i=t(3),l=t(368),c=t.n(l),s=t(369),u=t.n(s),p=t(370),f=t.n(p),m=t(118),h=t(371),d=t.n(h),g=t(373),y=t.n(g),b=t(33),x=t.n(b),v=t(374),E=t.n(v),O=t(24),w=t(27);function j(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(t,!0).forEach((function(e){x()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function S(n,e){if(!n)return!1;var t=n.props?n.props.children:n.children;return e?t.length>0:!!t}function k(n){return n?n&&n.children?n.children:n.props&&n.props.children:[]}function U(n){return Array.isArray(n)?n:[n]}function z(n,e,t,r,a){if(""===e)return[];var i=r.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(i.join("|")).test(e);if(!n&&!l)return[e];var c={};!function n(e){U(e).forEach((function(e){"string"!==typeof e&&(S(e)?n(k(e)):"object"!==y()(e)||o.a.isValidElement(e)||Object.assign(c,e))}))}(n);var s=t.services.interpolator.interpolate(e,C({},c,{},a),t.language),u=E.a.parse("<0>".concat(s,"</0>"));function p(n,e,t){var r=k(n),a=m(r,e.children,t);return function(n){return"[object Array]"===Object.prototype.toString.call(n)&&n.every((function(n){return o.a.isValidElement(n)}))}(r)&&0===a.length?r:a}function f(n,e,t,r){n.dummy&&(n.children=e),t.push(o.a.cloneElement(n,C({},n.props,{key:r}),e))}function m(e,t,a){var c=U(e);return U(t).reduce((function(e,t,s){var u=t.children&&t.children[0]&&t.children[0].content;if("tag"===t.type){var h=c[parseInt(t.name,10)];!h&&1===a.length&&a[0][t.name]&&(h=a[0][t.name]),h||(h={});var d=0!==Object.keys(t.attrs).length?function(n,e){var t=C({},e);return t.props=Object.assign(n.props,e.props),t}({props:t.attrs},h):h,g=o.a.isValidElement(d),b=g&&S(t,!0)&&!t.voidElement,x=l&&"object"===y()(d)&&d.dummy&&!g,v="object"===y()(n)&&null!==n&&Object.hasOwnProperty.call(n,t.name);if("string"===typeof d)e.push(d);else if(S(d)||b){f(d,p(d,t,a),e,s)}else if(x){var E=m(c,t.children,a);e.push(o.a.cloneElement(d,C({},d.props,{key:s}),E))}else if(Number.isNaN(parseFloat(t.name))){if(v)f(d,p(d,t,a),e,s);else if(r.transSupportBasicHtmlNodes&&i.indexOf(t.name)>-1)if(t.voidElement)e.push(o.a.createElement(t.name,{key:"".concat(t.name,"-").concat(s)}));else{var O=m(c,t.children,a);e.push(o.a.createElement(t.name,{key:"".concat(t.name,"-").concat(s)},O))}else if(t.voidElement)e.push("<".concat(t.name," />"));else{var w=m(c,t.children,a);e.push("<".concat(t.name,">").concat(w,"</").concat(t.name,">"))}}else if("object"!==y()(d)||g)1===t.children.length&&u?e.push(o.a.cloneElement(d,C({},d.props,{key:s}),u)):e.push(o.a.cloneElement(d,C({},d.props,{key:s})));else{var j=t.children[0]?u:null;j&&e.push(j)}}else"text"===t.type&&e.push(t.content);return e}),[])}return k(m([{dummy:!0,children:n}],u,U(n||[]))[0])}function P(n){var e=n.children,t=n.count,r=n.parent,i=n.i18nKey,l=n.tOptions,c=n.values,s=n.defaults,u=n.components,p=n.ns,f=n.i18n,m=n.t,h=d()(n,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),g=Object(a.useContext)(O.a)||{},b=g.i18n,x=g.defaultNS,v=f||b||Object(O.d)();if(!v)return Object(w.d)("You will need pass in an i18next instance by using i18nextReactModule"),e;var E=m||v.t.bind(v)||function(n){return n},j=C({},Object(O.c)(),{},v.options&&v.options.react),S=p||E.ns||x||v.options&&v.options.defaultNS;S="string"===typeof S?[S]:S||["translation"];var k=s||function n(e,t){if(!e)return"";var r="",a=U(e),i=t.transKeepBasicHtmlNodesFor||[];return a.forEach((function(e,a){if("string"===typeof e)r+="".concat(e);else if(o.a.isValidElement(e)){var l=Object.keys(e.props).length,c=i.indexOf(e.type)>-1,s=e.props.children;if(!s&&c&&0===l)r+="<".concat(e.type,"/>");else if(s||c&&0===l)if(e.props.i18nIsDynamicList)r+="<".concat(a,"></").concat(a,">");else if(c&&1===l&&"string"===typeof s)r+="<".concat(e.type,">").concat(s,"</").concat(e.type,">");else{var u=n(s,t);r+="<".concat(a,">").concat(u,"</").concat(a,">")}else r+="<".concat(a,"></").concat(a,">")}else if("object"===y()(e)){var p=e.format,f=d()(e,["format"]),m=Object.keys(f);if(1===m.length){var h=p?"".concat(m[0],", ").concat(p):m[0];r+="{{".concat(h,"}}")}else Object(w.c)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else Object(w.c)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),r}(e,j)||j.transEmptyNodeValue||i,P=j.hashTransKey,A=i||(P?P(k):k),B=C({},l,{count:t},c,{},c?{}:{interpolation:{prefix:"#$?",suffix:"?$#"}},{defaultValue:k,ns:S}),D=z(u||e,A?E(A,B):k,v,j,B),N=void 0!==r?r:j.defaultTransParent;return N?o.a.createElement(N,h,D):D}function A(){var n=Object(r.a)(["\n  text-align: start;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 32px;\n  color: #ffffff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  @media (max-width: 599px) {\n    font-size: 14px;\n    line-height: 24px;\n    left: 30%;\n    transform: translate(-30%, -50%);\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(r.a)(["\n  height: ","px;\n  width: 100vw;\n  filter: brightness(50%);\n"]);return B=function(){return n},n}function D(){var n=Object(r.a)(["\n  position: relative;\n  text-align: center;\n"]);return D=function(){return n},n}function N(){var n=Object(r.a)(["\n  max-width: 1440px;\n  margin: 35px auto;\n  align-items: center;\n  @media (max-width: 599px) {\n    padding: 0px 35px;\n  }\n"]);return N=function(){return n},n}function T(){var n=Object(r.a)(["\n  font-size: 18px;\n"]);return T=function(){return n},n}function K(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 35px;\n  color: ",";\n"]);return K=function(){return n},n}function V(){var n=Object(r.a)(["\n  height: 515px;\n  width: 388px;\n  margin-bottom: 20px;\n"]);return V=function(){return n},n}function F(){var n=Object(r.a)(["\n  position: relative;\n  order: 1;\n  grid-row: 1;\n  padding: 70px 0px;\n  text-align: center;\n  @media (min-width: 900px) {\n    position: sticky;\n    top: 20px;\n    order: 2;\n    grid-column: 2;\n  }\n  @media (max-width: 599px) {\n    padding: 35px 0px;\n  }\n"]);return F=function(){return n},n}function H(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: ##1e1e1e;\n"]);return H=function(){return n},n}function L(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 44px;\n  letter-spacing: 0.02em;\n  color: ##1e1e1e;\n  margin-bottom: 40px;\n"]);return L=function(){return n},n}function M(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: #000000;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #dedede;\n"]);return M=function(){return n},n}function I(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  color: #ffffff;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  @media (max-width: 599px) {\n    font-size: 16px;\n    line-height: 22px;\n    top: 55%;\n    text-align: start;\n    left: 30%;\n    transform: translate(-30%, -50%);\n  }\n"]);return I=function(){return n},n}function W(){var n=Object(r.a)(["\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 44px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  @media (max-width: 599px) {\n    top: 30%;\n    text-align: start;\n    left: 30%;\n    transform: translate(-30%, -50%);\n  }\n"]);return W=function(){return n},n}function $(){var n=Object(r.a)(["\n  position: relative;\n  text-align: center;\n"]);return $=function(){return n},n}function R(){var n=Object(r.a)(["\n  height: ","px;\n  width: 100vw;\n"]);return R=function(){return n},n}function J(){var n=Object(r.a)(["\n  align-items: start;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media (max-width: 599px) {\n    padding: 35px 0px;\n  }\n"]);return J=function(){return n},n}function Y(){var n=Object(r.a)(["\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0px 25px;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 900px) {\n    display: grid;\n    grid-column-gap: 116px;\n  }\n"]);return Y=function(){return n},n}var q=i.a.section(Y()),G=i.a.section(J()),Q=i.a.img(R(),(function(n){return n.height})),X=i.a.div($()),Z=i.a.div(W()),_=i.a.div(I()),nn=i.a.div(M()),en=i.a.div(L()),tn=i.a.div(H()),rn=i.a.section(F()),an=i.a.img(V()),on=i.a.div(K(),(function(n){return n.color})),ln=Object(i.a)(on)(T()),cn=i.a.section(N()),sn=i.a.div(D()),un=i.a.img(B(),(function(n){return n.height})),pn=i.a.div(A());e.default=function(){var n=Object(m.a)().t,e=new Date,t=new Date("11/30/2020").getTime()-e.getTime(),r=Math.ceil(t/864e5);return o.a.createElement(o.a.Fragment,null,o.a.createElement(X,null,o.a.createElement(Q,{height:304,src:c.a,alt:"lantern overlay"}),o.a.createElement(Z,null,n("lightUpChinatown.headerText")),o.a.createElement(_,null,n("lightUpChinatown.headerSubtext"))),o.a.createElement(q,null,o.a.createElement(G,null,o.a.createElement(en,null,n("lightUpChinatown.summaryHeader")),o.a.createElement(tn,null,n("lightUpChinatown.summaryBody1")),o.a.createElement("br",null),o.a.createElement(tn,null,o.a.createElement(P,{i18nKey:"lightUpChinatown.summaryBody2"},"Support the Light Up Chinatown project by contributing to",o.a.createElement("strong",null,"\u201cAdopt-A-Lantern!\u201d")," In addition to light fixtures being installed, beautiful outdoor lanterns will be hung along Mott Street from Canal to Bayard to welcome patrons into our wonderful community, right in time for the holidays.")),o.a.createElement("br",null),o.a.createElement(tn,null,o.a.createElement("p",null,n("lightUpChinatown.phase1")),o.a.createElement("p",null,n("lightUpChinatown.phase2")),o.a.createElement("p",null,n("lightUpChinatown.phase3"))),o.a.createElement("br",null),o.a.createElement(tn,null,n("lightUpChinatown.summaryBody3")),o.a.createElement("br",null),o.a.createElement(tn,null,o.a.createElement(P,{i18nKey:"lightUpChinatown.summaryBody4"},o.a.createElement("strong",null,"Send Chinatown Love")," along with",o.a.createElement("strong",null,"Pearl River Mart, 46 Mott St Bakery, CCBA, Chinese Chamber of Commerce"),"and ",o.a.createElement("strong",null,"UDO")," are partnering to raise funds to light up major blocks of Chinatown. We hope you will join us."))),o.a.createElement(rn,null,o.a.createElement(an,{src:f.a})," ",o.a.createElement(on,{color:"#1E1E1E"},n("lightUpChinatown.campaignHeader")),o.a.createElement(ln,{color:"#1E1E1E"},n("lightUpChinatown.campaignDates")),o.a.createElement(on,{color:"#CF6E8A"},r," ",n("lightUpChinatown.campaignDaysLeft")))),o.a.createElement(cn,null,o.a.createElement(nn,null,n("lightUpChinatown.donationTierText"))),o.a.createElement(sn,null,o.a.createElement(un,{height:395,src:u.a,alt:"lantern overlay"}),o.a.createElement(pn,null,n("lightUpChinatown.ceremony1"),o.a.createElement("br",null),o.a.createElement("br",null),n("lightUpChinatown.ceremony2"))))}}}]);
//# sourceMappingURL=14.02d23ad2.chunk.js.map
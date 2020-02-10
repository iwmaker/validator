"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=(e=require("he"))&&"object"==typeof e&&"default"in e?e.default:e,n=Object.freeze({});function r(e,t){for(var n=Object.create(null),r=e.split(","),a=0;a<r.length;a++)n[r[a]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function a(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var o=/-(\w)/g,s=a(function(e){return e.replace(o,function(e,t){return t?t.toUpperCase():""})}),i=/\B([A-Z])/g,l=a(function(e){return e.replace(i,"-$1").toLowerCase()});var c=function(e,t,n){return!1},p=r("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),u=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,f=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,d="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/.source+"]*",v="((?:"+d+"\\:)?"+d+")",m=new RegExp("^<"+v),h=/^\s*(\/?)>/,g=new RegExp("^<\\/"+v+"[^>]*>"),x=/^<!DOCTYPE [^>]+>/i,y=/^<!\--/,w=/^<!\[/,b=r("script,style,textarea",!0),E={},N={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},O=/&(?:lt|gt|quot|amp|#39);/g,D=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,k=r("pre,textarea",!0),S=function(e,t){return e&&k(e)&&"\n"===t[0]};function _(e,t){var n=t?D:O;return e.replace(n,function(e){return N[e]})}var T=/[\w).+\-_$\]]/;function A(e){var t,n,r,a,o,s=!1,i=!1,l=!1,c=!1,p=0,u=0,f=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),s)39===t&&92!==n&&(s=!1);else if(i)34===t&&92!==n&&(i=!1);else if(l)96===t&&92!==n&&(l=!1);else if(c)47===t&&92!==n&&(c=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||p||u||f){switch(t){case 34:i=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:f++;break;case 41:f--;break;case 91:u++;break;case 93:u--;break;case 123:p++;break;case 125:p--}if(47===t){for(var v=r-1,m=void 0;v>=0&&" "===(m=e.charAt(v));v--);m&&T.test(m)||(c=!0)}}else void 0===a?(d=r+1,a=e.slice(0,r).trim()):h();function h(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===a?a=e.slice(0,r).trim():0!==d&&h(),o)for(r=0;r<o.length;r++)a=C(a,o[r]);return a}function C(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),a=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==a?","+a:a)}var V,M,F,L,R,$,j=/\{\{((?:.|\r?\n)+?)\}\}/g,U=/[-.*+?^${}()|[\]\/\\]/g,I=a(function(e){var t=e[0].replace(U,"\\$&"),n=e[1].replace(U,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});function q(e,t){var n=t?I(t):j;if(n.test(e)){for(var r,a,o,s=[],i=[],l=n.lastIndex=0;r=n.exec(e);){(a=r.index)>l&&(i.push(o=e.slice(l,a)),s.push(JSON.stringify(o)));var c=A(r[1].trim());s.push("_s("+c+")"),i.push({"@binding":c}),l=a+r[0].length}return l<e.length&&(i.push(o=e.slice(l)),s.push(JSON.stringify(o))),{expression:s.join("+"),tokens:i}}}function H(e,t){var n=function(e){if(e=e.trim(),V=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<V-1)return(L=e.lastIndexOf("."))>-1?{exp:e.slice(0,L),key:'"'+e.slice(L+1)+'"'}:{exp:e,key:null};M=e,L=R=$=0;for(;!B();)J(F=P())?W(F):91===F&&z(F);return{exp:e.slice(0,R),key:e.slice(R+1,$)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function P(){return M.charCodeAt(++L)}function B(){return L>=V}function J(e){return 34===e||39===e}function z(e){var t=1;for(R=L;!B();)if(J(e=P()))W(e);else if(91===e&&t++,93===e&&t--,0===t){$=L;break}}function W(e){for(var t=e;!B()&&(e=P())!==t;);}var Z,K="undefined"!=typeof window,X="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),G=K&&window.navigator.userAgent.toLowerCase(),Q=G&&/msie|trident/.test(G),ee=(G&&G.indexOf("msie 9.0"),G&&G.indexOf("edge/")>0);G&&G.indexOf("android"),G&&/iphone|ipad|ipod|ios/.test(G),G&&/chrome\/\d+/.test(G),G&&/phantomjs/.test(G),G&&G.match(/firefox\/(\d+)/);if(K)try{var te={};Object.defineProperty(te,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,te)}catch(e){}var ne=function(){return void 0===Z&&(Z=!K&&!X&&"undefined"!=typeof global&&(global.process&&"server"===global.process.env.VUE_ENV)),Z};function re(e){return"function"==typeof e&&/native code/.test(e.toString())}"undefined"!=typeof Symbol&&re(Symbol)&&"undefined"!=typeof Reflect&&re(Reflect.ownKeys);function ae(e,t){console.error("[Vue compiler]: "+e)}function oe(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function se(e,t,n,r,a){(e.props||(e.props=[])).push(me({name:t,value:n,dynamic:a},r)),e.plain=!1}function ie(e,t,n,r,a){(a?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(me({name:t,value:n,dynamic:a},r)),e.plain=!1}function le(e,t,n,r,a,o,s,i){(e.directives||(e.directives=[])).push(me({name:t,rawName:n,value:r,arg:a,isDynamicArg:o,modifiers:s},i)),e.plain=!1}function ce(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function pe(e,t,r,a,o,s,i,l){var c;a=a||n,"production"!==process.env.NODE_ENV&&s&&a.prevent&&a.passive&&s("passive and prevent can't be used together. Passive handler can't prevent default event.",i),a.right?l?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete a.right):a.middle&&(l?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),a.capture&&(delete a.capture,t=ce("!",t,l)),a.once&&(delete a.once,t=ce("~",t,l)),a.passive&&(delete a.passive,t=ce("&",t,l)),a.native?(delete a.native,c=e.nativeEvents||(e.nativeEvents={})):c=e.events||(e.events={});var p=me({value:r.trim(),dynamic:l},i);a!==n&&(p.modifiers=a);var u=c[t];Array.isArray(u)?o?u.unshift(p):u.push(p):c[t]=u?o?[p,u]:[u,p]:p,e.plain=!1}function ue(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}function fe(e,t,n){var r=de(e,":"+t)||de(e,"v-bind:"+t);if(null!=r)return A(r);if(!1!==n){var a=de(e,t);if(null!=a)return JSON.stringify(a)}}function de(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var a=e.attrsList,o=0,s=a.length;o<s;o++)if(a[o].name===t){a.splice(o,1);break}return n&&delete e.attrsMap[t],r}function ve(e,t){for(var n=e.attrsList,r=0,a=n.length;r<a;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function me(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}"undefined"!=typeof Set&&re(Set);var he,ge,xe,ye,we,be,Ee,Ne,Oe=/^@|^v-on:/,De=/^v-|^@|^:|^#/,ke=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Se=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,_e=/^\(|\)$/g,Te=/^\[.*\]$/,Ae=/:(.*)$/,Ce=/^:|^\.|^v-bind:/,Ve=/\.[^.\]]+(?=[^\]]*$)/g,Me=/^v-slot(:|$)|^#/,Fe=/[\r\n]/,Le=/\s+/g,Re=/[\s"'<>\/=]/,$e=a(t.decode),je="_empty_";function Ue(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ze(t),rawAttrsMap:{},parent:n,children:[]}}function Ie(e,t){var n,r;!function(e){var t=fe(e,"key");if(t){if("production"!==process.env.NODE_ENV&&("template"===e.tag&&exports.warn("<template> cannot be keyed. Place the key on real elements instead.",ue(e,"key")),e.for)){var n=e.iterator2||e.iterator1,r=e.parent;n&&n===t&&r&&"transition-group"===r.tag&&exports.warn("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.",ue(e,"key"),!0)}e.key=t}}(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,(r=fe(n=e,"ref"))&&(n.ref=r,n.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(n)),function(e){var t;"template"===e.tag?(t=de(e,"scope"),"production"!==process.env.NODE_ENV&&t&&exports.warn('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.',e.rawAttrsMap.scope,!0),e.slotScope=t||de(e,"slot-scope")):(t=de(e,"slot-scope"))&&("production"!==process.env.NODE_ENV&&e.attrsMap["v-for"]&&exports.warn("Ambiguous combined usage of slot-scope and v-for on <"+e.tag+"> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.",e.rawAttrsMap["slot-scope"],!0),e.slotScope=t);var n=fe(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||ie(e,"slot",n,ue(e,"slot")));if("template"===e.tag){var r=ve(e,Me);if(r){"production"!==process.env.NODE_ENV&&((e.slotTarget||e.slotScope)&&exports.warn("Unexpected mixed usage of different slot syntaxes.",e),e.parent&&!Ne(e.parent)&&exports.warn("<template v-slot> can only appear at the root level inside the receiving component",e));var a=Be(r),o=a.name,s=a.dynamic;e.slotTarget=o,e.slotTargetDynamic=s,e.slotScope=r.value||je}}else{var i=ve(e,Me);if(i){"production"!==process.env.NODE_ENV&&(Ne(e)||exports.warn("v-slot can only be used on components or <template>.",i),(e.slotScope||e.slotTarget)&&exports.warn("Unexpected mixed usage of different slot syntaxes.",e),e.scopedSlots&&exports.warn("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.",i));var l=e.scopedSlots||(e.scopedSlots={}),c=Be(i),p=c.name,u=c.dynamic,f=l[p]=Ue("template",[],e);f.slotTarget=p,f.slotTargetDynamic=u,f.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=f,!0}),f.slotScope=i.value||je,e.children=[],e.plain=!1}}}(e),function(e){"slot"===e.tag&&(e.slotName=fe(e,"name"),"production"!==process.env.NODE_ENV&&e.key&&exports.warn("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.",ue(e,"key")))}(e),function(e){var t;(t=fe(e,"is"))&&(e.component=t);null!=de(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var a=0;a<ge.length;a++)e=ge[a](e,t)||e;return function(e){var t,n,r,a,o,i,c,p,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=a=u[t].name,o=u[t].value,De.test(r))if(e.hasBindings=!0,(i=Je(r.replace(De,"")))&&(r=r.replace(Ve,"")),Ce.test(r))r=r.replace(Ce,""),o=A(o),(p=Te.test(r))&&(r=r.slice(1,-1)),"production"!==process.env.NODE_ENV&&0===o.trim().length&&exports.warn('The value for a v-bind expression cannot be empty. Found in "v-bind:'+r+'"'),i&&(i.prop&&!p&&"innerHtml"===(r=s(r))&&(r="innerHTML"),i.camel&&!p&&(r=s(r)),i.sync&&(c=H(o,"$event"),p?pe(e,'"update:"+('+r+")",c,null,!1,exports.warn,u[t],!0):(pe(e,"update:"+s(r),c,null,!1,exports.warn,u[t]),l(r)!==s(r)&&pe(e,"update:"+l(r),c,null,!1,exports.warn,u[t])))),i&&i.prop||!e.component&&be(e.tag,e.attrsMap.type,r)?se(e,r,o,u[t],p):ie(e,r,o,u[t],p);else if(Oe.test(r))r=r.replace(Oe,""),(p=Te.test(r))&&(r=r.slice(1,-1)),pe(e,r,o,i,!1,exports.warn,u[t],p);else{var f=(r=r.replace(De,"")).match(Ae),d=f&&f[1];p=!1,d&&(r=r.slice(0,-(d.length+1)),Te.test(d)&&(d=d.slice(1,-1),p=!0)),le(e,r,a,o,d,p,i,u[t]),"production"!==process.env.NODE_ENV&&"model"===r&&Ke(e,o)}else{if("production"!==process.env.NODE_ENV){var v=q(o,he);v&&exports.warn(r+'="'+o+'": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.',u[t])}ie(e,r,JSON.stringify(o),u[t]),!e.component&&"muted"===r&&be(e.tag,e.attrsMap.type,r)&&se(e,r,"true",u[t])}}(e),e}function qe(e){var t;if(t=de(e,"v-for")){var n=He(t);n?function(e,t){for(var n in t)e[n]=t[n]}(e,n):"production"!==process.env.NODE_ENV&&exports.warn("Invalid v-for expression: "+t,e.rawAttrsMap["v-for"])}}function He(e){var t=e.match(ke);if(t){var n={};n.for=t[2].trim();var r=t[1].trim().replace(_e,""),a=r.match(Se);return a?(n.alias=r.replace(Se,"").trim(),n.iterator1=a[1].trim(),a[2]&&(n.iterator2=a[2].trim())):n.alias=r,n}}function Pe(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Be(e){var t=e.name.replace(Me,"");return t||("#"!==e.name[0]?t="default":"production"!==process.env.NODE_ENV&&exports.warn("v-slot shorthand syntax requires a slot name.",e)),Te.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function Je(e){var t=e.match(Ve);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ze(e){for(var t={},n=0,r=e.length;n<r;n++)"production"===process.env.NODE_ENV||!t[e[n].name]||Q||ee||exports.warn("duplicate attribute: "+e[n].name,e[n]),t[e[n].name]=e[n].value;return t}var We=/^xmlns:NS\d+/,Ze=/^NS\d+:/;function Ke(e,t){for(var n=e;n;)n.for&&n.alias===t&&exports.warn("<"+e.tag+' v-model="'+t+'">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.',e.rawAttrsMap["v-model"]),n=n.parent}exports.addIfCondition=Pe,exports.bindRE=Ce,exports.createASTElement=Ue,exports.dirRE=De,exports.emptySlotScopeToken=je,exports.forAliasRE=ke,exports.forIteratorRE=Se,exports.onRE=Oe,exports.parse=function(e,t){exports.warn=t.warn||ae,we=t.isPreTag||c,be=t.mustUseProp||c,Ee=t.getTagNamespace||c;var n=t.isReservedTag||c;Ne=function(e){return!!e.component||!n(e.tag)},ge=oe(t.modules,"transformNode"),xe=oe(t.modules,"preTransformNode"),ye=oe(t.modules,"postTransformNode"),he=t.delimiters;var r,a,o=[],s=!1!==t.preserveWhitespace,i=t.whitespace,l=!1,d=!1,v=!1;function N(e,t){v||(v=!0,exports.warn(e,t))}function O(e){if(D(e),l||e.processed||(e=Ie(e,t)),o.length||e===r||(r.if&&(e.elseif||e.else)?("production"!==process.env.NODE_ENV&&k(e),Pe(r,{exp:e.elseif,block:e})):"production"!==process.env.NODE_ENV&&N("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.",{start:e.start})),a&&!e.forbidden)if(e.elseif||e.else)s=e,(i=function(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];"production"!==process.env.NODE_ENV&&" "!==e[t].text&&exports.warn('text "'+e[t].text.trim()+'" between v-if and v-else(-if) will be ignored.',e[t]),e.pop()}}(a.children))&&i.if?Pe(i,{exp:s.elseif,block:s}):"production"!==process.env.NODE_ENV&&exports.warn("v-"+(s.elseif?'else-if="'+s.elseif+'"':"else")+" used on element <"+s.tag+"> without corresponding v-if.",s.rawAttrsMap[s.elseif?"v-else-if":"v-else"]);else{if(e.slotScope){var n=e.slotTarget||'"default"';(a.scopedSlots||(a.scopedSlots={}))[n]=e}a.children.push(e),e.parent=a}var s,i;e.children=e.children.filter(function(e){return!e.slotScope}),D(e),e.pre&&(l=!1),we(e.tag)&&(d=!1);for(var c=0;c<ye.length;c++)ye[c](e,t)}function D(e){if(!d)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}function k(e){"slot"!==e.tag&&"template"!==e.tag||N("Cannot use <"+e.tag+"> as component root element because it may contain multiple nodes.",{start:e.start}),e.attrsMap.hasOwnProperty("v-for")&&N("Cannot use v-for on stateful component root element because it renders multiple elements.",e.rawAttrsMap["v-for"])}return function(e,t){for(var n,r,a=[],o=t.expectHTML,s=t.isUnaryTag||c,i=t.canBeLeftOpenTag||c,l=0;e;){if(n=e,r&&b(r)){var d=0,v=r.toLowerCase(),N=E[v]||(E[v]=new RegExp("([\\s\\S]*?)(</"+v+"[^>]*>)","i")),O=e.replace(N,function(e,n,r){return d=r.length,b(v)||"noscript"===v||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),S(v,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});l+=e.length-O.length,e=O,I(v,l-d,l)}else{var D=e.indexOf("<");if(0===D){if(y.test(e)){var k=e.indexOf("--\x3e");if(k>=0){t.shouldKeepComment&&t.comment(e.substring(4,k),l,l+k+3),$(k+3);continue}}if(w.test(e)){var T=e.indexOf("]>");if(T>=0){$(T+2);continue}}var A=e.match(x);if(A){$(A[0].length);continue}var C=e.match(g);if(C){var V=l;$(C[0].length),I(C[1],V,l);continue}var M=j();if(M){U(M),S(M.tagName,e)&&$(1);continue}}var F=void 0,L=void 0,R=void 0;if(D>=0){for(L=e.slice(D);!(g.test(L)||m.test(L)||y.test(L)||w.test(L)||(R=L.indexOf("<",1))<0);)D+=R,L=e.slice(D);F=e.substring(0,D)}D<0&&(F=e),F&&$(F.length),t.chars&&F&&t.chars(F,l-F.length,l)}if(e===n){t.chars&&t.chars(e),"production"!==process.env.NODE_ENV&&!a.length&&t.warn&&t.warn('Mal-formatted tag at end of template: "'+e+'"',{start:l+e.length});break}}function $(t){l+=t,e=e.substring(t)}function j(){var t=e.match(m);if(t){var n,r,a={tagName:t[1],attrs:[],start:l};for($(t[0].length);!(n=e.match(h))&&(r=e.match(f)||e.match(u));)r.start=l,$(r[0].length),r.end=l,a.attrs.push(r);if(n)return a.unarySlash=n[1],$(n[0].length),a.end=l,a}}function U(e){var n=e.tagName,l=e.unarySlash;o&&("p"===r&&p(n)&&I(r),i(n)&&r===n&&I(n));for(var c=s(n)||!!l,u=e.attrs.length,f=new Array(u),d=0;d<u;d++){var v=e.attrs[d],m=v[3]||v[4]||v[5]||"",h="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[d]={name:v[1],value:_(m,h)},"production"!==process.env.NODE_ENV&&t.outputSourceRange&&(f[d].start=v.start+v[0].match(/^\s*/).length,f[d].end=v.end)}c||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,c,e.start,e.end)}function I(e,n,o){var s,i;if(null==n&&(n=l),null==o&&(o=l),e)for(i=e.toLowerCase(),s=a.length-1;s>=0&&a[s].lowerCasedTag!==i;s--);else s=0;if(s>=0){for(var c=a.length-1;c>=s;c--)"production"!==process.env.NODE_ENV&&(c>s||!e)&&t.warn&&t.warn("tag <"+a[c].tag+"> has no matching end tag.",{start:a[c].start,end:a[c].end}),t.end&&t.end(a[c].tag,n,o);a.length=s,r=s&&a[s-1].tag}else"br"===i?t.start&&t.start(e,[],!0,n,o):"p"===i&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}I()}(e,{warn:exports.warn,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,n,s,i,c){var p=a&&a.ns||Ee(e);Q&&"svg"===p&&(n=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];We.test(r.name)||(r.name=r.name.replace(Ze,""),t.push(r))}return t}(n));var u,f=Ue(e,n,a);p&&(f.ns=p),"production"!==process.env.NODE_ENV&&(t.outputSourceRange&&(f.start=i,f.end=c,f.rawAttrsMap=f.attrsList.reduce(function(e,t){return e[t.name]=t,e},{})),n.forEach(function(e){Re.test(e.name)&&exports.warn("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.",{start:e.start+e.name.indexOf("["),end:e.start+e.name.length})})),"style"!==(u=f).tag&&("script"!==u.tag||u.attrsMap.type&&"text/javascript"!==u.attrsMap.type)||ne()||(f.forbidden=!0,"production"!==process.env.NODE_ENV&&exports.warn("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <"+e+">, as they will not be parsed.",{start:f.start}));for(var v=0;v<xe.length;v++)f=xe[v](f,t)||f;l||(function(e){null!=de(e,"v-pre")&&(e.pre=!0)}(f),f.pre&&(l=!0)),we(f.tag)&&(d=!0),l?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),a=0;a<n;a++)r[a]={name:t[a].name,value:JSON.stringify(t[a].value)},null!=t[a].start&&(r[a].start=t[a].start,r[a].end=t[a].end);else e.pre||(e.plain=!0)}(f):f.processed||(qe(f),function(e){var t=de(e,"v-if");if(t)e.if=t,Pe(e,{exp:t,block:e});else{null!=de(e,"v-else")&&(e.else=!0);var n=de(e,"v-else-if");n&&(e.elseif=n)}}(f),function(e){null!=de(e,"v-once")&&(e.once=!0)}(f)),r||(r=f,"production"!==process.env.NODE_ENV&&k(r)),s?O(f):(a=f,o.push(f))},end:function(e,n,r){var s=o[o.length-1];o.length-=1,a=o[o.length-1],"production"!==process.env.NODE_ENV&&t.outputSourceRange&&(s.end=r),O(s)},chars:function(n,r,o){if(a){if(!Q||"textarea"!==a.tag||a.attrsMap.placeholder!==n){var c,p,u,f=a.children;(n=d||n.trim()?"script"===(c=a).tag||"style"===c.tag?n:$e(n):f.length?i?"condense"===i&&Fe.test(n)?"":" ":s?" ":"":"")&&(d||"condense"!==i||(n=n.replace(Le," ")),!l&&" "!==n&&(p=q(n,he))?u={type:2,expression:p.expression,tokens:p.tokens,text:n}:" "===n&&f.length&&" "===f[f.length-1].text||(u={type:3,text:n}),u&&("production"!==process.env.NODE_ENV&&t.outputSourceRange&&(u.start=r,u.end=o),f.push(u)))}}else"production"!==process.env.NODE_ENV&&(n===e?N("Component template requires a root element, rather than just text.",{start:r}):(n=n.trim())&&N('text "'+n+'" outside root element will be ignored.',{start:r}))},comment:function(e,n,r){if(a){var o={type:3,text:e,isComment:!0};"production"!==process.env.NODE_ENV&&t.outputSourceRange&&(o.start=n,o.end=r),a.children.push(o)}}}),r},exports.parseFor=He,exports.processElement=Ie,exports.processFor=qe;
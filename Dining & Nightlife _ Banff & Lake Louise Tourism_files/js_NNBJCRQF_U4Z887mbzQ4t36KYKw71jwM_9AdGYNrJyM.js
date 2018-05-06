//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map;
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.2.1";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer});
;
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map;
/*! lazysizes - v1.4.0 */
!function(){"use strict";if(window.addEventListener){var a=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,c=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,d={contain:1,cover:1},e=window.requestAnimationFrame||setTimeout,f=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},g=function(e,f,g){var h=document.createElement("picture"),i=f.getAttribute(lazySizesConfig.sizesAttr),j=f.getAttribute("data-ratio"),k=f.getAttribute("data-optimumx"),l=(getComputedStyle(f)||{getPropertyValue:function(){}}).getPropertyValue("background-size");!d[l]&&d[f.style.backgroundSize]&&(l=f.style.backgroundSize),!d[l]||"auto"!=i&&i||(g.setAttribute("data-parent-fit",l),i="auto"),f._lazybgset&&f._lazybgset.parentNode==f&&f.removeChild(f._lazybgset),Object.defineProperty(g,"_lazybgset",{value:f,writable:!0}),Object.defineProperty(f,"_lazybgset",{value:h,writable:!0}),e=e.replace(a," ").split(b),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=e.length||i||(i="auto"),e.forEach(function(a){var b=document.createElement("source");i&&"auto"!=i&&b.setAttribute("sizes",i),a.match(c)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(b)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),f.removeAttribute(lazySizesConfig.sizesAttr),f.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),f.appendChild(h)},h=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,d=b.currentSrc||b.src;d&&(c.style.backgroundImage="url("+d+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,d;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(d=a.target,c=document.createElement("img"),c.alt="",c._lazybgsetLoading=!0,a.detail.firesLoad=!0,g(b,d,c),setTimeout(function(){lazySizes.loader.unveil(c),e(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&h({target:c})})}))}),document.addEventListener("load",h,!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=f(a.target._lazybgset))})}}();;
/*! lazysizes - v1.4.0 */
!function(a,b){"use strict";function c(a,c){if(!e[a]){var d=b.createElement(c?"link":"script"),f=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,e[a]=!0,e[d.src||d.href]=!0,f.parentNode.insertBefore(d,f)}}var d,e={};b.addEventListener&&(d=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(b){var e,f,g,h;b.defaultPrevented||("none"==b.target.preload&&(b.target.preload="auto"),e=b.target.getAttribute("data-link"),e&&c(e,!0),e=b.target.getAttribute("data-script"),e&&c(e),e=b.target.getAttribute("data-require"),e&&a.require&&require([e]),g=b.target.getAttribute("data-bg"),g&&(b.detail.firesLoad=!0,f=function(){b.target.style.backgroundImage="url("+g+")",b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(g,f)),h=b.target.getAttribute("data-poster"),h&&(b.detail.firesLoad=!0,f=function(){b.target.poster=h,b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(h,f)))},!1))}(window,document);;
/*! lazysizes - v1.4.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes"in b.createElement("img"),f="addEventListener",g="getAttribute",h=a[f],i=a.setTimeout,j=a.requestAnimationFrame||i,k=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],m={},n=Array.prototype.forEach,o=function(a,b){return m[b]||(m[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),m[b].test(a[g]("class")||"")&&m[b]},p=function(a,b){o(a,b)||a.setAttribute("class",(a[g]("class")||"").trim()+" "+b)},q=function(a,b){var c;(c=o(a,b))&&a.setAttribute("class",(a[g]("class")||"").replace(c," "))},r=function(a,b,c){var d=c?f:"removeEventListener";c&&r(a,b),l.forEach(function(c){a[d](c,b)})},s=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},t=function(b,d){var f;!e&&(f=a.picturefill||c.pf)?f({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},u=function(a,b){return(getComputedStyle(a,null)||{})[b]},v=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},w=function(b){var c,d=0,e=a.Date,f=function(){c=!1,d=e.now(),b()},g=function(){i(f)},h=function(){j(g)};return function(){if(!c){var a=125-(e.now()-d);c=!0,6>a&&(a=6),i(h,a)}}},x=function(){var e,l,m,v,x,z,A,B,C,D,E,F,G,H,I,J=/^img$/i,K=/^iframe$/i,L="onscroll"in a&&!/glebot/.test(navigator.userAgent),M=0,N=0,O=0,P=0,Q=function(a){O--,a&&a.target&&r(a.target,Q),(!a||0>O||!a.target)&&(O=0)},R=function(a,c){var e,f=a,g="hidden"==u(b.body,"visibility")||"hidden"!=u(a,"visibility");for(C-=c,F+=c,D-=c,E+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(u(f,"opacity")||1)>0,g&&"visible"!=u(f,"overflow")&&(e=f.getBoundingClientRect(),g=E>e.left&&D<e.right&&F>e.top-1&&C<e.bottom+1);return g},S=function(){var a,b,f,h,i,j,k,n,o;if((x=c.loadMode)&&8>O&&(a=e.length)){b=0,P++,null==H&&("expand"in c||(c.expand=d.clientHeight>600?d.clientWidth>860?500:410:359),G=c.expand,H=G*c.expFactor),H>N&&1>O&&P>3&&x>2?(N=H,P=0):N=x>1&&P>2&&6>O?G:M;for(;a>b;b++)if(e[b]&&!e[b]._lazyRace)if(L)if((n=e[b][g]("data-expand"))&&(j=1*n)||(j=N),o!==j&&(A=innerWidth+j*I,B=innerHeight+j,k=-1*j,o=j),f=e[b].getBoundingClientRect(),(F=f.bottom)>=k&&(C=f.top)<=B&&(E=f.right)>=k*I&&(D=f.left)<=A&&(F||E||D||C)&&(m&&3>O&&!n&&(3>x||4>P)||R(e[b],j))){if(Y(e[b]),i=!0,O>9)break}else!i&&m&&!h&&4>O&&4>P&&x>2&&(l[0]||c.preloadAfterLoad)&&(l[0]||!n&&(F||E||D||C||"auto"!=e[b][g](c.sizesAttr)))&&(h=l[0]||e[b]);else Y(e[b]);h&&!i&&Y(h)}},T=w(S),U=function(a){p(a.target,c.loadedClass),q(a.target,c.loadingClass),r(a.target,U)},V=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},W=function(a){var b,d,e=a[g](c.srcsetAttr);(b=c.customMedia[a[g]("data-media")||a[g]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},X=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,j(c))}}(),Y=function(a){var b,d,e,f,h,j,l,u=J.test(a.nodeName),w=u&&(a[g](c.sizesAttr)||a[g]("sizes")),x="auto"==w;(!x&&m||!u||!a.src&&!a.srcset||a.complete||o(a,c.errorClass))&&(x&&(l=a.offsetWidth),a._lazyRace=!0,O++,X(function(){a._lazyRace&&delete a._lazyRace,(h=s(a,"lazybeforeunveil")).defaultPrevented||(w&&(x?(y.updateElem(a,!0,l),p(a,c.autosizesClass)):a.setAttribute("sizes",w)),d=a[g](c.srcsetAttr),b=a[g](c.srcAttr),u&&(e=a.parentNode,f=e&&k.test(e.nodeName||"")),j=h.detail.firesLoad||"src"in a&&(d||b||f),h={target:a},j&&(r(a,Q,!0),clearTimeout(v),v=i(Q,2500),p(a,c.loadingClass),r(a,U,!0)),f&&n.call(e.getElementsByTagName("source"),W),d?a.setAttribute("srcset",d):b&&!f&&(K.test(a.nodeName)?V(a,b):a.src=b),(d||f)&&t(a,{src:b})),q(a,c.lazyClass),(!j||a.complete)&&(j?Q(h):O--,U(h))}))},Z=function(){if(!m){if(Date.now()-z<999)return void i(Z,999);var a,b=function(){c.loadMode=3,T()};m=!0,c.loadMode=3,O||(P?T():i(S)),h("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=i(b,99)},!0)}};return{_:function(){z=Date.now(),e=b.getElementsByClassName(c.lazyClass),l=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),I=c.hFac,h("scroll",T,!0),h("resize",T,!0),a.MutationObserver?new MutationObserver(T).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",T,!0),d[f]("DOMAttrModified",T,!0),setInterval(T,999)),h("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[f](a,T,!0)}),/d$|^c/.test(b.readyState)?Z():(h("load",Z),b[f]("DOMContentLoaded",T),i(Z,2e4)),T(e.length>0)},checkElems:T,unveil:Y}}(),y=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=v(a,h,c),g=s(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),k.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||t(a,g.detail)}},e=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},f=w(e);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),h("resize",f)},checkElems:f,updateElem:d}}(),z=function(){z.i||(z.i=!0,y._(),x._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,i(function(){c.init&&z()})}(),{cfg:c,autoSizer:y,loader:x,init:z,uP:t,aC:p,rC:q,hC:o,fire:s,gW:v}}});;
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).bind("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});;
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);;
//! moment.js
//! version : 2.12.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Zc.apply(null,arguments)}function b(a){Zc=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ia(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),$c.length>0)for(c in $c)d=$c[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),_c===!1&&(_c=!0,a.updateOffset(this),_c=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function u(a,b){var c=!0;return g(function(){return c&&(t(a+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function v(a,b){ad[a]||(t(b),ad[a]=!0)}function w(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function x(a){return"[object Object]"===Object.prototype.toString.call(a)}function y(a){var b,c;for(c in a)b=a[c],w(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function z(a,b){var c,d=g({},a);for(c in b)f(b,c)&&(x(a[c])&&x(b[c])?(d[c]={},g(d[c],a[c]),g(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);return d}function A(a){null!=a&&this.set(a)}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a){for(var b,c,d,e,f=0;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,c=B(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=D(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function D(a){var b=null;if(!cd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=bd._abbr,require("./locale/"+a),E(b)}catch(c){}return cd[a]}function E(a,b){var c;return a&&(c=m(b)?H(a):F(a,b),c&&(bd=c)),bd._abbr}function F(a,b){return null!==b?(b.abbr=a,null!=cd[a]?(v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),b=z(cd[a]._config,b)):null!=b.parentLocale&&(null!=cd[b.parentLocale]?b=z(cd[b.parentLocale]._config,b):v("parentLocaleUndefined","specified parentLocale is not defined yet")),cd[a]=new A(b),E(a),cd[a]):(delete cd[a],null)}function G(a,b){if(null!=b){var c;null!=cd[a]&&(b=z(cd[a]._config,b)),c=new A(b),c.parentLocale=cd[a],cd[a]=c,E(a)}else null!=cd[a]&&(null!=cd[a].parentLocale?cd[a]=cd[a].parentLocale:null!=cd[a]&&delete cd[a]);return cd[a]}function H(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return bd;if(!c(a)){if(b=D(a))return b;a=[a]}return C(a)}function I(){return Object.keys(cd)}function J(a,b){var c=a.toLowerCase();dd[c]=dd[c+"s"]=dd[b]=a}function K(a){return"string"==typeof a?dd[a]||dd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)f(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(b,c){return function(d){return null!=d?(O(this,b,d),a.updateOffset(this,c),this):N(this,b)}}function N(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function P(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=K(a),w(this[a]))return this[a](b);return this}function Q(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function R(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(hd[a]=e),b&&(hd[b[0]]=function(){return Q(e.apply(this,arguments),b[1],b[2])}),c&&(hd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function S(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function T(a){var b,c,d=a.match(ed);for(b=0,c=d.length;c>b;b++)hd[d[b]]?d[b]=hd[d[b]]:d[b]=S(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function U(a,b){return a.isValid()?(b=V(b,a.localeData()),gd[b]=gd[b]||T(b),gd[b](a)):a.localeData().invalidDate()}function V(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(fd.lastIndex=0;d>=0&&fd.test(a);)a=a.replace(fd,c),fd.lastIndex=0,d-=1;return a}function W(a,b,c){zd[a]=w(b)?b:function(a,d){return a&&c?c:b}}function X(a,b){return f(zd,a)?zd[a](b._strict,b._locale):new RegExp(Y(a))}function Y(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)Ad[a[c]]=d}function _(a,b){$(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function aa(a,b,c){null!=b&&f(Ad,a)&&Ad[a](b,c._a,c,a)}function ba(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ca(a,b){return c(this._months)?this._months[a.month()]:this._months[Kd.test(b)?"format":"standalone"][a.month()]}function da(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Kd.test(b)?"format":"standalone"][a.month()]}function ea(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function fa(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=r(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),ba(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ga(b){return null!=b?(fa(this,b),a.updateOffset(this,!0),this):N(this,"Month")}function ha(){return ba(this.year(),this.month())}function ia(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ka.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ja(a){return this._monthsParseExact?(f(this,"_monthsRegex")||ka.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function ka(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=Z(d[b]),e[b]=Z(e[b]),f[b]=Z(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")$","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")$","i")}function la(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[Cd]<0||c[Cd]>11?Cd:c[Dd]<1||c[Dd]>ba(c[Bd],c[Cd])?Dd:c[Ed]<0||c[Ed]>24||24===c[Ed]&&(0!==c[Fd]||0!==c[Gd]||0!==c[Hd])?Ed:c[Fd]<0||c[Fd]>59?Fd:c[Gd]<0||c[Gd]>59?Gd:c[Hd]<0||c[Hd]>999?Hd:-1,j(a)._overflowDayOfYear&&(Bd>b||b>Dd)&&(b=Dd),j(a)._overflowWeeks&&-1===b&&(b=Id),j(a)._overflowWeekday&&-1===b&&(b=Jd),j(a).overflow=b),a}function ma(a){var b,c,d,e,f,g,h=a._i,i=Pd.exec(h)||Qd.exec(h);if(i){for(j(a).iso=!0,b=0,c=Sd.length;c>b;b++)if(Sd[b][1].exec(i[1])){e=Sd[b][0],d=Sd[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Td.length;c>b;b++)if(Td[b][1].exec(i[3])){f=(i[2]||" ")+Td[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Rd.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),Ba(a)}else a._isValid=!1}function na(b){var c=Ud.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ma(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function oa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function pa(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function qa(a){return ra(a)?366:365}function ra(a){return a%4===0&&a%100!==0||a%400===0}function sa(){return ra(this.year())}function ta(a,b,c){var d=7+b-c,e=(7+pa(a,0,d).getUTCDay()-b)%7;return-e+d-1}function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=qa(f)+j):j>qa(a)?(f=a+1,g=j-qa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(qa(a)-d+e)/7}function xa(a,b,c){return null!=a?a:null!=b?b:c}function ya(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function za(a){var b,c,d,e,f=[];if(!a._d){for(d=ya(a),a._w&&null==a._a[Dd]&&null==a._a[Cd]&&Aa(a),a._dayOfYear&&(e=xa(a._a[Bd],d[Bd]),a._dayOfYear>qa(e)&&(j(a)._overflowDayOfYear=!0),c=pa(e,0,a._dayOfYear),a._a[Cd]=c.getUTCMonth(),a._a[Dd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Ed]&&0===a._a[Fd]&&0===a._a[Gd]&&0===a._a[Hd]&&(a._nextDay=!0,a._a[Ed]=0),a._d=(a._useUTC?pa:oa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Ed]=24)}}function Aa(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=xa(b.GG,a._a[Bd],va(Ja(),1,4).year),d=xa(b.W,1),e=xa(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=xa(b.gg,a._a[Bd],va(Ja(),f,g).year),d=xa(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Bd]=h.year,a._dayOfYear=h.dayOfYear)}function Ba(b){if(b._f===a.ISO_8601)return void ma(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=V(b._f,b._locale).match(ed)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(X(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),hd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),aa(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[Ed]<=12&&b._a[Ed]>0&&(j(b).bigHour=void 0),b._a[Ed]=Ca(b._locale,b._a[Ed],b._meridiem),za(b),la(b)}function Ca(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function Da(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ba(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Ea(a){if(!a._d){var b=L(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),za(a)}}function Fa(a){var b=new o(la(Ga(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ga(a){var b=a._i,e=a._f;return a._locale=a._locale||H(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(la(b)):(c(e)?Da(a):e?Ba(a):d(b)?a._d=b:Ha(a),k(a)||(a._d=null),a))}function Ha(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(+f):"string"==typeof f?na(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),za(b)):"object"==typeof f?Ea(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ia(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Fa(f)}function Ja(a,b,c,d){return Ia(a,b,c,d,!1)}function Ka(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ja();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function La(){var a=[].slice.call(arguments,0);return Ka("isBefore",a)}function Ma(){var a=[].slice.call(arguments,0);return Ka("isAfter",a)}function Na(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=H(),this._bubble()}function Oa(a){return a instanceof Na}function Pa(a,b){R(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+Q(~~(a/60),2)+b+Q(~~a%60,2)})}function Qa(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Zd)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Ra(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?+b:+Ja(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Ja(b).local()}function Sa(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ta(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Qa(wd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Sa(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?ib(this,cb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Sa(this):null!=b?this:NaN}function Ua(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Va(a){return this.utcOffset(0,a)}function Wa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Sa(this),"m")),this}function Xa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Qa(vd,this._i)),this}function Ya(a){return this.isValid()?(a=a?Ja(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Za(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function $a(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ga(a),a._a){var b=a._isUTC?h(a._a):Ja(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function _a(){return this.isValid()?!this._isUTC:!1}function ab(){return this.isValid()?this._isUTC:!1}function bb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function cb(a,b){var c,d,e,g=a,h=null;return Oa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=$d.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[Dd])*c,h:r(h[Ed])*c,m:r(h[Fd])*c,s:r(h[Gd])*c,ms:r(h[Hd])*c}):(h=_d.exec(a))?(c="-"===h[1]?-1:1,g={y:db(h[2],c),M:db(h[3],c),w:db(h[4],c),d:db(h[5],c),h:db(h[6],c),m:db(h[7],c),s:db(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=fb(Ja(g.from),Ja(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Na(g),Oa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function db(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function eb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function fb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ra(b,a),a.isBefore(b)?c=eb(a,b):(c=eb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function gb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function hb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(v(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=cb(c,d),ib(this,e,a),this}}function ib(b,c,d,e){var f=c._milliseconds,g=gb(c._days),h=gb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&O(b,"Date",N(b,"Date")+g*d),h&&fa(b,N(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function jb(a,b){var c=a||Ja(),d=Ra(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(w(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ja(c)))}function kb(){return new o(this)}function lb(a,b){var c=p(a)?a:Ja(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?+this>+c:+c<+this.clone().startOf(b)):!1}function mb(a,b){var c=p(a)?a:Ja(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?+c>+this:+this.clone().endOf(b)<+c):!1}function nb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function ob(a,b){var c,d=p(a)?a:Ja(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?+this===+d:(c=+d,+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))):!1}function pb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function qb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function rb(a,b,c){var d,e,f,g;return this.isValid()?(d=Ra(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=sb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function sb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function tb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ub(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():U(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function vb(b){var c=U(this,b||a.defaultFormat);return this.localeData().postformat(c)}function wb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ja(a).isValid())?cb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function xb(a){return this.from(Ja(),a)}function yb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ja(a).isValid())?cb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function zb(a){return this.to(Ja(),a)}function Ab(a){var b;return void 0===a?this._locale._abbr:(b=H(a),null!=b&&(this._locale=b),this)}function Bb(){return this._locale}function Cb(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Db(a){return a=K(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function Eb(){return+this._d-6e4*(this._offset||0)}function Fb(){return Math.floor(+this/1e3)}function Gb(){return this._offset?new Date(+this):this._d}function Hb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Ib(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Jb(){return this.isValid()?this.toISOString():null}function Kb(){return k(this)}function Lb(){return g({},j(this))}function Mb(){return j(this).overflow}function Nb(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ob(a,b){R(0,[a,a.length],0,b)}function Pb(a){return Tb.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Qb(a){return Tb.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Rb(){return wa(this.year(),1,4)}function Sb(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Tb(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Ub.call(this,a,b,c,d,e))}function Ub(a,b,c,d,e){var f=ua(a,b,c,d,e),g=pa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Vb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Wb(a){return va(a,this._week.dow,this._week.doy).week}function Xb(){return this._week.dow}function Yb(){return this._week.doy}function Zb(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function $b(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function _b(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function ac(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function bc(a){return this._weekdaysShort[a.day()]}function cc(a){return this._weekdaysMin[a.day()]}function dc(a,b,c){var d,e,f;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=Ja([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function ec(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=_b(a,this.localeData()),this.add(a-b,"d")):b}function fc(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function gc(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function hc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ic(){return this.hours()%12||12}function jc(a,b){R(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function kc(a,b){return b._meridiemParse}function lc(a){return"p"===(a+"").toLowerCase().charAt(0)}function mc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function nc(a,b){b[Hd]=r(1e3*("0."+a))}function oc(){return this._isUTC?"UTC":""}function pc(){return this._isUTC?"Coordinated Universal Time":""}function qc(a){return Ja(1e3*a)}function rc(){return Ja.apply(null,arguments).parseZone()}function sc(a,b,c){var d=this._calendar[a];return w(d)?d.call(b,c):d}function tc(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function uc(){return this._invalidDate}function vc(a){return this._ordinal.replace("%d",a)}function wc(a){return a}function xc(a,b,c,d){var e=this._relativeTime[c];return w(e)?e(a,b,c,d):e.replace(/%d/i,a)}function yc(a,b){var c=this._relativeTime[a>0?"future":"past"];return w(c)?c(b):c.replace(/%s/i,b)}function zc(a,b,c,d){var e=H(),f=h().set(d,b);return e[c](f,a)}function Ac(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return zc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=zc(a,f,c,e);return g}function Bc(a,b){return Ac(a,b,"months",12,"month")}function Cc(a,b){return Ac(a,b,"monthsShort",12,"month")}function Dc(a,b){return Ac(a,b,"weekdays",7,"day")}function Ec(a,b){return Ac(a,b,"weekdaysShort",7,"day")}function Fc(a,b){return Ac(a,b,"weekdaysMin",7,"day")}function Gc(){var a=this._data;return this._milliseconds=xe(this._milliseconds),this._days=xe(this._days),this._months=xe(this._months),a.milliseconds=xe(a.milliseconds),a.seconds=xe(a.seconds),a.minutes=xe(a.minutes),a.hours=xe(a.hours),a.months=xe(a.months),a.years=xe(a.years),this}function Hc(a,b,c,d){var e=cb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Ic(a,b){return Hc(this,a,b,1)}function Jc(a,b){return Hc(this,a,b,-1)}function Kc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Lc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Kc(Nc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Mc(g)),h+=e,g-=Kc(Nc(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Mc(a){return 4800*a/146097}function Nc(a){return 146097*a/4800}function Oc(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Mc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Nc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Pc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Qc(a){return function(){return this.as(a)}}function Rc(a){return a=K(a),this[a+"s"]()}function Sc(a){return function(){return this._data[a]}}function Tc(){return q(this.days()/7)}function Uc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Vc(a,b,c){var d=cb(a).abs(),e=Ne(d.as("s")),f=Ne(d.as("m")),g=Ne(d.as("h")),h=Ne(d.as("d")),i=Ne(d.as("M")),j=Ne(d.as("y")),k=e<Oe.s&&["s",e]||1>=f&&["m"]||f<Oe.m&&["mm",f]||1>=g&&["h"]||g<Oe.h&&["hh",g]||1>=h&&["d"]||h<Oe.d&&["dd",h]||1>=i&&["M"]||i<Oe.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Uc.apply(null,k)}function Wc(a,b){return void 0===Oe[a]?!1:void 0===b?Oe[a]:(Oe[a]=b,!0)}function Xc(a){var b=this.localeData(),c=Vc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Yc(){var a,b,c,d=Pe(this._milliseconds)/1e3,e=Pe(this._days),f=Pe(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Zc,$c=a.momentProperties=[],_c=!1,ad={};a.suppressDeprecationWarnings=!1;var bd,cd={},dd={},ed=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,fd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,gd={},hd={},id=/\d/,jd=/\d\d/,kd=/\d{3}/,ld=/\d{4}/,md=/[+-]?\d{6}/,nd=/\d\d?/,od=/\d\d\d\d?/,pd=/\d\d\d\d\d\d?/,qd=/\d{1,3}/,rd=/\d{1,4}/,sd=/[+-]?\d{1,6}/,td=/\d+/,ud=/[+-]?\d+/,vd=/Z|[+-]\d\d:?\d\d/gi,wd=/Z|[+-]\d\d(?::?\d\d)?/gi,xd=/[+-]?\d+(\.\d{1,3})?/,yd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,zd={},Ad={},Bd=0,Cd=1,Dd=2,Ed=3,Fd=4,Gd=5,Hd=6,Id=7,Jd=8;R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),R("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),W("M",nd),W("MM",nd,jd),W("MMM",function(a,b){return b.monthsShortRegex(a)}),W("MMMM",function(a,b){return b.monthsRegex(a)}),$(["M","MM"],function(a,b){b[Cd]=r(a)-1}),$(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Cd]=e:j(c).invalidMonth=a});var Kd=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Ld="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Md="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Nd=yd,Od=yd,Pd=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Qd=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Rd=/Z|[+-]\d\d(?::?\d\d)?/,Sd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Td=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ud=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),R("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),J("year","y"),W("Y",ud),W("YY",nd,jd),W("YYYY",rd,ld),W("YYYYY",sd,md),W("YYYYYY",sd,md),$(["YYYYY","YYYYYY"],Bd),$("YYYY",function(b,c){c[Bd]=2===b.length?a.parseTwoDigitYear(b):r(b);
}),$("YY",function(b,c){c[Bd]=a.parseTwoDigitYear(b)}),$("Y",function(a,b){b[Bd]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var Vd=M("FullYear",!1);a.ISO_8601=function(){};var Wd=u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ja.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),Xd=u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ja.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),Yd=function(){return Date.now?Date.now():+new Date};Pa("Z",":"),Pa("ZZ",""),W("Z",wd),W("ZZ",wd),$(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Qa(wd,a)});var Zd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var $d=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,_d=/^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;cb.fn=Na.prototype;var ae=hb(1,"add"),be=hb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var ce=u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ob("gggg","weekYear"),Ob("ggggg","weekYear"),Ob("GGGG","isoWeekYear"),Ob("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),W("G",ud),W("g",ud),W("GG",nd,jd),W("gg",nd,jd),W("GGGG",rd,ld),W("gggg",rd,ld),W("GGGGG",sd,md),W("ggggg",sd,md),_(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),_(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),R("Q",0,"Qo","quarter"),J("quarter","Q"),W("Q",id),$("Q",function(a,b){b[Cd]=3*(r(a)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),W("w",nd),W("ww",nd,jd),W("W",nd),W("WW",nd,jd),_(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var de={dow:0,doy:6};R("D",["DD",2],"Do","date"),J("date","D"),W("D",nd),W("DD",nd,jd),W("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),$(["D","DD"],Dd),$("Do",function(a,b){b[Dd]=r(a.match(nd)[0],10)});var ee=M("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),R("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),R("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),W("d",nd),W("e",nd),W("E",nd),W("dd",yd),W("ddd",yd),W("dddd",yd),_(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),_(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var fe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ge="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),he="Su_Mo_Tu_We_Th_Fr_Sa".split("_");R("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),W("DDD",qd),W("DDDD",kd),$(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,ic),R("hmm",0,0,function(){return""+ic.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+ic.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)}),jc("a",!0),jc("A",!1),J("hour","h"),W("a",kc),W("A",kc),W("H",nd),W("h",nd),W("HH",nd,jd),W("hh",nd,jd),W("hmm",od),W("hmmss",pd),W("Hmm",od),W("Hmmss",pd),$(["H","HH"],Ed),$(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),$(["h","hh"],function(a,b,c){b[Ed]=r(a),j(c).bigHour=!0}),$("hmm",function(a,b,c){var d=a.length-2;b[Ed]=r(a.substr(0,d)),b[Fd]=r(a.substr(d)),j(c).bigHour=!0}),$("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Ed]=r(a.substr(0,d)),b[Fd]=r(a.substr(d,2)),b[Gd]=r(a.substr(e)),j(c).bigHour=!0}),$("Hmm",function(a,b,c){var d=a.length-2;b[Ed]=r(a.substr(0,d)),b[Fd]=r(a.substr(d))}),$("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Ed]=r(a.substr(0,d)),b[Fd]=r(a.substr(d,2)),b[Gd]=r(a.substr(e))});var ie=/[ap]\.?m?\.?/i,je=M("Hours",!0);R("m",["mm",2],0,"minute"),J("minute","m"),W("m",nd),W("mm",nd,jd),$(["m","mm"],Fd);var ke=M("Minutes",!1);R("s",["ss",2],0,"second"),J("second","s"),W("s",nd),W("ss",nd,jd),$(["s","ss"],Gd);var le=M("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),W("S",qd,id),W("SS",qd,jd),W("SSS",qd,kd);var me;for(me="SSSS";me.length<=9;me+="S")W(me,td);for(me="S";me.length<=9;me+="S")$(me,nc);var ne=M("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var oe=o.prototype;oe.add=ae,oe.calendar=jb,oe.clone=kb,oe.diff=rb,oe.endOf=Db,oe.format=vb,oe.from=wb,oe.fromNow=xb,oe.to=yb,oe.toNow=zb,oe.get=P,oe.invalidAt=Mb,oe.isAfter=lb,oe.isBefore=mb,oe.isBetween=nb,oe.isSame=ob,oe.isSameOrAfter=pb,oe.isSameOrBefore=qb,oe.isValid=Kb,oe.lang=ce,oe.locale=Ab,oe.localeData=Bb,oe.max=Xd,oe.min=Wd,oe.parsingFlags=Lb,oe.set=P,oe.startOf=Cb,oe.subtract=be,oe.toArray=Hb,oe.toObject=Ib,oe.toDate=Gb,oe.toISOString=ub,oe.toJSON=Jb,oe.toString=tb,oe.unix=Fb,oe.valueOf=Eb,oe.creationData=Nb,oe.year=Vd,oe.isLeapYear=sa,oe.weekYear=Pb,oe.isoWeekYear=Qb,oe.quarter=oe.quarters=Vb,oe.month=ga,oe.daysInMonth=ha,oe.week=oe.weeks=Zb,oe.isoWeek=oe.isoWeeks=$b,oe.weeksInYear=Sb,oe.isoWeeksInYear=Rb,oe.date=ee,oe.day=oe.days=ec,oe.weekday=fc,oe.isoWeekday=gc,oe.dayOfYear=hc,oe.hour=oe.hours=je,oe.minute=oe.minutes=ke,oe.second=oe.seconds=le,oe.millisecond=oe.milliseconds=ne,oe.utcOffset=Ta,oe.utc=Va,oe.local=Wa,oe.parseZone=Xa,oe.hasAlignedHourOffset=Ya,oe.isDST=Za,oe.isDSTShifted=$a,oe.isLocal=_a,oe.isUtcOffset=ab,oe.isUtc=bb,oe.isUTC=bb,oe.zoneAbbr=oc,oe.zoneName=pc,oe.dates=u("dates accessor is deprecated. Use date instead.",ee),oe.months=u("months accessor is deprecated. Use month instead",ga),oe.years=u("years accessor is deprecated. Use year instead",Vd),oe.zone=u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ua);var pe=oe,qe={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},re={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},se="Invalid date",te="%d",ue=/\d{1,2}/,ve={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},we=A.prototype;we._calendar=qe,we.calendar=sc,we._longDateFormat=re,we.longDateFormat=tc,we._invalidDate=se,we.invalidDate=uc,we._ordinal=te,we.ordinal=vc,we._ordinalParse=ue,we.preparse=wc,we.postformat=wc,we._relativeTime=ve,we.relativeTime=xc,we.pastFuture=yc,we.set=y,we.months=ca,we._months=Ld,we.monthsShort=da,we._monthsShort=Md,we.monthsParse=ea,we._monthsRegex=Od,we.monthsRegex=ja,we._monthsShortRegex=Nd,we.monthsShortRegex=ia,we.week=Wb,we._week=de,we.firstDayOfYear=Yb,we.firstDayOfWeek=Xb,we.weekdays=ac,we._weekdays=fe,we.weekdaysMin=cc,we._weekdaysMin=he,we.weekdaysShort=bc,we._weekdaysShort=ge,we.weekdaysParse=dc,we.isPM=lc,we._meridiemParse=ie,we.meridiem=mc,E("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=u("moment.lang is deprecated. Use moment.locale instead.",E),a.langData=u("moment.langData is deprecated. Use moment.localeData instead.",H);var xe=Math.abs,ye=Qc("ms"),ze=Qc("s"),Ae=Qc("m"),Be=Qc("h"),Ce=Qc("d"),De=Qc("w"),Ee=Qc("M"),Fe=Qc("y"),Ge=Sc("milliseconds"),He=Sc("seconds"),Ie=Sc("minutes"),Je=Sc("hours"),Ke=Sc("days"),Le=Sc("months"),Me=Sc("years"),Ne=Math.round,Oe={s:45,m:45,h:22,d:26,M:11},Pe=Math.abs,Qe=Na.prototype;Qe.abs=Gc,Qe.add=Ic,Qe.subtract=Jc,Qe.as=Oc,Qe.asMilliseconds=ye,Qe.asSeconds=ze,Qe.asMinutes=Ae,Qe.asHours=Be,Qe.asDays=Ce,Qe.asWeeks=De,Qe.asMonths=Ee,Qe.asYears=Fe,Qe.valueOf=Pc,Qe._bubble=Lc,Qe.get=Rc,Qe.milliseconds=Ge,Qe.seconds=He,Qe.minutes=Ie,Qe.hours=Je,Qe.days=Ke,Qe.weeks=Tc,Qe.months=Le,Qe.years=Me,Qe.humanize=Xc,Qe.toISOString=Yc,Qe.toString=Yc,Qe.toJSON=Yc,Qe.locale=Ab,Qe.localeData=Bb,Qe.toIsoString=u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Yc),Qe.lang=ce,R("X",0,0,"unix"),R("x",0,0,"valueOf"),W("x",ud),W("X",xd),$("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),$("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.12.0",b(Ja),a.fn=pe,a.min=La,a.max=Ma,a.now=Yd,a.utc=h,a.unix=qc,a.months=Bc,a.isDate=d,a.locale=E,a.invalid=l,a.duration=cb,a.isMoment=p,a.weekdays=Dc,a.parseZone=rc,a.localeData=H,a.isDuration=Oa,a.monthsShort=Cc,a.weekdaysMin=Fc,a.defineLocale=F,a.updateLocale=G,a.locales=I,a.weekdaysShort=Ec,a.normalizeUnits=K,a.relativeTimeThreshold=Wc,a.prototype=pe;var Re=a;return Re});;
!function(e,t){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(i){}module.exports=t(n)}else"function"==typeof define&&define.amd?define(function(e){var i="moment";try{n=e(i)}catch(a){}return t(n)}):e.Pikaday=t(e.moment)}(this,function(e){"use strict";var t="function"==typeof e,n=!!window.addEventListener,i=window.document,a=window.setTimeout,s=function(e,t,i,a){n?e.addEventListener(t,i,!!a):e.attachEvent("on"+t,i)},o=function(e,t,i,a){n?e.removeEventListener(t,i,!!a):e.detachEvent("on"+t,i)},r=function(e,t,n){var a;i.createEvent?(a=i.createEvent("HTMLEvents"),a.initEvent(t,!0,!1),a=D(a,n),e.dispatchEvent(a)):i.createEventObject&&(a=i.createEventObject(),a=D(a,n),e.fireEvent("on"+t,a))},l=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},f=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},h=function(e,t){f(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){e.className=l((" "+e.className+" ").replace(" "+t+" "," "))},d=function(e){return/Array/.test(Object.prototype.toString.call(e))},c=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},g=function(e){var t=e.getDay();return 0===t||6===t},m=function(e){return e%4===0&&e%100!==0||e%400===0},p=function(e,t){return[31,m(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},y=function(e){c(e)&&e.setHours(0,0,0,0)},_=function(e,t){return e.getTime()===t.getTime()},D=function(e,t,n){var i,a;for(i in t)a=void 0!==e[i],a&&"object"==typeof t[i]&&null!==t[i]&&void 0===t[i].nodeName?c(t[i])?n&&(e[i]=new Date(t[i].getTime())):d(t[i])?n&&(e[i]=t[i].slice(0)):e[i]=D({},t[i],n):(n||!a)&&(e[i]=t[i]);return e},v=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},b={field:null,bound:void 0,position:"bottom left",reposition:!0,format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},w=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},M=function(e){if(e.isEmpty)return'<td class="is-empty"></td>';var t=[];return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&t.push("is-selected"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},k=function(e,t,n){var i=new Date(n,0,1),a=Math.ceil(((new Date(n,t,e)-i)/864e5+i.getDay()+1)/7);return'<td class="pika-week">'+a+"</td>"},R=function(e,t){return"<tr>"+(t?e.reverse():e).join("")+"</tr>"},x=function(e){return"<tbody>"+e.join("")+"</tbody>"},N=function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;7>t;t++)n.push('<th scope="col"><abbr title="'+w(e,t)+'">'+w(e,t,!0)+"</abbr></th>");return"<thead>"+(e.isRTL?n.reverse():n).join("")+"</thead>"},C=function(e,t,n,i,a){var s,o,r,c,g,l=e._o,f=n===l.minYear,h=n===l.maxYear,u='<div class="pika-title">',m=!0,p=!0;for(r=[],s=0;12>s;s++)r.push('<option value="'+(n===a?s-t:12+s-t)+'"'+(s===i?" selected":"")+(f&&s<l.minMonth||h&&s>l.maxMonth?"disabled":"")+">"+l.i18n.months[s]+"</option>");for(c='<div class="pika-label">'+l.i18n.months[i]+'<select class="pika-select pika-select-month" tabindex="-1">'+r.join("")+"</select></div>",d(l.yearRange)?(s=l.yearRange[0],o=l.yearRange[1]+1):(s=n-l.yearRange,o=1+n+l.yearRange),r=[];o>s&&s<=l.maxYear;s++)s>=l.minYear&&r.push('<option value="'+s+'"'+(s===n?" selected":"")+">"+s+"</option>");return g='<div class="pika-label">'+n+l.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+r.join("")+"</select></div>",u+=l.showMonthAfterYear?g+c:c+g,f&&(0===i||l.minMonth>=i)&&(m=!1),h&&(11===i||l.maxMonth<=i)&&(p=!1),0===t&&(u+='<button class="pika-prev'+(m?"":" is-disabled")+'" type="button">'+l.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(u+='<button class="pika-next'+(p?"":" is-disabled")+'" type="button">'+l.i18n.nextMonth+"</button>"),u+="</div>"},T=function(e,t){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+N(e)+x(t)+"</table>"},E=function(o){var r=this,l=r.config(o);r._onMouseDown=function(e){if(r._v){e=e||window.event;var t=e.target||e.srcElement;if(t)if(f(t,"is-disabled")||(f(t,"pika-button")&&!f(t,"is-empty")?(r.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),l.bound&&a(function(){r.hide(),l.field&&l.field.blur()},100)):f(t,"pika-prev")?r.prevMonth():f(t,"pika-next")&&r.nextMonth()),f(t,"pika-select"))r._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},r._onChange=function(e){e=e||window.event;var t=e.target||e.srcElement;t&&(f(t,"pika-select-month")?r.gotoMonth(t.value):f(t,"pika-select-year")&&r.gotoYear(t.value))},r._onInputChange=function(n){var i;n.firedBy!==r&&(t?(i=e(l.field.value,l.format),i=i&&i.isValid()?i.toDate():null):i=new Date(Date.parse(l.field.value)),c(i)&&r.setDate(i),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){var e=i.activeElement;do if(f(e,"pika-single"))return;while(e=e.parentNode);r._c||(r._b=a(function(){r.hide()},50)),r._c=!1},r._onClick=function(e){e=e||window.event;var t=e.target||e.srcElement,i=t;if(t){!n&&f(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),s(t,"change",r._onChange)));do if(f(i,"pika-single")||i===l.trigger)return;while(i=i.parentNode);r._v&&t!==l.trigger&&i!==l.trigger&&r.hide()}},r.el=i.createElement("div"),r.el.className="pika-single"+(l.isRTL?" is-rtl":"")+(l.theme?" "+l.theme:""),s(r.el,"mousedown",r._onMouseDown,!0),s(r.el,"touchend",r._onMouseDown,!0),s(r.el,"change",r._onChange),l.field&&(l.container?l.container.appendChild(r.el):l.bound?i.body.appendChild(r.el):l.field.parentNode.insertBefore(r.el,l.field.nextSibling),s(l.field,"change",r._onInputChange),l.defaultDate||(t&&l.field.value?l.defaultDate=e(l.field.value,l.format).toDate():l.defaultDate=new Date(Date.parse(l.field.value)),l.setDefaultDate=!0));var h=l.defaultDate;c(h)?l.setDefaultDate?r.setDate(h,!0):r.gotoDate(h):r.gotoDate(new Date),l.bound?(this.hide(),r.el.className+=" is-bound",s(l.trigger,"click",r._onInputClick),s(l.trigger,"focus",r._onInputFocus),s(l.trigger,"blur",r._onInputBlur)):this.show()};return E.prototype={config:function(e){this._o||(this._o=D({},b,!0));var t=D(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,c(t.minDate)||(t.minDate=!1),c(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),d(t.yearRange)){var i=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||i,t.yearRange[1]=parseInt(t.yearRange[1],10)||i}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||b.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return c(this._d)?t?e(this._d).format(n||this._o.format):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,i){t&&e.isMoment(n)&&this.setDate(n.toDate(),i)},getDate:function(){return c(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",r(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),c(e)){var n=this._o.minDate,i=this._o.maxDate;c(n)&&n>e?e=n:c(i)&&e>i&&(e=i),this._d=new Date(e.getTime()),y(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),r(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(c(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),i=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),a=e.getTime();i.setMonth(i.getMonth()+1),i.setDate(i.getDate()-1),t=a<n.getTime()||i.getTime()<a}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=v(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=v({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){y(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth(),this.draw()},setMaxDate:function(e){y(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth(),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t=this._o,n=t.minYear,i=t.maxYear,s=t.minMonth,o=t.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(s)&&this._m<s&&(this._m=s)),this._y>=i&&(this._y=i,!isNaN(o)&&this._m>o&&(this._m=o));for(var l=0;l<t.numberOfMonths;l++)r+='<div class="pika-lendar">'+C(this,l,this.calendars[l].year,this.calendars[l].month,this.calendars[0].year)+this.render(this.calendars[l].year,this.calendars[l].month)+"</div>";if(this.el.innerHTML=r,t.bound&&"hidden"!==t.field.type&&a(function(){t.trigger.focus()},1),"function"==typeof this._o.onDraw){var f=this;a(function(){f._o.onDraw.call(f)},0)}}},adjustPosition:function(){var e,t,n,a,s,o,r,l,f,h;if(!this._o.container){if(this.el.style.position="absolute",e=this._o.trigger,t=e,n=this.el.offsetWidth,a=this.el.offsetHeight,s=window.innerWidth||i.documentElement.clientWidth,o=window.innerHeight||i.documentElement.clientHeight,r=window.pageYOffset||i.body.scrollTop||i.documentElement.scrollTop,"function"==typeof e.getBoundingClientRect)h=e.getBoundingClientRect(),l=h.left+window.pageXOffset,f=h.bottom+window.pageYOffset;else for(l=t.offsetLeft,f=t.offsetTop+t.offsetHeight;t=t.offsetParent;)l+=t.offsetLeft,f+=t.offsetTop;(this._o.reposition&&l+n>s||this._o.position.indexOf("right")>-1&&l-n+e.offsetWidth>0)&&(l=l-n+e.offsetWidth),(this._o.reposition&&f+a>o+r||this._o.position.indexOf("top")>-1&&f-a-e.offsetHeight>0)&&(f=f-a-e.offsetHeight),this.el.style.left=l+"px",this.el.style.top=f+"px"}},render:function(e,t){var n=this._o,i=new Date,a=p(e,t),s=new Date(e,t,1).getDay(),o=[],r=[];y(i),n.firstDay>0&&(s-=n.firstDay,0>s&&(s+=7));for(var l=a+s,f=l;f>7;)f-=7;l+=7-f;for(var h=0,u=0;l>h;h++){var d=new Date(e,t,1+(h-s)),m=c(this._d)?_(d,this._d):!1,D=_(d,i),v=s>h||h>=a+s,b=n.startRange&&_(n.startRange,d),w=n.endRange&&_(n.endRange,d),x=n.startRange&&n.endRange&&n.startRange<d&&d<n.endRange,N=n.minDate&&d<n.minDate||n.maxDate&&d>n.maxDate||n.disableWeekends&&g(d)||n.disableDayFn&&n.disableDayFn(d),C={day:1+(h-s),month:t,year:e,isSelected:m,isToday:D,isDisabled:N,isEmpty:v,isStartRange:b,isEndRange:w,isInRange:x};r.push(M(C)),7===++u&&(n.showWeekNumber&&r.unshift(k(h-s,t,e)),o.push(R(r,n.isRTL)),r=[],u=0)}return T(n,o)},isVisible:function(){return this._v},show:function(){this._v||(u(this.el,"is-hidden"),this._v=!0,this.draw(),this._o.bound&&(s(i,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;e!==!1&&(this._o.bound&&o(i,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",h(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),this._o.field&&(o(this._o.field,"change",this._onInputChange),this._o.bound&&(o(this._o.trigger,"click",this._onInputClick),o(this._o.trigger,"focus",this._onInputFocus),o(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},E});;
/**
 *
 * BEGIN UTIL FUNCTIONS
 *
 */


function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
!function(n){n.fn.prepareTransition=function(){return this.each(function(){var i=n(this);i.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){i.removeClass("is-transitioning")});var t=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],o=0;n.each(t,function(n,t){o||(o=parseFloat(i.css(t)))}),0!=o&&(i.addClass("is-transitioning"),i[0].offsetWidth)})}}(jQuery);

/*
 * urlInternal - v1.0 - 10/7/2009
 * http://benalman.com/projects/jquery-urlinternal-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($){var g,i=!0,r=!1,m=window.location,h=Array.prototype.slice,b=m.href.match(/^((https?:\/\/.*?\/)?[^#]*)#?.*$/),u=b[1]+"#",t=b[2],e,l,f,q,c,j,x="elemUrlAttr",k="href",y="src",p="urlInternal",d="urlExternal",n="urlFragment",a,s={};function w(A){var z=h.call(arguments,1);return function(){return A.apply(this,z.concat(h.call(arguments)))}}$.isUrlInternal=q=function(z){if(!z||j(z)){return g}if(a.test(z)){return i}if(/^(?:https?:)?\/\//i.test(z)){return r}if(/^[a-z\d.-]+:/i.test(z)){return g}return i};$.isUrlExternal=c=function(z){var A=q(z);return typeof A==="boolean"?!A:A};$.isUrlFragment=j=function(z){var A=(z||"").match(/^([^#]?)([^#]*#).*$/);return !!A&&(A[2]==="#"||z.indexOf(u)===0||(A[1]==="/"?t+A[2]===u:!/^https?:\/\//i.test(z)&&$('<a href="'+z+'"/>')[0].href.indexOf(u)===0))};function v(A,z){return this.filter(":"+A+(z?"("+z+")":""))}$.fn[p]=w(v,p);$.fn[d]=w(v,d);$.fn[n]=w(v,n);function o(D,C,B,A){var z=A[3]||e()[(C.nodeName||"").toLowerCase()]||"";return z?!!D(C.getAttribute(z)):r}$.expr[":"][p]=w(o,q);$.expr[":"][d]=w(o,c);$.expr[":"][n]=w(o,j);$[x]||($[x]=function(z){return $.extend(s,z)})({a:k,base:k,iframe:y,img:y,input:y,form:"action",link:k,script:y});e=$[x];$.urlInternalHost=l=function(B){B=B?"(?:(?:"+Array.prototype.join.call(arguments,"|")+")\\.)?":"";var A=new RegExp("^"+B+"(.*)","i"),z="^(?:"+m.protocol+")?//"+m.hostname.replace(A,B+"$1").replace(/\\?\./g,"\\.")+(m.port?":"+m.port:"")+"/";return f(z)};$.urlInternalRegExp=f=function(z){if(z){a=typeof z==="string"?new RegExp(z,"i"):z}return a};l("www")})(jQuery);

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);


//get the handle of a string
String.prototype.getHandle = function() {
  //alpha numeric and dashes only
  //spaces converted to dashes
  return this.replace(/[^\w- ]|_/g,'').replace(/\s+/g, '-').toLowerCase();
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

Date.monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function dateOrdinal (date) {
  return (date > 20 || date < 10) ? ([false, "st", "nd", "rd"])[(date%10)] || "th" : "th";
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};

function windowPopup(url, width, height) {
  // Calculate the position of the popup so
  // it’s centered on the screen.
  var left = (screen.width / 2) - (width / 2),
      top = (screen.height / 2) - (height / 2);

  window.open(
    url,
    "",
    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
  );
}

/**
 * END UTIL FUNCTIONS
 */;
!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
function a(a,b){
// if the target exists
if(b){
// create a document fragment to hold the contents of the target
var c=document.createDocumentFragment(),d=!a.getAttribute("viewBox")&&b.getAttribute("viewBox");
// conditionally set the viewBox on the svg
d&&a.setAttribute("viewBox",d);
// copy the contents of the clone into the fragment
for(
// clone the target
var e=b.cloneNode(!0);e.childNodes.length;)c.appendChild(e.firstChild);
// append the fragment into the svg
a.appendChild(c)}}function b(b){
// listen to changes in the request
b.onreadystatechange=function(){
// if the request is ready
if(4===b.readyState){
// get the cached html document
var c=b._cachedDocument;
// ensure the cached html document based on the xhr response
c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),
// clear the xhr embeds list and embed each item
b._embeds.splice(0).map(function(d){
// get the cached target
var e=b._cachedTarget[d.id];
// ensure the cached target
e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),
// embed the target into the svg
a(d.svg,e)})}},
// test the ready state change immediately
b.onreadystatechange()}function c(c){function d(){
// while the index exists in the live <use> collection
for(
// get the cached <use> index
var c=0;c<l.length;){
// get the current <use>
var g=l[c],h=g.parentNode;if(h&&/svg/i.test(h.nodeName)){var i=g.getAttribute("xlink:href");if(e&&(!f.validate||f.validate(i,h,g))){
// remove the <use> element
h.removeChild(g);
// parse the src and get the url and id
var m=i.split("#"),n=m.shift(),o=m.join("#");
// if the link is external
if(n.length){
// get the cached xhr request
var p=j[n];
// ensure the xhr request exists
p||(p=j[n]=new XMLHttpRequest,p.open("GET",n),p.send(),p._embeds=[]),
// add the svg and id as an item to the xhr embeds list
p._embeds.push({svg:h,id:o}),
// prepare the xhr ready state change event
b(p)}else
// embed the local id into the svg
a(h,document.getElementById(o))}}else
// increase the index when the previous value was not "valid"
++c}
// continue the interval
k(d,67)}var e,f=Object(c),g=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,h=/\bAppleWebKit\/(\d+)\b/,i=/\bEdge\/12\.(\d+)\b/;e="polyfill"in f?f.polyfill:g.test(navigator.userAgent)||(navigator.userAgent.match(i)||[])[1]<10547||(navigator.userAgent.match(h)||[])[1]<537;
// create xhr requests object
var j={},k=window.requestAnimationFrame||setTimeout,l=document.getElementsByTagName("use");
// conditionally start the interval if the polyfill is active
e&&d()}return c});;
window.vwtheme = window.vwtheme || {};

(function($) {

    vwtheme._cache = {
        // General
        $html: $('html'),
        $body: $('body'),
        //$pageSection                : $('#PageContainer .page-section'),
        $supportPage: $('#SupportPage'),
        $pageContainer: $('#PageContainer'),
        $pageContents: $('#PageContents'), //context req'd?
        //$stickyItem                 : $('.sticky-item'),
        //$searchForm                 : $('#search-form'),

        // Navigation
        $navToggle: '.page-dashboard-trigger',
        $profileToggle: '.user-dashboard-trigger',
        $searchToggle: '.search-dashboard-trigger',
        $pageNavParent: $('.page-navigation'),
        $fixedPageNavParent: $('.header-page-navigation'),
        //$pageNav                    : $('.page-navigation--nav'),
        //$fixedPageNav               : $('.page-navigation--nav'),
        $pageSection: $('.page-section'),
        //$pageFilters                : $('.grid-filters', context),
        //$searchDash                 : $('#SearchDashboard', context),

        //Grid Items
        //$gridItem_moment            : $('.list-item--moment', context),
        //$gridItem_experience        : $('.list-item--experience', context),

    };

    vwtheme._state = {
        $isDev: false,
        $isMobile: false,
        $isHomePage: ($('body').hasClass('front') ? true : false),
        $is_PageNav_fixed: false,
        $is_PageFilters_fixed: false,
        $is_PageFreezed: false,
        $momentsDisplay: 'static',
        $sessionStorage: false,
        $supportPage_active: false,
        $pageTool_active: false
    }

    vwtheme._vars = {
        $defaultScrollSpeed: 450,
        $longScrollSpeed: 1000,
        $defaultScrollOffset: 80,
        $defaultAnimationSpeed: 300,
        $minModalWidth: 768,
        $dashboardAnimationSpeed: 300, //ref CSS transitions
        $defaultSpacer: 20, //ref CSS transitions
        $windowWidth: $(window).outerWidth(),
        $windowHeight: $(window).outerHeight(),
        $scrollPosition: $(window).scrollTop(),
        $activePageHash: null,
        $pageSections: {},
        $activePageSection: null,
        $momentsDisplayThreshold: 1200,
        $datePickers: [],
        $mapbox: {
            accessToken: 'pk.eyJ1IjoiYmxsdCIsImEiOiJjaXBzcDFhMjAwNDlwaGNucmI3cDJiN2FxIn0.7zHo4jv9XE72MF4ORGqvwA',
            lastRequest: {},
            map_center: [51.4, -115.938088],
            banff_center: [51.1765315, -115.567009],
            lakelouise_center: [51.428219, -116.174325],
            local_boundary: {
                n: 52.282324,
                e: -114.911499,
                s: 50.906010,
                w: -117.313385
            },
            map_zoom: 10,
            activemap: null,
        },
        $defaultLocationLabels: {
            longhaul: "Rest of the World",
            north_america: "US &amp; Canada",
            regional: "Alberta &amp; BC",
            local: "In-Resort"
        },
        $seasons: {
            0: {
                longhaul: "winter",
                north_america: "winter",
                regional: "winter",
                local: "winter",
            },
            1: {
                longhaul: "winter",
                north_america: "winter",
                regional: "winter",
                local: "winter",
            },
            2: {
                longhaul: "winter",
                north_america: "spring",
                regional: "spring",
                local: "spring",
            },
            3: {
                longhaul: "winter",
                north_america: "spring",
                regional: "spring",
                local: "spring",
            },
            4: {
                longhaul: "summer",
                north_america: "summer",
                regional: "spring",
                local: "spring",
            },
            5: {
                longhaul: "summer",
                north_america: "summer",
                regional: "summer",
                local: "summer",
            },
            6: {
                longhaul: "summer",
                north_america: "summer",
                regional: "summer",
                local: "summer",
            },
            7: {
                longhaul: "summer",
                north_america: "summer",
                regional: "summer",
                local: "summer",
            },
            8: {
                longhaul: "winter",
                north_america: "autumn",
                regional: "autumn",
                local: "autumn",
            },
            9: {
                longhaul: "winter",
                north_america: "autumn",
                regional: "autumn",
                local: "autumn",
            },
            10: {
                longhaul: "winter",
                north_america: "winter",
                regional: "autumn",
                local: "autumn",
            },
            11: {
                longhaul: "winter",
                north_america: "winter",
                regional: "winter",
                local: "winter",
            }
        }
    }

    vwtheme._user = {
        $version: 1, //for removing sessions in the future
        $userDetails: {
            $locationGroup: 'longhaul',
            $lat: 0,
            $lng: 0,
            $city: null,
            $region: null,
            $country: null,
            $has_firstAccessPrompt: null,
            $has_signedUpNewsletter: null,
            $season: 'summer',
        }
    }

    vwtheme._usermoments = {
        $version: 1,
        $moments: []
    }

    vwtheme._fn = {
        $scrollTo: function(destination, speed) {
            $('html,body').animate({
                scrollTop: destination,
            }, speed, 'swing');
        },
        $sessionSet: function(key, value) {
            if (vwtheme._vars.$sessionStorage) return localStorage.setItem(key, value);
        },
        $sessionGet: function(key) {
            if (vwtheme._vars.$sessionStorage) return localStorage.getItem(key);
        },
        $sessionDel: function(key) {
            if (vwtheme._vars.$sessionStorage) return localStorage.removeItem(key);
        },
        $getUrlVars: function() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
            return vars;
        },
        $shuffle: function(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
    }

    vwtheme.analytics = {
        cfg: {
            loadedURL: window.location.pathname
        },
        init: function() {
            //save the loaded page
            vwtheme.analytics.cfg.loadedURL = window.location.pathname;
        },
        setPageView: function(url) {
            if (!url) url = vwtheme.analytics.cfg.loadedURL;
            ga('set', 'page', url);
            ga('send', 'pageview');
        },
    }

    vwtheme.updateCache = function() {
        if (vwtheme._state.$isDev) console.debug("vwtheme.updateCache");
        //vwtheme._vars.$windowHeight = $(window).outerHeight();
        vwtheme._vars.$windowWidth = $(window).outerWidth();
        //vwtheme._vars.$windowWidth = $(window).outerWidth();
        vwtheme._vars.$windowHeight = $(window).outerHeight();
        vwtheme._vars.$scrollPosition = window.pageYOffset;
        vwtheme._vars.$fixedHeaderHeight = (vwtheme._state.$is_PageNav_fixed ? $('.page-header--fixed').height() : 0);
    } /** end vwtheme.updateCache **/

    vwtheme.freezePage = {
        add: function() {
            vwtheme._state.$is_PageFreezed = true;
            var was_fixed = vwtheme._state.$is_PageNav_fixed;
            $('body').addClass('freeze');
            vwtheme.fauxScroll.add();
        },
        remove: function() {
            vwtheme._state.$is_PageFreezed = false;
            $('body').removeClass('freeze');
            vwtheme.fauxScroll.remove();
        }
    }

    vwtheme.fauxScroll = {
        add: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.fauxScroll.add");
            vwtheme._vars.$lastScrollPosition = vwtheme._vars.$scrollPosition;
            $('#PageContainer').css({ marginTop: (vwtheme._vars.$scrollPosition * -1) });
        },
        remove: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.fauxScroll.remove");
            $('#PageContainer').css({ marginTop: 0 });
            vwtheme._fn.$scrollTo(vwtheme._vars.$lastScrollPosition, 0);
        }
    }

    vwtheme.smoothScroll = function() {
        if (vwtheme._state.$isDev) console.debug("vwtheme.smoothScroll");

        var scroller = function(e) {
            e.preventDefault();

            var dest = 0, t = $(this);

            var header = $('header.page-header');
            var navHeight = 52; //$('nav.in-page-nav').height() + 13;
            var height = header.height() + // height of fixed header
                        $('#toolbar').height() + // drupal toolbar (if logged in)
                        (vwtheme._vars.$windowWidth < 1200 ? navHeight : 0) // nav bar height appears below fixed header
                        ; // buffer
            var hash = $(this.hash);
            if (hash.length) {
              dest = hash.offset().top - height;

              vwtheme._fn.$scrollTo(dest, vwtheme._vars.defaultScrollSpeed);
              vwtheme._vars.$activePageHash = this.hash;
            }

            if(t.hasClass('smooth-scroll--remove')) {
                t.fadeOut(200, function() {
                    t.remove();
                });
            }

        };

        $(document).on('click', '.smooth-scroll', scroller);

        // attach a listener to all href="#anchor"
        $(document).on('click', 'a', function(e) {

          var a = $(e.target).closest('a')[0];
          if (a.getAttribute('href').substr(0,1) != '#') {
            return;
          }

          e.preventDefault();

          var fn = scroller.bind(a);
          fn(e);
        });


        _.delay(function() {
            $('.scroll-prompt').removeClass('is-inactive');
        }, 1000);
        $('.scroll-prompt').on('click', function(e) {
            e.preventDefault();
            var top = $(this).offset().top + (vwtheme._vars.$defaultSpacer * 4);
            vwtheme._fn.$scrollTo(top, vwtheme._vars.$longScrollSpeed);
        });

    }

    vwtheme.pageDashboards = function() {
        if (vwtheme._state.$isDev) console.debug("vwtheme.pageDashboards");
        $(document).on('click', '#PageModal .ctrl.close, .site-dashboard .ctrl.close', function() {
            vwtheme.analytics.setPageView(null);
            var classtoditch = $(this).attr('data-bodyclass');
            $('.' + classtoditch).removeClass(classtoditch);
            vwtheme.freezePage.remove();
            vwtheme._state.$supportPage_active = false;
        });

        $(document).on('click', vwtheme._cache.$navToggle, function(e) {
            e.preventDefault();
            vwtheme._cache.$body.removeClass('UserDashboard--active, SearchDashboard--active').addClass('PageDashboard--active');
            vwtheme.freezePage.remove();
        });

        $(document).on('click', vwtheme._cache.$profileToggle, function(e) {
            e.preventDefault();
            vwtheme._cache.$body.removeClass('PageDashboard--active, SearchDashboard--active').addClass('UserDashboard--active');
            vwtheme.freezePage.remove();
        });
    }

    vwtheme.tabs = function(context) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.tabs");
        $('.tabset', context).not('.processed').each(function() {
            var set = $(this);
            set.addClass('processed');
            set.find('.tabset--triggers')
                .find('.tabset--trigger-item')
                .on('click', function(e) {
                    e.preventDefault();
                    var target = $(this).data().tabtarget;
                    $("#" + target).addClass('is-active').siblings().removeClass('is-active');
                    $(this)
                        .parents('.tabset--triggers')
                        .find('.tabset--trigger-item')
                        .removeClass('is-active');
                    $(this).addClass('is-active');
                });

        });
    }

    vwtheme.displayOnMap = function() {
        $(document).on('click', '.display-on-map', function(e) {
            var data = $(this).data(),
                target = 'card-map',
                $target = $('#' + target),
                geojson = [];
            var newtarg = $('<div/>').attr('id', target).addClass(target).addClass('new').addClass('active');
            $target.replaceWith(newtarg);
            if (vwtheme._vars.$windowWidth < 1024) {
                vwtheme._fn.$scrollTo(newtarg.offset().top, vwtheme._vars.defaultScrollSpeed);
            }
            vwtheme._vars.$mapbox.map_center = data.latlng;
            vwtheme._vars.$mapbox.map_zoom = 15;
            geojson.push({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [data.lng, data.lat]
                },
                properties: {
                    fancy: false,
                    title: data.title,
                    'marker-color': '#6d576b',
                }
            });
            var m = vwtheme.initializeMap(geojson, target, true, false);
            m.markers.eachLayer(function(x) {
                x.openPopup();
            });
        })
    }

    vwtheme.initializeMap = function(geojson, map_id, showclose, showmenu) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.initializeMap");
        var m = vwtheme._vars.$mapbox.activemap;

        //initate map object
        L.mapbox.accessToken = vwtheme._vars.$mapbox.accessToken;
        m = L.mapbox.map(map_id, 'mapbox.streets', {
            zoomControl: false,
            doubleClickZoom: false
        });
        m.setView(vwtheme._vars.$mapbox.map_center, vwtheme._vars.$mapbox.map_zoom);

        //configure controls
        m.scrollWheelZoom.disable();
        m.on('dblclick', function(e) {
            // Zoom exactly to each double-clicked point
            vwtheme._vars.$mapbox.map_center = e.latlng;
            vwtheme._vars.$mapbox.map_zoom = m.getZoom() + 2;
            m.setView(vwtheme._vars.$mapbox.map_center, vwtheme._vars.$mapbox.map_zoom);
        });
        m.on('zoomend', function() {
            vwtheme._vars.$mapbox.map_zoom = m.getZoom();
        });
        m.on('dragend', function() {
            vwtheme._vars.$mapbox.map_center = m.getCenter();
        });
        new L.Control.Zoom({ position: 'bottomleft' }).addTo(m);

        //close
        if (showclose) {
            var closer = $('<span/>').addClass('ctrl close');
            $('#' + map_id).append(closer);
            closer.on('click', function() {
                $('#' + map_id).removeClass('active').empty();
            });
        }


        if (showmenu) {
            var menu = $('<div/>').addClass('map-menu');
            menu.append($('<span/>').text('Jump To:'));
            menu.append($('<i/>').text('Banff').attr('data-loc', 'banff'));
            menu.append($('<i/>').text('Lake Louise').attr('data-loc', 'lakelouise'));
            $('#' + map_id).append(menu);
            menu.find('i').on('click', function() {
                if ($(this).data().loc == "lakelouise") {
                    vwtheme._vars.$mapbox.map_center = vwtheme._vars.$mapbox.lakelouise_center;
                } else {
                    vwtheme._vars.$mapbox.map_center = vwtheme._vars.$mapbox.banff_center;
                }
                m.setView(vwtheme._vars.$mapbox.map_center, 13);
            });
        }

        //add geojson
        var markerLayer = L.mapbox.featureLayer().addTo(m);

        // Add custom popups to each using our custom feature properties
        markerLayer.on('layeradd', function(e) {
            var marker = e.layer,
                feature = marker.feature,
                props = feature.properties;
            if (props.fancy) {
                var popupContent = $('<div/>');
                if (props.image) {
                    popupContent.append($('<img/>').attr('src', props.image).attr('alt', props.title));
                }
                popupContent.append($('<h5/>').addClass('hdr-six').text(props.title));
                var lis = [];
                if (props.web) lis.push($('<li/>').html(props.web))
                if (props.tel) lis.push($('<li/>').html(props.tel))
                if (props.email) lis.push($('<li/>').html(props.email))
                if (lis.length) {
                    var ul = $('<ul/>');
                    for (var i = 0; i < lis.length; i++) ul.append(lis[i]);
                    popupContent.append(ul);
                }
                popupContent.append($('<a>').addClass('btn').text('Full Details').attr('href', props.url));
                popupContent.wrapInner('<div class="popup popup-map"></div>');

                marker.bindPopup(popupContent.html(), {
                    closeButton: false,
                    minWidth: 220
                });
            }
        });


        markerLayer.setGeoJSON(geojson);

        return {
            map: m,
            markers: markerLayer
        };
    }

    vwtheme.userInfo = {

        init: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userInfo.init");

            //add a class for the user location
            vwtheme._cache.$body.addClass(vwtheme._user.$userDetails.$locationGroup);

            $(document).on('click', '.location-set', function(e) {
                e.preventDefault();
                vwtheme.userInfo.geolocateUser.byUserInput(function() {
                    vwtheme.userInfo.updateUser();
                    vwtheme.userInfo.updateUX();
                    window.scrollTo(0, 0);
                });
            });
        },

        //move to vwtheme._user?
        _getUserLabel: function() {
            var lbl = vwtheme._vars.$defaultLocationLabels[vwtheme._user.$userDetails.$locationGroup];
            //nicer label if known
            if (vwtheme._user.$userDetails.$city && vwtheme._user.$userDetails.$region) lbl = vwtheme._user.$userDetails.$city + ', ' + vwtheme._user.$userDetails.$region;
            return lbl;
        },
        updateUser: function() {
            vwtheme._user.$season = vwtheme.userInfo.setUserSeason();
            vwtheme._fn.$sessionSet('vwtheme_user', JSON.stringify(vwtheme._user));
        },
        updateUX: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userInfo.updateUX");
            $('.user-location').html(vwtheme.userInfo._getUserLabel());
            vwtheme.locationContent();
        },

        setUserSeason: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userInfo.setUserSeason");
            var d = new Date();
            var m = d.getMonth();
            return vwtheme._vars.$seasons[m][vwtheme._user.$userDetails.$locationGroup];
        },

        //all functions return array of city, country and region - apart from user entry, which returns location
        geolocateUser: {
            //byIP
            //use user IP to geolocate user
            byIP: function(success_cb, error_cb) {
                var onSuccess = function(location) {
                    success_cb(location);
                };
                var onError = function(error) { if (typeof error_cb == "function") { error_cb(); } };
                //get location
                if (typeof geoip2 == "undefined") {
                    error_cb();
                } else {
                    geoip2.city(onSuccess, onError);
                }
            },
            //byHTML
            //prompt user to allow HTML5 geolocation
            byHTML: function(success_cb, error_cb) {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        //success
                        var vars = {};

                        vwtheme._user.$userDetails.$city = null;
                        vwtheme._user.$userDetails.$country = null;
                        vwtheme._user.$userDetails.$region = null;
                        vwtheme._user.$userDetails.$lat = 0;
                        vwtheme._user.$userDetails.$lng = 0;
                        vwtheme._user.$userDetails.$locationGroup = 'regional';

                        if (typeof position.coords !== "undefined" && typeof position.coords.latitude !== "undefined" && position.coords.latitude !== "undefined") {
                            //build URL for mapbox api reverse geolocation
                            vwtheme._user.$userDetails.$lat = position.coords.latitude;
                            vwtheme._user.$userDetails.$lng = position.coords.latitude;
                            vars.lat = vwtheme._user.$userDetails.$lat;
                            vars.lng = vwtheme._user.$userDetails.$lng;

                            //check that lat/lng is within bounds
                            var bb = vwtheme._vars.$mapbox.local_boundary;
                            if (vars.lat <= bb.n && vars.lat >= bb.s && vars.lng >= bb.w && vars.lng <= bb.e) {
                                //LOCAL!
                                vwtheme._user.$userDetails.$locationGroup = 'local';
                            }
                        }

                        //set the user details
                        vwtheme._user.$locationLabel = vwtheme._vars.$defaultLocationLabels[vwtheme._user.$userDetails.$locationGroup];
                        //success callback
                        if (typeof success_cb == "function") { success_cb(); }

                    }, function() {
                        if (typeof error_cb == "function") {
                            error_cb();
                        }
                    });
                } else {
                    if (typeof error_cb == "function") {
                        error_cb();
                    }
                }
            },
            //byUserInput
            //display a modal to the user and ask them to choose region
            byUserInput: function(callback) {

                $('body').addClass('UserLocationModal--active');

                vwtheme._user.$userDetails.$city = null;
                vwtheme._user.$userDetails.$country = null;
                vwtheme._user.$userDetails.$region = null;
                vwtheme._user.$userDetails.$lat = 0;
                vwtheme._user.$userDetails.$lng = 0;

                $(document).on('click', '.user-location-choice', function(e) {
                    e.preventDefault();
                    vwtheme._user.$userDetails.$locationGroup = $(this).data().location;
                    vwtheme._user.$locationLabel = vwtheme._vars.$defaultLocationLabels[vwtheme._user.$userDetails.$locationGroup];
                    if (typeof callback == "function") { callback(); }
                    $('body').removeClass('UserLocationModal--active');
                });
                $('.user-location-modal').on('click', '.close', function(e) {
                    vwtheme._user.$userDetails.$locationGroup = "longhaul";
                    vwtheme._user.$locationLabel = vwtheme._vars.$defaultLocationLabels[vwtheme._user.$userDetails.$locationGroup];
                    if (typeof callback == "function") { callback(); }
                    $('body').removeClass('UserLocationModal--active');
                });
            },
        }


    } /** end vwtheme.userInfo **/

    vwtheme.dynamicContent = function(context) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.userInfo.dynamicContent");
        if ($('#Moments', context).length) {
            var tags = $('#Moments', context).data().tags;
            app_moments.init({
                Tags: tags,
                Container: $('#Moments', context),
            })
        }

        if ($('#CollectionPosts', context).length) {
            var tags = $('#CollectionPosts', context).data().tags;
            app_blogs.init({
                Tags: tags,
                Container: $('#CollectionPosts .blog-items', context),
            })
        }

        if ($('#EventsCalendar', context).length) {
            app_calendar.init({
                Container: $('#EventsCalendar', context),
            })
        }

        if ($('#FestivalEventsCalendar', context).length) {
            var festivalid = $('#FestivalEventsCalendar', context).data().festivalid;

            app_calendar.init({
                FestivalID: festivalid,
                Container: $('#FestivalEventsCalendar', context),
                ShowNav: false,
            })
        }

        if ($('.simpleview_load', context).length) {
            $('.simpleview_load', context).each(function() {
                var t = $(this),
                    d = t.data();
                d.Container = t;
                app_simpleview.init(d);
            })
        }

    }

    vwtheme.locationContent = function() {
        if (vwtheme._state.$isDev) console.debug("vwtheme.userInfo.locationContent");
        var loc = vwtheme._user.$userDetails.$locationGroup;
        if (vwtheme._state.$isHomePage) {
            if (typeof bllt_heros != "undefined") {
                var tpl_hero = $('#tpl_hero').html();
                Mustache.parse(tpl_hero);
                var pic = Drupal.theme.vwtheme_picture(bllt_heros[loc].file_paths);
                var hero = Mustache.render(tpl_hero, {
                    media_src: bllt_heros[loc].url,
                    media: pic,
                    title: bllt_heros[loc].title
                });
                //empty and append
                $('#Hero').empty().append(hero).addClass('processed');
                //$('#Hero').empty().addClass('processed');
            } else {
                //TODO - default
                $('#Hero').remove();
            }

            if (typeof bllt_highlights != "undefined" && typeof bllt_highlights[loc] != "undefined") {
                $('.homepage-highlights').html(bllt_highlights[loc]);
            } else {
                $('.homepage-highlights').remove();
            }

            if (typeof bllt_ctas != "undefined") {
                $('.homepage-cta').html(bllt_ctas[loc]);
            } else {
                $('.homepage-cta').remove();
            }
        } //end is homepage
        //feature events carousel
        if (typeof bllt_events != "undefined" && $('.feature-events').length && typeof bllt_events[loc] != "undefined") {
            var hdr = $('<header />');
            var flex = $('<div/>').addClass('flexslider flexslider--card-list');
            var list = $('<ul/>').addClass('slides');
            if (vwtheme._state.$isHomePage) {
                hdr.prepend($('<h1/>').addClass('hdr-three').text(bllt_events[loc].title));
                hdr.append(bllt_events[loc].intro.value);
            }
            //tpl_card__general
            var tpl_card = $('#tpl_card__general').html();
            Mustache.parse(tpl_card);

            for (var i = 0; i < bllt_events[loc].items.length; i++) {
                var view, classes, item, list_item = $("<li/>");
                item = bllt_events[loc].items[i];
                item.classes = "item--" + (i + 1);
                var img = null;
                if (item.media.lead) img = item.media.lead.url;
                item.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                    id: 'n' + item.meta.id,
                    title: item.title,
                    url: item.link_url,
                    type: item.meta.type,
                    lat: item.meta.lat,
                    lng: item.meta.lng,
                    img: img
                });

                item.latlng = null;
                if (item.meta.lat && item.meta.lng) {
                    vaitemrs.latlng = Mustache.render($("#tpl_latlng").html(), {
                        lat: item.meta.lat,
                        lng: item.meta.lng,
                        url: item.link_url
                    });
                }

                list.append(list_item.html(Mustache.render(tpl_card, item)));
            }

            $('.feature-events').empty().prepend(hdr).append(flex.html(list));

        } else {
            $('.feature-events').remove();
        }

        $(document).on('click', '.topten-load-more', function(e) {
            e.preventDefault();
            $(this).parent().addClass('show-all-topten');
        })

        $('.top-ten').each(function() {
            //todo - move to cache as used elsewhere and load on init?
            var tpl_card = $('#tpl_card__general').html();
            var tpl_card_moment = $('#tpl_card__moment').html();
            var tpl_card_bloglist = $("#tpl_card__bloglist").html();
            Mustache.parse(tpl_card);
            Mustache.parse(tpl_card_moment);
            Mustache.parse(tpl_card_bloglist);

            var $this = $(this),
                toptenData = $this.data();
            $.when($.getJSON(toptenData.topten + loc))
                .then(function(data, textStatus, jqXHR) { // After ajax has been resolved.
                    var dfd = jQuery.Deferred();
                    if (data.nodes.length) {
                        $this.empty();
                        dfd.resolve(data);
                    }
                    return dfd.promise();
                }).then(function(data) { // Add the item--id and card--wide classes.
                    var new_nodes = null;
                    //Add classes.
                    new_nodes = data.nodes.map(function(v, i, this_arr) {
                        v.node.classes = "item--" + (i + 1);
                        if (i == 1 || i == 6) {
                            v.node.classes += " card--wide";
                        }
                        return v.node;
                    });
                    return new_nodes;
                }).then(function(nodes) { //Render the mymoments and the latlng templates.
                    return nodes.map(function(v, i, this_arr) { //Pass each node into the renderer.
                        var moustache_render = Mustache.render($("#tpl_mymoments").html(), {
                                id: 'n' + v.meta.id,
                                title: v.title,
                                url: v.link_url,
                                type: v.meta.type,
                                lat: v.meta.lat,
                                lng: v.meta.lng,
                                img: v.media.lead.url
                            }),
                            moustache_latlng = null;

                        if (v.meta.lat && v.meta.lng) {
                            moustache_latlng = Mustache.render($("#tpl_latlng").html(), {
                                lat: vars.meta.lat,
                                lng: vars.meta.lng,
                                url: vars.link_url
                            });
                            v.latlng = moustache_latlng;
                        }
                        v.mymoments = moustache_render;
                        return v;
                    });
                }).then(function(nodes) { //Render the remaining templates.
                    nodes.forEach(function(v, i, this_arr) {
                        var card = null;
                        if (v.meta.type == 'moment') {
                            card = Mustache.render(tpl_card_moment, v);
                        } else {
                            card = Mustache.render(tpl_card, v);
                        }
                        $this.append(card);
                    });
                    return nodes;
                }).then(function(nodes) { //Add the "Load more" link.
                    var load_more = $('<span class="load-more topten-load-more"><a href="#" class="load-more-icon">+</a><i class="load-more-text">Load More Highlights</i></span>');
                    $this.after(load_more);
                    return {
                        n_nodes: nodes,
                        load_more: load_more
                    };
                }).then(function(data) { //Render the blog template.
                    var dfd = jQuery.Deferred();
                    if (toptenData.toptentype == "homepage" && typeof bllt_blogs !== "undefined") {
                        var new_post = data.n_nodes.reduce(function(acc, v, i, this_arr) {
                            var post = $('<div />').addClass('blog-item');
                            if (i < 1) {
                                //add media
                                post.append(bllt_blogs[i].file);
                            }
                            post.append(
                                $('<span/>')
                                .addClass('blog-item--date')
                                .html(bllt_blogs[i].created)
                            );
                            post.append(
                                $('<h4/>')
                                .addClass('hdr-five')
                                .append(
                                    $('<a/>')
                                    .attr('href', bllt_blogs[i].url)
                                    .text(bllt_blogs[i].title)
                                )
                            );
                            acc.append(post);
                            return acc;
                        }, $('<div />'));
                        dfd.resolve({ n_nodes: data.n_nodes, blog_post: new_post, load_more: data.load_more });
                    }
                    return dfd.promise();
                }).then(function(nodes) { //Append after the load more link.
                    var card = Mustache.render(tpl_card_bloglist, {
                        classes: "item--blog card--special",
                        bloglist_contents: nodes.blog_post.html()
                    });
                    nodes.load_more.after(card);
                    return nodes;
                }).done(function(nodes) { //Termination node.
                    // Add a special class to the wrapper--grid.
                    $this.closest('.wrapper--grid').addClass('wrapper--relative');
                    vwtheme.dynamic($this);
                });
        });


        var tpl_card = $('#tpl_card__general').html();
        Mustache.parse(tpl_card);

        $('.list[data-ajax="true"]').each(function() {
            var $this = $(this),
                loc = vwtheme._user.$userDetails.$locationGroup,
                seasons = Drupal.settings.bllt_seasons,
                url = $this.data().url + seasons[loc].season_general;
            $.getJSON(url, function(data) {
                if (!data.nodes.length) return;
                for (var $i = 0; $i < data.nodes.length; $i++) {
                    var vars = data.nodes[$i].node;

                    /*vars.share_this = Mustache.render($("#tpl_share").html(), {
                    title: vars.title, url: vars.link_url, type: vars.meta.type
                    });*/
                    vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                        id: 'n' + vars.meta.id,
                        title: vars.title,
                        url: vars.link_url,
                        type: vars.meta.type,
                        lat: vars.meta.lat,
                        lng: vars.meta.lng,
                        img: vars.media.lead.url
                    });
                    vars.latlng = null;
                    if (vars.meta.lat && vars.meta.lng) {
                        vars.latlng = Mustache.render($("#tpl_latlng").html(), {
                            lat: vars.meta.lat,
                            lng: vars.meta.lng,
                            url: vars.link_url
                        });
                    }

                    $this.append(Mustache.render(tpl_card, vars));
                } //end for
            });
        })
    }

    vwtheme.userMoments = {
        init: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.init");
            if (!vwtheme._vars.$sessionStorage) {
                vwtheme.userMoments.disable();
                vwtheme.userMoments.userMomentsPage($('body'));
                return;
            }

            var savedMoments = vwtheme.userMoments.retrieve();
            if (savedMoments) vwtheme._usermoments.$moments = savedMoments;
            vwtheme.userMoments.actions(context);
            vwtheme.userMoments.updateUI(context);
            vwtheme.userMoments.userMomentsPage(context);
        },
        disable: function(context) {
            if (!vwtheme._vars.$sessionStorage) {
                //disable the 'add to moments' functionality when no session storage
                $('.ui-user-moments', context).remove();
                $('.my-moment--icon', context).addClass('disabled').hide();
            }
        },
        clear: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.clear");
            vwtheme._usermoments.$moments = [];
            vwtheme.userMoments.save();
            vwtheme.userMoments.updateUI($('body'));
        },
        setActive: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.setActive");
            for (var i = 0; i < vwtheme._usermoments.$moments.length; i++) {
                $('.my-moments--trigger[data-id="' + vwtheme._usermoments.$moments[i].id + '"]', context).addClass('moment-in-list');
            }
        },
        actions: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.actions");

            //clear
            $(document).on('click', '.my-moments--clear', function(e) {
                e.preventDefault();
                vwtheme.userMoments.clear();
                vwtheme.userMoments.updateUI($('body'));
                vwtheme.userMoments.userMomentsPage($('body'));
            })

            $(document).on('click', '.my-moments--trigger', function(e) {
                var t = $(this),
                    added = vwtheme.userMoments.adjustList(e, t, t.data());
                e.preventDefault();
            });

            $(document).on('click', '.ui-user-moments', function(e) {
                if (!vwtheme._usermoments.$moments.length) {
                    e.preventDefault();
                    var dialog = $('.my-moments-info');
                    if (!dialog.length) {
                        dialog = $('<div class="my-moments-info">')
                            .html("<h5 class=\"hdr-eight hdr-white\">Your Moments</h5><p>As you browse the site, add content to your Banff Moments list. Click here to access stored items.</p><a href=\"#\" class=\"btn--white\">Got it!</a>");
                        $('body').append(dialog);
                    }
                    dialog.css({
                        position: 'absolute',
                        top: e.pageY + 30,
                        left: e.pageX - 100,
                    }).addClass('active');
                    dialog.find('a').on('click', function(e) {
                        dialog.removeClass('active');
                        _.delay(function() { dialog.remove(); }, 200);
                        return false;
                    });
                    return false;
                }
            });
        },
        adjustList: function(e, t, data) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.adjustItem");
            if (typeof data.id == "undefined" || typeof data.title == "undefined") return 0;

            var match = false,
                new_items = [];
            for (var i = 0; i < vwtheme._usermoments.$moments.length; i++) {
                if (vwtheme._usermoments.$moments[i].id == data.id) {
                    match = true;
                } else {
                    new_items.push(vwtheme._usermoments.$moments[i]);
                }
            }
            if (!match) {
                vwtheme._usermoments.$moments.push(data);
                t.addClass('moment-in-list');
            } else {
                vwtheme._usermoments.$moments = new_items;
                t.removeClass('moment-in-list');
            }
            vwtheme.userMoments.save();
            vwtheme.userMoments.updateUI($('body'));
            vwtheme.userMoments.userMomentsPageListDisplay($('body'));
        },
        updateUI: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.updateUI");
            if (vwtheme._vars.$sessionStorage) {
                //update the header counter
                var ui_update = $('.user-moments--count', context),
                    type = ui_update.prop('nodeName'),
                    new_update = $('<' + type + ' />');
                new_update.text(vwtheme._usermoments.$moments.length).addClass('user-moments--count num-moments-' + vwtheme._usermoments.$moments.length);
                ui_update.before(new_update).remove();

                vwtheme.userMoments.setActive(context);
            }

        },
        save: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.save");
            var val = JSON.stringify(vwtheme._usermoments.$moments);
            //@TODO - check for session storage
            return vwtheme._fn.$sessionSet("vwtheme_userMoments", val);
        },
        retrieve: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.userMoments.retrieve");
            var val = vwtheme._fn.$sessionGet("vwtheme_userMoments");
            if (val) return JSON.parse(val);
            return val;
        },
        userMomentsPageListDisplay: function(context) {
            var display = $('#UserFavourites', context);

            if (display.length) {
                var list = display.find('.list');
                //remove existing
                list.empty();

                var tpl_card = $('#tpl_card__general').html();
                var tpl_card_moment = $('#tpl_card__moment').html();
                var rendered = "";
                var table = $('<table/>');
                Mustache.parse(tpl_card);
                Mustache.parse(tpl_card_moment);

                //todo can load content-type specific templates
                for (var i = 0; i < vwtheme._usermoments.$moments.length; i++) {
                    var tr = $('<tr/>');
                    //using data attributes, so no 'meta' here
                    var vars = vwtheme._usermoments.$moments[i];

                    vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                        id: vars.id,
                        title: vars.title,
                        url: vars.link_url,
                        type: vars.type,
                        lat: vars.lat,
                        lng: vars.lng
                    });
                    /*            tr.append($('<td/>').append($('<div/>').html(vars.title).addClass('hdr-five')));
                            //tr.append($('<td/>').text(vars.type));
                            tr.append($('<td/>').html(vars.mymoments));
                            var link = $('<a/>').addClass('btn').attr('href', vars.url).text('Rediscover');
                            tr.append($('<td/>').append(link));*/
                    vars.link_text = "Rediscover";
                    vars.link_url = vwtheme._usermoments.$moments[i].url;

                    vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                        id: vars.id,
                        title: vars.title,
                        url: vars.link_url,
                        type: vars.type,
                        lat: vars.lat,
                        lng: vars.lng
                    });
                    vars.latlng = null;
                    //imagery
                    vars.rendered = {
                        thumb_media: '<span class="bllt-placeholder-img rand-' + (Math.floor(Math.random() * 10) + 1) + '"></span>',
                    };

                    if (vars.img) {
                        vars.rendered.thumb_media = '<div class="listing-media-item listing-media-type-img lazyload" data-bg="' + vars.img + '"><span></span></div>';
                    }

                    vars.media = { lead: { url: vars.img, bgset: vars.img } }; //moments v2

                    //surtitle
                    var surtitle = (vars.type == "collection" ? "Things to Do" : vars.type);
                    if (vars.type == "cta") surtitle = "Content";
                    if (typeof vars.surtitle != "undefined") surtitle = vars.surtitle
                    vars.rendered.surtitle = '<div class="meta-category">' + surtitle + '</div>';

                    if (vars.type == "moment") {
                        rendered = Mustache.render(tpl_card_moment, vars);
                    } else {
                        rendered = Mustache.render(tpl_card, vars);
                    }

                    list.append(rendered);
                    //table.append(tr);
                }
                //list.append(table);
                vwtheme.dynamic(display);
            }
        },
        userMomentsPage: function(context) {
            //moments page
            var display = $('#UserFavourites', context);
            //TODO - redo visibility with parent class on dashboard
            if (!display.length) return false;
            if (!vwtheme._vars.$sessionStorage) {
                $('.my-moments--instruction.has-moments', context).hide();
                $('.my-moments--instruction.no-moments', context).hide();
                $('.my-moments--instruction.no-session-storage', context).show();
            } else {
                if (vwtheme._usermoments.$moments.length) {
                    display.removeClass('is-empty');
                    $('.my-moments--instruction.has-moments', context).show();
                    $('.my-moments--instruction.no-moments', context).hide();
                    vwtheme.userMoments.userMomentsPageListDisplay(context);

                } else {
                    display.addClass('is-empty');
                    $('.my-moments--instruction.no-moments', context).show();
                    $('.my-moments--instruction.has-moments', context).hide();
                }
            }
        }

    }


    vwtheme.locationLookup = function(context) {
        var results_display, xhr, last_results = [];

        var location_search_lookup = function(string, cb) {
                var q_url = 'https://ws.geonames.net/searchJSON?name_startsWith=' + string + '&featureClass=P&style=long&maxRows=100&username=bllt'
                if (xhr && xhr.readyState != 4) {
                    xhr.abort();
                }
                xhr = $.ajax({
                    url: q_url,
                    success: function(data) {
                        cb(true, data);
                    },
                    error: function(data) {
                        cb(false, data);
                    }
                });
            } //end location_search_lookup

        var display_error = function(results_display) {
            results_display.empty().append($('<div/>').text("no results found").addClass('empty'));
        }

        var display_results = function(results_display, items) {
            results_display.empty();
            for (var i = 0; i < items.length; i++) {
                var str = items[i].name + ', ' + items[i].adminName1 + ', ' + items[i].countryCode;
                results_display.append($('<div/>')
                    .data("locdata", items[i])
                    .text(str)
                    .addClass('result')
                );
            }
            last_results = results_display;
        }

        $('.location-search-input', context).on('keyup', function() {
            var t = $(this),
                s = t.val(),
                results_display = t.siblings('.location-search-results'),
                is_processed = (t.hasClass('processed') ? true : false);

            //for the quiz - add the required span if it doesn't exist
            if(results_display.length == 0) {
              t.parent().append('<span class="location-search-results" style="top: 0;"></span>');
              results_display = $(this).siblings('.location-search-results');
            }

            results_display.empty().removeClass('js-active is-error is-empty is-success');

            if (s.length > 3 && !is_processed) {
                location_search_lookup(s, function(success, data) {
                    results_display.addClass('js-active');
                    if (!success) {
                        results_display.addClass('is-error');
                        display_error(results_display);
                        return;
                    }
                    if (data.totalResultsCount < 1) {
                        results_display.addClass('is-empty');
                        display_error(results_display);
                        return;
                    }
                    results_display.addClass('is-success');
                    display_results(results_display, data.geonames);
                    results_display.find('.result').on('click', function() {
                        var r = $(this);
                        t.val(r.text()).addClass('processed');
                        var d = r.data("locdata");
                        //TODO - populate the hidden fields!
                        results_display.empty().removeClass('js-active');
                    });
                });
            }
            if (s.length < 4) { t.removeClass('processed'); }
        });
    }

    vwtheme.supportPageLoad = function() {
        //return false;
        if (vwtheme._state.$isDev) console.debug("vwtheme.supportPageLoad");
        //.itinerary__section-contents a, TODO add
        $(document).on('click', '.collection-page-content--full .node-highlights-slideshow li article a', function(e) {
            if (vwtheme._vars.$windowWidth < 768) return;
            $(this).addClass('triggered');
            //if wide enough keep going
            e.preventDefault();
            var href = $(this).attr('href') + '?support=1';
            $('#SupportPage .inner').html(Drupal.settings.bllt.loader_html);
            $('body').addClass('SupportPage--active');
            vwtheme.freezePage.add();
            vwtheme._state.$supportPage_active = true;

            $.get(href, function(result) {

                vwtheme.analytics.setPageView(href);
                $('#SupportPage .inner')
                    .html($(result).find('#PageContents').html())
                    .find('.page-content--full')
                    .addClass('page-content--modal')
                    .removeClass('page-content--full collection-page-content--full static-page-content--full');

                $('#SupportPage').find('.static-page--intro').removeClass('static-page--intro');
                $('#SupportPage').find('.collection-page--intro').removeClass('collection-page--intro');
                vwtheme.dynamic($('#SupportPage'));
            }).fail(function() {
                //redirect to link
                window.location = href;
            });
        });
    }

    /**

    Look at user country
    - if not USA/CANADA
    - set user location to longhaul
    - LOAD PAGE CONTENTS
    - set city, state, country as applicable
    - if state not BC/AB
    - set user location to North America
    - LOAD PAGE CONTENTS
    - set city, state, country as applicable
    - if not AB
    - set user location to BC
    - LOAD PAGE CONTENTS
    - set city, state, country as applicable
    - if is AB
    - if city not Banff OR city not Lake Louise OR city not Canmore
    - set user location to Regional
    - LOAD PAGE CONTENTS
    - set city, state, country as applicable
    - prompt user for HTML5 Geolocation to confirm
    - if user confirms location
    - parse html5 geolocation
    - set user location as applicable (Regional or Local)
    - set city, state, country as applicable
    - else
    - set user location to Local
    - set city, state, country as applicable

    If no results from geolocation by IP
    - set user location to longhaul
    - LOAD PAGE CONTENTS
    - Ask user to confirm manually by HTML

    Once location is set: (use $isLocationDetermined flag?)
    - determine Location Label (location label should be tied to that in the modal - i.e. the regions, not city)
    - update label UI


    When user updates their location manually
    - set user location to that entered
    - LOAD PAGE CONTENTS
    - determine Location Label (location label should be tied to that in the modal - i.e. the regions, not city)
    - update label UI

    **/
    vwtheme.init = function(context, settings) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.init");
            //see whether the user details reside in a session or not
            _vwtheme_user = null;
            if (vwtheme._vars.$sessionStorage) {
                var _vwtheme_user = vwtheme._fn.$sessionGet('vwtheme_user');
            } else {
                vwtheme.launch(context, settings);
                return;
            }

            if (_vwtheme_user !== null) {
                //if session exists, proceed without lookup
                vwtheme._user = JSON.parse(_vwtheme_user);
                if (typeof vwtheme._user.$version == "undefined" || vwtheme._user.$version !== 1) {
                    if (vwtheme._state.$isDev) console.debug("vwtheme.init - wrong user version number");
                    vwtheme._fn.$sessionDel('vwtheme_user');
                    vwtheme.init();
                }
                vwtheme.launch(context, settings);
            } else {
                //proceed with lookup
                vwtheme.userInfo.geolocateUser.byIP(function(data) {
                    //set lat lng
                    if (typeof data.location !== "undefined" ||
                        typeof data.location.latitude !== "undefined") {
                        vwtheme._user.$userDetails.$lat = data.location.latitude;
                        vwtheme._user.$userDetails.$lng = data.location.longitude;
                    }

                    //default to longhaul
                    vwtheme._user.$userDetails.$locationGroup = 'longhaul';
                    //check country data exists
                    if (typeof data == "undefined" ||
                        typeof data.country == "undefined" ||
                        typeof data.country.iso_code == "undefined") {
                        vwtheme.launch(context, settings);
                        return;
                    }
                    //set country as we know it
                    vwtheme._user.$userDetails.$country = data.country.iso_code;
                    //if country but not US or CANADA
                    if (data.country.iso_code !== "CA" &&
                        data.country.iso_code !== "US" &&
                        data.country.iso_code !== "USA") {
                        vwtheme.launch(context, settings);
                        return;
                    }
                    vwtheme._user.$userDetails.$locationGroup = 'north_america';
                    //no province/state data
                    if (typeof data.subdivisions == "undefined" ||
                        typeof data.subdivisions[0] == "undefined" ||
                        typeof data.subdivisions[0].iso_code == "undefined") {
                        vwtheme.launch(context, settings);
                        return;
                    }
                    //set region as we know it
                    vwtheme._user.$userDetails.$region = data.subdivisions[0].iso_code;
                    //province/state data but not BC or AB
                    if (data.subdivisions[0].iso_code !== "BC" &&
                        data.subdivisions[0].iso_code !== "AB") {
                        vwtheme.launch(context, settings);
                        return;
                    }

                    //regional
                    vwtheme._user.$userDetails.$locationGroup = 'regional';

                    //if we have a city, then we know where the user is
                    if (typeof data.city !== "undefined" &&
                        typeof data.city.names !== "undefined" &&
                        typeof data.city.names.en !== "undefined"
                    ) {
                        //set city as we know it
                        vwtheme._user.$userDetails.$city = data.city.names.en;
                        //if in one of these locations, set to locationgroup to local
                        if (data.city.names.en == "Banff" ||
                            data.city.names.en == "Lake Louise" ||
                            data.city.names.en == "Canmore") {
                            vwtheme._user.$userDetails.$locationGroup = 'local';
                        }
                        vwtheme.launch(context, settings);
                        return;
                    } else {
                        if (data.subdivisions[0].iso_code == "BC") {
                            vwtheme.launch(context, settings);
                            return;
                        }

                        //know in Alberta, but don't know city, so..
                        //display the regional site
                        vwtheme.launch(context, settings);
                        //but prompt for HTML5 geolocation
                        vwtheme.userInfo.geolocateUser.byHTML(function(data) {
                            //update the UX
                            vwtheme.userInfo.updateUX();
                        }, function(data) {
                            //fail HTML
                            vwtheme.userInfo.geolocateUser.byUserInput(function() {
                                vwtheme.userInfo.updateUser();
                            });
                        });
                    }
                }, function() {
                    //fail IP
                    vwtheme._user.$userDetails.$locationGroup = 'longhaul';
                    vwtheme.launch(context, settings);
                    vwtheme.userInfo.geolocateUser.byHTML(function(data) { //rather than HTML5 geo, this could be modal
                        //success HTML
                        vwtheme.userInfo.updateUX();
                    }, function() {
                        //fail HTML
                        vwtheme.userInfo.geolocateUser.byUserInput(function() {
                            vwtheme.userInfo.updateUser();
                        });
                    })
                })
            }
        }
        //global calls that only need to happen or be specified once


    //on first run
    vwtheme.launch = function(context, settings) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.launch");
        vwtheme.userInfo.updateUser();
        vwtheme.userInfo.updateUX();
        vwtheme.global(context, settings);
        vwtheme.dynamic(context, settings);
    }


    vwtheme.flexsliders = {
        init: function(context) {
            if (vwtheme._state.$isDev) console.debug("vwtheme.flexsliders.init");
            var sliders = [],
                card_sliders = [];
            //https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
            $('.flexslider', context).each(function() {

                var wrapper = $(this);



                var vars = {
                        animationLoop: true,
                        animation: "slide",
                        slideshow: false,
                        start: function() {
                            $(window).resize();
                            var _this = $(this);
                            //console.log('starting flexslider');
                            vwtheme.flexsliders.positionArrows(_this, wrapper);

                            //need to position also on image load to catch lazyload
                            wrapper.find('img').on('load', function() {
                                vwtheme.flexsliders.positionArrows(_this, wrapper);
                            })

                        },
                        after: function() {
                            vwtheme.flexsliders.positionArrows($(this), wrapper);
                        },
                    }
                    //card lists
                if ($(this).hasClass('flexslider--card-list') || $(this).hasClass('flexslider--moment-list')) {
                    vars.itemWidth = 210;
                    vars.itemMargin = 5;
                    card_sliders.push($(this).flexslider(vars));
                } else {
                    sliders.push($(this).flexslider(vars));
                }
            });
            vwtheme.flexsliders.resize();
        },
        positionArrows: function(slideshow, wrapper) {
            if (wrapper.hasClass('slideshow-slides')) {
                var adjust = 0;
                var img = wrapper.find('li.flex-active-slide').find('img');
                if (img.length) adjust = img.outerHeight() * 0.5;

                wrapper.find('.flex-direction-nav a').css({
                    top: (adjust),
                });

                wrapper.find('.flex-control-nav').css({
                    bottom: 'auto',
                    top: (adjust * 2) - (50)
                })
            }
        },
        resize: function() {
            if (vwtheme._state.$isDev) console.debug("vwtheme.flexsliders.resize");
            var gw,
                num_items = 1,
                spc = 20,
                t;
            $('.flexslider--card-list').each(function() {
                t = $(this);
                if (typeof t.data().flexslider == "undefined") return;
                gw = t.outerWidth();
                if (gw > 550) num_items = 2;
                //if(gw > 700) num_items = 2;
                if (gw > 900) num_items = 3;
                if (gw > 1250) num_items = 4;
                if (gw > 1500) num_items = 5;
                t.data().flexslider.vars.itemMargin = spc;
                t.data().flexslider.vars.itemWidth = ((gw - ((num_items - 1) * spc)) / num_items);

                //here we want to do some stuff based on the outerwidth and the number of items
                t.removeClass('flex-centered flex-hide-pager');
                //now decide whether in needs to be added
                //min num items is 4

                var num_cards_in_list = t.find('ul.slides > li').length;

                if (gw > 1250 && num_cards_in_list <= 3) {
                    t.addClass('flex-centered');
                }

                if (gw > 1500 && num_cards_in_list <= 4) {
                    t.addClass('flex-centered');
                }

                if (num_cards_in_list <= num_items) t.addClass('flex-hide-pager');
            });

            //if width below threshold and state is static
            //update to slideshow
            $('.flexslider--moment-list').each(function() {
                if (typeof $(this).data().flexslider == "undefined") return true; //continue
                gw = $(this).outerWidth();
                if (gw > 727) num_items = 2;
                if (gw > 943) num_items = 3;
                $(this).data().flexslider.vars.itemMargin = spc;
                $(this).data().flexslider.vars.itemWidth = (gw - ((num_items - 1) * spc)) / num_items;
            });
            //vwtheme.flexsliders.setSlideHeights();
        },
        setSlideHeights: function() {
            var evenSliderHeight = function(slideContainer, slideItem) {
                var slider_height = 0;
                var $slider_slide = $(slideContainer).find(slideItem);
                $slider_slide.each(function() {
                    var __height = $(this).outerHeight(true);
                    if (slider_height < __height) {
                        slider_height = __height;
                    }
                });
                $slider_slide.css('min-height', slider_height);
            };
            //evenSliderHeight('.flexslider', '.slides > li');
        }
    }

    vwtheme.siteMenu = function(context) {
        var removeActive = function(depth) {
            $(".site-map nav.menu-active").each(function() {
                if ($(this).data().depth > depth) {
                    $(this).removeClass('menu-active');
                }
            });
        }
        var active_depth = 1;
        var setActiveDepth = function() {
            //add class for mobile transitions
            $('.main-menu').removeClass(function(index, css) {
                return (css.match(/(^|\s)level-\S+/g) || []).join(' ');
            }).addClass('level-active-' + active_depth);
        }
        $('.main-menu').addClass('level-active-1');
        $('.menu-container .menu-link-item.has-children', context).on('click', function(e) {
            e.preventDefault();
            var t = $(this),
                d = $(this).data();
            var targ = $('nav.menu-parent-' + d.mlid);
            active_depth = d.depth;

            if (t.hasClass('menu-active')) {
                t.removeClass('menu-active');
                removeActive(d.depth);
            } else {
                if (d.depth == 1) {
                    $(".main-menu .menu-link-item").removeClass('menu-active');
                }
                active_depth = d.depth + 1;
                $(".main-menu .menu-link-item[data-depth='" + d.depth + "']").removeClass('menu-active');
                t.addClass('menu-active');
                removeActive(d.depth);
                targ.addClass('menu-active');
            }
            setActiveDepth(active_depth);
        });
        $('li.menu-back', context).on('click', function() {
            var p = $(this).parents('nav');
            p.removeClass('menu-active');
            $('.main-menu .menu-link-item[data-mlid="' + p.data().parent + '"]').removeClass('menu-active');
            active_depth--;
            setActiveDepth();
        });

    }

    //video modal for landing pages
    videoModal = {
        cfg : {
            dialog :                $('#LeadVideoModal'),
            modal_video_url:        $('#LeadVideoModal').find('.media-youtube-player').attr('src'),
            modal_video:            $('#LeadVideoModal').find('.media-youtube-player'),
            ratio:                  0.609375,
            padding_large:          40*2+30,
            padding_small:          15*2+30,
        },
        init : function() {

            $(document).on('click', '#watch-video a', function(e) {

                e.preventDefault();
                var dialog = videoModal.cfg.dialog;
                if (!dialog.length) {
                  return false;
                }

                //make the dialog the full size, show and start/stop videos
                videoModal.setVideoModalSize();
                dialog.addClass('active').show();
                videoModal.stopStartVideo("playVideo");
                videoModal.stopStartHTML5();

                //set up the close button
                dialog.find('.close').on('click', function(e) {
                    dialog.removeClass('active').css('');
                    videoModal.stopStartVideo("pauseVideo");
                    _.delay(function() {
                      dialog.hide();
                      videoModal.stopStartHTML5();
                     }, 200);
                    return false;
                });
                return false;
            });

            $(window).resize(function() {
                videoModal.setVideoModalSize();
            });

        },
        stopStartVideo : function (func, args) {
          var iframe = $("#LeadVideoModal iframe")[0];
          if (iframe) {
              var src = iframe.getAttribute('src');
              if (src) {
                  if (src.indexOf('youtube.com/embed') != -1) {
                      iframe.contentWindow.postMessage(JSON.stringify({
                          'event': 'command',
                          'func': func,
                          'args': args || []
                      }), "*");
                  }
              }
          }
        },
        stopStartHTML5 : function () {
          //pause/unpause html video
          var video = document.getElementById('landing_video');
          if(video !== null) {
            if(videoModal.cfg.dialog.css("display") == 'none') {
                video.play();
            }
            else {
                video.pause();
            }
          }
        },
        setVideoModalSize : function () {
          var dialog = videoModal.cfg.dialog;
          if (!dialog.length) {
            return false;
          }
          var h = window.innerHeight;
          var w = document.body.scrollWidth;

          //calculate the shadowbox height and width
          //based on the width - allow 30px of margin
          var ratio = videoModal.cfg.ratio;
          var padding = videoModal.cfg.padding_large;
          //reduce padding on smaller screens
          if(w < 550) {
            padding = videoModal.cfg.padding_small;
          }

          //add the white background
          $(".lead-video-modal-back").css("position", "fixed").css("background", "#fff").css("width", (w-30)+"px").css("height", (h-30)+"px").css("left", "15px").css("top", "15px");

          var wh = (w-padding)*ratio;
          var ww = (w-padding);
          //if the width exceeds the max-width of the video
          if(ww > $(".field-name-field-video").css("max-width").replace("px", "")) {
            ww = $(".field-name-field-video").css("max-width").replace("px", "");
            wh = ww*ratio;
          }
          //if the height exceeds the available space, base on height instead
          if(wh > (h-padding)) {
            var ww = (h-padding)/ratio;
            var wh = (h-padding);
          }
          //figure out the top and left of the box
          var top = (h-wh)/2;
          var left = (w-ww)/2;
          //on small devices reduce the left spacing

          $(".lead-video-modal-wrapper").css("width", ww+"px").css("left", left+"px").css("top", top+"px");

          //make the dialog the full size and show
          dialog.css({ height: h+'px', width: w+'px' });
        }
    }

    //HTML5 video for landing pages
    jsVid = {
        cfg : {
            runVid :                false,
            minWidth:               768,
            mobileWidth:            768,
            supportsVid :           !!document.createElement('video').canPlayType,
            ww :                    $(window).width(),
            canPlay_MP4 :           false,
            canPlay_OGV :           false,
            canPlay_WEMB :          false,
            wrapper :               $('.video-display-wrapper'),
            vidPath :               "/sites/default/files/html5vid/",
        },
        run : function() {
            if(jsVid.cfg.supportsVid && jsVid.cfg.ww >= jsVid.cfg.minWidth) {
                jsVid.cfg.runVid = true;
                jsVid.vidType();
            }
            return jsVid.cfg.runVid;
        },
        vidType : function() {
            var canPlayTemp = document.createElement('video');
            jsVid.cfg.canPlay_MP4 = canPlayTemp.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        },
        init : function() {
            //make sure the wrapper exists and we can run the video
            if(jsVid.cfg.wrapper.length) {
              if(jsVid.run()) {
                  jsVid.loadVideo();
              } else {
                  jsVid.loadPlaceholder();
              }
            }
            else {
              jsVid.loadPlaceholder();
            }
        },
        loadVideo : function() {
            //add the extension
            jsVid.cfg.wrapper = $('.video-display-wrapper');
            if(jsVid.cfg.canPlay_MP4) {
              vidPath = jsVid.cfg.wrapper.attr('data-video-url');
              posterPath = jsVid.cfg.wrapper.attr('data-video-poster');
              jsVid.cfg.wrapper.append('<video id="landing_video" autoplay loop="loop" preload="auto" muted="muted" poster="'+posterPath+'" src="'+vidPath+'" style="object-fit: cover;" /></div>');
              jsVid.cfg.wrapper.addClass('has-video');
            }
            else {
              jsVid.loadPlaceholder();
            }
        },
        loadPlaceholder : function() {
            //no video, show the lead image
            $('.mobile-video-fallback').show();
        }
    }


    vwtheme.global = function(context, settings) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.global");
        vwtheme.updateCache();
        vwtheme.userInfo.init(context);
        vwtheme.pageDashboards(context);
        //vwtheme.locationContent(context);
        vwtheme.userMoments.init(context);
        vwtheme.supportPageLoad(context);
        vwtheme.currentPageSection.init();
        vwtheme.analytics.init();
        vwtheme.socialShare();
        vwtheme.siteMenu(context);


        vwtheme.minHeightMenuPages();

        //init new video features
        jsVid.init();
        videoModal.init();

        //resize and scroll update

        $(window).resize(function() {
            vwtheme.updateCache();
            vwtheme.flexsliders.resize();
            $('.my-moments-info').fadeOut(200, function() { $('.my-moments-info').remove(); });
            vwtheme.minHeightMenuPages();
        });

        $('.ui-messages .close').on('click', function() { $('.ui-messages').remove(); });

        vwtheme.displayOnMap(context);
        vwtheme.locationLookup(context);

        //show map on load if paramter is there
        var display = getParameterByName('__display');
        if (display == "map") $('.card-full--details .display-on-map').trigger('click');

        vwtheme.smoothScroll(context);


        $('.tools-toggle').on('click', function(e) {
            e.preventDefault();
            $('.my-moments-info').removeClass('active');
            var targ = $('.page-tools').find('.' + $(this).data().target);
            if (targ.hasClass('is-active')) {
                targ.removeClass('is-active');
                vwtheme.freezePage.remove();
                vwtheme._state.$pageTool_active = false;
            } else {
                targ.addClass('is-active');
                vwtheme.freezePage.add();
                vwtheme._state.$pageTool_active = true;
            }
            if (targ.hasClass('search-form') && vwtheme._state.$pageTool_active) {
                //focus on search form
                targ.find('#edit-term').focus();
            }
            return false;
        });

        var hpn = null;
        if ($('.page-navigation').length) {
            hpn = $('.page-navigation')
                .clone()
                .removeClass('page-navigation')
                .addClass('header-page-navigation');
            $('.page-header').append(hpn);
        }

        $(window).scroll(function() {
            vwtheme.updateCache();
            if (!vwtheme._state.$is_PageFreezed) {

                //PAGE NOT FROZEN
                if (vwtheme._vars.$scrollPosition >= 50) {
                    $('.scroll-prompt').addClass('is-inactive');
                }

                if ($('#Hero').length) {
                    if (vwtheme._vars.$scrollPosition < 200) {
                        var pc = 1 - ((vwtheme._vars.$scrollPosition / 2) / 100),
                            Ypos = 100 - (pc * 100);
                        $('#Hero .hero--title h1').css({
                            opacity: pc,
                            transform: 'translateY(-' + Ypos + 'px)',
                        });
                    } else {
                        $('#Hero .hero--title h1').css({
                            opacity: 0,
                            transform: 'translateY(-100px)',
                        });
                    }
                }

                if (vwtheme._vars.$scrollPosition >= 120) {
                    if (!vwtheme._state.$is_PageNav_fixed) {
                        vwtheme._state.$is_PageNav_fixed = true;
                        vwtheme.setFixedHeaderClasses();
                    }
                } else {
                    if (vwtheme._state.$is_PageNav_fixed) {
                        vwtheme._state.$is_PageNav_fixed = false;
                        vwtheme.setFixedHeaderClasses();
                    }
                }

                if (hpn && vwtheme._vars.$scrollPosition + (vwtheme._vars.$fixedHeaderHeight - vwtheme._vars.$defaultSpacer) > $('.page-navigation').offset().top) {
                    $('.header-page-navigation').addClass('page-header--shownav');
                } else {
                    $('.header-page-navigation').removeClass('page-header--shownav');
                }

                $('.my-moments-info').fadeOut(200, function() { $('.my-moments-info').remove(); });


            } else {
                //PAGE FROZEN
                if (vwtheme._vars.$lastScrollPosition > 120) {
                    vwtheme._state.$is_PageNav_fixed = true;
                    vwtheme.setFixedHeaderClasses();
                }
            }

        });

        vwtheme.newsletterSignup(context);

        $(document).on('click', '.page-section-navigation li.expanded > a', function(e) {
            e.preventDefault();
            var p = $(this).parent();
            if (p.hasClass('active-trail')) return;
            p.siblings().removeClass('active-trail').find('ul').hide();
            p.addClass('active-trail').find('ul').show();
        })

        $(document).on('click', '.filters-expanded-toggle', function(e) {
            $(this).parents('.list_parent').toggleClass('filters-expanded');
        });

        $(document).on('click', '.mobile-page-menu-toggle', function(e) {
            $('.page-section-navigation').toggle();
        });



        $(document).on('click', function(e) {
            vwtheme.clickOutside($(e.target));
        });

        //escape
        $(document).keydown(function(e) {
            if (e.which == 27 && vwtheme._state.$supportPage_active) {
                $('body').removeClass('SupportPage--active');
                vwtheme.freezePage.remove();
                vwtheme._state.$supportPage_active = false;
            } else if (e.which == 27 && vwtheme._state.$pageTool_active) {
                $('.page-tools .is-active').removeClass('is-active');
                vwtheme.freezePage.remove();
                vwtheme._state.$pageTool_active = false;
            }
        });

        $('.site-map-social--newsletter').on('click', function(e) {
            vwtheme.freezePage.remove();
            $('.page-tools .is-active').removeClass('is-active');
        });
    }

    vwtheme.clickOutside = function(targ) {
        //console.log('support page', vwtheme._state.$supportPage_active ? 'active' : 'not-active');
        if (vwtheme._state.$supportPage_active) {
            if (!targ.hasClass('triggered') && !targ.hasClass('.support-page') && !targ.parents('.support-page').length) {
                $('body').removeClass('SupportPage--active');
                vwtheme.freezePage.remove();
                //update state
                vwtheme._state.$supportPage_active = false;
            }
        } else if (vwtheme._state.$pageTool_active) {
            if (!targ.hasClass('.page-tools') && !targ.parents('.page-tools').length) {
                $('.page-tools .is-active').removeClass('is-active');
                vwtheme.freezePage.remove();
                vwtheme._state.$pageTool_active = false;
            }
        }
    }

    vwtheme.setFixedHeaderClasses = function() {
        if (vwtheme._state.$is_PageNav_fixed) {
            $('.page-header').addClass('page-header--fixed').removeClass('page-header--default');
            $('.page-tools').addClass('page-tools--fixed').removeClass('page-tools--default');
        } else {
            $('.page-header').removeClass('page-header--fixed').addClass('page-header--default');
            $('.page-tools').removeClass('page-tools--fixed').addClass('page-tools--default');
        }
    }

    vwtheme.minHeightMenuPages = function(context) {
        if ($('.page-section-navigation', context).length) {
            var t = $('.page-section-navigation', context),
            article = $('article.node', context),
            node = article.length > 0 ? article[0] : null;

            // enforce min-height on /media-relations content for expansion of story ideas menu
            if (node != null && ['Node-86', 'Node-88', 'Node-89', 'Node-82', 'Node-564', 'Node-120', 'Node-403', 'Node-406', 'Node-407', 'Node-408', 'Node-409', 'Node-410', 'Node-411', 'Node-412', 'Node-413', 'Node-414', 'Node-415', 'Node-416', 'Node-417', 'Node-418', 'Node-419'].indexOf(node.id) >= 0) {
              t.parent().siblings('.page-content--full').css({ 'min-height': '750px' });
              return;
            }

            t.parent().siblings('.page-content--full').css({ 'min-height': t.outerHeight() });
        }
    }

    vwtheme.socialShare = function(context) {
        vwtheme._cache.socialShareUrls = {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=[[URL]]',
            twitter: 'https://twitter.com/intent/tweet/?text=[[TITLE]]&url=[[URL]]',
            pinterest: 'https://www.pinterest.com/pin/create/button/?url=[[URL]]&media=[[IMG]]&description=[[DESC]]',
        }

        //Social Sharing Modal Open
        $(document).on('click', '.social-share', function(e) {
            e.preventDefault();
            var t = $(this),
                d = t.data(),
                share_dialog = $('.social-sharing');
            $('body').toggleClass('is-social-sharing');
            //update the dialog
            share_dialog.find('.share-title').text(d.title);
            //data attribute and clicks
            share_dialog.find('a.js-social-share').on('click', function(e) {
                e.preventDefault();
                var url = document.location.origin + d.url;
                var popup_url = '';
                var share_type = '';
                switch ($(this).attr('id')) {
                    case 'social-share--pinterest':
                        share_type = 'pinterest';
                        popup_url = vwtheme._cache.socialShareUrls.pinterest
                            .replace('[[URL]]', encodeURIComponent(url))
                            .replace('[[DESC]]', encodeURIComponent("Banff & Lake Louise - " + d.title))
                            .replace('[[IMG]]', encodeURIComponent(document.location.origin + d.img));
                        break;
                    case 'social-share--twitter':
                        share_type = 'twitter';
                        popup_url = vwtheme._cache.socialShareUrls.twitter
                            .replace('[[URL]]', encodeURIComponent(url))
                            .replace('[[TITLE]]', encodeURIComponent("Banff & Lake Louise - " + d.title));
                        break;
                    case 'social-share--facebook':
                        share_type = 'facebook';
                        popup_url = vwtheme._cache.socialShareUrls.facebook
                            .replace('[[URL]]', url);
                        break;
                }
                if (popup_url) {
                    ga('send', 'event', 'share this', share_type + ' share', d.title);
                    windowPopup(popup_url, 500, 300);
                }
            });
        });

        //Social Sharing Modal Close
        $(document).on('click', '.social-sharing .ctrl.close', function(e) {
            e.preventDefault();
            $('body').toggleClass('is-social-sharing');
        });

        //and close
        $(document).on('click', '.page-tools .close', function(e) {
            $(this).parent().removeClass('is-active');
            vwtheme._state.$pageTool_active = false;
            vwtheme.freezePage.remove();
        });
    }

    vwtheme.newsletterSignup = function(context) {
        $('#mc-embedded-subscribe-form-submit', context).on('click', function(e) {
            e.preventDefault();
            var f = $('#mc-embedded-subscribe-form'),
                name_first = $('#mce-FNAME'),
                name_last = $('#mce-LNAME'),
                email = $('#mce-EMAIL'),
                location = $('#location-placeholder'),
                business = $('#mce-business');

            if (name_first.val().length < 1 || name_last.val().length < 2 || email.val().length < 5) {

                if ((location.length > 0 && location.val().length < 1) || (business.length > 0 && business.val().length < 1)) {

                    $('#NewsletterSignup .newsletter-msg', context).html('Please ensure all forms values are correctly filled out').show();
                    return;
                }
            }

            if (location.length && location.val()) {
              var location_bits = [];
              location_bits = location.val().split(',');

              for (var $i = 0; $i < location_bits.length; $i++) {
                  $('.hidden-location-val-' + ($i + 1)).val(location_bits[$i].trim());
              }
            }

            vwtheme._user.$userDetails.$has_signedUpNewsletter = true;
            f.submit();
        });
    }

    vwtheme.currentPageSection = {
        init: function() {
            if (!vwtheme._cache.$pageSection.length) return;
            vwtheme._cache.$pageSection.each(function() {
                var id = $(this).attr('id');
                vwtheme._vars.$pageSections[id] = id;
            });

            vwtheme.currentPageSection.setCurrent();
            $(window).scroll(function() { vwtheme.currentPageSection.setCurrent(); });
        },
        scroll: function() {
            vwtheme.currentPageSection.setCurrent();
        },
        setCurrent: function() {
            var current = null;
            var ids = {};

            var header = $('header.page-header')
            vwtheme._cache.$pageSection.each(function() {
                var ost = $(this).offset().top,
                    id = $(this).attr('id');

                if (vwtheme._state.$is_PageNav_fixed) {
                    ost = ost - $('#toolbar').height() - header.height() - 13; // - 20; //need 20px for grace
                    //if vwtheme._state.$windowWidth < 1200 ...
                    if (vwtheme._vars.$windowWidth < 1200) { ost = ost - 52; } //note 52
                }
                if (vwtheme._vars.$scrollPosition >= ost) current = id;
            });
            if (current !== vwtheme._vars.$activePageSection) {
                vwtheme._vars.$activePageSection = current;
                vwtheme.currentPageSection.updateClasses();
            }
        },
        updateClasses: function() {
            if (!vwtheme._cache.$pageSection.length) return;
            for (var i in vwtheme._vars.$pageSections) {
                $('.in-page-nav a[href="#' + i + '"]').removeClass('is-active');
            }
            $('.in-page-nav a[href="#' + vwtheme._vars.$activePageSection + '"]').addClass('is-active');
        }
    }

    //dynamic calls which need to be called when the DOM is changed (new elements added)
    vwtheme.dynamic = function(context) {
        if (vwtheme._state.$isDev) console.debug("vwtheme.dynamic");
        if (!context) return;
        //dynamic and such
        vwtheme.dynamicContent(context);
        vwtheme.userMoments.disable(context);

        $('.itinerary__section-toggle', context).on('click', function() {
            var p = $(this).parent('.itinerary__section');
            p.toggleClass('is-active');
            p.find('.itinerary__section-copy').slideToggle();
            if (!p.hasClass('is-active')) { //on collapse to save jar
                var dest = $(this).parent().offset().top - vwtheme._vars.$fixedHeaderHeight - 10;
                if (vwtheme._vars.$windowWidth < 1200) { dest = dest - 52; }
                dest = dest - 30;
                vwtheme._fn.$scrollTo(dest, vwtheme._vars.defaultScrollSpeed);
            } else {
                if (typeof ga == "function" && typeof $(this).data().label !== "undefined") {
                    ga('send', 'event', 'itinerary', 'expand', $(this).data().label, 1);
                }
            }
        });
        //link handling

        $("a:urlExternal", context).addClass("external-link").prop("target", "_blank");
        $("a:urlInternal", context).addClass("internal-link");

        //should be global sliders so can be changed on resize
        vwtheme.flexsliders.init(context);


        vwtheme.tabs(context);
        vwtheme.userMoments.updateUI(context);



        $('#CollectionHero figcaption, #StaticHero figcaption', context).each(function() {
            var t = $(this),
                ch = $('#CollectionHero', context),
                credit = $('<div />').html(t.html()).addClass('figcaption');
            ch.append(credit);
        });


        var formInputClass = function(that, targ) {
            if (that.val() !== "" || that.is(':focus')) {
                targ.addClass('filled');
            } else {
                targ.removeClass('filled');
            }
        }

        $('.form-floating-labels', context)
            .find('input, select')
            .each(function() {
                $(this).on('focus change blur keydown', function() {
                    var t = $(this);
                    formInputClass(t, t);
                });
            });

        $('.webform-client-form', context)
            .find('.webform-component > input') //any reason for immediate child selector? //what about other items like select?
            .each(function() {
                var t = $(this);
                $(this).on('focus change blur keydown', function() {
                    formInputClass(t, t.parent());
                });
            });


        $('.moment-teaser', context).on('inview', function(event, isInView) {
            if (isInView) {
                var _delay = (Math.random() * (1000 - 200) + 200);
                $(this).delay(_delay).queue(function(next) {
                    $(this).addClass('in-view');
                    next();
                });
            }
        });

        $('iframe', context).each(function(i) {
            var iframe = $(this),
                src = $(this).attr('src');
            var videoRatio = (iframe.height() / iframe.width()) * 100;

            if ((src.indexOf("youtube.com") > -1) || (src.indexOf("vimeo.com") > -1)) {
                iframe.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                });
                iframe.wrap("<div class=\"fluid-vid\" style=\"padding-top:" + videoRatio + "%\"></div>");
            }
        });


        $('input.datepicker', context).each(function(idx) {
            var t = $(this);
            t.prop('readonly', 'readonly');
            var vars = {
                field: t[0],
                format: "MM/DD/YYYY",
                theme: 'bllt-theme'
            }
            if (!t.hasClass('datepicker--all-dates')) vars.minDate = new Date();
            //todo - context in here too?
            vwtheme._vars.$datePickers[idx] = new Pikaday(vars);
        });


        $('.jackrabbit-book', context).each(function() {
                var t = $(this),
                    d = $(this).data();
                if (d.jrid) {
                    $.ajax({
                        url: '/jackrabbit/availability/' + d.jrid,
                        dataType: 'xml',
                        success: function(xml) {
                            if ($(xml).find('rate').length) {
                                var low_price = null;
                                $(xml).find('rate').each(function() {
                                    low_price = $(this).attr('low-price');
                                });
                                if (low_price > 0) {
                                    var p = $('<span />').text("Low Price: $" + parseInt(low_price).toFixed(2));
                                    t.after(p);
                                }
                                if ($(xml).find('redirect-url').length) {
                                    t.prop('href', $(xml).find('redirect-url').text());
                                }
                            }
                        }
                    })
                }
            }) //end jackrabbit-book each

    }

    //Drupal attach function
    vwtheme.attach = function(context, settings) {

        //check for session storage
        try {
            var x = 'test-localstorage-' + Date.now();
            localStorage.setItem(x, x);
            var y = localStorage.getItem(x);
            localStorage.removeItem(x);
            if (y !== x) { vwtheme._vars.$sessionStorage = false; } else { vwtheme._vars.$sessionStorage = true; }
        } catch (e) {
            vwtheme._vars.$sessionStorage = false;
        }

        vwtheme.init(context, settings);

        /*
        $(window).bind('load', function () {
        if ($("#transition_container").hasClass("transition-load")) {
        $("#transition_loading").addClass("transition-load");
        setTimeout (function () {
        $("#transition_container").css('visibility','visible');
        $("#transition_container").css('height', 'auto');
        $("#transition_container").css('overflow','visible');
        $("#transition_container").removeClass("transition-load");
        //if in doubt - take this out!
        //vwtheme.init(context, settings);
        }, 400);
        }
        });
        */


    }

    //tie above together with Drupal
    Drupal.behaviors.vwtheme = vwtheme;

    Drupal.theme.vwtheme_picture = function(sources) {
        if (vwtheme._state.$isDev) console.debug("Drupal.theme.vwtheme_picture");
        var pic = '<picture>';
        for (var i in sources) {
            pic += sources[i].src;
        }
        pic += '<picture>';
        return pic;
    }

})(jQuery);
;
(function ($) {

    window.app_calendar = {
        Models: {},
        Collections: {},
        Views: {},
        Router: null,
        Container: null,
        Templates: {},
        Settings: {},
        FestivalID: null,
        ShowNav: true,
        filterCategories: [],
        prepareDateString: function (date_object) {
            var date_string = zeroFill(date_object.getDate(), 2) + "." + zeroFill((date_object.getMonth() + 1), 2) + "." + date_object.getFullYear();
            return date_string;
        },
        checkDateString: function (str, delimiter) {
            if (str.length != 10) return false;
            var date_bits = str.split(delimiter);
            if (date_bits.length != 3) return false;
            if (date_bits[0].length != 2) return false;
            if (date_bits[1].length != 2) return false;
            var y = parseInt(date_bits[2]),
                m = parseInt(date_bits[0]) - 1,
                d = parseInt(date_bits[1]);
            return new Date(y, m, d, 0, 0, 0, 0);
        },
        dateDifference: function (dt1, dt2) {
            return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
        },
        loadingHTML: function () {
            return Drupal.settings.bllt.loader_html;
        },
        init: function (settings) {
            $.extend(this, settings);

            //set default query params
            this.Settings.view = "upcoming";
            this.Settings.from = new Date();
            this.Settings.to = null;
            this.Settings.display = "list";
            this.Settings.label = "Upcoming";

            if (this.FestivalID) {
                this.Settings.view = "upcoming";
                this.Settings.from = new Date();
                this.Settings.to = null;
                this.Settings.display = "list";
                this.Settings.label = "Upcoming";
                this.Settings.festivalid = this.FestivalID;
            }

            this.CalendarView = new app_calendar.Collections.CalendarList;
            this.CalendarView.fetch({
                success: function (data) {

                    var w = $('<div/>').addClass('events-calendar-resuts list_parent');
                    this.CalendarView = new app_calendar.Views.CalendarView({
                        model: data,
                        collection: app_calendar.CalendarView
                    });
                    var results_div = $('<div/>').addClass('list-results');
                    w.html(results_div.html(this.CalendarView.render().el));

                    //render the nav
                    if (app_calendar.ShowNav) {
                        this.CalendarNav = new app_calendar.Views.CalendarFilters({
                            model: data,
                            collection: app_calendar.CalendarView
                        });
                        w.prepend(this.CalendarNav.render().el);
                    }
                    app_calendar.Container.append(w);
                    vwtheme.dynamic(results_div);
                    vwtheme.dynamic(w.find('.list-filters'));
                },
                error: function (data) {
                    app_calendar.Container.append(Drupal.settings.bllt.error_html);
                }
            })
            //set the templates
            this.Templates.calendar_nav = $('#tpl_calendar__nav').html();
            this.Templates.calendar_list = $('#tpl_calendar__list').html();
            this.Templates.calendar_date = $('#tpl_calendar__date').html();
            this.Templates.calendar_event = $('#tpl_calendar__event').html();
            this.Templates.calendar_month = $('#tpl_calendar__month').html();
            this.Templates.calendar_month_date = $('#tpl_calendar__month_date').html();
            for (var i in this.Templates) {
                Mustache.parse(this.Templates[i]);
            }

        }

    }

//Models

    app_calendar.Models.Calendar = Backbone.Model.extend({});

//Collections

    app_calendar.Collections.CalendarList = Backbone.Collection.extend({
        model: app_calendar.Models.Calendar,
        url: function () {
            return '/json/events.json';
        },
        parse: function (resp, xhr) {
            var returnItems = [], i, day_events;
            app_calendar.matchedEvents = 0;
            for (i in resp) {
                resp[i].isDateVisible = true;
                day_events = 0;

                _.each(resp[i].events, function (event, j) {
                    event.isVisible = true;
                    event.categories = $.parseJSON(event.categories);
                    if (app_calendar.filterCategories.length) {
                        if (_.intersection(app_calendar.filterCategories, event.categories).length) {
                            app_calendar.matchedEvents++;
                            day_events++;
                            event.isVisible = true;
                        } else {
                            event.isVisible = false;
                        }
                    } else {
                        //no filters, so show everything
                        app_calendar.matchedEvents = 1;
                        day_events++;
                    }
                }) //end each day EVENT
                if (day_events < 1) resp[i].isDateVisible = false; //if the entire day is visible or not

                returnItems.push(resp[i]);
            } //end each DAY
            if (returnItems.length < 1) app_calendar.matchedEvents = 0; //trigger error
            //app_calendar.availableCategories = _.uniq(allCats);
            return returnItems;
        },
        initialize: function (url_params) {
            url_params || (url_params = {/* defaults here? */})
            this.from = url_params.from;
            this.to = url_params.to;
            this.view = url_params.view;
        },
        fetch: function (options) {

            //MOVED TO PHP
            //check dates for calendar display
            if (app_calendar.Settings.display == "calendar") {
                app_calendar.Settings.view = "calendar";
                var m = app_calendar.Settings.from.getMonth(),
                    y = app_calendar.Settings.from.getFullYear();
                app_calendar.Settings.from = new Date(y, m, 1);
                app_calendar.Settings.to = null;
                app_calendar.Settings.userEntryDates = {from: null, to: null}
            }
            //end check dates for calendar


            options || (options = {});
            var data = (options.data || {});
            //extend to avoid reference
            options.data = $.extend(true, {}, app_calendar.Settings);
            //change from and to to formatted dates
            options.data.from = app_calendar.prepareDateString(options.data.from);
            if (options.data.to) options.data.to = app_calendar.prepareDateString(options.data.to);
            options.data.label = null;
            options.data.userEntryDates = null;
            return Backbone.Collection.prototype.fetch.call(this, options);
        },
        refetch: function () {
            //history state
            history.pushState(app_calendar.Settings, "Event Calendar", "/events");
            //loading HTML
            app_calendar.Container.find('.list-results').empty().html(app_calendar.loadingHTML());
            //fetch with new settings
            this.fetch({
                success: function (data) {
                    var list_contents = app_calendar.Container.find('.list-results');
                    list_contents.html(new app_calendar.Views.CalendarView({
                        model: data,
                        collection: app_calendar.CalendarView
                    }).render().el);
                    vwtheme.dynamic(list_contents);


                    //update filter states where needed
                    app_calendar.Container.find('.calendar-control').removeClass('is-active');
                    var activeView = app_calendar.Settings.view;
                    if (activeView == "calendar") activeView = "month"; //just for active class;
                    app_calendar.Container.find('.calendar-control--view-' + activeView).addClass('is-active');
                    app_calendar.Container.find('.display-control').removeClass('is-active');//needed
                    app_calendar.Container.find('.display-control.display-' + app_calendar.Settings.display).addClass('is-active');
                    app_calendar.Container.find('.calendar-nav .current').text(app_calendar.Settings.label);

                },
                error: function (data) {
                    var list_contents = app_calendar.Container.find('.list-results');
                    list_contents.html(Drupal.settings.bllt.error_html);
                }
            });
        }
    });

//Views

    app_calendar.Views.CalendarFilters = Backbone.View.extend({
        element: "div",
        className: "list-filters",
        render: function () {
            $(this.el).append(Mustache.render(app_calendar.Templates.calendar_nav, {
                current: app_calendar.Settings.label
            }));
            return this;
        },
        events: {
            'click .calendar-nav .prev-next': 'updateRange',
            'click .calendar-control': 'updateRange',
            'click #events-secondary-filter-form button[type="submit"]': 'userRange',
            'click .calendar-display .display-control': 'updateDisplay',
        },
        updateDisplay: function (e) {
            e.preventDefault();
            var targ = $(e.target);
            if (!targ.hasClass('.display-control')) targ = targ.parents('.display-control');
            var last_display = app_calendar.Settings.display;
            app_calendar.Settings.display = targ.data().op.replace('display-', '');
            if (app_calendar.Settings.display == "list" && last_display == "calendar") {
                app_calendar.Settings.view = "month";
            }
            this.getNewLabel();
            this.refetch();
        },
        userRange: function (e) {
            e.preventDefault();
            var f = $(e.target).parents('form');

            var input_from = f.find('#user-date--from').val(),
                input_to = f.find('#user-date--to').val(),
                error = false;
            //get any checked checkboxes
            app_calendar.filterCategories = [];
            f.find('input[type="checkbox"]:checked').each(function () {
                app_calendar.filterCategories.push(parseInt($(this).val()));
            });
            //app_calendar.filterCategories = _.uniq(app_calendar.filterCategories);

            //one or more dates set
            if (input_from || input_to) {
                //check date input is valid
                var from_date = app_calendar.checkDateString(input_from, "/"),
                    to_date = app_calendar.checkDateString(input_to, "/");
                if (!from_date || !to_date) error = true;

                if (to_date < from_date) error = true;
                if (error) {
                    alert("Please enter some dates to search. Date Error");
                    return;
                }

                if (app_calendar.dateDifference(from_date, to_date) > (31 * 3)) {
                    alert("Please select a smaller range - 3 months max.");
                }

                app_calendar.Settings.userEntryDates = {
                    from: input_from,
                    to: input_to
                }
                app_calendar.Settings.view = "upcoming";
                app_calendar.Settings.from = from_date;
                app_calendar.Settings.to = to_date;
                app_calendar.Settings.display = "list";

                var _from = {
                    day: app_calendar.Settings.from.getDate(),
                    suffix: dateOrdinal(app_calendar.Settings.from.getDate()),
                    month: Date.monthNames[app_calendar.Settings.from.getMonth()],
                    year: app_calendar.Settings.from.getFullYear(),
                }, _to = {
                    day: app_calendar.Settings.to.getDate(),
                    suffix: dateOrdinal(app_calendar.Settings.to.getDate()),
                    month: Date.monthNames[app_calendar.Settings.to.getMonth()],
                    year: app_calendar.Settings.to.getFullYear(),
                };

                var divider = " - ",
                    label = _from.day + _from.suffix;
                if (_from.month == _to.month) {
                    label += divider;
                    label += _to.day + _to.suffix + " " + _to.month + " " + _to.year;
                } else {
                    if (_from.year == _to.year) {
                        label += " " + _from.month;
                        label += divider;
                        label += _to.day + _to.suffix + " " + _to.month + " " + _to.year;
                    } else {
                        label += " " + _from.month + " " + _from.year;
                        label += divider;
                        label += _to.day + _to.suffix + " " + _to.month + " " + _to.year;
                    }
                }

                app_calendar.Settings.label = label;
            }
            this.refetch();
        },
        updateRange: function (e) {
            e.preventDefault();
            var clicked = $(e.target),
                op = clicked.data().op,
                change_direction = 1;

            //target may be child of parent item with attributes we want
            if (typeof op === "undefined" && clicked.parents('.prev-next').length > 0) {
                op = clicked.parents('.prev-next').data().op;
            }
            //still no op? return
            if (typeof op === "undefined") return;

            switch (op) {
                case "view-month":
                    //set date to first of the month
                    app_calendar.Settings.from = new Date(app_calendar.Settings.from.getFullYear(), app_calendar.Settings.from.getMonth(), 1);
                    app_calendar.Settings.view = "month";
                    break;
                case "view-week":
                    app_calendar.Settings.display = "list";
                    var day = app_calendar.Settings.from.getDate();
                    var dotw = app_calendar.Settings.from.getDay();
                    if (dotw < 1) {
                        day = day - 6;
                    } else if (dotw > 1) {
                        day = day - (dotw - 1);
                    }
                    app_calendar.Settings.from = new Date(app_calendar.Settings.from.getFullYear(), app_calendar.Settings.from.getMonth(), day);
                    app_calendar.Settings.view = "week";
                    break;
                case "view-day":
                    app_calendar.Settings.display = "list";
                    app_calendar.Settings.view = "day";
                    break;
                //prev next
                case "nav-prev":
                    change_direction = -1;
                case "nav-next":
                default:
                    if (app_calendar.Settings.view == "upcoming") {
                        app_calendar.Settings.view = "month";
                        //and prev/next month start
                        app_calendar.Settings.from = new Date(app_calendar.Settings.from.getFullYear(), app_calendar.Settings.from.getMonth(), 1);
                    }


                    if (app_calendar.Settings.view == "week") {
                        app_calendar.Settings.from.setDate(app_calendar.Settings.from.getDate() + (7 * change_direction));
                    } else if (app_calendar.Settings.view == "day") {
                        app_calendar.Settings.from.setDate(app_calendar.Settings.from.getDate() + (1 * change_direction));
                    } else {
                        app_calendar.Settings.from.setMonth(app_calendar.Settings.from.getMonth() + (1 * change_direction));
                    }
                    if (app_calendar.Settings.display == "list") {
                        app_calendar.Settings.to = null;
                    }
                    break;
            }

            //override if calendar view
            if (app_calendar.Settings.display == "calendar") {
                app_calendar.Settings.view = "calendar";
                app_calendar.Settings.from = new Date(app_calendar.Settings.from.getFullYear(), app_calendar.Settings.from.getMonth(), 1);
            }
            this.getNewLabel();
            this.refetch();
        },
        refetch: function () {
            this.collection.refetch();
        },
        getNewLabel: function () {
            var m = Date.monthNames[app_calendar.Settings.from.getMonth()],
                d = app_calendar.Settings.from.getDate();
            switch (app_calendar.Settings.view) {
                case "month":
                case "upcoming":
                    app_calendar.Settings.label = m + " " + app_calendar.Settings.from.getFullYear();
                    break;
                case "week":
                    app_calendar.Settings.label = "Week of " + d + dateOrdinal(d) + " " + m;
                    break;
                case "day":
                    app_calendar.Settings.label = d + dateOrdinal(d) + " " + m;
                    break;
            }
            if (app_calendar.Settings.display == "calendar") {
                app_calendar.Settings.label = m + " " + app_calendar.Settings.from.getFullYear();
            }
        }
    })

    app_calendar.Views.CalendarDate = Backbone.View.extend({
        tagName: "div",
        className: "events-calendar--date",
        render: function () {
            if (!this.model.attributes.isDateVisible) return this;

            var i,
                festival_list,
                events_list = $('<div />').addClass('event-calendar--events'),
                date_info = $('<div />').addClass('event-calendar--date--info');

            date_info.append($('<h3 />').addClass('event-day').text(this.model.attributes.day_info.dotw_label));
            date_info.append($('<h3 />').addClass('event-month-date').text(this.model.attributes.day_info.formatted.nice));

            //only show festivals if not on a festival page (i.e. no app_calendar.FestivalID)
            if (this.model.attributes.festivals.length && !app_calendar.FestivalID) {
                festival_list = $('<ul class="tags" />');
                for (i = 0; i < this.model.attributes.festivals.length; i++) {
                    festival_list.append($('<li />').html('<a class="tag" href="/' + this.model.attributes.festivals[i].url + '">' + this.model.attributes.festivals[i].title + '</a>'));
                }
                date_info.append($('<h5 />').addClass('hdr-six event-dont-miss').text(Drupal.t("Don't Miss")));
                date_info.append(festival_list);
            }
            $(this.el).append(date_info);

            for (i = 0; i < this.model.attributes.events.length; i++) {
                var vars = this.model.attributes.events[i];
                if (vars.isVisible) {
                    vars.event_date = this.model.attributes.day_info.formatted.nice;
                    //remove title if on festival ID page
                    if (app_calendar.FestivalID) vars.ftitle = null;
                    //tags output
                    var tags = $('<div/>').addClass('tags');
                    for (var j in vars.categories_parsed) {
                        tags.append($('<span/>').addClass('tag').text(vars.categories_parsed[j].title).attr('data-tagid', vars.categories_parsed[j].id));
                    }
                    vars.tags_op = $('<div/>').append(tags).html();
                    events_list.append(Mustache.render(app_calendar.Templates.calendar_event, vars));
                }
            }
            $(this.el).append(events_list);
            $(this.el).wrapInner('<div class="wrapper--grid"/>');
            return this;
        },
        events: {
            'click .event-item': 'eventItemClick',
        },
        eventItemClick: function (e) {
            var targ = $(e.target);
            if (targ.prop('nodeName').toLowerCase() == "a") return;
            if (targ.hasClass('tag')) {
                var tagval = targ.data().tagid;
                app_calendar.Container.find('.list-filters-form--secondary .form-checkbox').attr('checked', false);
                app_calendar.Container.find('.list-filters-form--secondary .form-checkbox[value="' + tagval + '"]').attr('checked', true);
                app_calendar.Container.find('.events-calendar-resuts').addClass('filters-expanded');
                app_calendar.filterCategories = [tagval];
                this.collection.refetch();
                return;
            }

            if (targ.hasClass('event-item')) {
                targ.toggleClass('is-active');
            } else {
                targ.parents('.event-item').toggleClass('is-active');
            }
        }
    });

    app_calendar.Views.CalendarMonthDate = Backbone.View.extend({
        tagName: "li",
        className: "events-calendar-month-date",
        attributes: function () {
            return {
                'data-date': this.model.date,
                'data-month': this.model.month,
                'data-year': this.model.year
            }
        },
        render: function () {
            var vars = {
                date: this.model.date,
                month: this.model.month,
                year: this.model.year,
                num_events: this.model.num_events
            }
            $(this.el).append(Mustache.render(app_calendar.Templates.calendar_month_date, vars));
            if (!this.model.in_range) $(this.el).addClass("not-in-range");
            if (!this.model.num_events) $(this.el).addClass("no-events");
            return this;
        }
    });

    app_calendar.Views.CalendarMonth = Backbone.View.extend({
        tagName: "div",
        className: "events-calendar-month",
        render: function () {
            var start = new Date(app_calendar.Settings.from.getFullYear(), app_calendar.Settings.from.getMonth(), app_calendar.Settings.from.getDate()),
                end = app_calendar.Settings.to;
            var dates = {};
            _.each(this.model.models, function (calendar_date, iteration) {
                var key = (calendar_date.attributes.day_info.month_int - 1) + "." + calendar_date.attributes.day_info.date;

                if (typeof dates[key] !== 'object') {
                    dates[key] = {
                        num_events: calendar_date.attributes.num_events,
                        date: calendar_date.attributes.day_info.date,
                        month: (calendar_date.attributes.day_info.month_int - 1),
                        year: calendar_date.attributes.day_info.year_full,
                        in_range: calendar_date.attributes.in_range
                    }
                }
            });

            var list = $('<ul />').addClass('events-calendar-month--dates');
            _.each(dates, function (calendar_date) {
                list.append(new app_calendar.Views.CalendarMonthDate({
                    model: calendar_date,
                    collection: this.collection
                }).render().el);
            });

            //output
            $(this.el).append(Mustache.render(app_calendar.Templates.calendar_month, {calendar_month_dates: list[0].outerHTML}));
            return this;
        },
        events: {
            'click .events-calendar-month-date': 'viewDay',
        },
        viewDay: function (e) {
            e.preventDefault();
            var targ = $(e.target).parents('.events-calendar-month-date');
            var data = targ.data();
            app_calendar.Settings.from = new Date(data.year, data.month, data.date);
            app_calendar.Settings.view = "day";
            app_calendar.Settings.display = "list";
            this.collection.refetch();
        }
    });

    app_calendar.Views.CalendarView = Backbone.View.extend({
        tagName: "div",
        render: function () {
            var date;
            var error_msg = $('<div/>');
            error_msg.addClass('empty');
            error_msg.html('<h3 class="hdr-four">No Results Found</h3><p>There are no events that match the date range.</p>');
            if (!app_calendar.matchedEvents) {
                $(this.el).append(error_msg);
                return this;
            }
            if (app_calendar.Settings.display == "list") {
                //render each day in a list
                var event_list_wrap = $('<div />').addClass('event-calendar--list');

                _.each(this.model.models, function (calendar_date, iteration) {
                    date = new app_calendar.Views.CalendarDate({
                        model: calendar_date,
                        collection: app_calendar.CalendarView
                    });
                    event_list_wrap.append(date.render().el);
                }, this);
                $(this.el).append(event_list_wrap);

            } else if (app_calendar.Settings.display == "calendar") {
                $(this.el).append(new app_calendar.Views.CalendarMonth({
                    model: this.model,
                    collection: this.collection
                }).render().el);
            }

            return this;
        },
    });


//--------------- Moments

    window.app_moments = {
        //Models, Collections, Views & Router
        Models: {},
        Collections: {},
        Views: {},
        Router: null,
        Tags: null,
        Container: null,
        Templates: {},
        State: {
            display: 'static',
            empty: false,
            overflow: false, //whether more than 6
        },
        determineLayoutStyle: function () {
            if (vwtheme._vars.$windowWidth < vwtheme._vars.$momentsDisplayThreshold) return 'slides';
            return 'static';
        },
        init: function (settings) {
            $.extend(this, settings);
            this.MomentsList = new app_moments.Collections.MomentList;
            this.MomentsList.fetch({
                success: function (data) {
                    //check whether any models and remove container if none (no moments)
                    if (app_moments.State.empty) {
                        app_moments.Container.remove();
                        return;
                    }
                    //get display style
                    app_moments.State.display = app_moments.determineLayoutStyle();
                    //randomize for freshness
                    data.models = _.shuffle(data.models);
                    app_moments.process(data);
                    $(window).resize(function () {
                        var viewport_display = app_moments.determineLayoutStyle();
                        if (app_moments.State.display !== viewport_display) {
                            window.app_moments.Container.empty(); //empty
                            app_moments.State.display = viewport_display; //update display settings, then re-render
                            app_moments.process(data); //start again
                        }
                    });
                },
                error: function (data) {
                    //just delete the moments container rather than show an error
                    app_moments.Container.remove();
                }
            });
            //set the templates
            this.Templates.moment_full = $('#tpl_moment__full').html();
            this.Templates.prev_next = $('#tpl_modal__prev_next').html();
            this.Templates.moment_teaser = $('#tpl_moment__teaser').html();
            this.Templates.moment_modal = $('#tpl_modal_contents').html();
            for (var i in this.Templates) {
                Mustache.parse(this.Templates[i]);
            }
        },
        process: function (data) {
            //upon success, render the data via the views
            this.MomentListView = new app_moments.Views.MomentList({model: data, collection: app_moments.MomentsList});
            //append rendered data to HTML element passed in initation call from script
            app_moments.Container.html(this.MomentListView.render().el);
            //load more button
            if (app_moments.State.overflow && app_moments.State.display == "static") {
                var more_toggle = $('<span class="load-more moments-load-more"><a href="#" class="load-more-icon">+</a><i class="load-more-text">Load More</i></span>').on('click', function (e) {
                    e.preventDefault();
                    $('.wrapper--moments li:last-child').trigger('click');
                });
                // BLLT NOTE : Temporarily removed as it serves no purpose yet.
                //app_moments.Container.append(more_toggle);
            }

            vwtheme.dynamic(window.app_moments.Container);
        }
    }

//Models

    app_moments.Models.Moment = Backbone.Model.extend({});

//Collections

    app_moments.Collections.MomentList = Backbone.Collection.extend({
        model: app_moments.Models.Moment,
        url: function () {
            var url = Drupal.settings.bllt_json.jsonpath + '/moment?tags=' + app_moments.Tags;
            return url;
        },
        parse: function (resp, xhr) {
            var returnItems = [], i;
            for (i in resp) {
                returnItems.push(resp[i]);
            }
            if (returnItems.length < 1) {
                app_moments.State.empty = true;
            }
            if (returnItems.length >= 6) {
                app_moments.State.overflow = true;
            }
            return returnItems;
        }
    });

//Views

    app_moments.Views.MomentList = Backbone.View.extend({
        tagName: "div",
        className: function () {
            if (app_moments.State.display == 'static') {
                classes = "moments--static";
            }
            else {
                classes = "flexslider flexslider--moment-list";
            }
            return classes;
        },
        render: function () {
            var limit = 5, count = 0;
            var ul = $('<ul/>').addClass('wrapper--moments num-moments--' + this.model.models.length);
            if (app_moments.State.display == 'slides') ul.addClass('slides');
            _.each(this.model.models, function (moment, iteration) {
                moment.count = (iteration);
                count++;
                ul.append(new app_moments.Views.MomentTeaser({model: moment, collection: this.collection}).render().el);
            }, this);
            $(this.el).append(ul);
            return this;
        }
    });

    app_moments.Views.MomentTeaser = Backbone.View.extend({
        tagName: "li",
        render: function () {
            //this.attributes['data-bg'] = this.model.attributes.lead_img.url;
            var moment = this.model;
            //TODO - would be better to just pass through the moment.attributes rather than have to parse
            var vars = moment.attributes;
            vars.count = (moment.count + 1);
            $(this.el).append(Mustache.render(app_moments.Templates.moment_teaser, vars));

            //update the element
            this.$el.attr('class', 'item-' + (moment.count + 1));
            return this;
        },
        events: {
            'click': 'activateModal'
        },
        activateModal: function (e) {
            //bypass all if too small
            //if(vwtheme._vars.$windowWidth >= vwtheme._vars.$minModalWidth) {
            e.preventDefault();
            var modal = new app_moments.Views.Modal({model: this.model, collection: this.collection});
            vwtheme.freezePage.add();
            //}
        },
        initialize: function () {
        }
    });

    app_moments.Views.Modal = Backbone.View.extend({
        tagname: 'div',
        className: function () {
            return 'moment-modal';
        },
        state: false,
        initalize: function () {
        },
        render: function () {
            $('#PageModal')
                .empty()
                .attr('class', 'page-modal--active');

            var prev = this.getPrev(),
                next = this.getNext(),
                vars = this.model.attributes;

            vars.classes = ""; //remove any pre-existing classes

            vars.share_this = Mustache.render($("#tpl_share").html(), {
                title: vars.title, url: vars.link_url, type: 'moment', img: vars.media.lead.url
            });
            vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                id: 'n' + vars.meta.id,
                title: vars.title,
                url: vars.link_url,
                type: 'moment',
                lat: vars.meta.lat,
                lng: vars.meta.lng,
                img: vars.media.lead.url
            });
            vars.latlng = null;
            if (vars.meta.lat && vars.meta.lng) {
                vars.latlng = Mustache.render($("#tpl_latlng").html(), {
                    lat: vars.meta.lat, lng: vars.meta.lng, url: vars.link_url, title: vars.title
                });
            }
            vars.content_location = null;
            if (vars.meta.content_location) {
                vars.content_location = vars.meta.content_location;
            }
            vars.meta.num_display_tags = vars.meta.tags.collections.split(',').length;
            var next_attr = {}, prev_attr = {};
            //in case only 1 moment
            if (next !== null) {
                next.attributes.prevnext_media = '<img src="' + next.attributes.media.thumb.url + '" alt="' + next.attributes.title + '">';
                next_attr = next.attributes;
            }
            if (prev !== null) {
                prev.attributes.prevnext_media = '<img src="' + prev.attributes.media.thumb.url + '" alt="' + prev.attributes.title + '">';
                prev_attr = prev.attributes;
            }

            var new_moment = Mustache.render(app_moments.Templates.moment_modal, {
                moment_next: (next ? Mustache.render(app_moments.Templates.prev_next, next_attr) : null),
                moment_prev: (prev ? Mustache.render(app_moments.Templates.prev_next, prev_attr) : null),
                moment_full: Mustache.render(app_moments.Templates.moment_full, vars)
            });

            $(this.el).html(new_moment);
            $(this.el).append($('<span />').addClass('ctrl close').attr('data-bodyclass', 'page-modal--active'));
            $('#PageModal').empty().append(this.$el);
            vwtheme.analytics.setPageView(vars.link_url);
            vwtheme.dynamic(this.$el);
            //hide links to self
            $(this.$el).find('.tag--' + app_moments.Tags).hide();
            return this;
        },
        events: {
            'click .moment-prev': 'prev',
            'click .moment-next': 'next',
        },
        getPrev: function () {
            if (this.collection.models.length < 2) return null;
            var current = this.model;
            var prev = (this.model.count - 1);
            prev = app_moments.MomentsList.at(prev);
            prev.attributes.direction = 'prev';
            return prev;
        },
        getNext: function () {
            if (this.collection.models.length < 2) return null;
            var current = this.model;
            var next = (this.model.count + 1);
            if (next >= this.collection.length) next = 0;
            next = app_moments.MomentsList.at(next);
            next.attributes.direction = 'next';
            return next;
        },
        prev: function () {
            this.prevNext("prev");
        },
        next: function () {
            this.prevNext("next");
        },
        prevNext: function (direction) {
            var class_outgoing = 'outgoing-' + direction,
                class_incoming = 'incoming-' + direction;

            //add outgoing to the current
            this.$('.card-full--moment').addClass(class_outgoing);
            //get the next
            if (direction == "next") {
                this.model = this.getNext();
            } else {
                this.model = this.getPrev();
            }

            var vars = this.model.attributes;
            vars.classes = class_incoming;
            vars.share_this = Mustache.render($("#tpl_share").html(), {
                title: vars.title, url: vars.link_url, type: 'moment', img: vars.media.lead.url
            });
            vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                id: 'n' + vars.meta.id,
                title: vars.title,
                url: vars.link_url,
                type: 'moment',
                lat: vars.meta.lat,
                lng: vars.meta.lng,
                img: vars.media.lead.url
            });
            vars.latlng = null;
            if (vars.meta.lat && vars.meta.lng) {
                vars.latlng = Mustache.render($("#tpl_latlng").html(), {
                    lat: vars.meta.lat, lng: vars.meta.lng, url: vars.link_url, title: vars.title
                });
            }
            vars.meta.num_display_tags = vars.meta.tags.collections.split(',').length;

            //template expects content_location in the root
            vars.content_location = null;
            if (vars.meta.content_location) {
                vars.content_location = vars.meta.content_location;
            }

            var new_moment = Mustache.render(app_moments.Templates.moment_full, vars);
            this.$el.append(new_moment);
            var _that = this;
            _.defer(function () {
                _that.$('.' + class_outgoing).fadeOut(500, function () {
                    this.remove()
                });
                _that.$('.' + class_incoming).removeClass('incoming-prev incoming-next');
            });

            /*_.delay(function(){
             _that.$('.'+class_incoming).removeClass('incoming-prev incoming-next');
             },10);
             _.delay(function() {
             _that.$('.'+class_outgoing).remove();
             },1000);*/

            this.updateNav();
            vwtheme.analytics.setPageView(vars.link_url);
            vwtheme.dynamic(this.$el);
            //hide links to self
            $(this.$el).find('.tag--' + app_moments.Tags).hide();
        },
        updateNav: function () {
            var $prev = this.$('.moment-prev'),
                $next = this.$('.moment-next');
            var _prev = this.getPrev(),
                _next = this.getNext();

            //prev
            var img = document.createElement('img');
            img.onload = function () {
                $prev.find('img').attr('src', _prev.attributes.media.thumb.url);
                $prev.find('h4').text(_prev.attributes.title);
            }
            img.onerror = function () {
                $prev.find('h4').text(_prev.attributes.title);
            }
            img.src = _prev.attributes.media.thumb.url;

            //next
            var imgb = document.createElement('img');
            imgb.onload = function () {
                $next.find('img')
                    .attr('src', _next.attributes.media.thumb.url);
                $next.find('h4').text(_next.attributes.title);
            }
            imgb.onerror = function () {
                $next.find('h4').text(_next.attributes.title);
            }
            imgb.src = _next.attributes.media.thumb.url;
        },
        close: function () {
            this.$el.attr('class', '');
        },
        initialize: function () {
            this.render();
            _.bindAll(this, "render");
            this.model.bind('change', function () {
            });
        },
    });


//--------------- Blogs

    window.app_blogs = {
        //Models, Collections, Views & Router
        Models: {},
        Collections: {},
        Views: {},
        Router: null,
        Tags: null,
        Container: null,
        Templates: {},
        init: function (settings) {
            //init settings
            //this.Tags = settings.Tags;
            //this.Container = settings.Container;
            if (typeof settings.Tags == "undefined") return;
            $.extend(this, settings);
            //get a new collection
            this.BlogList = new app_blogs.Collections.BlogList;
            //fetch the data
            this.BlogList.fetch({
                success: function (data) {
                    //upon success, render the data via the views
                    this.BlogListView = new app_blogs.Views.BlogList({model: data, collection: app_blogs.BlogList});
                    //append rendered data to HTML element passed in initation call from script
                    app_blogs.Container.html(this.BlogListView.render().el);
                    vwtheme.dynamic(window.app_blogs.Container);
                },
                error: function (data) {
                    app_blogs.Container.parents('#CollectionPosts').remove();
                }
            });

            //set the templates
            this.Templates.blog_card = $('#tpl_card__general').html();
            for (var i in this.Templates) {
                Mustache.parse(this.Templates[i]);
            }
        }
    }

//Models

    app_blogs.Models.Blog = Backbone.Model.extend({});

//Collections

    app_blogs.Collections.BlogList = Backbone.Collection.extend({
        model: app_blogs.Models.Blog,
        url: function () {
            var url = Drupal.settings.bllt_json.jsonpath + '/blog_post?limit=6&tags=' + app_blogs.Tags;
            return url;
        },
        parse: function (resp, xhr) {
            //need to get things into order
            //TODO review sources and update accordingly
            var returnItems = [], i;
            for (i in resp) {
                returnItems.push(resp[i]);
            }
            return returnItems;
        }
    })

//Views

    app_blogs.Views.BlogList = Backbone.View.extend({
        tagName: "div",
        className: "list list--cards-vertical clearfix",
        render: function () {
            _.each(this.model.models, function (post, iteration) {
                var vars = post.attributes;
                vars.classes = "";
                vars.latlng = null;

                var img = null;
                if (vars.media.lead) img = vars.media.lead.url;
                vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                    id: 'l' + vars.meta.id,
                    title: vars.title,
                    url: vars.link_url,
                    type: 'blog_post',
                    lat: vars.meta.lat,
                    lng: vars.meta.lng,
                    img: img,
                });
                $(this.el).append(Mustache.render(app_blogs.Templates.blog_card, vars));

            }, this);
            this.$el.addClass('num-moments--' + this.model.models.length);
            return this;
        }
    });

    /*
     app_blogs.Views.BlogCard = Backbone.View.extend({
     tagName : "li",
     render: function() {
     var post = this.model;
     var vars = post.attributes;
     vars.classes = "";
     vars.latlng = null; //no locations for blog posts

     var img = null;
     if(vars.media.lead) img = vars.media.lead.url;
     vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
     id: 'l'+vars.meta.id, title: vars.title, url: vars.link_url, type: 'blog_post',lat: vars.meta.lat, lng: vars.meta.lng, img: img,
     });
     $(this.el).append(Mustache.render(app_blogs.Templates.blog_card,vars));

     //update the element
     return this;
     }
     });
     */


//--------------- Simpleview Listings

    window.app_simpleview = {
        //Models, Collections, Views & Router
        Models: {},
        Collections: {},
        Views: {},
        Router: null,
        Tags: null,
        Container: null,
        Templates: {},
        config: {},
        ph_img: "/sites/all/themes/custom/vwtheme/assets/img/bllt_trans_bg_10.png",
        error_msg: function () {
            app_simpleview.config.Container.append(Drupal.settings.bllt.error_html);
            vwtheme.dynamic(window.app_simpleview.config.Container);
        },
        init: function (settings) {
            $.extend(this.config, settings);
            //get a new collection - should this be done per tab?
            this.List = new app_simpleview.Collections.List;
            this.List.url = this.config.url + '?type=' + this.config.type + '&id=' + this.config.id;

            //fetch the data
            this.List.fetch({
                success: function (data) {
                    if (!data.length) {
                        app_simpleview.error_msg();
                        return;
                    }
                    app_simpleview.List.hasFilters = false;
                    if (typeof data.config.filters !== "undefined" && typeof data.config.filters.primary !== "undefined") {
                        app_simpleview.List.hasFilters = true;
                    }

                    //upon success, render the data via the views
                    this.ListHeader = new app_simpleview.Views.Header({model: data, collection: app_simpleview.List});

                    this.ListView = new app_simpleview.Views.List({model: data, collection: app_simpleview.List});

                    this.ListFilters = new app_simpleview.Views.Filters({model: data, collection: app_simpleview.List});

                    //append rendered data to HTML element passed in initation call from script
                    app_simpleview.config.Container.empty().append(this.ListHeader.render().el);

                    var list_parent = $('<div/>').addClass('list_parent num-items-' + data.length);
                    if (app_simpleview.List.config.type == "tab") list_parent.addClass('tabset');
                    var list_contents = $('<div/>').addClass('list_contents');

                    //only need filters if not a flat list
                    if (app_simpleview.List.config.type != "flat") {
                        list_parent.append(this.ListFilters.render().el);
                    }
                    list_contents.html(this.ListView.render().el);
                    list_parent.append(list_contents);

                    //output to div and run dynamic actions on context
                    app_simpleview.config.Container.append(list_parent);
                    vwtheme.dynamic(window.app_simpleview.config.Container);
                    //update filters no added to DOM
                    if (app_simpleview.List.hasFilters && app_simpleview.List.typeParamID.length && app_simpleview.List.config.type == "filter") {
                        $('.list-filters--filter-primary-type').val(app_simpleview.List.typeParamID);
                    }
                },
                error: function (data) {
                    app_simpleview.config.Container.remove();
                    //app_simpleview.error_msg();
                }
            });

            //set the templates
            this.Templates.card = $('#tpl_card__listing').html();
            this.Templates.filters = $('#tpl_list_filters').html();
            this.Templates.filters_select = $('#tpl_list_filters__select').html();
            this.Templates.filters_checkboxes = $('#tpl_list_filters__checkboxes').html();
            this.Templates.filters_checkboxes_item = $('#tpl_list_filters__checkbox_item').html();
            this.Templates.list_controls = $('#tpl_list_display_controls').html();
            this.Templates.tabset_trigger = $('#tpl_tabset_trigger').html();
            this.Templates.tabset_content = $('#tpl_tabset_content').html();
            //TODO
            this.Templates.prev_next = $('#tpl_modal__prev_next').html();
            this.Templates.listing_modal = $('#tpl_modal_contents').html();

            for (var i in this.Templates) {
                Mustache.parse(this.Templates[i]);
            }
        }
    }

//Models

    app_simpleview.Models.Listing = Backbone.Model.extend({
        initialize: function () {
        }
    });

//Collections

    app_simpleview.Collections.List = Backbone.Collection.extend({
        config: {},
        model: app_simpleview.Models.Listing,
        parse: function (resp, xhr) {
            //why not put resp into a variable?
            this.config.title = resp.title;
            this.config.intro = resp.intro;
            this.config.intro_status = resp.intro_status;
            this.config.filters = resp.filters;
            this.config.type = resp.type;
            this.config.displays = resp.displays;
            this.config.display = "list";
            this.config.version = resp.version;
            this.config.node = resp.node;
            this.config.location = resp.location;

            this.config.groups = resp.groups;

            //need to get things into order
            //TODO review sources and update accordingly
            var returnItems = [], i, count = 0;
            for (i in resp.items) {
                resp.items[i].list_display = true;
                returnItems.push(resp.items[i]);
                count++;
            }
            return returnItems;
        },
        initialize: function () {
            this.typeParam = ''; //empty string
            this.typeParamID = '';
            var typeParam = getParameterByName('type'); //returns string
            if (typeParam.length) {
                this.typeParam = typeParam;
            }
        },
    })

//Views

    app_simpleview.Views.Header = Backbone.View.extend({
        tagName: "header",
        className: "page-section-header",
        render: function () {
            var cfg = this.collection.config;
            $(this.el).append('<h1 class="hdr-three">' + cfg.title + '</h1>');
            if (cfg.intro) $(this.el).append('<p>' + cfg.intro + '</p>');

            return this;
        }
    })

    app_simpleview.filterHTML = function (filter, level, version) {
        var options = $('<div/>');

      switch (filter.input) {
        case 'checkboxes':
        //TODO - for now display as select as no option to display as checkboxes
        //default (select)
        case 'select':
        default:
          for (var k in filter) {
            options.append('<option value="group_' + k + '">' + filter[k].name + '</option>')
          }
          options.prepend('<option value="_all">All</option>');

          return Mustache.render(app_simpleview.Templates['filters_select'], {
            id: 'primary',
            label: 'Type',
            options: options.html(),
            level: level,
          });

          break;
      }

    };

    app_simpleview.locationFilterHTML = function() {

        var options = $('<div />');

        options.append($('<option />').prop('value', '_all').text(Drupal.t('All')));
        options.append($('<option />').prop('value', 'banff').text('Banff'));
        options.append($('<option />').prop('value', 'lakelouise').text('Lake Louise'));
        //also add location

        return Mustache.render(app_simpleview.Templates['filters_select'], {
            id: 'location',
            label: 'Location',
            options: options.html(),
            level: 'primary',
        });
    };

    app_simpleview.Views.Filters = Backbone.View.extend({
        tagName: "div",
        initialize: function () {
            if (this.collection.hasFilters) {
                //add handles to filters
                var match = false;
                for (var x in this.collection.config.filters.primary.type.items) {
                    //set handle on init
                    this.collection.config.filters.primary.type.items[x].handle = this.collection.config.filters.primary.type.items[x].name.getHandle();
                    //compare param against handle
                    if (this.collection.typeParam == this.collection.config.filters.primary.type.items[x].handle) {
                        match = true;
                        this.collection.typeParamID = this.collection.config.filters.primary.type.items[x].id;
                    }
                }
                if (match) {
                    //check that type is in filters
                    var cats = [this.collection.typeParamID], tags = [], location = [];
                    this.setModelVisiblity(cats, tags, location);
                }
            }
        },
        render: function () {
            if (this.collection.config.type == "tab") {
                //this.collection.itemsSorted) is set in the list view
                var num_tabs = 0, x, tab, first = true;
                for (x in  this.collection.itemsSorted) {
                    num_tabs++;
                }
                if (num_tabs > 1) { //only need tabs if > 1
                    var triggers = $("<ul/>").addClass("tabs tabset--triggers member-tab-list");
                    for (x in  this.collection.itemsSorted) {
                        tab = this.collection.itemsSorted[x];
                        triggers.append($('<li>').addClass('member-tab-list-item').append(Mustache.render(app_simpleview.Templates.tabset_trigger, {
                            id: tab.id,
                            classes: (x == this.collection.activeTab ? 'is-active' : ''),
                            label: tab.label,
                            page: tab.node
                        })));
                        first = false;
                    }

                    $(this.el).append(triggers);
                }


            } else {
                //filtered
                var list_filters_primary = $('<div/>'),
                    list_filters_secondary = $('<div/>'),
                    key, tpl, options, filter_set;

              filter_set = app_simpleview.filterHTML(this.collection.config.groups, 'primary', this.collection.config.version);
              list_filters_primary.append(filter_set);
              if(this.collection.config.location) {
                location_set = app_simpleview.locationFilterHTML();
                list_filters_primary.append(location_set);
              }

                for (key in this.collection.config.filters.secondary) {
                    filter_set = app_simpleview.filterHTML(this.collection.config.filters.secondary[key], 'secondary', this.collection.config.version);
                    list_filters_secondary.append(filter_set);
                }
                var vars = {
                    id: app_simpleview.config.id,
                    list_filters_primary: list_filters_primary.html(),
                    list_display_controls: Mustache.render(app_simpleview.Templates.list_controls, {}),
                    list_filters_secondary: null,
                    secondary_toggle: null
                }
                if (this.collection.config.filters.secondary.length) {
                    vars.list_filters_secondary = list_filters_secondary.html();
                    vars.secondary_toggle = '<span class="hdr-six filters-expanded-toggle">More Filters</span>';
                }
                $(this.el).append(Mustache.render(app_simpleview.Templates.filters, vars));
            }
            return this;
        },
        events: {
            'change .list-filters-primary select': 'updateModelVisibility',
            'click .list-filter--secondary-buttons button[type="submit"]': 'updateModelVisibility',
            'click .list-filter--secondary-buttons button[type="reset"]': 'resetFilters',
            'click .list-display-controls span': 'doChangeDisplay',
            'click .tabset--trigger-item': 'updateActiveTab',
        },
        updateActiveTab: function (e) {
            this.collection.activeTab = "key_" + $(e.target).data().id;
        },
        resetFilters: function (e) {
            _.each(this.model.models, function (item) {
                item.attributes.list_display = true;
            });
            this.updateDisplay(e);
            $('form.list-filters-form--secondary')[0].reset();
            $('form.list-filters-form')[0].reset();
            $('.list_parent').removeClass('filters-expanded');
        },
        updateModelVisibility: function (e) {
            e.preventDefault();

            var cats = [], locations = [], vals;

            if ($('form.list-filters-form').serialize().length) {
                //decide whether location or category
                vals = _.map($('form.list-filters-form').serialize().split("&"),
                    function (val) {
                        if (val.length) return [val.split("=")[0], val.split("=")[1]];
                    });
                _.each(vals, function(val) {
                    (val[0] == "location") ? locations.push(val[1]) : cats.push(val[1]);
                });
            }
            var tags = [];
            if ($('form.list-filters-form--secondary').serialize().length) {
                tags = _.map($('form.list-filters-form--secondary').serialize().split("&"),
                    function (val) {
                        if (val.length) return val.split("=")[1];
                    });
            }

            //remove _all
            var i = cats.indexOf('_all');
            if (i > -1) cats.splice(i, 1);
            var i = locations.indexOf('_all');
            if (i > -1) locations.splice(i, 1);
            this.setModelVisiblity(cats, tags, locations);
            this.updateDisplay();
        },
        setModelVisiblity: function (cats, tags, locations) {
          var _collection = this.collection, groups = _collection.config.groups;

          //item.attributes.list_display = true;
          if (cats.length == 1) {
            var group = parseInt(cats.pop().split('_')[1]); //expects a numeric group ID
            if (groups[group] !== undefined && groups[group].listings.length) {
              _.each(this.model.models, function (item) {
                item.attributes.list_display = true; //show by default
                if (_.indexOf(groups[group].listings, parseInt(item.attributes.meta.id)) < 0) item.attributes.list_display = false; //then hide if not visible
              });
            } else {
              _.each(this.model.models, function (item) {
                item.attributes.list_display = false;
              });
            }

          } else if (cats.length > 1) {
            //@TODO
          } else {
            _.each(this.model.models, function (item) {
              item.attributes.list_display = true;
            });
          }

          //happens after category filtering
          if(locations.length) {
            //locations always singular
            var loc = locations.pop();
            _.each(this.model.models, function (item) {
              if(item.attributes.list_display && item.attributes.meta.loc !== loc) {
                item.attributes.list_display = false;
              }
            });
          }
        },
        doChangeDisplay: function (e) {
            var targ = $(e.target).parents('span');
            if (targ.hasClass('display-map')) this.collection.config.display = "map";
            if (targ.hasClass('display-list')) this.collection.config.display = "list";
            this.updateDisplay();
        },
        updateDisplay: function () {
            var list_contents = app_simpleview.config.Container.find('.list_contents');
            this.ListView = new app_simpleview.Views.List({model: this.model, collection: app_simpleview.List});
            list_contents.html(Drupal.settings.bllt.loader_html);
            var _that = this;
            _.delay(function () {
                list_contents.html(_that.ListView.render().el);

                if (_that.collection.config.display == "map") {
                    _that.initalizeMap();
                    $('.list-display-controls .display-map').addClass('is-active');
                    $('.list-display-controls .display-list').removeClass('is-active');
                } else {
                    $('.list-display-controls .display-map').removeClass('is-active');
                    $('.list-display-controls .display-list').addClass('is-active');
                }
            }, 500);
        },
        initalizeMap: function () {
            var geojson = [], description;
            _.each(this.model.models, function (item, i) {
                //https://www.mapbox.com/help/markers/
                if (item.attributes.list_display && item.attributes.meta.lat && item.attributes.meta.lng) {
                    var props = {
                        fancy: true,
                        title: item.attributes.title,
                        intro: item.attributes.intro,
                        url: item.attributes.link_url,
                        image: null,
                        tel: null,
                        web: null,
                        email: null,
                        'marker-color': '#6d576b',
                    }
                    if (item.attributes.media.thumb) {
                        props.image = item.attributes.media.thumb.url;
                    }
                    if (item.attributes.meta.web) props.web = '<strong>W:</strong> <a href="' + item.attributes.meta.web + '" target="_blank">' + (item.attributes.meta.web_txt ? item.attributes.meta.web_txt : item.attributes.meta.web) + '</a>';

                    if (item.attributes.meta.tel) props.tel = '<strong>T:</strong> <a href="tel:' + item.attributes.meta.tel + '">' + item.attributes.meta.tel + '</a>';

                    if (item.attributes.meta.email) props.email = '<strong>E:</strong> <a href="mailto:' + item.attributes.meta.email + '">' + item.attributes.meta.email + '</a>';

                    geojson.push({
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [item.attributes.meta.lng, item.attributes.meta.lat]
                        },
                        properties: props,
                    });
                }
            });
            vwtheme.initializeMap(geojson, 'map', false, true);
        }
    })

    app_simpleview.Views.Listing = Backbone.View.extend({
        tagName: "div",
        className: "card card--member",
        render: function () {
            var vars = this.model.attributes;
            var img = null;
            if (vars.media.lead) img = vars.media.lead.url;
            vars.mymoments = Mustache.render($("#tpl_mymoments").html(), {
                id: 'l' + vars.meta.id,
                title: vars.title,
                url: vars.link_url,
                type: 'listing',
                lat: vars.meta.lat,
                lng: vars.meta.lng,
                img: img,
            });
            vars.latlng = null;
            if (vars.meta.lat && vars.meta.lng) {
                vars.latlng = Mustache.render($("#tpl_latlng").html(), {
                    lat: vars.meta.lat, lng: vars.meta.lng, url: vars.link_url, title: vars.title
                });
            }
            var contents = Mustache.render(app_simpleview.Templates.card, vars);
            $(this.el).html($(contents).html());
            return this;
        },
        events: {
            'click': 'displayListing',
        },
        displayListing: function (e) {
            var clicked_el = $(e.target),
                clicked_el_type = clicked_el.prop("tagName").toLowerCase(),
                should_launch_modal = false,
                should_prevent_default = false,
                moments_trigger = false,
                latlng_trigger = false;


            switch (clicked_el_type) {
                case 'a':
                    if (!clicked_el.parents('ul.card--meta').length) {
                        should_launch_modal = true;
                        should_prevent_default = true;
                    }
                    break;
                default:
                    should_launch_modal = true;
                    should_prevent_default = true;
                    if (clicked_el.hasClass('my-moments--trigger') || clicked_el.parents('.my-moments--trigger').length) {
                        moments_trigger = true;
                        should_launch_modal = false;
                    } else if (clicked_el.hasClass('icon-lat-long') || clicked_el.parents('.icon-lat-long').length) {
                        latlng_trigger = true;
                    }
            }
            //bypass all if too small
            if (vwtheme._vars.$windowWidth < vwtheme._vars.$minModalWidth) {
                should_launch_modal = false;
                should_prevent_default = false;
            }

            //perform actions accordingly
            if (should_prevent_default) {
                e.preventDefault();
            }
            if (moments_trigger) {
                //do nothing - see  $(document).on('click', '.my-moments--trigger', function(e)
            }
            if (latlng_trigger) {
                this.model.showMap = true;
            }
            if (should_launch_modal) {
                var modal = new app_simpleview.Views.Modal({
                    model: this.model,
                    collection: this.collection
                }).initalize();
            }
        }
    });

    app_simpleview.Views.TabsetContainer = Backbone.View.extend({
        tagName: "div",
        className: function () {
            var classes = 'tabset--content-item';
            if (this.model.first) {
                //TODO - only add 'is-active' class if > mobile threshold
                //or - have different class for if accordion active (is-accordion-active)
                classes += ' first is-active';
            }
            return classes;
        },
        id: function () {
            return "tabset-tab--" + this.model.id;
        },
        render: function () {
            var inner = $('<div/>').addClass('grid wrapper--grid list--cards-vertical clearfix');
            _.each(this.model.items, function (item, iteration) {
                inner.append(item);
            });
            $(this.el).append(inner);
            //title for mobile accordion
            $(this.el).prepend($('<h4/>').addClass('tabset--title').html('<span>' + this.model.label + '</span>'));
            return this;
        },
        events: {
            'click .tabset--title': 'updateAccordion',
        },
        updateAccordion: function (e) {
            e.preventDefault();
            var targ = $(e.target);
            targ
                .parents('.tabset--content-item')
                .toggleClass('is-accordion-active')
                .siblings()
                .removeClass('is-accordion-active');
        },
    });

    app_simpleview.Views.List = Backbone.View.extend({
        tagName: "div",
        className: function () {
            var c = "list";
            if (this.collection.config.type != "tab") {
                c += " list--cards-vertical clearfix";
            }
            return c;
        },
        initialize: function () {
            this.collection.activeTab = null;
            this.parseModelsIntoSubCats();
        },
        parseModelsIntoSubCats: function () {
            //sort model into array of subcategories on parse
            this.collection.itemsSorted = [];
            var _that = this.collection,
                key,
                first_key = null;


          //get the groupings first
          _.each(this.model.models, function (item, i) {
            //groups
            _.each(_that.config.groups, function (group, g) {
              key = "group_" + g;
              if (typeof _that.itemsSorted[key] == "undefined") {
                _that.itemsSorted[key] = {
                  label: group.name,
                  id: g,
                  items: [],
                  node: _that.config.node
                };
                if (group.is_default) _that.activeTab = key;
              }

              //is item in group?
              if (_.includes(group.listings, parseInt(item.attributes.meta.id))) {
                item.list_count = i; //position in MASTER list (not subcat)
                item.list_group = g;
                _that.itemsSorted[key].items.push(item);
              }
              //for use below in active tab
              if (!first_key) first_key = key;
            });
          });
          //catchall - set to first group if not set
          if (!_that.activeTab) _that.activeTab = first_key;

        },
        render: function () {
            if (this.collection.config.display == "map") {
                var mapdiv = $('<div class="map" id="map"/>'); //TODO - loading
                mapdiv.append(Drupal.settings.bllt.loader_html);
                $(this.el).append(mapdiv);
                $(this.el).addClass('list-view--map');
            } else {
                $(this.el).removeClass('list-view--map');
                if (this.collection.config.type == "tab") {
                    //get tabs labels and order listings
                    var sorted = [], _that = this;
                    var tabset_items, item;
                    for (var x in this.collection.itemsSorted) {
                        tabset_items = [];
                        for (var y in this.collection.itemsSorted[x].items) {
                            item = this.collection.itemsSorted[x].items[y];
                            var listing = new app_simpleview.Views.Listing({
                                model: item,
                                collection: app_simpleview.List
                            }).render().el;
                            tabset_items.push(listing);
                        }

                        tabset = new app_simpleview.Views.TabsetContainer({
                            model: {
                                items: tabset_items,
                                id: this.collection.itemsSorted[x].id,
                                first: (x == this.collection.activeTab ? true : false),
                                label: this.collection.itemsSorted[x].label,
                            },
                            collection: app_simpleview.List
                        }).render().el;
                        $(this.el).append(tabset);
                    }
                } //end if tab display
                else {
                    var num_rendered = 0, list = $('<div/>');
                    _.each(this.model.models, function (item, iteration) {
                        item.list_group = 'all';
                        item.list_count = iteration;
                        if (item.attributes.list_display) {
                            var listing = new app_simpleview.Views.Listing({
                                model: item,
                                collection: app_simpleview.List
                            }).render().el;
                            list.append(listing);
                            num_rendered++;
                        }
                    });
                    if (num_rendered == 0) {
                        list.empty().html(Drupal.settings.bllt.empty_html);
                    }
                    $(this.el).append(list);
                }
            }
            return this;
        }
    });

    app_simpleview.Views.Modal = Backbone.View.extend({
        tagname: 'div',
        className: 'simpleview-modal',
        state: false,
        initalize: function () {
            this.determinePrevNext();
            this.render();
            _.bindAll(this, "render");
            this.model.bind('change', function () {
            });
        },
        determinePrevNext: function () {
            var prev = null, next = null, current = this.model;
            next = this.findNextPrev('next', current.list_count, current.list_group);
            prev = this.findNextPrev('prev', current.list_count, current.list_group);

            //remove if the same (only 1 item in list)
            if (next == current) next = null;
            if (prev == current) prev = null;

            this.prev = prev;
            this.next = next;
        },
        findNextPrev: function (direction, i, group) {
            var item = app_simpleview.List.at(i);

            var loop_break = 0;
            do {
                if (direction == "next") {
                    v = item.list_count + 1;
                    if (v >= this.collection.length) v = 0;
                } else {
                    v = item.list_count - 1;
                    if (v < 0) v = this.collection.length - 1;
                }
                item = app_simpleview.List.at(v);
                loop_break++;
            } while ((!item.attributes.list_display || item.list_group !== group) && loop_break < 1000)
            return item;
        },
        render: function () {
            $('#PageModal').empty().attr('class', 'page-modal--active').html(Drupal.settings.bllt.loading_html);
            var _that = this;
            var contents = $('<div/>');
            contents.load(this.model.attributes.link_url + "#PageContents", function (data) {
                vwtheme.analytics.setPageView(_that.model.attributes.link_url);
                var prev_op = null;
                if (_that.prev) {
                    var prev_op = Mustache.render(app_simpleview.Templates.prev_next, {
                        direction: 'prev',
                        prevnext_media: _that.prev.attributes.rendered.thumb_media,
                        title: _that.prev.attributes.title,
                    });
                }

                var next_op = null;
                if (_that.next) {
                    var next_op = Mustache.render(app_simpleview.Templates.prev_next, {
                        direction: 'next',
                        prevnext_media: _that.next.attributes.rendered.thumb_media,
                        title: _that.next.attributes.title,
                    });
                }


                var new_content = Mustache.render(app_simpleview.Templates.listing_modal, {
                    moment_next: next_op,
                    moment_prev: prev_op,
                    moment_full: $(data).find('.card-full--member').parent().html()
                });
                $(_that.el).html(new_content);
                $(_that.el).append($('<span />').addClass('ctrl close').attr('data-bodyclass', 'page-modal--active'));


                $('#PageModal').empty().append(_that.$el);

                //map display
                if (_that.model.showMap) {
                    $(_that.el).find('.display-on-map').trigger('click');
                }
                vwtheme.dynamic(_that.$el);
                return _that;
            });

        },
        events: {
            'click .moment-prev': 'prevNext',
            'click .moment-next': 'prevNext',
        },
        prevNext: function (ev) {
            if (!this.prev || !this.next) return;
            var direction = $(ev.target).parents('.modal-dir-toggle').data().direction,
                class_outgoing = 'outgoing-' + direction,
                class_incoming = 'incoming-' + direction;

            if (direction == "prev") {
                this.model = this.prev;
            } else {
                this.model = this.next;
            }
            var contents = $('<div/>');
            var _that = this;
            _that.determinePrevNext();

            contents.load(this.model.attributes.link_url + "#PageContents", function (data) {
                vwtheme.analytics.setPageView(_that.model.attributes.link_url);
                _that.$('.card-full--member').addClass(class_outgoing);
                var vars = _that.model.attributes;
                vars.classes = class_incoming;
                var new_contents = $(data).find('.card-full--member').addClass(class_incoming).parent().html();

                _that.$el.append(new_contents);

                _.defer(function () {
                    _that.$('.' + class_outgoing).fadeOut(500, function () {
                        this.remove()
                    });
                    _that.$('.' + class_incoming).removeClass('incoming-prev incoming-next');
                });

                /*_.delay(function(){
                 _that.$('.'+class_incoming).removeClass('incoming-prev incoming-next');
                 },10);
                 _.delay(function() {
                 _that.$('.'+class_outgoing).remove();
                 },1000);*/

                _that.updateNav();
                vwtheme.dynamic(_that.$el);
            });
        },
        updateNav: function () {
            var $prev = this.$('.moment-prev'),
                $next = this.$('.moment-next');

            var p = this.prev, n = this.next; //needed for onload fn.
            //prev
            var img = document.createElement('img');
            img.onload = function () {
                $prev.find('.listing-media-item').css('background-image', 'url(' + img.src + ')');
                $prev.find('h4').text(p.attributes.title);
            }
            img.src = app_simpleview.ph_img;
            if (p.attributes.media.lead) img.src = p.attributes.media.lead.url;

            //next
            var imgb = document.createElement('img');
            imgb.onload = function () {
                $next.find('.listing-media-item').css('background-image', 'url(' + imgb.src + ')');
                $next.find('h4').text(n.attributes.title);
            }
            imgb.src = app_simpleview.ph_img;
            if (n.attributes.media.lead) imgb.src = n.attributes.media.lead.url;
        },

    });

})(jQuery);
;

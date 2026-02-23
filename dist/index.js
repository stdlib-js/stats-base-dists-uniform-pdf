"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=f(function(m,s){
var i=require('@stdlib/math-base-assert-is-nan/dist');function v(e,r,t){return i(e)||i(r)||i(t)||r>=t?NaN:e<r||e>t?0:1/(t-r)}s.exports=v
});var o=f(function(F,c){
var N=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function p(e,r){if(u(e)||u(r)||e>=r)return N(NaN);return t;function t(n){return u(n)?NaN:n<e||n>r?0:1/(r-e)}}c.exports=p
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=a(),d=o();y(q,"factory",d);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

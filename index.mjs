// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var e=n;var s=r,i=n;var a=function(t,n,r){return e(t)||e(n)||e(r)||n>=r?NaN:t<n||t>r?0:1/(r-n)},o=function(t,n){return i(t)||i(n)||t>=n?s(NaN):function(r){if(i(r))return NaN;if(r<t||r>n)return 0;return 1/(n-t)}};t(a,"factory",o);var d=a;export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map

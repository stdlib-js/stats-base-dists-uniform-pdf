// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function r(t,e,r){return n(t)||n(e)||n(r)||e>=r?NaN:t<e||t>r?0:1/(r-e)}function s(t,r){return n(t)||n(r)||t>=r?e(NaN):function(e){if(n(e))return NaN;if(e<t||e>r)return 0;return 1/(r-t)}}t(r,"factory",s);export{r as default,s as factory};
//# sourceMappingURL=index.mjs.map

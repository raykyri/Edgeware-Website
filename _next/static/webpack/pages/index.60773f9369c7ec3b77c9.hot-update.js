webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/common/icon-with-text/icon-with-text.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/common/icon-with-text/icon-with-text.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".icon-with-text_wrapper__k-r_S {\\n  position: relative;\\n}\\n@media (min-width: 992px) {\\n  .icon-with-text_wrapper__k-r_S {\\n    padding: 1rem 0 1rem 5rem;\\n    margin: 0 0 2rem 0;\\n  }\\n}\\n\\n.icon-with-text_icon__2KHNk {\\n  display: block;\\n  border-radius: 100px;\\n  width: 66px;\\n  border: 7px solid rgba(255, 255, 255, 0.035);\\n  padding: 12px;\\n  margin: var(--spacing-m) auto;\\n  text-align: center;\\n}\\n.icon-with-text_icon__2KHNk svg {\\n  width: 24px;\\n  fill: var(--primary-500);\\n  margin-top: -3px;\\n}\\n@media (min-width: 992px) {\\n  .icon-with-text_icon__2KHNk {\\n    position: absolute;\\n    left: 0;\\n    top: 0;\\n    margin: 0;\\n  }\\n}\\n\\n.icon-with-text_headline__2XTQR {\\n  font-weight: var(--fw-semibold);\\n  font-size: var(--fs-text-xl);\\n  letter-spacing: var(--ls-text--md);\\n  display: block;\\n  margin: 0 0 var(--spacing-xs) 0;\\n}\\n\\n.icon-with-text_content__3lKb- p {\\n  color: var(--grey-300);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://icon-with-text.module.scss\",\"webpack://../../../node_modules/bootstrap/scss/mixins/_breakpoints.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;AADF;AC6DI;ED7DJ;IAII,yBAAA;IACA,kBAAA;EAAF;AACF;;AAGA;EACE,cAAA;EACA,oBAAA;EACA,WAAA;EACA,4CAAA;EACA,aAAA;EAEA,6BAAA;EACA,kBAAA;AADF;AAGE;EACE,WAAA;EACA,wBAAA;EACA,gBAAA;AADJ;ACwCI;EDpDJ;IAiBI,kBAAA;IACA,OAAA;IACA,MAAA;IACA,SAAA;EADF;AACF;;AAIA;EACE,+BAAA;EACA,4BAAA;EACA,kCAAA;EACA,cAAA;EACA,+BAAA;AADF;;AAKE;EACE,sBAAA;AAFJ\",\"sourcesContent\":[\"@import '../../../styles/custom.scss';\\n\\n.wrapper {\\n  position: relative;\\n\\n  @include media-breakpoint-up(lg) {\\n    padding: 1rem 0 1rem 5rem;\\n    margin: 0 0 2rem 0;\\n  }\\n}\\n\\n.icon {\\n  display: block;\\n  border-radius: 100px;\\n  width: 66px;\\n  border: 7px solid rgba(255,255,255,0.035);\\n  padding: 12px;\\n\\n  margin: var(--spacing-m) auto;\\n  text-align: center;\\n\\n  svg {\\n    width: 24px;\\n    fill: var(--primary-500);\\n    margin-top: -3px;\\n  }\\n\\n  @include media-breakpoint-up(lg) {\\n    position: absolute;\\n    left: 0;\\n    top: 0;\\n    margin: 0;\\n  }\\n}\\n\\n.headline {\\n  font-weight: var(--fw-semibold);\\n  font-size: var(--fs-text-xl);\\n  letter-spacing: var(--ls-text--md);\\n  display: block;\\n  margin: 0 0 var(--spacing-xs) 0;\\n}\\n\\n.content {\\n  p {\\n    color: var(--grey-300);\\n  }\\n}\\n\",\"// Breakpoint viewport sizes and media queries.\\n//\\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\\n//\\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\\n//\\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\\n\\n// Name of the next breakpoint, or null for the last breakpoint.\\n//\\n//    >> breakpoint-next(sm)\\n//    md\\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    md\\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\\n//    md\\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\\n  $n: index($breakpoint-names, $name);\\n  @if not $n {\\n    @error \\\"breakpoint `#{$name}` not found in `#{$breakpoints}`\\\";\\n  }\\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\\n}\\n\\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\\n//\\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    576px\\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\\n  $min: map-get($breakpoints, $name);\\n  @return if($min != 0, $min, null);\\n}\\n\\n// Maximum breakpoint width.\\n// The maximum value is reduced by 0.02px to work around the limitations of\\n// `min-` and `max-` prefixes and viewports with fractional widths.\\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\\n//\\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    767.98px\\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\\n  $max: map-get($breakpoints, $name);\\n  @return if($max and $max > 0, $max - .02, null);\\n}\\n\\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\\n// Useful for making responsive utilities.\\n//\\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\\"\\\"  (Returns a blank string)\\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\\n//    \\\"-sm\\\"\\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\\n  @return if(breakpoint-min($name, $breakpoints) == null, \\\"\\\", \\\"-#{$name}\\\");\\n}\\n\\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\\n// Makes the @content apply to the given breakpoint and wider.\\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($name, $breakpoints);\\n  @if $min {\\n    @media (min-width: $min) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\\n// Makes the @content apply to the given breakpoint and narrower.\\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\\n  $max: breakpoint-max($name, $breakpoints);\\n  @if $max {\\n    @media (max-width: $max) {\\n      @content;\\n    }\\n  } @else {\\n    @content;\\n  }\\n}\\n\\n// Media that spans multiple breakpoint widths.\\n// Makes the @content apply between the min and max breakpoints\\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\\n  $min: breakpoint-min($lower, $breakpoints);\\n  $max: breakpoint-max($upper, $breakpoints);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($lower, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($upper, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n\\n// Media between the breakpoint's minimum and maximum widths.\\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\\n  $min:  breakpoint-min($name, $breakpoints);\\n  $next: breakpoint-next($name, $breakpoints);\\n  $max:  breakpoint-max($next);\\n\\n  @if $min != null and $max != null {\\n    @media (min-width: $min) and (max-width: $max) {\\n      @content;\\n    }\\n  } @else if $max == null {\\n    @include media-breakpoint-up($name, $breakpoints) {\\n      @content;\\n    }\\n  } @else if $min == null {\\n    @include media-breakpoint-down($next, $breakpoints) {\\n      @content;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"icon-with-text_wrapper__k-r_S\",\n\t\"icon\": \"icon-with-text_icon__2KHNk\",\n\t\"headline\": \"icon-with-text_headline__2XTQR\",\n\t\"content\": \"icon-with-text_content__3lKb-\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vaWNvbi13aXRoLXRleHQvaWNvbi13aXRoLXRleHQubW9kdWxlLnNjc3M/OWJjOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsbUNBQW1DLHVCQUF1QixHQUFHLDZCQUE2QixvQ0FBb0MsZ0NBQWdDLHlCQUF5QixLQUFLLEdBQUcsaUNBQWlDLG1CQUFtQix5QkFBeUIsZ0JBQWdCLGlEQUFpRCxrQkFBa0Isa0NBQWtDLHVCQUF1QixHQUFHLG1DQUFtQyxnQkFBZ0IsNkJBQTZCLHFCQUFxQixHQUFHLDZCQUE2QixpQ0FBaUMseUJBQXlCLGNBQWMsYUFBYSxnQkFBZ0IsS0FBSyxHQUFHLHFDQUFxQyxvQ0FBb0MsaUNBQWlDLHVDQUF1QyxtQkFBbUIsb0NBQW9DLEdBQUcsc0NBQXNDLDJCQUEyQixHQUFHLE9BQU8scUtBQXFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLCtEQUErRCxjQUFjLHVCQUF1Qix3Q0FBd0MsZ0NBQWdDLHlCQUF5QixLQUFLLEdBQUcsV0FBVyxtQkFBbUIseUJBQXlCLGdCQUFnQiw4Q0FBOEMsa0JBQWtCLG9DQUFvQyx1QkFBdUIsV0FBVyxrQkFBa0IsK0JBQStCLHVCQUF1QixLQUFLLHdDQUF3Qyx5QkFBeUIsY0FBYyxhQUFhLGdCQUFnQixLQUFLLEdBQUcsZUFBZSxvQ0FBb0MsaUNBQWlDLHVDQUF1QyxtQkFBbUIsb0NBQW9DLEdBQUcsY0FBYyxPQUFPLDZCQUE2QixLQUFLLEdBQUcsbXRCQUFtdEIsd0NBQXdDLGdCQUFnQiw2QkFBNkIsTUFBTSxrQkFBa0IsYUFBYSxJQUFJLEtBQUsscUZBQXFGLEdBQUcsa1BBQWtQLHVDQUF1QyxzQ0FBc0MsR0FBRyxpaUJBQWlpQix1Q0FBdUMsb0RBQW9ELEdBQUcsMmJBQTJiLHVFQUF1RSxNQUFNLElBQUksR0FBRyxrT0FBa08sOENBQThDLGNBQWMsZ0NBQWdDLGlCQUFpQixPQUFPLEtBQUssUUFBUSxlQUFlLEtBQUssR0FBRyxxT0FBcU8sOENBQThDLGNBQWMsZ0NBQWdDLGlCQUFpQixPQUFPLEtBQUssUUFBUSxlQUFlLEtBQUssR0FBRyx3TUFBd00sK0NBQStDLCtDQUErQyx5Q0FBeUMsc0RBQXNELGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLDBEQUEwRCxpQkFBaUIsT0FBTyxLQUFLLHdCQUF3Qiw0REFBNEQsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLHlUQUF5VCwrQ0FBK0MsZ0RBQWdELGlDQUFpQyx5Q0FBeUMsc0RBQXNELGlCQUFpQixPQUFPLEtBQUssd0JBQXdCLHlEQUF5RCxpQkFBaUIsT0FBTyxLQUFLLHdCQUF3QiwyREFBMkQsaUJBQWlCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUMzeU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvY29tbW9uL2ljb24td2l0aC10ZXh0L2ljb24td2l0aC10ZXh0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmljb24td2l0aC10ZXh0X3dyYXBwZXJfX2stcl9TIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuaWNvbi13aXRoLXRleHRfd3JhcHBlcl9fay1yX1Mge1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSA1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAycmVtIDA7XFxuICB9XFxufVxcblxcbi5pY29uLXdpdGgtdGV4dF9pY29uX18yS0hOayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgd2lkdGg6IDY2cHg7XFxuICBib3JkZXI6IDdweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDM1KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctbSkgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmljb24td2l0aC10ZXh0X2ljb25fXzJLSE5rIHN2ZyB7XFxuICB3aWR0aDogMjRweDtcXG4gIGZpbGw6IHZhcigtLXByaW1hcnktNTAwKTtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmljb24td2l0aC10ZXh0X2ljb25fXzJLSE5rIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuXFxuLmljb24td2l0aC10ZXh0X2hlYWRsaW5lX18yWFRRUiB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZnctc2VtaWJvbGQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy10ZXh0LXhsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1scy10ZXh0LS1tZCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmcteHMpIDA7XFxufVxcblxcbi5pY29uLXdpdGgtdGV4dF9jb250ZW50X18zbEtiLSBwIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LTMwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9pY29uLXdpdGgtdGV4dC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBQTtBQURGO0FDNkRJO0VEN0RKO0lBSUkseUJBQUE7SUFDQSxrQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQURKO0FDd0NJO0VEcERKO0lBaUJJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQURGOztBQUtFO0VBQ0Usc0JBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvY3VzdG9tLnNjc3MnO1xcblxcbi53cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcXG4gICAgcGFkZGluZzogMXJlbSAwIDFyZW0gNXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMnJlbSAwO1xcbiAgfVxcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgd2lkdGg6IDY2cHg7XFxuICBib3JkZXI6IDdweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDM1KTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuXFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctbSkgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZnctc2VtaWJvbGQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy10ZXh0LXhsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1scy10ZXh0LS1tZCk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmcteHMpIDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHAge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xcbiAgfVxcbn1cXG5cIixcIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXFxuLy9cXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XFxuLy9cXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXFxuLy9cXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXFxuXFxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50Llxcbi8vXFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxcbi8vICAgIG1kXFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIG1kXFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcXG4vLyAgICBtZFxcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XFxuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcXG4gIEBpZiBub3QgJG4ge1xcbiAgICBAZXJyb3IgXFxcImJyZWFrcG9pbnQgYCN7JG5hbWV9YCBub3QgZm91bmQgaW4gYCN7JGJyZWFrcG9pbnRzfWBcXFwiO1xcbiAgfVxcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XFxufVxcblxcbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cXG4vL1xcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIDU3NnB4XFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xcbn1cXG5cXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguXFxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXFxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxcbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcXG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXFxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcXG4vL1xcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIDc2Ny45OHB4XFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XFxufVxcblxcbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXFxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXFxuLy9cXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIFxcXCJcXFwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxcbi8vICAgIFxcXCItc21cXFwiXFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcXG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXFxcIlxcXCIsIFxcXCItI3skbmFtZX1cXFwiKTtcXG59XFxuXFxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50Llxcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXFxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xcbiAgQGlmICRtaW4ge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9IEBlbHNlIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXFxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XFxuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcXG4gIEBpZiAkbWF4IHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfSBAZWxzZSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxcbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcXG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcXG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcXG5cXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xcbiAgICAgIEBjb250ZW50O1xcbiAgICB9XFxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XFxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXFxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXFxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcXG4gICRtaW46ICBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcXG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XFxuICAkbWF4OiAgYnJlYWtwb2ludC1tYXgoJG5leHQpO1xcblxcbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XFxuICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuZXh0LCAkYnJlYWtwb2ludHMpIHtcXG4gICAgICBAY29udGVudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiaWNvbi13aXRoLXRleHRfd3JhcHBlcl9fay1yX1NcIixcblx0XCJpY29uXCI6IFwiaWNvbi13aXRoLXRleHRfaWNvbl9fMktITmtcIixcblx0XCJoZWFkbGluZVwiOiBcImljb24td2l0aC10ZXh0X2hlYWRsaW5lX18yWFRRUlwiLFxuXHRcImNvbnRlbnRcIjogXCJpY29uLXdpdGgtdGV4dF9jb250ZW50X18zbEtiLVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/common/icon-with-text/icon-with-text.module.scss\n");

/***/ })

})
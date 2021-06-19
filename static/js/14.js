(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Refs.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Refs.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setup: function setup() {\n    var el = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])(null);\n    var itemRefs = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"reactive\"])([]);\n    var list = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"ref\"])([1, 2, 3]);\n\n    var setItemRef = function setItemRef(el) {\n      // @ts-ignore\n      itemRefs.push(el);\n    };\n\n    var handleClick = function handleClick() {\n      console.log(itemRefs);\n    };\n\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"onBeforeUpdate\"])(function () {\n      itemRefs = [];\n    });\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"onUpdated\"])(function () {\n      console.log(itemRefs);\n    });\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"onMounted\"])(function () {\n      el.value.innerHTML = \"el元素被改变\";\n    });\n    return {\n      itemRefs: itemRefs,\n      setItemRef: setItemRef,\n      handleClick: handleClick,\n      list: list,\n      el: el\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Refs.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Refs.vue?vue&type=template&id=752ded7a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Refs.vue?vue&type=template&id=752ded7a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  ref: \"el\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($setup.list, function (item) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", {\n      key: item,\n      ref: $setup.setItemRef\n    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(item), 513\n    /* TEXT, NEED_PATCH */\n    );\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n    onClick: _cache[1] || (_cache[1] = function () {\n      return $setup.handleClick && $setup.handleClick.apply($setup, arguments);\n    })\n  }, \"点击\"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_1, \"div元素\", 512\n  /* NEED_PATCH */\n  )], 64\n  /* STABLE_FRAGMENT */\n  );\n}\n\n//# sourceURL=webpack:///./src/views/Refs.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/views/Refs.vue":
/*!****************************!*\
  !*** ./src/views/Refs.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Refs_vue_vue_type_template_id_752ded7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Refs.vue?vue&type=template&id=752ded7a */ \"./src/views/Refs.vue?vue&type=template&id=752ded7a\");\n/* harmony import */ var _Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Refs.vue?vue&type=script&lang=ts */ \"./src/views/Refs.vue?vue&type=script&lang=ts\");\n/* empty/unused harmony star reexport */\n\n\n_Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Refs_vue_vue_type_template_id_752ded7a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/views/Refs.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/views/Refs.vue?");

/***/ }),

/***/ "./src/views/Refs.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Refs.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/ts-loader??ref--13-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Refs.vue?vue&type=script&lang=ts */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Refs.vue?vue&type=script&lang=ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Refs_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Refs.vue?");

/***/ }),

/***/ "./src/views/Refs.vue?vue&type=template&id=752ded7a":
/*!**********************************************************!*\
  !*** ./src/views/Refs.vue?vue&type=template&id=752ded7a ***!
  \**********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Refs_vue_vue_type_template_id_752ded7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Refs.vue?vue&type=template&id=752ded7a */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Refs.vue?vue&type=template&id=752ded7a\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Refs_vue_vue_type_template_id_752ded7a__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Refs.vue?");

/***/ })

}]);
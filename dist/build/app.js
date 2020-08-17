(function(){
    
    var manifestJson = undefined
    var createAppHandler = function() {
      return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/heymie/taro/testpage2/dist/src!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?cwd=/Users/heymie/taro/testpage2/dist&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/heymie/taro/testpage2/dist/src!./node_modules/_babel-loader@8.1.0@babel-loader/lib?cwd=/Users/heymie/taro/testpage2/dist&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js):\\nError: Cannot find module 'next/babel' from '/Users/heymie/taro/testpage2/dist'\\n    at Function.resolveSync [as sync] (/Users/heymie/taro/testpage2/dist/node_modules/_resolve@1.17.0@resolve/lib/sync.js:89:15)\\n    at resolveStandardizedName (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/files/plugins.js:101:31)\\n    at resolvePreset (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/files/plugins.js:58:10)\\n    at loadPreset (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/files/plugins.js:77:20)\\n    at createDescriptor (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/config-descriptors.js:154:9)\\n    at items.map (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/config-descriptors.js:109:50)\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/config-descriptors.js:101:10)\\n    at presets (/Users/heymie/taro/testpage2/dist/node_modules/_@babel_core@7.11.1@@babel/core/lib/config/config-descriptors.js:47:19)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPS9Vc2Vycy9oZXltaWUvdGFyby90ZXN0cGFnZTIvZGlzdC9zcmMhLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD0vVXNlcnMvaGV5bWllL3Rhcm8vdGVzdHBhZ2UyL2Rpc3QmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0IS4vc3JjL2FwcC51eD91eFR5cGU9YXBwLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/heymie/taro/testpage2/dist/src!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?cwd=/Users/heymie/taro/testpage2/dist&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./src/app.css?uxType=app":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./src/app.css?uxType=app ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9zcmMvYXBwLmNzcz91eFR5cGU9YXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jc3M/MGQ5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHt9Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./src/app.css?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar $app_style$ = __webpack_require__(/*! ../node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./app.css?uxType=app */ \"./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./src/app.css?uxType=app\")\n\nvar $app_script$ = __webpack_require__(/*! ../node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/heymie/taro/testpage2/dist/src!../node_modules/_babel-loader@8.1.0@babel-loader/lib?cwd=/Users/heymie/taro/testpage2/dist&cacheDirectory&comments=false!../node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=/Users/heymie/taro/testpage2/dist/src!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?cwd=/Users/heymie/taro/testpage2/dist&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.7.4@@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {\n  \n  $app_script$($app_module$, $app_exports$, $app_require$)\n  if ($app_exports$.__esModule && $app_exports$.default) {\n    $app_module$.exports = $app_exports$.default\n  }\n  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ \"./src/manifest.json\")\n  $app_module$.exports.style = { list: [ $app_style$ ] }\n  \n})\n$app_bootstrap$('@app-application/app', { packagerVersion: \"0.7.4\" })\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4P2ZhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9fQGhhcC10b29sa2l0X2RzbC14dm1AMC43LjRAQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZSEuL2FwcC5jc3M/dXhUeXBlPWFwcFwiKVxuXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNy40QEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3NjcmlwdC1sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjcuNEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9tb2R1bGUtbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9fQGhhcC10b29sa2l0X2RzbC14dm1AMC43LjRAQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvbWFuaWZlc3QtbG9hZGVyLmpzP3BhdGg9L1VzZXJzL2hleW1pZS90YXJvL3Rlc3RwYWdlMi9kaXN0L3NyYyEuLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA4LjEuMEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2N3ZD0vVXNlcnMvaGV5bWllL3Rhcm8vdGVzdHBhZ2UyL2Rpc3QmY2FjaGVEaXJlY3RvcnkmY29tbWVudHM9ZmFsc2UhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjcuNEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL2FwcC51eD91eFR5cGU9YXBwXCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1hcHBsaWNhdGlvbi9hcHAnLCBbXSwgZnVuY3Rpb24gKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCkge1xuICBcbiAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICB9XG4gICRhcHBfbW9kdWxlJC5leHBvcnRzLm1hbmlmZXN0ID0gcmVxdWlyZShcIi4vbWFuaWZlc3QuanNvblwiKVxuICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHsgbGlzdDogWyAkYXBwX3N0eWxlJCBdIH1cbiAgXG59KVxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcsIHsgcGFja2FnZXJWZXJzaW9uOiBRVUlDS0FQUF9UT09MS0lUX1ZFUlNJT04gfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/*! exports provided: package, name, versionName, versionCode, minPlatformVersion, features, icon, permissions, config, router, display, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"package\\\":\\\"com.application.demo\\\",\\\"name\\\":\\\"TaroQuickApp\\\",\\\"versionName\\\":\\\"1.0.0\\\",\\\"versionCode\\\":1,\\\"minPlatformVersion\\\":1040,\\\"features\\\":[{\\\"name\\\":\\\"system.prompt\\\"},{\\\"name\\\":\\\"system.router\\\"},{\\\"name\\\":\\\"system.shortcut\\\"},{\\\"name\\\":\\\"system.fetch\\\"},{\\\"name\\\":\\\"system.storage\\\"},{\\\"name\\\":\\\"system.barcode\\\"},{\\\"name\\\":\\\"system.vibrator\\\"},{\\\"name\\\":\\\"system.clipboard\\\"},{\\\"name\\\":\\\"system.sensor\\\"},{\\\"name\\\":\\\"system.geolocation\\\"},{\\\"name\\\":\\\"system.share\\\"},{\\\"name\\\":\\\"system.notification\\\"},{\\\"name\\\":\\\"system.device\\\"},{\\\"name\\\":\\\"system.webview\\\"},{\\\"name\\\":\\\"system.request\\\"},{\\\"name\\\":\\\"system.audio\\\"},{\\\"name\\\":\\\"system.record\\\"},{\\\"name\\\":\\\"system.contact\\\"},{\\\"name\\\":\\\"system.sms\\\"}],\\\"icon\\\":\\\"logo.png\\\",\\\"permissions\\\":[{\\\"origin\\\":\\\"*\\\"}],\\\"config\\\":{\\\"logLevel\\\":\\\"debug\\\",\\\"designWidth\\\":750},\\\"router\\\":{\\\"entry\\\":\\\"pages/index\\\",\\\"pages\\\":{\\\"pages/index\\\":{\\\"component\\\":\\\"index\\\"}}},\\\"display\\\":{\\\"titleBarBackgroundColor\\\":\\\"#fff\\\",\\\"titleBarText\\\":\\\"WeChat\\\",\\\"titleBarTextColor\\\":\\\"black\\\",\\\"pages\\\":{\\\"pages/index\\\":{\\\"titleBarText\\\":\\\"首页\\\"}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFuaWZlc3QuanNvbi5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/manifest.json\n");

/***/ })

/******/ });
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();
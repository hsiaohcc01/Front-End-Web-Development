/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");

function render(state, appEl) {
  if (!appEl) return;
  switch (state.page) {
    case _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS:
      renderProducts(state, appEl);
      break;
    case _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART:
      renderCart(state, appEl);
      break;
    default:
      console.warn("Unknown page: ".concat(state.page));
  }
}
function renderProducts(state, appEl) {
  var productsHTML = generateProductsHTML(state.products);
  var viewCartButton = "View Cart".concat(state.totalNum ? "(".concat(state.totalNum, ")") : '');
  appEl.innerHTML = "\n     <button class=\"view-cart\">".concat(viewCartButton, "</button>\n    <ul class=\"products\">").concat(productsHTML, "</ul>  \n    ");
}
function renderCart(state, appEl) {
  var productsHTML = generateProductsHTML(state.products);
  var cartItemsHTML = generateCartItemsHTML(state.cartItems);
  var totalPriceHTML = state.totalPrice ? "Total Cost: $".concat(state.totalPrice.toFixed(2)) : 'Total Cost: $0.00';
  if (state.totalPrice === 0) {
    appEl.innerHTML = "\n        <ul class=\"products\">".concat(productsHTML, "</ul>  \n        <button class=\"hide-cart\">Hide Cart</button>\n        <div class=\"item\">Nothing in the cart</div>\n        <span class=\"total\">").concat(totalPriceHTML, "</span>\n        <ul class=\"carts\">").concat(cartItemsHTML, "</ul>\n        <button class=\"checkout\">Checkout</button>\n    ");
  } else {
    appEl.innerHTML = "\n        <ul class=\"products\">".concat(productsHTML, "</ul>  \n        <div class=\"center-container\">\n          <p>Shopping Cart</p>\n        </div>\n        <button class=\"hide-cart\">Hide Cart</button>\n        <span class=\"total\">").concat(totalPriceHTML, "</span>\n        <ul class=\"carts\">").concat(cartItemsHTML, "</ul>\n        <button class=\"checkout\">Checkout</button>\n      ");
  }
}
function generateProductsHTML(products) {
  return products.map(function (product, index) {
    return "\n      <div class='product' data-index=\"".concat(index, "\">\n        <img src=\"").concat(product.url, "\" alt=\"").concat(product.name, "\"/>\n        <article class=\"product_info\">\n            <span>").concat(product.name, "</span>\n            <span>$").concat(product.price, "</span>\n        </article>\n        <button class=\"add-to-cart\" data-index=\"").concat(index, "\">Add to Cart</button>\n      </div>\n    ");
  }).join('');
}
function generateCartItemsHTML(cartItems) {
  return cartItems.map(function (item, index) {
    return "\n        <div class=\"cart-item\" data-index=\"".concat(index, "\">\n            <img src=\"").concat(item.url, "\" alt=\"").concat(item.name, "\" class=\"row__img\" />\n            <span>").concat(item.name, "</span>\n            <span class=\"total-price\">$").concat((item.price * item.quantity).toFixed(2), "</span>\n            <div class=\"amount\" data-index=\"").concat(index, "\">\n                <button data-index=\"").concat(index, "\" class=\"remove\"> - </button>        \n                <span>").concat(item.quantity, "</span> \n                <button data-index=\"").concat(index, "\" class=\"add\"> + </button>   \n            </div>\n        </div>\n    ");
  }).join('');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGES: () => (/* binding */ PAGES),
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   addQuantity: () => (/* binding */ addQuantity),
/* harmony export */   clearCart: () => (/* binding */ clearCart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeQuantity: () => (/* binding */ removeQuantity)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PAGES = {
  PRODUCTS: 'products',
  CART: 'cart'
};
var state = {
  products: [{
    name: "Fluffball",
    price: 0.99,
    url: 'http://placekitten.com/150/150?image=1'
  }, {
    name: "General",
    price: 3.14,
    url: 'http://placekitten.com/150/150?image=2'
  }, {
    name: "Mayhem",
    price: 2.73,
    url: 'http://placekitten.com/150/150?image=3'
  }],
  cartItems: [],
  page: PAGES.PRODUCTS,
  totalPrice: 0,
  totalNum: 0
};
function addProduct(index) {
  var product = state.products[index];
  var cartItem = state.cartItems.find(function (item) {
    return item.name === product.name;
  });
  if (cartItem) {
    cartItem.quantity++;
  } else {
    state.cartItems.push(_objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    }));
  }
  state.totalPrice += product.price;
  state.totalNum++;
}
function removeQuantity(index) {
  var item = state.cartItems[index];
  if (item.quantity > 1) {
    item.quantity--;
    state.totalPrice -= item.price;
    state.totalNum--;
  } else {
    removeItemFromCart(index);
  }
}
function removeItemFromCart(index) {
  state.totalPrice -= state.cartItems[index].price * state.cartItems[index].quantity;
  state.totalNum -= state.cartItems[index].quantity;
  state.cartItems.splice(index, 1);
}
function addQuantity(index) {
  var item = state.cartItems[index];
  item.quantity++;
  state.totalPrice += item.price;
  state.totalNum = +1;
}
function clearCart() {
  state.cartItems = [];
  state.totalPrice = 0;
  state.totalNum = 0;
  state.page = PAGES.PRODUCTS;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");


var appEl = document.querySelector('#app');
function handleCartActions(e) {
  var target = e.target;
  var actionType = target.classList;
  var index = target.dataset.index;
  if (actionType.contains('add-to-cart')) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.addProduct)(index);
  } else if (actionType.contains('remove')) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.removeQuantity)(index);
  } else if (actionType.contains('add')) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.addQuantity)(index);
  } else if (actionType.contains('view-cart')) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.CART;
  } else if (actionType.contains('hide-cart')) {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].page = _state__WEBPACK_IMPORTED_MODULE_0__.PAGES.PRODUCTS;
  } else if (actionType.contains('checkout')) {
    (0,_state__WEBPACK_IMPORTED_MODULE_0__.clearCart)();
  }
  (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
}
appEl.addEventListener('click', handleCartActions);
(0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])(_state__WEBPACK_IMPORTED_MODULE_0__["default"], appEl);
})();

/******/ })()
;
//# sourceMappingURL=cart.js.map
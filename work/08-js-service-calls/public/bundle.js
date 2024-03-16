/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDelete: () => (/* binding */ fetchDelete),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUpdateWord: () => (/* binding */ fetchUpdateWord),
/* harmony export */   fetchWord: () => (/* binding */ fetchWord)
/* harmony export */ });
var fetchSession = function fetchSession() {
  return fetch('/api/session')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
};
var fetchLogin = function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
};
var fetchDelete = function fetchDelete() {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  });
};
var fetchWord = function fetchWord() {
  return fetch('/api/word')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
};
var fetchUpdateWord = function fetchUpdateWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
};

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
var app = document.querySelector('#app');
var render = function render(username, storedWord) {
  app.innerHTML = generateHtml(username, storedWord);
  return;
};
var generateHtml = function generateHtml(username, storedWord) {
  if (!username && !storedWord) {
    return "\n        <div class=\"container\">\n            \n            <label class=\"form-label\">\n                <span>Username:</span>\n                <input class=\"input\" name=\"username\"/>\n            </label>\n            \n            <button class=\"login\">Login</button>\n        </div>\n    <div class=\"error\"></div>\n    ";
  } else {
    return "\n\n            <p class=\"store-info\">".concat(username, ", your stored word is:  ").concat(storedWord ? "".concat(storedWord) : "", "</p>\n\n            <div class=\"container\">\n                <label class=\"form-label\">\n                    <span>Update word:</span>\n                    <input class=\"input\" name=\"word\"/>\n                </label>\n                <button class=\"update\">Update</button>\n            </div>\n\n            <div class=\"logout\">\n                <button class=\"delete\">Log out</button>\n            </div>\n        <div class=\"error\"></div>\n        ");
  }
};

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
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");


var app = document.querySelector('#app');
var errorEl = document.querySelector('.error');
var handleError = function handleError(err) {
  switch (err.error) {
    case 'network-error':
      errorEl.innerHTML = "<p>Error: Please check your network connection</p>";
      break;
    case 'required-username':
    case 'auth-missing':
      errorEl.innerHTML = "<p>Error: Ensure the username is not empty and contains only letters and numbers</p>";
      break;
    case 'auth-insufficient':
      errorEl.innerHTML = "<p>Error: dog is invalid uersame</p>";
      break;
    case 'invalid-word':
    case 'required-word':
      errorEl.innerHTML = "<p>Error: Ensure words contain only letters</p>";
      break;
    default:
      errorEl.innerHTML = "<p>Error: Unexpected error occurred</p>";
  }
};
var processLogin = function processLogin(username) {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username).then(function () {
    errorEl.innerHTML = '';
    return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)();
  }).then(function (_ref) {
    var username = _ref.username,
      storedWord = _ref.storedWord;
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
  })["catch"](handleError);
};
var processUpdateWord = function processUpdateWord(updatedWord) {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateWord)(updatedWord).then(function (_ref2) {
    var username = _ref2.username,
      storedWord = _ref2.storedWord;
    errorEl.innerHTML = '';
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
  })["catch"](handleError);
};
var processDelete = function processDelete() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchDelete)().then(function () {
    errorEl.innerHTML = '';
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)('', '');
  })["catch"](handleError);
};
var processSession = function processSession() {
  (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (_ref3) {
    var username = _ref3.username;
    return (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchWord)(username);
  }).then(function (_ref4) {
    var username = _ref4.username,
      storedWord = _ref4.storedWord;
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.render)(username, storedWord);
  })["catch"](handleError);
};
app.addEventListener('click', function (e) {
  var target = e.target;
  var inputEl = document.querySelector('.input');
  if (target.classList.contains('login')) {
    processLogin(inputEl.value);
  } else if (target.classList.contains('update')) {
    processUpdateWord(inputEl.value);
  } else if (target.classList.contains('delete')) {
    processDelete();
  }
});
processSession();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
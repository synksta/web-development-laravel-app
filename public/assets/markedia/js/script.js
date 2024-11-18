"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/markedia/js/script"],{

/***/ "./resources/assets/markedia/js/animate.js":
/*!*************************************************!*\
  !*** ./resources/assets/markedia/js/animate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function f(a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
      return -1;
    };
  b = function () {
    function a() {}
    return a.prototype.extend = function (a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a;
    }, a.prototype.isMobile = function (a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
    function a() {
      this.keys = [], this.values = [];
    }
    return a.prototype.get = function (a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b];
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
      return this.keys.push(a), this.values.push(b);
    }, a;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }
    return a.notSupported = !0, a.prototype.observe = function () {}, a;
  }()), d = this.getComputedStyle || function (a, b) {
    return this.getPropertyValue = function (b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase();
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
    }, this;
  }, e = /(\-([a-z]){1})/g, this.WOW = function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }
    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    }, e.prototype.init = function () {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, e.prototype.start = function () {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function () {
        var a, c, d, e;
        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
        return e;
      }.call(this), this.all = function () {
        var a, c, d, e;
        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
        return e;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
        return function (b) {
          var c, d, e, f, g;
          for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
            var a, b, c, d;
            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
            return d;
          }.call(a));
          return g;
        };
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0;
    }, e.prototype.stop = function () {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, e.prototype.sync = function (b) {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f;
      }
    }, e.prototype.show = function (a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a;
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, e.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    }(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e;
    }, e.prototype.resetAnimation = function (a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a;
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;
      d = [];
      for (c in b) e = b[c], a["" + c] = e, d.push(function () {
        var b, d, g, h;
        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
        return h;
      }.call(this));
      return d;
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;
      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      return g;
    }, e.prototype.animationName = function (a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = d(a).getPropertyValue("animation-name");
      }
      return "none" === b ? "" : b;
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, e.prototype.scrollCallback = function () {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b;
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b();
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e;
  }();
}).call(undefined);

/*!
 * ANIMATE
*/
var wow = new WOW({
  boxClass: 'wow',
  // animated element css class (default is wow)
  animateClass: 'animated',
  // animation css class (default is animated)
  offset: 0,
  // distance to the element when triggering the animation (default is 0)
  mobile: false,
  // trigger animations on mobile devices (default is true)
  live: true,
  // act on asynchronously loaded content (default is true)
  callback: function callback(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

/***/ }),

/***/ "./resources/assets/markedia/js/bootstrap.js":
/*!***************************************************!*\
  !*** ./resources/assets/markedia/js/bootstrap.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
}
+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.');
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] >= 4) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
}(jQuery);
+function () {
  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var transition = false;
    var MAX_UID = 1000000;
    var TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
    function isElement(obj) {
      return (obj[0] || obj).nodeType;
    }
    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }
          return undefined;
        }
      };
    }
    function transitionEndTest() {
      if (window.QUnit) {
        return false;
      }
      var el = document.createElement('bootstrap');
      for (var name in TransitionEndEvent) {
        if (el.style[name] !== undefined) {
          return {
            end: TransitionEndEvent[name]
          };
        }
      }
      return false;
    }
    function transitionEndEmulator(duration) {
      var _this = this;
      var called = false;
      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }
    function setTransitionEndSupport() {
      transition = transitionEndTest();
      $.fn.emulateTransitionEnd = transitionEndEmulator;
      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }

    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));
        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');
        if (!selector) {
          selector = element.getAttribute('href') || '';
          selector = /^#[a-z]/i.test(selector) ? selector : null;
        }
        return selector;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition);
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (configTypes.hasOwnProperty(property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && isElement(value) ? 'element' : toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'alert';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: 'close' + EVENT_KEY,
      CLOSED: 'closed' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = function () {
      function Alert(element) {
        _classCallCheck(this, Alert);
        this._element = element;
      }

      // getters

      // public

      Alert.prototype.close = function close(element) {
        element = element || this._element;
        var rootElement = this._getRootElement(element);
        var customEvent = this._triggerCloseEvent(rootElement);
        if (customEvent.isDefaultPrevented()) {
          return;
        }
        this._removeElement(rootElement);
      };
      Alert.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      };

      // private

      Alert.prototype._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;
        if (selector) {
          parent = $(selector)[0];
        }
        if (!parent) {
          parent = $(element).closest('.' + ClassName.ALERT)[0];
        }
        return parent;
      };
      Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);
        $(element).trigger(closeEvent);
        return closeEvent;
      };
      Alert.prototype._removeElement = function _removeElement(element) {
        var _this2 = this;
        $(element).removeClass(ClassName.SHOW);
        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);
          return;
        }
        $(element).one(Util.TRANSITION_END, function (event) {
          return _this2._destroyElement(element, event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      };
      Alert.prototype._destroyElement = function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      };

      // static

      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);
          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }
          if (config === 'close') {
            data[config](this);
          }
        });
      };
      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }
          alertInstance.close(this);
        };
      };
      _createClass(Alert, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);
      return Alert;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Alert._jQueryInterface;
    $.fn[NAME].Constructor = Alert;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };
    return Alert;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Button = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'button';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Button = function () {
      function Button(element) {
        _classCallCheck(this, Button);
        this._element = element;
      }

      // getters

      // public

      Button.prototype.toggle = function toggle() {
        var triggerChangeEvent = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];
        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];
          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];
                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }
            if (triggerChangeEvent) {
              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(input).trigger('change');
            }
            input.focus();
          }
        }
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      };
      Button.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      };

      // static

      Button._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }
          if (config === 'toggle') {
            data[config]();
          }
        });
      };
      _createClass(Button, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);
      return Button;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;
      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON);
      }
      Button._jQueryInterface.call($(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $(event.target).closest(Selector.BUTTON)[0];
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Button._jQueryInterface;
    $.fn[NAME].Constructor = Button;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };
    return Button;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'carousel';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: 'slide' + EVENT_KEY,
      SLID: 'slid' + EVENT_KEY,
      KEYDOWN: 'keydown' + EVENT_KEY,
      MOUSEENTER: 'mouseenter' + EVENT_KEY,
      MOUSELEAVE: 'mouseleave' + EVENT_KEY,
      LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Carousel = function () {
      function Carousel(element, config) {
        _classCallCheck(this, Carousel);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this._config = this._getConfig(config);
        this._element = $(element)[0];
        this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];
        this._addEventListeners();
      }

      // getters

      // public

      Carousel.prototype.next = function next() {
        if (this._isSliding) {
          throw new Error('Carousel is sliding');
        }
        this._slide(Direction.NEXT);
      };
      Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
        // Don't call next when the page isn't visible
        if (!document.hidden) {
          this.next();
        }
      };
      Carousel.prototype.prev = function prev() {
        if (this._isSliding) {
          throw new Error('Carousel is sliding');
        }
        this._slide(Direction.PREVIOUS);
      };
      Carousel.prototype.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }
        if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
      };
      Carousel.prototype.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };
      Carousel.prototype.to = function to(index) {
        var _this3 = this;
        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
        var activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) {
          return;
        }
        if (this._isSliding) {
          $(this._element).one(Event.SLID, function () {
            return _this3.to(index);
          });
          return;
        }
        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }
        var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;
        this._slide(direction, this._items[index]);
      };
      Carousel.prototype.dispose = function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      };

      // private

      Carousel.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };
      Carousel.prototype._addEventListeners = function _addEventListeners() {
        var _this4 = this;
        if (this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN, function (event) {
            return _this4._keydown(event);
          });
        }
        if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
          $(this._element).on(Event.MOUSEENTER, function (event) {
            return _this4.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            return _this4.cycle(event);
          });
        }
      };
      Carousel.prototype._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;
          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;
          default:
            return;
        }
      };
      Carousel.prototype._getItemIndex = function _getItemIndex(element) {
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      };
      Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREVIOUS;
        var activeIndex = this._getItemIndex(activeElement);
        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }
        var delta = direction === Direction.PREVIOUS ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };
      Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var slideEvent = $.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName
        });
        $(this._element).trigger(slideEvent);
        return slideEvent;
      };
      Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
          if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      };
      Carousel.prototype._slide = function _slide(direction, element) {
        var _this5 = this;
        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
        var isCycling = Boolean(this._interval);
        var directionalClassName = void 0;
        var orderClassName = void 0;
        var eventDirectionName = void 0;
        if (direction === Direction.NEXT) {
          directionalClassName = ClassName.LEFT;
          orderClassName = ClassName.NEXT;
          eventDirectionName = Direction.LEFT;
        } else {
          directionalClassName = ClassName.RIGHT;
          orderClassName = ClassName.PREV;
          eventDirectionName = Direction.RIGHT;
        }
        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }
        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.isDefaultPrevented()) {
          return;
        }
        if (!activeElement || !nextElement) {
          // some weirdness is happening, so we bail
          return;
        }
        this._isSliding = true;
        if (isCycling) {
          this.pause();
        }
        this._setActiveIndicatorElement(nextElement);
        var slidEvent = $.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName
        });
        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {
          $(nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $(activeElement).addClass(directionalClassName);
          $(nextElement).addClass(directionalClassName);
          $(activeElement).one(Util.TRANSITION_END, function () {
            $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);
            $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);
            _this5._isSliding = false;
            setTimeout(function () {
              return $(_this5._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          $(activeElement).removeClass(ClassName.ACTIVE);
          $(nextElement).addClass(ClassName.ACTIVE);
          this._isSliding = false;
          $(this._element).trigger(slidEvent);
        }
        if (isCycling) {
          this.cycle();
        }
      };

      // static

      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data());
          if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
            $.extend(_config, config);
          }
          var action = typeof config === 'string' ? config : _config.slide;
          if (!data) {
            data = new Carousel(this, _config);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (data[action] === undefined) {
              throw new Error('No method named "' + action + '"');
            }
            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      };
      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);
        if (!selector) {
          return;
        }
        var target = $(selector)[0];
        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }
        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');
        if (slideIndex) {
          config.interval = false;
        }
        Carousel._jQueryInterface.call($(target), config);
        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }
        event.preventDefault();
      };
      _createClass(Carousel, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }]);
      return Carousel;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_RIDE).each(function () {
        var $carousel = $(this);
        Carousel._jQueryInterface.call($carousel, $carousel.data());
      });
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Carousel._jQueryInterface;
    $.fn[NAME].Constructor = Carousel;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };
    return Carousel;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'collapse';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: 'string'
    };
    var Event = {
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.card > .show, .card > .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = function () {
      function Collapse(element, config) {
        _classCallCheck(this, Collapse);
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
        this._parent = this._config.parent ? this._getParent() : null;
        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }
        if (this._config.toggle) {
          this.toggle();
        }
      }

      // getters

      // public

      Collapse.prototype.toggle = function toggle() {
        if ($(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      };
      Collapse.prototype.show = function show() {
        var _this6 = this;
        if (this._isTransitioning) {
          throw new Error('Collapse is transitioning');
        }
        if ($(this._element).hasClass(ClassName.SHOW)) {
          return;
        }
        var actives = void 0;
        var activesData = void 0;
        if (this._parent) {
          actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
          if (!actives.length) {
            actives = null;
          }
        }
        if (actives) {
          activesData = $(actives).data(DATA_KEY);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }
        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }
        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');
          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }
        var dimension = this._getDimension();
        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);
        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }
        this.setTransitioning(true);
        var complete = function complete() {
          $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this6._element.style[dimension] = '';
          _this6.setTransitioning(false);
          $(_this6._element).trigger(Event.SHOWN);
        };
        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        this._element.style[dimension] = this._element[scrollSize] + 'px';
      };
      Collapse.prototype.hide = function hide() {
        var _this7 = this;
        if (this._isTransitioning) {
          throw new Error('Collapse is transitioning');
        }
        if (!$(this._element).hasClass(ClassName.SHOW)) {
          return;
        }
        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }
        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';
        this._element.style[dimension] = this._element[offsetDimension] + 'px';
        Util.reflow(this._element);
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
        this._element.setAttribute('aria-expanded', false);
        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }
        this.setTransitioning(true);
        var complete = function complete() {
          _this7.setTransitioning(false);
          $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };
        this._element.style[dimension] = '';
        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };
      Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };
      Collapse.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      };

      // private

      Collapse.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };
      Collapse.prototype._getDimension = function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      };
      Collapse.prototype._getParent = function _getParent() {
        var _this8 = this;
        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        $(parent).find(selector).each(function (i, element) {
          _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };
      Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.SHOW);
          element.setAttribute('aria-expanded', isOpen);
          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      };

      // static

      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      };
      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);
          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }
          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Collapse, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }]);
      return Collapse;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      var target = Collapse._getTargetFromElement(this);
      var data = $(target).data(DATA_KEY);
      var config = data ? 'toggle' : $(this).data();
      Collapse._jQueryInterface.call($(target), config);
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };
    return Collapse;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'dropdown';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var Event = {
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      CLICK: 'click' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
      FOCUSIN_DATA_API: 'focusin' + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      BACKDROP: 'dropdown-backdrop',
      DISABLED: 'disabled',
      SHOW: 'show'
    };
    var Selector = {
      BACKDROP: '.dropdown-backdrop',
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      ROLE_MENU: '[role="menu"]',
      ROLE_LISTBOX: '[role="listbox"]',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = function () {
      function Dropdown(element) {
        _classCallCheck(this, Dropdown);
        this._element = element;
        this._addEventListeners();
      }

      // getters

      // public

      Dropdown.prototype.toggle = function toggle() {
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return false;
        }
        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.SHOW);
        Dropdown._clearMenus();
        if (isActive) {
          return false;
        }
        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
          // if mobile we use a backdrop because click events don't delegate
          var dropdown = document.createElement('div');
          dropdown.className = ClassName.BACKDROP;
          $(dropdown).insertBefore(this);
          $(dropdown).on('click', Dropdown._clearMenus);
        }
        var relatedTarget = {
          relatedTarget: this
        };
        var showEvent = $.Event(Event.SHOW, relatedTarget);
        $(parent).trigger(showEvent);
        if (showEvent.isDefaultPrevented()) {
          return false;
        }
        this.focus();
        this.setAttribute('aria-expanded', true);
        $(parent).toggleClass(ClassName.SHOW);
        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));
        return false;
      };
      Dropdown.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(EVENT_KEY);
        this._element = null;
      };

      // private

      Dropdown.prototype._addEventListeners = function _addEventListeners() {
        $(this._element).on(Event.CLICK, this.toggle);
      };

      // static

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          if (!data) {
            data = new Dropdown(this);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config].call(this);
          }
        });
      };
      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
          return;
        }
        var backdrop = $(Selector.BACKDROP)[0];
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop);
        }
        var toggles = $.makeArray($(Selector.DATA_TOGGLE));
        for (var i = 0; i < toggles.length; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };
          if (!$(parent).hasClass(ClassName.SHOW)) {
            continue;
          }
          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'focusin') && $.contains(parent, event.target)) {
            continue;
          }
          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            continue;
          }
          toggles[i].setAttribute('aria-expanded', 'false');
          $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        }
      };
      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent = void 0;
        var selector = Util.getSelectorFromElement(element);
        if (selector) {
          parent = $(selector)[0];
        }
        return parent || element.parentNode;
      };
      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }
        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.SHOW);
        if (!isActive && event.which !== ESCAPE_KEYCODE || isActive && event.which === ESCAPE_KEYCODE) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
            $(toggle).trigger('focus');
          }
          $(this).trigger('click');
          return;
        }
        var items = $(parent).find(Selector.VISIBLE_ITEMS).get();
        if (!items.length) {
          return;
        }
        var index = items.indexOf(event.target);
        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // up
          index--;
        }
        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // down
          index++;
        }
        if (index < 0) {
          index = 0;
        }
        items[index].focus();
      };
      _createClass(Dropdown, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);
      return Dropdown;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.FOCUSIN_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };
    return Dropdown;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'modal';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      FOCUSIN: 'focusin' + EVENT_KEY,
      RESIZE: 'resize' + EVENT_KEY,
      CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
      KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = function () {
      function Modal(element, config) {
        _classCallCheck(this, Modal);
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = $(element).find(Selector.DIALOG)[0];
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._isTransitioning = false;
        this._originalBodyPadding = 0;
        this._scrollbarWidth = 0;
      }

      // getters

      // public

      Modal.prototype.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };
      Modal.prototype.show = function show(relatedTarget) {
        var _this9 = this;
        if (this._isTransitioning) {
          throw new Error('Modal is transitioning');
        }
        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
        }
        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });
        $(this._element).trigger(showEvent);
        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }
        this._isShown = true;
        this._checkScrollbar();
        this._setScrollbar();
        $(document.body).addClass(ClassName.OPEN);
        this._setEscapeEvent();
        this._setResizeEvent();
        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          return _this9.hide(event);
        });
        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this9._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this9._element)) {
              _this9._ignoreBackdropClick = true;
            }
          });
        });
        this._showBackdrop(function () {
          return _this9._showElement(relatedTarget);
        });
      };
      Modal.prototype.hide = function hide(event) {
        var _this10 = this;
        if (event) {
          event.preventDefault();
        }
        if (this._isTransitioning) {
          throw new Error('Modal is transitioning');
        }
        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
        if (transition) {
          this._isTransitioning = true;
        }
        var hideEvent = $.Event(Event.HIDE);
        $(this._element).trigger(hideEvent);
        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }
        this._isShown = false;
        this._setEscapeEvent();
        this._setResizeEvent();
        $(document).off(Event.FOCUSIN);
        $(this._element).removeClass(ClassName.SHOW);
        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
        if (transition) {
          $(this._element).one(Util.TRANSITION_END, function (event) {
            return _this10._hideModal(event);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      };
      Modal.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(window, document, this._element, this._backdrop).off(EVENT_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._originalBodyPadding = null;
        this._scrollbarWidth = null;
      };

      // private

      Modal.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };
      Modal.prototype._showElement = function _showElement(relatedTarget) {
        var _this11 = this;
        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.scrollTop = 0;
        if (transition) {
          Util.reflow(this._element);
        }
        $(this._element).addClass(ClassName.SHOW);
        if (this._config.focus) {
          this._enforceFocus();
        }
        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });
        var transitionComplete = function transitionComplete() {
          if (_this11._config.focus) {
            _this11._element.focus();
          }
          _this11._isTransitioning = false;
          $(_this11._element).trigger(shownEvent);
        };
        if (transition) {
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      };
      Modal.prototype._enforceFocus = function _enforceFocus() {
        var _this12 = this;
        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target && _this12._element !== event.target && !$(_this12._element).has(event.target).length) {
            _this12._element.focus();
          }
        });
      };
      Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
        var _this13 = this;
        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === ESCAPE_KEYCODE) {
              _this13.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      };
      Modal.prototype._setResizeEvent = function _setResizeEvent() {
        var _this14 = this;
        if (this._isShown) {
          $(window).on(Event.RESIZE, function (event) {
            return _this14._handleUpdate(event);
          });
        } else {
          $(window).off(Event.RESIZE);
        }
      };
      Modal.prototype._hideModal = function _hideModal() {
        var _this15 = this;
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', 'true');
        this._isTransitioning = false;
        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);
          _this15._resetAdjustments();
          _this15._resetScrollbar();
          $(_this15._element).trigger(Event.HIDDEN);
        });
      };
      Modal.prototype._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      };
      Modal.prototype._showBackdrop = function _showBackdrop(callback) {
        var _this16 = this;
        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';
        if (this._isShown && this._config.backdrop) {
          var doAnimate = Util.supportsTransitionEnd() && animate;
          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;
          if (animate) {
            $(this._backdrop).addClass(animate);
          }
          $(this._backdrop).appendTo(document.body);
          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this16._ignoreBackdropClick) {
              _this16._ignoreBackdropClick = false;
              return;
            }
            if (event.target !== event.currentTarget) {
              return;
            }
            if (_this16._config.backdrop === 'static') {
              _this16._element.focus();
            } else {
              _this16.hide();
            }
          });
          if (doAnimate) {
            Util.reflow(this._backdrop);
          }
          $(this._backdrop).addClass(ClassName.SHOW);
          if (!callback) {
            return;
          }
          if (!doAnimate) {
            callback();
            return;
          }
          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.SHOW);
          var callbackRemove = function callbackRemove() {
            _this16._removeBackdrop();
            if (callback) {
              callback();
            }
          };
          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      };

      // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------

      Modal.prototype._handleUpdate = function _handleUpdate() {
        this._adjustDialog();
      };
      Modal.prototype._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
        }
        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + 'px';
        }
      };
      Modal.prototype._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };
      Modal.prototype._checkScrollbar = function _checkScrollbar() {
        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };
      Modal.prototype._setScrollbar = function _setScrollbar() {
        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);
        this._originalBodyPadding = document.body.style.paddingRight || '';
        if (this._isBodyOverflowing) {
          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
        }
      };
      Modal.prototype._resetScrollbar = function _resetScrollbar() {
        document.body.style.paddingRight = this._originalBodyPadding;
      };
      Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };

      // static

      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);
          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };
      _createClass(Modal, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }]);
      return Modal;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this17 = this;
      var target = void 0;
      var selector = Util.getSelectorFromElement(this);
      if (selector) {
        target = $(selector)[0];
      }
      var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());
      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }
      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return;
        }
        $target.one(Event.HIDDEN, function () {
          if ($(_this17).is(':visible')) {
            _this17.focus();
          }
        });
      });
      Modal._jQueryInterface.call($(target), config, this);
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };
    return Modal;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'scrollspy';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: 'activate' + EVENT_KEY,
      SCROLL: 'scroll' + EVENT_KEY,
      LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      NAV_LINK: 'nav-link',
      NAV: 'nav',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      LIST_ITEM: '.list-item',
      LI: 'li',
      LI_DROPDOWN: 'li.dropdown',
      NAV_LINKS: '.nav-link',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var ScrollSpy = function () {
      function ScrollSpy(element, config) {
        var _this18 = this;
        _classCallCheck(this, ScrollSpy);
        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this18._process(event);
        });
        this.refresh();
        this._process();
      }

      // getters

      // public

      ScrollSpy.prototype.refresh = function refresh() {
        var _this19 = this;
        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = $.makeArray($(this._selector));
        targets.map(function (element) {
          var target = void 0;
          var targetSelector = Util.getSelectorFromElement(element);
          if (targetSelector) {
            target = $(targetSelector)[0];
          }
          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this19._offsets.push(item[0]);
          _this19._targets.push(item[1]);
        });
      };
      ScrollSpy.prototype.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      };

      // private

      ScrollSpy.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        if (typeof config.target !== 'string') {
          var id = $(config.target).attr('id');
          if (!id) {
            id = Util.getUID(NAME);
            $(config.target).attr('id', id);
          }
          config.target = '#' + id;
        }
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };
      ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };
      ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };
      ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
      };
      ScrollSpy.prototype._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;
        var scrollHeight = this._getScrollHeight();
        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }
        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];
          if (this._activeTarget !== target) {
            this._activate(target);
          }
          return;
        }
        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;
          this._clear();
          return;
        }
        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);
          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };
      ScrollSpy.prototype._activate = function _activate(target) {
        this._activeTarget = target;
        this._clear();
        var queries = this._selector.split(',');
        queries = queries.map(function (selector) {
          return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
        });
        var $link = $(queries.join(','));
        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // todo (fat) this is kinda sus...
          // recursively add actives to tested nav-links
          $link.parents(Selector.LI).find('> ' + Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }
        $(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };
      ScrollSpy.prototype._clear = function _clear() {
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      };

      // static

      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;
          if (!data) {
            data = new ScrollSpy(this, _config);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(ScrollSpy, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }]);
      return ScrollSpy;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = $.makeArray($(Selector.DATA_SPY));
      for (var i = scrollSpys.length; i--;) {
        var $spy = $(scrollSpys[i]);
        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = ScrollSpy._jQueryInterface;
    $.fn[NAME].Constructor = ScrollSpy;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };
    return ScrollSpy;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'tab';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Event = {
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      A: 'a',
      LI: 'li',
      DROPDOWN: '.dropdown',
      LIST: 'ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)',
      FADE_CHILD: '> .nav-item .fade, > .fade',
      ACTIVE: '.active',
      ACTIVE_CHILD: '> .nav-item > .active, > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tab = function () {
      function Tab(element) {
        _classCallCheck(this, Tab);
        this._element = element;
      }

      // getters

      // public

      Tab.prototype.show = function show() {
        var _this20 = this;
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }
        var target = void 0;
        var previous = void 0;
        var listElement = $(this._element).closest(Selector.LIST)[0];
        var selector = Util.getSelectorFromElement(this._element);
        if (listElement) {
          previous = $.makeArray($(listElement).find(Selector.ACTIVE));
          previous = previous[previous.length - 1];
        }
        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });
        if (previous) {
          $(previous).trigger(hideEvent);
        }
        $(this._element).trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }
        if (selector) {
          target = $(selector)[0];
        }
        this._activate(this._element, listElement);
        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this20._element
          });
          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $(previous).trigger(hiddenEvent);
          $(_this20._element).trigger(shownEvent);
        };
        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };
      Tab.prototype.dispose = function dispose() {
        $.removeClass(this._element, DATA_KEY);
        this._element = null;
      };

      // private

      Tab.prototype._activate = function _activate(element, container, callback) {
        var _this21 = this;
        var active = $(container).find(Selector.ACTIVE_CHILD)[0];
        var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));
        var complete = function complete() {
          return _this21._transitionComplete(element, active, isTransitioning, callback);
        };
        if (active && isTransitioning) {
          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }
        if (active) {
          $(active).removeClass(ClassName.SHOW);
        }
      };
      Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
        if (active) {
          $(active).removeClass(ClassName.ACTIVE);
          var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }
          active.setAttribute('aria-expanded', false);
        }
        $(element).addClass(ClassName.ACTIVE);
        element.setAttribute('aria-expanded', true);
        if (isTransitioning) {
          Util.reflow(element);
          $(element).addClass(ClassName.SHOW);
        } else {
          $(element).removeClass(ClassName.FADE);
        }
        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }
          element.setAttribute('aria-expanded', true);
        }
        if (callback) {
          callback();
        }
      };

      // static

      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Tab, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }]);
      return Tab;
    }();

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      Tab._jQueryInterface.call($(this), 'show');
    });

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };
    return Tab;
  }(jQuery);

  /* global Tether */

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = function ($) {
    /**
     * Check for Tether dependency
     * Tether - http://tether.io/
     */
    if (typeof Tether === 'undefined') {
      throw new Error('Bootstrap tooltips require Tether (http://tether.io/)');
    }

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'tooltip';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = '.' + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX = 'bs-tether';
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: '0 0',
      constraints: [],
      container: false
    };
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: 'string',
      constraints: 'array',
      container: '(string|element|boolean)'
    };
    var AttachmentMap = {
      TOP: 'bottom center',
      RIGHT: 'middle left',
      BOTTOM: 'top center',
      LEFT: 'middle right'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      INSERTED: 'inserted' + EVENT_KEY,
      CLICK: 'click' + EVENT_KEY,
      FOCUSIN: 'focusin' + EVENT_KEY,
      FOCUSOUT: 'focusout' + EVENT_KEY,
      MOUSEENTER: 'mouseenter' + EVENT_KEY,
      MOUSELEAVE: 'mouseleave' + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner'
    };
    var TetherClass = {
      element: false,
      enabled: false
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = function () {
      function Tooltip(element, config) {
        _classCallCheck(this, Tooltip);

        // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._isTransitioning = false;
        this._tether = null;

        // protected
        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;
        this._setListeners();
      }

      // getters

      // public

      Tooltip.prototype.enable = function enable() {
        this._isEnabled = true;
      };
      Tooltip.prototype.disable = function disable() {
        this._isEnabled = false;
      };
      Tooltip.prototype.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };
      Tooltip.prototype.toggle = function toggle(event) {
        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $(event.currentTarget).data(dataKey);
          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }
          context._activeTrigger.click = !context._activeTrigger.click;
          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
            this._leave(null, this);
            return;
          }
          this._enter(null, this);
        }
      };
      Tooltip.prototype.dispose = function dispose() {
        clearTimeout(this._timeout);
        this.cleanupTether();
        $.removeData(this.element, this.constructor.DATA_KEY);
        $(this.element).off(this.constructor.EVENT_KEY);
        $(this.element).closest('.modal').off('hide.bs.modal');
        if (this.tip) {
          $(this.tip).remove();
        }
        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        this._tether = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };
      Tooltip.prototype.show = function show() {
        var _this22 = this;
        if ($(this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }
        var showEvent = $.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          if (this._isTransitioning) {
            throw new Error('Tooltip is transitioning');
          }
          $(this.element).trigger(showEvent);
          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);
          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }
          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();
          if (this.config.animation) {
            $(tip).addClass(ClassName.FADE);
          }
          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
          var attachment = this._getAttachment(placement);
          var container = this.config.container === false ? document.body : $(this.config.container);
          $(tip).data(this.constructor.DATA_KEY, this).appendTo(container);
          $(this.element).trigger(this.constructor.Event.INSERTED);
          this._tether = new Tether({
            attachment: attachment,
            element: tip,
            target: this.element,
            classes: TetherClass,
            classPrefix: CLASS_PREFIX,
            offset: this.config.offset,
            constraints: this.config.constraints,
            addTargetClasses: false
          });
          Util.reflow(tip);
          this._tether.position();
          $(tip).addClass(ClassName.SHOW);
          var complete = function complete() {
            var prevHoverState = _this22._hoverState;
            _this22._hoverState = null;
            _this22._isTransitioning = false;
            $(_this22.element).trigger(_this22.constructor.Event.SHOWN);
            if (prevHoverState === HoverState.OUT) {
              _this22._leave(null, _this22);
            }
          };
          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
            this._isTransitioning = true;
            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
            return;
          }
          complete();
        }
      };
      Tooltip.prototype.hide = function hide(callback) {
        var _this23 = this;
        var tip = this.getTipElement();
        var hideEvent = $.Event(this.constructor.Event.HIDE);
        if (this._isTransitioning) {
          throw new Error('Tooltip is transitioning');
        }
        var complete = function complete() {
          if (_this23._hoverState !== HoverState.SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }
          _this23.element.removeAttribute('aria-describedby');
          $(_this23.element).trigger(_this23.constructor.Event.HIDDEN);
          _this23._isTransitioning = false;
          _this23.cleanupTether();
          if (callback) {
            callback();
          }
        };
        $(this.element).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          return;
        }
        $(tip).removeClass(ClassName.SHOW);
        this._activeTrigger[Trigger.CLICK] = false;
        this._activeTrigger[Trigger.FOCUS] = false;
        this._activeTrigger[Trigger.HOVER] = false;
        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }
        this._hoverState = '';
      };

      // protected

      Tooltip.prototype.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };
      Tooltip.prototype.getTipElement = function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      };
      Tooltip.prototype.setContent = function setContent() {
        var $tip = $(this.getTipElement());
        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
        $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
        this.cleanupTether();
      };
      Tooltip.prototype.setElementContent = function setElementContent($element, content) {
        var html = this.config.html;
        if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
          // content is a DOM node or a jQuery
          if (html) {
            if (!$(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      };
      Tooltip.prototype.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');
        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }
        return title;
      };
      Tooltip.prototype.cleanupTether = function cleanupTether() {
        if (this._tether) {
          this._tether.destroy();
        }
      };

      // private

      Tooltip.prototype._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };
      Tooltip.prototype._setListeners = function _setListeners() {
        var _this24 = this;
        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $(_this24.element).on(_this24.constructor.Event.CLICK, _this24.config.selector, function (event) {
              return _this24.toggle(event);
            });
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSEENTER : _this24.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSELEAVE : _this24.constructor.Event.FOCUSOUT;
            $(_this24.element).on(eventIn, _this24.config.selector, function (event) {
              return _this24._enter(event);
            }).on(eventOut, _this24.config.selector, function (event) {
              return _this24._leave(event);
            });
          }
          $(_this24.element).closest('.modal').on('hide.bs.modal', function () {
            return _this24.hide();
          });
        });
        if (this.config.selector) {
          this.config = $.extend({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };
      Tooltip.prototype._fixTitle = function _fixTitle() {
        var titleType = _typeof(this.element.getAttribute('data-original-title'));
        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };
      Tooltip.prototype._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);
        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }
        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }
        if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
          context._hoverState = HoverState.SHOW;
          return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HoverState.SHOW;
        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }
        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };
      Tooltip.prototype._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);
        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }
        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }
        if (context._isWithActiveTrigger()) {
          return;
        }
        clearTimeout(context._timeout);
        context._hoverState = HoverState.OUT;
        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }
        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };
      Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }
        return false;
      };
      Tooltip.prototype._getConfig = function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);
        if (config.delay && typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };
      Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
        var config = {};
        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }
        return config;
      };

      // static

      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;
          if (!data && /dispose|hide/.test(config)) {
            return;
          }
          if (!data) {
            data = new Tooltip(this, _config);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Tooltip, null, [{
        key: 'VERSION',
        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }, {
        key: 'NAME',
        get: function get() {
          return NAME;
        }
      }, {
        key: 'DATA_KEY',
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: 'Event',
        get: function get() {
          return Event;
        }
      }, {
        key: 'EVENT_KEY',
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return DefaultType;
        }
      }]);
      return Tooltip;
    }();

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };
    return Tooltip;
  }(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'popover';
    var VERSION = '4.0.0-alpha.6';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = '.' + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = $.extend({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
    });
    var DefaultType = $.extend({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-title',
      CONTENT: '.popover-content'
    };
    var Event = {
      HIDE: 'hide' + EVENT_KEY,
      HIDDEN: 'hidden' + EVENT_KEY,
      SHOW: 'show' + EVENT_KEY,
      SHOWN: 'shown' + EVENT_KEY,
      INSERTED: 'inserted' + EVENT_KEY,
      CLICK: 'click' + EVENT_KEY,
      FOCUSIN: 'focusin' + EVENT_KEY,
      FOCUSOUT: 'focusout' + EVENT_KEY,
      MOUSEENTER: 'mouseenter' + EVENT_KEY,
      MOUSELEAVE: 'mouseleave' + EVENT_KEY
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Popover = function (_Tooltip) {
      _inherits(Popover, _Tooltip);
      function Popover() {
        _classCallCheck(this, Popover);
        return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
      }

      // overrides

      Popover.prototype.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };
      Popover.prototype.getTipElement = function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      };
      Popover.prototype.setContent = function setContent() {
        var $tip = $(this.getTipElement());

        // we use append for html objects to maintain js events
        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
        $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
        this.cleanupTether();
      };

      // private

      Popover.prototype._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      };

      // static

      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;
          if (!data && /destroy|hide/.test(config)) {
            return;
          }
          if (!data) {
            data = new Popover(this, _config);
            $(this).data(DATA_KEY, data);
          }
          if (typeof config === 'string') {
            if (data[config] === undefined) {
              throw new Error('No method named "' + config + '"');
            }
            data[config]();
          }
        });
      };
      _createClass(Popover, null, [{
        key: 'VERSION',
        // getters

        get: function get() {
          return VERSION;
        }
      }, {
        key: 'Default',
        get: function get() {
          return Default;
        }
      }, {
        key: 'NAME',
        get: function get() {
          return NAME;
        }
      }, {
        key: 'DATA_KEY',
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: 'Event',
        get: function get() {
          return Event;
        }
      }, {
        key: 'EVENT_KEY',
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: 'DefaultType',
        get: function get() {
          return DefaultType;
        }
      }]);
      return Popover;
    }(Tooltip);

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Popover._jQueryInterface;
    $.fn[NAME].Constructor = Popover;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };
    return Popover;
  }(jQuery);
}();

/***/ }),

/***/ "./resources/assets/markedia/js/custom.js":
/*!************************************************!*\
  !*** ./resources/assets/markedia/js/custom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**************************************
    File Name: custom.js
    Template Name: Markedia
    Created By: HTML.Design
    http://themeforest.net/user/wpdestek
**************************************/

(function ($) {
  "use strict";

  $(document).ready(function () {
    $('#nav-expander').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('nav-expanded');
    });
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $('.carousel').carousel({
    interval: 4000
  });
  $(window).load(function () {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
  });
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery('.dmtop').css({
        bottom: "25px"
      });
    } else {
      jQuery('.dmtop').css({
        bottom: "-100px"
      });
    }
  });
  jQuery('.dmtop').click(function () {
    jQuery('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });
})(jQuery);
function openCategory(evt, catName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(catName).style.display = "block";
  evt.currentTarget.className += " active";
}

/***/ }),

/***/ "./resources/assets/markedia/js/jquery.min.js":
/*!****************************************************!*\
  !*** ./resources/assets/markedia/js/jquery.min.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "1.12.4",
    _n = function n(a, b) {
      return new _n.fn.init(a, b);
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function r(a, b) {
      return b.toUpperCase();
    };
  _n.fn = _n.prototype = {
    jquery: m,
    constructor: _n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = _n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return _n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(_n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, _n.extend = _n.fn.extend = function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || _n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (_n.isPlainObject(c) || (b = _n.isArray(c))) ? (b ? (b = !1, f = a && _n.isArray(a) ? a : []) : f = a && _n.isPlainObject(a) ? a : {}, g[d] = _n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g;
  }, _n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === _n.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === _n.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !_n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;
      for (b in a) return !1;
      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== _n.type(a) || a.nodeType || _n.isWindow(a)) return !1;
      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      if (!l.ownFirst) for (b in a) return k.call(a, b);
      for (b in a);
      return void 0 === b || k.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(b) {
      b && _n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
        d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? _n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;
      if (b) {
        if (h) return h.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
      }
      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
        d = 0,
        e = a.length;
      while (c > d) a[e++] = b[d++];
      if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e;
    },
    map: function map(a, b, c) {
      var d,
        e,
        g = 0,
        h = [];
      if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), _n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || _n.guid++, d) : void 0;
    },
    now: function now() {
      return +new Date();
    },
    support: l
  }), "function" == typeof Symbol && (_n.fn[Symbol.iterator] = c[Symbol.iterator]), _n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });
  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = _n.type(a);
    return "function" === c || _n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }
  var t = function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function B(a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function J(a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function ca(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      },
      da = function da() {
        m();
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1;
        }
      };
    }
    function fa(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s,
        w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e);
    }
    function ga() {
      var a = [];
      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }
      return b;
    }
    function ha(a) {
      return a[u] = !0, a;
    }
    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }
    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
            f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }
    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
        e,
        g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
          d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
          d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
        d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1);
      }
      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
        c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);
      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
            c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
              k,
              l,
              m,
              n,
              o,
              p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling";
                }
                return !0;
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];
                  break;
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
            e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
              f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
              g = d(a, null, e, []),
              h = a.length;
            while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;
            do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) d.pseudos[b] = la(b);
    for (b in {
      submit: !0,
      reset: !0
    }) d.pseudos[b] = ma(b);
    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break;
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };
    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
          i,
          j,
          k = [w, f];
        if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
          if (i[d] = k, k[2] = a(b, c, g)) return !0;
        }
      };
    }
    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--) if (!a[e](b, c, d)) return !1;
        return !0;
      } : a[0];
    }
    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c;
    }
    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g;
    }
    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
          k,
          l,
          m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--) (l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i);
            }
            k = r.length;
            while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }
    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
          return a === b;
        }, h, !0), l = ra(function (a) {
          return J(b, a) > -1;
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e;
        }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
          return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
            value: " " === a[i - 2].type ? "*" : ""
          })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
        }
        m.push(c);
      }
      return sa(m);
    }
    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function f(_f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++]) if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, _f && t.push(l));
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (_f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u);
            }
            H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
          }
          return k && (w = y, j = v), t;
        };
      return c ? ha(f) : f;
    }
    return h = fa.compile = function (a, b) {
      var c,
        d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a;
      }
      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
        j,
        k,
        l,
        m,
        n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);
  _n.find = t, _n.expr = t.selectors, _n.expr[":"] = _n.expr.pseudos, _n.uniqueSort = _n.unique = t.uniqueSort, _n.text = t.getText, _n.isXMLDoc = t.isXML, _n.contains = t.contains;
  var u = function u(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
        if (e && _n(a).is(c)) break;
        d.push(a);
      }
      return d;
    },
    v = function v(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    w = _n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;
  function z(a, b, c) {
    if (_n.isFunction(b)) return _n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return _n.grep(a, function (a) {
      return a === b !== c;
    });
    if ("string" == typeof b) {
      if (y.test(b)) return _n.filter(b, a, c);
      b = _n.filter(b, a);
    }
    return _n.grep(a, function (a) {
      return _n.inArray(a, b) > -1 !== c;
    });
  }
  _n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _n.find.matchesSelector(d, a) ? [d] : [] : _n.find.matches(a, _n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, _n.fn.extend({
    find: function find(a) {
      var b,
        c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(_n(a).filter(function () {
        for (b = 0; e > b; b++) if (_n.contains(d[b], this)) return !0;
      }));
      for (b = 0; e > b; b++) _n.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? _n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? _n(a) : a || [], !1).length;
    }
  });
  var A,
    B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = _n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof _n ? b[0] : b, _n.merge(this, _n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && _n.isPlainObject(b)) for (e in b) _n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        if (f = d.getElementById(e[2]), f && f.parentNode) {
          if (f.id !== e[2]) return A.find(a);
          this.length = 1, this[0] = f;
        }
        return this.context = d, this.selector = a, this;
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(_n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _n.makeArray(a, this));
    };
  C.prototype = _n.fn, A = _n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  _n.fn.extend({
    has: function has(a) {
      var b,
        c = _n(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) if (_n.contains(this, c[b])) return !0;
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? _n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _n.find.matchesSelector(c, a))) {
        f.push(c);
        break;
      }
      return this.pushStack(f.length > 1 ? _n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? _n.inArray(this[0], _n(a)) : _n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(_n.uniqueSort(_n.merge(this.get(), _n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function F(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a;
  }
  _n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return F(a, "nextSibling");
    },
    prev: function prev(a) {
      return F(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return _n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : _n.merge([], a.childNodes);
    }
  }, function (a, b) {
    _n.fn[a] = function (c, d) {
      var e = _n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _n.filter(d, e)), this.length > 1 && (E[a] || (e = _n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var G = /\S+/g;
  function H(a) {
    var b = {};
    return _n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }
  _n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : _n.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function i() {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
      },
      j = {
        add: function add() {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            _n.each(b, function (b, c) {
              _n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== _n.type(c) && d(c);
            });
          }(arguments), c && !b && i()), this;
        },
        remove: function remove() {
          return _n.each(arguments, function (a, b) {
            var c;
            while ((c = _n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
          }), this;
        },
        has: function has(a) {
          return a ? _n.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function empty() {
          return f && (f = []), this;
        },
        disable: function disable() {
          return e = g = [], f = c = "", this;
        },
        disabled: function disabled() {
          return !f;
        },
        lock: function lock() {
          return e = !0, c || j.disable(), this;
        },
        locked: function locked() {
          return !!e;
        },
        fireWith: function fireWith(a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
        },
        fire: function fire() {
          return j.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!d;
        }
      };
    return j;
  }, _n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", _n.Callbacks("once memory"), "resolved"], ["reject", "fail", _n.Callbacks("once memory"), "rejected"], ["notify", "progress", _n.Callbacks("memory")]],
        c = "pending",
        d = {
          state: function state() {
            return c;
          },
          always: function always() {
            return e.done(arguments).fail(arguments), this;
          },
          then: function then() {
            var a = arguments;
            return _n.Deferred(function (c) {
              _n.each(b, function (b, f) {
                var g = _n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && _n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = null;
            }).promise();
          },
          promise: function promise(a) {
            return null != a ? _n.extend(a, d) : d;
          }
        },
        e = {};
      return d.pipe = d.then, _n.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && _n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : _n.Deferred(),
        h = function h(a, b, c) {
          return function (d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        },
        i,
        j,
        k;
      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && _n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  _n.fn.ready = function (a) {
    return _n.ready.promise().done(a), this;
  }, _n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? _n.readyWait++ : _n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --_n.readyWait : _n.isReady) || (_n.isReady = !0, a !== !0 && --_n.readyWait > 0 || (I.resolveWith(d, [_n]), _n.fn.triggerHandler && (_n(d).triggerHandler("ready"), _n(d).off("ready"))));
    }
  });
  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }
  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), _n.ready());
  }
  _n.ready.promise = function (b) {
    if (!I) if (I = _n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(_n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;
      try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}
      c && c.doScroll && !function f() {
        if (!_n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }
          J(), _n.ready();
        }
      }();
    }
    return I.promise(b);
  }, _n.ready.promise();
  var L;
  for (L in _n(l)) break;
  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, _n(function () {
    var a, b, c, e;
    c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");
    l.deleteExpando = !0;
    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }
    a = null;
  }();
  var M = function M(a) {
      var b = _n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    },
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? _n.parseJSON(c) : c;
        } catch (e) {}
        _n.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function Q(a) {
    var b;
    for (b in a) if (("data" !== b || !_n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function R(a, b, d, e) {
    if (M(a)) {
      var f,
        g,
        h = _n.expando,
        i = a.nodeType,
        j = i ? _n.cache : a,
        k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || _n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: _n.noop
      }), "object" != _typeof(b) && "function" != typeof b || (e ? j[k] = _n.extend(j[k], b) : j[k].data = _n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[_n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[_n.camelCase(b)])) : f = g, f;
    }
  }
  function S(a, b, c) {
    if (M(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? _n.cache : a,
        h = f ? a[_n.expando] : _n.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          _n.isArray(b) ? b = b.concat(_n.map(b, _n.camelCase)) : b in d ? b = [b] : (b = _n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          while (e--) delete d[b[e]];
          if (c ? !Q(d) : !_n.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, Q(g[h]))) && (f ? _n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }
  _n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? _n.cache[a[_n.expando]] : a[_n.expando], !!a && !Q(a);
    },
    data: function data(a, b, c) {
      return R(a, b, c);
    },
    removeData: function removeData(a, b) {
      return S(a, b);
    },
    _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    }
  }), _n.fn.extend({
    data: function data(a, b) {
      var c,
        d,
        e,
        f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = _n.data(f), 1 === f.nodeType && !_n._data(f, "parsedAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _n.camelCase(d.slice(5)), P(f, d, e[d])));
          _n._data(f, "parsedAttrs", !0);
        }
        return e;
      }
      return "object" == _typeof(a) ? this.each(function () {
        _n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        _n.data(this, a, b);
      }) : f ? P(f, a, _n.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        _n.removeData(this, a);
      });
    }
  }), _n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = _n._data(a, b), c && (!d || _n.isArray(c) ? d = _n._data(a, b, _n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";
      var c = _n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = _n._queueHooks(a, b),
        g = function g() {
          _n.dequeue(a, b);
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return _n._data(a, c) || _n._data(a, c, {
        empty: _n.Callbacks("once memory").add(function () {
          _n._removeData(a, b + "queue"), _n._removeData(a, c);
        })
      });
    }
  }), _n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = _n.queue(this, a, b);
        _n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        _n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
        d = 1,
        e = _n.Deferred(),
        f = this,
        g = this.length,
        h = function h() {
          --d || e.resolveWith(f, [f]);
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = _n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  }), function () {
    var a;
    l.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, e;
      return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
    V = ["Top", "Right", "Bottom", "Left"],
    W = function W(a, b) {
      return a = b || a, "none" === _n.css(a, "display") || !_n.contains(a.ownerDocument, a);
    };
  function X(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d ? function () {
        return d.cur();
      } : function () {
        return _n.css(a, b, "");
      },
      i = h(),
      j = c && c[3] || (_n.cssNumber[b] ? "" : "px"),
      k = (_n.cssNumber[b] || "px" !== j && +i) && U.exec(_n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, _n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }
  var _Y = function Y(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === _n.type(c)) {
        e = !0;
        for (h in c) _Y(a, b, h, c[h], !0, f, g);
      } else if (void 0 !== d && (e = !0, _n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
        return j.call(_n(a), c);
      })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    Z = /^(?:checkbox|radio)$/i,
    $ = /<([\w:-]+)/,
    _ = /^$|\/(?:java|ecma)script/i,
    aa = /^\s+/,
    ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ca(a) {
    var b = ba.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  !function () {
    var a = d.createElement("div"),
      b = d.createDocumentFragment(),
      c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[_n.expando] = 1, l.attributes = !a.getAttribute(_n.expando);
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
  function ea(a, b) {
    var c,
      d,
      e = 0,
      f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || _n.nodeName(d, b) ? f.push(d) : _n.merge(f, ea(d, b));
    return void 0 === b || b && _n.nodeName(a, b) ? _n.merge([a], f) : f;
  }
  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) _n._data(c, "globalEval", !b || _n._data(b[d], "globalEval"));
  }
  var ga = /<|&#?\w+;/,
    ha = /<tbody/i;
  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }
  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === _n.type(g)) _n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
      i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + _n.htmlPrefilter(g) + m[2], f = m[0];
      while (f--) i = i.lastChild;
      if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
        while (f--) _n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
      }
      _n.merge(q, i.childNodes), i.textContent = "";
      while (i.firstChild) i.removeChild(i.firstChild);
      i = p.lastChild;
    } else q.push(b.createTextNode(g));
    i && p.removeChild(i), l.appendChecked || _n.grep(ea(q, "input"), ia), r = 0;
    while (g = q[r++]) if (d && _n.inArray(g, d) > -1) e && e.push(g);else if (h = _n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
      f = 0;
      while (g = i[f++]) _.test(g.type || "") && c.push(g);
    }
    return i = null, p;
  }
  !function () {
    var b,
      c,
      e = d.createElement("div");
    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    e = null;
  }();
  var ka = /^(?:input|select|textarea)$/i,
    la = /^key/,
    ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    na = /^(?:focusinfocus|focusoutblur)$/,
    oa = /^([^.]*)(?:\.(.+)|)/;
  function pa() {
    return !0;
  }
  function qa() {
    return !1;
  }
  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function sa(a, b, c, d, e, f) {
    var g, h;
    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) sa(a, h, c, d, b[h], f);
      return a;
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return _n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = _n.guid++)), a.each(function () {
      _n.event.add(this, b, e, d, c);
    });
  }
  _n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = _n._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = _n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof _n || a && _n.event.triggered === a.type ? void 0 : _n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
        while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = _n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = _n.event.special[o] || {}, l = _n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && _n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), _n.event.global[o] = !0);
        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        o,
        p,
        q,
        r = _n.hasData(a) && _n._data(a);
      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = _n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
          while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
          i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || _n.removeEvent(a, o, r.handle), delete k[o]);
        } else for (o in k) _n.event.remove(a, o + b[j], c, d, !0);
        _n.isEmptyObject(k) && (delete r.handle, _n._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, e, f) {
      var g,
        h,
        i,
        j,
        l,
        m,
        o,
        p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + _n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[_n.expando] ? b : new _n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : _n.makeArray(c, [b]), l = _n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !_n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }
        o = 0;
        while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (_n._data(i, "events") || {})[b.type] && _n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !_n.isWindow(e)) {
          m = e[h], m && (e[h] = null), _n.event.triggered = q;
          try {
            e[q]();
          } catch (s) {}
          _n.event.triggered = void 0, m && (e[h] = m);
        }
        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = _n.event.fix(a);
      var b,
        c,
        d,
        f,
        g,
        h = [],
        i = e.call(arguments),
        j = (_n._data(this, "events") || {})[a.type] || [],
        k = _n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = _n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((_n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _n(e, this).index(i) > -1 : _n.find(e, this, null, [i]).length), d[e] && d.push(f);
        d.length && g.push({
          elem: i,
          handlers: d
        });
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[_n.expando]) return a;
      var b,
        c,
        e,
        f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new _n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
          e,
          f,
          g = b.button,
          h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return _n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return _n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c) {
      var d = _n.extend(new _n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      _n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, _n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, _n.Event = function (a, b) {
    return this instanceof _n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && _n.extend(this, b), this.timeStamp = a && a.timeStamp || _n.now(), void (this[_n.expando] = !0)) : new _n.Event(a, b);
  }, _n.Event.prototype = {
    constructor: _n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, _n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    _n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
          d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || _n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), l.submit || (_n.event.special.submit = {
    setup: function setup() {
      return _n.nodeName(this, "form") ? !1 : void _n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
          c = _n.nodeName(b, "input") || _n.nodeName(b, "button") ? _n.prop(b, "form") : void 0;
        c && !_n._data(c, "submit") && (_n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), _n._data(c, "submit", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && _n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function teardown() {
      return _n.nodeName(this, "form") ? !1 : void _n.event.remove(this, "._submit");
    }
  }), l.change || (_n.event.special.change = {
    setup: function setup() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (_n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), _n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), _n.event.simulate("change", this, a);
      })), !1) : void _n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !_n._data(b, "change") && (_n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || _n.event.simulate("change", this.parentNode, a);
        }), _n._data(b, "change", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function teardown() {
      return _n.event.remove(this, "._change"), !ka.test(this.nodeName);
    }
  }), l.focusin || _n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      _n.event.simulate(b, a.target, _n.event.fix(a));
    };
    _n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
          e = _n._data(d, b);
        e || d.addEventListener(a, c, !0), _n._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
          e = _n._data(d, b) - 1;
        e ? _n._data(d, b, e) : (d.removeEventListener(a, c, !0), _n._removeData(d, b));
      }
    };
  }), _n.fn.extend({
    on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == _typeof(a)) {
        for (e in a) this.off(e, b, a[e]);
        return this;
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        _n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        _n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? _n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
    ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
    va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    wa = /<script|<style|<link/i,
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /^true\/(.*)/,
    za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Aa = ca(d),
    Ba = Aa.appendChild(d.createElement("div"));
  function Ca(a, b) {
    return _n.nodeName(a, "table") && _n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function Da(a) {
    return a.type = (null !== _n.find.attr(a, "type")) + "/" + a.type, a;
  }
  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }
  function Fa(a, b) {
    if (1 === b.nodeType && _n.hasData(a)) {
      var c,
        d,
        e,
        f = _n._data(a),
        g = _n._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h) for (d = 0, e = h[c].length; e > d; d++) _n.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = _n.extend({}, g.data));
    }
  }
  function Ga(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[_n.expando]) {
        e = _n._data(b);
        for (d in e.events) _n.removeEvent(b, d, e.handle);
        b.removeAttribute(_n.expando);
      }
      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !_n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }
  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
      g,
      h,
      i,
      j,
      k,
      m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = _n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });
    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = _n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = _n.clone(g, !0, !0), h && _n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      if (h) for (j = i[i.length - 1].ownerDocument, _n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !_n._data(g, "globalEval") && _n.contains(j, g) && (g.src ? _n._evalUrl && _n._evalUrl(g.src) : _n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      k = e = null;
    }
    return a;
  }
  function Ia(a, b, c) {
    for (var d, e = b ? _n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || _n.cleanData(ea(d)), d.parentNode && (c && _n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    return a;
  }
  _n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = _n.contains(a.ownerDocument, a);
      if (l.html5Clone || _n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
      if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = _n.expando, j = _n.cache, k = l.attributes, m = _n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
        if (g.events) for (e in g.events) m[e] ? _n.event.remove(d, e) : _n.removeEvent(d, e, g.handle);
        j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
      }
    }
  }), _n.fn.extend({
    domManip: Ha,
    detach: function detach(a) {
      return Ia(this, a, !0);
    },
    remove: function remove(a) {
      return Ia(this, a);
    },
    text: function text(a) {
      return _Y(this, function (a) {
        return void 0 === a ? _n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && _n.cleanData(ea(a, !1));
        while (a.firstChild) a.removeChild(a.firstChild);
        a.options && _n.nodeName(a, "select") && (a.options.length = 0);
      }
      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return _n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return _Y(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = _n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_n.cleanData(ea(b, !1)), b.innerHTML = a);
            b = 0;
          } catch (e) {}
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        _n.inArray(this, a) < 0 && (_n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), _n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    _n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = _n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), _n(f[d])[b](c), g.apply(e, c.get());
      return this.pushStack(e);
    };
  });
  var Ja,
    Ka = {
      HTML: "block",
      BODY: "block"
    };
  function La(a, b) {
    var c = _n(b.createElement(a)).appendTo(b.body),
      d = _n.css(c[0], "display");
    return c.detach(), d;
  }
  function Ma(a) {
    var b = d,
      c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || _n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }
  var Na = /^margin/,
    Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
    Pa = function Pa(a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    },
    Qa = d.documentElement;
  !function () {
    var b,
      c,
      e,
      f,
      g,
      h,
      i = d.createElement("div"),
      j = d.createElement("div");
    if (j.style) {
      var _k = function _k() {
        var k,
          l,
          m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };
      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, _n.extend(l, {
        reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        },
        pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        },
        reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        }
      });
    }
  }();
  var Ra,
    Sa,
    Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || _n.contains(a.ownerDocument, a) || (g = _n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });
  function Ua(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }
  var Va = /alpha\([^)]*\)/i,
    Wa = /opacity\s*=\s*([^)]*)/i,
    Xa = /^(none|table(?!-c[ea]).+)/,
    Ya = new RegExp("^(" + T + ")(.*)$", "i"),
    Za = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    $a = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    _a = ["Webkit", "O", "Moz", "ms"],
    ab = d.createElement("div").style;
  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
      c = _a.length;
    while (c--) if (a = _a[c] + b, a in ab) return a;
  }
  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = _n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = _n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && _n._data(d, "olddisplay", e ? c : _n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= _n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= _n.css(a, "border" + V[f] + "Width", !0, e))) : (g += _n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += _n.css(a, "border" + V[f] + "Width", !0, e)));
    return g;
  }
  function fb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ra(a),
      g = l.boxSizing && "border-box" === _n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }
    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  _n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = _n.camelCase(b),
          i = a.style;
        if (b = _n.cssProps[h] || (_n.cssProps[h] = bb(h) || h), g = _n.cssHooks[b] || _n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (_n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
        f,
        g,
        h = _n.camelCase(b);
      return b = _n.cssProps[h] || (_n.cssProps[h] = bb(h) || h), g = _n.cssHooks[b] || _n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    }
  }), _n.each(["height", "width"], function (a, b) {
    _n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Xa.test(_n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === _n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), l.opacity || (_n.cssHooks.opacity = {
    get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = _n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === _n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    }
  }), _n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0;
  }), _n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (_n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), _n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    _n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        return e;
      }
    }, Na.test(a) || (_n.cssHooks[a + b].set = db);
  }), _n.fn.extend({
    css: function css(a, b) {
      return _Y(this, function (a, b, c) {
        var d,
          e,
          f = {},
          g = 0;
        if (_n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _n.css(a, b[g], !1, d);
          return f;
        }
        return void 0 !== c ? _n.style(a, b, c) : _n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return cb(this, !0);
    },
    hide: function hide() {
      return cb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? _n(this).show() : _n(this).hide();
      });
    }
  });
  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }
  _n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || _n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
        c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = _n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = _n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        _n.fx.step[a.prop] ? _n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[_n.cssProps[a.prop]] && !_n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : _n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, _n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, _n.fx = gb.prototype.init, _n.fx.step = {};
  var hb,
    ib,
    jb = /^(?:toggle|show|hide)$/,
    kb = /queueHooks$/;
  function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = _n.now();
  }
  function mb(a, b) {
    var c,
      d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d;
  }
  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }
  function ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      m = this,
      o = {},
      p = a.style,
      q = a.nodeType && W(a),
      r = _n._data(a, "fxshow");
    c.queue || (h = _n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, _n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = _n.css(a, "display"), k = "none" === j ? _n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === _n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));
    for (d in b) if (e = b[d], jb.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
        if ("show" !== e || !r || void 0 === r[d]) continue;
        q = !0;
      }
      o[d] = r && r[d] || _n.style(a, d);
    } else j = void 0;
    if (_n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = _n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? _n(a).show() : m.done(function () {
        _n(a).hide();
      }), m.done(function () {
        var b;
        _n._removeData(a, "fxshow");
        for (b in o) _n.style(a, b, o[b]);
      });
      for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }
  function pb(a, b) {
    var c, d, e, f, g;
    for (c in a) if (d = _n.camelCase(c), e = b[d], f = a[c], _n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _n.cssHooks[d], g && "expand" in g) {
      f = g.expand(f), delete a[d];
      for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }
  function qb(a, b, c) {
    var d,
      e,
      f = 0,
      g = qb.prefilters.length,
      h = _n.Deferred().always(function () {
        delete i.elem;
      }),
      i = function i() {
        if (e) return !1;
        for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      },
      j = h.promise({
        elem: a,
        props: _n.extend({}, b),
        opts: _n.extend(!0, {
          specialEasing: {},
          easing: _n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: hb || lb(),
        duration: c.duration,
        tweens: [],
        createTween: function createTween(b, c) {
          var d = _n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d;
        },
        stop: function stop(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
        }
      }),
      k = j.props;
    for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return _n.isFunction(d.stop) && (_n._queueHooks(j.elem, j.opts.queue).stop = _n.proxy(d.stop, d)), d;
    return _n.map(k, nb, j), _n.isFunction(j.opts.start) && j.opts.start.call(a, j), _n.fx.timer(_n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  _n.Animation = _n.extend(qb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return X(c.elem, a, U.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      _n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
      for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
    },
    prefilters: [ob],
    prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    }
  }), _n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? _n.extend({}, a) : {
      complete: c || !c && b || _n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !_n.isFunction(b) && b
    };
    return d.duration = _n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _n.fx.speeds ? _n.fx.speeds[d.duration] : _n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      _n.isFunction(d.old) && d.old.call(this), d.queue && _n.dequeue(this, d.queue);
    }, d;
  }, _n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = _n.isEmptyObject(a),
        f = _n.speed(b, c, d),
        g = function g() {
          var b = qb(this, _n.extend({}, a), f);
          (e || _n._data(this, "finish")) && b.stop(!0);
        };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
          e = null != a && a + "queueHooks",
          f = _n.timers,
          g = _n._data(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        !b && c || _n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
          c = _n._data(this),
          d = c[a + "queue"],
          e = c[a + "queueHooks"],
          f = _n.timers,
          g = d ? d.length : 0;
        for (c.finish = !0, _n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), _n.each(["toggle", "show", "hide"], function (a, b) {
    var c = _n.fn[b];
    _n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), _n.each({
    slideDown: mb("show"),
    slideUp: mb("hide"),
    slideToggle: mb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    _n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), _n.timers = [], _n.fx.tick = function () {
    var a,
      b = _n.timers,
      c = 0;
    for (hb = _n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    b.length || _n.fx.stop(), hb = void 0;
  }, _n.fx.timer = function (a) {
    _n.timers.push(a), a() ? _n.fx.start() : _n.timers.pop();
  }, _n.fx.interval = 13, _n.fx.start = function () {
    ib || (ib = a.setInterval(_n.fx.tick, _n.fx.interval));
  }, _n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, _n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, _n.fn.delay = function (b, c) {
    return b = _n.fx ? _n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);
      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
      b = d.createElement("input"),
      c = d.createElement("div"),
      e = d.createElement("select"),
      f = e.appendChild(d.createElement("option"));
    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();
  var rb = /\r/g,
    sb = /[\x20\t\r\n\f]+/g;
  _n.fn.extend({
    val: function val(a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length) return d = _n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, _n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _n.isArray(e) && (e = _n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = _n.valHooks[this.type] || _n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = _n.valHooks[e.type] || _n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), _n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = _n.find.attr(a, "value");
          return null != b ? b : _n.trim(_n.text(a)).replace(sb, " ");
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_n.nodeName(c.parentNode, "optgroup"))) {
            if (b = _n(c).val(), f) return b;
            g.push(b);
          }
          return g;
        },
        set: function set(a, b) {
          var c,
            d,
            e = a.options,
            f = _n.makeArray(b),
            g = e.length;
          while (g--) if (d = e[g], _n.inArray(_n.valHooks.option.get(d), f) > -1) try {
            d.selected = c = !0;
          } catch (h) {
            d.scrollHeight;
          } else d.selected = !1;
          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), _n.each(["radio", "checkbox"], function () {
    _n.valHooks[this] = {
      set: function set(a, b) {
        return _n.isArray(b) ? a.checked = _n.inArray(_n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (_n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var tb,
    ub,
    vb = _n.expr.attrHandle,
    wb = /^(?:checked|selected)$/i,
    xb = l.getSetAttribute,
    yb = l.input;
  _n.fn.extend({
    attr: function attr(a, b) {
      return _Y(this, _n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        _n.removeAttr(this, a);
      });
    }
  }), _n.extend({
    attr: function attr(a, b, c) {
      var d,
        e,
        f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? _n.prop(a, b, c) : (1 === f && _n.isXMLDoc(a) || (b = b.toLowerCase(), e = _n.attrHooks[b] || (_n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void _n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = _n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && _n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
        d,
        e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) d = _n.propFix[c] || c, _n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[_n.camelCase("default-" + c)] = a[d] = !1 : _n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
    }
  }), ub = {
    set: function set(a, b, c) {
      return b === !1 ? _n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && _n.propFix[c] || c, c) : a[_n.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, _n.each(_n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || _n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[_n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), yb && xb || (_n.attrHooks.value = {
    set: function set(a, b, c) {
      return _n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
    }
  }), xb || (tb = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, _n.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: tb.set
  }, _n.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c);
    }
  }, _n.each(["width", "height"], function (a, b) {
    _n.attrHooks[b] = {
      set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      }
    };
  })), l.style || (_n.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
    Ab = /^(?:a|area)$/i;
  _n.fn.extend({
    prop: function prop(a, b) {
      return _Y(this, _n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = _n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), _n.extend({
    prop: function prop(a, b, c) {
      var d,
        e,
        f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && _n.isXMLDoc(a) || (b = _n.propFix[b] || b, e = _n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = _n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || _n.each(["href", "src"], function (a, b) {
    _n.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), l.optSelected || (_n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    },
    set: function set(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), _n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    _n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (_n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;
  function Cb(a) {
    return _n.attr(a, "class") || "";
  }
  _n.fn.extend({
    addClass: function addClass(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (_n.isFunction(a)) return this.each(function (b) {
        _n(this).addClass(a.call(this, b, Cb(this)));
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
          g = 0;
          while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
          h = _n.trim(d), e !== h && _n.attr(c, "class", h);
        }
      }
      return this;
    },
    removeClass: function removeClass(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (_n.isFunction(a)) return this.each(function (b) {
        _n(this).removeClass(a.call(this, b, Cb(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++]) if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
          g = 0;
          while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
          h = _n.trim(d), e !== h && _n.attr(c, "class", h);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _n.isFunction(a) ? this.each(function (c) {
        _n(this).toggleClass(a.call(this, c, Cb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = _n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && _n._data(this, "__className__", b), _n.attr(this, "class", b || a === !1 ? "" : _n._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while (c = this[d++]) if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      return !1;
    }
  }), _n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    _n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), _n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Db = a.location,
    Eb = _n.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  _n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = _n.trim(b + "");
    return e && !_n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : _n.error("Invalid JSON: " + b);
  }, _n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || _n.error("Invalid XML: " + b), c;
  };
  var Hb = /#.*$/,
    Ib = /([?&])_=[^&]*/,
    Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Lb = /^(?:GET|HEAD)$/,
    Mb = /^\/\//,
    Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ob = {},
    Pb = {},
    Qb = "*/".concat("*"),
    Rb = Db.href,
    Sb = Nb.exec(Rb.toLowerCase()) || [];
  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
        e = 0,
        f = b.toLowerCase().match(G) || [];
      if (_n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }
  function Ub(a, b, c, d) {
    var e = {},
      f = a === Pb;
    function g(h) {
      var i;
      return e[h] = !0, _n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }
  function Vb(a, b) {
    var c,
      d,
      e = _n.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && _n.extend(!0, a, c), a;
  }
  function Wb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e) for (g in h) if (h[g] && h[g].test(e)) {
      i.unshift(g);
      break;
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Xb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break;
      }
      if (g !== !0) if (g && a["throws"]) b = g(b);else try {
        b = g(b);
      } catch (l) {
        return {
          state: "parsererror",
          error: g ? l : "No conversion from " + i + " to " + f
        };
      }
    }
    return {
      state: "success",
      data: b
    };
  }
  _n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": _n.parseJSON,
        "text xml": _n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Vb(Vb(a, _n.ajaxSettings), b) : Vb(_n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = _n.ajaxSetup({}, c),
        m = l.context || l,
        o = l.context && (m.nodeType || m.jquery) ? _n(m) : _n.event,
        p = _n.Deferred(),
        q = _n.Callbacks("once memory"),
        r = l.statusCode || {},
        s = {},
        t = {},
        u = 0,
        v = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(a) {
            var b;
            if (2 === u) {
              if (!k) {
                k = {};
                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2];
              }
              b = k[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return 2 === u ? g : null;
          },
          setRequestHeader: function setRequestHeader(a, b) {
            var c = a.toLowerCase();
            return u || (a = t[c] = t[c] || a, s[a] = b), this;
          },
          overrideMimeType: function overrideMimeType(a) {
            return u || (l.mimeType = a), this;
          },
          statusCode: function statusCode(a) {
            var b;
            if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];else w.always(a[w.status]);
            return this;
          },
          abort: function abort(a) {
            var b = a || v;
            return j && j.abort(b), y(0, b), this;
          }
        };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = _n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = _n.event && l.global, i && 0 === _n.active++ && _n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (_n.lastModified[f] && w.setRequestHeader("If-Modified-Since", _n.lastModified[f]), _n.etag[f] && w.setRequestHeader("If-None-Match", _n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";
      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) w[e](l[e]);
      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));
        try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");
      function y(b, c, d, e) {
        var k,
          s,
          t,
          v,
          x,
          y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (_n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (_n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --_n.active || _n.event.trigger("ajaxStop")));
      }
      return w;
    },
    getJSON: function getJSON(a, b, c) {
      return _n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return _n.get(a, void 0, b, "script");
    }
  }), _n.each(["get", "post"], function (a, b) {
    _n[b] = function (a, c, d, e) {
      return _n.isFunction(c) && (e = e || d, d = c, c = void 0), _n.ajax(_n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, _n.isPlainObject(a) && a));
    };
  }), _n._evalUrl = function (a) {
    return _n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, _n.fn.extend({
    wrapAll: function wrapAll(a) {
      if (_n.isFunction(a)) return this.each(function (b) {
        _n(this).wrapAll(a.call(this, b));
      });
      if (this[0]) {
        var b = _n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
          return a;
        }).append(this);
      }
      return this;
    },
    wrapInner: function wrapInner(a) {
      return _n.isFunction(a) ? this.each(function (b) {
        _n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = _n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = _n.isFunction(a);
      return this.each(function (c) {
        _n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        _n.nodeName(this, "body") || _n(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  function Yb(a) {
    return a.style && a.style.display || _n.css(a, "display");
  }
  function Zb(a) {
    if (!_n.contains(a.ownerDocument || d, a)) return !0;
    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  _n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
  }, _n.expr.filters.visible = function (a) {
    return !_n.expr.filters.hidden(a);
  };
  var $b = /%20/g,
    _b = /\[\]$/,
    ac = /\r?\n/g,
    bc = /^(?:submit|button|image|reset|file)$/i,
    cc = /^(?:input|select|textarea|keygen)/i;
  function dc(a, b, c, d) {
    var e;
    if (_n.isArray(b)) _n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== _n.type(b)) d(a, b);else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
  }
  _n.param = function (a, b) {
    var c,
      d = [],
      e = function e(a, b) {
        b = _n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
      };
    if (void 0 === b && (b = _n.ajaxSettings && _n.ajaxSettings.traditional), _n.isArray(a) || a.jquery && !_n.isPlainObject(a)) _n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) dc(c, a[c], b, e);
    return d.join("&").replace($b, "+");
  }, _n.fn.extend({
    serialize: function serialize() {
      return _n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = _n.prop(this, "elements");
        return a ? _n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !_n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = _n(this).val();
        return null == c ? null : _n.isArray(c) ? _n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        };
      }).get();
    }
  }), _n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;
  var ec = 0,
    fc = {},
    gc = _n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) fc[a](void 0, !0);
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && _n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;
      return {
        send: function send(d, e) {
          var f,
            g = b.xhr(),
            h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
          for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;
            if (_c && (d || 4 === g.readyState)) if (delete fc[h], _c = void 0, g.onreadystatechange = _n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
              try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }
              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = fc[h] = _c : _c();
        },
        abort: function abort() {
          _c && _c(void 0, !0);
        }
      };
    }
  });
  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  _n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function text_script(a) {
        return _n.globalEval(a), a;
      }
    }
  }), _n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), _n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
        c = d.head || _n("head")[0] || d.documentElement;
      return {
        send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var jc = [],
    kc = /(=)\?(?=&|$)|\?\?/;
  _n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = jc.pop() || _n.expando + "_" + Eb++;
      return this[a] = !0, a;
    }
  }), _n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
      f,
      g,
      h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || _n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? _n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && _n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), _n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && _n(f).remove(), _n.merge([], e.childNodes));
  };
  var lc = _n.fn.load;
  _n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = _n.trim(a.slice(h, a.length)), a = a.slice(0, h)), _n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && _n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? _n("<div>").append(_n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, _n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    _n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), _n.expr.filters.animated = function (a) {
    return _n.grep(_n.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  function mc(a) {
    return _n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }
  _n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = _n.css(a, "position"),
        l = _n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = _n.css(a, "top"), i = _n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && _n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _n.isFunction(b) && (b = b.call(a, c, _n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, _n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        _n.offset.setOffset(this, a, b);
      });
      var b,
        c,
        d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      if (f) return b = f.documentElement, _n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
          b,
          c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === _n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _n.nodeName(a[0], "html") || (c = a.offset()), c.top += _n.css(a[0], "borderTopWidth", !0), c.left += _n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - _n.css(d, "marginTop", !0),
          left: b.left - c.left - _n.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && !_n.nodeName(a, "html") && "static" === _n.css(a, "position")) a = a.offsetParent;
        return a || Qa;
      });
    }
  }), _n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);
    _n.fn[a] = function (d) {
      return _Y(this, function (a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? _n(f).scrollLeft() : e, c ? e : _n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), _n.each(["top", "left"], function (a, b) {
    _n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? _n(a).position()[b] + "px" : c) : void 0;
    });
  }), _n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    _n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      _n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return _Y(this, function (b, c, d) {
          var e;
          return _n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _n.css(b, c, g) : _n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), _n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), _n.fn.size = function () {
    return this.length;
  }, _n.fn.andSelf = _n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return _n;
  });
  var nc = a.jQuery,
    oc = a.$;
  return _n.noConflict = function (b) {
    return a.$ === _n && (a.$ = oc), b && a.jQuery === _n && (a.jQuery = nc), _n;
  }, b || (a.jQuery = a.$ = _n), _n;
});

/***/ }),

/***/ "./resources/assets/markedia/js/tether.min.js":
/*!****************************************************!*\
  !*** ./resources/assets/markedia/js/tether.min.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require, exports, module) : t.Tether = e();
}(undefined, function (t, e, o) {
  "use strict";

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function n(t) {
    var e = getComputedStyle(t) || {},
      o = e.position,
      i = [];
    if ("fixed" === o) return [t];
    for (var n = t; n = n.parentNode;) {
      var r = void 0;
      try {
        r = getComputedStyle(n);
      } catch (s) {}
      if ("undefined" == typeof r || null === r) return i.push(n), i;
      var a = r,
        f = a.overflow,
        h = a.overflowX,
        l = a.overflowY;
      /(auto|scroll)/.test(f + l + h) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n);
    }
    return i.push(document.body), i;
  }
  function r(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var o = e.documentElement,
      i = {},
      n = t.getBoundingClientRect();
    for (var r in n) i[r] = n[r];
    var s = x(e);
    return i.top -= s.top, i.left -= s.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }
  function s(t) {
    return t.offsetParent || document.documentElement;
  }
  function a() {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    f(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var o = t.offsetWidth;
    e.style.overflow = "scroll";
    var i = t.offsetWidth;
    o === i && (i = e.clientWidth), document.body.removeChild(e);
    var n = o - i;
    return {
      width: n,
      height: n
    };
  }
  function f() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
      e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var o in e) ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }), t;
  }
  function h(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
        i = u(t).replace(o, " ");
      p(t, i);
    }
  }
  function l(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      h(t, e);
      var o = u(t) + (" " + e);
      p(t, o);
    }
  }
  function d(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);
    var o = u(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
  }
  function u(t) {
    return t.className instanceof SVGAnimatedString ? t.className.baseVal : t.className;
  }
  function p(t, e) {
    t.setAttribute("class", e);
  }
  function c(t, e, o) {
    o.forEach(function (o) {
      -1 === e.indexOf(o) && d(t, o) && h(t, o);
    }), e.forEach(function (e) {
      d(t, e) || l(t, e);
    });
  }
  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function g(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + o >= e && e >= t - o;
  }
  function m() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
  }
  function v() {
    for (var t = {
        top: 0,
        left: 0
      }, e = arguments.length, o = Array(e), i = 0; e > i; i++) o[i] = arguments[i];
    return o.forEach(function (e) {
      var o = e.top,
        i = e.left;
      "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i;
    }), t;
  }
  function y(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }
  function b(t, e) {
    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
      var t = r(e),
        o = t,
        i = getComputedStyle(e);
      e = [o.left, o.top, t.width + o.left, t.height + o.top], U.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
      });
    }(), e;
  }
  var w = function () {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e;
      };
    }(),
    C = void 0;
  "undefined" == typeof C && (C = {
    modules: []
  });
  var O = function () {
      var t = 0;
      return function () {
        return ++t;
      };
    }(),
    E = {},
    x = function x(t) {
      var e = t._tetherZeroElement;
      "undefined" == typeof e && (e = t.createElement("div"), e.setAttribute("data-tether-id", O()), f(e.style, {
        top: 0,
        left: 0,
        position: "absolute"
      }), t.body.appendChild(e), t._tetherZeroElement = e);
      var o = e.getAttribute("data-tether-id");
      if ("undefined" == typeof E[o]) {
        E[o] = {};
        var i = e.getBoundingClientRect();
        for (var n in i) E[o][n] = i[n];
        T(function () {
          delete E[o];
        });
      }
      return E[o];
    },
    A = [],
    T = function T(t) {
      A.push(t);
    },
    S = function S() {
      for (var t = void 0; t = A.pop();) t();
    },
    W = function () {
      function t() {
        i(this, t);
      }
      return w(t, [{
        key: "on",
        value: function value(t, e, o) {
          var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
          "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
            handler: e,
            ctx: o,
            once: i
          });
        }
      }, {
        key: "once",
        value: function value(t, e, o) {
          this.on(t, e, o, !0);
        }
      }, {
        key: "off",
        value: function value(t, e) {
          if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
        }
      }, {
        key: "trigger",
        value: function value(t) {
          if ("undefined" != typeof this.bindings && this.bindings[t]) {
            for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; o > n; n++) i[n - 1] = arguments[n];
            for (; e < this.bindings[t].length;) {
              var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                h = a;
              "undefined" == typeof h && (h = this), s.apply(h, i), f ? this.bindings[t].splice(e, 1) : ++e;
            }
          }
        }
      }]), t;
    }();
  C.Utils = {
    getScrollParents: n,
    getBounds: r,
    getOffsetParent: s,
    extend: f,
    addClass: l,
    removeClass: h,
    hasClass: d,
    updateClasses: c,
    defer: T,
    flush: S,
    uniqueId: O,
    Evented: W,
    getScrollBarSize: a
  };
  var M = function () {
      function t(t, e) {
        var o = [],
          i = !0,
          n = !1,
          r = void 0;
        try {
          for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
        } catch (f) {
          n = !0, r = f;
        } finally {
          try {
            !i && a["return"] && a["return"]();
          } finally {
            if (n) throw r;
          }
        }
        return o;
      }
      return function (e, o) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    w = function () {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e;
      };
    }();
  if ("undefined" == typeof C) throw new Error("You must include the utils.js file before tether.js");
  var P = C.Utils,
    n = P.getScrollParents,
    r = P.getBounds,
    s = P.getOffsetParent,
    f = P.extend,
    l = P.addClass,
    h = P.removeClass,
    c = P.updateClasses,
    T = P.defer,
    S = P.flush,
    a = P.getScrollBarSize,
    k = function () {
      if ("undefined" == typeof document) return "";
      for (var t = document.createElement("div"), e = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
        var i = e[o];
        if (void 0 !== t.style[i]) return i;
      }
    }(),
    B = [],
    _ = function _() {
      B.forEach(function (t) {
        t.position(!1);
      }), S();
    };
  !function () {
    var t = null,
      e = null,
      o = null,
      i = function n() {
        return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(n, 250))) : void ("undefined" != typeof t && m() - t < 10 || ("undefined" != typeof o && (clearTimeout(o), o = null), t = m(), _(), e = m() - t));
      };
    "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, i);
    });
  }();
  var z = {
      center: "center",
      left: "right",
      right: "left"
    },
    L = {
      middle: "middle",
      top: "bottom",
      bottom: "top"
    },
    Y = {
      top: 0,
      left: 0,
      middle: "50%",
      center: "50%",
      bottom: "100%",
      right: "100%"
    },
    H = function H(t, e) {
      var o = t.left,
        i = t.top;
      return "auto" === o && (o = z[e.left]), "auto" === i && (i = L[e.top]), {
        left: o,
        top: i
      };
    },
    F = function F(t) {
      var e = t.left,
        o = t.top;
      return "undefined" != typeof Y[t.left] && (e = Y[t.left]), "undefined" != typeof Y[t.top] && (o = Y[t.top]), {
        left: e,
        top: o
      };
    },
    X = function X(t) {
      var e = t.split(" "),
        o = M(e, 2),
        i = o[0],
        n = o[1];
      return {
        top: i,
        left: n
      };
    },
    j = X,
    N = function () {
      function t(e) {
        var o = this;
        i(this, t), this.position = this.position.bind(this), B.push(this), this.history = [], this.setOptions(e, !1), C.modules.forEach(function (t) {
          "undefined" != typeof t.initialize && t.initialize.call(o);
        }), this.position();
      }
      return w(t, [{
        key: "getClass",
        value: function value() {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
          return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
        }
      }, {
        key: "setOptions",
        value: function value(t) {
          var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
            i = {
              offset: "0 0",
              targetOffset: "0 0",
              targetAttachment: "auto auto",
              classPrefix: "tether"
            };
          this.options = f(i, t);
          var r = this.options,
            s = r.element,
            a = r.target,
            h = r.targetModifier;
          if (this.element = s, this.target = a, this.targetModifier = h, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
          }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
          this.targetAttachment = j(this.options.targetAttachment), this.attachment = j(this.options.attachment), this.offset = X(this.options.offset), this.targetOffset = X(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = n(this.target), this.options.enabled !== !1 && this.enable(o);
        }
      }, {
        key: "getTargetBounds",
        value: function value() {
          if ("undefined" == typeof this.targetModifier) return r(this.target);
          if ("visible" === this.targetModifier) {
            if (this.target === document.body) return {
              top: pageYOffset,
              left: pageXOffset,
              height: innerHeight,
              width: innerWidth
            };
            var t = r(this.target),
              e = {
                height: t.height,
                width: t.width,
                top: t.top,
                left: t.left
              };
            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
          }
          if ("scroll-handle" === this.targetModifier) {
            var t = void 0,
              o = this.target;
            o === document.body ? (o = document.documentElement, t = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            }) : t = r(o);
            var i = getComputedStyle(o),
              n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              s = 0;
            n && (s = 15);
            var a = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - s,
              e = {
                width: 15,
                height: .975 * a * (a / o.scrollHeight),
                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
              },
              f = 0;
            408 > a && this.target === document.body && (f = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
            var h = this.target.scrollTop / (o.scrollHeight - a);
            return e.top = h * (a - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
          }
        }
      }, {
        key: "clearCache",
        value: function value() {
          this._cache = {};
        }
      }, {
        key: "cache",
        value: function value(t, e) {
          return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
        }
      }, {
        key: "enable",
        value: function value() {
          var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
          this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
            e !== document && e.addEventListener("scroll", t.position);
          }), e && this.position();
        }
      }, {
        key: "disable",
        value: function value() {
          var t = this;
          h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.position);
          });
        }
      }, {
        key: "destroy",
        value: function value() {
          var t = this;
          this.disable(), B.forEach(function (e, o) {
            return e === t ? void B.splice(o, 1) : void 0;
          });
        }
      }, {
        key: "updateAttachClasses",
        value: function value(t, e) {
          var o = this;
          t = t || this.attachment, e = e || this.targetAttachment;
          var i = ["left", "top", "bottom", "right", "middle", "center"];
          "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
          var n = this._addAttachClasses;
          t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
          var r = [];
          i.forEach(function (t) {
            r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
          }), T(function () {
            "undefined" != typeof o._addAttachClasses && (c(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && c(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
          });
        }
      }, {
        key: "position",
        value: function value() {
          var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
          if (this.enabled) {
            this.clearCache();
            var o = H(this.targetAttachment, this.attachment);
            this.updateAttachClasses(this.attachment, o);
            var i = this.cache("element-bounds", function () {
                return r(t.element);
              }),
              n = i.width,
              f = i.height;
            if (0 === n && 0 === f && "undefined" != typeof this.lastSize) {
              var h = this.lastSize;
              n = h.width, f = h.height;
            } else this.lastSize = {
              width: n,
              height: f
            };
            var l = this.cache("target-bounds", function () {
                return t.getTargetBounds();
              }),
              d = l,
              u = y(F(this.attachment), {
                width: n,
                height: f
              }),
              p = y(F(o), d),
              c = y(this.offset, {
                width: n,
                height: f
              }),
              g = y(this.targetOffset, d);
            u = v(u, c), p = v(p, g);
            for (var m = l.left + p.left - u.left, b = l.top + p.top - u.top, w = 0; w < C.modules.length; ++w) {
              var O = C.modules[w],
                E = O.position.call(this, {
                  left: m,
                  top: b,
                  targetAttachment: o,
                  targetPos: l,
                  elementPos: i,
                  offset: u,
                  targetOffset: p,
                  manualOffset: c,
                  manualTargetOffset: g,
                  scrollbarSize: A,
                  attachment: this.attachment
                });
              if (E === !1) return !1;
              "undefined" != typeof E && "object" == _typeof(E) && (b = E.top, m = E.left);
            }
            var x = {
                page: {
                  top: b,
                  left: m
                },
                viewport: {
                  top: b - pageYOffset,
                  bottom: pageYOffset - b - f + innerHeight,
                  left: m - pageXOffset,
                  right: pageXOffset - m - n + innerWidth
                }
              },
              A = void 0;
            return document.body.scrollWidth > window.innerWidth && (A = this.cache("scrollbar-size", a), x.viewport.bottom -= A.height), document.body.scrollHeight > window.innerHeight && (A = this.cache("scrollbar-size", a), x.viewport.right -= A.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom = document.body.scrollHeight - b - f, x.page.right = document.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
              var e = t.cache("target-offsetparent", function () {
                  return s(t.target);
                }),
                o = t.cache("target-offsetparent-bounds", function () {
                  return r(e);
                }),
                i = getComputedStyle(e),
                n = o,
                a = {};
              if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                a[t.toLowerCase()] = parseFloat(i["border" + t + "Width"]);
              }), o.right = document.body.scrollWidth - o.left - n.width + a.right, o.bottom = document.body.scrollHeight - o.top - n.height + a.bottom, x.page.top >= o.top + a.top && x.page.bottom >= o.bottom && x.page.left >= o.left + a.left && x.page.right >= o.right) {
                var f = e.scrollTop,
                  h = e.scrollLeft;
                x.offset = {
                  top: x.page.top - o.top + f - a.top,
                  left: x.page.left - o.left + h - a.left
                };
              }
            }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), e && S(), !0;
          }
        }
      }, {
        key: "move",
        value: function value(t) {
          var e = this;
          if ("undefined" != typeof this.element.parentNode) {
            var o = {};
            for (var i in t) {
              o[i] = {};
              for (var n in t[i]) {
                for (var r = !1, a = 0; a < this.history.length; ++a) {
                  var h = this.history[a];
                  if ("undefined" != typeof h[i] && !g(h[i][n], t[i][n])) {
                    r = !0;
                    break;
                  }
                }
                r || (o[i][n] = !0);
              }
            }
            var l = {
                top: "",
                left: "",
                right: "",
                bottom: ""
              },
              d = function d(t, o) {
                var i = "undefined" != typeof e.options.optimizations,
                  n = i ? e.options.optimizations.gpu : null;
                if (n !== !1) {
                  var r = void 0,
                    s = void 0;
                  t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[k] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== k && (l[k] += " translateZ(0)");
                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
              },
              u = !1;
            if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
              l.position = "absolute";
              var i = e.cache("target-offsetparent", function () {
                return s(e.target);
              });
              s(e.element) !== i && T(function () {
                e.element.parentNode.removeChild(e.element), i.appendChild(e.element);
              }), d(o.offset, t.offset), u = !0;
            }() : (l.position = "absolute", d({
              top: !0,
              left: !0
            }, t.page)), !u) {
              for (var p = !0, c = this.element.parentNode; c && "BODY" !== c.tagName;) {
                if ("static" !== getComputedStyle(c).position) {
                  p = !1;
                  break;
                }
                c = c.parentNode;
              }
              p || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element));
            }
            var m = {},
              v = !1;
            for (var n in l) {
              var y = l[n],
                b = this.element.style[n];
              b !== y && (v = !0, m[n] = y);
            }
            v && T(function () {
              f(e.element.style, m);
            });
          }
        }
      }]), t;
    }();
  N.modules = [], C.position = _;
  var R = f(N, C),
    M = function () {
      function t(t, e) {
        var o = [],
          i = !0,
          n = !1,
          r = void 0;
        try {
          for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
        } catch (f) {
          n = !0, r = f;
        } finally {
          try {
            !i && a["return"] && a["return"]();
          } finally {
            if (n) throw r;
          }
        }
        return o;
      }
      return function (e, o) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    P = C.Utils,
    r = P.getBounds,
    f = P.extend,
    c = P.updateClasses,
    T = P.defer,
    U = ["left", "top", "right", "bottom"];
  C.modules.push({
    position: function position(t) {
      var e = this,
        o = t.top,
        i = t.left,
        n = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var s = this.cache("element-bounds", function () {
          return r(e.element);
        }),
        a = s.height,
        h = s.width;
      if (0 === h && 0 === a && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;
        h = l.width, a = l.height;
      }
      var d = this.cache("target-bounds", function () {
          return e.getTargetBounds();
        }),
        u = d.height,
        p = d.width,
        g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
          o = t.pinnedClass;
        e && g.push(e), o && g.push(o);
      }), g.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          g.push(t + "-" + e);
        });
      });
      var m = [],
        v = f({}, n),
        y = f({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
          s = t.attachment,
          f = t.pin;
        "undefined" == typeof s && (s = "");
        var l = void 0,
          d = void 0;
        if (s.indexOf(" ") >= 0) {
          var c = s.split(" "),
            g = M(c, 2);
          d = g[0], l = g[1];
        } else l = d = s;
        var w = b(e, r);
        ("target" === d || "both" === d) && (o < w[1] && "top" === v.top && (o += u, v.top = "bottom"), o + a > w[3] && "bottom" === v.top && (o -= u, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < w[1] ? (o += u, v.top = "bottom", o += a, y.top = "top") : "top" === y.top && o + a > w[3] && o - (a - u) >= w[1] && (o -= a - u, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + a > w[3] ? (o -= u, v.top = "top", o -= a, y.top = "bottom") : "bottom" === y.top && o < w[1] && o + (2 * a - u) <= w[3] && (o += a - u, v.top = "top", y.top = "top")), "middle" === v.top && (o + a > w[3] && "top" === y.top ? (o -= a, y.top = "bottom") : o < w[1] && "bottom" === y.top && (o += a, y.top = "top"))), ("target" === l || "both" === l) && (i < w[0] && "left" === v.left && (i += p, v.left = "right"), i + h > w[2] && "right" === v.left && (i -= p, v.left = "left")), "together" === l && (i < w[0] && "left" === v.left ? "right" === y.left ? (i += p, v.left = "right", i += h, y.left = "left") : "left" === y.left && (i += p, v.left = "right", i -= h, y.left = "right") : i + h > w[2] && "right" === v.left ? "left" === y.left ? (i -= p, v.left = "left", i -= h, y.left = "right") : "right" === y.left && (i -= p, v.left = "left", i += h, y.left = "left") : "center" === v.left && (i + h > w[2] && "left" === y.left ? (i -= h, y.left = "right") : i < w[0] && "right" === y.left && (i += h, y.left = "left"))), ("element" === d || "both" === d) && (o < w[1] && "bottom" === y.top && (o += a, y.top = "top"), o + a > w[3] && "top" === y.top && (o -= a, y.top = "bottom")), ("element" === l || "both" === l) && (i < w[0] && ("right" === y.left ? (i += h, y.left = "left") : "center" === y.left && (i += h / 2, y.left = "left")), i + h > w[2] && ("left" === y.left ? (i -= h, y.left = "right") : "center" === y.left && (i -= h / 2, y.left = "right"))), "string" == typeof f ? f = f.split(",").map(function (t) {
          return t.trim();
        }) : f === !0 && (f = ["top", "left", "right", "bottom"]), f = f || [];
        var C = [],
          O = [];
        o < w[1] && (f.indexOf("top") >= 0 ? (o = w[1], C.push("top")) : O.push("top")), o + a > w[3] && (f.indexOf("bottom") >= 0 ? (o = w[3] - a, C.push("bottom")) : O.push("bottom")), i < w[0] && (f.indexOf("left") >= 0 ? (i = w[0], C.push("left")) : O.push("left")), i + h > w[2] && (f.indexOf("right") >= 0 ? (i = w[2] - h, C.push("right")) : O.push("right")), C.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), C.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), O.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), O.forEach(function (e) {
            m.push(t + "-" + e);
          });
        }(), (C.indexOf("left") >= 0 || C.indexOf("right") >= 0) && (y.left = v.left = !1), (C.indexOf("top") >= 0 || C.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== n.top || v.left !== n.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && e.updateAttachClasses(y, v);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, m, g), c(e.element, m, g);
      }), {
        top: o,
        left: i
      };
    }
  });
  var P = C.Utils,
    r = P.getBounds,
    c = P.updateClasses,
    T = P.defer;
  C.modules.push({
    position: function position(t) {
      var e = this,
        o = t.top,
        i = t.left,
        n = this.cache("element-bounds", function () {
          return r(e.element);
        }),
        s = n.height,
        a = n.width,
        f = this.getTargetBounds(),
        h = o + s,
        l = i + a,
        d = [];
      o <= f.bottom && h >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];
        (e === i || e === l) && d.push(t);
      }), i <= f.right && l >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];
        (e === o || e === h) && d.push(t);
      });
      var u = [],
        p = [],
        g = ["left", "top", "right", "bottom"];
      return u.push(this.getClass("abutted")), g.forEach(function (t) {
        u.push(e.getClass("abutted") + "-" + t);
      }), d.length && p.push(this.getClass("abutted")), d.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t);
      }), T(function () {
        e.options.addTargetClasses !== !1 && c(e.target, p, u), c(e.element, p, u);
      }), !0;
    }
  });
  var M = function () {
    function t(t, e) {
      var o = [],
        i = !0,
        n = !1,
        r = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
      } catch (f) {
        n = !0, r = f;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (n) throw r;
        }
      }
      return o;
    }
    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  return C.modules.push({
    position: function position(t) {
      var e = t.top,
        o = t.left;
      if (this.options.shift) {
        var i = this.options.shift;
        "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
          top: e,
          left: o
        }));
        var n = void 0,
          r = void 0;
        if ("string" == typeof i) {
          i = i.split(" "), i[1] = i[1] || i[0];
          var s = i,
            a = M(s, 2);
          n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10);
        } else n = i.top, r = i.left;
        return e += n, o += r, {
          top: e,
          left: o
        };
      }
    }
  }), R;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/assets/markedia/js/jquery.min.js"), __webpack_exec__("./resources/assets/markedia/js/tether.min.js"), __webpack_exec__("./resources/assets/markedia/js/animate.js"), __webpack_exec__("./resources/assets/markedia/js/bootstrap.js"), __webpack_exec__("./resources/assets/markedia/js/custom.js"));
/******/ }
]);
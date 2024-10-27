(self["webpackChunk"] = self["webpackChunk"] || []).push([["/assets/admin/js/vendor"],{

/***/ "./node_modules/@toast-ui/editor/dist/toastui-editor-viewer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@toast-ui/editor/dist/toastui-editor-viewer.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * @toast-ui/editor
 * @version 3.2.2 | Fri Feb 17 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! prosemirror-inputrules */ "./node_modules/prosemirror-inputrules/dist/index.cjs"), __webpack_require__(/*! prosemirror-keymap */ "./node_modules/prosemirror-keymap/dist/index.cjs"), __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.cjs"), __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.cjs"), __webpack_require__(/*! prosemirror-view */ "./node_modules/prosemirror-view/dist/index.cjs"));
	else {}
})(self, function(__WEBPACK_EXTERNAL_MODULE__479__, __WEBPACK_EXTERNAL_MODULE__481__, __WEBPACK_EXTERNAL_MODULE__43__, __WEBPACK_EXTERNAL_MODULE__814__, __WEBPACK_EXTERNAL_MODULE__311__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 368:
/***/ (function(module) {

/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */

(function (global, factory) {
    true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */
  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.3.3';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;


    var ElementPrototype = Element.prototype;

    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);

    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;

    /* Parsing of strict XHTML documents */
    var PARSER_MEDIA_TYPE = void 0;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc = void 0;

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;

      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? function (x) {
        return x;
      } : stringToLowerCase;

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    var ALL_SVG_TAGS = addToSet({}, svg);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);

    var ALL_MATHML_TAGS = addToSet({}, mathMl);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element);

      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }

        // The only way to switch from MathML to SVG is via
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }

        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }

        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }

        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erronously deleted from
        // HTML namespace.
        var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
      }

      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG or MathML). Return false just in case.
      return false;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);

      // We void attribute values for unremovable "is"" attributes
      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml') {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = transformCaseFunc(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Mitigate a problem with templates inside select */
      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = transformCaseFunc(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ 928:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_57109__) {

"use strict";
/* eslint-disable complexity */
/**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __nested_webpack_require_57109__(322);

/**
 * @module array
 */

/**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * // ES6
 * import inArray from 'tui-code-snippet/array/inArray';
 * 
 * // CommonJS
 * const inArray = require('tui-code-snippet/array/inArray');
 *
 * const arr = ['one', 'two', 'three', 'four'];
 * const idx1 = inArray('one', arr, 3); // -1
 * const idx2 = inArray('one', arr); // 0
 */
function inArray(searchElement, array, startIndex) {
  var i;
  var length;
  startIndex = startIndex || 0;

  if (!isArray(array)) {
    return -1;
  }

  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf.call(array, searchElement, startIndex);
  }

  length = array.length;
  for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

module.exports = inArray;


/***/ }),

/***/ 690:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_58838__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __nested_webpack_require_58838__(322);
var forEachArray = __nested_webpack_require_58838__(893);
var forEachOwnProperties = __nested_webpack_require_58838__(956);

/**
 * @module collection
 */

/**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEach from 'tui-code-snippet/collection/forEach'; 
 * 
 * // CommonJS
 * const forEach = require('tui-code-snippet/collection/forEach'); 
 *
 * let sum = 0;
 *
 * forEach([1,2,3], function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * const array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *   sum += value;
 * });
 */
function forEach(obj, iteratee, context) {
  if (isArray(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}

module.exports = forEach;


/***/ }),

/***/ 893:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEachArray from 'tui-code-snippet/collection/forEachArray';
 * 
 * // CommonJS
 * const forEachArray = require('tui-code-snippet/collection/forEachArray'); 
 *
 * let sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 */
function forEachArray(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;

  context = context || null;

  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}

module.exports = forEachArray;


/***/ }),

/***/ 956:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
 * 
 * // CommonJS
 * const forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); 
 *
 * let sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 */
function forEachOwnProperties(obj, iteratee, context) {
  var key;

  context = context || null;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}

module.exports = forEachOwnProperties;


/***/ }),

/***/ 990:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_63561__) {

"use strict";
/**
 * @fileoverview Transform the Array-like object to Array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachArray = __nested_webpack_require_63561__(893);

/**
 * Transform the Array-like object to Array.
 * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
 * @param {*} arrayLike Array-like object
 * @returns {Array} Array
 * @memberof module:collection
 * @example
 * // ES6
 * import toArray from 'tui-code-snippet/collection/toArray'; 
 * 
 * // CommonJS
 * const toArray = require('tui-code-snippet/collection/toArray'); 
 *
 * const arrayLike = {
 *   0: 'one',
 *   1: 'two',
 *   2: 'three',
 *   3: 'four',
 *   length: 4
 * };
 * const result = toArray(arrayLike);
 *
 * alert(result instanceof Array); // true
 * alert(result); // one,two,three,four
 */
function toArray(arrayLike) {
  var arr;
  try {
    arr = Array.prototype.slice.call(arrayLike);
  } catch (e) {
    arr = [];
    forEachArray(arrayLike, function(value) {
      arr.push(value);
    });
  }

  return arr;
}

module.exports = toArray;


/***/ }),

/***/ 755:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */
function safeEvent(element, type) {
  var events = element[EVENT_KEY];
  var handlers;

  if (!events) {
    events = element[EVENT_KEY] = {};
  }

  handlers = events[type];
  if (!handlers) {
    handlers = events[type] = [];
  }

  return handlers;
}

module.exports = safeEvent;


/***/ }),

/***/ 349:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_65445__) {

"use strict";
/**
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __nested_webpack_require_65445__(758);
var forEach = __nested_webpack_require_65445__(690);

var safeEvent = __nested_webpack_require_65445__(755);

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {function} [handler] - handler function
 * @memberof module:domEvent
 * @example
 * // Following the example of domEvent#on
 * 
 * // Unbind one event from an element.
 * off(div, 'click', toggle);
 * 
 * // Unbind multiple events with a same handler from multiple elements at once.
 * // Use event names splitted by a space.
 * off(element, 'mouseenter mouseleave', changeColor);
 * 
 * // Unbind multiple events with different handlers from an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * off(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Unbind events without handlers.
 * off(div, 'drag');
 */
function off(element, types, handler) {
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      unbindEvent(element, type, handler);
    });

    return;
  }

  forEach(types, function(func, type) {
    unbindEvent(element, type, func);
  });
}

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {string} type - events name
 * @param {function} [handler] - handler function
 * @private
 */
function unbindEvent(element, type, handler) {
  var events = safeEvent(element, type);
  var index;

  if (!handler) {
    forEach(events, function(item) {
      removeHandler(element, type, item.wrappedHandler);
    });
    events.splice(0, events.length);
  } else {
    forEach(events, function(item, idx) {
      if (handler === item.handler) {
        removeHandler(element, type, item.wrappedHandler);
        index = idx;

        return false;
      }

      return true;
    });
    events.splice(index, 1);
  }
}

/**
 * Remove an event handler
 * @param {HTMLElement} element - An element to remove an event
 * @param {string} type - event type
 * @param {function} handler - event handler
 * @private
 */
function removeHandler(element, type, handler) {
  if ('removeEventListener' in element) {
    element.removeEventListener(type, handler);
  } else if ('detachEvent' in element) {
    element.detachEvent('on' + type, handler);
  }
}

module.exports = off;


/***/ }),

/***/ 348:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_68232__) {

"use strict";
/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __nested_webpack_require_68232__(758);
var forEach = __nested_webpack_require_68232__(690);

var safeEvent = __nested_webpack_require_68232__(755);

/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * const div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * const name = 'global';
 * const repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *   console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */
function on(element, types, handler, context) {
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      bindEvent(element, type, handler, context);
    });

    return;
  }

  forEach(types, function(func, type) {
    bindEvent(element, type, func, handler);
  });
}

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */
function bindEvent(element, type, handler, context) {
  /**
     * Event handler
     * @param {Event} e - event object
     */
  function eventHandler(e) {
    handler.call(context || element, e || window.event);
  }

  if ('addEventListener' in element) {
    element.addEventListener(type, eventHandler);
  } else if ('attachEvent' in element) {
    element.attachEvent('on' + type, eventHandler);
  }
  memorizeHandler(element, type, handler, eventHandler);
}

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */
function memorizeHandler(element, type, handler, wrappedHandler) {
  var events = safeEvent(element, type);
  var existInEvents = false;

  forEach(events, function(obj) {
    if (obj.handler === handler) {
      existInEvents = true;

      return false;
    }

    return true;
  });

  if (!existInEvents) {
    events.push({
      handler: handler,
      wrappedHandler: wrappedHandler
    });
  }
}

module.exports = on;


/***/ }),

/***/ 24:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_71515__) {

"use strict";
/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __nested_webpack_require_71515__(322);
var isUndefined = __nested_webpack_require_71515__(929);

/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */
function setClassName(element, cssClass) {
  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  if (isUndefined(element.className.baseVal)) {
    element.className = cssClass;

    return;
  }

  element.className.baseVal = cssClass;
}

module.exports = setClassName;


/***/ }),

/***/ 204:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_72332__) {

"use strict";
/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEach = __nested_webpack_require_72332__(690);
var inArray = __nested_webpack_require_72332__(928);
var getClass = __nested_webpack_require_72332__(902);
var setClassName = __nested_webpack_require_72332__(24);

/**
 * domUtil module
 * @module domUtil
 */

/**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */
function addClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var newClass = [];
  var origin;

  if (classList) {
    forEach(cssClass, function(name) {
      element.classList.add(name);
    });

    return;
  }

  origin = getClass(element);

  if (origin) {
    cssClass = [].concat(origin.split(/\s+/), cssClass);
  }

  forEach(cssClass, function(cls) {
    if (inArray(cls, newClass) < 0) {
      newClass.push(cls);
    }
  });

  setClassName(element, newClass);
}

module.exports = addClass;


/***/ }),

/***/ 522:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_73512__) {

"use strict";
/**
 * @fileoverview Setting element style
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __nested_webpack_require_73512__(758);
var forEach = __nested_webpack_require_73512__(690);

/**
 * Setting element style
 * @param {(HTMLElement|SVGElement)} element - element to setting style
 * @param {(string|object)} key - style prop name or {prop: value} pair object
 * @param {string} [value] - style value
 * @memberof module:domUtil
 */
function css(element, key, value) {
  var style = element.style;

  if (isString(key)) {
    style[key] = value;

    return;
  }

  forEach(key, function(v, k) {
    style[k] = v;
  });
}

module.exports = css;


/***/ }),

/***/ 902:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_74279__) {

"use strict";
/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __nested_webpack_require_74279__(929);

/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */
function getClass(element) {
  if (!element || !element.className) {
    return '';
  }

  if (isUndefined(element.className.baseVal)) {
    return element.className;
  }

  return element.className.baseVal;
}

module.exports = getClass;


/***/ }),

/***/ 714:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_74973__) {

"use strict";
/**
 * @fileoverview Check element has specific css class
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inArray = __nested_webpack_require_74973__(928);
var getClass = __nested_webpack_require_74973__(902);

/**
 * Check element has specific css class
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {string} cssClass - css class
 * @returns {boolean}
 * @memberof module:domUtil
 */
function hasClass(element, cssClass) {
  var origin;

  if (element.classList) {
    return element.classList.contains(cssClass);
  }

  origin = getClass(element).split(/\s+/);

  return inArray(cssClass, origin) > -1;
}

module.exports = hasClass;


/***/ }),

/***/ 471:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_75740__) {

"use strict";
/**
 * @fileoverview Check element match selector
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inArray = __nested_webpack_require_75740__(928);
var toArray = __nested_webpack_require_75740__(990);

var elProto = Element.prototype;
var matchSelector = elProto.matches ||
    elProto.webkitMatchesSelector ||
    elProto.mozMatchesSelector ||
    elProto.msMatchesSelector ||
    function(selector) {
      var doc = this.document || this.ownerDocument;

      return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
    };

/**
 * Check element match selector
 * @param {HTMLElement} element - element to check
 * @param {string} selector - selector to check
 * @returns {boolean} is selector matched to element?
 * @memberof module:domUtil
 */
function matches(element, selector) {
  return matchSelector.call(element, selector);
}

module.exports = matches;


/***/ }),

/***/ 462:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_76721__) {

"use strict";
/**
 * @fileoverview Remove css class from element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachArray = __nested_webpack_require_76721__(893);
var inArray = __nested_webpack_require_76721__(928);
var getClass = __nested_webpack_require_76721__(902);
var setClassName = __nested_webpack_require_76721__(24);

/**
 * Remove css class from element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to remove
 * @memberof module:domUtil
 */
function removeClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var origin, newClass;

  if (classList) {
    forEachArray(cssClass, function(name) {
      classList.remove(name);
    });

    return;
  }

  origin = getClass(element).split(/\s+/);
  newClass = [];
  forEachArray(origin, function(name) {
    if (inArray(name, cssClass) < 0) {
      newClass.push(name);
    }
  });

  setClassName(element, newClass);
}

module.exports = removeClass;


/***/ }),

/***/ 969:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module object
 */

/**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */
function extend(target, objects) { // eslint-disable-line no-unused-vars
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i, len;

  for (i = 1, len = arguments.length; i < len; i += 1) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

module.exports = extend;


/***/ }),

/***/ 254:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_78685__) {

"use strict";
/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachOwnProperties = __nested_webpack_require_78685__(956);

/**
 * @module request
 */

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * // ES6
 * import imagePing from 'tui-code-snippet/request/imagePing';
 * 
 * // CommonJS
 * const imagePing = require('tui-code-snippet/request/imagePing');
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *   v: 1,
 *   t: 'event',
 *   tid: 'trackingid',
 *   cid: 'cid',
 *   dp: 'dp',
 *   dh: 'dh'
 * });
 */
function imagePing(url, trackingInfo) {
  var trackingElement = document.createElement('img');
  var queryString = '';
  forEachOwnProperties(trackingInfo, function(value, key) {
    queryString += '&' + key + '=' + value;
  });
  queryString = queryString.substring(1);

  trackingElement.src = url + '?' + queryString;

  trackingElement.style.display = 'none';
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);

  return trackingElement;
}

module.exports = imagePing;


/***/ }),

/***/ 391:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_80027__) {

"use strict";
/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __nested_webpack_require_80027__(929);
var imagePing = __nested_webpack_require_80027__(254);

var ms7days = 7 * 24 * 60 * 60 * 1000;

/**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */
function isExpired(date) {
  var now = new Date().getTime();

  return now - date > ms7days;
}

/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */
function sendHostname(appName, trackingId) {
  var url = 'https://www.google-analytics.com/collect';
  var hostname = location.hostname;
  var hitType = 'event';
  var eventCategory = 'use';
  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
  var date = window.localStorage.getItem(applicationKeyForStorage);

  // skip if the flag is defined and is set to false explicitly
  if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
    return;
  }

  // skip if not pass seven days old
  if (date && !isExpired(date)) {
    return;
  }

  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

  setTimeout(function() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1000);
}

module.exports = sendHostname;


/***/ }),

/***/ 322:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */
function isArray(obj) {
  return obj instanceof Array;
}

module.exports = isArray;


/***/ }),

/***/ 65:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_82401__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __nested_webpack_require_82401__(929);
var isNull = __nested_webpack_require_82401__(934);

/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * // ES6
 * import isExisty from 'tui-code-snippet/type/isExisty');
 * 
 * // CommonJS
 * const isExisty = require('tui-code-snippet/type/isExisty');
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/
function isExisty(param) {
  return !isUndefined(param) && !isNull(param);
}

module.exports = isExisty;


/***/ }),

/***/ 404:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_83394__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is falsy or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isTruthy = __nested_webpack_require_83394__(790);

/**
 * Check whether the given variable is falsy or not.
 * If the given variable is null or undefined or false, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is falsy?
 * @memberof module:type
 */
function isFalsy(obj) {
  return !isTruthy(obj);
}

module.exports = isFalsy;


/***/ }),

/***/ 294:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */
function isFunction(obj) {
  return obj instanceof Function;
}

module.exports = isFunction;


/***/ }),

/***/ 934:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */
function isNull(obj) {
  return obj === null;
}

module.exports = isNull;


/***/ }),

/***/ 758:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;


/***/ }),

/***/ 790:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_85531__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is truthy or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isExisty = __nested_webpack_require_85531__(65);

/**
 * Check whether the given variable is truthy or not.
 * If the given variable is not null or not undefined or not false, returns true.
 * (It regards 0 as true)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is truthy?
 * @memberof module:type
 */
function isTruthy(obj) {
  return isExisty(obj) && obj !== false;
}

module.exports = isTruthy;


/***/ }),

/***/ 929:
/***/ (function(module) {

"use strict";
/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */
function isUndefined(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

module.exports = isUndefined;


/***/ }),

/***/ 479:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__479__;

/***/ }),

/***/ 481:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__481__;

/***/ }),

/***/ 43:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ }),

/***/ 814:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__814__;

/***/ }),

/***/ 311:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__311__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_87464__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_87464__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_87464__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_87464__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_87464__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_87464__.o(definition, key) && !__nested_webpack_require_87464__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__nested_webpack_require_87464__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_87464__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__nested_webpack_require_87464__.d(__nested_webpack_exports__, {
  "default": function() { return /* binding */ indexViewer; }
});

;// CONCATENATED MODULE: ../../node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ../../libs/toastmark/dist/esm/index.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */
var esm_extendStatics = function (d, b) {
    esm_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
                d[p] = b[p]; };
    return esm_extendStatics(d, b);
};
function esm_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    esm_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var esm_assign = function () {
    esm_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return esm_assign.apply(this, arguments);
};
function esm_spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar)
                    ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
    return to.concat(ar || Array.prototype.slice.call(from));
}
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __nested_webpack_require_87464__.g !== 'undefined' ? __nested_webpack_require_87464__.g : typeof self !== 'undefined' ? self : {};
var encodeCache = {};
// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
    var i, ch, cache = encodeCache[exclude];
    if (cache) {
        return cache;
    }
    cache = encodeCache[exclude] = [];
    for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) {
            // always allow unencoded alphanumeric characters
            cache.push(ch);
        }
        else {
            cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
        }
    }
    for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
    }
    return cache;
}
// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode$1(string, exclude, keepEscaped) {
    var i, l, code, nextCode, cache, result = '';
    if (typeof exclude !== 'string') {
        // encode(string, keepEscaped)
        keepEscaped = exclude;
        exclude = encode$1.defaultChars;
    }
    if (typeof keepEscaped === 'undefined') {
        keepEscaped = true;
    }
    cache = getEncodeCache(exclude);
    for (i = 0, l = string.length; i < l; i++) {
        code = string.charCodeAt(i);
        if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
            if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                result += string.slice(i, i + 3);
                i += 2;
                continue;
            }
        }
        if (code < 128) {
            result += cache[code];
            continue;
        }
        if (code >= 0xD800 && code <= 0xDFFF) {
            if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
                nextCode = string.charCodeAt(i + 1);
                if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
                    result += encodeURIComponent(string[i] + string[i + 1]);
                    i++;
                    continue;
                }
            }
            result += '%EF%BF%BD';
            continue;
        }
        result += encodeURIComponent(string[i]);
    }
    return result;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode$1.componentChars = "-_.!~*'()";
var encode_1 = encode$1;
var lib = {};
var decode = {};
var Aacute$1 = "Á";
var aacute$1 = "á";
var Abreve = "Ă";
var abreve = "ă";
var ac = "∾";
var acd = "∿";
var acE = "∾̳";
var Acirc$1 = "Â";
var acirc$1 = "â";
var acute$1 = "´";
var Acy = "А";
var acy = "а";
var AElig$1 = "Æ";
var aelig$1 = "æ";
var af = "⁡";
var Afr = "𝔄";
var afr = "𝔞";
var Agrave$1 = "À";
var agrave$1 = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var Alpha = "Α";
var alpha = "α";
var Amacr = "Ā";
var amacr = "ā";
var amalg = "⨿";
var amp$2 = "&";
var AMP$1 = "&";
var andand = "⩕";
var And = "⩓";
var and = "∧";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angmsd = "∡";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var Aogon = "Ą";
var aogon = "ą";
var Aopf = "𝔸";
var aopf = "𝕒";
var apacir = "⩯";
var ap = "≈";
var apE = "⩰";
var ape = "≊";
var apid = "≋";
var apos$1 = "'";
var ApplyFunction = "⁡";
var approx = "≈";
var approxeq = "≊";
var Aring$1 = "Å";
var aring$1 = "å";
var Ascr = "𝒜";
var ascr = "𝒶";
var Assign = "≔";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var Atilde$1 = "Ã";
var atilde$1 = "ã";
var Auml$1 = "Ä";
var auml$1 = "ä";
var awconint = "∳";
var awint = "⨑";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var Backslash = "∖";
var Barv = "⫧";
var barvee = "⊽";
var barwed = "⌅";
var Barwed = "⌆";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var Bcy = "Б";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var Because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var Bernoullis = "ℬ";
var Beta = "Β";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var Bfr = "𝔅";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bNot = "⫭";
var bnot = "⌐";
var Bopf = "𝔹";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxbox = "⧉";
var boxdl = "┐";
var boxdL = "╕";
var boxDl = "╖";
var boxDL = "╗";
var boxdr = "┌";
var boxdR = "╒";
var boxDr = "╓";
var boxDR = "╔";
var boxh = "─";
var boxH = "═";
var boxhd = "┬";
var boxHd = "╤";
var boxhD = "╥";
var boxHD = "╦";
var boxhu = "┴";
var boxHu = "╧";
var boxhU = "╨";
var boxHU = "╩";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxul = "┘";
var boxuL = "╛";
var boxUl = "╜";
var boxUL = "╝";
var boxur = "└";
var boxuR = "╘";
var boxUr = "╙";
var boxUR = "╚";
var boxv = "│";
var boxV = "║";
var boxvh = "┼";
var boxvH = "╪";
var boxVh = "╫";
var boxVH = "╬";
var boxvl = "┤";
var boxvL = "╡";
var boxVl = "╢";
var boxVL = "╣";
var boxvr = "├";
var boxvR = "╞";
var boxVr = "╟";
var boxVR = "╠";
var bprime = "‵";
var breve = "˘";
var Breve = "˘";
var brvbar$1 = "¦";
var bscr = "𝒷";
var Bscr = "ℬ";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsolb = "⧅";
var bsol = "\\";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var Bumpeq = "≎";
var bumpeq = "≏";
var Cacute = "Ć";
var cacute = "ć";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var cap = "∩";
var Cap = "⋒";
var capcup = "⩇";
var capdot = "⩀";
var CapitalDifferentialD = "ⅅ";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var Cayleys = "ℭ";
var ccaps = "⩍";
var Ccaron = "Č";
var ccaron = "č";
var Ccedil$1 = "Ç";
var ccedil$1 = "ç";
var Ccirc = "Ĉ";
var ccirc = "ĉ";
var Cconint = "∰";
var ccups = "⩌";
var ccupssm = "⩐";
var Cdot = "Ċ";
var cdot = "ċ";
var cedil$1 = "¸";
var Cedilla = "¸";
var cemptyv = "⦲";
var cent$1 = "¢";
var centerdot = "·";
var CenterDot = "·";
var cfr = "𝔠";
var Cfr = "ℭ";
var CHcy = "Ч";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var Chi = "Χ";
var chi = "χ";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var CircleDot = "⊙";
var circledR = "®";
var circledS = "Ⓢ";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var cir = "○";
var cirE = "⧃";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var Colon = "∷";
var Colone = "⩴";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var Congruent = "≡";
var conint = "∮";
var Conint = "∯";
var ContourIntegral = "∮";
var copf = "𝕔";
var Copf = "ℂ";
var coprod = "∐";
var Coproduct = "∐";
var copy$1 = "©";
var COPY$1 = "©";
var copysr = "℗";
var CounterClockwiseContourIntegral = "∳";
var crarr = "↵";
var cross = "✗";
var Cross = "⨯";
var Cscr = "𝒞";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cupbrcap = "⩈";
var cupcap = "⩆";
var CupCap = "≍";
var cup = "∪";
var Cup = "⋓";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curren$1 = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dagger = "†";
var Dagger = "‡";
var daleth = "ℸ";
var darr = "↓";
var Darr = "↡";
var dArr = "⇓";
var dash = "‐";
var Dashv = "⫤";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var Dcaron = "Ď";
var dcaron = "ď";
var Dcy = "Д";
var dcy = "д";
var ddagger = "‡";
var ddarr = "⇊";
var DD = "ⅅ";
var dd = "ⅆ";
var DDotrahd = "⤑";
var ddotseq = "⩷";
var deg$1 = "°";
var Del = "∇";
var Delta = "Δ";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var Dfr = "𝔇";
var dfr = "𝔡";
var dHar = "⥥";
var dharl = "⇃";
var dharr = "⇂";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var diam = "⋄";
var diamond = "⋄";
var Diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var DifferentialD = "ⅆ";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divide$1 = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var DJcy = "Ђ";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var Dopf = "𝔻";
var dopf = "𝕕";
var Dot = "¨";
var dot = "˙";
var DotDot = "⃜";
var doteq = "≐";
var doteqdot = "≑";
var DotEqual = "≐";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrowBar = "⤓";
var downarrow = "↓";
var DownArrow = "↓";
var Downarrow = "⇓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVectorBar = "⥖";
var DownLeftVector = "↽";
var DownRightTeeVector = "⥟";
var DownRightVectorBar = "⥗";
var DownRightVector = "⇁";
var DownTeeArrow = "↧";
var DownTee = "⊤";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var Dscr = "𝒟";
var dscr = "𝒹";
var DScy = "Ѕ";
var dscy = "ѕ";
var dsol = "⧶";
var Dstrok = "Đ";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var DZcy = "Џ";
var dzcy = "џ";
var dzigrarr = "⟿";
var Eacute$1 = "É";
var eacute$1 = "é";
var easter = "⩮";
var Ecaron = "Ě";
var ecaron = "ě";
var Ecirc$1 = "Ê";
var ecirc$1 = "ê";
var ecir = "≖";
var ecolon = "≕";
var Ecy = "Э";
var ecy = "э";
var eDDot = "⩷";
var Edot = "Ė";
var edot = "ė";
var eDot = "≑";
var ee = "ⅇ";
var efDot = "≒";
var Efr = "𝔈";
var efr = "𝔢";
var eg = "⪚";
var Egrave$1 = "È";
var egrave$1 = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var Element = "∈";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var Emacr = "Ē";
var emacr = "ē";
var empty = "∅";
var emptyset = "∅";
var EmptySmallSquare = "◻";
var emptyv = "∅";
var EmptyVerySmallSquare = "▫";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var ENG = "Ŋ";
var eng = "ŋ";
var ensp = " ";
var Eogon = "Ę";
var eogon = "ę";
var Eopf = "𝔼";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var Epsilon = "Ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var Equal = "⩵";
var equals = "=";
var EqualTilde = "≂";
var equest = "≟";
var Equilibrium = "⇌";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erarr = "⥱";
var erDot = "≓";
var escr = "ℯ";
var Escr = "ℰ";
var esdot = "≐";
var Esim = "⩳";
var esim = "≂";
var Eta = "Η";
var eta = "η";
var ETH$1 = "Ð";
var eth$1 = "ð";
var Euml$1 = "Ë";
var euml$1 = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var Exists = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var ExponentialE = "ⅇ";
var fallingdotseq = "≒";
var Fcy = "Ф";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var Ffr = "𝔉";
var ffr = "𝔣";
var filig = "ﬁ";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var Fopf = "𝔽";
var fopf = "𝕗";
var forall = "∀";
var ForAll = "∀";
var fork = "⋔";
var forkv = "⫙";
var Fouriertrf = "ℱ";
var fpartint = "⨍";
var frac12$1 = "½";
var frac13 = "⅓";
var frac14$1 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac34$1 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var Fscr = "ℱ";
var gacute = "ǵ";
var Gamma = "Γ";
var gamma = "γ";
var Gammad = "Ϝ";
var gammad = "ϝ";
var gap = "⪆";
var Gbreve = "Ğ";
var gbreve = "ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var gcirc = "ĝ";
var Gcy = "Г";
var gcy = "г";
var Gdot = "Ġ";
var gdot = "ġ";
var ge = "≥";
var gE = "≧";
var gEl = "⪌";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var gescc = "⪩";
var ges = "⩾";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var Gfr = "𝔊";
var gfr = "𝔤";
var gg = "≫";
var Gg = "⋙";
var ggg = "⋙";
var gimel = "ℷ";
var GJcy = "Ѓ";
var gjcy = "ѓ";
var gla = "⪥";
var gl = "≷";
var glE = "⪒";
var glj = "⪤";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gnE = "≩";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var Gopf = "𝔾";
var gopf = "𝕘";
var grave = "`";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var gtcc = "⪧";
var gtcir = "⩺";
var gt$2 = ">";
var GT$1 = ">";
var Gt = "≫";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var Hacek = "ˇ";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var HARDcy = "Ъ";
var hardcy = "ъ";
var harrcir = "⥈";
var harr = "↔";
var hArr = "⇔";
var harrw = "↭";
var Hat = "^";
var hbar = "ℏ";
var Hcirc = "Ĥ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var Hopf = "ℍ";
var horbar = "―";
var HorizontalLine = "─";
var hscr = "𝒽";
var Hscr = "ℋ";
var hslash = "ℏ";
var Hstrok = "Ħ";
var hstrok = "ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var hybull = "⁃";
var hyphen = "‐";
var Iacute$1 = "Í";
var iacute$1 = "í";
var ic = "⁣";
var Icirc$1 = "Î";
var icirc$1 = "î";
var Icy = "И";
var icy = "и";
var Idot = "İ";
var IEcy = "Е";
var iecy = "е";
var iexcl$1 = "¡";
var iff = "⇔";
var ifr = "𝔦";
var Ifr = "ℑ";
var Igrave$1 = "Ì";
var igrave$1 = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var IJlig = "Ĳ";
var ijlig = "ĳ";
var Imacr = "Ī";
var imacr = "ī";
var esm_image = "ℑ";
var ImaginaryI = "ⅈ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var Im = "ℑ";
var imof = "⊷";
var imped = "Ƶ";
var Implies = "⇒";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var intcal = "⊺";
var esm_int = "∫";
var Int = "∬";
var integers = "ℤ";
var Integral = "∫";
var intercal = "⊺";
var Intersection = "⋂";
var intlarhk = "⨗";
var intprod = "⨼";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var IOcy = "Ё";
var iocy = "ё";
var Iogon = "Į";
var iogon = "į";
var Iopf = "𝕀";
var iopf = "𝕚";
var Iota = "Ι";
var iota = "ι";
var iprod = "⨼";
var iquest$1 = "¿";
var iscr = "𝒾";
var Iscr = "ℐ";
var isin = "∈";
var isindot = "⋵";
var isinE = "⋹";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var Itilde = "Ĩ";
var itilde = "ĩ";
var Iukcy = "І";
var iukcy = "і";
var Iuml$1 = "Ï";
var iuml$1 = "ï";
var Jcirc = "Ĵ";
var jcirc = "ĵ";
var Jcy = "Й";
var jcy = "й";
var Jfr = "𝔍";
var jfr = "𝔧";
var jmath = "ȷ";
var Jopf = "𝕁";
var jopf = "𝕛";
var Jscr = "𝒥";
var jscr = "𝒿";
var Jsercy = "Ј";
var jsercy = "ј";
var Jukcy = "Є";
var jukcy = "є";
var Kappa = "Κ";
var kappa = "κ";
var kappav = "ϰ";
var Kcedil = "Ķ";
var kcedil = "ķ";
var Kcy = "К";
var kcy = "к";
var Kfr = "𝔎";
var kfr = "𝔨";
var kgreen = "ĸ";
var KHcy = "Х";
var khcy = "х";
var KJcy = "Ќ";
var kjcy = "ќ";
var Kopf = "𝕂";
var kopf = "𝕜";
var Kscr = "𝒦";
var kscr = "𝓀";
var lAarr = "⇚";
var Lacute = "Ĺ";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var Lambda = "Λ";
var lambda = "λ";
var lang = "⟨";
var Lang = "⟪";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var Laplacetrf = "ℒ";
var laquo$1 = "«";
var larrb = "⇤";
var larrbfs = "⤟";
var larr = "←";
var Larr = "↞";
var lArr = "⇐";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var latail = "⤙";
var lAtail = "⤛";
var lat = "⪫";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lBarr = "⤎";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var Lcaron = "Ľ";
var lcaron = "ľ";
var Lcedil = "Ļ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var Lcy = "Л";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var lE = "≦";
var LeftAngleBracket = "⟨";
var LeftArrowBar = "⇤";
var leftarrow = "←";
var LeftArrow = "←";
var Leftarrow = "⇐";
var LeftArrowRightArrow = "⇆";
var leftarrowtail = "↢";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVectorBar = "⥙";
var LeftDownVector = "⇃";
var LeftFloor = "⌊";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var LeftRightArrow = "↔";
var Leftrightarrow = "⇔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var LeftRightVector = "⥎";
var LeftTeeArrow = "↤";
var LeftTee = "⊣";
var LeftTeeVector = "⥚";
var leftthreetimes = "⋋";
var LeftTriangleBar = "⧏";
var LeftTriangle = "⊲";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVectorBar = "⥘";
var LeftUpVector = "↿";
var LeftVectorBar = "⥒";
var LeftVector = "↼";
var lEg = "⪋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var lescc = "⪨";
var les = "⩽";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var lessgtr = "≶";
var LessLess = "⪡";
var lesssim = "≲";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var Lfr = "𝔏";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lHar = "⥢";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var LJcy = "Љ";
var ljcy = "љ";
var llarr = "⇇";
var ll = "≪";
var Ll = "⋘";
var llcorner = "⌞";
var Lleftarrow = "⇚";
var llhard = "⥫";
var lltri = "◺";
var Lmidot = "Ŀ";
var lmidot = "ŀ";
var lmoustache = "⎰";
var lmoust = "⎰";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lnE = "≨";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var LongLeftArrow = "⟵";
var Longleftarrow = "⟸";
var longleftrightarrow = "⟷";
var LongLeftRightArrow = "⟷";
var Longleftrightarrow = "⟺";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var LongRightArrow = "⟶";
var Longrightarrow = "⟹";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var Lopf = "𝕃";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var Lscr = "ℒ";
var lsh = "↰";
var Lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var Lstrok = "Ł";
var lstrok = "ł";
var ltcc = "⪦";
var ltcir = "⩹";
var lt$2 = "<";
var LT$1 = "<";
var Lt = "≪";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var ltrPar = "⦖";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var macr$1 = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var Mcy = "М";
var mcy = "м";
var mdash = "—";
var mDDot = "∺";
var measuredangle = "∡";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var mfr = "𝔪";
var mho = "℧";
var micro$1 = "µ";
var midast = "*";
var midcir = "⫰";
var mid = "∣";
var middot$1 = "·";
var minusb = "⊟";
var minus = "−";
var minusd = "∸";
var minusdu = "⨪";
var MinusPlus = "∓";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var Mopf = "𝕄";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var Mscr = "ℳ";
var mstpos = "∾";
var Mu = "Μ";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nabla = "∇";
var Nacute = "Ń";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natural = "♮";
var naturals = "ℕ";
var natur = "♮";
var nbsp$1 = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var Ncaron = "Ň";
var ncaron = "ň";
var Ncedil = "Ņ";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var Ncy = "Н";
var ncy = "н";
var ndash = "–";
var nearhk = "⤤";
var nearr = "↗";
var neArr = "⇗";
var nearrow = "↗";
var ne = "≠";
var nedot = "≐̸";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var nexist = "∄";
var nexists = "∄";
var Nfr = "𝔑";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var nGg = "⋙̸";
var ngsim = "≵";
var nGt = "≫⃒";
var ngt = "≯";
var ngtr = "≯";
var nGtv = "≫̸";
var nharr = "↮";
var nhArr = "⇎";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var NJcy = "Њ";
var njcy = "њ";
var nlarr = "↚";
var nlArr = "⇍";
var nldr = "‥";
var nlE = "≦̸";
var nle = "≰";
var nleftarrow = "↚";
var nLeftarrow = "⇍";
var nleftrightarrow = "↮";
var nLeftrightarrow = "⇎";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nLl = "⋘̸";
var nlsim = "≴";
var nLt = "≪⃒";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nLtv = "≪̸";
var nmid = "∤";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var nopf = "𝕟";
var Nopf = "ℕ";
var Not = "⫬";
var not$1 = "¬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var notin = "∉";
var notindot = "⋵̸";
var notinE = "⋹̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangle = "⋫";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var nparallel = "∦";
var npar = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var nprec = "⊀";
var npreceq = "⪯̸";
var npre = "⪯̸";
var nrarrc = "⤳̸";
var nrarr = "↛";
var nrArr = "⇏";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nRightarrow = "⇏";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var Nscr = "𝒩";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var Ntilde$1 = "Ñ";
var ntilde$1 = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var Nu = "Ν";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvDash = "⊭";
var nVdash = "⊮";
var nVDash = "⊯";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvHarr = "⤄";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwarhk = "⤣";
var nwarr = "↖";
var nwArr = "⇖";
var nwarrow = "↖";
var nwnear = "⤧";
var Oacute$1 = "Ó";
var oacute$1 = "ó";
var oast = "⊛";
var Ocirc$1 = "Ô";
var ocirc$1 = "ô";
var ocir = "⊚";
var Ocy = "О";
var ocy = "о";
var odash = "⊝";
var Odblac = "Ő";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var OElig = "Œ";
var oelig = "œ";
var ofcir = "⦿";
var Ofr = "𝔒";
var ofr = "𝔬";
var ogon = "˛";
var Ograve$1 = "Ò";
var ograve$1 = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var Omacr = "Ō";
var omacr = "ō";
var Omega = "Ω";
var omega = "ω";
var Omicron = "Ο";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var Oopf = "𝕆";
var oopf = "𝕠";
var opar = "⦷";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var operp = "⦹";
var oplus = "⊕";
var orarr = "↻";
var Or = "⩔";
var or = "∨";
var ord = "⩝";
var order = "ℴ";
var orderof = "ℴ";
var ordf$1 = "ª";
var ordm$1 = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oS = "Ⓢ";
var Oscr = "𝒪";
var oscr = "ℴ";
var Oslash$1 = "Ø";
var oslash$1 = "ø";
var osol = "⊘";
var Otilde$1 = "Õ";
var otilde$1 = "õ";
var otimesas = "⨶";
var Otimes = "⨷";
var otimes = "⊗";
var Ouml$1 = "Ö";
var ouml$1 = "ö";
var ovbar = "⌽";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var para$1 = "¶";
var parallel = "∥";
var par = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var PartialD = "∂";
var Pcy = "П";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var Pfr = "𝔓";
var pfr = "𝔭";
var Phi = "Φ";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var Pi = "Π";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plus = "+";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var PlusMinus = "±";
var plusmn$1 = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var Poincareplane = "ℌ";
var pointint = "⨕";
var popf = "𝕡";
var Popf = "ℙ";
var pound$1 = "£";
var prap = "⪷";
var Pr = "⪻";
var pr = "≺";
var prcue = "≼";
var precapprox = "⪷";
var prec = "≺";
var preccurlyeq = "≼";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var pre = "⪯";
var prE = "⪳";
var precsim = "≾";
var prime = "′";
var Prime = "″";
var primes = "ℙ";
var prnap = "⪹";
var prnE = "⪵";
var prnsim = "⋨";
var prod = "∏";
var Product = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop = "∝";
var Proportional = "∝";
var Proportion = "∷";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var Pscr = "𝒫";
var pscr = "𝓅";
var Psi = "Ψ";
var psi = "ψ";
var puncsp = " ";
var Qfr = "𝔔";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var Qopf = "ℚ";
var qprime = "⁗";
var Qscr = "𝒬";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quot$2 = "\"";
var QUOT$1 = "\"";
var rAarr = "⇛";
var race = "∽̱";
var Racute = "Ŕ";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var Rang = "⟫";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raquo$1 = "»";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarr = "→";
var Rarr = "↠";
var rArr = "⇒";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var Rarrtl = "⤖";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var rAtail = "⤜";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rBarr = "⤏";
var RBarr = "⤐";
var rbbrk = "❳";
var rbrace = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var Rcaron = "Ř";
var rcaron = "ř";
var Rcedil = "Ŗ";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var Rcy = "Р";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var Re = "ℜ";
var rect = "▭";
var reg$1 = "®";
var REG$1 = "®";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var Rfr = "ℜ";
var rHar = "⥤";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var Rho = "Ρ";
var rho = "ρ";
var rhov = "ϱ";
var RightAngleBracket = "⟩";
var RightArrowBar = "⇥";
var rightarrow = "→";
var RightArrow = "→";
var Rightarrow = "⇒";
var RightArrowLeftArrow = "⇄";
var rightarrowtail = "↣";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVectorBar = "⥕";
var RightDownVector = "⇂";
var RightFloor = "⌋";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var RightTeeArrow = "↦";
var RightTee = "⊢";
var RightTeeVector = "⥛";
var rightthreetimes = "⋌";
var RightTriangleBar = "⧐";
var RightTriangle = "⊳";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVectorBar = "⥔";
var RightUpVector = "↾";
var RightVectorBar = "⥓";
var RightVector = "⇀";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoustache = "⎱";
var rmoust = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var Ropf = "ℝ";
var roplus = "⨮";
var rotimes = "⨵";
var RoundImplies = "⥰";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var Rrightarrow = "⇛";
var rsaquo = "›";
var rscr = "𝓇";
var Rscr = "ℛ";
var rsh = "↱";
var Rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var RuleDelayed = "⧴";
var ruluhar = "⥨";
var rx = "℞";
var Sacute = "Ś";
var sacute = "ś";
var sbquo = "‚";
var scap = "⪸";
var Scaron = "Š";
var scaron = "š";
var Sc = "⪼";
var sc = "≻";
var sccue = "≽";
var sce = "⪰";
var scE = "⪴";
var Scedil = "Ş";
var scedil = "ş";
var Scirc = "Ŝ";
var scirc = "ŝ";
var scnap = "⪺";
var scnE = "⪶";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var Scy = "С";
var scy = "с";
var sdotb = "⊡";
var sdot = "⋅";
var sdote = "⩦";
var searhk = "⤥";
var searr = "↘";
var seArr = "⇘";
var searrow = "↘";
var sect$1 = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var Sfr = "𝔖";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var SHCHcy = "Щ";
var shchcy = "щ";
var SHcy = "Ш";
var shcy = "ш";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var shortmid = "∣";
var shortparallel = "∥";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var shy$1 = "­";
var Sigma = "Σ";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var SmallCircle = "∘";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var SOFTcy = "Ь";
var softcy = "ь";
var solbar = "⌿";
var solb = "⧄";
var sol = "/";
var Sopf = "𝕊";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var Sqrt = "√";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var square = "□";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var squarf = "▪";
var squ = "□";
var squf = "▪";
var srarr = "→";
var Sscr = "𝒮";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var Star = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var Sub = "⋐";
var subdot = "⪽";
var subE = "⫅";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var Subset = "⋐";
var subseteq = "⊆";
var subseteqq = "⫅";
var SubsetEqual = "⊆";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succapprox = "⪸";
var succ = "≻";
var succcurlyeq = "≽";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var SuchThat = "∋";
var sum = "∑";
var Sum = "∑";
var sung = "♪";
var sup1$1 = "¹";
var sup2$1 = "²";
var sup3$1 = "³";
var sup = "⊃";
var Sup = "⋑";
var supdot = "⪾";
var supdsub = "⫘";
var supE = "⫆";
var supe = "⊇";
var supedot = "⫄";
var Superset = "⊃";
var SupersetEqual = "⊇";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var Supset = "⋑";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swarhk = "⤦";
var swarr = "↙";
var swArr = "⇙";
var swarrow = "↙";
var swnwar = "⤪";
var szlig$1 = "ß";
var Tab = "\t";
var target = "⌖";
var Tau = "Τ";
var tau = "τ";
var tbrk = "⎴";
var Tcaron = "Ť";
var tcaron = "ť";
var Tcedil = "Ţ";
var tcedil = "ţ";
var Tcy = "Т";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var Tfr = "𝔗";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var Therefore = "∴";
var Theta = "Θ";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var ThickSpace = "  ";
var ThinSpace = " ";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var THORN$1 = "Þ";
var thorn$1 = "þ";
var tilde = "˜";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var timesbar = "⨱";
var timesb = "⊠";
var times$1 = "×";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var topbot = "⌶";
var topcir = "⫱";
var esm_top = "⊤";
var Topf = "𝕋";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var TRADE = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var TripleDot = "⃛";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var Tscr = "𝒯";
var tscr = "𝓉";
var TScy = "Ц";
var tscy = "ц";
var TSHcy = "Ћ";
var tshcy = "ћ";
var Tstrok = "Ŧ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var Uacute$1 = "Ú";
var uacute$1 = "ú";
var uarr = "↑";
var Uarr = "↟";
var uArr = "⇑";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var ubrcy = "ў";
var Ubreve = "Ŭ";
var ubreve = "ŭ";
var Ucirc$1 = "Û";
var ucirc$1 = "û";
var Ucy = "У";
var ucy = "у";
var udarr = "⇅";
var Udblac = "Ű";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var Ufr = "𝔘";
var ufr = "𝔲";
var Ugrave$1 = "Ù";
var ugrave$1 = "ù";
var uHar = "⥣";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var Umacr = "Ū";
var umacr = "ū";
var uml$1 = "¨";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var uogon = "ų";
var Uopf = "𝕌";
var uopf = "𝕦";
var UpArrowBar = "⤒";
var uparrow = "↑";
var UpArrow = "↑";
var Uparrow = "⇑";
var UpArrowDownArrow = "⇅";
var updownarrow = "↕";
var UpDownArrow = "↕";
var Updownarrow = "⇕";
var UpEquilibrium = "⥮";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var upsi = "υ";
var Upsi = "ϒ";
var upsih = "ϒ";
var Upsilon = "Υ";
var upsilon = "υ";
var UpTeeArrow = "↥";
var UpTee = "⊥";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var Uring = "Ů";
var uring = "ů";
var urtri = "◹";
var Uscr = "𝒰";
var uscr = "𝓊";
var utdot = "⋰";
var Utilde = "Ũ";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var Uuml$1 = "Ü";
var uuml$1 = "ü";
var uwangle = "⦧";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var vArr = "⇕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vBar = "⫨";
var Vbar = "⫫";
var vBarv = "⫩";
var Vcy = "В";
var vcy = "в";
var vdash = "⊢";
var vDash = "⊨";
var Vdash = "⊩";
var VDash = "⊫";
var Vdashl = "⫦";
var veebar = "⊻";
var vee = "∨";
var Vee = "⋁";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var Verbar = "‖";
var vert = "|";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var Vopf = "𝕍";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var Vscr = "𝒱";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var Vvdash = "⊪";
var vzigzag = "⦚";
var Wcirc = "Ŵ";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var Wedge = "⋀";
var wedgeq = "≙";
var weierp = "℘";
var Wfr = "𝔚";
var wfr = "𝔴";
var Wopf = "𝕎";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var Wscr = "𝒲";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var Xfr = "𝔛";
var xfr = "𝔵";
var xharr = "⟷";
var xhArr = "⟺";
var Xi = "Ξ";
var xi = "ξ";
var xlarr = "⟵";
var xlArr = "⟸";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var Xopf = "𝕏";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrarr = "⟶";
var xrArr = "⟹";
var Xscr = "𝒳";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var Yacute$1 = "Ý";
var yacute$1 = "ý";
var YAcy = "Я";
var yacy = "я";
var Ycirc = "Ŷ";
var ycirc = "ŷ";
var Ycy = "Ы";
var ycy = "ы";
var yen$1 = "¥";
var Yfr = "𝔜";
var yfr = "𝔶";
var YIcy = "Ї";
var yicy = "ї";
var Yopf = "𝕐";
var yopf = "𝕪";
var Yscr = "𝒴";
var yscr = "𝓎";
var YUcy = "Ю";
var yucy = "ю";
var yuml$1 = "ÿ";
var Yuml = "Ÿ";
var Zacute = "Ź";
var zacute = "ź";
var Zcaron = "Ž";
var zcaron = "ž";
var Zcy = "З";
var zcy = "з";
var Zdot = "Ż";
var zdot = "ż";
var zeetrf = "ℨ";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var zeta = "ζ";
var zfr = "𝔷";
var Zfr = "ℨ";
var ZHcy = "Ж";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var Zopf = "ℤ";
var Zscr = "𝒵";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var require$$1$1 = {
    Aacute: Aacute$1,
    aacute: aacute$1,
    Abreve: Abreve,
    abreve: abreve,
    ac: ac,
    acd: acd,
    acE: acE,
    Acirc: Acirc$1,
    acirc: acirc$1,
    acute: acute$1,
    Acy: Acy,
    acy: acy,
    AElig: AElig$1,
    aelig: aelig$1,
    af: af,
    Afr: Afr,
    afr: afr,
    Agrave: Agrave$1,
    agrave: agrave$1,
    alefsym: alefsym,
    aleph: aleph,
    Alpha: Alpha,
    alpha: alpha,
    Amacr: Amacr,
    amacr: amacr,
    amalg: amalg,
    amp: amp$2,
    AMP: AMP$1,
    andand: andand,
    And: And,
    and: and,
    andd: andd,
    andslope: andslope,
    andv: andv,
    ang: ang,
    ange: ange,
    angle: angle,
    angmsdaa: angmsdaa,
    angmsdab: angmsdab,
    angmsdac: angmsdac,
    angmsdad: angmsdad,
    angmsdae: angmsdae,
    angmsdaf: angmsdaf,
    angmsdag: angmsdag,
    angmsdah: angmsdah,
    angmsd: angmsd,
    angrt: angrt,
    angrtvb: angrtvb,
    angrtvbd: angrtvbd,
    angsph: angsph,
    angst: angst,
    angzarr: angzarr,
    Aogon: Aogon,
    aogon: aogon,
    Aopf: Aopf,
    aopf: aopf,
    apacir: apacir,
    ap: ap,
    apE: apE,
    ape: ape,
    apid: apid,
    apos: apos$1,
    ApplyFunction: ApplyFunction,
    approx: approx,
    approxeq: approxeq,
    Aring: Aring$1,
    aring: aring$1,
    Ascr: Ascr,
    ascr: ascr,
    Assign: Assign,
    ast: ast,
    asymp: asymp,
    asympeq: asympeq,
    Atilde: Atilde$1,
    atilde: atilde$1,
    Auml: Auml$1,
    auml: auml$1,
    awconint: awconint,
    awint: awint,
    backcong: backcong,
    backepsilon: backepsilon,
    backprime: backprime,
    backsim: backsim,
    backsimeq: backsimeq,
    Backslash: Backslash,
    Barv: Barv,
    barvee: barvee,
    barwed: barwed,
    Barwed: Barwed,
    barwedge: barwedge,
    bbrk: bbrk,
    bbrktbrk: bbrktbrk,
    bcong: bcong,
    Bcy: Bcy,
    bcy: bcy,
    bdquo: bdquo,
    becaus: becaus,
    because: because,
    Because: Because,
    bemptyv: bemptyv,
    bepsi: bepsi,
    bernou: bernou,
    Bernoullis: Bernoullis,
    Beta: Beta,
    beta: beta,
    beth: beth,
    between: between,
    Bfr: Bfr,
    bfr: bfr,
    bigcap: bigcap,
    bigcirc: bigcirc,
    bigcup: bigcup,
    bigodot: bigodot,
    bigoplus: bigoplus,
    bigotimes: bigotimes,
    bigsqcup: bigsqcup,
    bigstar: bigstar,
    bigtriangledown: bigtriangledown,
    bigtriangleup: bigtriangleup,
    biguplus: biguplus,
    bigvee: bigvee,
    bigwedge: bigwedge,
    bkarow: bkarow,
    blacklozenge: blacklozenge,
    blacksquare: blacksquare,
    blacktriangle: blacktriangle,
    blacktriangledown: blacktriangledown,
    blacktriangleleft: blacktriangleleft,
    blacktriangleright: blacktriangleright,
    blank: blank,
    blk12: blk12,
    blk14: blk14,
    blk34: blk34,
    block: block,
    bne: bne,
    bnequiv: bnequiv,
    bNot: bNot,
    bnot: bnot,
    Bopf: Bopf,
    bopf: bopf,
    bot: bot,
    bottom: bottom,
    bowtie: bowtie,
    boxbox: boxbox,
    boxdl: boxdl,
    boxdL: boxdL,
    boxDl: boxDl,
    boxDL: boxDL,
    boxdr: boxdr,
    boxdR: boxdR,
    boxDr: boxDr,
    boxDR: boxDR,
    boxh: boxh,
    boxH: boxH,
    boxhd: boxhd,
    boxHd: boxHd,
    boxhD: boxhD,
    boxHD: boxHD,
    boxhu: boxhu,
    boxHu: boxHu,
    boxhU: boxhU,
    boxHU: boxHU,
    boxminus: boxminus,
    boxplus: boxplus,
    boxtimes: boxtimes,
    boxul: boxul,
    boxuL: boxuL,
    boxUl: boxUl,
    boxUL: boxUL,
    boxur: boxur,
    boxuR: boxuR,
    boxUr: boxUr,
    boxUR: boxUR,
    boxv: boxv,
    boxV: boxV,
    boxvh: boxvh,
    boxvH: boxvH,
    boxVh: boxVh,
    boxVH: boxVH,
    boxvl: boxvl,
    boxvL: boxvL,
    boxVl: boxVl,
    boxVL: boxVL,
    boxvr: boxvr,
    boxvR: boxvR,
    boxVr: boxVr,
    boxVR: boxVR,
    bprime: bprime,
    breve: breve,
    Breve: Breve,
    brvbar: brvbar$1,
    bscr: bscr,
    Bscr: Bscr,
    bsemi: bsemi,
    bsim: bsim,
    bsime: bsime,
    bsolb: bsolb,
    bsol: bsol,
    bsolhsub: bsolhsub,
    bull: bull,
    bullet: bullet,
    bump: bump,
    bumpE: bumpE,
    bumpe: bumpe,
    Bumpeq: Bumpeq,
    bumpeq: bumpeq,
    Cacute: Cacute,
    cacute: cacute,
    capand: capand,
    capbrcup: capbrcup,
    capcap: capcap,
    cap: cap,
    Cap: Cap,
    capcup: capcup,
    capdot: capdot,
    CapitalDifferentialD: CapitalDifferentialD,
    caps: caps,
    caret: caret,
    caron: caron,
    Cayleys: Cayleys,
    ccaps: ccaps,
    Ccaron: Ccaron,
    ccaron: ccaron,
    Ccedil: Ccedil$1,
    ccedil: ccedil$1,
    Ccirc: Ccirc,
    ccirc: ccirc,
    Cconint: Cconint,
    ccups: ccups,
    ccupssm: ccupssm,
    Cdot: Cdot,
    cdot: cdot,
    cedil: cedil$1,
    Cedilla: Cedilla,
    cemptyv: cemptyv,
    cent: cent$1,
    centerdot: centerdot,
    CenterDot: CenterDot,
    cfr: cfr,
    Cfr: Cfr,
    CHcy: CHcy,
    chcy: chcy,
    check: check,
    checkmark: checkmark,
    Chi: Chi,
    chi: chi,
    circ: circ,
    circeq: circeq,
    circlearrowleft: circlearrowleft,
    circlearrowright: circlearrowright,
    circledast: circledast,
    circledcirc: circledcirc,
    circleddash: circleddash,
    CircleDot: CircleDot,
    circledR: circledR,
    circledS: circledS,
    CircleMinus: CircleMinus,
    CirclePlus: CirclePlus,
    CircleTimes: CircleTimes,
    cir: cir,
    cirE: cirE,
    cire: cire,
    cirfnint: cirfnint,
    cirmid: cirmid,
    cirscir: cirscir,
    ClockwiseContourIntegral: ClockwiseContourIntegral,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    CloseCurlyQuote: CloseCurlyQuote,
    clubs: clubs,
    clubsuit: clubsuit,
    colon: colon,
    Colon: Colon,
    Colone: Colone,
    colone: colone,
    coloneq: coloneq,
    comma: comma,
    commat: commat,
    comp: comp,
    compfn: compfn,
    complement: complement,
    complexes: complexes,
    cong: cong,
    congdot: congdot,
    Congruent: Congruent,
    conint: conint,
    Conint: Conint,
    ContourIntegral: ContourIntegral,
    copf: copf,
    Copf: Copf,
    coprod: coprod,
    Coproduct: Coproduct,
    copy: copy$1,
    COPY: COPY$1,
    copysr: copysr,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    crarr: crarr,
    cross: cross,
    Cross: Cross,
    Cscr: Cscr,
    cscr: cscr,
    csub: csub,
    csube: csube,
    csup: csup,
    csupe: csupe,
    ctdot: ctdot,
    cudarrl: cudarrl,
    cudarrr: cudarrr,
    cuepr: cuepr,
    cuesc: cuesc,
    cularr: cularr,
    cularrp: cularrp,
    cupbrcap: cupbrcap,
    cupcap: cupcap,
    CupCap: CupCap,
    cup: cup,
    Cup: Cup,
    cupcup: cupcup,
    cupdot: cupdot,
    cupor: cupor,
    cups: cups,
    curarr: curarr,
    curarrm: curarrm,
    curlyeqprec: curlyeqprec,
    curlyeqsucc: curlyeqsucc,
    curlyvee: curlyvee,
    curlywedge: curlywedge,
    curren: curren$1,
    curvearrowleft: curvearrowleft,
    curvearrowright: curvearrowright,
    cuvee: cuvee,
    cuwed: cuwed,
    cwconint: cwconint,
    cwint: cwint,
    cylcty: cylcty,
    dagger: dagger,
    Dagger: Dagger,
    daleth: daleth,
    darr: darr,
    Darr: Darr,
    dArr: dArr,
    dash: dash,
    Dashv: Dashv,
    dashv: dashv,
    dbkarow: dbkarow,
    dblac: dblac,
    Dcaron: Dcaron,
    dcaron: dcaron,
    Dcy: Dcy,
    dcy: dcy,
    ddagger: ddagger,
    ddarr: ddarr,
    DD: DD,
    dd: dd,
    DDotrahd: DDotrahd,
    ddotseq: ddotseq,
    deg: deg$1,
    Del: Del,
    Delta: Delta,
    delta: delta,
    demptyv: demptyv,
    dfisht: dfisht,
    Dfr: Dfr,
    dfr: dfr,
    dHar: dHar,
    dharl: dharl,
    dharr: dharr,
    DiacriticalAcute: DiacriticalAcute,
    DiacriticalDot: DiacriticalDot,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    DiacriticalGrave: DiacriticalGrave,
    DiacriticalTilde: DiacriticalTilde,
    diam: diam,
    diamond: diamond,
    Diamond: Diamond,
    diamondsuit: diamondsuit,
    diams: diams,
    die: die,
    DifferentialD: DifferentialD,
    digamma: digamma,
    disin: disin,
    div: div,
    divide: divide$1,
    divideontimes: divideontimes,
    divonx: divonx,
    DJcy: DJcy,
    djcy: djcy,
    dlcorn: dlcorn,
    dlcrop: dlcrop,
    dollar: dollar,
    Dopf: Dopf,
    dopf: dopf,
    Dot: Dot,
    dot: dot,
    DotDot: DotDot,
    doteq: doteq,
    doteqdot: doteqdot,
    DotEqual: DotEqual,
    dotminus: dotminus,
    dotplus: dotplus,
    dotsquare: dotsquare,
    doublebarwedge: doublebarwedge,
    DoubleContourIntegral: DoubleContourIntegral,
    DoubleDot: DoubleDot,
    DoubleDownArrow: DoubleDownArrow,
    DoubleLeftArrow: DoubleLeftArrow,
    DoubleLeftRightArrow: DoubleLeftRightArrow,
    DoubleLeftTee: DoubleLeftTee,
    DoubleLongLeftArrow: DoubleLongLeftArrow,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    DoubleLongRightArrow: DoubleLongRightArrow,
    DoubleRightArrow: DoubleRightArrow,
    DoubleRightTee: DoubleRightTee,
    DoubleUpArrow: DoubleUpArrow,
    DoubleUpDownArrow: DoubleUpDownArrow,
    DoubleVerticalBar: DoubleVerticalBar,
    DownArrowBar: DownArrowBar,
    downarrow: downarrow,
    DownArrow: DownArrow,
    Downarrow: Downarrow,
    DownArrowUpArrow: DownArrowUpArrow,
    DownBreve: DownBreve,
    downdownarrows: downdownarrows,
    downharpoonleft: downharpoonleft,
    downharpoonright: downharpoonright,
    DownLeftRightVector: DownLeftRightVector,
    DownLeftTeeVector: DownLeftTeeVector,
    DownLeftVectorBar: DownLeftVectorBar,
    DownLeftVector: DownLeftVector,
    DownRightTeeVector: DownRightTeeVector,
    DownRightVectorBar: DownRightVectorBar,
    DownRightVector: DownRightVector,
    DownTeeArrow: DownTeeArrow,
    DownTee: DownTee,
    drbkarow: drbkarow,
    drcorn: drcorn,
    drcrop: drcrop,
    Dscr: Dscr,
    dscr: dscr,
    DScy: DScy,
    dscy: dscy,
    dsol: dsol,
    Dstrok: Dstrok,
    dstrok: dstrok,
    dtdot: dtdot,
    dtri: dtri,
    dtrif: dtrif,
    duarr: duarr,
    duhar: duhar,
    dwangle: dwangle,
    DZcy: DZcy,
    dzcy: dzcy,
    dzigrarr: dzigrarr,
    Eacute: Eacute$1,
    eacute: eacute$1,
    easter: easter,
    Ecaron: Ecaron,
    ecaron: ecaron,
    Ecirc: Ecirc$1,
    ecirc: ecirc$1,
    ecir: ecir,
    ecolon: ecolon,
    Ecy: Ecy,
    ecy: ecy,
    eDDot: eDDot,
    Edot: Edot,
    edot: edot,
    eDot: eDot,
    ee: ee,
    efDot: efDot,
    Efr: Efr,
    efr: efr,
    eg: eg,
    Egrave: Egrave$1,
    egrave: egrave$1,
    egs: egs,
    egsdot: egsdot,
    el: el,
    Element: Element,
    elinters: elinters,
    ell: ell,
    els: els,
    elsdot: elsdot,
    Emacr: Emacr,
    emacr: emacr,
    empty: empty,
    emptyset: emptyset,
    EmptySmallSquare: EmptySmallSquare,
    emptyv: emptyv,
    EmptyVerySmallSquare: EmptyVerySmallSquare,
    emsp13: emsp13,
    emsp14: emsp14,
    emsp: emsp,
    ENG: ENG,
    eng: eng,
    ensp: ensp,
    Eogon: Eogon,
    eogon: eogon,
    Eopf: Eopf,
    eopf: eopf,
    epar: epar,
    eparsl: eparsl,
    eplus: eplus,
    epsi: epsi,
    Epsilon: Epsilon,
    epsilon: epsilon,
    epsiv: epsiv,
    eqcirc: eqcirc,
    eqcolon: eqcolon,
    eqsim: eqsim,
    eqslantgtr: eqslantgtr,
    eqslantless: eqslantless,
    Equal: Equal,
    equals: equals,
    EqualTilde: EqualTilde,
    equest: equest,
    Equilibrium: Equilibrium,
    equiv: equiv,
    equivDD: equivDD,
    eqvparsl: eqvparsl,
    erarr: erarr,
    erDot: erDot,
    escr: escr,
    Escr: Escr,
    esdot: esdot,
    Esim: Esim,
    esim: esim,
    Eta: Eta,
    eta: eta,
    ETH: ETH$1,
    eth: eth$1,
    Euml: Euml$1,
    euml: euml$1,
    euro: euro,
    excl: excl,
    exist: exist,
    Exists: Exists,
    expectation: expectation,
    exponentiale: exponentiale,
    ExponentialE: ExponentialE,
    fallingdotseq: fallingdotseq,
    Fcy: Fcy,
    fcy: fcy,
    female: female,
    ffilig: ffilig,
    fflig: fflig,
    ffllig: ffllig,
    Ffr: Ffr,
    ffr: ffr,
    filig: filig,
    FilledSmallSquare: FilledSmallSquare,
    FilledVerySmallSquare: FilledVerySmallSquare,
    fjlig: fjlig,
    flat: flat,
    fllig: fllig,
    fltns: fltns,
    fnof: fnof,
    Fopf: Fopf,
    fopf: fopf,
    forall: forall,
    ForAll: ForAll,
    fork: fork,
    forkv: forkv,
    Fouriertrf: Fouriertrf,
    fpartint: fpartint,
    frac12: frac12$1,
    frac13: frac13,
    frac14: frac14$1,
    frac15: frac15,
    frac16: frac16,
    frac18: frac18,
    frac23: frac23,
    frac25: frac25,
    frac34: frac34$1,
    frac35: frac35,
    frac38: frac38,
    frac45: frac45,
    frac56: frac56,
    frac58: frac58,
    frac78: frac78,
    frasl: frasl,
    frown: frown,
    fscr: fscr,
    Fscr: Fscr,
    gacute: gacute,
    Gamma: Gamma,
    gamma: gamma,
    Gammad: Gammad,
    gammad: gammad,
    gap: gap,
    Gbreve: Gbreve,
    gbreve: gbreve,
    Gcedil: Gcedil,
    Gcirc: Gcirc,
    gcirc: gcirc,
    Gcy: Gcy,
    gcy: gcy,
    Gdot: Gdot,
    gdot: gdot,
    ge: ge,
    gE: gE,
    gEl: gEl,
    gel: gel,
    geq: geq,
    geqq: geqq,
    geqslant: geqslant,
    gescc: gescc,
    ges: ges,
    gesdot: gesdot,
    gesdoto: gesdoto,
    gesdotol: gesdotol,
    gesl: gesl,
    gesles: gesles,
    Gfr: Gfr,
    gfr: gfr,
    gg: gg,
    Gg: Gg,
    ggg: ggg,
    gimel: gimel,
    GJcy: GJcy,
    gjcy: gjcy,
    gla: gla,
    gl: gl,
    glE: glE,
    glj: glj,
    gnap: gnap,
    gnapprox: gnapprox,
    gne: gne,
    gnE: gnE,
    gneq: gneq,
    gneqq: gneqq,
    gnsim: gnsim,
    Gopf: Gopf,
    gopf: gopf,
    grave: grave,
    GreaterEqual: GreaterEqual,
    GreaterEqualLess: GreaterEqualLess,
    GreaterFullEqual: GreaterFullEqual,
    GreaterGreater: GreaterGreater,
    GreaterLess: GreaterLess,
    GreaterSlantEqual: GreaterSlantEqual,
    GreaterTilde: GreaterTilde,
    Gscr: Gscr,
    gscr: gscr,
    gsim: gsim,
    gsime: gsime,
    gsiml: gsiml,
    gtcc: gtcc,
    gtcir: gtcir,
    gt: gt$2,
    GT: GT$1,
    Gt: Gt,
    gtdot: gtdot,
    gtlPar: gtlPar,
    gtquest: gtquest,
    gtrapprox: gtrapprox,
    gtrarr: gtrarr,
    gtrdot: gtrdot,
    gtreqless: gtreqless,
    gtreqqless: gtreqqless,
    gtrless: gtrless,
    gtrsim: gtrsim,
    gvertneqq: gvertneqq,
    gvnE: gvnE,
    Hacek: Hacek,
    hairsp: hairsp,
    half: half,
    hamilt: hamilt,
    HARDcy: HARDcy,
    hardcy: hardcy,
    harrcir: harrcir,
    harr: harr,
    hArr: hArr,
    harrw: harrw,
    Hat: Hat,
    hbar: hbar,
    Hcirc: Hcirc,
    hcirc: hcirc,
    hearts: hearts,
    heartsuit: heartsuit,
    hellip: hellip,
    hercon: hercon,
    hfr: hfr,
    Hfr: Hfr,
    HilbertSpace: HilbertSpace,
    hksearow: hksearow,
    hkswarow: hkswarow,
    hoarr: hoarr,
    homtht: homtht,
    hookleftarrow: hookleftarrow,
    hookrightarrow: hookrightarrow,
    hopf: hopf,
    Hopf: Hopf,
    horbar: horbar,
    HorizontalLine: HorizontalLine,
    hscr: hscr,
    Hscr: Hscr,
    hslash: hslash,
    Hstrok: Hstrok,
    hstrok: hstrok,
    HumpDownHump: HumpDownHump,
    HumpEqual: HumpEqual,
    hybull: hybull,
    hyphen: hyphen,
    Iacute: Iacute$1,
    iacute: iacute$1,
    ic: ic,
    Icirc: Icirc$1,
    icirc: icirc$1,
    Icy: Icy,
    icy: icy,
    Idot: Idot,
    IEcy: IEcy,
    iecy: iecy,
    iexcl: iexcl$1,
    iff: iff,
    ifr: ifr,
    Ifr: Ifr,
    Igrave: Igrave$1,
    igrave: igrave$1,
    ii: ii,
    iiiint: iiiint,
    iiint: iiint,
    iinfin: iinfin,
    iiota: iiota,
    IJlig: IJlig,
    ijlig: ijlig,
    Imacr: Imacr,
    imacr: imacr,
    image: esm_image,
    ImaginaryI: ImaginaryI,
    imagline: imagline,
    imagpart: imagpart,
    imath: imath,
    Im: Im,
    imof: imof,
    imped: imped,
    Implies: Implies,
    incare: incare,
    "in": "∈",
    infin: infin,
    infintie: infintie,
    inodot: inodot,
    intcal: intcal,
    int: esm_int,
    Int: Int,
    integers: integers,
    Integral: Integral,
    intercal: intercal,
    Intersection: Intersection,
    intlarhk: intlarhk,
    intprod: intprod,
    InvisibleComma: InvisibleComma,
    InvisibleTimes: InvisibleTimes,
    IOcy: IOcy,
    iocy: iocy,
    Iogon: Iogon,
    iogon: iogon,
    Iopf: Iopf,
    iopf: iopf,
    Iota: Iota,
    iota: iota,
    iprod: iprod,
    iquest: iquest$1,
    iscr: iscr,
    Iscr: Iscr,
    isin: isin,
    isindot: isindot,
    isinE: isinE,
    isins: isins,
    isinsv: isinsv,
    isinv: isinv,
    it: it,
    Itilde: Itilde,
    itilde: itilde,
    Iukcy: Iukcy,
    iukcy: iukcy,
    Iuml: Iuml$1,
    iuml: iuml$1,
    Jcirc: Jcirc,
    jcirc: jcirc,
    Jcy: Jcy,
    jcy: jcy,
    Jfr: Jfr,
    jfr: jfr,
    jmath: jmath,
    Jopf: Jopf,
    jopf: jopf,
    Jscr: Jscr,
    jscr: jscr,
    Jsercy: Jsercy,
    jsercy: jsercy,
    Jukcy: Jukcy,
    jukcy: jukcy,
    Kappa: Kappa,
    kappa: kappa,
    kappav: kappav,
    Kcedil: Kcedil,
    kcedil: kcedil,
    Kcy: Kcy,
    kcy: kcy,
    Kfr: Kfr,
    kfr: kfr,
    kgreen: kgreen,
    KHcy: KHcy,
    khcy: khcy,
    KJcy: KJcy,
    kjcy: kjcy,
    Kopf: Kopf,
    kopf: kopf,
    Kscr: Kscr,
    kscr: kscr,
    lAarr: lAarr,
    Lacute: Lacute,
    lacute: lacute,
    laemptyv: laemptyv,
    lagran: lagran,
    Lambda: Lambda,
    lambda: lambda,
    lang: lang,
    Lang: Lang,
    langd: langd,
    langle: langle,
    lap: lap,
    Laplacetrf: Laplacetrf,
    laquo: laquo$1,
    larrb: larrb,
    larrbfs: larrbfs,
    larr: larr,
    Larr: Larr,
    lArr: lArr,
    larrfs: larrfs,
    larrhk: larrhk,
    larrlp: larrlp,
    larrpl: larrpl,
    larrsim: larrsim,
    larrtl: larrtl,
    latail: latail,
    lAtail: lAtail,
    lat: lat,
    late: late,
    lates: lates,
    lbarr: lbarr,
    lBarr: lBarr,
    lbbrk: lbbrk,
    lbrace: lbrace,
    lbrack: lbrack,
    lbrke: lbrke,
    lbrksld: lbrksld,
    lbrkslu: lbrkslu,
    Lcaron: Lcaron,
    lcaron: lcaron,
    Lcedil: Lcedil,
    lcedil: lcedil,
    lceil: lceil,
    lcub: lcub,
    Lcy: Lcy,
    lcy: lcy,
    ldca: ldca,
    ldquo: ldquo,
    ldquor: ldquor,
    ldrdhar: ldrdhar,
    ldrushar: ldrushar,
    ldsh: ldsh,
    le: le,
    lE: lE,
    LeftAngleBracket: LeftAngleBracket,
    LeftArrowBar: LeftArrowBar,
    leftarrow: leftarrow,
    LeftArrow: LeftArrow,
    Leftarrow: Leftarrow,
    LeftArrowRightArrow: LeftArrowRightArrow,
    leftarrowtail: leftarrowtail,
    LeftCeiling: LeftCeiling,
    LeftDoubleBracket: LeftDoubleBracket,
    LeftDownTeeVector: LeftDownTeeVector,
    LeftDownVectorBar: LeftDownVectorBar,
    LeftDownVector: LeftDownVector,
    LeftFloor: LeftFloor,
    leftharpoondown: leftharpoondown,
    leftharpoonup: leftharpoonup,
    leftleftarrows: leftleftarrows,
    leftrightarrow: leftrightarrow,
    LeftRightArrow: LeftRightArrow,
    Leftrightarrow: Leftrightarrow,
    leftrightarrows: leftrightarrows,
    leftrightharpoons: leftrightharpoons,
    leftrightsquigarrow: leftrightsquigarrow,
    LeftRightVector: LeftRightVector,
    LeftTeeArrow: LeftTeeArrow,
    LeftTee: LeftTee,
    LeftTeeVector: LeftTeeVector,
    leftthreetimes: leftthreetimes,
    LeftTriangleBar: LeftTriangleBar,
    LeftTriangle: LeftTriangle,
    LeftTriangleEqual: LeftTriangleEqual,
    LeftUpDownVector: LeftUpDownVector,
    LeftUpTeeVector: LeftUpTeeVector,
    LeftUpVectorBar: LeftUpVectorBar,
    LeftUpVector: LeftUpVector,
    LeftVectorBar: LeftVectorBar,
    LeftVector: LeftVector,
    lEg: lEg,
    leg: leg,
    leq: leq,
    leqq: leqq,
    leqslant: leqslant,
    lescc: lescc,
    les: les,
    lesdot: lesdot,
    lesdoto: lesdoto,
    lesdotor: lesdotor,
    lesg: lesg,
    lesges: lesges,
    lessapprox: lessapprox,
    lessdot: lessdot,
    lesseqgtr: lesseqgtr,
    lesseqqgtr: lesseqqgtr,
    LessEqualGreater: LessEqualGreater,
    LessFullEqual: LessFullEqual,
    LessGreater: LessGreater,
    lessgtr: lessgtr,
    LessLess: LessLess,
    lesssim: lesssim,
    LessSlantEqual: LessSlantEqual,
    LessTilde: LessTilde,
    lfisht: lfisht,
    lfloor: lfloor,
    Lfr: Lfr,
    lfr: lfr,
    lg: lg,
    lgE: lgE,
    lHar: lHar,
    lhard: lhard,
    lharu: lharu,
    lharul: lharul,
    lhblk: lhblk,
    LJcy: LJcy,
    ljcy: ljcy,
    llarr: llarr,
    ll: ll,
    Ll: Ll,
    llcorner: llcorner,
    Lleftarrow: Lleftarrow,
    llhard: llhard,
    lltri: lltri,
    Lmidot: Lmidot,
    lmidot: lmidot,
    lmoustache: lmoustache,
    lmoust: lmoust,
    lnap: lnap,
    lnapprox: lnapprox,
    lne: lne,
    lnE: lnE,
    lneq: lneq,
    lneqq: lneqq,
    lnsim: lnsim,
    loang: loang,
    loarr: loarr,
    lobrk: lobrk,
    longleftarrow: longleftarrow,
    LongLeftArrow: LongLeftArrow,
    Longleftarrow: Longleftarrow,
    longleftrightarrow: longleftrightarrow,
    LongLeftRightArrow: LongLeftRightArrow,
    Longleftrightarrow: Longleftrightarrow,
    longmapsto: longmapsto,
    longrightarrow: longrightarrow,
    LongRightArrow: LongRightArrow,
    Longrightarrow: Longrightarrow,
    looparrowleft: looparrowleft,
    looparrowright: looparrowright,
    lopar: lopar,
    Lopf: Lopf,
    lopf: lopf,
    loplus: loplus,
    lotimes: lotimes,
    lowast: lowast,
    lowbar: lowbar,
    LowerLeftArrow: LowerLeftArrow,
    LowerRightArrow: LowerRightArrow,
    loz: loz,
    lozenge: lozenge,
    lozf: lozf,
    lpar: lpar,
    lparlt: lparlt,
    lrarr: lrarr,
    lrcorner: lrcorner,
    lrhar: lrhar,
    lrhard: lrhard,
    lrm: lrm,
    lrtri: lrtri,
    lsaquo: lsaquo,
    lscr: lscr,
    Lscr: Lscr,
    lsh: lsh,
    Lsh: Lsh,
    lsim: lsim,
    lsime: lsime,
    lsimg: lsimg,
    lsqb: lsqb,
    lsquo: lsquo,
    lsquor: lsquor,
    Lstrok: Lstrok,
    lstrok: lstrok,
    ltcc: ltcc,
    ltcir: ltcir,
    lt: lt$2,
    LT: LT$1,
    Lt: Lt,
    ltdot: ltdot,
    lthree: lthree,
    ltimes: ltimes,
    ltlarr: ltlarr,
    ltquest: ltquest,
    ltri: ltri,
    ltrie: ltrie,
    ltrif: ltrif,
    ltrPar: ltrPar,
    lurdshar: lurdshar,
    luruhar: luruhar,
    lvertneqq: lvertneqq,
    lvnE: lvnE,
    macr: macr$1,
    male: male,
    malt: malt,
    maltese: maltese,
    "Map": "⤅",
    map: map,
    mapsto: mapsto,
    mapstodown: mapstodown,
    mapstoleft: mapstoleft,
    mapstoup: mapstoup,
    marker: marker,
    mcomma: mcomma,
    Mcy: Mcy,
    mcy: mcy,
    mdash: mdash,
    mDDot: mDDot,
    measuredangle: measuredangle,
    MediumSpace: MediumSpace,
    Mellintrf: Mellintrf,
    Mfr: Mfr,
    mfr: mfr,
    mho: mho,
    micro: micro$1,
    midast: midast,
    midcir: midcir,
    mid: mid,
    middot: middot$1,
    minusb: minusb,
    minus: minus,
    minusd: minusd,
    minusdu: minusdu,
    MinusPlus: MinusPlus,
    mlcp: mlcp,
    mldr: mldr,
    mnplus: mnplus,
    models: models,
    Mopf: Mopf,
    mopf: mopf,
    mp: mp,
    mscr: mscr,
    Mscr: Mscr,
    mstpos: mstpos,
    Mu: Mu,
    mu: mu,
    multimap: multimap,
    mumap: mumap,
    nabla: nabla,
    Nacute: Nacute,
    nacute: nacute,
    nang: nang,
    nap: nap,
    napE: napE,
    napid: napid,
    napos: napos,
    napprox: napprox,
    natural: natural,
    naturals: naturals,
    natur: natur,
    nbsp: nbsp$1,
    nbump: nbump,
    nbumpe: nbumpe,
    ncap: ncap,
    Ncaron: Ncaron,
    ncaron: ncaron,
    Ncedil: Ncedil,
    ncedil: ncedil,
    ncong: ncong,
    ncongdot: ncongdot,
    ncup: ncup,
    Ncy: Ncy,
    ncy: ncy,
    ndash: ndash,
    nearhk: nearhk,
    nearr: nearr,
    neArr: neArr,
    nearrow: nearrow,
    ne: ne,
    nedot: nedot,
    NegativeMediumSpace: NegativeMediumSpace,
    NegativeThickSpace: NegativeThickSpace,
    NegativeThinSpace: NegativeThinSpace,
    NegativeVeryThinSpace: NegativeVeryThinSpace,
    nequiv: nequiv,
    nesear: nesear,
    nesim: nesim,
    NestedGreaterGreater: NestedGreaterGreater,
    NestedLessLess: NestedLessLess,
    NewLine: NewLine,
    nexist: nexist,
    nexists: nexists,
    Nfr: Nfr,
    nfr: nfr,
    ngE: ngE,
    nge: nge,
    ngeq: ngeq,
    ngeqq: ngeqq,
    ngeqslant: ngeqslant,
    nges: nges,
    nGg: nGg,
    ngsim: ngsim,
    nGt: nGt,
    ngt: ngt,
    ngtr: ngtr,
    nGtv: nGtv,
    nharr: nharr,
    nhArr: nhArr,
    nhpar: nhpar,
    ni: ni,
    nis: nis,
    nisd: nisd,
    niv: niv,
    NJcy: NJcy,
    njcy: njcy,
    nlarr: nlarr,
    nlArr: nlArr,
    nldr: nldr,
    nlE: nlE,
    nle: nle,
    nleftarrow: nleftarrow,
    nLeftarrow: nLeftarrow,
    nleftrightarrow: nleftrightarrow,
    nLeftrightarrow: nLeftrightarrow,
    nleq: nleq,
    nleqq: nleqq,
    nleqslant: nleqslant,
    nles: nles,
    nless: nless,
    nLl: nLl,
    nlsim: nlsim,
    nLt: nLt,
    nlt: nlt,
    nltri: nltri,
    nltrie: nltrie,
    nLtv: nLtv,
    nmid: nmid,
    NoBreak: NoBreak,
    NonBreakingSpace: NonBreakingSpace,
    nopf: nopf,
    Nopf: Nopf,
    Not: Not,
    not: not$1,
    NotCongruent: NotCongruent,
    NotCupCap: NotCupCap,
    NotDoubleVerticalBar: NotDoubleVerticalBar,
    NotElement: NotElement,
    NotEqual: NotEqual,
    NotEqualTilde: NotEqualTilde,
    NotExists: NotExists,
    NotGreater: NotGreater,
    NotGreaterEqual: NotGreaterEqual,
    NotGreaterFullEqual: NotGreaterFullEqual,
    NotGreaterGreater: NotGreaterGreater,
    NotGreaterLess: NotGreaterLess,
    NotGreaterSlantEqual: NotGreaterSlantEqual,
    NotGreaterTilde: NotGreaterTilde,
    NotHumpDownHump: NotHumpDownHump,
    NotHumpEqual: NotHumpEqual,
    notin: notin,
    notindot: notindot,
    notinE: notinE,
    notinva: notinva,
    notinvb: notinvb,
    notinvc: notinvc,
    NotLeftTriangleBar: NotLeftTriangleBar,
    NotLeftTriangle: NotLeftTriangle,
    NotLeftTriangleEqual: NotLeftTriangleEqual,
    NotLess: NotLess,
    NotLessEqual: NotLessEqual,
    NotLessGreater: NotLessGreater,
    NotLessLess: NotLessLess,
    NotLessSlantEqual: NotLessSlantEqual,
    NotLessTilde: NotLessTilde,
    NotNestedGreaterGreater: NotNestedGreaterGreater,
    NotNestedLessLess: NotNestedLessLess,
    notni: notni,
    notniva: notniva,
    notnivb: notnivb,
    notnivc: notnivc,
    NotPrecedes: NotPrecedes,
    NotPrecedesEqual: NotPrecedesEqual,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    NotReverseElement: NotReverseElement,
    NotRightTriangleBar: NotRightTriangleBar,
    NotRightTriangle: NotRightTriangle,
    NotRightTriangleEqual: NotRightTriangleEqual,
    NotSquareSubset: NotSquareSubset,
    NotSquareSubsetEqual: NotSquareSubsetEqual,
    NotSquareSuperset: NotSquareSuperset,
    NotSquareSupersetEqual: NotSquareSupersetEqual,
    NotSubset: NotSubset,
    NotSubsetEqual: NotSubsetEqual,
    NotSucceeds: NotSucceeds,
    NotSucceedsEqual: NotSucceedsEqual,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    NotSucceedsTilde: NotSucceedsTilde,
    NotSuperset: NotSuperset,
    NotSupersetEqual: NotSupersetEqual,
    NotTilde: NotTilde,
    NotTildeEqual: NotTildeEqual,
    NotTildeFullEqual: NotTildeFullEqual,
    NotTildeTilde: NotTildeTilde,
    NotVerticalBar: NotVerticalBar,
    nparallel: nparallel,
    npar: npar,
    nparsl: nparsl,
    npart: npart,
    npolint: npolint,
    npr: npr,
    nprcue: nprcue,
    nprec: nprec,
    npreceq: npreceq,
    npre: npre,
    nrarrc: nrarrc,
    nrarr: nrarr,
    nrArr: nrArr,
    nrarrw: nrarrw,
    nrightarrow: nrightarrow,
    nRightarrow: nRightarrow,
    nrtri: nrtri,
    nrtrie: nrtrie,
    nsc: nsc,
    nsccue: nsccue,
    nsce: nsce,
    Nscr: Nscr,
    nscr: nscr,
    nshortmid: nshortmid,
    nshortparallel: nshortparallel,
    nsim: nsim,
    nsime: nsime,
    nsimeq: nsimeq,
    nsmid: nsmid,
    nspar: nspar,
    nsqsube: nsqsube,
    nsqsupe: nsqsupe,
    nsub: nsub,
    nsubE: nsubE,
    nsube: nsube,
    nsubset: nsubset,
    nsubseteq: nsubseteq,
    nsubseteqq: nsubseteqq,
    nsucc: nsucc,
    nsucceq: nsucceq,
    nsup: nsup,
    nsupE: nsupE,
    nsupe: nsupe,
    nsupset: nsupset,
    nsupseteq: nsupseteq,
    nsupseteqq: nsupseteqq,
    ntgl: ntgl,
    Ntilde: Ntilde$1,
    ntilde: ntilde$1,
    ntlg: ntlg,
    ntriangleleft: ntriangleleft,
    ntrianglelefteq: ntrianglelefteq,
    ntriangleright: ntriangleright,
    ntrianglerighteq: ntrianglerighteq,
    Nu: Nu,
    nu: nu,
    num: num,
    numero: numero,
    numsp: numsp,
    nvap: nvap,
    nvdash: nvdash,
    nvDash: nvDash,
    nVdash: nVdash,
    nVDash: nVDash,
    nvge: nvge,
    nvgt: nvgt,
    nvHarr: nvHarr,
    nvinfin: nvinfin,
    nvlArr: nvlArr,
    nvle: nvle,
    nvlt: nvlt,
    nvltrie: nvltrie,
    nvrArr: nvrArr,
    nvrtrie: nvrtrie,
    nvsim: nvsim,
    nwarhk: nwarhk,
    nwarr: nwarr,
    nwArr: nwArr,
    nwarrow: nwarrow,
    nwnear: nwnear,
    Oacute: Oacute$1,
    oacute: oacute$1,
    oast: oast,
    Ocirc: Ocirc$1,
    ocirc: ocirc$1,
    ocir: ocir,
    Ocy: Ocy,
    ocy: ocy,
    odash: odash,
    Odblac: Odblac,
    odblac: odblac,
    odiv: odiv,
    odot: odot,
    odsold: odsold,
    OElig: OElig,
    oelig: oelig,
    ofcir: ofcir,
    Ofr: Ofr,
    ofr: ofr,
    ogon: ogon,
    Ograve: Ograve$1,
    ograve: ograve$1,
    ogt: ogt,
    ohbar: ohbar,
    ohm: ohm,
    oint: oint,
    olarr: olarr,
    olcir: olcir,
    olcross: olcross,
    oline: oline,
    olt: olt,
    Omacr: Omacr,
    omacr: omacr,
    Omega: Omega,
    omega: omega,
    Omicron: Omicron,
    omicron: omicron,
    omid: omid,
    ominus: ominus,
    Oopf: Oopf,
    oopf: oopf,
    opar: opar,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    OpenCurlyQuote: OpenCurlyQuote,
    operp: operp,
    oplus: oplus,
    orarr: orarr,
    Or: Or,
    or: or,
    ord: ord,
    order: order,
    orderof: orderof,
    ordf: ordf$1,
    ordm: ordm$1,
    origof: origof,
    oror: oror,
    orslope: orslope,
    orv: orv,
    oS: oS,
    Oscr: Oscr,
    oscr: oscr,
    Oslash: Oslash$1,
    oslash: oslash$1,
    osol: osol,
    Otilde: Otilde$1,
    otilde: otilde$1,
    otimesas: otimesas,
    Otimes: Otimes,
    otimes: otimes,
    Ouml: Ouml$1,
    ouml: ouml$1,
    ovbar: ovbar,
    OverBar: OverBar,
    OverBrace: OverBrace,
    OverBracket: OverBracket,
    OverParenthesis: OverParenthesis,
    para: para$1,
    parallel: parallel,
    par: par,
    parsim: parsim,
    parsl: parsl,
    part: part,
    PartialD: PartialD,
    Pcy: Pcy,
    pcy: pcy,
    percnt: percnt,
    period: period,
    permil: permil,
    perp: perp,
    pertenk: pertenk,
    Pfr: Pfr,
    pfr: pfr,
    Phi: Phi,
    phi: phi,
    phiv: phiv,
    phmmat: phmmat,
    phone: phone,
    Pi: Pi,
    pi: pi,
    pitchfork: pitchfork,
    piv: piv,
    planck: planck,
    planckh: planckh,
    plankv: plankv,
    plusacir: plusacir,
    plusb: plusb,
    pluscir: pluscir,
    plus: plus,
    plusdo: plusdo,
    plusdu: plusdu,
    pluse: pluse,
    PlusMinus: PlusMinus,
    plusmn: plusmn$1,
    plussim: plussim,
    plustwo: plustwo,
    pm: pm,
    Poincareplane: Poincareplane,
    pointint: pointint,
    popf: popf,
    Popf: Popf,
    pound: pound$1,
    prap: prap,
    Pr: Pr,
    pr: pr,
    prcue: prcue,
    precapprox: precapprox,
    prec: prec,
    preccurlyeq: preccurlyeq,
    Precedes: Precedes,
    PrecedesEqual: PrecedesEqual,
    PrecedesSlantEqual: PrecedesSlantEqual,
    PrecedesTilde: PrecedesTilde,
    preceq: preceq,
    precnapprox: precnapprox,
    precneqq: precneqq,
    precnsim: precnsim,
    pre: pre,
    prE: prE,
    precsim: precsim,
    prime: prime,
    Prime: Prime,
    primes: primes,
    prnap: prnap,
    prnE: prnE,
    prnsim: prnsim,
    prod: prod,
    Product: Product,
    profalar: profalar,
    profline: profline,
    profsurf: profsurf,
    prop: prop,
    Proportional: Proportional,
    Proportion: Proportion,
    propto: propto,
    prsim: prsim,
    prurel: prurel,
    Pscr: Pscr,
    pscr: pscr,
    Psi: Psi,
    psi: psi,
    puncsp: puncsp,
    Qfr: Qfr,
    qfr: qfr,
    qint: qint,
    qopf: qopf,
    Qopf: Qopf,
    qprime: qprime,
    Qscr: Qscr,
    qscr: qscr,
    quaternions: quaternions,
    quatint: quatint,
    quest: quest,
    questeq: questeq,
    quot: quot$2,
    QUOT: QUOT$1,
    rAarr: rAarr,
    race: race,
    Racute: Racute,
    racute: racute,
    radic: radic,
    raemptyv: raemptyv,
    rang: rang,
    Rang: Rang,
    rangd: rangd,
    range: range,
    rangle: rangle,
    raquo: raquo$1,
    rarrap: rarrap,
    rarrb: rarrb,
    rarrbfs: rarrbfs,
    rarrc: rarrc,
    rarr: rarr,
    Rarr: Rarr,
    rArr: rArr,
    rarrfs: rarrfs,
    rarrhk: rarrhk,
    rarrlp: rarrlp,
    rarrpl: rarrpl,
    rarrsim: rarrsim,
    Rarrtl: Rarrtl,
    rarrtl: rarrtl,
    rarrw: rarrw,
    ratail: ratail,
    rAtail: rAtail,
    ratio: ratio,
    rationals: rationals,
    rbarr: rbarr,
    rBarr: rBarr,
    RBarr: RBarr,
    rbbrk: rbbrk,
    rbrace: rbrace,
    rbrack: rbrack,
    rbrke: rbrke,
    rbrksld: rbrksld,
    rbrkslu: rbrkslu,
    Rcaron: Rcaron,
    rcaron: rcaron,
    Rcedil: Rcedil,
    rcedil: rcedil,
    rceil: rceil,
    rcub: rcub,
    Rcy: Rcy,
    rcy: rcy,
    rdca: rdca,
    rdldhar: rdldhar,
    rdquo: rdquo,
    rdquor: rdquor,
    rdsh: rdsh,
    real: real,
    realine: realine,
    realpart: realpart,
    reals: reals,
    Re: Re,
    rect: rect,
    reg: reg$1,
    REG: REG$1,
    ReverseElement: ReverseElement,
    ReverseEquilibrium: ReverseEquilibrium,
    ReverseUpEquilibrium: ReverseUpEquilibrium,
    rfisht: rfisht,
    rfloor: rfloor,
    rfr: rfr,
    Rfr: Rfr,
    rHar: rHar,
    rhard: rhard,
    rharu: rharu,
    rharul: rharul,
    Rho: Rho,
    rho: rho,
    rhov: rhov,
    RightAngleBracket: RightAngleBracket,
    RightArrowBar: RightArrowBar,
    rightarrow: rightarrow,
    RightArrow: RightArrow,
    Rightarrow: Rightarrow,
    RightArrowLeftArrow: RightArrowLeftArrow,
    rightarrowtail: rightarrowtail,
    RightCeiling: RightCeiling,
    RightDoubleBracket: RightDoubleBracket,
    RightDownTeeVector: RightDownTeeVector,
    RightDownVectorBar: RightDownVectorBar,
    RightDownVector: RightDownVector,
    RightFloor: RightFloor,
    rightharpoondown: rightharpoondown,
    rightharpoonup: rightharpoonup,
    rightleftarrows: rightleftarrows,
    rightleftharpoons: rightleftharpoons,
    rightrightarrows: rightrightarrows,
    rightsquigarrow: rightsquigarrow,
    RightTeeArrow: RightTeeArrow,
    RightTee: RightTee,
    RightTeeVector: RightTeeVector,
    rightthreetimes: rightthreetimes,
    RightTriangleBar: RightTriangleBar,
    RightTriangle: RightTriangle,
    RightTriangleEqual: RightTriangleEqual,
    RightUpDownVector: RightUpDownVector,
    RightUpTeeVector: RightUpTeeVector,
    RightUpVectorBar: RightUpVectorBar,
    RightUpVector: RightUpVector,
    RightVectorBar: RightVectorBar,
    RightVector: RightVector,
    ring: ring,
    risingdotseq: risingdotseq,
    rlarr: rlarr,
    rlhar: rlhar,
    rlm: rlm,
    rmoustache: rmoustache,
    rmoust: rmoust,
    rnmid: rnmid,
    roang: roang,
    roarr: roarr,
    robrk: robrk,
    ropar: ropar,
    ropf: ropf,
    Ropf: Ropf,
    roplus: roplus,
    rotimes: rotimes,
    RoundImplies: RoundImplies,
    rpar: rpar,
    rpargt: rpargt,
    rppolint: rppolint,
    rrarr: rrarr,
    Rrightarrow: Rrightarrow,
    rsaquo: rsaquo,
    rscr: rscr,
    Rscr: Rscr,
    rsh: rsh,
    Rsh: Rsh,
    rsqb: rsqb,
    rsquo: rsquo,
    rsquor: rsquor,
    rthree: rthree,
    rtimes: rtimes,
    rtri: rtri,
    rtrie: rtrie,
    rtrif: rtrif,
    rtriltri: rtriltri,
    RuleDelayed: RuleDelayed,
    ruluhar: ruluhar,
    rx: rx,
    Sacute: Sacute,
    sacute: sacute,
    sbquo: sbquo,
    scap: scap,
    Scaron: Scaron,
    scaron: scaron,
    Sc: Sc,
    sc: sc,
    sccue: sccue,
    sce: sce,
    scE: scE,
    Scedil: Scedil,
    scedil: scedil,
    Scirc: Scirc,
    scirc: scirc,
    scnap: scnap,
    scnE: scnE,
    scnsim: scnsim,
    scpolint: scpolint,
    scsim: scsim,
    Scy: Scy,
    scy: scy,
    sdotb: sdotb,
    sdot: sdot,
    sdote: sdote,
    searhk: searhk,
    searr: searr,
    seArr: seArr,
    searrow: searrow,
    sect: sect$1,
    semi: semi,
    seswar: seswar,
    setminus: setminus,
    setmn: setmn,
    sext: sext,
    Sfr: Sfr,
    sfr: sfr,
    sfrown: sfrown,
    sharp: sharp,
    SHCHcy: SHCHcy,
    shchcy: shchcy,
    SHcy: SHcy,
    shcy: shcy,
    ShortDownArrow: ShortDownArrow,
    ShortLeftArrow: ShortLeftArrow,
    shortmid: shortmid,
    shortparallel: shortparallel,
    ShortRightArrow: ShortRightArrow,
    ShortUpArrow: ShortUpArrow,
    shy: shy$1,
    Sigma: Sigma,
    sigma: sigma,
    sigmaf: sigmaf,
    sigmav: sigmav,
    sim: sim,
    simdot: simdot,
    sime: sime,
    simeq: simeq,
    simg: simg,
    simgE: simgE,
    siml: siml,
    simlE: simlE,
    simne: simne,
    simplus: simplus,
    simrarr: simrarr,
    slarr: slarr,
    SmallCircle: SmallCircle,
    smallsetminus: smallsetminus,
    smashp: smashp,
    smeparsl: smeparsl,
    smid: smid,
    smile: smile,
    smt: smt,
    smte: smte,
    smtes: smtes,
    SOFTcy: SOFTcy,
    softcy: softcy,
    solbar: solbar,
    solb: solb,
    sol: sol,
    Sopf: Sopf,
    sopf: sopf,
    spades: spades,
    spadesuit: spadesuit,
    spar: spar,
    sqcap: sqcap,
    sqcaps: sqcaps,
    sqcup: sqcup,
    sqcups: sqcups,
    Sqrt: Sqrt,
    sqsub: sqsub,
    sqsube: sqsube,
    sqsubset: sqsubset,
    sqsubseteq: sqsubseteq,
    sqsup: sqsup,
    sqsupe: sqsupe,
    sqsupset: sqsupset,
    sqsupseteq: sqsupseteq,
    square: square,
    Square: Square,
    SquareIntersection: SquareIntersection,
    SquareSubset: SquareSubset,
    SquareSubsetEqual: SquareSubsetEqual,
    SquareSuperset: SquareSuperset,
    SquareSupersetEqual: SquareSupersetEqual,
    SquareUnion: SquareUnion,
    squarf: squarf,
    squ: squ,
    squf: squf,
    srarr: srarr,
    Sscr: Sscr,
    sscr: sscr,
    ssetmn: ssetmn,
    ssmile: ssmile,
    sstarf: sstarf,
    Star: Star,
    star: star,
    starf: starf,
    straightepsilon: straightepsilon,
    straightphi: straightphi,
    strns: strns,
    sub: sub,
    Sub: Sub,
    subdot: subdot,
    subE: subE,
    sube: sube,
    subedot: subedot,
    submult: submult,
    subnE: subnE,
    subne: subne,
    subplus: subplus,
    subrarr: subrarr,
    subset: subset,
    Subset: Subset,
    subseteq: subseteq,
    subseteqq: subseteqq,
    SubsetEqual: SubsetEqual,
    subsetneq: subsetneq,
    subsetneqq: subsetneqq,
    subsim: subsim,
    subsub: subsub,
    subsup: subsup,
    succapprox: succapprox,
    succ: succ,
    succcurlyeq: succcurlyeq,
    Succeeds: Succeeds,
    SucceedsEqual: SucceedsEqual,
    SucceedsSlantEqual: SucceedsSlantEqual,
    SucceedsTilde: SucceedsTilde,
    succeq: succeq,
    succnapprox: succnapprox,
    succneqq: succneqq,
    succnsim: succnsim,
    succsim: succsim,
    SuchThat: SuchThat,
    sum: sum,
    Sum: Sum,
    sung: sung,
    sup1: sup1$1,
    sup2: sup2$1,
    sup3: sup3$1,
    sup: sup,
    Sup: Sup,
    supdot: supdot,
    supdsub: supdsub,
    supE: supE,
    supe: supe,
    supedot: supedot,
    Superset: Superset,
    SupersetEqual: SupersetEqual,
    suphsol: suphsol,
    suphsub: suphsub,
    suplarr: suplarr,
    supmult: supmult,
    supnE: supnE,
    supne: supne,
    supplus: supplus,
    supset: supset,
    Supset: Supset,
    supseteq: supseteq,
    supseteqq: supseteqq,
    supsetneq: supsetneq,
    supsetneqq: supsetneqq,
    supsim: supsim,
    supsub: supsub,
    supsup: supsup,
    swarhk: swarhk,
    swarr: swarr,
    swArr: swArr,
    swarrow: swarrow,
    swnwar: swnwar,
    szlig: szlig$1,
    Tab: Tab,
    target: target,
    Tau: Tau,
    tau: tau,
    tbrk: tbrk,
    Tcaron: Tcaron,
    tcaron: tcaron,
    Tcedil: Tcedil,
    tcedil: tcedil,
    Tcy: Tcy,
    tcy: tcy,
    tdot: tdot,
    telrec: telrec,
    Tfr: Tfr,
    tfr: tfr,
    there4: there4,
    therefore: therefore,
    Therefore: Therefore,
    Theta: Theta,
    theta: theta,
    thetasym: thetasym,
    thetav: thetav,
    thickapprox: thickapprox,
    thicksim: thicksim,
    ThickSpace: ThickSpace,
    ThinSpace: ThinSpace,
    thinsp: thinsp,
    thkap: thkap,
    thksim: thksim,
    THORN: THORN$1,
    thorn: thorn$1,
    tilde: tilde,
    Tilde: Tilde,
    TildeEqual: TildeEqual,
    TildeFullEqual: TildeFullEqual,
    TildeTilde: TildeTilde,
    timesbar: timesbar,
    timesb: timesb,
    times: times$1,
    timesd: timesd,
    tint: tint,
    toea: toea,
    topbot: topbot,
    topcir: topcir,
    top: esm_top,
    Topf: Topf,
    topf: topf,
    topfork: topfork,
    tosa: tosa,
    tprime: tprime,
    trade: trade,
    TRADE: TRADE,
    triangle: triangle,
    triangledown: triangledown,
    triangleleft: triangleleft,
    trianglelefteq: trianglelefteq,
    triangleq: triangleq,
    triangleright: triangleright,
    trianglerighteq: trianglerighteq,
    tridot: tridot,
    trie: trie,
    triminus: triminus,
    TripleDot: TripleDot,
    triplus: triplus,
    trisb: trisb,
    tritime: tritime,
    trpezium: trpezium,
    Tscr: Tscr,
    tscr: tscr,
    TScy: TScy,
    tscy: tscy,
    TSHcy: TSHcy,
    tshcy: tshcy,
    Tstrok: Tstrok,
    tstrok: tstrok,
    twixt: twixt,
    twoheadleftarrow: twoheadleftarrow,
    twoheadrightarrow: twoheadrightarrow,
    Uacute: Uacute$1,
    uacute: uacute$1,
    uarr: uarr,
    Uarr: Uarr,
    uArr: uArr,
    Uarrocir: Uarrocir,
    Ubrcy: Ubrcy,
    ubrcy: ubrcy,
    Ubreve: Ubreve,
    ubreve: ubreve,
    Ucirc: Ucirc$1,
    ucirc: ucirc$1,
    Ucy: Ucy,
    ucy: ucy,
    udarr: udarr,
    Udblac: Udblac,
    udblac: udblac,
    udhar: udhar,
    ufisht: ufisht,
    Ufr: Ufr,
    ufr: ufr,
    Ugrave: Ugrave$1,
    ugrave: ugrave$1,
    uHar: uHar,
    uharl: uharl,
    uharr: uharr,
    uhblk: uhblk,
    ulcorn: ulcorn,
    ulcorner: ulcorner,
    ulcrop: ulcrop,
    ultri: ultri,
    Umacr: Umacr,
    umacr: umacr,
    uml: uml$1,
    UnderBar: UnderBar,
    UnderBrace: UnderBrace,
    UnderBracket: UnderBracket,
    UnderParenthesis: UnderParenthesis,
    Union: Union,
    UnionPlus: UnionPlus,
    Uogon: Uogon,
    uogon: uogon,
    Uopf: Uopf,
    uopf: uopf,
    UpArrowBar: UpArrowBar,
    uparrow: uparrow,
    UpArrow: UpArrow,
    Uparrow: Uparrow,
    UpArrowDownArrow: UpArrowDownArrow,
    updownarrow: updownarrow,
    UpDownArrow: UpDownArrow,
    Updownarrow: Updownarrow,
    UpEquilibrium: UpEquilibrium,
    upharpoonleft: upharpoonleft,
    upharpoonright: upharpoonright,
    uplus: uplus,
    UpperLeftArrow: UpperLeftArrow,
    UpperRightArrow: UpperRightArrow,
    upsi: upsi,
    Upsi: Upsi,
    upsih: upsih,
    Upsilon: Upsilon,
    upsilon: upsilon,
    UpTeeArrow: UpTeeArrow,
    UpTee: UpTee,
    upuparrows: upuparrows,
    urcorn: urcorn,
    urcorner: urcorner,
    urcrop: urcrop,
    Uring: Uring,
    uring: uring,
    urtri: urtri,
    Uscr: Uscr,
    uscr: uscr,
    utdot: utdot,
    Utilde: Utilde,
    utilde: utilde,
    utri: utri,
    utrif: utrif,
    uuarr: uuarr,
    Uuml: Uuml$1,
    uuml: uuml$1,
    uwangle: uwangle,
    vangrt: vangrt,
    varepsilon: varepsilon,
    varkappa: varkappa,
    varnothing: varnothing,
    varphi: varphi,
    varpi: varpi,
    varpropto: varpropto,
    varr: varr,
    vArr: vArr,
    varrho: varrho,
    varsigma: varsigma,
    varsubsetneq: varsubsetneq,
    varsubsetneqq: varsubsetneqq,
    varsupsetneq: varsupsetneq,
    varsupsetneqq: varsupsetneqq,
    vartheta: vartheta,
    vartriangleleft: vartriangleleft,
    vartriangleright: vartriangleright,
    vBar: vBar,
    Vbar: Vbar,
    vBarv: vBarv,
    Vcy: Vcy,
    vcy: vcy,
    vdash: vdash,
    vDash: vDash,
    Vdash: Vdash,
    VDash: VDash,
    Vdashl: Vdashl,
    veebar: veebar,
    vee: vee,
    Vee: Vee,
    veeeq: veeeq,
    vellip: vellip,
    verbar: verbar,
    Verbar: Verbar,
    vert: vert,
    Vert: Vert,
    VerticalBar: VerticalBar,
    VerticalLine: VerticalLine,
    VerticalSeparator: VerticalSeparator,
    VerticalTilde: VerticalTilde,
    VeryThinSpace: VeryThinSpace,
    Vfr: Vfr,
    vfr: vfr,
    vltri: vltri,
    vnsub: vnsub,
    vnsup: vnsup,
    Vopf: Vopf,
    vopf: vopf,
    vprop: vprop,
    vrtri: vrtri,
    Vscr: Vscr,
    vscr: vscr,
    vsubnE: vsubnE,
    vsubne: vsubne,
    vsupnE: vsupnE,
    vsupne: vsupne,
    Vvdash: Vvdash,
    vzigzag: vzigzag,
    Wcirc: Wcirc,
    wcirc: wcirc,
    wedbar: wedbar,
    wedge: wedge,
    Wedge: Wedge,
    wedgeq: wedgeq,
    weierp: weierp,
    Wfr: Wfr,
    wfr: wfr,
    Wopf: Wopf,
    wopf: wopf,
    wp: wp,
    wr: wr,
    wreath: wreath,
    Wscr: Wscr,
    wscr: wscr,
    xcap: xcap,
    xcirc: xcirc,
    xcup: xcup,
    xdtri: xdtri,
    Xfr: Xfr,
    xfr: xfr,
    xharr: xharr,
    xhArr: xhArr,
    Xi: Xi,
    xi: xi,
    xlarr: xlarr,
    xlArr: xlArr,
    xmap: xmap,
    xnis: xnis,
    xodot: xodot,
    Xopf: Xopf,
    xopf: xopf,
    xoplus: xoplus,
    xotime: xotime,
    xrarr: xrarr,
    xrArr: xrArr,
    Xscr: Xscr,
    xscr: xscr,
    xsqcup: xsqcup,
    xuplus: xuplus,
    xutri: xutri,
    xvee: xvee,
    xwedge: xwedge,
    Yacute: Yacute$1,
    yacute: yacute$1,
    YAcy: YAcy,
    yacy: yacy,
    Ycirc: Ycirc,
    ycirc: ycirc,
    Ycy: Ycy,
    ycy: ycy,
    yen: yen$1,
    Yfr: Yfr,
    yfr: yfr,
    YIcy: YIcy,
    yicy: yicy,
    Yopf: Yopf,
    yopf: yopf,
    Yscr: Yscr,
    yscr: yscr,
    YUcy: YUcy,
    yucy: yucy,
    yuml: yuml$1,
    Yuml: Yuml,
    Zacute: Zacute,
    zacute: zacute,
    Zcaron: Zcaron,
    zcaron: zcaron,
    Zcy: Zcy,
    zcy: zcy,
    Zdot: Zdot,
    zdot: zdot,
    zeetrf: zeetrf,
    ZeroWidthSpace: ZeroWidthSpace,
    Zeta: Zeta,
    zeta: zeta,
    zfr: zfr,
    Zfr: Zfr,
    ZHcy: ZHcy,
    zhcy: zhcy,
    zigrarr: zigrarr,
    zopf: zopf,
    Zopf: Zopf,
    Zscr: Zscr,
    zscr: zscr,
    zwj: zwj,
    zwnj: zwnj
};
var Aacute = "Á";
var aacute = "á";
var Acirc = "Â";
var acirc = "â";
var acute = "´";
var AElig = "Æ";
var aelig = "æ";
var Agrave = "À";
var agrave = "à";
var amp$1 = "&";
var AMP = "&";
var Aring = "Å";
var aring = "å";
var Atilde = "Ã";
var atilde = "ã";
var Auml = "Ä";
var auml = "ä";
var brvbar = "¦";
var Ccedil = "Ç";
var ccedil = "ç";
var cedil = "¸";
var cent = "¢";
var copy = "©";
var COPY = "©";
var curren = "¤";
var deg = "°";
var divide = "÷";
var Eacute = "É";
var eacute = "é";
var Ecirc = "Ê";
var ecirc = "ê";
var Egrave = "È";
var egrave = "è";
var ETH = "Ð";
var eth = "ð";
var Euml = "Ë";
var euml = "ë";
var frac12 = "½";
var frac14 = "¼";
var frac34 = "¾";
var gt$1 = ">";
var GT = ">";
var Iacute = "Í";
var iacute = "í";
var Icirc = "Î";
var icirc = "î";
var iexcl = "¡";
var Igrave = "Ì";
var igrave = "ì";
var iquest = "¿";
var Iuml = "Ï";
var iuml = "ï";
var laquo = "«";
var lt$1 = "<";
var LT = "<";
var macr = "¯";
var micro = "µ";
var middot = "·";
var nbsp = " ";
var not = "¬";
var Ntilde = "Ñ";
var ntilde = "ñ";
var Oacute = "Ó";
var oacute = "ó";
var Ocirc = "Ô";
var ocirc = "ô";
var Ograve = "Ò";
var ograve = "ò";
var ordf = "ª";
var ordm = "º";
var Oslash = "Ø";
var oslash = "ø";
var Otilde = "Õ";
var otilde = "õ";
var Ouml = "Ö";
var ouml = "ö";
var para = "¶";
var plusmn = "±";
var pound = "£";
var quot$1 = "\"";
var QUOT = "\"";
var raquo = "»";
var reg = "®";
var REG = "®";
var sect = "§";
var shy = "­";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var szlig = "ß";
var THORN = "Þ";
var thorn = "þ";
var times = "×";
var Uacute = "Ú";
var uacute = "ú";
var Ucirc = "Û";
var ucirc = "û";
var Ugrave = "Ù";
var ugrave = "ù";
var uml = "¨";
var Uuml = "Ü";
var uuml = "ü";
var Yacute = "Ý";
var yacute = "ý";
var yen = "¥";
var yuml = "ÿ";
var require$$1 = {
    Aacute: Aacute,
    aacute: aacute,
    Acirc: Acirc,
    acirc: acirc,
    acute: acute,
    AElig: AElig,
    aelig: aelig,
    Agrave: Agrave,
    agrave: agrave,
    amp: amp$1,
    AMP: AMP,
    Aring: Aring,
    aring: aring,
    Atilde: Atilde,
    atilde: atilde,
    Auml: Auml,
    auml: auml,
    brvbar: brvbar,
    Ccedil: Ccedil,
    ccedil: ccedil,
    cedil: cedil,
    cent: cent,
    copy: copy,
    COPY: COPY,
    curren: curren,
    deg: deg,
    divide: divide,
    Eacute: Eacute,
    eacute: eacute,
    Ecirc: Ecirc,
    ecirc: ecirc,
    Egrave: Egrave,
    egrave: egrave,
    ETH: ETH,
    eth: eth,
    Euml: Euml,
    euml: euml,
    frac12: frac12,
    frac14: frac14,
    frac34: frac34,
    gt: gt$1,
    GT: GT,
    Iacute: Iacute,
    iacute: iacute,
    Icirc: Icirc,
    icirc: icirc,
    iexcl: iexcl,
    Igrave: Igrave,
    igrave: igrave,
    iquest: iquest,
    Iuml: Iuml,
    iuml: iuml,
    laquo: laquo,
    lt: lt$1,
    LT: LT,
    macr: macr,
    micro: micro,
    middot: middot,
    nbsp: nbsp,
    not: not,
    Ntilde: Ntilde,
    ntilde: ntilde,
    Oacute: Oacute,
    oacute: oacute,
    Ocirc: Ocirc,
    ocirc: ocirc,
    Ograve: Ograve,
    ograve: ograve,
    ordf: ordf,
    ordm: ordm,
    Oslash: Oslash,
    oslash: oslash,
    Otilde: Otilde,
    otilde: otilde,
    Ouml: Ouml,
    ouml: ouml,
    para: para,
    plusmn: plusmn,
    pound: pound,
    quot: quot$1,
    QUOT: QUOT,
    raquo: raquo,
    reg: reg,
    REG: REG,
    sect: sect,
    shy: shy,
    sup1: sup1,
    sup2: sup2,
    sup3: sup3,
    szlig: szlig,
    THORN: THORN,
    thorn: thorn,
    times: times,
    Uacute: Uacute,
    uacute: uacute,
    Ucirc: Ucirc,
    ucirc: ucirc,
    Ugrave: Ugrave,
    ugrave: ugrave,
    uml: uml,
    Uuml: Uuml,
    uuml: uuml,
    Yacute: Yacute,
    yacute: yacute,
    yen: yen,
    yuml: yuml
};
var amp = "&";
var apos = "'";
var gt = ">";
var lt = "<";
var quot = "\"";
var require$$0$1 = {
    amp: amp,
    apos: apos,
    gt: gt,
    lt: lt,
    quot: quot
};
var decode_codepoint = {};
var require$$0 = {
    "0": 65533,
    "128": 8364,
    "130": 8218,
    "131": 402,
    "132": 8222,
    "133": 8230,
    "134": 8224,
    "135": 8225,
    "136": 710,
    "137": 8240,
    "138": 352,
    "139": 8249,
    "140": 338,
    "142": 381,
    "145": 8216,
    "146": 8217,
    "147": 8220,
    "148": 8221,
    "149": 8226,
    "150": 8211,
    "151": 8212,
    "152": 732,
    "153": 8482,
    "154": 353,
    "155": 8250,
    "156": 339,
    "158": 382,
    "159": 376
};
var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$2(require$$0);
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint$2 = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint$2(codePoint);
}
decode_codepoint.default = decodeCodePoint;
var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$1(require$$1$1);
var legacy_json_1 = __importDefault$1(require$$1);
var xml_json_1$1 = __importDefault$1(require$$0$1);
var decode_codepoint_1 = __importDefault$1(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
decode.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1$1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1$1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}
var encode = {};
var esm_importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = esm_importDefault(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = esm_importDefault(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function esm_escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = esm_escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}
(function (exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = decode;
    var encode_1 = encode;
    /**
     * Decodes a string with entities.
     *
     * @param data String to decode.
     * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
     * @deprecated Use `decodeXML` or `decodeHTML` directly.
     */
    function decode$1(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode$1;
    /**
     * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
     *
     * @param data String to decode.
     * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
     * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
     */
    function decodeStrict(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    /**
     * Encodes a string with entities.
     *
     * @param data String to encode.
     * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
     * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
     */
    function encode$1(data, level) {
        return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode$1;
    var encode_2 = encode;
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
    // Legacy aliases (deprecated)
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
    var decode_2 = decode;
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
    // Legacy aliases (deprecated)
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });
}(lib));
var ENTITY = '&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});';
var C_BACKSLASH$1 = 92;
var reBackslashOrAmp = /[\\&]/;
var ESCAPABLE = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]';
var reEntityOrEscapedChar = new RegExp("\\\\" + ESCAPABLE + "|" + ENTITY, 'gi');
var XMLSPECIAL = '[&<>"]';
var reXmlSpecial = new RegExp(XMLSPECIAL, 'g');
var unescapeChar = function (s) {
    if (s.charCodeAt(0) === C_BACKSLASH$1) {
        return s.charAt(1);
    }
    return lib.decodeHTML(s);
};
// Replace entities and backslash escapes with literal characters.
function unescapeString(s) {
    if (reBackslashOrAmp.test(s)) {
        return s.replace(reEntityOrEscapedChar, unescapeChar);
    }
    return s;
}
function normalizeURI(uri) {
    try {
        return encode_1(uri);
    }
    catch (err) {
        return uri;
    }
}
function replaceUnsafeChar(s) {
    switch (s) {
        case '&':
            return '&amp;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '"':
            return '&quot;';
        default:
            return s;
    }
}
function escapeXml(s) {
    if (reXmlSpecial.test(s)) {
        return s.replace(reXmlSpecial, replaceUnsafeChar);
    }
    return s;
}
function repeat(str, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(str);
    }
    return arr.join('');
}
function isEmpty(str) {
    if (!str) {
        return true;
    }
    return !/[^ \t]+/.test(str);
}
var NodeWalker = /** @class */ (function () {
    function NodeWalker(root) {
        this.current = root;
        this.root = root;
        this.entering = true;
    }
    NodeWalker.prototype.next = function () {
        var cur = this.current;
        var entering = this.entering;
        if (cur === null) {
            return null;
        }
        var container = isContainer(cur);
        if (entering && container) {
            if (cur.firstChild) {
                this.current = cur.firstChild;
                this.entering = true;
            }
            else {
                // stay on node but exit
                this.entering = false;
            }
        }
        else if (cur === this.root) {
            this.current = null;
        }
        else if (cur.next === null) {
            this.current = cur.parent;
            this.entering = false;
        }
        else {
            this.current = cur.next;
            this.entering = true;
        }
        return { entering: entering, node: cur };
    };
    NodeWalker.prototype.resumeAt = function (node, entering) {
        this.current = node;
        this.entering = entering === true;
    };
    return NodeWalker;
}());
function isContainer(node) {
    switch (node.type) {
        case 'document':
        case 'blockQuote':
        case 'list':
        case 'item':
        case 'paragraph':
        case 'heading':
        case 'emph':
        case 'strong':
        case 'strike':
        case 'link':
        case 'image':
        case 'table':
        case 'tableHead':
        case 'tableBody':
        case 'tableRow':
        case 'tableCell':
        case 'tableDelimRow':
        case 'customInline':
            return true;
        default:
            return false;
    }
}
var lastNodeId = 1;
var nodeMap = {};
function getNodeById(id) {
    return nodeMap[id];
}
function removeNodeById(id) {
    delete nodeMap[id];
}
function removeAllNode() {
    nodeMap = {};
}
var esm_Node = /** @class */ (function () {
    function Node(nodeType, sourcepos) {
        this.parent = null;
        this.prev = null;
        this.next = null;
        // only for container node
        this.firstChild = null;
        this.lastChild = null;
        // only for leaf node
        this.literal = null;
        if (nodeType === 'document') {
            this.id = -1;
        }
        else {
            this.id = lastNodeId++;
        }
        this.type = nodeType;
        this.sourcepos = sourcepos;
        nodeMap[this.id] = this;
    }
    Node.prototype.isContainer = function () {
        return isContainer(this);
    };
    Node.prototype.unlink = function () {
        if (this.prev) {
            this.prev.next = this.next;
        }
        else if (this.parent) {
            this.parent.firstChild = this.next;
        }
        if (this.next) {
            this.next.prev = this.prev;
        }
        else if (this.parent) {
            this.parent.lastChild = this.prev;
        }
        this.parent = null;
        this.next = null;
        this.prev = null;
    };
    Node.prototype.replaceWith = function (node) {
        this.insertBefore(node);
        this.unlink();
    };
    Node.prototype.insertAfter = function (sibling) {
        sibling.unlink();
        sibling.next = this.next;
        if (sibling.next) {
            sibling.next.prev = sibling;
        }
        sibling.prev = this;
        this.next = sibling;
        if (this.parent) {
            sibling.parent = this.parent;
            if (!sibling.next) {
                sibling.parent.lastChild = sibling;
            }
        }
    };
    Node.prototype.insertBefore = function (sibling) {
        sibling.unlink();
        sibling.prev = this.prev;
        if (sibling.prev) {
            sibling.prev.next = sibling;
        }
        sibling.next = this;
        this.prev = sibling;
        sibling.parent = this.parent;
        if (!sibling.prev) {
            sibling.parent.firstChild = sibling;
        }
    };
    Node.prototype.appendChild = function (child) {
        child.unlink();
        child.parent = this;
        if (this.lastChild) {
            this.lastChild.next = child;
            child.prev = this.lastChild;
            this.lastChild = child;
        }
        else {
            this.firstChild = child;
            this.lastChild = child;
        }
    };
    Node.prototype.prependChild = function (child) {
        child.unlink();
        child.parent = this;
        if (this.firstChild) {
            this.firstChild.prev = child;
            child.next = this.firstChild;
            this.firstChild = child;
        }
        else {
            this.firstChild = child;
            this.lastChild = child;
        }
    };
    Node.prototype.walker = function () {
        return new NodeWalker(this);
    };
    return Node;
}());
var BlockNode = /** @class */ (function (_super) {
    esm_extends(BlockNode, _super);
    function BlockNode(nodeType, sourcepos) {
        var _this = _super.call(this, nodeType, sourcepos) || this;
        // temporal data (for parsing)
        _this.open = true;
        _this.lineOffsets = null;
        _this.stringContent = null;
        _this.lastLineBlank = false;
        _this.lastLineChecked = false;
        _this.type = nodeType;
        return _this;
    }
    return BlockNode;
}(esm_Node));
var ListNode = /** @class */ (function (_super) {
    esm_extends(ListNode, _super);
    function ListNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listData = null;
        return _this;
    }
    return ListNode;
}(BlockNode));
var HeadingNode = /** @class */ (function (_super) {
    esm_extends(HeadingNode, _super);
    function HeadingNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 0;
        _this.headingType = 'atx';
        return _this;
    }
    return HeadingNode;
}(BlockNode));
var CodeBlockNode = /** @class */ (function (_super) {
    esm_extends(CodeBlockNode, _super);
    function CodeBlockNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFenced = false;
        _this.fenceChar = null;
        _this.fenceLength = 0;
        _this.fenceOffset = -1;
        _this.info = null;
        _this.infoPadding = 0;
        return _this;
    }
    return CodeBlockNode;
}(BlockNode));
var TableNode = /** @class */ (function (_super) {
    esm_extends(TableNode, _super);
    function TableNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = [];
        return _this;
    }
    return TableNode;
}(BlockNode));
var TableCellNode = /** @class */ (function (_super) {
    esm_extends(TableCellNode, _super);
    function TableCellNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startIdx = 0;
        _this.endIdx = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.ignored = false;
        return _this;
    }
    return TableCellNode;
}(BlockNode));
var RefDefNode = /** @class */ (function (_super) {
    esm_extends(RefDefNode, _super);
    function RefDefNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = '';
        _this.dest = '';
        _this.label = '';
        return _this;
    }
    return RefDefNode;
}(BlockNode));
var CustomBlockNode = /** @class */ (function (_super) {
    esm_extends(CustomBlockNode, _super);
    function CustomBlockNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.syntaxLength = 0;
        _this.offset = -1;
        _this.info = '';
        return _this;
    }
    return CustomBlockNode;
}(BlockNode));
var HtmlBlockNode = /** @class */ (function (_super) {
    esm_extends(HtmlBlockNode, _super);
    function HtmlBlockNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlBlockType = -1;
        return _this;
    }
    return HtmlBlockNode;
}(BlockNode));
var LinkNode = /** @class */ (function (_super) {
    esm_extends(LinkNode, _super);
    function LinkNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destination = null;
        _this.title = null;
        _this.extendedAutolink = false;
        return _this;
    }
    return LinkNode;
}(esm_Node));
var CodeNode = /** @class */ (function (_super) {
    esm_extends(CodeNode, _super);
    function CodeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tickCount = 0;
        return _this;
    }
    return CodeNode;
}(esm_Node));
var CustomInlineNode = /** @class */ (function (_super) {
    esm_extends(CustomInlineNode, _super);
    function CustomInlineNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.info = '';
        return _this;
    }
    return CustomInlineNode;
}(esm_Node));
function createNode(type, sourcepos) {
    switch (type) {
        case 'heading':
            return new HeadingNode(type, sourcepos);
        case 'list':
        case 'item':
            return new ListNode(type, sourcepos);
        case 'link':
        case 'image':
            return new LinkNode(type, sourcepos);
        case 'codeBlock':
            return new CodeBlockNode(type, sourcepos);
        case 'htmlBlock':
            return new HtmlBlockNode(type, sourcepos);
        case 'table':
            return new TableNode(type, sourcepos);
        case 'tableCell':
            return new TableCellNode(type, sourcepos);
        case 'document':
        case 'paragraph':
        case 'blockQuote':
        case 'thematicBreak':
        case 'tableRow':
        case 'tableBody':
        case 'tableHead':
        case 'frontMatter':
            return new BlockNode(type, sourcepos);
        case 'code':
            return new CodeNode(type, sourcepos);
        case 'refDef':
            return new RefDefNode(type, sourcepos);
        case 'customBlock':
            return new CustomBlockNode(type, sourcepos);
        case 'customInline':
            return new CustomInlineNode(type, sourcepos);
        default:
            return new esm_Node(type, sourcepos);
    }
}
function isCodeBlock(node) {
    return node.type === 'codeBlock';
}
function isHtmlBlock(node) {
    return node.type === 'htmlBlock';
}
function isHeading(node) {
    return node.type === 'heading';
}
function isList(node) {
    return node.type === 'list';
}
function isTable(node) {
    return node.type === 'table';
}
function isRefDef(node) {
    return node.type === 'refDef';
}
function isCustomBlock(node) {
    return node.type === 'customBlock';
}
function isCustomInline(node) {
    return node.type === 'customInline';
}
function esm_text(s, sourcepos) {
    var node = createNode('text', sourcepos);
    node.literal = s;
    return node;
}
var TAGNAME = '[A-Za-z][A-Za-z0-9-]*';
var ATTRIBUTENAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var UNQUOTEDVALUE = '[^"\'=<>`\\x00-\\x20]+';
var SINGLEQUOTEDVALUE = "'[^']*'";
var DOUBLEQUOTEDVALUE = '"[^"]*"';
var ATTRIBUTEVALUE = "(?:" + UNQUOTEDVALUE + "|" + SINGLEQUOTEDVALUE + "|" + DOUBLEQUOTEDVALUE + ")";
var ATTRIBUTEVALUESPEC = "" + '(?:\\s*=\\s*' + ATTRIBUTEVALUE + ")";
var ATTRIBUTE = "" + '(?:\\s+' + ATTRIBUTENAME + ATTRIBUTEVALUESPEC + "?)";
var OPENTAG = "<" + TAGNAME + ATTRIBUTE + "*\\s*/?>";
var CLOSETAG = "</" + TAGNAME + "\\s*[>]";
var HTMLCOMMENT = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var PROCESSINGINSTRUCTION = '[<][?].*?[?][>]';
var DECLARATION = '<![A-Z]+\\s+[^>]*>';
var CDATA = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
var HTMLTAG = "(?:" + OPENTAG + "|" + CLOSETAG + "|" + HTMLCOMMENT + "|" + PROCESSINGINSTRUCTION + "|" + DECLARATION + "|" + CDATA + ")";
var reHtmlTag = new RegExp("^" + HTMLTAG, 'i');
// derived from https://github.com/mathiasbynens/String.fromCodePoint
/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
var fromCodePoint;
if (String.fromCodePoint) {
    fromCodePoint = function (_) {
        try {
            return String.fromCodePoint(_);
        }
        catch (e) {
            if (e instanceof RangeError) {
                return String.fromCharCode(0xfffd);
            }
            throw e;
        }
    };
}
else {
    var stringFromCharCode_1 = String.fromCharCode;
    var floor_1 = Math.floor;
    fromCodePoint = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var MAX_SIZE = 0x4000;
        var codeUnits = [];
        var highSurrogate;
        var lowSurrogate;
        var index = -1;
        var length = args.length;
        if (!length) {
            return '';
        }
        var result = '';
        while (++index < length) {
            var codePoint = Number(args[index]);
            if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                codePoint < 0 || // not a valid Unicode code point
                codePoint > 0x10ffff || // not a valid Unicode code point
                floor_1(codePoint) !== codePoint // not an integer
            ) {
                return String.fromCharCode(0xfffd);
            }
            if (codePoint <= 0xffff) {
                // BMP code point
                codeUnits.push(codePoint);
            }
            else {
                // Astral code point; split in surrogate halves
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                codePoint -= 0x10000;
                highSurrogate = (codePoint >> 10) + 0xd800;
                lowSurrogate = (codePoint % 0x400) + 0xdc00;
                codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode_1.apply(void 0, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
}
var fromCodePoint$1 = fromCodePoint;
var DOMAIN = '(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+';
var PATH = '[^<\\s]*[^<?!.,:*_?~\\s]';
var EMAIL = '[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+';
function trimUnmatchedTrailingParens(source) {
    var trailingParen = /\)+$/.exec(source);
    if (trailingParen) {
        var count = 0;
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var ch = source_1[_i];
            if (ch === '(') {
                if (count < 0) {
                    count = 1;
                }
                else {
                    count += 1;
                }
            }
            else if (ch === ')') {
                count -= 1;
            }
        }
        if (count < 0) {
            var trimCount = Math.min(-count, trailingParen[0].length);
            return source.substring(0, source.length - trimCount);
        }
    }
    return source;
}
function trimTrailingEntity(source) {
    return source.replace(/&[A-Za-z0-9]+;$/, '');
}
function parseEmailLink(source) {
    var reEmailLink = new RegExp(EMAIL, 'g');
    var result = [];
    var m;
    while ((m = reEmailLink.exec(source))) {
        var text_1 = m[0];
        if (!/[_-]+$/.test(text_1)) {
            result.push({
                text: text_1,
                range: [m.index, m.index + text_1.length - 1],
                url: "mailto:" + text_1,
            });
        }
    }
    return result;
}
function parseUrlLink(source) {
    var reWwwAutolink = new RegExp("(www|https?://)." + DOMAIN + PATH, 'g');
    var result = [];
    var m;
    while ((m = reWwwAutolink.exec(source))) {
        var text_2 = trimTrailingEntity(trimUnmatchedTrailingParens(m[0]));
        var scheme = m[1] === 'www' ? 'http://' : '';
        result.push({
            text: text_2,
            range: [m.index, m.index + text_2.length - 1],
            url: "" + scheme + text_2,
        });
    }
    return result;
}
function baseAutolinkParser(source) {
    return esm_spreadArray(esm_spreadArray([], parseUrlLink(source)), parseEmailLink(source)).sort(function (a, b) { return a.range[0] - b.range[0]; });
}
function convertExtAutoLinks(walker, autolinkParser) {
    if (typeof autolinkParser === 'boolean') {
        autolinkParser = baseAutolinkParser;
    }
    var event;
    var _loop_1 = function () {
        var entering = event.entering, node = event.node;
        if (entering && node.type === 'text' && node.parent.type !== 'link') {
            var literal = node.literal;
            var linkInfos = autolinkParser(literal);
            if (!linkInfos || !linkInfos.length) {
                return "continue";
            }
            var lastIdx = 0;
            var _a = node.sourcepos[0], lineNum_1 = _a[0], chPos_1 = _a[1];
            var sourcepos = function (startIdx, endIdx) {
                return [
                    [lineNum_1, chPos_1 + startIdx],
                    [lineNum_1, chPos_1 + endIdx],
                ];
            };
            var newNodes = [];
            for (var _i = 0, linkInfos_1 = linkInfos; _i < linkInfos_1.length; _i++) {
                var _b = linkInfos_1[_i], range = _b.range, url = _b.url, linkText = _b.text;
                if (range[0] > lastIdx) {
                    newNodes.push(esm_text(literal.substring(lastIdx, range[0]), sourcepos(lastIdx, range[0] - 1)));
                }
                var linkNode = createNode('link', sourcepos.apply(void 0, range));
                linkNode.appendChild(esm_text(linkText, sourcepos.apply(void 0, range)));
                linkNode.destination = url;
                linkNode.extendedAutolink = true;
                newNodes.push(linkNode);
                lastIdx = range[1] + 1;
            }
            if (lastIdx < literal.length) {
                newNodes.push(esm_text(literal.substring(lastIdx), sourcepos(lastIdx, literal.length - 1)));
            }
            for (var _c = 0, newNodes_1 = newNodes; _c < newNodes_1.length; _c++) {
                var newNode = newNodes_1[_c];
                node.insertBefore(newNode);
            }
            node.unlink();
        }
    };
    while ((event = walker.next())) {
        _loop_1();
    }
}
function last(arr) {
    return arr[arr.length - 1];
}
// normalize a reference in reference link (remove []s, trim,
// collapse internal space, unicode case fold.
// See commonmark/commonmark.js#168.
function normalizeReference(str) {
    return str
        .slice(1, str.length - 1)
        .trim()
        .replace(/[ \t\r\n]+/, ' ')
        .toLowerCase()
        .toUpperCase();
}
function iterateObject(obj, iteratee) {
    Object.keys(obj).forEach(function (key) {
        iteratee(key, obj[key]);
    });
}
function omit(obj) {
    var propNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        propNames[_i - 1] = arguments[_i];
    }
    var resultMap = esm_assign({}, obj);
    propNames.forEach(function (key) {
        delete resultMap[key];
    });
    return resultMap;
}
function isEmptyObj(obj) {
    return !Object.keys(obj).length;
}
function clearObj(obj) {
    Object.keys(obj).forEach(function (key) {
        delete obj[key];
    });
}
var C_NEWLINE = 10;
var C_ASTERISK = 42;
var C_UNDERSCORE = 95;
var C_BACKTICK = 96;
var C_OPEN_BRACKET$1 = 91;
var C_CLOSE_BRACKET = 93;
var C_TILDE = 126;
var C_LESSTHAN$1 = 60;
var C_BANG = 33;
var C_BACKSLASH = 92;
var C_AMPERSAND = 38;
var C_OPEN_PAREN = 40;
var C_CLOSE_PAREN = 41;
var C_COLON = 58;
var C_SINGLEQUOTE = 39;
var C_DOUBLEQUOTE = 34;
var C_DOLLAR = 36;
// Some regexps used in inline parser:
var ESCAPED_CHAR = "\\\\" + ESCAPABLE;
var rePunctuation = new RegExp(/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/);
var reLinkTitle = new RegExp("^(?:\"(" + ESCAPED_CHAR + "|[^\"\\x00])*\"" +
    "|" +
    ("'(" + ESCAPED_CHAR + "|[^'\\x00])*'") +
    "|" +
    ("\\((" + ESCAPED_CHAR + "|[^()\\x00])*\\))"));
var reLinkDestinationBraces = /^(?:<(?:[^<>\n\\\x00]|\\.)*>)/;
var reEscapable = new RegExp("^" + ESCAPABLE);
var reEntityHere = new RegExp("^" + ENTITY, 'i');
var reTicks = /`+/;
var reTicksHere = /^`+/;
var reEllipses = /\.\.\./g;
var reDash = /--+/g;
var reEmailAutolink = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var reAutolink = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i;
var reSpnl = /^ *(?:\n *)?/;
var reWhitespaceChar = /^[ \t\n\x0b\x0c\x0d]/;
var reUnicodeWhitespaceChar = /^\s/;
var reFinalSpace = / *$/;
var reInitialSpace = /^ */;
var reSpaceAtEndOfLine = /^ *(?:\n|$)/;
var reLinkLabel = /^\[(?:[^\\\[\]]|\\.){0,1000}\]/;
// Matches a string of non-special characters.
var reMain = /^[^\n`\[\]\\!<&*_'"~$]+/m;
var InlineParser = /** @class */ (function () {
    function InlineParser(options) {
        // An InlineParser keeps track of a subject (a string to be parsed)
        // and a position in that subject.
        this.subject = '';
        this.delimiters = null; // used by handleDelim method
        this.brackets = null;
        this.pos = 0;
        this.lineStartNum = 0;
        this.lineIdx = 0;
        this.lineOffsets = [0];
        this.linePosOffset = 0;
        this.refMap = {};
        this.refLinkCandidateMap = {};
        this.refDefCandidateMap = {};
        this.options = options;
    }
    InlineParser.prototype.sourcepos = function (start, end) {
        var linePosOffset = this.linePosOffset + this.lineOffsets[this.lineIdx];
        var lineNum = this.lineStartNum + this.lineIdx;
        var startpos = [lineNum, start + linePosOffset];
        if (typeof end === 'number') {
            return [startpos, [lineNum, end + linePosOffset]];
        }
        return startpos;
    };
    InlineParser.prototype.nextLine = function () {
        this.lineIdx += 1;
        this.linePosOffset = -this.pos;
    };
    // If re matches at current position in the subject, advance
    // position in subject and return the match; otherwise return null.
    InlineParser.prototype.match = function (re) {
        var m = re.exec(this.subject.slice(this.pos));
        if (m === null) {
            return null;
        }
        this.pos += m.index + m[0].length;
        return m[0];
    };
    // Returns the code for the character at the current subject position, or -1
    // there are no more characters.
    InlineParser.prototype.peek = function () {
        if (this.pos < this.subject.length) {
            return this.subject.charCodeAt(this.pos);
        }
        return -1;
    };
    // Parse zero or more space characters, including at most one newline
    InlineParser.prototype.spnl = function () {
        this.match(reSpnl);
        return true;
    };
    // All of the parsers below try to match something at the current position
    // in the subject.  If they succeed in matching anything, they
    // return the inline matched, advancing the subject.
    // Attempt to parse backticks, adding either a backtick code span or a
    // literal sequence of backticks.
    InlineParser.prototype.parseBackticks = function (block) {
        var startpos = this.pos + 1;
        var ticks = this.match(reTicksHere);
        if (ticks === null) {
            return false;
        }
        var afterOpenTicks = this.pos;
        var matched;
        while ((matched = this.match(reTicks)) !== null) {
            if (matched === ticks) {
                var contents = this.subject.slice(afterOpenTicks, this.pos - ticks.length);
                var sourcepos = this.sourcepos(startpos, this.pos);
                var lines = contents.split('\n');
                if (lines.length > 1) {
                    var lastLine = last(lines);
                    this.lineIdx += lines.length - 1;
                    this.linePosOffset = -(this.pos - lastLine.length - ticks.length);
                    sourcepos[1] = this.sourcepos(this.pos);
                    contents = lines.join(' ');
                }
                var node = createNode('code', sourcepos);
                if (contents.length > 0 &&
                    contents.match(/[^ ]/) !== null &&
                    contents[0] == ' ' &&
                    contents[contents.length - 1] == ' ') {
                    node.literal = contents.slice(1, contents.length - 1);
                }
                else {
                    node.literal = contents;
                }
                node.tickCount = ticks.length;
                block.appendChild(node);
                return true;
            }
        }
        // If we got here, we didn't match a closing backtick sequence.
        this.pos = afterOpenTicks;
        block.appendChild(esm_text(ticks, this.sourcepos(startpos, this.pos - 1)));
        return true;
    };
    // Parse a backslash-escaped special character, adding either the escaped
    // character, a hard line break (if the backslash is followed by a newline),
    // or a literal backslash to the block's children.  Assumes current character
    // is a backslash.
    InlineParser.prototype.parseBackslash = function (block) {
        var subj = this.subject;
        var node;
        this.pos += 1;
        var startpos = this.pos;
        if (this.peek() === C_NEWLINE) {
            this.pos += 1;
            node = createNode('linebreak', this.sourcepos(this.pos - 1, this.pos));
            block.appendChild(node);
            this.nextLine();
        }
        else if (reEscapable.test(subj.charAt(this.pos))) {
            block.appendChild(esm_text(subj.charAt(this.pos), this.sourcepos(startpos, this.pos)));
            this.pos += 1;
        }
        else {
            block.appendChild(esm_text('\\', this.sourcepos(startpos, startpos)));
        }
        return true;
    };
    // Attempt to parse an autolink (URL or email in pointy brackets).
    InlineParser.prototype.parseAutolink = function (block) {
        var m;
        var dest;
        var node;
        var startpos = this.pos + 1;
        if ((m = this.match(reEmailAutolink))) {
            dest = m.slice(1, m.length - 1);
            node = createNode('link', this.sourcepos(startpos, this.pos));
            node.destination = normalizeURI("mailto:" + dest);
            node.title = '';
            node.appendChild(esm_text(dest, this.sourcepos(startpos + 1, this.pos - 1)));
            block.appendChild(node);
            return true;
        }
        if ((m = this.match(reAutolink))) {
            dest = m.slice(1, m.length - 1);
            node = createNode('link', this.sourcepos(startpos, this.pos));
            node.destination = normalizeURI(dest);
            node.title = '';
            node.appendChild(esm_text(dest, this.sourcepos(startpos + 1, this.pos - 1)));
            block.appendChild(node);
            return true;
        }
        return false;
    };
    // Attempt to parse a raw HTML tag.
    InlineParser.prototype.parseHtmlTag = function (block) {
        var startpos = this.pos + 1;
        var m = this.match(reHtmlTag);
        if (m === null) {
            return false;
        }
        var node = createNode('htmlInline', this.sourcepos(startpos, this.pos));
        node.literal = m;
        block.appendChild(node);
        return true;
    };
    // Scan a sequence of characters with code cc, and return information about
    // the number of delimiters and whether they are positioned such that
    // they can open and/or close emphasis or strong emphasis.  A utility
    // function for strong/emph parsing.
    InlineParser.prototype.scanDelims = function (cc) {
        var numdelims = 0;
        var startpos = this.pos;
        if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
            numdelims++;
            this.pos++;
        }
        else {
            while (this.peek() === cc) {
                numdelims++;
                this.pos++;
            }
        }
        if (numdelims === 0 || (numdelims < 2 && (cc === C_TILDE || cc === C_DOLLAR))) {
            this.pos = startpos;
            return null;
        }
        var charBefore = startpos === 0 ? '\n' : this.subject.charAt(startpos - 1);
        var ccAfter = this.peek();
        var charAfter;
        if (ccAfter === -1) {
            charAfter = '\n';
        }
        else {
            charAfter = fromCodePoint$1(ccAfter);
        }
        var afterIsWhitespace = reUnicodeWhitespaceChar.test(charAfter);
        var afterIsPunctuation = rePunctuation.test(charAfter);
        var beforeIsWhitespace = reUnicodeWhitespaceChar.test(charBefore);
        var beforeIsPunctuation = rePunctuation.test(charBefore);
        var leftFlanking = !afterIsWhitespace && (!afterIsPunctuation || beforeIsWhitespace || beforeIsPunctuation);
        var rightFlanking = !beforeIsWhitespace && (!beforeIsPunctuation || afterIsWhitespace || afterIsPunctuation);
        var canOpen;
        var canClose;
        if (cc === C_UNDERSCORE) {
            canOpen = leftFlanking && (!rightFlanking || beforeIsPunctuation);
            canClose = rightFlanking && (!leftFlanking || afterIsPunctuation);
        }
        else if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
            canOpen = leftFlanking && !rightFlanking;
            canClose = rightFlanking;
        }
        else if (cc === C_DOLLAR) {
            canOpen = !afterIsWhitespace;
            canClose = !beforeIsWhitespace;
        }
        else {
            canOpen = leftFlanking;
            canClose = rightFlanking;
        }
        this.pos = startpos;
        return { numdelims: numdelims, canOpen: canOpen, canClose: canClose };
    };
    // Handle a delimiter marker for emphasis or a quote.
    InlineParser.prototype.handleDelim = function (cc, block) {
        var res = this.scanDelims(cc);
        if (!res) {
            return false;
        }
        var numdelims = res.numdelims;
        var startpos = this.pos + 1;
        var contents;
        this.pos += numdelims;
        if (cc === C_SINGLEQUOTE) {
            contents = '\u2019';
        }
        else if (cc === C_DOUBLEQUOTE) {
            contents = '\u201C';
        }
        else {
            contents = this.subject.slice(startpos - 1, this.pos);
        }
        var node = esm_text(contents, this.sourcepos(startpos, this.pos));
        block.appendChild(node);
        // Add entry to stack for this opener
        if ((res.canOpen || res.canClose) &&
            (this.options.smart || (cc !== C_SINGLEQUOTE && cc !== C_DOUBLEQUOTE))) {
            this.delimiters = {
                cc: cc,
                numdelims: numdelims,
                origdelims: numdelims,
                node: node,
                previous: this.delimiters,
                next: null,
                canOpen: res.canOpen,
                canClose: res.canClose,
            };
            if (this.delimiters.previous) {
                this.delimiters.previous.next = this.delimiters;
            }
        }
        return true;
    };
    InlineParser.prototype.removeDelimiter = function (delim) {
        if (delim.previous !== null) {
            delim.previous.next = delim.next;
        }
        if (delim.next === null) {
            // top of stack
            this.delimiters = delim.previous;
        }
        else {
            delim.next.previous = delim.previous;
        }
    };
    InlineParser.prototype.removeDelimitersBetween = function (bottom, top) {
        if (bottom.next !== top) {
            bottom.next = top;
            top.previous = bottom;
        }
    };
    /**
     * Process all delimiters - emphasis, strong emphasis, strikethrough(gfm)
     * If the smart punctuation options is true,
     * convert single/double quotes to corresponding unicode characters.
     **/
    InlineParser.prototype.processEmphasis = function (stackBottom) {
        var _a;
        var opener;
        var closer;
        var oldCloser;
        var openerInl, closerInl;
        var openerFound;
        var oddMatch = false;
        var openersBottom = (_a = {},
            _a[C_UNDERSCORE] = [stackBottom, stackBottom, stackBottom],
            _a[C_ASTERISK] = [stackBottom, stackBottom, stackBottom],
            _a[C_SINGLEQUOTE] = [stackBottom],
            _a[C_DOUBLEQUOTE] = [stackBottom],
            _a[C_TILDE] = [stackBottom],
            _a[C_DOLLAR] = [stackBottom],
            _a);
        // find first closer above stackBottom:
        closer = this.delimiters;
        while (closer !== null && closer.previous !== stackBottom) {
            closer = closer.previous;
        }
        // move forward, looking for closers, and handling each
        while (closer !== null) {
            var closercc = closer.cc;
            var closerEmph = closercc === C_UNDERSCORE || closercc === C_ASTERISK;
            if (!closer.canClose) {
                closer = closer.next;
            }
            else {
                // found emphasis closer. now look back for first matching opener:
                opener = closer.previous;
                openerFound = false;
                while (opener !== null &&
                    opener !== stackBottom &&
                    opener !== openersBottom[closercc][closerEmph ? closer.origdelims % 3 : 0]) {
                    oddMatch =
                        closerEmph &&
                            (closer.canOpen || opener.canClose) &&
                            closer.origdelims % 3 !== 0 &&
                            (opener.origdelims + closer.origdelims) % 3 === 0;
                    if (opener.cc === closer.cc && opener.canOpen && !oddMatch) {
                        openerFound = true;
                        break;
                    }
                    opener = opener.previous;
                }
                oldCloser = closer;
                if (closerEmph || closercc === C_TILDE || closercc === C_DOLLAR) {
                    if (!openerFound) {
                        closer = closer.next;
                    }
                    else if (opener) {
                        // (null opener check for type narrowing)
                        // calculate actual number of delimiters used from closer
                        var useDelims = closer.numdelims >= 2 && opener.numdelims >= 2 ? 2 : 1;
                        var emptyDelims = closerEmph ? 0 : 1;
                        openerInl = opener.node;
                        closerInl = closer.node;
                        // build contents for new emph element
                        var nodeType = closerEmph
                            ? useDelims === 1
                                ? 'emph'
                                : 'strong'
                            : 'strike';
                        if (closercc === C_DOLLAR) {
                            nodeType = 'customInline';
                        }
                        var newNode = createNode(nodeType);
                        var openerEndPos = openerInl.sourcepos[1];
                        var closerStartPos = closerInl.sourcepos[0];
                        newNode.sourcepos = [
                            [openerEndPos[0], openerEndPos[1] - useDelims + 1],
                            [closerStartPos[0], closerStartPos[1] + useDelims - 1],
                        ];
                        openerInl.sourcepos[1][1] -= useDelims;
                        closerInl.sourcepos[0][1] += useDelims;
                        openerInl.literal = openerInl.literal.slice(useDelims);
                        closerInl.literal = closerInl.literal.slice(useDelims);
                        opener.numdelims -= useDelims;
                        closer.numdelims -= useDelims;
                        // remove used delimiters from stack elts and inlines
                        var tmp = openerInl.next;
                        var next = void 0;
                        while (tmp && tmp !== closerInl) {
                            next = tmp.next;
                            tmp.unlink();
                            newNode.appendChild(tmp);
                            tmp = next;
                        }
                        // build custom inline node
                        if (closercc === C_DOLLAR) {
                            var textNode = newNode.firstChild;
                            var literal = textNode.literal || '';
                            var info = literal.split(/\s/)[0];
                            newNode.info = info;
                            if (literal.length <= info.length) {
                                textNode.unlink();
                            }
                            else {
                                textNode.sourcepos[0][1] += info.length;
                                textNode.literal = literal.replace(info + " ", '');
                            }
                        }
                        openerInl.insertAfter(newNode);
                        // remove elts between opener and closer in delimiters stack
                        this.removeDelimitersBetween(opener, closer);
                        // if opener has 0 delims, remove it and the inline
                        // if opener has 1 delims and character is tilde, remove delimiter only
                        if (opener.numdelims <= emptyDelims) {
                            if (opener.numdelims === 0) {
                                openerInl.unlink();
                            }
                            this.removeDelimiter(opener);
                        }
                        // if closer has 0 delims, remove it and the inline
                        // if closer has 1 delims and character is tilde, remove delimiter only
                        if (closer.numdelims <= emptyDelims) {
                            if (closer.numdelims === 0) {
                                closerInl.unlink();
                            }
                            var tempstack = closer.next;
                            this.removeDelimiter(closer);
                            closer = tempstack;
                        }
                    }
                }
                else if (closercc === C_SINGLEQUOTE) {
                    closer.node.literal = '\u2019';
                    if (openerFound) {
                        opener.node.literal = '\u2018';
                    }
                    closer = closer.next;
                }
                else if (closercc === C_DOUBLEQUOTE) {
                    closer.node.literal = '\u201D';
                    if (openerFound) {
                        opener.node.literal = '\u201C';
                    }
                    closer = closer.next;
                }
                if (!openerFound) {
                    // Set lower bound for future searches for openers:
                    openersBottom[closercc][closerEmph ? oldCloser.origdelims % 3 : 0] = oldCloser.previous;
                    if (!oldCloser.canOpen) {
                        // We can remove a closer that can't be an opener,
                        // once we've seen there's no matching opener:
                        this.removeDelimiter(oldCloser);
                    }
                }
            }
        }
        // remove all delimiters
        while (this.delimiters !== null && this.delimiters !== stackBottom) {
            this.removeDelimiter(this.delimiters);
        }
    };
    // Attempt to parse link title (sans quotes), returning the string
    // or null if no match.
    InlineParser.prototype.parseLinkTitle = function () {
        var title = this.match(reLinkTitle);
        if (title === null) {
            return null;
        }
        // chop off quotes from title and unescape:
        return unescapeString(title.substr(1, title.length - 2));
    };
    // Attempt to parse link destination, returning the string or null if no match.
    InlineParser.prototype.parseLinkDestination = function () {
        var res = this.match(reLinkDestinationBraces);
        if (res === null) {
            if (this.peek() === C_LESSTHAN$1) {
                return null;
            }
            // @TODO handrolled parser; res should be null or the string
            var savepos = this.pos;
            var openparens = 0;
            var c = void 0;
            while ((c = this.peek()) !== -1) {
                if (c === C_BACKSLASH && reEscapable.test(this.subject.charAt(this.pos + 1))) {
                    this.pos += 1;
                    if (this.peek() !== -1) {
                        this.pos += 1;
                    }
                }
                else if (c === C_OPEN_PAREN) {
                    this.pos += 1;
                    openparens += 1;
                }
                else if (c === C_CLOSE_PAREN) {
                    if (openparens < 1) {
                        break;
                    }
                    else {
                        this.pos += 1;
                        openparens -= 1;
                    }
                }
                else if (reWhitespaceChar.exec(fromCodePoint$1(c)) !== null) {
                    break;
                }
                else {
                    this.pos += 1;
                }
            }
            if (this.pos === savepos && c !== C_CLOSE_PAREN) {
                return null;
            }
            if (openparens !== 0) {
                return null;
            }
            res = this.subject.substr(savepos, this.pos - savepos);
            return normalizeURI(unescapeString(res));
        } // chop off surrounding <..>:
        return normalizeURI(unescapeString(res.substr(1, res.length - 2)));
    };
    // Attempt to parse a link label, returning number of characters parsed.
    InlineParser.prototype.parseLinkLabel = function () {
        var m = this.match(reLinkLabel);
        if (m === null || m.length > 1001) {
            return 0;
        }
        return m.length;
    };
    // Add open bracket to delimiter stack and add a text node to block's children.
    InlineParser.prototype.parseOpenBracket = function (block) {
        var startpos = this.pos;
        this.pos += 1;
        var node = esm_text('[', this.sourcepos(this.pos, this.pos));
        block.appendChild(node);
        // Add entry to stack for this opener
        this.addBracket(node, startpos, false);
        return true;
    };
    // IF next character is [, and ! delimiter to delimiter stack and
    // add a text node to block's children.  Otherwise just add a text node.
    InlineParser.prototype.parseBang = function (block) {
        var startpos = this.pos;
        this.pos += 1;
        if (this.peek() === C_OPEN_BRACKET$1) {
            this.pos += 1;
            var node = esm_text('![', this.sourcepos(this.pos - 1, this.pos));
            block.appendChild(node);
            // Add entry to stack for this opener
            this.addBracket(node, startpos + 1, true);
        }
        else {
            var node = esm_text('!', this.sourcepos(this.pos, this.pos));
            block.appendChild(node);
        }
        return true;
    };
    // Try to match close bracket against an opening in the delimiter
    // stack.  Add either a link or image, or a plain [ character,
    // to block's children.  If there is a matching delimiter,
    // remove it from the delimiter stack.
    InlineParser.prototype.parseCloseBracket = function (block) {
        var dest = null;
        var title = null;
        var matched = false;
        this.pos += 1;
        var startpos = this.pos;
        // get last [ or ![
        var opener = this.brackets;
        if (opener === null) {
            // no matched opener, just return a literal
            block.appendChild(esm_text(']', this.sourcepos(startpos, startpos)));
            return true;
        }
        if (!opener.active) {
            // no matched opener, just return a literal
            block.appendChild(esm_text(']', this.sourcepos(startpos, startpos)));
            // take opener off brackets stack
            this.removeBracket();
            return true;
        }
        // If we got here, open is a potential opener
        var isImage = opener.image;
        // Check to see if we have a link/image
        var savepos = this.pos;
        // Inline link?
        if (this.peek() === C_OPEN_PAREN) {
            this.pos++;
            if (this.spnl() &&
                (dest = this.parseLinkDestination()) !== null &&
                this.spnl() &&
                // make sure there's a space before the title:
                ((reWhitespaceChar.test(this.subject.charAt(this.pos - 1)) &&
                    (title = this.parseLinkTitle())) ||
                    true) &&
                this.spnl() &&
                this.peek() === C_CLOSE_PAREN) {
                this.pos += 1;
                matched = true;
            }
            else {
                this.pos = savepos;
            }
        }
        var refLabel = '';
        if (!matched) {
            // Next, see if there's a link label
            var beforelabel = this.pos;
            var n = this.parseLinkLabel();
            if (n > 2) {
                refLabel = this.subject.slice(beforelabel, beforelabel + n);
            }
            else if (!opener.bracketAfter) {
                // Empty or missing second label means to use the first label as the reference.
                // The reference must not contain a bracket. If we know there's a bracket, we don't even bother checking it.
                refLabel = this.subject.slice(opener.index, startpos);
            }
            if (n === 0) {
                // If shortcut reference link, rewind before spaces we skipped.
                this.pos = savepos;
            }
            if (refLabel) {
                refLabel = normalizeReference(refLabel);
                // lookup rawlabel in refMap
                var link = this.refMap[refLabel];
                if (link) {
                    dest = link.destination;
                    title = link.title;
                    matched = true;
                }
            }
        }
        if (matched) {
            var node = createNode(isImage ? 'image' : 'link');
            node.destination = dest;
            node.title = title || '';
            node.sourcepos = [opener.startpos, this.sourcepos(this.pos)];
            var tmp = opener.node.next;
            var next = void 0;
            while (tmp) {
                next = tmp.next;
                tmp.unlink();
                node.appendChild(tmp);
                tmp = next;
            }
            block.appendChild(node);
            this.processEmphasis(opener.previousDelimiter);
            this.removeBracket();
            opener.node.unlink();
            // We remove this bracket and processEmphasis will remove later delimiters.
            // Now, for a link, we also deactivate earlier link openers.
            // (no links in links)
            if (!isImage) {
                opener = this.brackets;
                while (opener !== null) {
                    if (!opener.image) {
                        opener.active = false; // deactivate this opener
                    }
                    opener = opener.previous;
                }
            }
            if (this.options.referenceDefinition) {
                this.refLinkCandidateMap[block.id] = { node: block, refLabel: refLabel };
            }
            return true;
        } // no match
        this.removeBracket(); // remove this opener from stack
        this.pos = startpos;
        block.appendChild(esm_text(']', this.sourcepos(startpos, startpos)));
        if (this.options.referenceDefinition) {
            this.refLinkCandidateMap[block.id] = { node: block, refLabel: refLabel };
        }
        return true;
    };
    InlineParser.prototype.addBracket = function (node, index, image) {
        if (this.brackets !== null) {
            this.brackets.bracketAfter = true;
        }
        this.brackets = {
            node: node,
            startpos: this.sourcepos(index + (image ? 0 : 1)),
            previous: this.brackets,
            previousDelimiter: this.delimiters,
            index: index,
            image: image,
            active: true,
        };
    };
    InlineParser.prototype.removeBracket = function () {
        if (this.brackets) {
            this.brackets = this.brackets.previous;
        }
    };
    // Attempt to parse an entity.
    InlineParser.prototype.parseEntity = function (block) {
        var m;
        var startpos = this.pos + 1;
        if ((m = this.match(reEntityHere))) {
            block.appendChild(esm_text(lib.decodeHTML(m), this.sourcepos(startpos, this.pos)));
            return true;
        }
        return false;
    };
    // Parse a run of ordinary characters, or a single character with
    // a special meaning in markdown, as a plain string.
    InlineParser.prototype.parseString = function (block) {
        var m;
        var startpos = this.pos + 1;
        if ((m = this.match(reMain))) {
            if (this.options.smart) {
                var lit = m.replace(reEllipses, '\u2026').replace(reDash, function (chars) {
                    var enCount = 0;
                    var emCount = 0;
                    if (chars.length % 3 === 0) {
                        // If divisible by 3, use all em dashes
                        emCount = chars.length / 3;
                    }
                    else if (chars.length % 2 === 0) {
                        // If divisible by 2, use all en dashes
                        enCount = chars.length / 2;
                    }
                    else if (chars.length % 3 === 2) {
                        // If 2 extra dashes, use en dash for last 2; em dashes for rest
                        enCount = 1;
                        emCount = (chars.length - 2) / 3;
                    }
                    else {
                        // Use en dashes for last 4 hyphens; em dashes for rest
                        enCount = 2;
                        emCount = (chars.length - 4) / 3;
                    }
                    return repeat('\u2014', emCount) + repeat('\u2013', enCount);
                });
                block.appendChild(esm_text(lit, this.sourcepos(startpos, this.pos)));
            }
            else {
                var node = esm_text(m, this.sourcepos(startpos, this.pos));
                block.appendChild(node);
            }
            return true;
        }
        return false;
    };
    // Parse a newline.  If it was preceded by two spaces, return a hard
    // line break; otherwise a soft line break.
    InlineParser.prototype.parseNewline = function (block) {
        this.pos += 1; // assume we're at a \n
        // check previous node for trailing spaces
        var lastc = block.lastChild;
        if (lastc && lastc.type === 'text' && lastc.literal[lastc.literal.length - 1] === ' ') {
            var hardbreak = lastc.literal[lastc.literal.length - 2] === ' ';
            var litLen = lastc.literal.length;
            lastc.literal = lastc.literal.replace(reFinalSpace, '');
            var finalSpaceLen = litLen - lastc.literal.length;
            lastc.sourcepos[1][1] -= finalSpaceLen;
            block.appendChild(createNode(hardbreak ? 'linebreak' : 'softbreak', this.sourcepos(this.pos - finalSpaceLen, this.pos)));
        }
        else {
            block.appendChild(createNode('softbreak', this.sourcepos(this.pos, this.pos)));
        }
        this.nextLine();
        this.match(reInitialSpace); // gobble leading spaces in next line
        return true;
    };
    // Attempt to parse a link reference, modifying refmap.
    InlineParser.prototype.parseReference = function (block, refMap) {
        if (!this.options.referenceDefinition) {
            return 0;
        }
        this.subject = block.stringContent;
        this.pos = 0;
        var title = null;
        var startpos = this.pos;
        // label:
        var matchChars = this.parseLinkLabel();
        if (matchChars === 0) {
            return 0;
        }
        var rawlabel = this.subject.substr(0, matchChars);
        // colon:
        if (this.peek() === C_COLON) {
            this.pos++;
        }
        else {
            this.pos = startpos;
            return 0;
        }
        //  link url
        this.spnl();
        var dest = this.parseLinkDestination();
        if (dest === null) {
            this.pos = startpos;
            return 0;
        }
        var beforetitle = this.pos;
        this.spnl();
        if (this.pos !== beforetitle) {
            title = this.parseLinkTitle();
        }
        if (title === null) {
            title = '';
            // rewind before spaces
            this.pos = beforetitle;
        }
        // make sure we're at line end:
        var atLineEnd = true;
        if (this.match(reSpaceAtEndOfLine) === null) {
            if (title === '') {
                atLineEnd = false;
            }
            else {
                // the potential title we found is not at the line end,
                // but it could still be a legal link reference if we
                // discard the title
                title = '';
                // rewind before spaces
                this.pos = beforetitle;
                // and instead check if the link URL is at the line end
                atLineEnd = this.match(reSpaceAtEndOfLine) !== null;
            }
        }
        if (!atLineEnd) {
            this.pos = startpos;
            return 0;
        }
        var normalLabel = normalizeReference(rawlabel);
        if (normalLabel === '') {
            // label must contain non-whitespace characters
            this.pos = startpos;
            return 0;
        }
        var sourcepos = this.getReferenceDefSourcepos(block);
        block.sourcepos[0][0] = sourcepos[1][0] + 1;
        var node = createNode('refDef', sourcepos);
        node.title = title;
        node.dest = dest;
        node.label = normalLabel;
        block.insertBefore(node);
        if (!refMap[normalLabel]) {
            refMap[normalLabel] = createRefDefState(node);
        }
        else {
            this.refDefCandidateMap[node.id] = node;
        }
        return this.pos - startpos;
    };
    InlineParser.prototype.mergeTextNodes = function (walker) {
        var event;
        var textNodes = [];
        while ((event = walker.next())) {
            var entering = event.entering, node = event.node;
            if (entering && node.type === 'text') {
                textNodes.push(node);
            }
            else if (textNodes.length === 1) {
                textNodes = [];
            }
            else if (textNodes.length > 1) {
                var firstNode = textNodes[0];
                var lastNode = textNodes[textNodes.length - 1];
                if (firstNode.sourcepos && lastNode.sourcepos) {
                    firstNode.sourcepos[1] = lastNode.sourcepos[1];
                }
                firstNode.next = lastNode.next;
                if (firstNode.next) {
                    firstNode.next.prev = firstNode;
                }
                for (var i = 1; i < textNodes.length; i += 1) {
                    firstNode.literal += textNodes[i].literal;
                    textNodes[i].unlink();
                }
                textNodes = [];
            }
        }
    };
    InlineParser.prototype.getReferenceDefSourcepos = function (block) {
        var lines = block.stringContent.split(/\n|\r\n/);
        var passedUrlLine = false;
        var quotationCount = 0;
        var lastLineOffset = { line: 0, ch: 0 };
        for (var i = 0; i < lines.length; i += 1) {
            var line = lines[i];
            if (reWhitespaceChar.test(line)) {
                break;
            }
            if (/\:/.test(line) && quotationCount === 0) {
                if (passedUrlLine) {
                    break;
                }
                var lineOffset = line.indexOf(':') === line.length - 1 ? i + 1 : i;
                lastLineOffset = { line: lineOffset, ch: lines[lineOffset].length };
                passedUrlLine = true;
            }
            // should consider extendable title
            var matched = line.match(/'|"/g);
            if (matched) {
                quotationCount += matched.length;
            }
            if (quotationCount === 2) {
                lastLineOffset = { line: i, ch: line.length };
                break;
            }
        }
        return [
            [block.sourcepos[0][0], block.sourcepos[0][1]],
            [block.sourcepos[0][0] + lastLineOffset.line, lastLineOffset.ch],
        ];
    };
    // Parse the next inline element in subject, advancing subject position.
    // On success, add the result to block's children and return true.
    // On failure, return false.
    InlineParser.prototype.parseInline = function (block) {
        var _a;
        var res = false;
        var c = this.peek();
        if (c === -1) {
            return false;
        }
        switch (c) {
            case C_NEWLINE:
                res = this.parseNewline(block);
                break;
            case C_BACKSLASH:
                res = this.parseBackslash(block);
                break;
            case C_BACKTICK:
                res = this.parseBackticks(block);
                break;
            case C_ASTERISK:
            case C_UNDERSCORE:
            case C_TILDE:
            case C_DOLLAR:
                res = this.handleDelim(c, block);
                break;
            case C_SINGLEQUOTE:
            case C_DOUBLEQUOTE:
                res = !!((_a = this.options) === null || _a === void 0 ? void 0 : _a.smart) && this.handleDelim(c, block);
                break;
            case C_OPEN_BRACKET$1:
                res = this.parseOpenBracket(block);
                break;
            case C_BANG:
                res = this.parseBang(block);
                break;
            case C_CLOSE_BRACKET:
                res = this.parseCloseBracket(block);
                break;
            case C_LESSTHAN$1:
                res = this.parseAutolink(block) || this.parseHtmlTag(block);
                break;
            case C_AMPERSAND:
                if (!block.disabledEntityParse) {
                    res = this.parseEntity(block);
                }
                break;
            default:
                res = this.parseString(block);
                break;
        }
        if (!res) {
            this.pos += 1;
            block.appendChild(esm_text(fromCodePoint$1(c), this.sourcepos(this.pos, this.pos + 1)));
        }
        return true;
    };
    // Parse string content in block into inline children,
    // using refmap to resolve references.
    InlineParser.prototype.parse = function (block) {
        this.subject = block.stringContent.trim();
        this.pos = 0;
        this.delimiters = null;
        this.brackets = null;
        this.lineOffsets = block.lineOffsets || [0];
        this.lineIdx = 0;
        this.linePosOffset = 0;
        this.lineStartNum = block.sourcepos[0][0];
        if (isHeading(block)) {
            this.lineOffsets[0] += block.level + 1;
        }
        while (this.parseInline(block)) { }
        block.stringContent = null; // allow raw string to be garbage collected
        this.processEmphasis(null);
        this.mergeTextNodes(block.walker());
        var _a = this.options, extendedAutolinks = _a.extendedAutolinks, customParser = _a.customParser;
        if (extendedAutolinks) {
            convertExtAutoLinks(block.walker(), extendedAutolinks);
        }
        if (customParser && block.firstChild) {
            var event_1;
            var walker = block.firstChild.walker();
            while ((event_1 = walker.next())) {
                var node = event_1.node, entering = event_1.entering;
                if (customParser[node.type]) {
                    customParser[node.type](node, { entering: entering, options: this.options });
                }
            }
        }
    };
    return InlineParser;
}());
var reTaskListItemMarker = /^\[([ \txX])\][ \t]+/;
// finalize for block handler
function taskListItemFinalize(_, block) {
    if (block.firstChild && block.firstChild.type === 'paragraph') {
        var p = block.firstChild;
        var m = p.stringContent.match(reTaskListItemMarker);
        if (m) {
            var mLen = m[0].length;
            p.stringContent = p.stringContent.substring(mLen - 1);
            p.sourcepos[0][1] += mLen;
            p.lineOffsets[0] += mLen;
            block.listData.task = true;
            block.listData.checked = /[xX]/.test(m[1]);
        }
    }
}
var table = {
    continue: function () {
        return 0 /* Go */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t === 'tableHead' || t === 'tableBody';
    },
    acceptsLines: false,
};
var tableBody$1 = {
    continue: function () {
        return 0 /* Go */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t === 'tableRow';
    },
    acceptsLines: false,
};
var tableHead$1 = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t === 'tableRow' || t === 'tableDelimRow';
    },
    acceptsLines: false,
};
var tableDelimRow = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t === 'tableDelimCell';
    },
    acceptsLines: false,
};
var tableDelimCell = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function () {
        return false;
    },
    acceptsLines: false,
};
var tableRow = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t === 'tableCell';
    },
    acceptsLines: false,
};
var tableCell = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function () {
        return false;
    },
    acceptsLines: false,
};
var CODE_INDENT = 4;
var C_TAB = 9;
var C_GREATERTHAN = 62;
var C_LESSTHAN = 60;
var C_SPACE = 32;
var C_OPEN_BRACKET = 91;
var reNonSpace = /[^ \t\f\v\r\n]/;
var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;
// Returns true if block ends with a blank line, descending if needed
// into lists and sublists.
function endsWithBlankLine(block) {
    var curBlock = block;
    while (curBlock) {
        if (curBlock.lastLineBlank) {
            return true;
        }
        var t = curBlock.type;
        if (!curBlock.lastLineChecked && (t === 'list' || t === 'item')) {
            curBlock.lastLineChecked = true;
            curBlock = curBlock.lastChild;
        }
        else {
            curBlock.lastLineChecked = true;
            break;
        }
    }
    return false;
}
function peek(ln, pos) {
    if (pos < ln.length) {
        return ln.charCodeAt(pos);
    }
    return -1;
}
// Returns true if string contains only space characters.
function isBlank(s) {
    return !reNonSpace.test(s);
}
function isSpaceOrTab(c) {
    return c === C_SPACE || c === C_TAB;
}
var reClosingCustomBlock = /^\$\$$/;
var customBlock$1 = {
    continue: function (parser, container) {
        var line = parser.currentLine;
        var match = line.match(reClosingCustomBlock);
        if (match) {
            // closing custom block
            parser.lastLineLength = match[0].length;
            parser.finalize(container, parser.lineNumber);
            return 2 /* Finished */;
        }
        // skip optional spaces of custom block offset
        var i = container.offset;
        while (i > 0 && isSpaceOrTab(peek(line, parser.offset))) {
            parser.advanceOffset(1, true);
            i--;
        }
        return 0 /* Go */;
    },
    finalize: function (_, block) {
        if (block.stringContent === null) {
            return;
        }
        // first line becomes info string
        var content = block.stringContent;
        var newlinePos = content.indexOf('\n');
        var firstLine = content.slice(0, newlinePos);
        var rest = content.slice(newlinePos + 1);
        var infoString = firstLine.match(/^(\s*)(.*)/);
        block.info = unescapeString(infoString[2].trim());
        block.literal = rest;
        block.stringContent = null;
    },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var noop = {
    continue: function () {
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var document$1 = {
    continue: function () {
        return 0 /* Go */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t !== 'item';
    },
    acceptsLines: false,
};
var list = {
    continue: function () {
        return 0 /* Go */;
    },
    finalize: function (_, block) {
        var item = block.firstChild;
        while (item) {
            // check for non-final list item ending with blank line:
            if (endsWithBlankLine(item) && item.next) {
                block.listData.tight = false;
                break;
            }
            // recurse into children of list item, to see if there are
            // spaces between any of them:
            var subitem = item.firstChild;
            while (subitem) {
                if (endsWithBlankLine(subitem) && (item.next || subitem.next)) {
                    block.listData.tight = false;
                    break;
                }
                subitem = subitem.next;
            }
            item = item.next;
        }
    },
    canContain: function (t) {
        return t === 'item';
    },
    acceptsLines: false,
};
var blockQuote$1 = {
    continue: function (parser) {
        var ln = parser.currentLine;
        if (!parser.indented && peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
            parser.advanceNextNonspace();
            parser.advanceOffset(1, false);
            if (isSpaceOrTab(peek(ln, parser.offset))) {
                parser.advanceOffset(1, true);
            }
        }
        else {
            return 1 /* Stop */;
        }
        return 0 /* Go */;
    },
    finalize: function () { },
    canContain: function (t) {
        return t !== 'item';
    },
    acceptsLines: false,
};
var item = {
    continue: function (parser, container) {
        if (parser.blank) {
            if (container.firstChild === null) {
                // Blank line after empty list item
                return 1 /* Stop */;
            }
            parser.advanceNextNonspace();
        }
        else if (parser.indent >= container.listData.markerOffset + container.listData.padding) {
            parser.advanceOffset(container.listData.markerOffset + container.listData.padding, true);
        }
        else {
            return 1 /* Stop */;
        }
        return 0 /* Go */;
    },
    finalize: taskListItemFinalize,
    canContain: function (t) {
        return t !== 'item';
    },
    acceptsLines: false,
};
var heading = {
    continue: function () {
        // a heading can never container > 1 line, so fail to match:
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function () {
        return false;
    },
    acceptsLines: false,
};
var thematicBreak$1 = {
    continue: function () {
        // a thematic break can never container > 1 line, so fail to match:
        return 1 /* Stop */;
    },
    finalize: function () { },
    canContain: function () {
        return false;
    },
    acceptsLines: false,
};
var codeBlock = {
    continue: function (parser, container) {
        var ln = parser.currentLine;
        var indent = parser.indent;
        if (container.isFenced) {
            // fenced
            var match = indent <= 3 &&
                ln.charAt(parser.nextNonspace) === container.fenceChar &&
                ln.slice(parser.nextNonspace).match(reClosingCodeFence);
            if (match && match[0].length >= container.fenceLength) {
                // closing fence - we're at end of line, so we can return
                parser.lastLineLength = parser.offset + indent + match[0].length;
                parser.finalize(container, parser.lineNumber);
                return 2 /* Finished */;
            }
            // skip optional spaces of fence offset
            var i = container.fenceOffset;
            while (i > 0 && isSpaceOrTab(peek(ln, parser.offset))) {
                parser.advanceOffset(1, true);
                i--;
            }
        }
        else {
            // indented
            if (indent >= CODE_INDENT) {
                parser.advanceOffset(CODE_INDENT, true);
            }
            else if (parser.blank) {
                parser.advanceNextNonspace();
            }
            else {
                return 1 /* Stop */;
            }
        }
        return 0 /* Go */;
    },
    finalize: function (_, block) {
        var _a;
        if (block.stringContent === null) {
            return;
        }
        if (block.isFenced) {
            // fenced
            // first line becomes info string
            var content = block.stringContent;
            var newlinePos = content.indexOf('\n');
            var firstLine = content.slice(0, newlinePos);
            var rest = content.slice(newlinePos + 1);
            var infoString = firstLine.match(/^(\s*)(.*)/);
            block.infoPadding = infoString[1].length;
            block.info = unescapeString(infoString[2].trim());
            block.literal = rest;
        }
        else {
            // indented
            block.literal = (_a = block.stringContent) === null || _a === void 0 ? void 0 : _a.replace(/(\n *)+$/, '\n');
        }
        block.stringContent = null; // allow GC
    },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var htmlBlock$1 = {
    continue: function (parser, container) {
        return parser.blank && (container.htmlBlockType === 6 || container.htmlBlockType === 7)
            ? 1 /* Stop */
            : 0 /* Go */;
    },
    finalize: function (_, block) {
        var _a;
        block.literal = ((_a = block.stringContent) === null || _a === void 0 ? void 0 : _a.replace(/(\n *)+$/, '')) || null;
        block.stringContent = null; // allow GC
    },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var paragraph = {
    continue: function (parser) {
        return parser.blank ? 1 /* Stop */ : 0 /* Go */;
    },
    finalize: function (parser, block) {
        if (block.stringContent === null) {
            return;
        }
        var pos;
        var hasReferenceDefs = false;
        // try parsing the beginning as link reference definitions:
        while (peek(block.stringContent, 0) === C_OPEN_BRACKET &&
            (pos = parser.inlineParser.parseReference(block, parser.refMap))) {
            block.stringContent = block.stringContent.slice(pos);
            hasReferenceDefs = true;
        }
        if (hasReferenceDefs && isBlank(block.stringContent)) {
            block.unlink();
        }
    },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var refDef = noop;
var frontMatter$2 = noop;
var blockHandlers = {
    document: document$1,
    list: list,
    blockQuote: blockQuote$1,
    item: item,
    heading: heading,
    thematicBreak: thematicBreak$1,
    codeBlock: codeBlock,
    htmlBlock: htmlBlock$1,
    paragraph: paragraph,
    table: table,
    tableBody: tableBody$1,
    tableHead: tableHead$1,
    tableRow: tableRow,
    tableCell: tableCell,
    tableDelimRow: tableDelimRow,
    tableDelimCell: tableDelimCell,
    refDef: refDef,
    customBlock: customBlock$1,
    frontMatter: frontMatter$2,
};
function parseRowContent(content) {
    var startIdx = 0;
    var offset = 0;
    var cells = [];
    for (var i = 0; i < content.length; i += 1) {
        if (content[i] === '|' && content[i - 1] !== '\\') {
            var cell = content.substring(startIdx, i);
            if (startIdx === 0 && isEmpty(cell)) {
                offset = i + 1;
            }
            else {
                cells.push(cell);
            }
            startIdx = i + 1;
        }
    }
    if (startIdx < content.length) {
        var cell = content.substring(startIdx, content.length);
        if (!isEmpty(cell)) {
            cells.push(cell);
        }
    }
    return [offset, cells];
}
function generateTableCells(cellType, contents, lineNum, chPos) {
    var cells = [];
    for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
        var content = contents_1[_i];
        var preSpaces = content.match(/^[ \t]+/);
        var paddingLeft = preSpaces ? preSpaces[0].length : 0;
        var paddingRight = void 0, trimmed = void 0;
        if (paddingLeft === content.length) {
            paddingLeft = 0;
            paddingRight = 0;
            trimmed = '';
        }
        else {
            var postSpaces = content.match(/[ \t]+$/);
            paddingRight = postSpaces ? postSpaces[0].length : 0;
            trimmed = content.slice(paddingLeft, content.length - paddingRight);
        }
        var chPosStart = chPos + paddingLeft;
        var tableCell = createNode(cellType, [
            [lineNum, chPos],
            [lineNum, chPos + content.length - 1],
        ]);
        tableCell.stringContent = trimmed.replace(/\\\|/g, '|'); // replace esacped pipe(\|)
        tableCell.startIdx = cells.length;
        tableCell.endIdx = cells.length;
        tableCell.lineOffsets = [chPosStart - 1];
        tableCell.paddingLeft = paddingLeft;
        tableCell.paddingRight = paddingRight;
        cells.push(tableCell);
        chPos += content.length + 1;
    }
    return cells;
}
function getColumnFromDelimCell(cellNode) {
    var align = null;
    var content = cellNode.stringContent;
    var firstCh = content[0];
    var lastCh = content[content.length - 1];
    if (lastCh === ':') {
        align = firstCh === ':' ? 'center' : 'right';
    }
    else if (firstCh === ':') {
        align = 'left';
    }
    return { align: align };
}
var tableHead = function (parser, container) {
    var stringContent = container.stringContent;
    if (container.type === 'paragraph' && !parser.indented && !parser.blank) {
        var lastNewLineIdx = stringContent.length - 1;
        var lastLineStartIdx = stringContent.lastIndexOf('\n', lastNewLineIdx - 1) + 1;
        var headerContent = stringContent.slice(lastLineStartIdx, lastNewLineIdx);
        var delimContent = parser.currentLine.slice(parser.nextNonspace);
        var _a = parseRowContent(headerContent), headerOffset = _a[0], headerCells = _a[1];
        var _b = parseRowContent(delimContent), delimOffset = _b[0], delimCells = _b[1];
        var reValidDelimCell_1 = /^[ \t]*:?-+:?[ \t]*$/;
        if (
        // not checking if the number of header cells and delimiter cells are the same
        // to consider the case of merged-column (via plugin)
        !headerCells.length ||
            !delimCells.length ||
            delimCells.some(function (cell) { return !reValidDelimCell_1.test(cell); }) ||
            // to prevent to regard setTextHeading as tabel delim cell with 'disallowDeepHeading' option
            (delimCells.length === 1 && delimContent.indexOf('|') !== 0)) {
            return 0 /* None */;
        }
        var lineOffsets = container.lineOffsets;
        var firstLineNum = parser.lineNumber - 1;
        var firstLineStart = last(lineOffsets) + 1;
        var table = createNode('table', [
            [firstLineNum, firstLineStart],
            [parser.lineNumber, parser.offset],
        ]);
        // eslint-disable-next-line arrow-body-style
        table.columns = delimCells.map(function () { return ({ align: null }); });
        container.insertAfter(table);
        if (lineOffsets.length === 1) {
            container.unlink();
        }
        else {
            container.stringContent = stringContent.slice(0, lastLineStartIdx);
            var paraLastLineStartIdx = stringContent.lastIndexOf('\n', lastLineStartIdx - 2) + 1;
            var paraLastLineLen = lastLineStartIdx - paraLastLineStartIdx - 1;
            parser.lastLineLength = lineOffsets[lineOffsets.length - 2] + paraLastLineLen;
            parser.finalize(container, firstLineNum - 1);
        }
        parser.advanceOffset(parser.currentLine.length - parser.offset, false);
        var tableHead_1 = createNode('tableHead', [
            [firstLineNum, firstLineStart],
            [parser.lineNumber, parser.offset],
        ]);
        table.appendChild(tableHead_1);
        var tableHeadRow_1 = createNode('tableRow', [
            [firstLineNum, firstLineStart],
            [firstLineNum, firstLineStart + headerContent.length - 1],
        ]);
        var tableDelimRow_1 = createNode('tableDelimRow', [
            [parser.lineNumber, parser.nextNonspace + 1],
            [parser.lineNumber, parser.offset],
        ]);
        tableHead_1.appendChild(tableHeadRow_1);
        tableHead_1.appendChild(tableDelimRow_1);
        generateTableCells('tableCell', headerCells, firstLineNum, firstLineStart + headerOffset).forEach(function (cellNode) {
            tableHeadRow_1.appendChild(cellNode);
        });
        var delimCellNodes = generateTableCells('tableDelimCell', delimCells, parser.lineNumber, parser.nextNonspace + 1 + delimOffset);
        delimCellNodes.forEach(function (cellNode) {
            tableDelimRow_1.appendChild(cellNode);
        });
        table.columns = delimCellNodes.map(getColumnFromDelimCell);
        parser.tip = table;
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var tableBody = function (parser, container) {
    if ((container.type !== 'table' && container.type !== 'tableBody') ||
        (!parser.blank && parser.currentLine.indexOf('|') === -1)) {
        return 0 /* None */;
    }
    parser.advanceOffset(parser.currentLine.length - parser.offset, false);
    if (parser.blank) {
        var table_1 = container;
        if (container.type === 'tableBody') {
            table_1 = container.parent;
            parser.finalize(container, parser.lineNumber - 1);
        }
        parser.finalize(table_1, parser.lineNumber - 1);
        return 0 /* None */;
    }
    var tableBody = container;
    if (container.type === 'table') {
        tableBody = parser.addChild('tableBody', parser.nextNonspace);
        tableBody.stringContent = null;
    }
    var tableRow = createNode('tableRow', [
        [parser.lineNumber, parser.nextNonspace + 1],
        [parser.lineNumber, parser.currentLine.length],
    ]);
    tableBody.appendChild(tableRow);
    var table = tableBody.parent;
    var content = parser.currentLine.slice(parser.nextNonspace);
    var _a = parseRowContent(content), offset = _a[0], cellContents = _a[1];
    generateTableCells('tableCell', cellContents, parser.lineNumber, parser.nextNonspace + 1 + offset).forEach(function (cellNode, idx) {
        if (idx >= table.columns.length) {
            cellNode.ignored = true;
        }
        tableRow.appendChild(cellNode);
    });
    return 2 /* Leaf */;
};
var reCustomBlock = /^(\$\$)(\s*[a-zA-Z])+/;
var reCanBeCustomInline = /^(\$\$)(\s*[a-zA-Z])+.*(\$\$)/;
var customBlock = function (parser) {
    var match;
    if (!parser.indented &&
        !reCanBeCustomInline.test(parser.currentLine) &&
        (match = parser.currentLine.match(reCustomBlock))) {
        var syntaxLength = match[1].length;
        parser.closeUnmatchedBlocks();
        var container = parser.addChild('customBlock', parser.nextNonspace);
        container.syntaxLength = syntaxLength;
        container.offset = parser.indent;
        parser.advanceNextNonspace();
        parser.advanceOffset(syntaxLength, false);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var reCodeFence = /^`{3,}(?!.*`)|^~{3,}/;
var reHtmlBlockOpen = [
    /./,
    /^<(?:script|pre|style)(?:\s|>|$)/i,
    /^<!--/,
    /^<[?]/,
    /^<![A-Z]/,
    /^<!\[CDATA\[/,
    /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,
    new RegExp("^(?:" + OPENTAG + "|" + CLOSETAG + ")\\s*$", 'i'),
];
var reSetextHeadingLine = /^(?:=+|-+)[ \t]*$/;
var reATXHeadingMarker = /^#{1,6}(?:[ \t]+|$)/;
var reThematicBreak = /^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/;
var reBulletListMarker = /^[*+-]/;
var reOrderedListMarker = /^(\d{1,9})([.)])/;
// Parse a list marker and return data on the marker (type,
// start, delimiter, bullet character, padding) or null.
function parseListMarker(parser, container) {
    var rest = parser.currentLine.slice(parser.nextNonspace);
    var match;
    var nextc;
    var data = {
        type: 'bullet',
        tight: true,
        bulletChar: '',
        start: 0,
        delimiter: '',
        padding: 0,
        markerOffset: parser.indent,
        // GFM: Task List Item
        task: false,
        checked: false,
    };
    if (parser.indent >= 4) {
        return null;
    }
    if ((match = rest.match(reBulletListMarker))) {
        data.type = 'bullet';
        data.bulletChar = match[0][0];
    }
    else if ((match = rest.match(reOrderedListMarker)) &&
        (container.type !== 'paragraph' || match[1] === '1')) {
        data.type = 'ordered';
        data.start = parseInt(match[1], 10);
        data.delimiter = match[2];
    }
    else {
        return null;
    }
    // make sure we have spaces after
    nextc = peek(parser.currentLine, parser.nextNonspace + match[0].length);
    if (!(nextc === -1 || nextc === C_TAB || nextc === C_SPACE)) {
        return null;
    }
    // if it interrupts paragraph, make sure first line isn't blank
    if (container.type === 'paragraph' &&
        !parser.currentLine.slice(parser.nextNonspace + match[0].length).match(reNonSpace)) {
        return null;
    }
    // we've got a match! advance offset and calculate padding
    parser.advanceNextNonspace(); // to start of marker
    parser.advanceOffset(match[0].length, true); // to end of marker
    var spacesStartCol = parser.column;
    var spacesStartOffset = parser.offset;
    do {
        parser.advanceOffset(1, true);
        nextc = peek(parser.currentLine, parser.offset);
    } while (parser.column - spacesStartCol < 5 && isSpaceOrTab(nextc));
    var blankItem = peek(parser.currentLine, parser.offset) === -1;
    var spacesAfterMarker = parser.column - spacesStartCol;
    if (spacesAfterMarker >= 5 || spacesAfterMarker < 1 || blankItem) {
        data.padding = match[0].length + 1;
        parser.column = spacesStartCol;
        parser.offset = spacesStartOffset;
        if (isSpaceOrTab(peek(parser.currentLine, parser.offset))) {
            parser.advanceOffset(1, true);
        }
    }
    else {
        data.padding = match[0].length + spacesAfterMarker;
    }
    return data;
}
// Returns true if the two list items are of the same type,
// with the same delimiter and bullet character.  This is used
// in agglomerating list items into lists.
function listsMatch(listData, itemData) {
    return (listData.type === itemData.type &&
        listData.delimiter === itemData.delimiter &&
        listData.bulletChar === itemData.bulletChar);
}
function isDisallowedDeepHeading(parser, node) {
    return parser.options.disallowDeepHeading && (node.type === 'blockQuote' || node.type === 'item');
}
var blockQuote = function (parser) {
    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
        parser.advanceNextNonspace();
        parser.advanceOffset(1, false);
        // optional following space
        if (isSpaceOrTab(peek(parser.currentLine, parser.offset))) {
            parser.advanceOffset(1, true);
        }
        parser.closeUnmatchedBlocks();
        parser.addChild('blockQuote', parser.nextNonspace);
        return 1 /* Container */;
    }
    return 0 /* None */;
};
var atxHeading = function (parser, container) {
    var match;
    if (!parser.indented &&
        // The nested Heading is disallowed in list and blockquote with 'disallowDeepHeading' option
        !isDisallowedDeepHeading(parser, container) &&
        (match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeadingMarker))) {
        parser.advanceNextNonspace();
        parser.advanceOffset(match[0].length, false);
        parser.closeUnmatchedBlocks();
        var heading = parser.addChild('heading', parser.nextNonspace);
        heading.level = match[0].trim().length; // number of #s
        heading.headingType = 'atx';
        // remove trailing ###s:
        heading.stringContent = parser.currentLine
            .slice(parser.offset)
            .replace(/^[ \t]*#+[ \t]*$/, '')
            .replace(/[ \t]+#+[ \t]*$/, '');
        parser.advanceOffset(parser.currentLine.length - parser.offset);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var fencedCodeBlock = function (parser) {
    var match;
    if (!parser.indented &&
        (match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
        var fenceLength = match[0].length;
        parser.closeUnmatchedBlocks();
        var container = parser.addChild('codeBlock', parser.nextNonspace);
        container.isFenced = true;
        container.fenceLength = fenceLength;
        container.fenceChar = match[0][0];
        container.fenceOffset = parser.indent;
        parser.advanceNextNonspace();
        parser.advanceOffset(fenceLength, false);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var htmlBlock = function (parser, container) {
    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_LESSTHAN) {
        var s = parser.currentLine.slice(parser.nextNonspace);
        var disallowedTags = parser.options.disallowedHtmlBlockTags;
        var blockType = void 0;
        for (blockType = 1; blockType <= 7; blockType++) {
            var matched = s.match(reHtmlBlockOpen[blockType]);
            if (matched) {
                if (blockType === 7) {
                    if (container.type === 'paragraph') {
                        return 0 /* None */;
                    }
                    if (disallowedTags.length > 0) {
                        var reDisallowedTags = new RegExp("</?(?:" + disallowedTags.join('|') + ")", 'i');
                        if (reDisallowedTags.test(matched[0])) {
                            return 0 /* None */;
                        }
                    }
                }
                parser.closeUnmatchedBlocks();
                // We don't adjust parser.offset;
                // spaces are part of the HTML block:
                var b = parser.addChild('htmlBlock', parser.offset);
                b.htmlBlockType = blockType;
                return 2 /* Leaf */;
            }
        }
    }
    return 0 /* None */;
};
var seTextHeading = function (parser, container) {
    var match;
    if (container.stringContent !== null &&
        !parser.indented &&
        container.type === 'paragraph' &&
        // The nested Heading is disallowed in list and blockquote with 'disallowDeepHeading' option
        !isDisallowedDeepHeading(parser, container.parent) &&
        (match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeadingLine))) {
        parser.closeUnmatchedBlocks();
        // resolve reference link definitions
        var pos = void 0;
        while (peek(container.stringContent, 0) === C_OPEN_BRACKET &&
            (pos = parser.inlineParser.parseReference(container, parser.refMap))) {
            container.stringContent = container.stringContent.slice(pos);
        }
        if (container.stringContent.length > 0) {
            var heading = createNode('heading', container.sourcepos);
            heading.level = match[0][0] === '=' ? 1 : 2;
            heading.headingType = 'setext';
            heading.stringContent = container.stringContent;
            container.insertAfter(heading);
            container.unlink();
            parser.tip = heading;
            parser.advanceOffset(parser.currentLine.length - parser.offset, false);
            return 2 /* Leaf */;
        }
        return 0 /* None */;
    }
    return 0 /* None */;
};
var thematicBreak = function (parser) {
    if (!parser.indented && reThematicBreak.test(parser.currentLine.slice(parser.nextNonspace))) {
        parser.closeUnmatchedBlocks();
        parser.addChild('thematicBreak', parser.nextNonspace);
        parser.advanceOffset(parser.currentLine.length - parser.offset, false);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var listItem = function (parser, container) {
    var data;
    var currNode = container;
    if ((!parser.indented || container.type === 'list') &&
        (data = parseListMarker(parser, currNode))) {
        parser.closeUnmatchedBlocks();
        // add the list if needed
        if (parser.tip.type !== 'list' || !listsMatch(currNode.listData, data)) {
            currNode = parser.addChild('list', parser.nextNonspace);
            currNode.listData = data;
        }
        // add the list item
        currNode = parser.addChild('item', parser.nextNonspace);
        currNode.listData = data;
        return 1 /* Container */;
    }
    return 0 /* None */;
};
// indented code block
var indentedCodeBlock = function (parser) {
    if (parser.indented && parser.tip.type !== 'paragraph' && !parser.blank) {
        // indented code
        parser.advanceOffset(CODE_INDENT, true);
        parser.closeUnmatchedBlocks();
        parser.addChild('codeBlock', parser.offset);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var blockStarts = [
    blockQuote,
    atxHeading,
    fencedCodeBlock,
    htmlBlock,
    seTextHeading,
    thematicBreak,
    listItem,
    indentedCodeBlock,
    tableHead,
    tableBody,
    customBlock,
];
// `---` for YAML, `+++` for TOML, `;;;` for JSON
var reFrontMatter = /^(-{3}|\+{3}|;{3})$/;
var frontMatter$1 = function (parser, container) {
    var currentLine = parser.currentLine, lineNumber = parser.lineNumber, indented = parser.indented;
    if (lineNumber === 1 &&
        !indented &&
        container.type === 'document' &&
        reFrontMatter.test(currentLine)) {
        parser.closeUnmatchedBlocks();
        var frontMatter_1 = parser.addChild('frontMatter', parser.nextNonspace);
        frontMatter_1.stringContent = currentLine;
        parser.advanceNextNonspace();
        parser.advanceOffset(currentLine.length, false);
        return 2 /* Leaf */;
    }
    return 0 /* None */;
};
var frontMatter = {
    continue: function (parser, container) {
        var line = parser.currentLine;
        var match = line.match(reFrontMatter);
        if (container.type === 'frontMatter' && match) {
            container.stringContent += line;
            parser.lastLineLength = match[0].length;
            parser.finalize(container, parser.lineNumber);
            return 2 /* Finished */;
        }
        return 0 /* Go */;
    },
    finalize: function (_, block) {
        if (block.stringContent === null) {
            return;
        }
        block.literal = block.stringContent;
        block.stringContent = null;
    },
    canContain: function () {
        return false;
    },
    acceptsLines: true,
};
var reHtmlBlockClose = [
    /./,
    /<\/(?:script|pre|style)>/i,
    /-->/,
    /\?>/,
    />/,
    /\]\]>/,
];
var reMaybeSpecial = /^[#`~*+_=<>0-9-;$]/;
var reLineEnding$1 = /\r\n|\n|\r/;
function esm_document() {
    return createNode('document', [
        [1, 1],
        [0, 0],
    ]);
}
var defaultOptions$1 = {
    smart: false,
    tagFilter: false,
    extendedAutolinks: false,
    disallowedHtmlBlockTags: [],
    referenceDefinition: false,
    disallowDeepHeading: false,
    customParser: null,
    frontMatter: false,
};
var Parser = /** @class */ (function () {
    function Parser(options) {
        this.options = esm_assign(esm_assign({}, defaultOptions$1), options);
        this.doc = esm_document();
        this.tip = this.doc;
        this.oldtip = this.doc;
        this.lineNumber = 0;
        this.offset = 0;
        this.column = 0;
        this.nextNonspace = 0;
        this.nextNonspaceColumn = 0;
        this.indent = 0;
        this.currentLine = '';
        this.indented = false;
        this.blank = false;
        this.partiallyConsumedTab = false;
        this.allClosed = true;
        this.lastMatchedContainer = this.doc;
        this.refMap = {};
        this.refLinkCandidateMap = {};
        this.refDefCandidateMap = {};
        this.lastLineLength = 0;
        this.lines = [];
        if (this.options.frontMatter) {
            blockHandlers.frontMatter = frontMatter;
            blockStarts.unshift(frontMatter$1);
        }
        this.inlineParser = new InlineParser(this.options);
    }
    Parser.prototype.advanceOffset = function (count, columns) {
        if (columns === void 0) {
            columns = false;
        }
        var currentLine = this.currentLine;
        var charsToTab, charsToAdvance;
        var c;
        while (count > 0 && (c = currentLine[this.offset])) {
            if (c === '\t') {
                charsToTab = 4 - (this.column % 4);
                if (columns) {
                    this.partiallyConsumedTab = charsToTab > count;
                    charsToAdvance = charsToTab > count ? count : charsToTab;
                    this.column += charsToAdvance;
                    this.offset += this.partiallyConsumedTab ? 0 : 1;
                    count -= charsToAdvance;
                }
                else {
                    this.partiallyConsumedTab = false;
                    this.column += charsToTab;
                    this.offset += 1;
                    count -= 1;
                }
            }
            else {
                this.partiallyConsumedTab = false;
                this.offset += 1;
                this.column += 1; // assume ascii; block starts are ascii
                count -= 1;
            }
        }
    };
    Parser.prototype.advanceNextNonspace = function () {
        this.offset = this.nextNonspace;
        this.column = this.nextNonspaceColumn;
        this.partiallyConsumedTab = false;
    };
    Parser.prototype.findNextNonspace = function () {
        var currentLine = this.currentLine;
        var i = this.offset;
        var cols = this.column;
        var c;
        while ((c = currentLine.charAt(i)) !== '') {
            if (c === ' ') {
                i++;
                cols++;
            }
            else if (c === '\t') {
                i++;
                cols += 4 - (cols % 4);
            }
            else {
                break;
            }
        }
        this.blank = c === '\n' || c === '\r' || c === '';
        this.nextNonspace = i;
        this.nextNonspaceColumn = cols;
        this.indent = this.nextNonspaceColumn - this.column;
        this.indented = this.indent >= CODE_INDENT;
    };
    // Add a line to the block at the tip.  We assume the tip
    // can accept lines -- that check should be done before calling this.
    Parser.prototype.addLine = function () {
        if (this.partiallyConsumedTab) {
            this.offset += 1; // skip over tab
            // add space characters:
            var charsToTab = 4 - (this.column % 4);
            this.tip.stringContent += repeat(' ', charsToTab);
        }
        if (this.tip.lineOffsets) {
            this.tip.lineOffsets.push(this.offset);
        }
        else {
            this.tip.lineOffsets = [this.offset];
        }
        this.tip.stringContent += this.currentLine.slice(this.offset) + "\n";
    };
    // Add block of type tag as a child of the tip.  If the tip can't
    // accept children, close and finalize it and try its parent,
    // and so on til we find a block that can accept children.
    Parser.prototype.addChild = function (tag, offset) {
        while (!blockHandlers[this.tip.type].canContain(tag)) {
            this.finalize(this.tip, this.lineNumber - 1);
        }
        var columnNumber = offset + 1; // offset 0 = column 1
        var newBlock = createNode(tag, [
            [this.lineNumber, columnNumber],
            [0, 0],
        ]);
        newBlock.stringContent = '';
        this.tip.appendChild(newBlock);
        this.tip = newBlock;
        return newBlock;
    };
    // Finalize and close any unmatched blocks.
    Parser.prototype.closeUnmatchedBlocks = function () {
        if (!this.allClosed) {
            // finalize any blocks not matched
            while (this.oldtip !== this.lastMatchedContainer) {
                var parent_1 = this.oldtip.parent;
                this.finalize(this.oldtip, this.lineNumber - 1);
                this.oldtip = parent_1;
            }
            this.allClosed = true;
        }
    };
    // Finalize a block.  Close it and do any necessary postprocessing,
    // e.g. creating stringContent from strings, setting the 'tight'
    // or 'loose' status of a list, and parsing the beginnings
    // of paragraphs for reference definitions.  Reset the tip to the
    // parent of the closed block.
    Parser.prototype.finalize = function (block, lineNumber) {
        var above = block.parent;
        block.open = false;
        block.sourcepos[1] = [lineNumber, this.lastLineLength];
        blockHandlers[block.type].finalize(this, block);
        this.tip = above;
    };
    // Walk through a block & children recursively, parsing string content
    // into inline content where appropriate.
    Parser.prototype.processInlines = function (block) {
        var event;
        var customParser = this.options.customParser;
        var walker = block.walker();
        this.inlineParser.refMap = this.refMap;
        this.inlineParser.refLinkCandidateMap = this.refLinkCandidateMap;
        this.inlineParser.refDefCandidateMap = this.refDefCandidateMap;
        this.inlineParser.options = this.options;
        while ((event = walker.next())) {
            var node = event.node, entering = event.entering;
            var t = node.type;
            if (customParser && customParser[t]) {
                customParser[t](node, { entering: entering, options: this.options });
            }
            if (!entering &&
                (t === 'paragraph' ||
                    t === 'heading' ||
                    (t === 'tableCell' && !node.ignored))) {
                this.inlineParser.parse(node);
            }
        }
    };
    // Analyze a line of text and update the document appropriately.
    // We parse markdown text by calling this on each line of input,
    // then finalizing the document.
    Parser.prototype.incorporateLine = function (ln) {
        var container = this.doc;
        this.oldtip = this.tip;
        this.offset = 0;
        this.column = 0;
        this.blank = false;
        this.partiallyConsumedTab = false;
        this.lineNumber += 1;
        // replace NUL characters for security
        if (ln.indexOf('\u0000') !== -1) {
            ln = ln.replace(/\0/g, '\uFFFD');
        }
        this.currentLine = ln;
        // For each containing block, try to parse the associated line start.
        // Bail out on failure: container will point to the last matching block.
        // Set allMatched to false if not all containers match.
        var allMatched = true;
        var lastChild;
        while ((lastChild = container.lastChild) && lastChild.open) {
            container = lastChild;
            this.findNextNonspace();
            switch (blockHandlers[container.type]['continue'](this, container)) {
                case 0 /* Go */: // we've matched, keep going
                    break;
                case 1 /* Stop */: // we've failed to match a block
                    allMatched = false;
                    break;
                case 2 /* Finished */: // we've hit end of line for fenced code close and can return
                    this.lastLineLength = ln.length;
                    return;
                default:
                    throw new Error('continue returned illegal value, must be 0, 1, or 2');
            }
            if (!allMatched) {
                container = container.parent; // back up to last matching block
                break;
            }
        }
        this.allClosed = container === this.oldtip;
        this.lastMatchedContainer = container;
        var matchedLeaf = container.type !== 'paragraph' && blockHandlers[container.type].acceptsLines;
        var blockStartsLen = blockStarts.length;
        // Unless last matched container is a code block, try new container starts,
        // adding children to the last matched container:
        while (!matchedLeaf) {
            this.findNextNonspace();
            // this is a little performance optimization:
            if (container.type !== 'table' &&
                container.type !== 'tableBody' &&
                container.type !== 'paragraph' &&
                !this.indented &&
                !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
                this.advanceNextNonspace();
                break;
            }
            var i = 0;
            while (i < blockStartsLen) {
                var res = blockStarts[i](this, container);
                if (res === 1 /* Container */) {
                    container = this.tip;
                    break;
                }
                else if (res === 2 /* Leaf */) {
                    container = this.tip;
                    matchedLeaf = true;
                    break;
                }
                else {
                    i++;
                }
            }
            if (i === blockStartsLen) {
                // nothing matched
                this.advanceNextNonspace();
                break;
            }
        }
        // What remains at the offset is a text line.  Add the text to the
        // appropriate container.
        // First check for a lazy paragraph continuation:
        if (!this.allClosed && !this.blank && this.tip.type === 'paragraph') {
            // lazy paragraph continuation
            this.addLine();
        }
        else {
            // not a lazy continuation
            // finalize any blocks not matched
            this.closeUnmatchedBlocks();
            if (this.blank && container.lastChild) {
                container.lastChild.lastLineBlank = true;
            }
            var t = container.type;
            // Block quote lines are never blank as they start with >
            // and we don't count blanks in fenced code for purposes of tight/loose
            // lists or breaking out of lists. We also don't set _lastLineBlank
            // on an empty list item, or if we just closed a fenced block.
            var lastLineBlank = this.blank &&
                !(t === 'blockQuote' ||
                    (isCodeBlock(container) && container.isFenced) ||
                    (t === 'item' && !container.firstChild && container.sourcepos[0][0] === this.lineNumber));
            // propagate lastLineBlank up through parents:
            var cont = container;
            while (cont) {
                cont.lastLineBlank = lastLineBlank;
                cont = cont.parent;
            }
            if (blockHandlers[t].acceptsLines) {
                this.addLine();
                // if HtmlBlock, check for end condition
                if (isHtmlBlock(container) &&
                    container.htmlBlockType >= 1 &&
                    container.htmlBlockType <= 5 &&
                    reHtmlBlockClose[container.htmlBlockType].test(this.currentLine.slice(this.offset))) {
                    this.lastLineLength = ln.length;
                    this.finalize(container, this.lineNumber);
                }
            }
            else if (this.offset < ln.length && !this.blank) {
                // create paragraph container for line
                container = this.addChild('paragraph', this.offset);
                this.advanceNextNonspace();
                this.addLine();
            }
        }
        this.lastLineLength = ln.length;
    };
    // The main parsing function.  Returns a parsed document AST.
    Parser.prototype.parse = function (input, lineTexts) {
        this.doc = esm_document();
        this.tip = this.doc;
        this.lineNumber = 0;
        this.lastLineLength = 0;
        this.offset = 0;
        this.column = 0;
        this.lastMatchedContainer = this.doc;
        this.currentLine = '';
        var lines = input.split(reLineEnding$1);
        var len = lines.length;
        this.lines = lineTexts ? lineTexts : lines;
        if (this.options.referenceDefinition) {
            this.clearRefMaps();
        }
        if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
            // ignore last blank line created by final newline
            len -= 1;
        }
        for (var i = 0; i < len; i++) {
            this.incorporateLine(lines[i]);
        }
        while (this.tip) {
            this.finalize(this.tip, len);
        }
        this.processInlines(this.doc);
        return this.doc;
    };
    Parser.prototype.partialParseStart = function (lineNumber, lines) {
        this.doc = esm_document();
        this.tip = this.doc;
        this.lineNumber = lineNumber - 1;
        this.lastLineLength = 0;
        this.offset = 0;
        this.column = 0;
        this.lastMatchedContainer = this.doc;
        this.currentLine = '';
        var len = lines.length;
        for (var i = 0; i < len; i++) {
            this.incorporateLine(lines[i]);
        }
        return this.doc;
    };
    Parser.prototype.partialParseExtends = function (lines) {
        for (var i = 0; i < lines.length; i++) {
            this.incorporateLine(lines[i]);
        }
    };
    Parser.prototype.partialParseFinish = function () {
        while (this.tip) {
            this.finalize(this.tip, this.lineNumber);
        }
        this.processInlines(this.doc);
    };
    Parser.prototype.setRefMaps = function (refMap, refLinkCandidateMap, refDefCandidateMap) {
        this.refMap = refMap;
        this.refLinkCandidateMap = refLinkCandidateMap;
        this.refDefCandidateMap = refDefCandidateMap;
    };
    Parser.prototype.clearRefMaps = function () {
        [this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function (map) {
            clearObj(map);
        });
    };
    return Parser;
}());
function comparePos(p1, p2) {
    if (p1[0] < p2[0]) {
        return 1 /* LT */;
    }
    if (p1[0] > p2[0]) {
        return -1 /* GT */;
    }
    if (p1[1] < p2[1]) {
        return 1 /* LT */;
    }
    if (p1[1] > p2[1]) {
        return -1 /* GT */;
    }
    return 0 /* EQ */;
}
function compareRangeAndPos(_a, pos) {
    var startPos = _a[0], endPos = _a[1];
    if (comparePos(endPos, pos) === 1 /* LT */) {
        return 1 /* LT */;
    }
    if (comparePos(startPos, pos) === -1 /* GT */) {
        return -1 /* GT */;
    }
    return 0 /* EQ */;
}
function removeNextUntil(node, last) {
    if (node.parent !== last.parent || node === last) {
        return;
    }
    var next = node.next;
    while (next && next !== last) {
        var temp = next.next;
        for (var _i = 0, _a = ['parent', 'prev', 'next']; _i < _a.length; _i++) {
            var type = _a[_i];
            if (next[type]) {
                removeNodeById(next[type].id);
                next[type] = null;
            }
        }
        next = temp;
    }
    node.next = last.next;
    if (last.next) {
        last.next.prev = node;
    }
    else {
        node.parent.lastChild = node;
    }
}
function getChildNodes(parent) {
    var nodes = [];
    var curr = parent.firstChild;
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }
    return nodes;
}
function insertNodesBefore(target, nodes) {
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        target.insertBefore(node);
    }
}
function prependChildNodes(parent, nodes) {
    for (var i = nodes.length - 1; i >= 0; i -= 1) {
        parent.prependChild(nodes[i]);
    }
}
function updateNextLineNumbers(base, diff) {
    if (!base || !base.parent || diff === 0) {
        return;
    }
    var walker = base.parent.walker();
    walker.resumeAt(base, true);
    var event;
    while ((event = walker.next())) {
        var node = event.node, entering = event.entering;
        if (entering) {
            node.sourcepos[0][0] += diff;
            node.sourcepos[1][0] += diff;
        }
    }
}
function compareRangeAndLine(_a, line) {
    var startPos = _a[0], endPos = _a[1];
    if (endPos[0] < line) {
        return 1 /* LT */;
    }
    if (startPos[0] > line) {
        return -1 /* GT */;
    }
    return 0 /* EQ */;
}
function findChildNodeAtLine(parent, line) {
    var node = parent.firstChild;
    while (node) {
        var comp = compareRangeAndLine(node.sourcepos, line);
        if (comp === 0 /* EQ */) {
            return node;
        }
        if (comp === -1 /* GT */) {
            // To consider that top line is blank line
            return node.prev || node;
        }
        node = node.next;
    }
    return parent.lastChild;
}
function lastLeafNode(node) {
    while (node.lastChild) {
        node = node.lastChild;
    }
    return node;
}
function sameLineTopAncestor(node) {
    while (node.parent &&
        node.parent.type !== 'document' &&
        node.parent.sourcepos[0][0] === node.sourcepos[0][0]) {
        node = node.parent;
    }
    return node;
}
function findFirstNodeAtLine(parent, line) {
    var node = parent.firstChild;
    var prev = null;
    while (node) {
        var comp = compareRangeAndLine(node.sourcepos, line);
        if (comp === 0 /* EQ */) {
            if (node.sourcepos[0][0] === line || !node.firstChild) {
                return node;
            }
            prev = node;
            node = node.firstChild;
        }
        else if (comp === -1 /* GT */) {
            break;
        }
        else {
            prev = node;
            node = node.next;
        }
    }
    if (prev) {
        return sameLineTopAncestor(lastLeafNode(prev));
    }
    return null;
}
function findNodeAtPosition(parent, pos) {
    var node = parent;
    var prev = null;
    while (node) {
        var comp = compareRangeAndPos(node.sourcepos, pos);
        if (comp === 0 /* EQ */) {
            if (node.firstChild) {
                prev = node;
                node = node.firstChild;
            }
            else {
                return node;
            }
        }
        else if (comp === -1 /* GT */) {
            return prev;
        }
        else if (node.next) {
            node = node.next;
        }
        else {
            return prev;
        }
    }
    return node;
}
function findNodeById(id) {
    return getNodeById(id) || null;
}
function invokeNextUntil(callback, start, end) {
    if (end === void 0) {
        end = null;
    }
    if (start) {
        var walker = start.walker();
        while (start && start !== end) {
            callback(start);
            var next = walker.next();
            if (next) {
                start = next.node;
            }
            else {
                break;
            }
        }
    }
}
function isUnlinked(id) {
    var node = findNodeById(id);
    if (!node) {
        return true;
    }
    while (node && node.type !== 'document') {
        // eslint-disable-next-line no-loop-func
        if (!node.parent && !node.prev && !node.next) {
            return true;
        }
        node = node.parent;
    }
    return false;
}
var reLineEnding = /\r\n|\n|\r/;
function canBeContinuedListItem(lineText) {
    var spaceMatch = lineText.match(/^[ \t]+/);
    if (spaceMatch && (spaceMatch[0].length >= 2 || /\t/.test(spaceMatch[0]))) {
        return true;
    }
    var leftTrimmed = spaceMatch ? lineText.slice(spaceMatch.length) : lineText;
    return reBulletListMarker.test(leftTrimmed) || reOrderedListMarker.test(leftTrimmed);
}
function canBeContinuedTableBody(lineText) {
    return !isBlank(lineText) && lineText.indexOf('|') !== -1;
}
function createRefDefState(node) {
    var id = node.id, title = node.title, sourcepos = node.sourcepos, dest = node.dest;
    return {
        id: id,
        title: title,
        sourcepos: sourcepos,
        unlinked: false,
        destination: dest,
    };
}
var ToastMark = /** @class */ (function () {
    function ToastMark(contents, options) {
        this.refMap = {};
        this.refLinkCandidateMap = {};
        this.refDefCandidateMap = {};
        this.referenceDefinition = !!(options === null || options === void 0 ? void 0 : options.referenceDefinition);
        this.parser = new Parser(options);
        this.parser.setRefMaps(this.refMap, this.refLinkCandidateMap, this.refDefCandidateMap);
        this.eventHandlerMap = { change: [] };
        contents = contents || '';
        this.lineTexts = contents.split(reLineEnding);
        this.root = this.parser.parse(contents, this.lineTexts);
    }
    ToastMark.prototype.updateLineTexts = function (startPos, endPos, newText) {
        var _a;
        var startLine = startPos[0], startCol = startPos[1];
        var endLine = endPos[0], endCol = endPos[1];
        var newLines = newText.split(reLineEnding);
        var newLineLen = newLines.length;
        var startLineText = this.lineTexts[startLine - 1];
        var endLineText = this.lineTexts[endLine - 1];
        newLines[0] = startLineText.slice(0, startCol - 1) + newLines[0];
        newLines[newLineLen - 1] = newLines[newLineLen - 1] + endLineText.slice(endCol - 1);
        var removedLineLen = endLine - startLine + 1;
        (_a = this.lineTexts).splice.apply(_a, esm_spreadArray([startLine - 1, removedLineLen], newLines));
        return newLineLen - removedLineLen;
    };
    ToastMark.prototype.updateRootNodeState = function () {
        if (this.lineTexts.length === 1 && this.lineTexts[0] === '') {
            this.root.lastLineBlank = true;
            this.root.sourcepos = [
                [1, 1],
                [1, 0],
            ];
            return;
        }
        if (this.root.lastChild) {
            this.root.lastLineBlank = this.root.lastChild.lastLineBlank;
        }
        var lineTexts = this.lineTexts;
        var idx = lineTexts.length - 1;
        while (lineTexts[idx] === '') {
            idx -= 1;
        }
        if (lineTexts.length - 2 > idx) {
            idx += 1;
        }
        this.root.sourcepos[1] = [idx + 1, lineTexts[idx].length];
    };
    ToastMark.prototype.replaceRangeNodes = function (startNode, endNode, newNodes) {
        if (!startNode) {
            if (endNode) {
                insertNodesBefore(endNode, newNodes);
                removeNodeById(endNode.id);
                endNode.unlink();
            }
            else {
                prependChildNodes(this.root, newNodes);
            }
        }
        else {
            insertNodesBefore(startNode, newNodes);
            removeNextUntil(startNode, endNode);
            [startNode.id, endNode.id].forEach(function (id) { return removeNodeById(id); });
            startNode.unlink();
        }
    };
    ToastMark.prototype.getNodeRange = function (startPos, endPos) {
        var startNode = findChildNodeAtLine(this.root, startPos[0]);
        var endNode = findChildNodeAtLine(this.root, endPos[0]);
        // extend node range to include a following block which doesn't have preceding blank line
        if (endNode && endNode.next && endPos[0] + 1 === endNode.next.sourcepos[0][0]) {
            endNode = endNode.next;
        }
        return [startNode, endNode];
    };
    ToastMark.prototype.trigger = function (eventName, param) {
        this.eventHandlerMap[eventName].forEach(function (handler) {
            handler(param);
        });
    };
    ToastMark.prototype.extendEndLine = function (line) {
        while (this.lineTexts[line] === '') {
            line += 1;
        }
        return line;
    };
    ToastMark.prototype.parseRange = function (startNode, endNode, startLine, endLine) {
        // extends starting range if the first node can be a continued list item
        if (startNode &&
            startNode.prev &&
            ((isList(startNode.prev) && canBeContinuedListItem(this.lineTexts[startLine - 1])) ||
                (isTable(startNode.prev) && canBeContinuedTableBody(this.lineTexts[startLine - 1])))) {
            startNode = startNode.prev;
            startLine = startNode.sourcepos[0][0];
        }
        var editedLines = this.lineTexts.slice(startLine - 1, endLine);
        var root = this.parser.partialParseStart(startLine, editedLines);
        // extends ending range if the following node can be a fenced code block or a continued list item
        var nextNode = endNode ? endNode.next : this.root.firstChild;
        var lastChild = root.lastChild;
        var isOpenedLastChildCodeBlock = lastChild && isCodeBlock(lastChild) && lastChild.open;
        var isOpenedLastChildCustomBlock = lastChild && isCustomBlock(lastChild) && lastChild.open;
        var isLastChildList = lastChild && isList(lastChild);
        while (((isOpenedLastChildCodeBlock || isOpenedLastChildCustomBlock) && nextNode) ||
            (isLastChildList && nextNode && (nextNode.type === 'list' || nextNode.sourcepos[0][1] >= 2))) {
            var newEndLine = this.extendEndLine(nextNode.sourcepos[1][0]);
            this.parser.partialParseExtends(this.lineTexts.slice(endLine, newEndLine));
            if (!startNode) {
                startNode = endNode;
            }
            endNode = nextNode;
            endLine = newEndLine;
            nextNode = nextNode.next;
        }
        this.parser.partialParseFinish();
        var newNodes = getChildNodes(root);
        return { newNodes: newNodes, extStartNode: startNode, extEndNode: endNode };
    };
    ToastMark.prototype.getRemovedNodeRange = function (extStartNode, extEndNode) {
        if (!extStartNode ||
            (extStartNode && isRefDef(extStartNode)) ||
            (extEndNode && isRefDef(extEndNode))) {
            return null;
        }
        return {
            id: [extStartNode.id, extEndNode.id],
            line: [extStartNode.sourcepos[0][0] - 1, extEndNode.sourcepos[1][0] - 1],
        };
    };
    ToastMark.prototype.markDeletedRefMap = function (extStartNode, extEndNode) {
        var _this = this;
        if (!isEmptyObj(this.refMap)) {
            var markDeleted = function (node) {
                if (isRefDef(node)) {
                    var refDefState = _this.refMap[node.label];
                    if (refDefState && node.id === refDefState.id) {
                        refDefState.unlinked = true;
                    }
                }
            };
            if (extStartNode) {
                invokeNextUntil(markDeleted, extStartNode.parent, extEndNode);
            }
            if (extEndNode) {
                invokeNextUntil(markDeleted, extEndNode);
            }
        }
    };
    ToastMark.prototype.replaceWithNewRefDefState = function (nodes) {
        var _this = this;
        if (!isEmptyObj(this.refMap)) {
            var replaceWith_1 = function (node) {
                if (isRefDef(node)) {
                    var label = node.label;
                    var refDefState = _this.refMap[label];
                    if (!refDefState || refDefState.unlinked) {
                        _this.refMap[label] = createRefDefState(node);
                    }
                }
            };
            nodes.forEach(function (node) {
                invokeNextUntil(replaceWith_1, node);
            });
        }
    };
    ToastMark.prototype.replaceWithRefDefCandidate = function () {
        var _this = this;
        if (!isEmptyObj(this.refDefCandidateMap)) {
            iterateObject(this.refDefCandidateMap, function (_, candidate) {
                var label = candidate.label, sourcepos = candidate.sourcepos;
                var refDefState = _this.refMap[label];
                if (!refDefState ||
                    refDefState.unlinked ||
                    refDefState.sourcepos[0][0] > sourcepos[0][0]) {
                    _this.refMap[label] = createRefDefState(candidate);
                }
            });
        }
    };
    ToastMark.prototype.getRangeWithRefDef = function (startLine, endLine, startNode, endNode, lineDiff) {
        if (this.referenceDefinition && !isEmptyObj(this.refMap)) {
            var prevNode = findChildNodeAtLine(this.root, startLine - 1);
            var nextNode = findChildNodeAtLine(this.root, endLine + 1);
            if (prevNode && isRefDef(prevNode) && prevNode !== startNode && prevNode !== endNode) {
                startNode = prevNode;
                startLine = startNode.sourcepos[0][0];
            }
            if (nextNode && isRefDef(nextNode) && nextNode !== startNode && nextNode !== endNode) {
                endNode = nextNode;
                endLine = this.extendEndLine(endNode.sourcepos[1][0] + lineDiff);
            }
        }
        return [startNode, endNode, startLine, endLine];
    };
    ToastMark.prototype.parse = function (startPos, endPos, lineDiff) {
        if (lineDiff === void 0) {
            lineDiff = 0;
        }
        var range = this.getNodeRange(startPos, endPos);
        var startNode = range[0], endNode = range[1];
        var startLine = startNode ? Math.min(startNode.sourcepos[0][0], startPos[0]) : startPos[0];
        var endLine = this.extendEndLine((endNode ? Math.max(endNode.sourcepos[1][0], endPos[0]) : endPos[0]) + lineDiff);
        var parseResult = this.parseRange.apply(this, this.getRangeWithRefDef(startLine, endLine, startNode, endNode, lineDiff));
        var newNodes = parseResult.newNodes, extStartNode = parseResult.extStartNode, extEndNode = parseResult.extEndNode;
        var removedNodeRange = this.getRemovedNodeRange(extStartNode, extEndNode);
        var nextNode = extEndNode ? extEndNode.next : this.root.firstChild;
        if (this.referenceDefinition) {
            this.markDeletedRefMap(extStartNode, extEndNode);
            this.replaceRangeNodes(extStartNode, extEndNode, newNodes);
            this.replaceWithNewRefDefState(newNodes);
        }
        else {
            this.replaceRangeNodes(extStartNode, extEndNode, newNodes);
        }
        return { nodes: newNodes, removedNodeRange: removedNodeRange, nextNode: nextNode };
    };
    ToastMark.prototype.parseRefLink = function () {
        var _this = this;
        var result = [];
        if (!isEmptyObj(this.refMap)) {
            iterateObject(this.refMap, function (label, value) {
                if (value.unlinked) {
                    delete _this.refMap[label];
                }
                iterateObject(_this.refLinkCandidateMap, function (_, candidate) {
                    var node = candidate.node, refLabel = candidate.refLabel;
                    if (refLabel === label) {
                        result.push(_this.parse(node.sourcepos[0], node.sourcepos[1]));
                    }
                });
            });
        }
        return result;
    };
    ToastMark.prototype.removeUnlinkedCandidate = function () {
        if (!isEmptyObj(this.refDefCandidateMap)) {
            [this.refLinkCandidateMap, this.refDefCandidateMap].forEach(function (candidateMap) {
                iterateObject(candidateMap, function (id) {
                    if (isUnlinked(id)) {
                        delete candidateMap[id];
                    }
                });
            });
        }
    };
    ToastMark.prototype.editMarkdown = function (startPos, endPos, newText) {
        var lineDiff = this.updateLineTexts(startPos, endPos, newText);
        var parseResult = this.parse(startPos, endPos, lineDiff);
        var editResult = omit(parseResult, 'nextNode');
        updateNextLineNumbers(parseResult.nextNode, lineDiff);
        this.updateRootNodeState();
        var result = [editResult];
        if (this.referenceDefinition) {
            this.removeUnlinkedCandidate();
            this.replaceWithRefDefCandidate();
            result = result.concat(this.parseRefLink());
        }
        this.trigger('change', result);
        return result;
    };
    ToastMark.prototype.getLineTexts = function () {
        return this.lineTexts;
    };
    ToastMark.prototype.getRootNode = function () {
        return this.root;
    };
    ToastMark.prototype.findNodeAtPosition = function (pos) {
        var node = findNodeAtPosition(this.root, pos);
        if (!node || node === this.root) {
            return null;
        }
        return node;
    };
    ToastMark.prototype.findFirstNodeAtLine = function (line) {
        return findFirstNodeAtLine(this.root, line);
    };
    ToastMark.prototype.on = function (eventName, callback) {
        this.eventHandlerMap[eventName].push(callback);
    };
    ToastMark.prototype.off = function (eventName, callback) {
        var handlers = this.eventHandlerMap[eventName];
        var idx = handlers.indexOf(callback);
        handlers.splice(idx, 1);
    };
    ToastMark.prototype.findNodeById = function (id) {
        return findNodeById(id);
    };
    ToastMark.prototype.removeAllNode = function () {
        removeAllNode();
    };
    return ToastMark;
}());
var disallowedTags = [
    'title',
    'textarea',
    'style',
    'xmp',
    'iframe',
    'noembed',
    'noframes',
    'script',
    'plaintext',
];
var reDisallowedTag = new RegExp("<(/?(?:" + disallowedTags.join('|') + ")[^>]*>)", 'ig');
function filterDisallowedTags(str) {
    if (reDisallowedTag.test(str)) {
        return str.replace(reDisallowedTag, function (_, group) { return "&lt;" + group; });
    }
    return str;
}
var baseConvertors = {
    heading: function (node, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: "h" + node.level,
            outerNewLine: true,
        };
    },
    text: function (node) {
        return {
            type: 'text',
            content: node.literal,
        };
    },
    softbreak: function (_, _a) {
        var options = _a.options;
        return {
            type: 'html',
            content: options.softbreak,
        };
    },
    linebreak: function () {
        return {
            type: 'html',
            content: '<br />\n',
        };
    },
    emph: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'em',
        };
    },
    strong: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'strong',
        };
    },
    paragraph: function (node, _a) {
        var _b;
        var entering = _a.entering;
        var grandparent = (_b = node.parent) === null || _b === void 0 ? void 0 : _b.parent;
        if (grandparent && grandparent.type === 'list') {
            if (grandparent.listData.tight) {
                return null;
            }
        }
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'p',
            outerNewLine: true,
        };
    },
    thematicBreak: function () {
        return {
            type: 'openTag',
            tagName: 'hr',
            outerNewLine: true,
            selfClose: true,
        };
    },
    blockQuote: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'blockquote',
            outerNewLine: true,
            innerNewLine: true,
        };
    },
    list: function (node, _a) {
        var entering = _a.entering;
        var _b = node.listData, type = _b.type, start = _b.start;
        var tagName = type === 'bullet' ? 'ul' : 'ol';
        var attributes = {};
        if (tagName === 'ol' && start !== null && start !== 1) {
            attributes.start = start.toString();
        }
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: tagName,
            attributes: attributes,
            outerNewLine: true,
        };
    },
    item: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'li',
            outerNewLine: true,
        };
    },
    htmlInline: function (node, _a) {
        var options = _a.options;
        var content = options.tagFilter ? filterDisallowedTags(node.literal) : node.literal;
        return { type: 'html', content: content };
    },
    htmlBlock: function (node, _a) {
        var options = _a.options;
        var content = options.tagFilter ? filterDisallowedTags(node.literal) : node.literal;
        if (options.nodeId) {
            return [
                { type: 'openTag', tagName: 'div', outerNewLine: true },
                { type: 'html', content: content },
                { type: 'closeTag', tagName: 'div', outerNewLine: true },
            ];
        }
        return { type: 'html', content: content, outerNewLine: true };
    },
    code: function (node) {
        return [
            { type: 'openTag', tagName: 'code' },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
        ];
    },
    codeBlock: function (node) {
        var infoStr = node.info;
        var infoWords = infoStr ? infoStr.split(/\s+/) : [];
        var codeClassNames = [];
        if (infoWords.length > 0 && infoWords[0].length > 0) {
            codeClassNames.push("language-" + escapeXml(infoWords[0]));
        }
        return [
            { type: 'openTag', tagName: 'pre', outerNewLine: true },
            { type: 'openTag', tagName: 'code', classNames: codeClassNames },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
            { type: 'closeTag', tagName: 'pre', outerNewLine: true },
        ];
    },
    link: function (node, _a) {
        var entering = _a.entering;
        if (entering) {
            var _b = node, title = _b.title, destination = _b.destination;
            return {
                type: 'openTag',
                tagName: 'a',
                attributes: esm_assign({ href: escapeXml(destination) }, (title && { title: escapeXml(title) })),
            };
        }
        return { type: 'closeTag', tagName: 'a' };
    },
    image: function (node, _a) {
        var getChildrenText = _a.getChildrenText, skipChildren = _a.skipChildren;
        var _b = node, title = _b.title, destination = _b.destination;
        skipChildren();
        return {
            type: 'openTag',
            tagName: 'img',
            selfClose: true,
            attributes: esm_assign({ src: escapeXml(destination), alt: getChildrenText(node) }, (title && { title: escapeXml(title) })),
        };
    },
    customBlock: function (node, context, convertors) {
        var info = node.info.trim().toLowerCase();
        var customConvertor = convertors[info];
        if (customConvertor) {
            try {
                return customConvertor(node, context);
            }
            catch (e) {
                console.warn("[@toast-ui/editor] - The error occurred when " + info + " block node was parsed in markdown renderer: " + e);
            }
        }
        return [
            { type: 'openTag', tagName: 'div', outerNewLine: true },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'div', outerNewLine: true },
        ];
    },
    frontMatter: function (node) {
        return [
            {
                type: 'openTag',
                tagName: 'div',
                outerNewLine: true,
                // Because front matter is metadata, it should not be render.
                attributes: { style: 'white-space: pre; display: none;' },
            },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'div', outerNewLine: true },
        ];
    },
    customInline: function (node, context, convertors) {
        var _a = node, info = _a.info, firstChild = _a.firstChild;
        var nomalizedInfo = info.trim().toLowerCase();
        var customConvertor = convertors[nomalizedInfo];
        var entering = context.entering;
        if (customConvertor) {
            try {
                return customConvertor(node, context);
            }
            catch (e) {
                console.warn("[@toast-ui/editor] - The error occurred when " + nomalizedInfo + " inline node was parsed in markdown renderer: " + e);
            }
        }
        return entering
            ? [
                { type: 'openTag', tagName: 'span' },
                { type: 'text', content: "$$" + info + (firstChild ? ' ' : '') },
            ]
            : [
                { type: 'text', content: '$$' },
                { type: 'closeTag', tagName: 'span' },
            ];
    },
};
var gfmConvertors = {
    strike: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'del',
        };
    },
    item: function (node, _a) {
        var entering = _a.entering;
        var _b = node.listData, checked = _b.checked, task = _b.task;
        if (entering) {
            var itemTag = {
                type: 'openTag',
                tagName: 'li',
                outerNewLine: true,
            };
            if (task) {
                return [
                    itemTag,
                    {
                        type: 'openTag',
                        tagName: 'input',
                        selfClose: true,
                        attributes: esm_assign(esm_assign({}, (checked && { checked: '' })), { disabled: '', type: 'checkbox' }),
                    },
                    {
                        type: 'text',
                        content: ' ',
                    },
                ];
            }
            return itemTag;
        }
        return {
            type: 'closeTag',
            tagName: 'li',
            outerNewLine: true,
        };
    },
    table: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'table',
            outerNewLine: true,
        };
    },
    tableHead: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'thead',
            outerNewLine: true,
        };
    },
    tableBody: function (_, _a) {
        var entering = _a.entering;
        return {
            type: entering ? 'openTag' : 'closeTag',
            tagName: 'tbody',
            outerNewLine: true,
        };
    },
    tableRow: function (node, _a) {
        var entering = _a.entering;
        if (entering) {
            return {
                type: 'openTag',
                tagName: 'tr',
                outerNewLine: true,
            };
        }
        var result = [];
        if (node.lastChild) {
            var columnLen = node.parent.parent.columns.length;
            var lastColIdx = node.lastChild.endIdx;
            for (var i = lastColIdx + 1; i < columnLen; i += 1) {
                result.push({
                    type: 'openTag',
                    tagName: 'td',
                    outerNewLine: true,
                }, {
                    type: 'closeTag',
                    tagName: 'td',
                    outerNewLine: true,
                });
            }
        }
        result.push({
            type: 'closeTag',
            tagName: 'tr',
            outerNewLine: true,
        });
        return result;
    },
    tableCell: function (node, _a) {
        var entering = _a.entering;
        if (node.ignored) {
            return {
                type: 'text',
                content: '',
            };
        }
        var tablePart = node.parent.parent;
        var tagName = tablePart.type === 'tableHead' ? 'th' : 'td';
        var table = tablePart.parent;
        var columnInfo = table.columns[node.startIdx];
        var attributes = (columnInfo === null || columnInfo === void 0 ? void 0 : columnInfo.align) ? { align: columnInfo.align } : null;
        if (entering) {
            return esm_assign({ type: 'openTag', tagName: tagName, outerNewLine: true }, (attributes && { attributes: attributes }));
        }
        return {
            type: 'closeTag',
            tagName: tagName,
            outerNewLine: true,
        };
    },
};
var defaultOptions = {
    softbreak: '\n',
    gfm: false,
    tagFilter: false,
    nodeId: false,
};
function getChildrenText(node) {
    var buffer = [];
    var walker = node.walker();
    var event = null;
    while ((event = walker.next())) {
        var node_1 = event.node;
        if (node_1.type === 'text') {
            buffer.push(node_1.literal);
        }
    }
    return buffer.join('');
}
var Renderer = /** @class */ (function () {
    function Renderer(customOptions) {
        this.buffer = [];
        this.options = esm_assign(esm_assign({}, defaultOptions), customOptions);
        this.convertors = this.createConvertors();
        delete this.options.convertors;
    }
    Renderer.prototype.createConvertors = function () {
        var convertors = esm_assign({}, baseConvertors);
        if (this.options.gfm) {
            convertors = esm_assign(esm_assign({}, convertors), gfmConvertors);
        }
        if (this.options.convertors) {
            var customConvertors_1 = this.options.convertors;
            var nodeTypes = Object.keys(customConvertors_1);
            var defaultConvertors_1 = esm_assign(esm_assign({}, baseConvertors), gfmConvertors);
            nodeTypes.forEach(function (nodeType) {
                var orgConvertor = convertors[nodeType];
                var convertor = customConvertors_1[nodeType];
                var convertorType = Object.keys(defaultConvertors_1).indexOf(nodeType) === -1
                    ? nodeType.toLowerCase()
                    : nodeType;
                if (orgConvertor) {
                    convertors[convertorType] = function (node, context, convertors) {
                        context.origin = function () { return orgConvertor(node, context, convertors); };
                        return convertor(node, context);
                    };
                }
                else {
                    convertors[convertorType] = convertor;
                }
            });
        }
        return convertors;
    };
    Renderer.prototype.getConvertors = function () {
        return this.convertors;
    };
    Renderer.prototype.getOptions = function () {
        return this.options;
    };
    Renderer.prototype.render = function (rootNode) {
        var _this = this;
        this.buffer = [];
        var walker = rootNode.walker();
        var event = null;
        var _loop_1 = function () {
            var node = event.node, entering = event.entering;
            var convertor = this_1.convertors[node.type];
            if (!convertor) {
                return "continue";
            }
            var skipped = false;
            var context = {
                entering: entering,
                leaf: !isContainer(node),
                options: this_1.options,
                getChildrenText: getChildrenText,
                skipChildren: function () {
                    skipped = true;
                },
            };
            var converted = isCustomBlock(node) || isCustomInline(node)
                ? convertor(node, context, this_1.convertors)
                : convertor(node, context);
            if (converted) {
                var htmlNodes = Array.isArray(converted) ? converted : [converted];
                htmlNodes.forEach(function (htmlNode, index) {
                    if (htmlNode.type === 'openTag' && _this.options.nodeId && index === 0) {
                        if (!htmlNode.attributes) {
                            htmlNode.attributes = {};
                        }
                        htmlNode.attributes['data-nodeid'] = String(node.id);
                    }
                    _this.renderHTMLNode(htmlNode);
                });
                if (skipped) {
                    walker.resumeAt(node, false);
                    walker.next();
                }
            }
        };
        var this_1 = this;
        while ((event = walker.next())) {
            _loop_1();
        }
        this.addNewLine();
        return this.buffer.join('');
    };
    Renderer.prototype.renderHTMLNode = function (node) {
        switch (node.type) {
            case 'openTag':
            case 'closeTag':
                this.renderElementNode(node);
                break;
            case 'text':
                this.renderTextNode(node);
                break;
            case 'html':
                this.renderRawHtmlNode(node);
                break;
            // no-default-case
        }
    };
    Renderer.prototype.generateOpenTagString = function (node) {
        var _this = this;
        var tagName = node.tagName, classNames = node.classNames, attributes = node.attributes;
        this.buffer.push("<" + tagName);
        if (classNames && classNames.length > 0) {
            this.buffer.push(" class=\"" + classNames.join(' ') + "\"");
        }
        if (attributes) {
            Object.keys(attributes).forEach(function (attrName) {
                var attrValue = attributes[attrName];
                _this.buffer.push(" " + attrName + "=\"" + attrValue + "\"");
            });
        }
        if (node.selfClose) {
            this.buffer.push(' /');
        }
        this.buffer.push('>');
    };
    Renderer.prototype.generateCloseTagString = function (_a) {
        var tagName = _a.tagName;
        this.buffer.push("</" + tagName + ">");
    };
    Renderer.prototype.addNewLine = function () {
        if (this.buffer.length && last(last(this.buffer)) !== '\n') {
            this.buffer.push('\n');
        }
    };
    Renderer.prototype.addOuterNewLine = function (node) {
        if (node.outerNewLine) {
            this.addNewLine();
        }
    };
    Renderer.prototype.addInnerNewLine = function (node) {
        if (node.innerNewLine) {
            this.addNewLine();
        }
    };
    Renderer.prototype.renderTextNode = function (node) {
        this.buffer.push(escapeXml(node.content));
    };
    Renderer.prototype.renderRawHtmlNode = function (node) {
        this.addOuterNewLine(node);
        this.buffer.push(node.content);
        this.addOuterNewLine(node);
    };
    Renderer.prototype.renderElementNode = function (node) {
        if (node.type === 'openTag') {
            this.addOuterNewLine(node);
            this.generateOpenTagString(node);
            if (node.selfClose) {
                this.addOuterNewLine(node);
            }
            else {
                this.addInnerNewLine(node);
            }
        }
        else {
            this.addInnerNewLine(node);
            this.generateCloseTagString(node);
            this.addOuterNewLine(node);
        }
    };
    return Renderer;
}());


// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/collection/forEachOwnProperties.js
var collection_forEachOwnProperties = __nested_webpack_require_87464__(956);
var forEachOwnProperties_default = /*#__PURE__*/__nested_webpack_require_87464__.n(collection_forEachOwnProperties);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/object/extend.js
var extend = __nested_webpack_require_87464__(969);
var extend_default = /*#__PURE__*/__nested_webpack_require_87464__.n(extend);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domEvent/on.js
var on = __nested_webpack_require_87464__(348);
var on_default = /*#__PURE__*/__nested_webpack_require_87464__.n(on);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domEvent/off.js
var off = __nested_webpack_require_87464__(349);
var off_default = /*#__PURE__*/__nested_webpack_require_87464__.n(off);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domUtil/addClass.js
var addClass = __nested_webpack_require_87464__(204);
var addClass_default = /*#__PURE__*/__nested_webpack_require_87464__.n(addClass);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domUtil/removeClass.js
var removeClass = __nested_webpack_require_87464__(462);
var removeClass_default = /*#__PURE__*/__nested_webpack_require_87464__.n(removeClass);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domUtil/css.js
var css = __nested_webpack_require_87464__(522);
var css_default = /*#__PURE__*/__nested_webpack_require_87464__.n(css);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/collection/toArray.js
var collection_toArray = __nested_webpack_require_87464__(990);
var toArray_default = /*#__PURE__*/__nested_webpack_require_87464__.n(collection_toArray);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isArray.js
var type_isArray = __nested_webpack_require_87464__(322);
var isArray_default = /*#__PURE__*/__nested_webpack_require_87464__.n(type_isArray);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isString.js
var type_isString = __nested_webpack_require_87464__(758);
var isString_default = /*#__PURE__*/__nested_webpack_require_87464__.n(type_isString);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isUndefined.js
var type_isUndefined = __nested_webpack_require_87464__(929);
var isUndefined_default = /*#__PURE__*/__nested_webpack_require_87464__.n(type_isUndefined);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domUtil/hasClass.js
var hasClass = __nested_webpack_require_87464__(714);
var hasClass_default = /*#__PURE__*/__nested_webpack_require_87464__.n(hasClass);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/domUtil/matches.js
var domUtil_matches = __nested_webpack_require_87464__(471);
;// CONCATENATED MODULE: ./src/utils/constants.ts
var TAG_NAME = '[A-Za-z][A-Za-z0-9-]*';
var ATTRIBUTE_NAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var UNQUOTED_VALUE = '[^"\'=<>`\\x00-\\x20]+';
var SINGLE_QUOTED_VALUE = "'[^']*'";
var DOUBLE_QUOTED_VALUE = '"[^"]*"';
var ATTRIBUTE_VALUE = "(?:" + UNQUOTED_VALUE + "|" + SINGLE_QUOTED_VALUE + "|" + DOUBLE_QUOTED_VALUE + ")";
var ATTRIBUTE_VALUE_SPEC = "" + '(?:\\s*=\\s*' + ATTRIBUTE_VALUE + ")";
var constants_ATTRIBUTE = "" + '(?:\\s+' + ATTRIBUTE_NAME + ATTRIBUTE_VALUE_SPEC + "?)";
var constants_OPEN_TAG = "<(" + TAG_NAME + ")(" + constants_ATTRIBUTE + ")*\\s*/?>";
var CLOSE_TAG = "</(" + TAG_NAME + ")\\s*[>]";
var constants_HTML_TAG = "(?:" + constants_OPEN_TAG + "|" + CLOSE_TAG + ")";
var reHTMLTag = new RegExp("^" + constants_HTML_TAG, 'i');
var constants_reBR = /<br\s*\/*>/i;
var reHTMLComment = /<! ---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
var constants_ALTERNATIVE_TAG_FOR_BR = '</p><p>';

// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isNull.js
var type_isNull = __nested_webpack_require_87464__(934);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/request/sendHostname.js
var request_sendHostname = __nested_webpack_require_87464__(391);
;// CONCATENATED MODULE: ./src/utils/common.ts





var isMac = /Mac/.test(navigator.platform);
var reSpaceMoreThanOne = /[\u0020]+/g;
var common_reEscapeChars = /[>(){}[\]+-.!#|]/g;
var reEscapeHTML = /<([a-zA-Z_][a-zA-Z0-9\-._]*)(\s|[^\\>])*\/?>|<(\/)([a-zA-Z_][a-zA-Z0-9\-._]*)\s*\/?>|<!--[^-]+-->|<([a-zA-Z_][a-zA-Z0-9\-.:/]*)>/g;
var reEscapeBackSlash = /\\[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/g;
var reEscapePairedChars = /[*_~`]/g;
var reMdImageSyntax = /!\[.*\]\(.*\)/g;
var reEscapedCharInLinkSyntax = /[[\]]/g;
var reEscapeBackSlashInSentence = /(?:^|[^\\])\\(?!\\)/g;
var common_XMLSPECIAL = '[&<>"]';
var common_reXmlSpecial = new RegExp(common_XMLSPECIAL, 'g');
function common_replaceUnsafeChar(char) {
    switch (char) {
        case '&':
            return '&amp;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '"':
            return '&quot;';
        default:
            return char;
    }
}
function common_escapeXml(text) {
    if (common_reXmlSpecial.test(text)) {
        return text.replace(common_reXmlSpecial, common_replaceUnsafeChar);
    }
    return text;
}
function sendHostName() {
    sendHostname('editor', 'UA-129966929-1');
}
function common_includes(arr, targetItem) {
    return arr.indexOf(targetItem) !== -1;
}
var availableLinkAttributes = ['rel', 'target', 'hreflang', 'type'];
var reMarkdownTextToEscapeMap = {
    codeblock: /(^ {4}[^\n]+\n*)+/,
    thematicBreak: /^ *((\* *){3,}|(- *){3,} *|(_ *){3,}) */,
    atxHeading: /^(#{1,6}) +[\s\S]+/,
    seTextheading: /^([^\n]+)\n *(=|-){2,} */,
    blockquote: /^( *>[^\n]+.*)+/,
    list: /^ *(\*+|-+|\d+\.) [\s\S]+/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? */,
    link: /!?\[.*\]\(.*\)/,
    reflink: /!?\[.*\]\s*\[([^\]]*)\]/,
    verticalBar: /\u007C/,
    fencedCodeblock: /^((`|~){3,})/,
};
function sanitizeLinkAttribute(attribute) {
    if (!attribute) {
        return null;
    }
    var linkAttributes = {};
    availableLinkAttributes.forEach(function (key) {
        if (!isUndefined_default()(attribute[key])) {
            linkAttributes[key] = attribute[key];
        }
    });
    return linkAttributes;
}
function common_repeat(text, count) {
    var result = '';
    for (var i = 0; i < count; i += 1) {
        result += text;
    }
    return result;
}
function isNeedEscapeText(text) {
    var needEscape = false;
    forEachOwnProperties(reMarkdownTextToEscapeMap, function (reMarkdownTextToEscape) {
        if (reMarkdownTextToEscape.test(text)) {
            needEscape = true;
        }
        return !needEscape;
    });
    return needEscape;
}
function escapeTextForLink(text) {
    var imageSyntaxRanges = [];
    var result = reMdImageSyntax.exec(text);
    while (result) {
        imageSyntaxRanges.push([result.index, result.index + result[0].length]);
        result = reMdImageSyntax.exec(text);
    }
    return text.replace(reEscapedCharInLinkSyntax, function (matched, offset) {
        var isDelimiter = imageSyntaxRanges.some(function (range) { return offset > range[0] && offset < range[1]; });
        return isDelimiter ? matched : "\\" + matched;
    });
}
function common_escape(text) {
    var aheadReplacer = function (matched) { return "\\" + matched; };
    var behindReplacer = function (matched) { return matched + "\\"; };
    var escapedText = text.replace(reSpaceMoreThanOne, ' ');
    if (reEscapeBackSlash.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeBackSlash, aheadReplacer);
    }
    if (reEscapeBackSlashInSentence.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeBackSlashInSentence, behindReplacer);
    }
    escapedText = escapedText.replace(reEscapePairedChars, aheadReplacer);
    if (reEscapeHTML.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeHTML, aheadReplacer);
    }
    if (isNeedEscapeText(escapedText)) {
        escapedText = escapedText.replace(common_reEscapeChars, aheadReplacer);
    }
    return escapedText;
}
function quote(text) {
    var result;
    if (text.indexOf('"') === -1) {
        result = '""';
    }
    else {
        result = text.indexOf("'") === -1 ? "''" : '()';
    }
    return result[0] + text + result[1];
}
function common_isNil(value) {
    return isNull(value) || isUndefined(value);
}
function shallowEqual(o1, o2) {
    if (o1 === null && o1 === o2) {
        return true;
    }
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || common_isNil(o1) || common_isNil(o2)) {
        return o1 === o2;
    }
    for (var key in o1) {
        if (o1[key] !== o2[key]) {
            return false;
        }
    }
    for (var key in o2) {
        if (!(key in o1)) {
            return false;
        }
    }
    return true;
}
function common_last(arr) {
    return arr[arr.length - 1];
}
function common_between(value, min, max) {
    return value >= min && value <= max;
}
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
function deepMergedCopy(targetObj, obj) {
    var resultObj = tslib_es6_assign({}, targetObj);
    if (targetObj && obj) {
        Object.keys(obj).forEach(function (prop) {
            if (isObject(resultObj[prop])) {
                if (Array.isArray(obj[prop])) {
                    resultObj[prop] = deepCopyArray(obj[prop]);
                }
                else if (resultObj.hasOwnProperty(prop)) {
                    resultObj[prop] = deepMergedCopy(resultObj[prop], obj[prop]);
                }
                else {
                    resultObj[prop] = deepCopy(obj[prop]);
                }
            }
            else {
                resultObj[prop] = obj[prop];
            }
        });
    }
    return resultObj;
}
function deepCopyArray(items) {
    return items.map(function (item) {
        if (isObject(item)) {
            return Array.isArray(item) ? deepCopyArray(item) : deepCopy(item);
        }
        return item;
    });
}
function deepCopy(obj) {
    var keys = Object.keys(obj);
    if (!keys.length) {
        return obj;
    }
    return keys.reduce(function (acc, prop) {
        if (isObject(obj[prop])) {
            acc[prop] = Array.isArray(obj[prop]) ? deepCopyArray(obj[prop]) : deepCopy(obj[prop]);
        }
        else {
            acc[prop] = obj[prop];
        }
        return acc;
    }, {});
}
function common_assign(targetObj, obj) {
    if (obj === void 0) { obj = {}; }
    Object.keys(obj).forEach(function (prop) {
        if (targetObj.hasOwnProperty(prop) && typeof targetObj[prop] === 'object') {
            if (Array.isArray(obj[prop])) {
                targetObj[prop] = obj[prop];
            }
            else {
                common_assign(targetObj[prop], obj[prop]);
            }
        }
        else {
            targetObj[prop] = obj[prop];
        }
    });
    return targetObj;
}
function getSortedNumPair(valueA, valueB) {
    return valueA > valueB ? [valueB, valueA] : [valueA, valueB];
}

;// CONCATENATED MODULE: ./src/utils/dom.ts










function isPositionInBox(style, offsetX, offsetY) {
    var left = parseInt(style.left, 10);
    var top = parseInt(style.top, 10);
    var width = parseInt(style.width, 10) + parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
    var height = parseInt(style.height, 10) + parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    return offsetX >= left && offsetX <= left + width && offsetY >= top && offsetY <= top + height;
}
var CLS_PREFIX = 'toastui-editor-';
function cls() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name = names_1[_a];
        var className = void 0;
        if (Array.isArray(name)) {
            className = name[0] ? name[1] : null;
        }
        else {
            className = name;
        }
        if (className) {
            result.push("" + CLS_PREFIX + className);
        }
    }
    return result.join(' ');
}
function clsWithMdPrefix() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.map(function (className) { return CLS_PREFIX + "md-" + className; }).join(' ');
}
function isTextNode(node) {
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.TEXT_NODE;
}
function isElemNode(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}
function findNodes(element, selector) {
    var nodeList = toArray(element.querySelectorAll(selector));
    if (nodeList.length) {
        return nodeList;
    }
    return [];
}
function appendNodes(node, nodesToAppend) {
    nodesToAppend = isArray(nodesToAppend) ? toArray(nodesToAppend) : [nodesToAppend];
    nodesToAppend.forEach(function (nodeToAppend) {
        node.appendChild(nodeToAppend);
    });
}
function insertBeforeNode(insertedNode, node) {
    if (node.parentNode) {
        node.parentNode.insertBefore(insertedNode, node);
    }
}
function removeNode(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function unwrapNode(node) {
    var result = [];
    while (node.firstChild) {
        result.push(node.firstChild);
        if (node.parentNode) {
            node.parentNode.insertBefore(node.firstChild, node);
        }
    }
    removeNode(node);
    return result;
}
function toggleClass(element, className, state) {
    if (isUndefined_default()(state)) {
        state = !hasClass_default()(element, className);
    }
    var toggleFn = state ? (addClass_default()) : (removeClass_default());
    toggleFn(element, className);
}
function createElementWith(contents, target) {
    var container = document.createElement('div');
    if (isString_default()(contents)) {
        container.innerHTML = contents;
    }
    else {
        container.appendChild(contents);
    }
    var firstChild = container.firstChild;
    if (target) {
        target.appendChild(firstChild);
    }
    return firstChild;
}
function getOuterWidth(el) {
    var computed = window.getComputedStyle(el);
    return (['margin-left', 'margin-right'].reduce(function (acc, type) { return acc + parseInt(computed.getPropertyValue(type), 10); }, 0) + el.offsetWidth);
}
function closest(node, found) {
    var condition;
    if (isString(found)) {
        condition = function (target) { return matches(target, found); };
    }
    else {
        condition = function (target) { return target === found; };
    }
    while (node && node !== document) {
        if (isElemNode(node) && condition(node)) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
function getTotalOffset(el, root) {
    var offsetTop = 0;
    var offsetLeft = 0;
    while (el && el !== root) {
        var top = el.offsetTop, left = el.offsetLeft, offsetParent = el.offsetParent;
        offsetTop += top;
        offsetLeft += left;
        if (offsetParent === root.offsetParent) {
            break;
        }
        el = el.offsetParent;
    }
    return { offsetTop: offsetTop, offsetLeft: offsetLeft };
}
function finalizeHtml(html, needHtmlText) {
    var result;
    if (needHtmlText) {
        result = html.innerHTML;
    }
    else {
        var frag = document.createDocumentFragment();
        var childNodes = toArray(html.childNodes);
        var length = childNodes.length;
        for (var i = 0; i < length; i += 1) {
            frag.appendChild(childNodes[i]);
        }
        result = frag;
    }
    return result;
}
function dom_empty(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function appendNode(node, appended) {
    if (isString(appended)) {
        node.insertAdjacentHTML('beforeend', appended);
    }
    else {
        var nodes = appended.length
            ? toArray(appended)
            : [appended];
        for (var i = 0, len = nodes.length; i < len; i += 1) {
            node.appendChild(nodes[i]);
        }
    }
}
function prependNode(node, appended) {
    if (isString(appended)) {
        node.insertAdjacentHTML('afterbegin', appended);
    }
    else {
        var nodes = appended.length
            ? toArray(appended)
            : [appended];
        for (var i = nodes.length - 1, len = 0; i >= len; i -= 1) {
            node.insertBefore(nodes[i], node.firstChild);
        }
    }
}
function setAttributes(attributes, element) {
    Object.keys(attributes).forEach(function (attrName) {
        if (isNil(attributes[attrName])) {
            element.removeAttribute(attrName);
        }
        else {
            element.setAttribute(attrName, attributes[attrName]);
        }
    });
}
function replaceBRWithEmptyBlock(html) {
    // remove br in paragraph to compatible with markdown
    var replacedHTML = html.replace(/<p><br\s*\/*><\/p>/gi, '<p></p>');
    var reHTMLTag = new RegExp(HTML_TAG, 'ig');
    var htmlTagMatched = replacedHTML.match(reHTMLTag);
    htmlTagMatched === null || htmlTagMatched === void 0 ? void 0 : htmlTagMatched.forEach(function (htmlTag, index) {
        if (reBR.test(htmlTag)) {
            var alternativeTag = ALTERNATIVE_TAG_FOR_BR;
            if (index) {
                var prevTag = htmlTagMatched[index - 1];
                var openTagMatched = prevTag.match(OPEN_TAG);
                if (openTagMatched && !/br/i.test(openTagMatched[1])) {
                    var tagName = openTagMatched[1];
                    alternativeTag = "</" + tagName + "><" + tagName + ">";
                }
            }
            replacedHTML = replacedHTML.replace(reBR, alternativeTag);
        }
    });
    return replacedHTML;
}
function removeProseMirrorHackNodes(html) {
    var reProseMirrorImage = /<img class="ProseMirror-separator" alt="">/g;
    var reProseMirrorTrailingBreak = / class="ProseMirror-trailingBreak"/g;
    var resultHTML = html;
    resultHTML = resultHTML.replace(reProseMirrorImage, '');
    resultHTML = resultHTML.replace(reProseMirrorTrailingBreak, '');
    return resultHTML;
}

// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isFunction.js
var isFunction = __nested_webpack_require_87464__(294);
var isFunction_default = /*#__PURE__*/__nested_webpack_require_87464__.n(isFunction);
;// CONCATENATED MODULE: ./src/utils/markdown.ts

function hasSpecificTypeAncestor(mdNode) {
    var types = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        types[_i - 1] = arguments[_i];
    }
    while (mdNode && mdNode.parent && mdNode.parent.type !== 'document') {
        if (includes(types, mdNode.parent.type)) {
            return true;
        }
        mdNode = mdNode.parent;
    }
    return false;
}
function markdown_getMdStartLine(mdNode) {
    return mdNode.sourcepos[0][0];
}
function markdown_getMdEndLine(mdNode) {
    return mdNode.sourcepos[1][0];
}
function getMdStartCh(mdNode) {
    return mdNode.sourcepos[0][1];
}
function getMdEndCh(mdNode) {
    return mdNode.sourcepos[1][1];
}
function isMultiLineNode(mdNode) {
    var type = mdNode.type;
    return type === 'codeBlock' || type === 'paragraph';
}
function isHTMLNode(mdNode) {
    var type = mdNode.type;
    return type === 'htmlBlock' || type === 'htmlInline';
}
function markdown_isStyledInlineNode(mdNode) {
    var type = mdNode.type;
    return (type === 'strike' ||
        type === 'strong' ||
        type === 'emph' ||
        type === 'code' ||
        type === 'link' ||
        type === 'image');
}
function isCodeBlockNode(mdNode) {
    return mdNode && mdNode.type === 'codeBlock';
}
function isCustomBlockNode(mdNode) {
    return mdNode && mdNode.type === 'customBlock';
}
function isListNode(mdNode) {
    return mdNode && (mdNode.type === 'item' || mdNode.type === 'list');
}
function isOrderedListNode(mdNode) {
    return isListNode(mdNode) && mdNode.listData.type === 'ordered';
}
function isBulletListNode(mdNode) {
    return isListNode(mdNode) && mdNode.listData.type !== 'ordered';
}
function isTableCellNode(mdNode) {
    return mdNode && (mdNode.type === 'tableCell' || mdNode.type === 'tableDelimCell');
}
function isInlineNode(mdNode) {
    switch (mdNode.type) {
        case 'code':
        case 'text':
        case 'emph':
        case 'strong':
        case 'strike':
        case 'link':
        case 'image':
        case 'htmlInline':
        case 'linebreak':
        case 'softbreak':
        case 'customInline':
            return true;
        default:
            return false;
    }
}
function findClosestNode(mdNode, condition, includeSelf) {
    if (includeSelf === void 0) { includeSelf = true; }
    mdNode = includeSelf ? mdNode : mdNode.parent;
    while (mdNode && mdNode.type !== 'document') {
        if (condition(mdNode)) {
            return mdNode;
        }
        mdNode = mdNode.parent;
    }
    return null;
}
function traverseParentNodes(mdNode, iteratee, includeSelf) {
    if (includeSelf === void 0) { includeSelf = true; }
    mdNode = includeSelf ? mdNode : mdNode.parent;
    while (mdNode && mdNode.type !== 'document') {
        iteratee(mdNode);
        mdNode = mdNode.parent;
    }
}
function addOffsetPos(originPos, offset) {
    return [originPos[0], originPos[1] + offset];
}
function setOffsetPos(originPos, newOffset) {
    return [originPos[0], newOffset];
}
function getInlineMarkdownText(mdNode) {
    var text = mdNode.firstChild.literal;
    switch (mdNode.type) {
        case 'emph':
            return "*" + text + "*";
        case 'strong':
            return "**" + text + "**";
        case 'strike':
            return "~~" + text + "~~";
        case 'code':
            return "`" + text + "`";
        case 'link':
        case 'image':
            /* eslint-disable no-case-declarations */
            var _a = mdNode, destination = _a.destination, title = _a.title;
            var delim = mdNode.type === 'link' ? '' : '!';
            return delim + "[" + text + "](" + destination + (title ? " \"" + title + "\"" : '') + ")";
        default:
            return null;
    }
}
function markdown_isContainer(node) {
    switch (node.type) {
        case 'document':
        case 'blockQuote':
        case 'list':
        case 'item':
        case 'paragraph':
        case 'heading':
        case 'emph':
        case 'strong':
        case 'strike':
        case 'link':
        case 'image':
        case 'table':
        case 'tableHead':
        case 'tableBody':
        case 'tableRow':
        case 'tableCell':
        case 'tableDelimRow':
        case 'customInline':
            return true;
        default:
            return false;
    }
}
function markdown_getChildrenText(node) {
    var buffer = [];
    var walker = node.walker();
    var event = null;
    while ((event = walker.next())) {
        var childNode = event.node;
        if (childNode.type === 'text') {
            buffer.push(childNode.literal);
        }
    }
    return buffer.join('');
}

;// CONCATENATED MODULE: ./src/widget/rules.ts

var widgetRules = (/* unused pure expression or super */ null && (0));
var widgetRuleMap = {};
var reWidgetPrefix = /\$\$widget\d+\s/;
function unwrapWidgetSyntax(text) {
    var index = text.search(reWidgetPrefix);
    if (index !== -1) {
        var rest = text.substring(index);
        var replaced = rest.replace(reWidgetPrefix, '').replace('$$', '');
        text = text.substring(0, index);
        text += unwrapWidgetSyntax(replaced);
    }
    return text;
}
function createWidgetContent(info, text) {
    return "$$" + info + " " + text + "$$";
}
function widgetToDOM(info, text) {
    var _a = widgetRuleMap[info], rule = _a.rule, toDOM = _a.toDOM;
    var matches = unwrapWidgetSyntax(text).match(rule);
    if (matches) {
        text = matches[0];
    }
    return toDOM(text);
}
function getWidgetRules() {
    return widgetRules;
}
function setWidgetRules(rules) {
    widgetRules = rules;
    widgetRules.forEach(function (rule, index) {
        widgetRuleMap["widget" + index] = rule;
    });
}
function mergeNodes(nodes, text, schema, ruleIndex) {
    return nodes.concat(createNodesWithWidget(text, schema, ruleIndex));
}
/**
 * create nodes with plain text and replace text matched to the widget rules with the widget node
 * For example, in case the text and widget rules as below
 *
 * text: $test plain text #test
 * widget rules: [{ rule: /$.+/ }, { rule: /#.+/ }]
 *
 * The creating node process is recursive and is as follows.
 *
 * in first widget rule(/$.+/)
 *  $test -> widget node
 *  plain text -> match with next widget rule
 *  #test -> match with next widget rule
 *
 * in second widget rule(/#.+/)
 *  plain text -> text node(no rule for matching)
 *  #test -> widget node
 */
function createNodesWithWidget(text, schema, ruleIndex) {
    if (ruleIndex === void 0) { ruleIndex = 0; }
    var nodes = [];
    var rule = (widgetRules[ruleIndex] || {}).rule;
    var nextRuleIndex = ruleIndex + 1;
    text = unwrapWidgetSyntax(text);
    if (rule && rule.test(text)) {
        var index = void 0;
        while ((index = text.search(rule)) !== -1) {
            var prev = text.substring(0, index);
            // get widget node on first splitted text using next widget rule
            if (prev) {
                nodes = mergeNodes(nodes, prev, schema, nextRuleIndex);
            }
            // build widget node using current widget rule
            text = text.substring(index);
            var literal = text.match(rule)[0];
            var info = "widget" + ruleIndex;
            nodes.push(schema.nodes.widget.create({ info: info }, schema.text(createWidgetContent(info, literal))));
            text = text.substring(literal.length);
        }
        // get widget node on last splitted text using next widget rule
        if (text) {
            nodes = mergeNodes(nodes, text, schema, nextRuleIndex);
        }
    }
    else if (text) {
        nodes =
            ruleIndex < widgetRules.length - 1
                ? mergeNodes(nodes, text, schema, nextRuleIndex)
                : [schema.text(text)];
    }
    return nodes;
}
function getWidgetContent(widgetNode) {
    var event;
    var text = '';
    var walker = widgetNode.walker();
    while ((event = walker.next())) {
        var node = event.node, entering = event.entering;
        if (entering) {
            if (node !== widgetNode && node.type !== 'text') {
                text += getInlineMarkdownText(node);
                // skip the children
                walker.resumeAt(widgetNode, false);
                walker.next();
            }
            else if (node.type === 'text') {
                text += node.literal;
            }
        }
    }
    return text;
}

// EXTERNAL MODULE: ../../node_modules/dompurify/dist/purify.js
var purify = __nested_webpack_require_87464__(368);
var purify_default = /*#__PURE__*/__nested_webpack_require_87464__.n(purify);
;// CONCATENATED MODULE: ./src/sanitizer/htmlSanitizer.ts



var CAN_BE_WHITE_TAG_LIST = ['iframe', 'embed'];
var whiteTagList = [];
function htmlSanitizer_registerTagWhitelistIfPossible(tagName) {
    if (common_includes(CAN_BE_WHITE_TAG_LIST, tagName)) {
        whiteTagList.push(tagName.toLowerCase());
    }
}
function sanitizeHTML(html, options) {
    return purify_default().sanitize(html, tslib_es6_assign({ ADD_TAGS: whiteTagList, ADD_ATTR: ['rel', 'target', 'hreflang', 'type'], FORBID_TAGS: [
            'input',
            'script',
            'textarea',
            'form',
            'button',
            'select',
            'meta',
            'style',
            'link',
            'title',
            'object',
            'base',
        ] }, options));
}

;// CONCATENATED MODULE: ./src/wysiwyg/nodes/html.ts




function getChildrenHTML(node, typeName) {
    return node
        .literal.replace(new RegExp("(<\\s*" + typeName + "[^>]*>)|(</" + typeName + "\\s*[>])", 'ig'), '')
        .trim();
}
function getHTMLAttrsByHTMLString(html) {
    html = html.match(reHTMLTag)[0];
    var attrs = html.match(new RegExp(constants_ATTRIBUTE, 'g'));
    return attrs
        ? attrs.reduce(function (acc, attr) {
            var _a = attr.trim().split('='), name = _a[0], values = _a.slice(1);
            if (values.length) {
                acc[name] = values.join('=').replace(/'|"/g, '').trim();
            }
            return acc;
        }, {})
        : {};
}
function getHTMLAttrs(dom) {
    return toArray_default()(dom.attributes).reduce(function (acc, attr) {
        acc[attr.nodeName] = attr.nodeValue;
        return acc;
    }, {});
}
function sanitizeDOM(node, typeName, sanitizer, wwToDOMAdaptor) {
    var dom = wwToDOMAdaptor.getToDOMNode(typeName)(node);
    var html = sanitizer(dom.outerHTML);
    var container = document.createElement('div');
    container.innerHTML = html;
    dom = container.firstChild;
    var htmlAttrs = getHTMLAttrs(dom);
    return { dom: dom, htmlAttrs: htmlAttrs };
}
var schemaFactory = {
    htmlBlock: function (typeName, sanitizeHTML, wwToDOMAdaptor) {
        return {
            atom: true,
            content: 'block+',
            group: 'block',
            attrs: {
                htmlAttrs: { default: {} },
                childrenHTML: { default: '' },
                htmlBlock: { default: true },
            },
            parseDOM: [
                {
                    tag: typeName,
                    getAttrs: function (dom) {
                        return {
                            htmlAttrs: getHTMLAttrs(dom),
                            childrenHTML: dom.innerHTML,
                        };
                    },
                },
            ],
            toDOM: function (node) {
                var _a = sanitizeDOM(node, typeName, sanitizeHTML, wwToDOMAdaptor), dom = _a.dom, htmlAttrs = _a.htmlAttrs;
                htmlAttrs.class = htmlAttrs.class ? htmlAttrs.class + " html-block" : 'html-block';
                return __spreadArray([typeName, htmlAttrs], toArray_default()(dom.childNodes));
            },
        };
    },
    htmlInline: function (typeName, sanitizeHTML, wwToDOMAdaptor) {
        return {
            attrs: {
                htmlAttrs: { default: {} },
                htmlInline: { default: true },
            },
            parseDOM: [
                {
                    tag: typeName,
                    getAttrs: function (dom) {
                        return {
                            htmlAttrs: getHTMLAttrs(dom),
                        };
                    },
                },
            ],
            toDOM: function (node) {
                var htmlAttrs = sanitizeDOM(node, typeName, sanitizeHTML, wwToDOMAdaptor).htmlAttrs;
                return [typeName, htmlAttrs, 0];
            },
        };
    },
};
function createHTMLSchemaMap(convertorMap, sanitizeHTML, wwToDOMAdaptor) {
    var htmlSchemaMap = { nodes: {}, marks: {} };
    ['htmlBlock', 'htmlInline'].forEach(function (htmlType) {
        if (convertorMap[htmlType]) {
            Object.keys(convertorMap[htmlType]).forEach(function (type) {
                var targetType = htmlType === 'htmlBlock' ? 'nodes' : 'marks';
                // register tag white list for preventing to remove the html in sanitizer
                registerTagWhitelistIfPossible(type);
                htmlSchemaMap[targetType][type] = schemaFactory[htmlType](type, sanitizeHTML, wwToDOMAdaptor);
            });
        }
    });
    return htmlSchemaMap;
}

;// CONCATENATED MODULE: ./src/markdown/htmlRenderConvertors.ts






var reCloseTag = /^\s*<\s*\//;
var htmlRenderConvertors_baseConvertors = {
    paragraph: function (_, _a) {
        var entering = _a.entering, origin = _a.origin, options = _a.options;
        if (options.nodeId) {
            return {
                type: entering ? 'openTag' : 'closeTag',
                outerNewLine: true,
                tagName: 'p',
            };
        }
        return origin();
    },
    softbreak: function (node) {
        var isPrevNodeHTML = node.prev && node.prev.type === 'htmlInline';
        var isPrevBR = isPrevNodeHTML && /<br ?\/?>/.test(node.prev.literal);
        var content = isPrevBR ? '\n' : '<br>\n';
        return { type: 'html', content: content };
    },
    item: function (node, _a) {
        var entering = _a.entering;
        if (entering) {
            var attributes = {};
            var classNames = [];
            if (node.listData.task) {
                attributes['data-task'] = '';
                classNames.push('task-list-item');
                if (node.listData.checked) {
                    classNames.push('checked');
                    attributes['data-task-checked'] = '';
                }
            }
            return {
                type: 'openTag',
                tagName: 'li',
                classNames: classNames,
                attributes: attributes,
                outerNewLine: true,
            };
        }
        return {
            type: 'closeTag',
            tagName: 'li',
            outerNewLine: true,
        };
    },
    code: function (node) {
        var attributes = { 'data-backticks': String(node.tickCount) };
        return [
            { type: 'openTag', tagName: 'code', attributes: attributes },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
        ];
    },
    codeBlock: function (node) {
        var _a = node, fenceLength = _a.fenceLength, info = _a.info;
        var infoWords = info ? info.split(/\s+/) : [];
        var preClasses = [];
        var codeAttrs = {};
        if (fenceLength > 3) {
            codeAttrs['data-backticks'] = fenceLength;
        }
        if (infoWords.length > 0 && infoWords[0].length > 0) {
            var lang = infoWords[0];
            preClasses.push("lang-" + lang);
            codeAttrs['data-language'] = lang;
        }
        return [
            { type: 'openTag', tagName: 'pre', classNames: preClasses },
            { type: 'openTag', tagName: 'code', attributes: codeAttrs },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
            { type: 'closeTag', tagName: 'pre' },
        ];
    },
    customInline: function (node, _a) {
        var origin = _a.origin, entering = _a.entering, skipChildren = _a.skipChildren;
        var info = node.info;
        if (info.indexOf('widget') !== -1 && entering) {
            skipChildren();
            var content = getWidgetContent(node);
            var htmlInline = widgetToDOM(info, content).outerHTML;
            return [
                { type: 'openTag', tagName: 'span', classNames: ['tui-widget'] },
                { type: 'html', content: htmlInline },
                { type: 'closeTag', tagName: 'span' },
            ];
        }
        return origin();
    },
};
function getHTMLRenderConvertors(linkAttributes, customConvertors) {
    var convertors = tslib_es6_assign({}, htmlRenderConvertors_baseConvertors);
    if (linkAttributes) {
        convertors.link = function (_, _a) {
            var entering = _a.entering, origin = _a.origin;
            var result = origin();
            if (entering) {
                result.attributes = tslib_es6_assign(tslib_es6_assign({}, result.attributes), linkAttributes);
            }
            return result;
        };
    }
    if (customConvertors) {
        Object.keys(customConvertors).forEach(function (nodeType) {
            var orgConvertor = convertors[nodeType];
            var customConvertor = customConvertors[nodeType];
            if (orgConvertor && isFunction_default()(customConvertor)) {
                convertors[nodeType] = function (node, context) {
                    var newContext = tslib_es6_assign({}, context);
                    newContext.origin = function () { return orgConvertor(node, context); };
                    return customConvertor(node, newContext);
                };
            }
            else if (common_includes(['htmlBlock', 'htmlInline'], nodeType) && !isFunction_default()(customConvertor)) {
                convertors[nodeType] = function (node, context) {
                    var matched = node.literal.match(reHTMLTag);
                    if (matched) {
                        var rootHTML = matched[0], openTagName = matched[1], closeTagName = matched[3];
                        var typeName = (openTagName || closeTagName).toLowerCase();
                        var htmlConvertor = customConvertor[typeName];
                        var childrenHTML = getChildrenHTML(node, typeName);
                        if (htmlConvertor) {
                            // copy for preventing to overwrite the originial property
                            var newNode = tslib_es6_assign({}, node);
                            newNode.attrs = getHTMLAttrsByHTMLString(rootHTML);
                            newNode.childrenHTML = childrenHTML;
                            newNode.type = typeName;
                            context.entering = !reCloseTag.test(node.literal);
                            return htmlConvertor(newNode, context);
                        }
                    }
                    return context.origin();
                };
            }
            else {
                convertors[nodeType] = customConvertor;
            }
        });
    }
    return convertors;
}

;// CONCATENATED MODULE: ./src/markdown/scroll/dom.ts


var nestableTypes = (/* unused pure expression or super */ null && (0));
var nestableTagNames = ['UL', 'OL', 'BLOCKQUOTE'];
function isBlankLine(doc, index) {
    var _a;
    var pmNode = doc.child(index);
    return !pmNode.childCount || (pmNode.childCount === 1 && !((_a = pmNode.firstChild.text) === null || _a === void 0 ? void 0 : _a.trim()));
}
function getEditorRangeHeightInfo(doc, mdNode, children) {
    var start = getMdStartLine(mdNode) - 1;
    var end = getMdEndLine(mdNode) - 1;
    var rect = children[start].getBoundingClientRect();
    var height = children[end].offsetTop -
        children[start].offsetTop +
        children[end].clientHeight;
    return {
        height: height <= 0
            ? children[start].clientHeight
            : height + getBlankLinesHeight(doc, children, Math.min(end + 1, doc.childCount - 1)),
        rect: rect,
    };
}
function getBlankLinesHeight(doc, children, start) {
    var end = doc.childCount - 1;
    var height = 0;
    while (start <= end && isBlankLine(doc, start)) {
        height += children[start].clientHeight;
        start += 1;
    }
    return height;
}
function findAncestorHavingId(el, root) {
    while (!el.getAttribute('data-nodeid') && el.parentElement !== root) {
        el = el.parentElement;
    }
    return el;
}
function dom_getTotalOffsetTop(el, root) {
    var offsetTop = 0;
    while (el && el !== root) {
        if (!common_includes(nestableTagNames, el.tagName)) {
            offsetTop += el.offsetTop;
        }
        if (el.offsetParent === root.offsetParent) {
            break;
        }
        el = el.parentElement;
    }
    return offsetTop;
}
function findAdjacentElementToScrollTop(scrollTop, root) {
    var el = root;
    var prev = null;
    while (el) {
        var firstElementChild = el.firstElementChild;
        if (!firstElementChild) {
            break;
        }
        var lastSibling = findLastSiblingElementToScrollTop(firstElementChild, scrollTop, dom_getTotalOffsetTop(el, root));
        prev = el;
        el = lastSibling;
    }
    var adjacentEl = el || prev;
    return adjacentEl === root ? null : adjacentEl;
}
function findLastSiblingElementToScrollTop(el, scrollTop, offsetTop) {
    if (el && scrollTop > offsetTop + el.offsetTop) {
        return (findLastSiblingElementToScrollTop(el.nextElementSibling, scrollTop, offsetTop) || el);
    }
    return null;
}
function getAdditionalPos(scrollTop, offsetTop, height, targetNodeHeight) {
    var ratio = Math.min((scrollTop - offsetTop) / height, 1);
    return ratio * targetNodeHeight;
}
function getParentNodeObj(previewContent, mdNode) {
    var el = previewContent.querySelector("[data-nodeid=\"" + mdNode.id + "\"]");
    while (!el || isStyledInlineNode(mdNode)) {
        mdNode = mdNode.parent;
        el = previewContent.querySelector("[data-nodeid=\"" + mdNode.id + "\"]");
    }
    return getNonNestableNodeObj({ mdNode: mdNode, el: el });
}
function getNonNestableNodeObj(_a) {
    var mdNode = _a.mdNode, el = _a.el;
    while ((includes(nestableTypes, mdNode.type) || mdNode.type === 'table') && mdNode.firstChild) {
        mdNode = mdNode.firstChild;
        el = el.firstElementChild;
    }
    return { mdNode: mdNode, el: el };
}

;// CONCATENATED MODULE: ./src/markdown/scroll/offset.ts


var offsetInfoMap = {};
function setHeight(id, height) {
    offsetInfoMap[id] = offsetInfoMap[id] || {};
    offsetInfoMap[id].height = height;
}
function setOffsetTop(id, offsetTop) {
    offsetInfoMap[id] = offsetInfoMap[id] || {};
    offsetInfoMap[id].offsetTop = offsetTop;
}
function getHeight(id) {
    return offsetInfoMap[id] && offsetInfoMap[id].height;
}
function getOffsetTop(id) {
    return offsetInfoMap[id] && offsetInfoMap[id].offsetTop;
}
function removeOffsetInfoByNode(node) {
    if (node) {
        delete offsetInfoMap[Number(node.getAttribute('data-nodeid'))];
        toArray_default()(node.children).forEach(function (child) {
            removeOffsetInfoByNode(child);
        });
    }
}
function getAndSaveOffsetInfo(node, root, mdNodeId) {
    var cachedHeight = getHeight(mdNodeId);
    var cachedTop = getOffsetTop(mdNodeId);
    var nodeHeight = cachedHeight || node.clientHeight;
    var offsetTop = cachedTop || getTotalOffsetTop(node, root) || node.offsetTop;
    if (!cachedHeight) {
        setHeight(mdNodeId, nodeHeight);
    }
    if (!cachedTop) {
        setOffsetTop(mdNodeId, offsetTop);
    }
    return { nodeHeight: nodeHeight, offsetTop: offsetTop };
}

;// CONCATENATED MODULE: ./src/markdown/mdPreview.ts











var CLASS_HIGHLIGHT = cls('md-preview-highlight');
function findTableCell(tableRow, chOffset) {
    var cell = tableRow.firstChild;
    while (cell && cell.next) {
        if (getMdStartCh(cell.next) > chOffset + 1) {
            break;
        }
        cell = cell.next;
    }
    return cell;
}
/**
 * Class Markdown Preview
 * @param {HTMLElement} el - base element
 * @param {eventEmitter} eventEmitter - event manager
 * @param {object} options
 * @param {boolean} options.isViewer - true for view-only mode
 * @param {boolean} options.highlight - true for using live-highlight feature
 * @param {object} opitons.linkAttributes - attributes for link element
 * @param {object} opitons.customHTMLRenderer - map of custom HTML render functions
 *
 * @ignore
 */
var MarkdownPreview = /** @class */ (function () {
    function MarkdownPreview(eventEmitter, options) {
        var el = document.createElement('div');
        this.el = el;
        this.eventEmitter = eventEmitter;
        this.isViewer = !!options.isViewer;
        this.el.className = cls('md-preview');
        var linkAttributes = options.linkAttributes, customHTMLRenderer = options.customHTMLRenderer, sanitizer = options.sanitizer, _a = options.highlight, highlight = _a === void 0 ? false : _a;
        this.renderer = new Renderer({
            gfm: true,
            nodeId: true,
            convertors: getHTMLRenderConvertors(linkAttributes, customHTMLRenderer),
        });
        this.cursorNodeId = null;
        this.sanitizer = sanitizer;
        this.initEvent(highlight);
        this.initContentSection();
        // To prevent overflowing contents in the viewer
        if (this.isViewer) {
            this.previewContent.style.overflowWrap = 'break-word';
        }
    }
    MarkdownPreview.prototype.initContentSection = function () {
        this.previewContent = createElementWith("<div class=\"" + cls('contents') + "\"></div>");
        if (!this.isViewer) {
            this.el.appendChild(this.previewContent);
        }
    };
    MarkdownPreview.prototype.toggleActive = function (active) {
        toggleClass(this.el, 'active', active);
    };
    MarkdownPreview.prototype.initEvent = function (highlight) {
        var _this = this;
        this.eventEmitter.listen('updatePreview', this.update.bind(this));
        if (this.isViewer) {
            return;
        }
        if (highlight) {
            this.eventEmitter.listen('changeToolbarState', function (_a) {
                var mdNode = _a.mdNode, cursorPos = _a.cursorPos;
                _this.updateCursorNode(mdNode, cursorPos);
            });
            this.eventEmitter.listen('blur', function () {
                _this.removeHighlight();
            });
        }
        on_default()(this.el, 'scroll', function (event) {
            _this.eventEmitter.emit('scroll', 'preview', findAdjacentElementToScrollTop(event.target.scrollTop, _this.previewContent));
        });
        this.eventEmitter.listen('changePreviewTabPreview', function () { return _this.toggleActive(true); });
        this.eventEmitter.listen('changePreviewTabWrite', function () { return _this.toggleActive(false); });
    };
    MarkdownPreview.prototype.removeHighlight = function () {
        if (this.cursorNodeId) {
            var currentEl = this.getElementByNodeId(this.cursorNodeId);
            if (currentEl) {
                removeClass_default()(currentEl, CLASS_HIGHLIGHT);
            }
        }
    };
    MarkdownPreview.prototype.updateCursorNode = function (cursorNode, cursorPos) {
        if (cursorNode) {
            cursorNode = findClosestNode(cursorNode, function (mdNode) { return !isInlineNode(mdNode); });
            if (cursorNode.type === 'tableRow') {
                cursorNode = findTableCell(cursorNode, cursorPos[1]);
            }
            else if (cursorNode.type === 'tableBody') {
                // empty line next to table
                cursorNode = null;
            }
        }
        var cursorNodeId = cursorNode ? cursorNode.id : null;
        if (this.cursorNodeId === cursorNodeId) {
            return;
        }
        var oldEL = this.getElementByNodeId(this.cursorNodeId);
        var newEL = this.getElementByNodeId(cursorNodeId);
        if (oldEL) {
            removeClass_default()(oldEL, CLASS_HIGHLIGHT);
        }
        if (newEL) {
            addClass_default()(newEL, CLASS_HIGHLIGHT);
        }
        this.cursorNodeId = cursorNodeId;
    };
    MarkdownPreview.prototype.getElementByNodeId = function (nodeId) {
        return nodeId
            ? this.previewContent.querySelector("[data-nodeid=\"" + nodeId + "\"]")
            : null;
    };
    MarkdownPreview.prototype.update = function (changed) {
        var _this = this;
        changed.forEach(function (editResult) { return _this.replaceRangeNodes(editResult); });
        this.eventEmitter.emit('afterPreviewRender', this);
    };
    MarkdownPreview.prototype.replaceRangeNodes = function (editResult) {
        var _this = this;
        var nodes = editResult.nodes, removedNodeRange = editResult.removedNodeRange;
        var contentEl = this.previewContent;
        var newHtml = this.eventEmitter.emitReduce('beforePreviewRender', this.sanitizer(nodes.map(function (node) { return _this.renderer.render(node); }).join('')));
        if (!removedNodeRange) {
            contentEl.insertAdjacentHTML('afterbegin', newHtml);
        }
        else {
            var _a = removedNodeRange.id, startNodeId = _a[0], endNodeId = _a[1];
            var startEl = this.getElementByNodeId(startNodeId);
            var endEl = this.getElementByNodeId(endNodeId);
            if (startEl) {
                startEl.insertAdjacentHTML('beforebegin', newHtml);
                var el = startEl;
                while (el && el !== endEl) {
                    var nextEl = el.nextElementSibling;
                    removeNode(el);
                    removeOffsetInfoByNode(el);
                    el = nextEl;
                }
                if (el === null || el === void 0 ? void 0 : el.parentNode) {
                    removeNode(el);
                    removeOffsetInfoByNode(el);
                }
            }
        }
    };
    MarkdownPreview.prototype.getRenderer = function () {
        return this.renderer;
    };
    MarkdownPreview.prototype.destroy = function () {
        off_default()(this.el, 'scroll');
        this.el = null;
    };
    MarkdownPreview.prototype.getElement = function () {
        return this.el;
    };
    MarkdownPreview.prototype.getHTML = function () {
        return removeProseMirrorHackNodes(this.previewContent.innerHTML);
    };
    MarkdownPreview.prototype.setHTML = function (html) {
        this.previewContent.innerHTML = html;
    };
    MarkdownPreview.prototype.setHeight = function (height) {
        css_default()(this.el, { height: height + "px" });
    };
    MarkdownPreview.prototype.setMinHeight = function (minHeight) {
        css_default()(this.el, { minHeight: minHeight + "px" });
    };
    return MarkdownPreview;
}());
/* harmony default export */ var mdPreview = (MarkdownPreview);

// EXTERNAL MODULE: external {"commonjs":"prosemirror-state","commonjs2":"prosemirror-state","amd":"prosemirror-state"}
var external_commonjs_prosemirror_state_commonjs2_prosemirror_state_amd_prosemirror_state_ = __nested_webpack_require_87464__(814);
// EXTERNAL MODULE: external {"commonjs":"prosemirror-inputrules","commonjs2":"prosemirror-inputrules","amd":"prosemirror-inputrules"}
var external_commonjs_prosemirror_inputrules_commonjs2_prosemirror_inputrules_amd_prosemirror_inputrules_ = __nested_webpack_require_87464__(479);
// EXTERNAL MODULE: external {"commonjs":"prosemirror-view","commonjs2":"prosemirror-view","amd":"prosemirror-view"}
var external_commonjs_prosemirror_view_commonjs2_prosemirror_view_amd_prosemirror_view_ = __nested_webpack_require_87464__(311);
// EXTERNAL MODULE: external {"commonjs":"prosemirror-keymap","commonjs2":"prosemirror-keymap","amd":"prosemirror-keymap"}
var external_commonjs_prosemirror_keymap_commonjs2_prosemirror_keymap_amd_prosemirror_keymap_ = __nested_webpack_require_87464__(481);
// EXTERNAL MODULE: external {"commonjs":"prosemirror-model","commonjs2":"prosemirror-model","amd":"prosemirror-model"}
var external_commonjs_prosemirror_model_commonjs2_prosemirror_model_amd_prosemirror_model_ = __nested_webpack_require_87464__(43);
// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/array/inArray.js
var inArray = __nested_webpack_require_87464__(928);
var inArray_default = /*#__PURE__*/__nested_webpack_require_87464__.n(inArray);
;// CONCATENATED MODULE: ./src/utils/map.ts

/**
 * @class
 * @ignore
 * @classdesc ES6 Map
 */
var map_Map = /** @class */ (function () {
    function Map() {
        this.keys = [];
        this.values = [];
    }
    Map.prototype.getKeyIndex = function (key) {
        return inArray_default()(key, this.keys);
    };
    Map.prototype.get = function (key) {
        return this.values[this.getKeyIndex(key)];
    };
    Map.prototype.set = function (key, value) {
        var keyIndex = this.getKeyIndex(key);
        if (keyIndex > -1) {
            this.values[keyIndex] = value;
        }
        else {
            this.keys.push(key);
            this.values.push(value);
        }
        return this;
    };
    Map.prototype.has = function (key) {
        return this.getKeyIndex(key) > -1;
    };
    Map.prototype.delete = function (key) {
        var keyIndex = this.getKeyIndex(key);
        if (keyIndex > -1) {
            this.keys.splice(keyIndex, 1);
            this.values.splice(keyIndex, 1);
            return true;
        }
        return false;
    };
    Map.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        if (thisArg === void 0) { thisArg = this; }
        this.values.forEach(function (value, index) {
            if (value && _this.keys[index]) {
                callback.call(thisArg, value, _this.keys[index], _this);
            }
        });
    };
    Map.prototype.clear = function () {
        this.keys = [];
        this.values = [];
    };
    return Map;
}());
/* harmony default export */ var utils_map = (map_Map);

;// CONCATENATED MODULE: ./src/i18n/i18n.ts
/**
 * @fileoverview Implements i18n
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 */


var DEFAULT_CODE = 'en-US';
/**
 * Class I18n
 * @ignore
 */
var I18n = /** @class */ (function () {
    function I18n() {
        this.code = DEFAULT_CODE;
        this.langs = new utils_map();
    }
    I18n.prototype.setCode = function (code) {
        this.code = code || DEFAULT_CODE;
    };
    /**
     * Set language set
     * @param {string|string[]} codes locale code
     * @param {object} data language set
     */
    I18n.prototype.setLanguage = function (codes, data) {
        var _this = this;
        codes = [].concat(codes);
        codes.forEach(function (code) {
            if (!_this.langs.has(code)) {
                _this.langs.set(code, data);
            }
            else {
                var langData = _this.langs.get(code);
                _this.langs.set(code, extend_default()(langData, data));
            }
        });
    };
    I18n.prototype.get = function (key, code) {
        if (!code) {
            code = this.code;
        }
        var langSet = this.langs.get(code);
        if (!langSet) {
            langSet = this.langs.get(DEFAULT_CODE);
        }
        var text = langSet[key];
        if (!text) {
            throw new Error("There is no text key \"" + key + "\" in " + code);
        }
        return text;
    };
    return I18n;
}());

/* harmony default export */ var i18n = (new I18n());

;// CONCATENATED MODULE: ./src/wysiwyg/helper/node.ts


function findNodeBy(pos, condition) {
    var depth = pos.depth;
    while (depth) {
        var node = pos.node(depth);
        if (condition(node, depth)) {
            return {
                node: node,
                depth: depth,
                offset: depth > 0 ? pos.before(depth) : 0,
            };
        }
        depth -= 1;
    }
    return null;
}
function node_isListNode(_a) {
    var type = _a.type;
    return type.name === 'bulletList' || type.name === 'orderedList';
}
function isInListNode(pos) {
    return !!findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'listItem' || type.name === 'bulletList' || type.name === 'orderedList';
    });
}
function isInTableNode(pos) {
    return !!findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'tableHeadCell' || type.name === 'tableBodyCell';
    });
}
function findListItem(pos) {
    return findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'listItem';
    });
}
function createDOMInfoParsedRawHTML(tag) {
    return {
        tag: tag,
        getAttrs: function (dom) {
            var rawHTML = dom.getAttribute('data-raw-html');
            return __assign({}, (rawHTML && { rawHTML: rawHTML }));
        },
    };
}
function createCellAttrs(attrs) {
    return Object.keys(attrs).reduce(function (acc, attrName) {
        if (attrName !== 'rawHTML' && attrs[attrName]) {
            attrName = attrName === 'className' ? 'class' : attrName;
            acc[attrName] = attrs[attrName];
        }
        return acc;
    }, {});
}
function createParsedCellDOM(tag) {
    return {
        tag: tag,
        getAttrs: function (dom) {
            return ['rawHTML', 'colspan', 'rowspan', 'extended'].reduce(function (acc, attrName) {
                var attrNameInDOM = attrName === 'rawHTML' ? 'data-raw-html' : attrName;
                var attrValue = dom.getAttribute(attrNameInDOM);
                if (attrValue) {
                    acc[attrName] = includes(['rawHTML', 'extended'], attrName)
                        ? attrValue
                        : Number(attrValue);
                }
                return acc;
            }, {});
        },
    };
}
function getDefaultCustomAttrs() {
    return {
        htmlAttrs: { default: null },
        classNames: { default: null },
    };
}
function getCustomAttrs(attrs) {
    var htmlAttrs = attrs.htmlAttrs, classNames = attrs.classNames;
    return __assign(__assign({}, htmlAttrs), { class: classNames ? classNames.join(' ') : null });
}

;// CONCATENATED MODULE: ./src/wysiwyg/helper/tableOffsetMap.ts


var cache = new Map();
/* eslint-disable @typescript-eslint/no-unused-vars */
var TableOffsetMap = /** @class */ (function () {
    function TableOffsetMap(table, tableRows, tableStartPos, rowInfo) {
        this.table = table;
        this.tableRows = tableRows;
        this.tableStartPos = tableStartPos;
        this.rowInfo = rowInfo;
    }
    TableOffsetMap.create = function (cellPos) {
        var table = findNodeBy(cellPos, function (_a) {
            var type = _a.type;
            return type.name === 'table';
        });
        if (table) {
            var node = table.node, depth = table.depth, offset = table.offset;
            var cached = cache.get(node);
            if ((cached === null || cached === void 0 ? void 0 : cached.tableStartPos) === offset + 1) {
                return cached;
            }
            var rows_1 = [];
            var tablePos = cellPos.start(depth);
            var thead = node.child(0);
            var tbody = node.child(1);
            var theadCellInfo = createOffsetMap(thead, tablePos);
            var tbodyCellInfo = createOffsetMap(tbody, tablePos + thead.nodeSize);
            thead.forEach(function (row) { return rows_1.push(row); });
            tbody.forEach(function (row) { return rows_1.push(row); });
            var map = new TableOffsetMap(node, rows_1, tablePos, theadCellInfo.concat(tbodyCellInfo));
            cache.set(node, map);
            return map;
        }
        return null;
    };
    Object.defineProperty(TableOffsetMap.prototype, "totalRowCount", {
        get: function () {
            return this.rowInfo.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "totalColumnCount", {
        get: function () {
            return this.rowInfo[0].length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "tableStartOffset", {
        get: function () {
            return this.tableStartPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "tableEndOffset", {
        get: function () {
            return this.tableStartPos + this.table.nodeSize - 1;
        },
        enumerable: false,
        configurable: true
    });
    TableOffsetMap.prototype.getCellInfo = function (rowIdx, colIdx) {
        return this.rowInfo[rowIdx][colIdx];
    };
    TableOffsetMap.prototype.posAt = function (rowIdx, colIdx) {
        for (var i = 0, rowStart = this.tableStartPos;; i += 1) {
            var rowEnd = rowStart + this.tableRows[i].nodeSize;
            if (i === rowIdx) {
                var index = colIdx;
                // Skip the cells from previous row(via rowspan)
                while (index < this.totalColumnCount && this.rowInfo[i][index].offset < rowStart) {
                    index += 1;
                }
                return index === this.totalColumnCount ? rowEnd : this.rowInfo[i][index].offset;
            }
            rowStart = rowEnd;
        }
    };
    TableOffsetMap.prototype.getNodeAndPos = function (rowIdx, colIdx) {
        var cellInfo = this.rowInfo[rowIdx][colIdx];
        return {
            node: this.table.nodeAt(cellInfo.offset - this.tableStartOffset),
            pos: cellInfo.offset,
        };
    };
    TableOffsetMap.prototype.extendedRowspan = function (rowIdx, colIdx) {
        return false;
    };
    TableOffsetMap.prototype.extendedColspan = function (rowIdx, colIdx) {
        return false;
    };
    TableOffsetMap.prototype.getRowspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.getColspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.decreaseColspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.decreaseRowspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.getColspanStartInfo = function (rowIdx, colIdx) {
        return null;
    };
    TableOffsetMap.prototype.getRowspanStartInfo = function (rowIdx, colIdx) {
        return null;
    };
    TableOffsetMap.prototype.getCellStartOffset = function (rowIdx, colIdx) {
        var offset = this.rowInfo[rowIdx][colIdx].offset;
        return this.extendedRowspan(rowIdx, colIdx) ? this.posAt(rowIdx, colIdx) : offset;
    };
    TableOffsetMap.prototype.getCellEndOffset = function (rowIdx, colIdx) {
        var _a = this.rowInfo[rowIdx][colIdx], offset = _a.offset, nodeSize = _a.nodeSize;
        return this.extendedRowspan(rowIdx, colIdx) ? this.posAt(rowIdx, colIdx) : offset + nodeSize;
    };
    TableOffsetMap.prototype.getCellIndex = function (cellPos) {
        for (var rowIdx = 0; rowIdx < this.totalRowCount; rowIdx += 1) {
            var rowInfo = this.rowInfo[rowIdx];
            for (var colIdx = 0; colIdx < this.totalColumnCount; colIdx += 1) {
                if (rowInfo[colIdx].offset + 1 > cellPos.pos) {
                    return [rowIdx, colIdx];
                }
            }
        }
        return [0, 0];
    };
    TableOffsetMap.prototype.getRectOffsets = function (startCellPos, endCellPos) {
        var _a, _b, _c;
        if (endCellPos === void 0) { endCellPos = startCellPos; }
        if (startCellPos.pos > endCellPos.pos) {
            _a = [endCellPos, startCellPos], startCellPos = _a[0], endCellPos = _a[1];
        }
        var _d = this.getCellIndex(startCellPos), startRowIdx = _d[0], startColIdx = _d[1];
        var _e = this.getCellIndex(endCellPos), endRowIdx = _e[0], endColIdx = _e[1];
        _b = getSortedNumPair(startRowIdx, endRowIdx), startRowIdx = _b[0], endRowIdx = _b[1];
        _c = getSortedNumPair(startColIdx, endColIdx), startColIdx = _c[0], endColIdx = _c[1];
        return this.getSpannedOffsets({ startRowIdx: startRowIdx, startColIdx: startColIdx, endRowIdx: endRowIdx, endColIdx: endColIdx });
    };
    TableOffsetMap.prototype.getSpannedOffsets = function (selectionInfo) {
        return selectionInfo;
    };
    return TableOffsetMap;
}());

/* eslint-enable @typescript-eslint/no-unused-vars */
var createOffsetMap = function (headOrBody, startOffset) {
    var cellInfoMatrix = [];
    headOrBody.forEach(function (row, rowOffset) {
        // get row index based on table(not table head or table body)
        var rowInfo = { rowspanMap: {}, colspanMap: {}, length: 0 };
        row.forEach(function (_a, cellOffset) {
            var nodeSize = _a.nodeSize;
            var colIdx = 0;
            while (rowInfo[colIdx]) {
                colIdx += 1;
            }
            rowInfo[colIdx] = {
                // 2 is the sum of the front and back positions of the tag
                offset: startOffset + rowOffset + cellOffset + 2,
                nodeSize: nodeSize,
            };
            rowInfo.length += 1;
        });
        cellInfoMatrix.push(rowInfo);
    });
    return cellInfoMatrix;
};
function mixinTableOffsetMapPrototype(offsetMapMixin, createOffsetMapMixin) {
    common_assign(TableOffsetMap.prototype, offsetMapMixin);
    createOffsetMap = createOffsetMapMixin;
    return TableOffsetMap;
}

;// CONCATENATED MODULE: ./src/helper/plugin.ts










function execPlugin(pluginInfo) {
    var plugin = pluginInfo.plugin, eventEmitter = pluginInfo.eventEmitter, usageStatistics = pluginInfo.usageStatistics, instance = pluginInfo.instance;
    var pmState = { Plugin: external_commonjs_prosemirror_state_commonjs2_prosemirror_state_amd_prosemirror_state_.Plugin, PluginKey: external_commonjs_prosemirror_state_commonjs2_prosemirror_state_amd_prosemirror_state_.PluginKey, Selection: external_commonjs_prosemirror_state_commonjs2_prosemirror_state_amd_prosemirror_state_.Selection, TextSelection: external_commonjs_prosemirror_state_commonjs2_prosemirror_state_amd_prosemirror_state_.TextSelection };
    var pmView = { Decoration: external_commonjs_prosemirror_view_commonjs2_prosemirror_view_amd_prosemirror_view_.Decoration, DecorationSet: external_commonjs_prosemirror_view_commonjs2_prosemirror_view_amd_prosemirror_view_.DecorationSet };
    var pmModel = { Fragment: external_commonjs_prosemirror_model_commonjs2_prosemirror_model_amd_prosemirror_model_.Fragment };
    var pmRules = { InputRule: external_commonjs_prosemirror_inputrules_commonjs2_prosemirror_inputrules_amd_prosemirror_inputrules_.InputRule, inputRules: external_commonjs_prosemirror_inputrules_commonjs2_prosemirror_inputrules_amd_prosemirror_inputrules_.inputRules, undoInputRule: external_commonjs_prosemirror_inputrules_commonjs2_prosemirror_inputrules_amd_prosemirror_inputrules_.undoInputRule };
    var pmKeymap = { keymap: external_commonjs_prosemirror_keymap_commonjs2_prosemirror_keymap_amd_prosemirror_keymap_.keymap };
    var context = {
        eventEmitter: eventEmitter,
        usageStatistics: usageStatistics,
        instance: instance,
        pmState: pmState,
        pmView: pmView,
        pmModel: pmModel,
        pmRules: pmRules,
        pmKeymap: pmKeymap,
        i18n: i18n,
    };
    if (isArray_default()(plugin)) {
        var pluginFn = plugin[0], _a = plugin[1], options = _a === void 0 ? {} : _a;
        return pluginFn(context, options);
    }
    return plugin(context);
}
function getPluginInfo(pluginsInfo) {
    var plugins = pluginsInfo.plugins, eventEmitter = pluginsInfo.eventEmitter, usageStatistics = pluginsInfo.usageStatistics, instance = pluginsInfo.instance;
    eventEmitter.listen('mixinTableOffsetMapPrototype', mixinTableOffsetMapPrototype);
    return (plugins !== null && plugins !== void 0 ? plugins : []).reduce(function (acc, plugin) {
        var pluginInfoResult = execPlugin({
            plugin: plugin,
            eventEmitter: eventEmitter,
            usageStatistics: usageStatistics,
            instance: instance,
        });
        if (!pluginInfoResult) {
            throw new Error('The return value of the executed plugin is empty.');
        }
        var markdownParsers = pluginInfoResult.markdownParsers, toHTMLRenderers = pluginInfoResult.toHTMLRenderers, toMarkdownRenderers = pluginInfoResult.toMarkdownRenderers, markdownPlugins = pluginInfoResult.markdownPlugins, wysiwygPlugins = pluginInfoResult.wysiwygPlugins, wysiwygNodeViews = pluginInfoResult.wysiwygNodeViews, markdownCommands = pluginInfoResult.markdownCommands, wysiwygCommands = pluginInfoResult.wysiwygCommands, toolbarItems = pluginInfoResult.toolbarItems;
        if (toHTMLRenderers) {
            acc.toHTMLRenderers = deepMergedCopy(acc.toHTMLRenderers, toHTMLRenderers);
        }
        if (toMarkdownRenderers) {
            acc.toMarkdownRenderers = deepMergedCopy(acc.toMarkdownRenderers, toMarkdownRenderers);
        }
        if (markdownPlugins) {
            acc.mdPlugins = acc.mdPlugins.concat(markdownPlugins);
        }
        if (wysiwygPlugins) {
            acc.wwPlugins = acc.wwPlugins.concat(wysiwygPlugins);
        }
        if (wysiwygNodeViews) {
            acc.wwNodeViews = tslib_es6_assign(tslib_es6_assign({}, acc.wwNodeViews), wysiwygNodeViews);
        }
        if (markdownCommands) {
            acc.mdCommands = tslib_es6_assign(tslib_es6_assign({}, acc.mdCommands), markdownCommands);
        }
        if (wysiwygCommands) {
            acc.wwCommands = tslib_es6_assign(tslib_es6_assign({}, acc.wwCommands), wysiwygCommands);
        }
        if (toolbarItems) {
            acc.toolbarItems = acc.toolbarItems.concat(toolbarItems);
        }
        if (markdownParsers) {
            acc.markdownParsers = tslib_es6_assign(tslib_es6_assign({}, acc.markdownParsers), markdownParsers);
        }
        return acc;
    }, {
        toHTMLRenderers: {},
        toMarkdownRenderers: {},
        mdPlugins: [],
        wwPlugins: [],
        wwNodeViews: {},
        mdCommands: {},
        wwCommands: {},
        toolbarItems: [],
        markdownParsers: {},
    });
}

// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isFalsy.js
var isFalsy = __nested_webpack_require_87464__(404);
var isFalsy_default = /*#__PURE__*/__nested_webpack_require_87464__.n(isFalsy);
;// CONCATENATED MODULE: ./src/event/eventEmitter.ts




var eventTypeList = [
    'afterPreviewRender',
    'updatePreview',
    'changeMode',
    'needChangeMode',
    'command',
    'changePreviewStyle',
    'changePreviewTabPreview',
    'changePreviewTabWrite',
    'scroll',
    'contextmenu',
    'show',
    'hide',
    'changeLanguage',
    'changeToolbarState',
    'toggleScrollSync',
    'mixinTableOffsetMapPrototype',
    'setFocusedNode',
    'removePopupWidget',
    'query',
    // provide event for user
    'openPopup',
    'closePopup',
    'addImageBlobHook',
    'beforePreviewRender',
    'beforeConvertWysiwygToMarkdown',
    'load',
    'loadUI',
    'change',
    'caretChange',
    'destroy',
    'focus',
    'blur',
    'keydown',
    'keyup',
];
/**
 * Class EventEmitter
 * @ignore
 */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        var _this = this;
        this.events = new utils_map();
        this.eventTypes = eventTypeList.reduce(function (types, type) {
            return tslib_es6_assign(tslib_es6_assign({}, types), { type: type });
        }, {});
        this.hold = false;
        eventTypeList.forEach(function (eventType) {
            _this.addEventType(eventType);
        });
    }
    /**
     * Listen event and bind event handler
     * @param {string} type Event type string
     * @param {function} handler Event handler
     */
    EventEmitter.prototype.listen = function (type, handler) {
        var typeInfo = this.getTypeInfo(type);
        var eventHandlers = this.events.get(typeInfo.type) || [];
        if (!this.hasEventType(typeInfo.type)) {
            throw new Error("There is no event type " + typeInfo.type);
        }
        if (typeInfo.namespace) {
            handler.namespace = typeInfo.namespace;
        }
        eventHandlers.push(handler);
        this.events.set(typeInfo.type, eventHandlers);
    };
    /**
     * Emit event
     * @param {string} eventName Event name to emit
     * @returns {Array}
     */
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var typeInfo = this.getTypeInfo(type);
        var eventHandlers = this.events.get(typeInfo.type);
        var results = [];
        if (!this.hold && eventHandlers) {
            eventHandlers.forEach(function (handler) {
                var result = handler.apply(void 0, args);
                if (!isUndefined_default()(result)) {
                    results.push(result);
                }
            });
        }
        return results;
    };
    /**
     * Emit given event and return result
     * @param {string} eventName Event name to emit
     * @param {any} source Source to change
     * @returns {string}
     */
    EventEmitter.prototype.emitReduce = function (type, source) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var eventHandlers = this.events.get(type);
        if (!this.hold && eventHandlers) {
            eventHandlers.forEach(function (handler) {
                var result = handler.apply(void 0, __spreadArray([source], args));
                if (!isFalsy_default()(result)) {
                    source = result;
                }
            });
        }
        return source;
    };
    /**
     * Get event type and namespace
     * @param {string} type Event type name
     * @returns {{type: string, namespace: string}}
     * @private
     */
    EventEmitter.prototype.getTypeInfo = function (type) {
        var splited = type.split('.');
        return {
            type: splited[0],
            namespace: splited[1],
        };
    };
    /**
     * Check whether event type exists or not
     * @param {string} type Event type name
     * @returns {boolean}
     * @private
     */
    EventEmitter.prototype.hasEventType = function (type) {
        return !isUndefined_default()(this.eventTypes[this.getTypeInfo(type).type]);
    };
    /**
     * Add event type when given event not exists
     * @param {string} type Event type name
     */
    EventEmitter.prototype.addEventType = function (type) {
        if (this.hasEventType(type)) {
            throw new Error("There is already have event type " + type);
        }
        this.eventTypes[type] = type;
    };
    /**
     * Remove event handler from given event type
     * @param {string} eventType Event type name
     * @param {function} [handler] - registered event handler
     */
    EventEmitter.prototype.removeEventHandler = function (eventType, handler) {
        var _this = this;
        var _a = this.getTypeInfo(eventType), type = _a.type, namespace = _a.namespace;
        if (type && handler) {
            this.removeEventHandlerWithHandler(type, handler);
        }
        else if (type && !namespace) {
            this.events.delete(type);
        }
        else if (!type && namespace) {
            this.events.forEach(function (_, evtType) {
                _this.removeEventHandlerWithTypeInfo(evtType, namespace);
            });
        }
        else if (type && namespace) {
            this.removeEventHandlerWithTypeInfo(type, namespace);
        }
    };
    /**
     * Remove event handler with event handler
     * @param {string} type - event type name
     * @param {function} handler - event handler
     * @private
     */
    EventEmitter.prototype.removeEventHandlerWithHandler = function (type, handler) {
        var eventHandlers = this.events.get(type);
        if (eventHandlers) {
            var handlerIndex = eventHandlers.indexOf(handler);
            if (eventHandlers.indexOf(handler) >= 0) {
                eventHandlers.splice(handlerIndex, 1);
            }
        }
    };
    /**
     * Remove event handler with event type information
     * @param {string} type Event type name
     * @param {string} namespace Event namespace
     * @private
     */
    EventEmitter.prototype.removeEventHandlerWithTypeInfo = function (type, namespace) {
        var handlersToSurvive = [];
        var eventHandlers = this.events.get(type);
        if (!eventHandlers) {
            return;
        }
        eventHandlers.map(function (handler) {
            if (handler.namespace !== namespace) {
                handlersToSurvive.push(handler);
            }
            return null;
        });
        this.events.set(type, handlersToSurvive);
    };
    EventEmitter.prototype.getEvents = function () {
        return this.events;
    };
    EventEmitter.prototype.holdEventInvoke = function (fn) {
        this.hold = true;
        fn();
        this.hold = false;
    };
    return EventEmitter;
}());
/* harmony default export */ var eventEmitter = (EventEmitter);

;// CONCATENATED MODULE: ./src/viewer.ts












var TASK_ATTR_NAME = 'data-task';
var DISABLED_TASK_ATTR_NAME = 'data-task-disabled';
var TASK_CHECKED_CLASS_NAME = 'checked';
function registerHTMLTagToWhitelist(convertorMap) {
    ['htmlBlock', 'htmlInline'].forEach(function (htmlType) {
        if (convertorMap[htmlType]) {
            // register tag white list for preventing to remove the html in sanitizer
            Object.keys(convertorMap[htmlType]).forEach(function (type) { return htmlSanitizer_registerTagWhitelistIfPossible(type); });
        }
    });
}
/**
 * Class ToastUIEditorViewer
 * @param {object} options Option object
 *     @param {HTMLElement} options.el - container element
 *     @param {string} [options.initialValue] Editor's initial value
 *     @param {Object} [options.events] - Events
 *         @param {function} [options.events.load] - It would be emitted when editor fully load
 *         @param {function} [options.events.change] - It would be emitted when content changed
 *         @param {function} [options.events.caretChange] - It would be emitted when format change by cursor position
 *         @param {function} [options.events.focus] - It would be emitted when editor get focus
 *         @param {function} [options.events.blur] - It would be emitted when editor loose focus
 *     @param {Array.<function|Array>} [options.plugins] - Array of plugins. A plugin can be either a function or an array in the form of [function, options].
 *     @param {Object} [options.extendedAutolinks] - Using extended Autolinks specified in GFM spec
 *     @param {Object} [options.linkAttributes] - Attributes of anchor element that should be rel, target, hreflang, type
 *     @param {Object} [options.customHTMLRenderer=null] - Object containing custom renderer functions correspond to change markdown node to preview HTML or wysiwyg node
 *     @param {boolean} [options.referenceDefinition=false] - whether use the specification of link reference definition
 *     @param {function} [options.customHTMLSanitizer=null] - custom HTML sanitizer
 *     @param {boolean} [options.frontMatter=false] - whether use the front matter
 *     @param {string} [options.theme] - The theme to style the viewer with. The default is included in toastui-editor.css.
 */
var ToastUIEditorViewer = /** @class */ (function () {
    function ToastUIEditorViewer(options) {
        var _this = this;
        this.options = extend_default()({
            linkAttributes: null,
            extendedAutolinks: false,
            customHTMLRenderer: null,
            referenceDefinition: false,
            customHTMLSanitizer: null,
            frontMatter: false,
            usageStatistics: true,
            theme: 'light',
        }, options);
        this.eventEmitter = new eventEmitter();
        var linkAttributes = sanitizeLinkAttribute(this.options.linkAttributes);
        var _a = getPluginInfo({
            plugins: this.options.plugins,
            eventEmitter: this.eventEmitter,
            usageStatistics: this.options.usageStatistics,
            instance: this,
        }) || {}, toHTMLRenderers = _a.toHTMLRenderers, markdownParsers = _a.markdownParsers;
        var _b = this.options, customHTMLRenderer = _b.customHTMLRenderer, extendedAutolinks = _b.extendedAutolinks, referenceDefinition = _b.referenceDefinition, frontMatter = _b.frontMatter, customHTMLSanitizer = _b.customHTMLSanitizer;
        var rendererOptions = {
            linkAttributes: linkAttributes,
            customHTMLRenderer: tslib_es6_assign(tslib_es6_assign({}, toHTMLRenderers), customHTMLRenderer),
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            frontMatter: frontMatter,
            sanitizer: customHTMLSanitizer || sanitizeHTML,
        };
        registerHTMLTagToWhitelist(rendererOptions.customHTMLRenderer);
        if (this.options.events) {
            forEachOwnProperties_default()(this.options.events, function (fn, key) {
                _this.on(key, fn);
            });
        }
        var _c = this.options, el = _c.el, initialValue = _c.initialValue, theme = _c.theme;
        var existingHTML = el.innerHTML;
        if (theme !== 'light') {
            el.classList.add(cls(theme));
        }
        el.innerHTML = '';
        this.toastMark = new ToastMark('', {
            disallowedHtmlBlockTags: ['br', 'img'],
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            disallowDeepHeading: true,
            frontMatter: frontMatter,
            customParser: markdownParsers,
        });
        this.preview = new mdPreview(this.eventEmitter, tslib_es6_assign(tslib_es6_assign({}, rendererOptions), { isViewer: true }));
        on_default()(this.preview.previewContent, 'mousedown', this.toggleTask.bind(this));
        if (initialValue) {
            this.setMarkdown(initialValue);
        }
        else if (existingHTML) {
            this.preview.setHTML(existingHTML);
        }
        el.appendChild(this.preview.previewContent);
        this.eventEmitter.emit('load', this);
    }
    /**
     * Toggle task by detecting mousedown event.
     * @param {MouseEvent} ev - event
     * @private
     */
    ToastUIEditorViewer.prototype.toggleTask = function (ev) {
        var element = ev.target;
        var style = getComputedStyle(element, ':before');
        if (!element.hasAttribute(DISABLED_TASK_ATTR_NAME) &&
            element.hasAttribute(TASK_ATTR_NAME) &&
            isPositionInBox(style, ev.offsetX, ev.offsetY)) {
            toggleClass(element, TASK_CHECKED_CLASS_NAME);
            this.eventEmitter.emit('change', {
                source: 'viewer',
                date: ev,
            });
        }
    };
    /**
     * Set content for preview
     * @param {string} markdown Markdown text
     */
    ToastUIEditorViewer.prototype.setMarkdown = function (markdown) {
        var lineTexts = this.toastMark.getLineTexts();
        var length = lineTexts.length;
        var lastLine = common_last(lineTexts);
        var endSourcepos = [length, lastLine.length + 1];
        var editResult = this.toastMark.editMarkdown([1, 1], endSourcepos, markdown || '');
        this.eventEmitter.emit('updatePreview', editResult);
    };
    /**
     * Bind eventHandler to event type
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorViewer.prototype.on = function (type, handler) {
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Unbind eventHandler from event type
     * @param {string} type Event type
     */
    ToastUIEditorViewer.prototype.off = function (type) {
        this.eventEmitter.removeEventHandler(type);
    };
    /**
     * Add hook to TUIEditor event
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorViewer.prototype.addHook = function (type, handler) {
        this.eventEmitter.removeEventHandler(type);
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Remove Viewer preview from document
     */
    ToastUIEditorViewer.prototype.destroy = function () {
        off_default()(this.preview.el, 'mousedown', this.toggleTask.bind(this));
        this.preview.destroy();
        this.eventEmitter.emit('destroy');
    };
    /**
     * Return true
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isViewer = function () {
        return true;
    };
    /**
     * Return false
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isMarkdownMode = function () {
        return false;
    };
    /**
     * Return false
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isWysiwygMode = function () {
        return false;
    };
    return ToastUIEditorViewer;
}());
/* harmony default export */ var viewer = (ToastUIEditorViewer);

;// CONCATENATED MODULE: ./src/indexViewer.ts


/* harmony default export */ var indexViewer = (viewer);

}();
__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/orderedmap/dist/index.cjs":
/*!************************************************!*\
  !*** ./node_modules/orderedmap/dist/index.cjs ***!
  \************************************************/
/***/ ((module) => {

"use strict";


// ::- Persistent data structure representing an ordered mapping from
// strings to values, with some convenient update methods.
function OrderedMap(content) {
  this.content = content;
}

OrderedMap.prototype = {
  constructor: OrderedMap,

  find: function(key) {
    for (var i = 0; i < this.content.length; i += 2)
      if (this.content[i] === key) return i
    return -1
  },

  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(key) {
    var found = this.find(key);
    return found == -1 ? undefined : this.content[found + 1]
  },

  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key), content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content)
  },

  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(key) {
    var found = this.find(key);
    if (found == -1) return this
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content)
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content))
  },

  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content)
  },

  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(place, key, value) {
    var without = this.remove(key), content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content)
  },

  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(f) {
    for (var i = 0; i < this.content.length; i += 2)
      f(this.content[i], this.content[i + 1]);
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(map.content.concat(this.subtract(map).content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(map) {
    map = OrderedMap.from(map);
    if (!map.size) return this
    return new OrderedMap(this.subtract(map).content.concat(map.content))
  },

  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2)
      result = result.remove(map.content[i]);
    return result
  },

  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var result = {};
    this.forEach(function(key, value) { result[key] = value; });
    return result
  },

  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1
  }
};

// :: (?union<Object, OrderedMap>) → OrderedMap
// Return a map with the given content. If null, create an empty
// map. If given an ordered map, return that map itself. If given an
// object, create a map from the object's properties.
OrderedMap.from = function(value) {
  if (value instanceof OrderedMap) return value
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content)
};

module.exports = OrderedMap;


/***/ }),

/***/ "./node_modules/prosemirror-inputrules/dist/index.cjs":
/*!************************************************************!*\
  !*** ./node_modules/prosemirror-inputrules/dist/index.cjs ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var prosemirrorState = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.cjs");
var prosemirrorTransform = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.cjs");
var InputRule = _createClass(function InputRule(match, handler) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  _classCallCheck(this, InputRule);
  this.match = match;
  this.match = match;
  this.handler = typeof handler == "string" ? stringHandler(handler) : handler;
  this.undoable = options.undoable !== false;
  this.inCode = options.inCode || false;
});
function stringHandler(string) {
  return function (state, match, start, end) {
    var insert = string;
    if (match[1]) {
      var offset = match[0].lastIndexOf(match[1]);
      insert += match[0].slice(offset + match[1].length);
      start += offset;
      var cutOff = start - end;
      if (cutOff > 0) {
        insert = match[0].slice(offset - cutOff, offset) + insert;
        start = end;
      }
    }
    return state.tr.insertText(insert, start, end);
  };
}
var MAX_MATCH = 500;
function inputRules(_ref) {
  var rules = _ref.rules;
  var plugin = new prosemirrorState.Plugin({
    state: {
      init: function init() {
        return null;
      },
      apply: function apply(tr, prev) {
        var stored = tr.getMeta(this);
        if (stored) return stored;
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput: function handleTextInput(view, from, to, text) {
        return run(view, from, to, text, rules, plugin);
      },
      handleDOMEvents: {
        compositionend: function compositionend(view) {
          setTimeout(function () {
            var $cursor = view.state.selection.$cursor;
            if ($cursor) run(view, $cursor.pos, $cursor.pos, "", rules, plugin);
          });
        }
      }
    },
    isInputRules: true
  });
  return plugin;
}
function run(view, from, to, text, rules, plugin) {
  if (view.composing) return false;
  var state = view.state,
    $from = state.doc.resolve(from);
  var textBefore = $from.parent.textBetween(Math.max(0, $from.parentOffset - MAX_MATCH), $from.parentOffset, null, "\uFFFC") + text;
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if ($from.parent.type.spec.code) {
      if (!rule.inCode) continue;
    } else if (rule.inCode === "only") {
      continue;
    }
    var match = rule.match.exec(textBefore);
    var tr = match && rule.handler(state, match, from - (match[0].length - text.length), to);
    if (!tr) continue;
    if (rule.undoable) tr.setMeta(plugin, {
      transform: tr,
      from: from,
      to: to,
      text: text
    });
    view.dispatch(tr);
    return true;
  }
  return false;
}
var undoInputRule = function undoInputRule(state, dispatch) {
  var plugins = state.plugins;
  for (var i = 0; i < plugins.length; i++) {
    var plugin = plugins[i],
      undoable = void 0;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        var tr = state.tr,
          toUndo = undoable.transform;
        for (var j = toUndo.steps.length - 1; j >= 0; j--) tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        if (undoable.text) {
          var marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr["delete"](undoable.from, undoable.to);
        }
        dispatch(tr);
      }
      return true;
    }
  }
  return false;
};
var emDash = new InputRule(/--$/, "—");
var ellipsis = new InputRule(/\.\.\.$/, "…");
var openDoubleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“");
var closeDoubleQuote = new InputRule(/"$/, "”");
var openSingleQuote = new InputRule(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘");
var closeSingleQuote = new InputRule(/'$/, "’");
var smartQuotes = [openDoubleQuote, closeDoubleQuote, openSingleQuote, closeSingleQuote];
function wrappingInputRule(regexp, nodeType) {
  var getAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var joinPredicate = arguments.length > 3 ? arguments[3] : undefined;
  return new InputRule(regexp, function (state, match, start, end) {
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    var tr = state.tr["delete"](start, end);
    var $start = tr.doc.resolve(start),
      range = $start.blockRange(),
      wrapping = range && prosemirrorTransform.findWrapping(range, nodeType, attrs);
    if (!wrapping) return null;
    tr.wrap(range, wrapping);
    var before = tr.doc.resolve(start - 1).nodeBefore;
    if (before && before.type == nodeType && prosemirrorTransform.canJoin(tr.doc, start - 1) && (!joinPredicate || joinPredicate(match, before))) tr.join(start - 1);
    return tr;
  });
}
function textblockTypeInputRule(regexp, nodeType) {
  var getAttrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new InputRule(regexp, function (state, match, start, end) {
    var $start = state.doc.resolve(start);
    var attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs;
    if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), nodeType)) return null;
    return state.tr["delete"](start, end).setBlockType(start, start, nodeType, attrs);
  });
}
exports.InputRule = InputRule;
exports.closeDoubleQuote = closeDoubleQuote;
exports.closeSingleQuote = closeSingleQuote;
exports.ellipsis = ellipsis;
exports.emDash = emDash;
exports.inputRules = inputRules;
exports.openDoubleQuote = openDoubleQuote;
exports.openSingleQuote = openSingleQuote;
exports.smartQuotes = smartQuotes;
exports.textblockTypeInputRule = textblockTypeInputRule;
exports.undoInputRule = undoInputRule;
exports.wrappingInputRule = wrappingInputRule;


/***/ }),

/***/ "./node_modules/prosemirror-keymap/dist/index.cjs":
/*!********************************************************!*\
  !*** ./node_modules/prosemirror-keymap/dist/index.cjs ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var w3cKeyname = __webpack_require__(/*! w3c-keyname */ "./node_modules/w3c-keyname/index.cjs");

var prosemirrorState = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.cjs");

var mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : false;

function normalizeKeyName(name) {
  var parts = name.split(/-(?!$)/),
      result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  var alt, ctrl, shift, meta;

  for (var i = 0; i < parts.length - 1; i++) {
    var mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (mac) meta = true;else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }

  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift) result = "Shift-" + result;
  return result;
}

function normalize(map) {
  var copy = Object.create(null);

  for (var prop in map) {
    copy[normalizeKeyName(prop)] = map[prop];
  }

  return copy;
}

function modifiers(name, event) {
  var shift = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift && event.shiftKey) name = "Shift-" + name;
  return name;
}

function keymap(bindings) {
  return new prosemirrorState.Plugin({
    props: {
      handleKeyDown: keydownHandler(bindings)
    }
  });
}

function keydownHandler(bindings) {
  var map = normalize(bindings);
  return function (view, event) {
    var name = w3cKeyname.keyName(event),
        baseName,
        direct = map[modifiers(name, event)];
    if (direct && direct(view.state, view.dispatch, view)) return true;

    if (name.length == 1 && name != " ") {
      if (event.shiftKey) {
        var noShift = map[modifiers(name, event, false)];
        if (noShift && noShift(view.state, view.dispatch, view)) return true;
      }

      if ((event.shiftKey || event.altKey || event.metaKey || name.charCodeAt(0) > 127) && (baseName = w3cKeyname.base[event.keyCode]) && baseName != name) {
        var fromCode = map[modifiers(baseName, event)];
        if (fromCode && fromCode(view.state, view.dispatch, view)) return true;
      }
    }

    return false;
  };
}

exports.keydownHandler = keydownHandler;
exports.keymap = keymap;


/***/ }),

/***/ "./node_modules/prosemirror-model/dist/index.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-model/dist/index.cjs ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var OrderedMap = __webpack_require__(/*! orderedmap */ "./node_modules/orderedmap/dist/index.cjs");
function _findDiffStart(a, b, pos) {
  for (var i = 0;; i++) {
    if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
    var childA = a.child(i),
      childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) return pos;
    if (childA.isText && childA.text != childB.text) {
      for (var j = 0; childA.text[j] == childB.text[j]; j++) pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      var inner = _findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) return inner;
    }
    pos += childA.nodeSize;
  }
}
function _findDiffEnd(a, b, posA, posB) {
  for (var iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0) return iA == iB ? null : {
      a: posA,
      b: posB
    };
    var childA = a.child(--iA),
      childB = b.child(--iB),
      size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB)) return {
      a: posA,
      b: posB
    };
    if (childA.isText && childA.text != childB.text) {
      var same = 0,
        minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return {
        a: posA,
        b: posB
      };
    }
    if (childA.content.size || childB.content.size) {
      var inner = _findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) return inner;
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = function () {
  function Fragment(content, size) {
    _classCallCheck(this, Fragment);
    this.content = content;
    this.size = size || 0;
    if (size == null) for (var i = 0; i < content.length; i++) this.size += content[i].nodeSize;
  }
  _createClass(Fragment, [{
    key: "nodesBetween",
    value: function nodesBetween(from, to, f) {
      var nodeStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var parent = arguments.length > 4 ? arguments[4] : undefined;
      for (var i = 0, pos = 0; pos < to; i++) {
        var child = this.content[i],
          end = pos + child.nodeSize;
        if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
          var start = pos + 1;
          child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
        }
        pos = end;
      }
    }
  }, {
    key: "descendants",
    value: function descendants(f) {
      this.nodesBetween(0, this.size, f);
    }
  }, {
    key: "textBetween",
    value: function textBetween(from, to, blockSeparator, leafText) {
      var text = "",
        first = true;
      this.nodesBetween(from, to, function (node, pos) {
        var nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
        if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
          if (first) first = false;else text += blockSeparator;
        }
        text += nodeText;
      }, 0);
      return text;
    }
  }, {
    key: "append",
    value: function append(other) {
      if (!other.size) return this;
      if (!this.size) return other;
      var last = this.lastChild,
        first = other.firstChild,
        content = this.content.slice(),
        i = 0;
      if (last.isText && last.sameMarkup(first)) {
        content[content.length - 1] = last.withText(last.text + first.text);
        i = 1;
      }
      for (; i < other.content.length; i++) content.push(other.content[i]);
      return new Fragment(content, this.size + other.size);
    }
  }, {
    key: "cut",
    value: function cut(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
      if (from == 0 && to == this.size) return this;
      var result = [],
        size = 0;
      if (to > from) for (var i = 0, pos = 0; pos < to; i++) {
        var child = this.content[i],
          end = pos + child.nodeSize;
        if (end > from) {
          if (pos < from || end > to) {
            if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
          }
          result.push(child);
          size += child.nodeSize;
        }
        pos = end;
      }
      return new Fragment(result, size);
    }
  }, {
    key: "cutByIndex",
    value: function cutByIndex(from, to) {
      if (from == to) return Fragment.empty;
      if (from == 0 && to == this.content.length) return this;
      return new Fragment(this.content.slice(from, to));
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(index, node) {
      var current = this.content[index];
      if (current == node) return this;
      var copy = this.content.slice();
      var size = this.size + node.nodeSize - current.nodeSize;
      copy[index] = node;
      return new Fragment(copy, size);
    }
  }, {
    key: "addToStart",
    value: function addToStart(node) {
      return new Fragment([node].concat(this.content), this.size + node.nodeSize);
    }
  }, {
    key: "addToEnd",
    value: function addToEnd(node) {
      return new Fragment(this.content.concat(node), this.size + node.nodeSize);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      if (this.content.length != other.content.length) return false;
      for (var i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return false;
      return true;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.content.length ? this.content[0] : null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      return this.content.length ? this.content[this.content.length - 1] : null;
    }
  }, {
    key: "childCount",
    get: function get() {
      return this.content.length;
    }
  }, {
    key: "child",
    value: function child(index) {
      var found = this.content[index];
      if (!found) throw new RangeError("Index " + index + " out of range for " + this);
      return found;
    }
  }, {
    key: "maybeChild",
    value: function maybeChild(index) {
      return this.content[index] || null;
    }
  }, {
    key: "forEach",
    value: function forEach(f) {
      for (var i = 0, p = 0; i < this.content.length; i++) {
        var child = this.content[i];
        f(child, p, i);
        p += child.nodeSize;
      }
    }
  }, {
    key: "findDiffStart",
    value: function findDiffStart(other) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _findDiffStart(this, other, pos);
    }
  }, {
    key: "findDiffEnd",
    value: function findDiffEnd(other) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.size;
      var otherPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : other.size;
      return _findDiffEnd(this, other, pos, otherPos);
    }
  }, {
    key: "findIndex",
    value: function findIndex(pos) {
      var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      if (pos == 0) return retIndex(0, pos);
      if (pos == this.size) return retIndex(this.content.length, pos);
      if (pos > this.size || pos < 0) throw new RangeError("Position ".concat(pos, " outside of fragment (").concat(this, ")"));
      for (var i = 0, curPos = 0;; i++) {
        var cur = this.child(i),
          end = curPos + cur.nodeSize;
        if (end >= pos) {
          if (end == pos || round > 0) return retIndex(i + 1, end);
          return retIndex(i, curPos);
        }
        curPos = end;
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return "<" + this.toStringInner() + ">";
    }
  }, {
    key: "toStringInner",
    value: function toStringInner() {
      return this.content.join(", ");
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.content.length ? this.content.map(function (n) {
        return n.toJSON();
      }) : null;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, value) {
      if (!value) return Fragment.empty;
      if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
      return new Fragment(value.map(schema.nodeFromJSON));
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      if (!array.length) return Fragment.empty;
      var joined,
        size = 0;
      for (var i = 0; i < array.length; i++) {
        var node = array[i];
        size += node.nodeSize;
        if (i && node.isText && array[i - 1].sameMarkup(node)) {
          if (!joined) joined = array.slice(0, i);
          joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
        } else if (joined) {
          joined.push(node);
        }
      }
      return new Fragment(joined || array, size);
    }
  }, {
    key: "from",
    value: function from(nodes) {
      if (!nodes) return Fragment.empty;
      if (nodes instanceof Fragment) return nodes;
      if (Array.isArray(nodes)) return this.fromArray(nodes);
      if (nodes.attrs) return new Fragment([nodes], nodes.nodeSize);
      throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
  }]);
  return Fragment;
}();
Fragment.empty = new Fragment([], 0);
var found = {
  index: 0,
  offset: 0
};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
}
function compareDeep(a, b) {
  if (a === b) return true;
  if (!(a && _typeof(a) == "object") || !(b && _typeof(b) == "object")) return false;
  var array = Array.isArray(a);
  if (Array.isArray(b) != array) return false;
  if (array) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return false;
  } else {
    for (var p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return false;
    for (var _p in b) if (!(_p in a)) return false;
  }
  return true;
}
var Mark = function () {
  function Mark(type, attrs) {
    _classCallCheck(this, Mark);
    this.type = type;
    this.attrs = attrs;
  }
  _createClass(Mark, [{
    key: "addToSet",
    value: function addToSet(set) {
      var copy,
        placed = false;
      for (var i = 0; i < set.length; i++) {
        var other = set[i];
        if (this.eq(other)) return set;
        if (this.type.excludes(other.type)) {
          if (!copy) copy = set.slice(0, i);
        } else if (other.type.excludes(this.type)) {
          return set;
        } else {
          if (!placed && other.type.rank > this.type.rank) {
            if (!copy) copy = set.slice(0, i);
            copy.push(this);
            placed = true;
          }
          if (copy) copy.push(other);
        }
      }
      if (!copy) copy = set.slice();
      if (!placed) copy.push(this);
      return copy;
    }
  }, {
    key: "removeFromSet",
    value: function removeFromSet(set) {
      for (var i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
      return set;
    }
  }, {
    key: "isInSet",
    value: function isInSet(set) {
      for (var i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
      return false;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {
        type: this.type.name
      };
      for (var _ in this.attrs) {
        obj.attrs = this.attrs;
        break;
      }
      return obj;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
      var type = schema.marks[json.type];
      if (!type) throw new RangeError("There is no mark type ".concat(json.type, " in this schema"));
      var mark = type.create(json.attrs);
      type.checkAttrs(mark.attrs);
      return mark;
    }
  }, {
    key: "sameSet",
    value: function sameSet(a, b) {
      if (a == b) return true;
      if (a.length != b.length) return false;
      for (var i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
      return true;
    }
  }, {
    key: "setFrom",
    value: function setFrom(marks) {
      if (!marks || Array.isArray(marks) && marks.length == 0) return Mark.none;
      if (marks instanceof Mark) return [marks];
      var copy = marks.slice();
      copy.sort(function (a, b) {
        return a.type.rank - b.type.rank;
      });
      return copy;
    }
  }]);
  return Mark;
}();
Mark.none = [];
var ReplaceError = function (_Error) {
  _inherits(ReplaceError, _Error);
  var _super = _createSuper(ReplaceError);
  function ReplaceError() {
    _classCallCheck(this, ReplaceError);
    return _super.apply(this, arguments);
  }
  return _createClass(ReplaceError);
}(_wrapNativeSuper(Error));
var Slice = function () {
  function Slice(content, openStart, openEnd) {
    _classCallCheck(this, Slice);
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  _createClass(Slice, [{
    key: "size",
    get: function get() {
      return this.content.size - this.openStart - this.openEnd;
    }
  }, {
    key: "insertAt",
    value: function insertAt(pos, fragment) {
      var content = insertInto(this.content, pos + this.openStart, fragment);
      return content && new Slice(content, this.openStart, this.openEnd);
    }
  }, {
    key: "removeBetween",
    value: function removeBetween(from, to) {
      return new Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      if (!this.content.size) return null;
      var json = {
        content: this.content.toJSON()
      };
      if (this.openStart > 0) json.openStart = this.openStart;
      if (this.openEnd > 0) json.openEnd = this.openEnd;
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (!json) return Slice.empty;
      var openStart = json.openStart || 0,
        openEnd = json.openEnd || 0;
      if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
      return new Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
    }
  }, {
    key: "maxOpen",
    value: function maxOpen(fragment) {
      var openIsolating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var openStart = 0,
        openEnd = 0;
      for (var n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
      for (var _n = fragment.lastChild; _n && !_n.isLeaf && (openIsolating || !_n.type.spec.isolating); _n = _n.lastChild) openEnd++;
      return new Slice(fragment, openStart, openEnd);
    }
  }]);
  return Slice;
}();
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  var _content$findIndex = content.findIndex(from),
    index = _content$findIndex.index,
    offset = _content$findIndex.offset,
    child = content.maybeChild(index);
  var _content$findIndex2 = content.findIndex(to),
    indexTo = _content$findIndex2.index,
    offsetTo = _content$findIndex2.offset;
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index != indexTo) throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
  var _content$findIndex3 = content.findIndex(dist),
    index = _content$findIndex3.index,
    offset = _content$findIndex3.offset,
    child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  var inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner));
}
function _replace($from, $to, slice) {
  if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  var index = $from.index(depth),
    node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    var inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    var parent = $from.parent,
      content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    var _prepareSliceForRepla = prepareSliceForReplace(slice, $from),
      start = _prepareSliceForRepla.start,
      end = _prepareSliceForRepla.end;
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  var node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  var last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);else target.push(child);
}
function addRange($start, $end, depth, target) {
  var node = ($end || $start).node(depth);
  var startIndex = 0,
    endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (var i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  var openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  var openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  var content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  var content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    var type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  var extra = $along.depth - slice.openStart,
    parent = $along.node(extra);
  var node = parent.copy(slice.content);
  for (var i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}
var ResolvedPos = function () {
  function ResolvedPos(pos, path, parentOffset) {
    _classCallCheck(this, ResolvedPos);
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  _createClass(ResolvedPos, [{
    key: "resolveDepth",
    value: function resolveDepth(val) {
      if (val == null) return this.depth;
      if (val < 0) return this.depth + val;
      return val;
    }
  }, {
    key: "parent",
    get: function get() {
      return this.node(this.depth);
    }
  }, {
    key: "doc",
    get: function get() {
      return this.node(0);
    }
  }, {
    key: "node",
    value: function node(depth) {
      return this.path[this.resolveDepth(depth) * 3];
    }
  }, {
    key: "index",
    value: function index(depth) {
      return this.path[this.resolveDepth(depth) * 3 + 1];
    }
  }, {
    key: "indexAfter",
    value: function indexAfter(depth) {
      depth = this.resolveDepth(depth);
      return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
    }
  }, {
    key: "start",
    value: function start(depth) {
      depth = this.resolveDepth(depth);
      return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    }
  }, {
    key: "end",
    value: function end(depth) {
      depth = this.resolveDepth(depth);
      return this.start(depth) + this.node(depth).content.size;
    }
  }, {
    key: "before",
    value: function before(depth) {
      depth = this.resolveDepth(depth);
      if (!depth) throw new RangeError("There is no position before the top-level node");
      return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
    }
  }, {
    key: "after",
    value: function after(depth) {
      depth = this.resolveDepth(depth);
      if (!depth) throw new RangeError("There is no position after the top-level node");
      return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
    }
  }, {
    key: "textOffset",
    get: function get() {
      return this.pos - this.path[this.path.length - 1];
    }
  }, {
    key: "nodeAfter",
    get: function get() {
      var parent = this.parent,
        index = this.index(this.depth);
      if (index == parent.childCount) return null;
      var dOff = this.pos - this.path[this.path.length - 1],
        child = parent.child(index);
      return dOff ? parent.child(index).cut(dOff) : child;
    }
  }, {
    key: "nodeBefore",
    get: function get() {
      var index = this.index(this.depth);
      var dOff = this.pos - this.path[this.path.length - 1];
      if (dOff) return this.parent.child(index).cut(0, dOff);
      return index == 0 ? null : this.parent.child(index - 1);
    }
  }, {
    key: "posAtIndex",
    value: function posAtIndex(index, depth) {
      depth = this.resolveDepth(depth);
      var node = this.path[depth * 3],
        pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
      for (var i = 0; i < index; i++) pos += node.child(i).nodeSize;
      return pos;
    }
  }, {
    key: "marks",
    value: function marks() {
      var parent = this.parent,
        index = this.index();
      if (parent.content.size == 0) return Mark.none;
      if (this.textOffset) return parent.child(index).marks;
      var main = parent.maybeChild(index - 1),
        other = parent.maybeChild(index);
      if (!main) {
        var tmp = main;
        main = other;
        other = tmp;
      }
      var marks = main.marks;
      for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
      return marks;
    }
  }, {
    key: "marksAcross",
    value: function marksAcross($end) {
      var after = this.parent.maybeChild(this.index());
      if (!after || !after.isInline) return null;
      var marks = after.marks,
        next = $end.parent.maybeChild($end.index());
      for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
      return marks;
    }
  }, {
    key: "sharedDepth",
    value: function sharedDepth(pos) {
      for (var depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
      return 0;
    }
  }, {
    key: "blockRange",
    value: function blockRange() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var pred = arguments.length > 1 ? arguments[1] : undefined;
      if (other.pos < this.pos) return other.blockRange(this);
      for (var d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
      return null;
    }
  }, {
    key: "sameParent",
    value: function sameParent(other) {
      return this.pos - this.parentOffset == other.pos - other.parentOffset;
    }
  }, {
    key: "max",
    value: function max(other) {
      return other.pos > this.pos ? other : this;
    }
  }, {
    key: "min",
    value: function min(other) {
      return other.pos < this.pos ? other : this;
    }
  }, {
    key: "toString",
    value: function toString() {
      var str = "";
      for (var i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
      return str + ":" + this.parentOffset;
    }
  }], [{
    key: "resolve",
    value: function resolve(doc, pos) {
      if (!(pos >= 0 && pos <= doc.content.size)) throw new RangeError("Position " + pos + " out of range");
      var path = [];
      var start = 0,
        parentOffset = pos;
      for (var node = doc;;) {
        var _node$content$findInd = node.content.findIndex(parentOffset),
          index = _node$content$findInd.index,
          offset = _node$content$findInd.offset;
        var rem = parentOffset - offset;
        path.push(node, index, start + offset);
        if (!rem) break;
        node = node.child(index);
        if (node.isText) break;
        parentOffset = rem - 1;
        start += offset + 1;
      }
      return new ResolvedPos(pos, path, parentOffset);
    }
  }, {
    key: "resolveCached",
    value: function resolveCached(doc, pos) {
      var cache = resolveCache.get(doc);
      if (cache) {
        for (var i = 0; i < cache.elts.length; i++) {
          var elt = cache.elts[i];
          if (elt.pos == pos) return elt;
        }
      } else {
        resolveCache.set(doc, cache = new ResolveCache());
      }
      var result = cache.elts[cache.i] = ResolvedPos.resolve(doc, pos);
      cache.i = (cache.i + 1) % resolveCacheSize;
      return result;
    }
  }]);
  return ResolvedPos;
}();
var ResolveCache = _createClass(function ResolveCache() {
  _classCallCheck(this, ResolveCache);
  this.elts = [];
  this.i = 0;
});
var resolveCacheSize = 12,
  resolveCache = new WeakMap();
var NodeRange = function () {
  function NodeRange($from, $to, depth) {
    _classCallCheck(this, NodeRange);
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  _createClass(NodeRange, [{
    key: "start",
    get: function get() {
      return this.$from.before(this.depth + 1);
    }
  }, {
    key: "end",
    get: function get() {
      return this.$to.after(this.depth + 1);
    }
  }, {
    key: "parent",
    get: function get() {
      return this.$from.node(this.depth);
    }
  }, {
    key: "startIndex",
    get: function get() {
      return this.$from.index(this.depth);
    }
  }, {
    key: "endIndex",
    get: function get() {
      return this.$to.indexAfter(this.depth);
    }
  }]);
  return NodeRange;
}();
var emptyAttrs = Object.create(null);
var Node = function () {
  function Node(type, attrs, content) {
    var marks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Mark.none;
    _classCallCheck(this, Node);
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  _createClass(Node, [{
    key: "nodeSize",
    get: function get() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
  }, {
    key: "childCount",
    get: function get() {
      return this.content.childCount;
    }
  }, {
    key: "child",
    value: function child(index) {
      return this.content.child(index);
    }
  }, {
    key: "maybeChild",
    value: function maybeChild(index) {
      return this.content.maybeChild(index);
    }
  }, {
    key: "forEach",
    value: function forEach(f) {
      this.content.forEach(f);
    }
  }, {
    key: "nodesBetween",
    value: function nodesBetween(from, to, f) {
      var startPos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      this.content.nodesBetween(from, to, f, startPos, this);
    }
  }, {
    key: "descendants",
    value: function descendants(f) {
      this.nodesBetween(0, this.content.size, f);
    }
  }, {
    key: "textContent",
    get: function get() {
      return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
  }, {
    key: "textBetween",
    value: function textBetween(from, to, blockSeparator, leafText) {
      return this.content.textBetween(from, to, blockSeparator, leafText);
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.content.firstChild;
    }
  }, {
    key: "lastChild",
    get: function get() {
      return this.content.lastChild;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this == other || this.sameMarkup(other) && this.content.eq(other.content);
    }
  }, {
    key: "sameMarkup",
    value: function sameMarkup(other) {
      return this.hasMarkup(other.type, other.attrs, other.marks);
    }
  }, {
    key: "hasMarkup",
    value: function hasMarkup(type, attrs, marks) {
      return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
    }
  }, {
    key: "copy",
    value: function copy() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (content == this.content) return this;
      return new Node(this.type, this.attrs, content, this.marks);
    }
  }, {
    key: "mark",
    value: function mark(marks) {
      return marks == this.marks ? this : new Node(this.type, this.attrs, this.content, marks);
    }
  }, {
    key: "cut",
    value: function cut(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.content.size;
      if (from == 0 && to == this.content.size) return this;
      return this.copy(this.content.cut(from, to));
    }
  }, {
    key: "slice",
    value: function slice(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.content.size;
      var includeParents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (from == to) return Slice.empty;
      var $from = this.resolve(from),
        $to = this.resolve(to);
      var depth = includeParents ? 0 : $from.sharedDepth(to);
      var start = $from.start(depth),
        node = $from.node(depth);
      var content = node.content.cut($from.pos - start, $to.pos - start);
      return new Slice(content, $from.depth - depth, $to.depth - depth);
    }
  }, {
    key: "replace",
    value: function replace(from, to, slice) {
      return _replace(this.resolve(from), this.resolve(to), slice);
    }
  }, {
    key: "nodeAt",
    value: function nodeAt(pos) {
      for (var node = this;;) {
        var _node$content$findInd2 = node.content.findIndex(pos),
          index = _node$content$findInd2.index,
          offset = _node$content$findInd2.offset;
        node = node.maybeChild(index);
        if (!node) return null;
        if (offset == pos || node.isText) return node;
        pos -= offset + 1;
      }
    }
  }, {
    key: "childAfter",
    value: function childAfter(pos) {
      var _this$content$findInd = this.content.findIndex(pos),
        index = _this$content$findInd.index,
        offset = _this$content$findInd.offset;
      return {
        node: this.content.maybeChild(index),
        index: index,
        offset: offset
      };
    }
  }, {
    key: "childBefore",
    value: function childBefore(pos) {
      if (pos == 0) return {
        node: null,
        index: 0,
        offset: 0
      };
      var _this$content$findInd2 = this.content.findIndex(pos),
        index = _this$content$findInd2.index,
        offset = _this$content$findInd2.offset;
      if (offset < pos) return {
        node: this.content.child(index),
        index: index,
        offset: offset
      };
      var node = this.content.child(index - 1);
      return {
        node: node,
        index: index - 1,
        offset: offset - node.nodeSize
      };
    }
  }, {
    key: "resolve",
    value: function resolve(pos) {
      return ResolvedPos.resolveCached(this, pos);
    }
  }, {
    key: "resolveNoCache",
    value: function resolveNoCache(pos) {
      return ResolvedPos.resolve(this, pos);
    }
  }, {
    key: "rangeHasMark",
    value: function rangeHasMark(from, to, type) {
      var found = false;
      if (to > from) this.nodesBetween(from, to, function (node) {
        if (type.isInSet(node.marks)) found = true;
        return !found;
      });
      return found;
    }
  }, {
    key: "isBlock",
    get: function get() {
      return this.type.isBlock;
    }
  }, {
    key: "isTextblock",
    get: function get() {
      return this.type.isTextblock;
    }
  }, {
    key: "inlineContent",
    get: function get() {
      return this.type.inlineContent;
    }
  }, {
    key: "isInline",
    get: function get() {
      return this.type.isInline;
    }
  }, {
    key: "isText",
    get: function get() {
      return this.type.isText;
    }
  }, {
    key: "isLeaf",
    get: function get() {
      return this.type.isLeaf;
    }
  }, {
    key: "isAtom",
    get: function get() {
      return this.type.isAtom;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
      var name = this.type.name;
      if (this.content.size) name += "(" + this.content.toStringInner() + ")";
      return wrapMarks(this.marks, name);
    }
  }, {
    key: "contentMatchAt",
    value: function contentMatchAt(index) {
      var match = this.type.contentMatch.matchFragment(this.content, 0, index);
      if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
      return match;
    }
  }, {
    key: "canReplace",
    value: function canReplace(from, to) {
      var replacement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Fragment.empty;
      var start = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var end = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : replacement.childCount;
      var one = this.contentMatchAt(from).matchFragment(replacement, start, end);
      var two = one && one.matchFragment(this.content, to);
      if (!two || !two.validEnd) return false;
      for (var i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
      return true;
    }
  }, {
    key: "canReplaceWith",
    value: function canReplaceWith(from, to, type, marks) {
      if (marks && !this.type.allowsMarks(marks)) return false;
      var start = this.contentMatchAt(from).matchType(type);
      var end = start && start.matchFragment(this.content, to);
      return end ? end.validEnd : false;
    }
  }, {
    key: "canAppend",
    value: function canAppend(other) {
      if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);else return this.type.compatibleContent(other.type);
    }
  }, {
    key: "check",
    value: function check() {
      this.type.checkContent(this.content);
      this.type.checkAttrs(this.attrs);
      var copy = Mark.none;
      for (var i = 0; i < this.marks.length; i++) {
        var mark = this.marks[i];
        mark.type.checkAttrs(mark.attrs);
        copy = mark.addToSet(copy);
      }
      if (!Mark.sameSet(copy, this.marks)) throw new RangeError("Invalid collection of marks for node ".concat(this.type.name, ": ").concat(this.marks.map(function (m) {
        return m.type.name;
      })));
      this.content.forEach(function (node) {
        return node.check();
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {
        type: this.type.name
      };
      for (var _ in this.attrs) {
        obj.attrs = this.attrs;
        break;
      }
      if (this.content.size) obj.content = this.content.toJSON();
      if (this.marks.length) obj.marks = this.marks.map(function (n) {
        return n.toJSON();
      });
      return obj;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (!json) throw new RangeError("Invalid input for Node.fromJSON");
      var marks = undefined;
      if (json.marks) {
        if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
        marks = json.marks.map(schema.markFromJSON);
      }
      if (json.type == "text") {
        if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
        return schema.text(json.text, marks);
      }
      var content = Fragment.fromJSON(schema, json.content);
      var node = schema.nodeType(json.type).create(json.attrs, content, marks);
      node.type.checkAttrs(node.attrs);
      return node;
    }
  }]);
  return Node;
}();
Node.prototype.text = undefined;
var TextNode = function (_Node) {
  _inherits(TextNode, _Node);
  var _super2 = _createSuper(TextNode);
  function TextNode(type, attrs, content, marks) {
    var _this;
    _classCallCheck(this, TextNode);
    _this = _super2.call(this, type, attrs, null, marks);
    if (!content) throw new RangeError("Empty text nodes are not allowed");
    _this.text = content;
    return _this;
  }
  _createClass(TextNode, [{
    key: "toString",
    value: function toString() {
      if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
      return wrapMarks(this.marks, JSON.stringify(this.text));
    }
  }, {
    key: "textContent",
    get: function get() {
      return this.text;
    }
  }, {
    key: "textBetween",
    value: function textBetween(from, to) {
      return this.text.slice(from, to);
    }
  }, {
    key: "nodeSize",
    get: function get() {
      return this.text.length;
    }
  }, {
    key: "mark",
    value: function mark(marks) {
      return marks == this.marks ? this : new TextNode(this.type, this.attrs, this.text, marks);
    }
  }, {
    key: "withText",
    value: function withText(text) {
      if (text == this.text) return this;
      return new TextNode(this.type, this.attrs, text, this.marks);
    }
  }, {
    key: "cut",
    value: function cut() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.text.length;
      if (from == 0 && to == this.text.length) return this;
      return this.withText(this.text.slice(from, to));
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this.sameMarkup(other) && this.text == other.text;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var base = _get(_getPrototypeOf(TextNode.prototype), "toJSON", this).call(this);
      base.text = this.text;
      return base;
    }
  }]);
  return TextNode;
}(Node);
function wrapMarks(marks, str) {
  for (var i = marks.length - 1; i >= 0; i--) str = marks[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = function () {
  function ContentMatch(validEnd) {
    _classCallCheck(this, ContentMatch);
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  _createClass(ContentMatch, [{
    key: "matchType",
    value: function matchType(type) {
      for (var i = 0; i < this.next.length; i++) if (this.next[i].type == type) return this.next[i].next;
      return null;
    }
  }, {
    key: "matchFragment",
    value: function matchFragment(frag) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : frag.childCount;
      var cur = this;
      for (var i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
      return cur;
    }
  }, {
    key: "inlineContent",
    get: function get() {
      return this.next.length != 0 && this.next[0].type.isInline;
    }
  }, {
    key: "defaultType",
    get: function get() {
      for (var i = 0; i < this.next.length; i++) {
        var type = this.next[i].type;
        if (!(type.isText || type.hasRequiredAttrs())) return type;
      }
      return null;
    }
  }, {
    key: "compatible",
    value: function compatible(other) {
      for (var i = 0; i < this.next.length; i++) for (var j = 0; j < other.next.length; j++) if (this.next[i].type == other.next[j].type) return true;
      return false;
    }
  }, {
    key: "fillBefore",
    value: function fillBefore(after) {
      var toEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var seen = [this];
      function search(match, types) {
        var finished = match.matchFragment(after, startIndex);
        if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map(function (tp) {
          return tp.createAndFill();
        }));
        for (var i = 0; i < match.next.length; i++) {
          var _match$next$i = match.next[i],
            type = _match$next$i.type,
            next = _match$next$i.next;
          if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
            seen.push(next);
            var _found = search(next, types.concat(type));
            if (_found) return _found;
          }
        }
        return null;
      }
      return search(this, []);
    }
  }, {
    key: "findWrapping",
    value: function findWrapping(target) {
      for (var i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
      var computed = this.computeWrapping(target);
      this.wrapCache.push(target, computed);
      return computed;
    }
  }, {
    key: "computeWrapping",
    value: function computeWrapping(target) {
      var seen = Object.create(null),
        active = [{
          match: this,
          type: null,
          via: null
        }];
      while (active.length) {
        var current = active.shift(),
          match = current.match;
        if (match.matchType(target)) {
          var result = [];
          for (var obj = current; obj.type; obj = obj.via) result.push(obj.type);
          return result.reverse();
        }
        for (var i = 0; i < match.next.length; i++) {
          var _match$next$i2 = match.next[i],
            type = _match$next$i2.type,
            next = _match$next$i2.next;
          if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
            active.push({
              match: type.contentMatch,
              type: type,
              via: current
            });
            seen[type.name] = true;
          }
        }
      }
      return null;
    }
  }, {
    key: "edgeCount",
    get: function get() {
      return this.next.length;
    }
  }, {
    key: "edge",
    value: function edge(n) {
      if (n >= this.next.length) throw new RangeError("There's no ".concat(n, "th edge in this content match"));
      return this.next[n];
    }
  }, {
    key: "toString",
    value: function toString() {
      var seen = [];
      function scan(m) {
        seen.push(m);
        for (var i = 0; i < m.next.length; i++) if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
      }
      scan(this);
      return seen.map(function (m, i) {
        var out = i + (m.validEnd ? "*" : " ") + " ";
        for (var _i = 0; _i < m.next.length; _i++) out += (_i ? ", " : "") + m.next[_i].type.name + "->" + seen.indexOf(m.next[_i].next);
        return out;
      }).join("\n");
    }
  }], [{
    key: "parse",
    value: function parse(string, nodeTypes) {
      var stream = new TokenStream(string, nodeTypes);
      if (stream.next == null) return ContentMatch.empty;
      var expr = parseExpr(stream);
      if (stream.next) stream.err("Unexpected trailing text");
      var match = dfa(nfa(expr));
      checkForDeadEnds(match, stream);
      return match;
    }
  }]);
  return ContentMatch;
}();
ContentMatch.empty = new ContentMatch(true);
var TokenStream = function () {
  function TokenStream(string, nodeTypes) {
    _classCallCheck(this, TokenStream);
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
    if (this.tokens[0] == "") this.tokens.shift();
  }
  _createClass(TokenStream, [{
    key: "next",
    get: function get() {
      return this.tokens[this.pos];
    }
  }, {
    key: "eat",
    value: function eat(tok) {
      return this.next == tok && (this.pos++ || true);
    }
  }, {
    key: "err",
    value: function err(str) {
      throw new SyntaxError(str + " (in content expression '" + this.string + "')");
    }
  }]);
  return TokenStream;
}();
function parseExpr(stream) {
  var exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs: exprs
  };
}
function parseExprSeq(stream) {
  var exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs: exprs
  };
}
function parseExprSubscript(stream) {
  var expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+")) expr = {
      type: "plus",
      expr: expr
    };else if (stream.eat("*")) expr = {
      type: "star",
      expr: expr
    };else if (stream.eat("?")) expr = {
      type: "opt",
      expr: expr
    };else if (stream.eat("{")) expr = parseExprRange(stream, expr);else break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
  var result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  var min = parseNum(stream),
    max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") max = parseNum(stream);else max = -1;
  }
  if (!stream.eat("}")) stream.err("Unclosed braced range");
  return {
    type: "range",
    min: min,
    max: max,
    expr: expr
  };
}
function resolveName(stream, name) {
  var types = stream.nodeTypes,
    type = types[name];
  if (type) return [type];
  var result = [];
  for (var typeName in types) {
    var _type = types[typeName];
    if (_type.isInGroup(name)) result.push(_type);
  }
  if (result.length == 0) stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    var expr = parseExpr(stream);
    if (!stream.eat(")")) stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    var exprs = resolveName(stream, stream.next).map(function (type) {
      if (stream.inline == null) stream.inline = type.isInline;else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs: exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  var nfa = [[]];
  connect(compile(expr, 0), node());
  return nfa;
  function node() {
    return nfa.push([]) - 1;
  }
  function edge(from, to, term) {
    var edge = {
      term: term,
      to: to
    };
    nfa[from].push(edge);
    return edge;
  }
  function connect(edges, to) {
    edges.forEach(function (edge) {
      return edge.to = to;
    });
  }
  function compile(expr, from) {
    if (expr.type == "choice") {
      return expr.exprs.reduce(function (out, expr) {
        return out.concat(compile(expr, from));
      }, []);
    } else if (expr.type == "seq") {
      for (var i = 0;; i++) {
        var next = compile(expr.exprs[i], from);
        if (i == expr.exprs.length - 1) return next;
        connect(next, from = node());
      }
    } else if (expr.type == "star") {
      var loop = node();
      edge(from, loop);
      connect(compile(expr.expr, loop), loop);
      return [edge(loop)];
    } else if (expr.type == "plus") {
      var _loop = node();
      connect(compile(expr.expr, from), _loop);
      connect(compile(expr.expr, _loop), _loop);
      return [edge(_loop)];
    } else if (expr.type == "opt") {
      return [edge(from)].concat(compile(expr.expr, from));
    } else if (expr.type == "range") {
      var cur = from;
      for (var _i2 = 0; _i2 < expr.min; _i2++) {
        var _next = node();
        connect(compile(expr.expr, cur), _next);
        cur = _next;
      }
      if (expr.max == -1) {
        connect(compile(expr.expr, cur), cur);
      } else {
        for (var _i3 = expr.min; _i3 < expr.max; _i3++) {
          var _next2 = node();
          edge(cur, _next2);
          connect(compile(expr.expr, cur), _next2);
          cur = _next2;
        }
      }
      return [edge(cur)];
    } else if (expr.type == "name") {
      return [edge(from, undefined, expr.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa, node) {
  var result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node) {
    var edges = nfa[node];
    if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
    result.push(node);
    for (var i = 0; i < edges.length; i++) {
      var _edges$i = edges[i],
        term = _edges$i.term,
        to = _edges$i.to;
      if (!term && result.indexOf(to) == -1) scan(to);
    }
  }
}
function dfa(nfa) {
  var labeled = Object.create(null);
  return explore(nullFrom(nfa, 0));
  function explore(states) {
    var out = [];
    states.forEach(function (node) {
      nfa[node].forEach(function (_ref) {
        var term = _ref.term,
          to = _ref.to;
        if (!term) return;
        var set;
        for (var i = 0; i < out.length; i++) if (out[i][0] == term) set = out[i][1];
        nullFrom(nfa, to).forEach(function (node) {
          if (!set) out.push([term, set = []]);
          if (set.indexOf(node) == -1) set.push(node);
        });
      });
    });
    var state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa.length - 1) > -1);
    for (var i = 0; i < out.length; i++) {
      var _states = out[i][1].sort(cmp);
      state.next.push({
        type: out[i][0],
        next: labeled[_states.join(",")] || explore(_states)
      });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (var i = 0, work = [match]; i < work.length; i++) {
    var state = work[i],
      dead = !state.validEnd,
      nodes = [];
    for (var j = 0; j < state.next.length; j++) {
      var _state$next$j = state.next[j],
        type = _state$next$j.type,
        next = _state$next$j.next;
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
      if (work.indexOf(next) == -1) work.push(next);
    }
    if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function defaultAttrs(attrs) {
  var defaults = Object.create(null);
  for (var attrName in attrs) {
    var attr = attrs[attrName];
    if (!attr.hasDefault) return null;
    defaults[attrName] = attr["default"];
  }
  return defaults;
}
function _computeAttrs(attrs, value) {
  var built = Object.create(null);
  for (var name in attrs) {
    var given = value && value[name];
    if (given === undefined) {
      var attr = attrs[name];
      if (attr.hasDefault) given = attr["default"];else throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function _checkAttrs(attrs, values, type, name) {
  for (var _name in values) if (!(_name in attrs)) throw new RangeError("Unsupported attribute ".concat(_name, " for ").concat(type, " of type ").concat(_name));
  for (var _name2 in attrs) {
    var attr = attrs[_name2];
    if (attr.validate) attr.validate(values[_name2]);
  }
}
function initAttrs(typeName, attrs) {
  var result = Object.create(null);
  if (attrs) for (var name in attrs) result[name] = new Attribute(typeName, name, attrs[name]);
  return result;
}
var NodeType = function () {
  function NodeType(name, schema, spec) {
    _classCallCheck(this, NodeType);
    this.name = name;
    this.schema = schema;
    this.spec = spec;
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(name, spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  _createClass(NodeType, [{
    key: "isInline",
    get: function get() {
      return !this.isBlock;
    }
  }, {
    key: "isTextblock",
    get: function get() {
      return this.isBlock && this.inlineContent;
    }
  }, {
    key: "isLeaf",
    get: function get() {
      return this.contentMatch == ContentMatch.empty;
    }
  }, {
    key: "isAtom",
    get: function get() {
      return this.isLeaf || !!this.spec.atom;
    }
  }, {
    key: "isInGroup",
    value: function isInGroup(group) {
      return this.groups.indexOf(group) > -1;
    }
  }, {
    key: "whitespace",
    get: function get() {
      return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
  }, {
    key: "hasRequiredAttrs",
    value: function hasRequiredAttrs() {
      for (var n in this.attrs) if (this.attrs[n].isRequired) return true;
      return false;
    }
  }, {
    key: "compatibleContent",
    value: function compatibleContent(other) {
      return this == other || this.contentMatch.compatible(other.contentMatch);
    }
  }, {
    key: "computeAttrs",
    value: function computeAttrs(attrs) {
      if (!attrs && this.defaultAttrs) return this.defaultAttrs;else return _computeAttrs(this.attrs, attrs);
    }
  }, {
    key: "create",
    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var content = arguments.length > 1 ? arguments[1] : undefined;
      var marks = arguments.length > 2 ? arguments[2] : undefined;
      if (this.isText) throw new Error("NodeType.create can't construct text nodes");
      return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
    }
  }, {
    key: "createChecked",
    value: function createChecked() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var content = arguments.length > 1 ? arguments[1] : undefined;
      var marks = arguments.length > 2 ? arguments[2] : undefined;
      content = Fragment.from(content);
      this.checkContent(content);
      return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
    }
  }, {
    key: "createAndFill",
    value: function createAndFill() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var content = arguments.length > 1 ? arguments[1] : undefined;
      var marks = arguments.length > 2 ? arguments[2] : undefined;
      attrs = this.computeAttrs(attrs);
      content = Fragment.from(content);
      if (content.size) {
        var before = this.contentMatch.fillBefore(content);
        if (!before) return null;
        content = before.append(content);
      }
      var matched = this.contentMatch.matchFragment(content);
      var after = matched && matched.fillBefore(Fragment.empty, true);
      if (!after) return null;
      return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
    }
  }, {
    key: "validContent",
    value: function validContent(content) {
      var result = this.contentMatch.matchFragment(content);
      if (!result || !result.validEnd) return false;
      for (var i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return false;
      return true;
    }
  }, {
    key: "checkContent",
    value: function checkContent(content) {
      if (!this.validContent(content)) throw new RangeError("Invalid content for node ".concat(this.name, ": ").concat(content.toString().slice(0, 50)));
    }
  }, {
    key: "checkAttrs",
    value: function checkAttrs(attrs) {
      _checkAttrs(this.attrs, attrs, "node", this.name);
    }
  }, {
    key: "allowsMarkType",
    value: function allowsMarkType(markType) {
      return this.markSet == null || this.markSet.indexOf(markType) > -1;
    }
  }, {
    key: "allowsMarks",
    value: function allowsMarks(marks) {
      if (this.markSet == null) return true;
      for (var i = 0; i < marks.length; i++) if (!this.allowsMarkType(marks[i].type)) return false;
      return true;
    }
  }, {
    key: "allowedMarks",
    value: function allowedMarks(marks) {
      if (this.markSet == null) return marks;
      var copy;
      for (var i = 0; i < marks.length; i++) {
        if (!this.allowsMarkType(marks[i].type)) {
          if (!copy) copy = marks.slice(0, i);
        } else if (copy) {
          copy.push(marks[i]);
        }
      }
      return !copy ? marks : copy.length ? copy : Mark.none;
    }
  }], [{
    key: "compile",
    value: function compile(nodes, schema) {
      var result = Object.create(null);
      nodes.forEach(function (name, spec) {
        return result[name] = new NodeType(name, schema, spec);
      });
      var topType = schema.spec.topNode || "doc";
      if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
      if (!result.text) throw new RangeError("Every schema needs a 'text' type");
      for (var _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
      return result;
    }
  }]);
  return NodeType;
}();
function validateType(typeName, attrName, type) {
  var types = type.split("|");
  return function (value) {
    var name = value === null ? "null" : _typeof(value);
    if (types.indexOf(name) < 0) throw new RangeError("Expected value of type ".concat(types, " for attribute ").concat(attrName, " on type ").concat(typeName, ", got ").concat(name));
  };
}
var Attribute = function () {
  function Attribute(typeName, attrName, options) {
    _classCallCheck(this, Attribute);
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this["default"] = options["default"];
    this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
  }
  _createClass(Attribute, [{
    key: "isRequired",
    get: function get() {
      return !this.hasDefault;
    }
  }]);
  return Attribute;
}();
var MarkType = function () {
  function MarkType(name, rank, schema, spec) {
    _classCallCheck(this, MarkType);
    this.name = name;
    this.rank = rank;
    this.schema = schema;
    this.spec = spec;
    this.attrs = initAttrs(name, spec.attrs);
    this.excluded = null;
    var defaults = defaultAttrs(this.attrs);
    this.instance = defaults ? new Mark(this, defaults) : null;
  }
  _createClass(MarkType, [{
    key: "create",
    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!attrs && this.instance) return this.instance;
      return new Mark(this, _computeAttrs(this.attrs, attrs));
    }
  }, {
    key: "removeFromSet",
    value: function removeFromSet(set) {
      for (var i = 0; i < set.length; i++) if (set[i].type == this) {
        set = set.slice(0, i).concat(set.slice(i + 1));
        i--;
      }
      return set;
    }
  }, {
    key: "isInSet",
    value: function isInSet(set) {
      for (var i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
    }
  }, {
    key: "checkAttrs",
    value: function checkAttrs(attrs) {
      _checkAttrs(this.attrs, attrs, "mark", this.name);
    }
  }, {
    key: "excludes",
    value: function excludes(other) {
      return this.excluded.indexOf(other) > -1;
    }
  }], [{
    key: "compile",
    value: function compile(marks, schema) {
      var result = Object.create(null),
        rank = 0;
      marks.forEach(function (name, spec) {
        return result[name] = new MarkType(name, rank++, schema, spec);
      });
      return result;
    }
  }]);
  return MarkType;
}();
var Schema = function () {
  function Schema(spec) {
    _classCallCheck(this, Schema);
    this.linebreakReplacement = null;
    this.cached = Object.create(null);
    var instanceSpec = this.spec = {};
    for (var prop in spec) instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = OrderedMap.from(spec.nodes), instanceSpec.marks = OrderedMap.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    var contentExprCache = Object.create(null);
    for (var _prop in this.nodes) {
      if (_prop in this.marks) throw new RangeError(_prop + " can not be both a node and a mark");
      var type = this.nodes[_prop],
        contentExpr = type.spec.content || "",
        markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (var _prop2 in this.marks) {
      var _type2 = this.marks[_prop2],
        excl = _type2.spec.excludes;
      _type2.excluded = excl == null ? [_type2] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this);
    this.markFromJSON = this.markFromJSON.bind(this);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = Object.create(null);
  }
  _createClass(Schema, [{
    key: "node",
    value: function node(type) {
      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var content = arguments.length > 2 ? arguments[2] : undefined;
      var marks = arguments.length > 3 ? arguments[3] : undefined;
      if (typeof type == "string") type = this.nodeType(type);else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
      return type.createChecked(attrs, content, marks);
    }
  }, {
    key: "text",
    value: function text(_text, marks) {
      var type = this.nodes.text;
      return new TextNode(type, type.defaultAttrs, _text, Mark.setFrom(marks));
    }
  }, {
    key: "mark",
    value: function mark(type, attrs) {
      if (typeof type == "string") type = this.marks[type];
      return type.create(attrs);
    }
  }, {
    key: "nodeFromJSON",
    value: function nodeFromJSON(json) {
      return Node.fromJSON(this, json);
    }
  }, {
    key: "markFromJSON",
    value: function markFromJSON(json) {
      return Mark.fromJSON(this, json);
    }
  }, {
    key: "nodeType",
    value: function nodeType(name) {
      var found = this.nodes[name];
      if (!found) throw new RangeError("Unknown node type: " + name);
      return found;
    }
  }]);
  return Schema;
}();
function gatherMarks(schema, marks) {
  var found = [];
  for (var i = 0; i < marks.length; i++) {
    var name = marks[i],
      mark = schema.marks[name],
      ok = mark;
    if (mark) {
      found.push(mark);
    } else {
      for (var prop in schema.marks) {
        var _mark = schema.marks[prop];
        if (name == "_" || _mark.spec.group && _mark.spec.group.split(" ").indexOf(name) > -1) found.push(ok = _mark);
      }
    }
    if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
  }
  return found;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
var DOMParser = function () {
  function DOMParser(schema, rules) {
    var _this2 = this;
    _classCallCheck(this, DOMParser);
    this.schema = schema;
    this.rules = rules;
    this.tags = [];
    this.styles = [];
    var matchedStyles = this.matchedStyles = [];
    rules.forEach(function (rule) {
      if (isTagRule(rule)) {
        _this2.tags.push(rule);
      } else if (isStyleRule(rule)) {
        var prop = /[^=]*/.exec(rule.style)[0];
        if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
        _this2.styles.push(rule);
      }
    });
    this.normalizeLists = !this.tags.some(function (r) {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
      var node = schema.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  _createClass(DOMParser, [{
    key: "parse",
    value: function parse(dom) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var context = new ParseContext(this, options, false);
      context.addAll(dom, Mark.none, options.from, options.to);
      return context.finish();
    }
  }, {
    key: "parseSlice",
    value: function parseSlice(dom) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var context = new ParseContext(this, options, true);
      context.addAll(dom, Mark.none, options.from, options.to);
      return Slice.maxOpen(context.finish());
    }
  }, {
    key: "matchTag",
    value: function matchTag(dom, context, after) {
      for (var i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
        var rule = this.tags[i];
        if (matches(dom, rule.tag) && (rule.namespace === undefined || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
          if (rule.getAttrs) {
            var result = rule.getAttrs(dom);
            if (result === false) continue;
            rule.attrs = result || undefined;
          }
          return rule;
        }
      }
    }
  }, {
    key: "matchStyle",
    value: function matchStyle(prop, value, context, after) {
      for (var i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
        var rule = this.styles[i],
          style = rule.style;
        if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) || style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
        if (rule.getAttrs) {
          var result = rule.getAttrs(value);
          if (result === false) continue;
          rule.attrs = result || undefined;
        }
        return rule;
      }
    }
  }], [{
    key: "schemaRules",
    value: function schemaRules(schema) {
      var result = [];
      function insert(rule) {
        var priority = rule.priority == null ? 50 : rule.priority,
          i = 0;
        for (; i < result.length; i++) {
          var next = result[i],
            nextPriority = next.priority == null ? 50 : next.priority;
          if (nextPriority < priority) break;
        }
        result.splice(i, 0, rule);
      }
      var _loop2 = function _loop2(name) {
        var rules = schema.marks[name].spec.parseDOM;
        if (rules) rules.forEach(function (rule) {
          insert(rule = copy(rule));
          if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
        });
      };
      for (var name in schema.marks) {
        _loop2(name);
      }
      var _loop3 = function _loop3(_name3) {
        var rules = schema.nodes[_name3].spec.parseDOM;
        if (rules) rules.forEach(function (rule) {
          insert(rule = copy(rule));
          if (!(rule.node || rule.ignore || rule.mark)) rule.node = _name3;
        });
      };
      for (var _name3 in schema.nodes) {
        _loop3(_name3);
      }
      return result;
    }
  }, {
    key: "fromSchema",
    value: function fromSchema(schema) {
      return schema.cached.domParser || (schema.cached.domParser = new DOMParser(schema, DOMParser.schemaRules(schema)));
    }
  }]);
  return DOMParser;
}();
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = {
  ol: true,
  ul: true
};
var OPT_PRESERVE_WS = 1,
  OPT_PRESERVE_WS_FULL = 2,
  OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
  if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
var NodeContext = function () {
  function NodeContext(type, attrs, marks, solid, match, options) {
    _classCallCheck(this, NodeContext);
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.solid = solid;
    this.options = options;
    this.content = [];
    this.activeMarks = Mark.none;
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  _createClass(NodeContext, [{
    key: "findWrapping",
    value: function findWrapping(node) {
      if (!this.match) {
        if (!this.type) return [];
        var fill = this.type.contentMatch.fillBefore(Fragment.from(node));
        if (fill) {
          this.match = this.type.contentMatch.matchFragment(fill);
        } else {
          var start = this.type.contentMatch,
            wrap;
          if (wrap = start.findWrapping(node.type)) {
            this.match = start;
            return wrap;
          } else {
            return null;
          }
        }
      }
      return this.match.findWrapping(node.type);
    }
  }, {
    key: "finish",
    value: function finish(openEnd) {
      if (!(this.options & OPT_PRESERVE_WS)) {
        var last = this.content[this.content.length - 1],
          m;
        if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
          var text = last;
          if (last.text.length == m[0].length) this.content.pop();else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
        }
      }
      var content = Fragment.from(this.content);
      if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
      return this.type ? this.type.create(this.attrs, content, this.marks) : content;
    }
  }, {
    key: "inlineContext",
    value: function inlineContext(node) {
      if (this.type) return this.type.inlineContent;
      if (this.content.length) return this.content[0].isInline;
      return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
    }
  }]);
  return NodeContext;
}();
var ParseContext = function () {
  function ParseContext(parser, options, isOpen) {
    _classCallCheck(this, ParseContext);
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    var topNode = options.topNode,
      topContext;
    var topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  _createClass(ParseContext, [{
    key: "top",
    get: function get() {
      return this.nodes[this.open];
    }
  }, {
    key: "addDOM",
    value: function addDOM(dom, marks) {
      if (dom.nodeType == 3) this.addTextNode(dom, marks);else if (dom.nodeType == 1) this.addElement(dom, marks);
    }
  }, {
    key: "addTextNode",
    value: function addTextNode(dom, marks) {
      var value = dom.nodeValue;
      var top = this.top;
      if (top.options & OPT_PRESERVE_WS_FULL || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
        if (!(top.options & OPT_PRESERVE_WS)) {
          value = value.replace(/[ \t\r\n\u000c]+/g, " ");
          if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
            var nodeBefore = top.content[top.content.length - 1];
            var domNodeBefore = dom.previousSibling;
            if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == 'BR' || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
          }
        } else if (!(top.options & OPT_PRESERVE_WS_FULL)) {
          value = value.replace(/\r?\n|\r/g, " ");
        } else {
          value = value.replace(/\r\n?/g, "\n");
        }
        if (value) this.insertNode(this.parser.schema.text(value), marks);
        this.findInText(dom);
      } else {
        this.findInside(dom);
      }
    }
  }, {
    key: "addElement",
    value: function addElement(dom, marks, matchAfter) {
      var name = dom.nodeName.toLowerCase(),
        ruleID;
      if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
      var rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
      if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
        this.findInside(dom);
        this.ignoreFallback(dom, marks);
      } else if (!rule || rule.skip || rule.closeParent) {
        if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);else if (rule && rule.skip.nodeType) dom = rule.skip;
        var sync,
          top = this.top,
          oldNeedsBlock = this.needsBlock;
        if (blockTags.hasOwnProperty(name)) {
          if (top.content.length && top.content[0].isInline && this.open) {
            this.open--;
            top = this.top;
          }
          sync = true;
          if (!top.type) this.needsBlock = true;
        } else if (!dom.firstChild) {
          this.leafFallback(dom, marks);
          return;
        }
        var innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
        if (innerMarks) this.addAll(dom, innerMarks);
        if (sync) this.sync(top);
        this.needsBlock = oldNeedsBlock;
      } else {
        var _innerMarks = this.readStyles(dom, marks);
        if (_innerMarks) this.addElementByRule(dom, rule, _innerMarks, rule.consuming === false ? ruleID : undefined);
      }
    }
  }, {
    key: "leafFallback",
    value: function leafFallback(dom, marks) {
      if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
    }
  }, {
    key: "ignoreFallback",
    value: function ignoreFallback(dom, marks) {
      if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks);
    }
  }, {
    key: "readStyles",
    value: function readStyles(dom, marks) {
      var _this3 = this;
      var styles = dom.style;
      if (styles && styles.length) for (var i = 0; i < this.parser.matchedStyles.length; i++) {
        var name = this.parser.matchedStyles[i],
          value = styles.getPropertyValue(name);
        if (value) {
          var _loop4 = function _loop4(_after) {
              var rule = _this3.parser.matchStyle(name, value, _this3, _after);
              if (!rule) {
                after = _after;
                return 0;
              }
              if (rule.ignore) return {
                v: null
              };
              if (rule.clearMark) marks = marks.filter(function (m) {
                return !rule.clearMark(m);
              });else marks = marks.concat(_this3.parser.schema.marks[rule.mark].create(rule.attrs));
              if (rule.consuming === false) _after = rule;else {
                after = _after;
                return 0;
              }
              after = _after;
            },
            _ret;
          for (var after = undefined;;) {
            _ret = _loop4(after);
            if (_ret === 0) break;
            if (_ret) return _ret.v;
          }
        }
      }
      return marks;
    }
  }, {
    key: "addElementByRule",
    value: function addElementByRule(dom, rule, marks, continueAfter) {
      var _this4 = this;
      var sync, nodeType;
      if (rule.node) {
        nodeType = this.parser.schema.nodes[rule.node];
        if (!nodeType.isLeaf) {
          var inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
          if (inner) {
            sync = true;
            marks = inner;
          }
        } else if (!this.insertNode(nodeType.create(rule.attrs), marks)) {
          this.leafFallback(dom, marks);
        }
      } else {
        var markType = this.parser.schema.marks[rule.mark];
        marks = marks.concat(markType.create(rule.attrs));
      }
      var startIn = this.top;
      if (nodeType && nodeType.isLeaf) {
        this.findInside(dom);
      } else if (continueAfter) {
        this.addElement(dom, marks, continueAfter);
      } else if (rule.getContent) {
        this.findInside(dom);
        rule.getContent(dom, this.parser.schema).forEach(function (node) {
          return _this4.insertNode(node, marks);
        });
      } else {
        var contentDOM = dom;
        if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);else if (rule.contentElement) contentDOM = rule.contentElement;
        this.findAround(dom, contentDOM, true);
        this.addAll(contentDOM, marks);
        this.findAround(dom, contentDOM, false);
      }
      if (sync && this.sync(startIn)) this.open--;
    }
  }, {
    key: "addAll",
    value: function addAll(parent, marks, startIndex, endIndex) {
      var index = startIndex || 0;
      for (var dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
        this.findAtPoint(parent, index);
        this.addDOM(dom, marks);
      }
      this.findAtPoint(parent, index);
    }
  }, {
    key: "findPlace",
    value: function findPlace(node, marks) {
      var route, sync;
      for (var depth = this.open; depth >= 0; depth--) {
        var cx = this.nodes[depth];
        var _found2 = cx.findWrapping(node);
        if (_found2 && (!route || route.length > _found2.length)) {
          route = _found2;
          sync = cx;
          if (!_found2.length) break;
        }
        if (cx.solid) break;
      }
      if (!route) return null;
      this.sync(sync);
      for (var i = 0; i < route.length; i++) marks = this.enterInner(route[i], null, marks, false);
      return marks;
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, marks) {
      if (node.isInline && this.needsBlock && !this.top.type) {
        var block = this.textblockFromContext();
        if (block) marks = this.enterInner(block, null, marks);
      }
      var innerMarks = this.findPlace(node, marks);
      if (innerMarks) {
        this.closeExtra();
        var top = this.top;
        if (top.match) top.match = top.match.matchType(node.type);
        var nodeMarks = Mark.none;
        var _iterator = _createForOfIteratorHelper(innerMarks.concat(node.marks)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;
            if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        top.content.push(node.mark(nodeMarks));
        return true;
      }
      return false;
    }
  }, {
    key: "enter",
    value: function enter(type, attrs, marks, preserveWS) {
      var innerMarks = this.findPlace(type.create(attrs), marks);
      if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
      return innerMarks;
    }
  }, {
    key: "enterInner",
    value: function enterInner(type, attrs, marks) {
      var solid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var preserveWS = arguments.length > 4 ? arguments[4] : undefined;
      this.closeExtra();
      var top = this.top;
      top.match = top.match && top.match.matchType(type);
      var options = wsOptionsFor(type, preserveWS, top.options);
      if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
      var applyMarks = Mark.none;
      marks = marks.filter(function (m) {
        if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
          applyMarks = m.addToSet(applyMarks);
          return false;
        }
        return true;
      });
      this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
      this.open++;
      return marks;
    }
  }, {
    key: "closeExtra",
    value: function closeExtra() {
      var openEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var i = this.nodes.length - 1;
      if (i > this.open) {
        for (; i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
        this.nodes.length = this.open + 1;
      }
    }
  }, {
    key: "finish",
    value: function finish() {
      this.open = 0;
      this.closeExtra(this.isOpen);
      return this.nodes[0].finish(this.isOpen || this.options.topOpen);
    }
  }, {
    key: "sync",
    value: function sync(to) {
      for (var i = this.open; i >= 0; i--) if (this.nodes[i] == to) {
        this.open = i;
        return true;
      }
      return false;
    }
  }, {
    key: "currentPos",
    get: function get() {
      this.closeExtra();
      var pos = 0;
      for (var i = this.open; i >= 0; i--) {
        var content = this.nodes[i].content;
        for (var j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
        if (i) pos++;
      }
      return pos;
    }
  }, {
    key: "findAtPoint",
    value: function findAtPoint(parent, offset) {
      if (this.find) for (var i = 0; i < this.find.length; i++) {
        if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
      }
    }
  }, {
    key: "findInside",
    value: function findInside(parent) {
      if (this.find) for (var i = 0; i < this.find.length; i++) {
        if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
      }
    }
  }, {
    key: "findAround",
    value: function findAround(parent, content, before) {
      if (parent != content && this.find) for (var i = 0; i < this.find.length; i++) {
        if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
          var pos = content.compareDocumentPosition(this.find[i].node);
          if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
        }
      }
    }
  }, {
    key: "findInText",
    value: function findInText(textNode) {
      if (this.find) for (var i = 0; i < this.find.length; i++) {
        if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
      }
    }
  }, {
    key: "matchesContext",
    value: function matchesContext(context) {
      var _this5 = this;
      if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
      var parts = context.split("/");
      var option = this.options.context;
      var useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
      var minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
      var match = function match(i, depth) {
        for (; i >= 0; i--) {
          var part = parts[i];
          if (part == "") {
            if (i == parts.length - 1 || i == 0) continue;
            for (; depth >= minDepth; depth--) if (match(i - 1, depth)) return true;
            return false;
          } else {
            var next = depth > 0 || depth == 0 && useRoot ? _this5.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
            if (!next || next.name != part && !next.isInGroup(part)) return false;
            depth--;
          }
        }
        return true;
      };
      return match(parts.length - 1, this.open);
    }
  }, {
    key: "textblockFromContext",
    value: function textblockFromContext() {
      var $context = this.options.context;
      if ($context) for (var d = $context.depth; d >= 0; d--) {
        var deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
        if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
      }
      for (var name in this.parser.schema.nodes) {
        var type = this.parser.schema.nodes[name];
        if (type.isTextblock && type.defaultAttrs) return type;
      }
    }
  }]);
  return ParseContext;
}();
function normalizeList(dom) {
  for (var child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    var name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
  var copy = {};
  for (var prop in obj) copy[prop] = obj[prop];
  return copy;
}
function markMayApply(markType, nodeType) {
  var nodes = nodeType.schema.nodes;
  var _loop5 = function _loop5() {
      var parent = nodes[name];
      if (!parent.allowsMarkType(markType)) return 0;
      var seen = [],
        scan = function scan(match) {
          seen.push(match);
          for (var i = 0; i < match.edgeCount; i++) {
            var _match$edge = match.edge(i),
              type = _match$edge.type,
              next = _match$edge.next;
            if (type == nodeType) return true;
            if (seen.indexOf(next) < 0 && scan(next)) return true;
          }
        };
      if (scan(parent.contentMatch)) return {
        v: true
      };
    },
    _ret2;
  for (var name in nodes) {
    _ret2 = _loop5();
    if (_ret2 === 0) continue;
    if (_ret2) return _ret2.v;
  }
}
var DOMSerializer = function () {
  function DOMSerializer(nodes, marks) {
    _classCallCheck(this, DOMSerializer);
    this.nodes = nodes;
    this.marks = marks;
  }
  _createClass(DOMSerializer, [{
    key: "serializeFragment",
    value: function serializeFragment(fragment) {
      var _this6 = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var target = arguments.length > 2 ? arguments[2] : undefined;
      if (!target) target = doc(options).createDocumentFragment();
      var top = target,
        active = [];
      fragment.forEach(function (node) {
        if (active.length || node.marks.length) {
          var keep = 0,
            rendered = 0;
          while (keep < active.length && rendered < node.marks.length) {
            var next = node.marks[rendered];
            if (!_this6.marks[next.type.name]) {
              rendered++;
              continue;
            }
            if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
            keep++;
            rendered++;
          }
          while (keep < active.length) top = active.pop()[1];
          while (rendered < node.marks.length) {
            var add = node.marks[rendered++];
            var markDOM = _this6.serializeMark(add, node.isInline, options);
            if (markDOM) {
              active.push([add, top]);
              top.appendChild(markDOM.dom);
              top = markDOM.contentDOM || markDOM.dom;
            }
          }
        }
        top.appendChild(_this6.serializeNodeInner(node, options));
      });
      return target;
    }
  }, {
    key: "serializeNodeInner",
    value: function serializeNodeInner(node, options) {
      var _renderSpec2 = _renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs),
        dom = _renderSpec2.dom,
        contentDOM = _renderSpec2.contentDOM;
      if (contentDOM) {
        if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
        this.serializeFragment(node.content, options, contentDOM);
      }
      return dom;
    }
  }, {
    key: "serializeNode",
    value: function serializeNode(node) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var dom = this.serializeNodeInner(node, options);
      for (var i = node.marks.length - 1; i >= 0; i--) {
        var wrap = this.serializeMark(node.marks[i], node.isInline, options);
        if (wrap) {
          (wrap.contentDOM || wrap.dom).appendChild(dom);
          dom = wrap.dom;
        }
      }
      return dom;
    }
  }, {
    key: "serializeMark",
    value: function serializeMark(mark, inline) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var toDOM = this.marks[mark.type.name];
      return toDOM && _renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
    }
  }], [{
    key: "renderSpec",
    value: function renderSpec(doc, structure) {
      var xmlNS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var blockArraysIn = arguments.length > 3 ? arguments[3] : undefined;
      return _renderSpec(doc, structure, xmlNS, blockArraysIn);
    }
  }, {
    key: "fromSchema",
    value: function fromSchema(schema) {
      return schema.cached.domSerializer || (schema.cached.domSerializer = new DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
    }
  }, {
    key: "nodesFromSchema",
    value: function nodesFromSchema(schema) {
      var result = gatherToDOM(schema.nodes);
      if (!result.text) result.text = function (node) {
        return node.text;
      };
      return result;
    }
  }, {
    key: "marksFromSchema",
    value: function marksFromSchema(schema) {
      return gatherToDOM(schema.marks);
    }
  }]);
  return DOMSerializer;
}();
function gatherToDOM(obj) {
  var result = {};
  for (var name in obj) {
    var toDOM = obj[name].spec.toDOM;
    if (toDOM) result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}
var suspiciousAttributeCache = new WeakMap();
function suspiciousAttributes(attrs) {
  var value = suspiciousAttributeCache.get(attrs);
  if (value === undefined) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
  return value;
}
function suspiciousAttributesInner(attrs) {
  var result = null;
  function scan(value) {
    if (value && _typeof(value) == "object") {
      if (Array.isArray(value)) {
        if (typeof value[0] == "string") {
          if (!result) result = [];
          result.push(value);
        } else {
          for (var i = 0; i < value.length; i++) scan(value[i]);
        }
      } else {
        for (var prop in value) scan(value[prop]);
      }
    }
  }
  scan(attrs);
  return result;
}
function _renderSpec(doc, structure, xmlNS, blockArraysIn) {
  if (typeof structure == "string") return {
    dom: doc.createTextNode(structure)
  };
  if (structure.nodeType != null) return {
    dom: structure
  };
  if (structure.dom && structure.dom.nodeType != null) return structure;
  var tagName = structure[0],
    suspicious;
  if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
  if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  var space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  var contentDOM;
  var dom = xmlNS ? doc.createElementNS(xmlNS, tagName) : doc.createElement(tagName);
  var attrs = structure[1],
    start = 1;
  if (attrs && _typeof(attrs) == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (var name in attrs) if (attrs[name] != null) {
      var _space = name.indexOf(" ");
      if (_space > 0) dom.setAttributeNS(name.slice(0, _space), name.slice(_space + 1), attrs[name]);else dom.setAttribute(name, attrs[name]);
    }
  }
  for (var i = start; i < structure.length; i++) {
    var child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
      return {
        dom: dom,
        contentDOM: dom
      };
    } else {
      var _renderSpec3 = _renderSpec(doc, child, xmlNS, blockArraysIn),
        inner = _renderSpec3.dom,
        innerContent = _renderSpec3.contentDOM;
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) throw new RangeError("Multiple content holes");
        contentDOM = innerContent;
      }
    }
  }
  return {
    dom: dom,
    contentDOM: contentDOM
  };
}
exports.ContentMatch = ContentMatch;
exports.DOMParser = DOMParser;
exports.DOMSerializer = DOMSerializer;
exports.Fragment = Fragment;
exports.Mark = Mark;
exports.MarkType = MarkType;
exports.Node = Node;
exports.NodeRange = NodeRange;
exports.NodeType = NodeType;
exports.ReplaceError = ReplaceError;
exports.ResolvedPos = ResolvedPos;
exports.Schema = Schema;
exports.Slice = Slice;


/***/ }),

/***/ "./node_modules/prosemirror-state/dist/index.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/prosemirror-state/dist/index.cjs ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var prosemirrorModel = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.cjs");

var prosemirrorTransform = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.cjs");

var classesById = Object.create(null);

var Selection = function () {
  function Selection($anchor, $head, ranges) {
    _classCallCheck(this, Selection);

    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }

  _createClass(Selection, [{
    key: "anchor",
    get: function get() {
      return this.$anchor.pos;
    }
  }, {
    key: "head",
    get: function get() {
      return this.$head.pos;
    }
  }, {
    key: "from",
    get: function get() {
      return this.$from.pos;
    }
  }, {
    key: "to",
    get: function get() {
      return this.$to.pos;
    }
  }, {
    key: "$from",
    get: function get() {
      return this.ranges[0].$from;
    }
  }, {
    key: "$to",
    get: function get() {
      return this.ranges[0].$to;
    }
  }, {
    key: "empty",
    get: function get() {
      var ranges = this.ranges;

      for (var i = 0; i < ranges.length; i++) {
        if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
      }

      return true;
    }
  }, {
    key: "content",
    value: function content() {
      return this.$from.doc.slice(this.from, this.to, true);
    }
  }, {
    key: "replace",
    value: function replace(tr) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prosemirrorModel.Slice.empty;
      var lastNode = content.content.lastChild,
          lastParent = null;

      for (var i = 0; i < content.openEnd; i++) {
        lastParent = lastNode;
        lastNode = lastNode.lastChild;
      }

      var mapFrom = tr.steps.length,
          ranges = this.ranges;

      for (var _i = 0; _i < ranges.length; _i++) {
        var _ranges$_i = ranges[_i],
            $from = _ranges$_i.$from,
            $to = _ranges$_i.$to,
            mapping = tr.mapping.slice(mapFrom);
        tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), _i ? prosemirrorModel.Slice.empty : content);
        if (_i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
      }
    }
  }, {
    key: "replaceWith",
    value: function replaceWith(tr, node) {
      var mapFrom = tr.steps.length,
          ranges = this.ranges;

      for (var i = 0; i < ranges.length; i++) {
        var _ranges$i = ranges[i],
            $from = _ranges$i.$from,
            $to = _ranges$i.$to,
            mapping = tr.mapping.slice(mapFrom);
        var from = mapping.map($from.pos),
            to = mapping.map($to.pos);

        if (i) {
          tr.deleteRange(from, to);
        } else {
          tr.replaceRangeWith(from, to, node);
          selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
        }
      }
    }
  }, {
    key: "getBookmark",
    value: function getBookmark() {
      return TextSelection.between(this.$anchor, this.$head).getBookmark();
    }
  }], [{
    key: "findFrom",
    value: function findFrom($pos, dir) {
      var textOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
      if (inner) return inner;

      for (var depth = $pos.depth - 1; depth >= 0; depth--) {
        var found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
        if (found) return found;
      }

      return null;
    }
  }, {
    key: "near",
    value: function near($pos) {
      var bias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
    }
  }, {
    key: "atStart",
    value: function atStart(doc) {
      return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
    }
  }, {
    key: "atEnd",
    value: function atEnd(doc) {
      return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(doc, json) {
      if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
      var cls = classesById[json.type];
      if (!cls) throw new RangeError("No selection type ".concat(json.type, " defined"));
      return cls.fromJSON(doc, json);
    }
  }, {
    key: "jsonID",
    value: function jsonID(id, selectionClass) {
      if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
      classesById[id] = selectionClass;
      selectionClass.prototype.jsonID = id;
      return selectionClass;
    }
  }]);

  return Selection;
}();

Selection.prototype.visible = true;

var SelectionRange = _createClass(function SelectionRange($from, $to) {
  _classCallCheck(this, SelectionRange);

  this.$from = $from;
  this.$to = $to;
});

var warnedAboutTextSelection = false;

function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}

var TextSelection = function (_Selection) {
  _inherits(TextSelection, _Selection);

  var _super = _createSuper(TextSelection);

  function TextSelection($anchor) {
    var $head = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $anchor;

    _classCallCheck(this, TextSelection);

    checkTextSelection($anchor);
    checkTextSelection($head);
    return _super.call(this, $anchor, $head);
  }

  _createClass(TextSelection, [{
    key: "$cursor",
    get: function get() {
      return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
  }, {
    key: "map",
    value: function map(doc, mapping) {
      var $head = doc.resolve(mapping.map(this.head));
      if (!$head.parent.inlineContent) return Selection.near($head);
      var $anchor = doc.resolve(mapping.map(this.anchor));
      return new TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
    }
  }, {
    key: "replace",
    value: function replace(tr) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prosemirrorModel.Slice.empty;

      _get(_getPrototypeOf(TextSelection.prototype), "replace", this).call(this, tr, content);

      if (content == prosemirrorModel.Slice.empty) {
        var marks = this.$from.marksAcross(this.$to);
        if (marks) tr.ensureMarks(marks);
      }
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return other instanceof TextSelection && other.anchor == this.anchor && other.head == this.head;
    }
  }, {
    key: "getBookmark",
    value: function getBookmark() {
      return new TextBookmark(this.anchor, this.head);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        type: "text",
        anchor: this.anchor,
        head: this.head
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(doc, json) {
      if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
      return new TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
    }
  }, {
    key: "create",
    value: function create(doc, anchor) {
      var head = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : anchor;
      var $anchor = doc.resolve(anchor);
      return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
    }
  }, {
    key: "between",
    value: function between($anchor, $head, bias) {
      var dPos = $anchor.pos - $head.pos;
      if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;

      if (!$head.parent.inlineContent) {
        var found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
        if (found) $head = found.$head;else return Selection.near($head, bias);
      }

      if (!$anchor.parent.inlineContent) {
        if (dPos == 0) {
          $anchor = $head;
        } else {
          $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
          if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
        }
      }

      return new TextSelection($anchor, $head);
    }
  }]);

  return TextSelection;
}(Selection);

Selection.jsonID("text", TextSelection);

var TextBookmark = function () {
  function TextBookmark(anchor, head) {
    _classCallCheck(this, TextBookmark);

    this.anchor = anchor;
    this.head = head;
  }

  _createClass(TextBookmark, [{
    key: "map",
    value: function map(mapping) {
      return new TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
    }
  }, {
    key: "resolve",
    value: function resolve(doc) {
      return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
    }
  }]);

  return TextBookmark;
}();

var NodeSelection = function (_Selection2) {
  _inherits(NodeSelection, _Selection2);

  var _super2 = _createSuper(NodeSelection);

  function NodeSelection($pos) {
    var _this;

    _classCallCheck(this, NodeSelection);

    var node = $pos.nodeAfter;
    var $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    _this = _super2.call(this, $pos, $end);
    _this.node = node;
    return _this;
  }

  _createClass(NodeSelection, [{
    key: "map",
    value: function map(doc, mapping) {
      var _mapping$mapResult = mapping.mapResult(this.anchor),
          deleted = _mapping$mapResult.deleted,
          pos = _mapping$mapResult.pos;

      var $pos = doc.resolve(pos);
      if (deleted) return Selection.near($pos);
      return new NodeSelection($pos);
    }
  }, {
    key: "content",
    value: function content() {
      return new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(this.node), 0, 0);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return other instanceof NodeSelection && other.anchor == this.anchor;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        type: "node",
        anchor: this.anchor
      };
    }
  }, {
    key: "getBookmark",
    value: function getBookmark() {
      return new NodeBookmark(this.anchor);
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(doc, json) {
      if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
      return new NodeSelection(doc.resolve(json.anchor));
    }
  }, {
    key: "create",
    value: function create(doc, from) {
      return new NodeSelection(doc.resolve(from));
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(node) {
      return !node.isText && node.type.spec.selectable !== false;
    }
  }]);

  return NodeSelection;
}(Selection);

NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);

var NodeBookmark = function () {
  function NodeBookmark(anchor) {
    _classCallCheck(this, NodeBookmark);

    this.anchor = anchor;
  }

  _createClass(NodeBookmark, [{
    key: "map",
    value: function map(mapping) {
      var _mapping$mapResult2 = mapping.mapResult(this.anchor),
          deleted = _mapping$mapResult2.deleted,
          pos = _mapping$mapResult2.pos;

      return deleted ? new TextBookmark(pos, pos) : new NodeBookmark(pos);
    }
  }, {
    key: "resolve",
    value: function resolve(doc) {
      var $pos = doc.resolve(this.anchor),
          node = $pos.nodeAfter;
      if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
      return Selection.near($pos);
    }
  }]);

  return NodeBookmark;
}();

var AllSelection = function (_Selection3) {
  _inherits(AllSelection, _Selection3);

  var _super3 = _createSuper(AllSelection);

  function AllSelection(doc) {
    _classCallCheck(this, AllSelection);

    return _super3.call(this, doc.resolve(0), doc.resolve(doc.content.size));
  }

  _createClass(AllSelection, [{
    key: "replace",
    value: function replace(tr) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prosemirrorModel.Slice.empty;

      if (content == prosemirrorModel.Slice.empty) {
        tr["delete"](0, tr.doc.content.size);
        var sel = Selection.atStart(tr.doc);
        if (!sel.eq(tr.selection)) tr.setSelection(sel);
      } else {
        _get(_getPrototypeOf(AllSelection.prototype), "replace", this).call(this, tr, content);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        type: "all"
      };
    }
  }, {
    key: "map",
    value: function map(doc) {
      return new AllSelection(doc);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return other instanceof AllSelection;
    }
  }, {
    key: "getBookmark",
    value: function getBookmark() {
      return AllBookmark;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(doc) {
      return new AllSelection(doc);
    }
  }]);

  return AllSelection;
}(Selection);

Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map: function map() {
    return this;
  },
  resolve: function resolve(doc) {
    return new AllSelection(doc);
  }
};

function findSelectionIn(doc, node, pos, index, dir) {
  var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (node.inlineContent) return TextSelection.create(doc, pos);

  for (var i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    var child = node.child(i);

    if (!child.isAtom) {
      var inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner) return inner;
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
    }

    pos += child.nodeSize * dir;
  }

  return null;
}

function selectionToInsertionEnd(tr, startLen, bias) {
  var last = tr.steps.length - 1;
  if (last < startLen) return;
  var step = tr.steps[last];
  if (!(step instanceof prosemirrorTransform.ReplaceStep || step instanceof prosemirrorTransform.ReplaceAroundStep)) return;
  var map = tr.mapping.maps[last],
      end;
  map.forEach(function (_from, _to, _newFrom, newTo) {
    if (end == null) end = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}

var UPDATED_SEL = 1,
    UPDATED_MARKS = 2,
    UPDATED_SCROLL = 4;

var Transaction = function (_prosemirrorTransform) {
  _inherits(Transaction, _prosemirrorTransform);

  var _super4 = _createSuper(Transaction);

  function Transaction(state) {
    var _this2;

    _classCallCheck(this, Transaction);

    _this2 = _super4.call(this, state.doc);
    _this2.curSelectionFor = 0;
    _this2.updated = 0;
    _this2.meta = Object.create(null);
    _this2.time = Date.now();
    _this2.curSelection = state.selection;
    _this2.storedMarks = state.storedMarks;
    return _this2;
  }

  _createClass(Transaction, [{
    key: "selection",
    get: function get() {
      if (this.curSelectionFor < this.steps.length) {
        this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
        this.curSelectionFor = this.steps.length;
      }

      return this.curSelection;
    }
  }, {
    key: "setSelection",
    value: function setSelection(selection) {
      if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
      this.curSelection = selection;
      this.curSelectionFor = this.steps.length;
      this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
      this.storedMarks = null;
      return this;
    }
  }, {
    key: "selectionSet",
    get: function get() {
      return (this.updated & UPDATED_SEL) > 0;
    }
  }, {
    key: "setStoredMarks",
    value: function setStoredMarks(marks) {
      this.storedMarks = marks;
      this.updated |= UPDATED_MARKS;
      return this;
    }
  }, {
    key: "ensureMarks",
    value: function ensureMarks(marks) {
      if (!prosemirrorModel.Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
      return this;
    }
  }, {
    key: "addStoredMark",
    value: function addStoredMark(mark) {
      return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
  }, {
    key: "removeStoredMark",
    value: function removeStoredMark(mark) {
      return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
  }, {
    key: "storedMarksSet",
    get: function get() {
      return (this.updated & UPDATED_MARKS) > 0;
    }
  }, {
    key: "addStep",
    value: function addStep(step, doc) {
      _get(_getPrototypeOf(Transaction.prototype), "addStep", this).call(this, step, doc);

      this.updated = this.updated & ~UPDATED_MARKS;
      this.storedMarks = null;
    }
  }, {
    key: "setTime",
    value: function setTime(time) {
      this.time = time;
      return this;
    }
  }, {
    key: "replaceSelection",
    value: function replaceSelection(slice) {
      this.selection.replace(this, slice);
      return this;
    }
  }, {
    key: "replaceSelectionWith",
    value: function replaceSelectionWith(node) {
      var inheritMarks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var selection = this.selection;
      if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || prosemirrorModel.Mark.none));
      selection.replaceWith(this, node);
      return this;
    }
  }, {
    key: "deleteSelection",
    value: function deleteSelection() {
      this.selection.replace(this);
      return this;
    }
  }, {
    key: "insertText",
    value: function insertText(text, from, to) {
      var schema = this.doc.type.schema;

      if (from == null) {
        if (!text) return this.deleteSelection();
        return this.replaceSelectionWith(schema.text(text), true);
      } else {
        if (to == null) to = from;
        to = to == null ? from : to;
        if (!text) return this.deleteRange(from, to);
        var marks = this.storedMarks;

        if (!marks) {
          var $from = this.doc.resolve(from);
          marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
        }

        this.replaceRangeWith(from, to, schema.text(text, marks));
        if (!this.selection.empty) this.setSelection(Selection.near(this.selection.$to));
        return this;
      }
    }
  }, {
    key: "setMeta",
    value: function setMeta(key, value) {
      this.meta[typeof key == "string" ? key : key.key] = value;
      return this;
    }
  }, {
    key: "getMeta",
    value: function getMeta(key) {
      return this.meta[typeof key == "string" ? key : key.key];
    }
  }, {
    key: "isGeneric",
    get: function get() {
      for (var _ in this.meta) {
        return false;
      }

      return true;
    }
  }, {
    key: "scrollIntoView",
    value: function scrollIntoView() {
      this.updated |= UPDATED_SCROLL;
      return this;
    }
  }, {
    key: "scrolledIntoView",
    get: function get() {
      return (this.updated & UPDATED_SCROLL) > 0;
    }
  }]);

  return Transaction;
}(prosemirrorTransform.Transform);

function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}

var FieldDesc = _createClass(function FieldDesc(name, desc, self) {
  _classCallCheck(this, FieldDesc);

  this.name = name;
  this.init = bind(desc.init, self);
  this.apply = bind(desc.apply, self);
});

var baseFields = [new FieldDesc("doc", {
  init: function init(config) {
    return config.doc || config.schema.topNodeType.createAndFill();
  },
  apply: function apply(tr) {
    return tr.doc;
  }
}), new FieldDesc("selection", {
  init: function init(config, instance) {
    return config.selection || Selection.atStart(instance.doc);
  },
  apply: function apply(tr) {
    return tr.selection;
  }
}), new FieldDesc("storedMarks", {
  init: function init(config) {
    return config.storedMarks || null;
  },
  apply: function apply(tr, _marks, _old, state) {
    return state.selection.$cursor ? tr.storedMarks : null;
  }
}), new FieldDesc("scrollToSelection", {
  init: function init() {
    return 0;
  },
  apply: function apply(tr, prev) {
    return tr.scrolledIntoView ? prev + 1 : prev;
  }
})];

var Configuration = _createClass(function Configuration(schema, plugins) {
  var _this3 = this;

  _classCallCheck(this, Configuration);

  this.schema = schema;
  this.plugins = [];
  this.pluginsByKey = Object.create(null);
  this.fields = baseFields.slice();
  if (plugins) plugins.forEach(function (plugin) {
    if (_this3.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");

    _this3.plugins.push(plugin);

    _this3.pluginsByKey[plugin.key] = plugin;
    if (plugin.spec.state) _this3.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
  });
});

var EditorState = function () {
  function EditorState(config) {
    _classCallCheck(this, EditorState);

    this.config = config;
  }

  _createClass(EditorState, [{
    key: "schema",
    get: function get() {
      return this.config.schema;
    }
  }, {
    key: "plugins",
    get: function get() {
      return this.config.plugins;
    }
  }, {
    key: "apply",
    value: function apply(tr) {
      return this.applyTransaction(tr).state;
    }
  }, {
    key: "filterTransaction",
    value: function filterTransaction(tr) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      for (var i = 0; i < this.config.plugins.length; i++) {
        if (i != ignore) {
          var plugin = this.config.plugins[i];
          if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
        }
      }

      return true;
    }
  }, {
    key: "applyTransaction",
    value: function applyTransaction(rootTr) {
      if (!this.filterTransaction(rootTr)) return {
        state: this,
        transactions: []
      };
      var trs = [rootTr],
          newState = this.applyInner(rootTr),
          seen = null;

      for (;;) {
        var haveNew = false;

        for (var i = 0; i < this.config.plugins.length; i++) {
          var plugin = this.config.plugins[i];

          if (plugin.spec.appendTransaction) {
            var n = seen ? seen[i].n : 0,
                oldState = seen ? seen[i].state : this;
            var tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);

            if (tr && newState.filterTransaction(tr, i)) {
              tr.setMeta("appendedTransaction", rootTr);

              if (!seen) {
                seen = [];

                for (var j = 0; j < this.config.plugins.length; j++) {
                  seen.push(j < i ? {
                    state: newState,
                    n: trs.length
                  } : {
                    state: this,
                    n: 0
                  });
                }
              }

              trs.push(tr);
              newState = newState.applyInner(tr);
              haveNew = true;
            }

            if (seen) seen[i] = {
              state: newState,
              n: trs.length
            };
          }
        }

        if (!haveNew) return {
          state: newState,
          transactions: trs
        };
      }
    }
  }, {
    key: "applyInner",
    value: function applyInner(tr) {
      if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
      var newInstance = new EditorState(this.config),
          fields = this.config.fields;

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
      }

      return newInstance;
    }
  }, {
    key: "tr",
    get: function get() {
      return new Transaction(this);
    }
  }, {
    key: "reconfigure",
    value: function reconfigure(config) {
      var $config = new Configuration(this.schema, config.plugins);
      var fields = $config.fields,
          instance = new EditorState($config);

      for (var i = 0; i < fields.length; i++) {
        var name = fields[i].name;
        instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
      }

      return instance;
    }
  }, {
    key: "toJSON",
    value: function toJSON(pluginFields) {
      var result = {
        doc: this.doc.toJSON(),
        selection: this.selection.toJSON()
      };
      if (this.storedMarks) result.storedMarks = this.storedMarks.map(function (m) {
        return m.toJSON();
      });
      if (pluginFields && _typeof(pluginFields) == 'object') for (var prop in pluginFields) {
        if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        var plugin = pluginFields[prop],
            state = plugin.spec.state;
        if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
      }
      return result;
    }
  }], [{
    key: "create",
    value: function create(config) {
      var $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
      var instance = new EditorState($config);

      for (var i = 0; i < $config.fields.length; i++) {
        instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
      }

      return instance;
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(config, json, pluginFields) {
      if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
      if (!config.schema) throw new RangeError("Required config field 'schema' missing");
      var $config = new Configuration(config.schema, config.plugins);
      var instance = new EditorState($config);
      $config.fields.forEach(function (field) {
        if (field.name == "doc") {
          instance.doc = prosemirrorModel.Node.fromJSON(config.schema, json.doc);
        } else if (field.name == "selection") {
          instance.selection = Selection.fromJSON(instance.doc, json.selection);
        } else if (field.name == "storedMarks") {
          if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
        } else {
          if (pluginFields) for (var prop in pluginFields) {
            var plugin = pluginFields[prop],
                state = plugin.spec.state;

            if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
              instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
              return;
            }
          }
          instance[field.name] = field.init(config, instance);
        }
      });
      return instance;
    }
  }]);

  return EditorState;
}();

function bindProps(obj, self, target) {
  for (var prop in obj) {
    var val = obj[prop];
    if (val instanceof Function) val = val.bind(self);else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
    target[prop] = val;
  }

  return target;
}

var Plugin = function () {
  function Plugin(spec) {
    _classCallCheck(this, Plugin);

    this.spec = spec;
    this.props = {};
    if (spec.props) bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }

  _createClass(Plugin, [{
    key: "getState",
    value: function getState(state) {
      return state[this.key];
    }
  }]);

  return Plugin;
}();

var keys = Object.create(null);

function createKey(name) {
  if (name in keys) return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}

var PluginKey = function () {
  function PluginKey() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "key";

    _classCallCheck(this, PluginKey);

    this.key = createKey(name);
  }

  _createClass(PluginKey, [{
    key: "get",
    value: function get(state) {
      return state.config.pluginsByKey[this.key];
    }
  }, {
    key: "getState",
    value: function getState(state) {
      return state[this.key];
    }
  }]);

  return PluginKey;
}();

exports.AllSelection = AllSelection;
exports.EditorState = EditorState;
exports.NodeSelection = NodeSelection;
exports.Plugin = Plugin;
exports.PluginKey = PluginKey;
exports.Selection = Selection;
exports.SelectionRange = SelectionRange;
exports.TextSelection = TextSelection;
exports.Transaction = Transaction;


/***/ }),

/***/ "./node_modules/prosemirror-transform/dist/index.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/prosemirror-transform/dist/index.cjs ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prosemirrorModel = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.cjs");
var lower16 = 0xffff;
var factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
  return index + offset * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var DEL_BEFORE = 1,
  DEL_AFTER = 2,
  DEL_ACROSS = 4,
  DEL_SIDE = 8;
var MapResult = function () {
  function MapResult(pos, delInfo, recover) {
    _classCallCheck(this, MapResult);
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  _createClass(MapResult, [{
    key: "deleted",
    get: function get() {
      return (this.delInfo & DEL_SIDE) > 0;
    }
  }, {
    key: "deletedBefore",
    get: function get() {
      return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
    }
  }, {
    key: "deletedAfter",
    get: function get() {
      return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
    }
  }, {
    key: "deletedAcross",
    get: function get() {
      return (this.delInfo & DEL_ACROSS) > 0;
    }
  }]);
  return MapResult;
}();
var StepMap = function () {
  function StepMap(ranges) {
    var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, StepMap);
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && StepMap.empty) return StepMap.empty;
  }
  _createClass(StepMap, [{
    key: "recover",
    value: function recover(value) {
      var diff = 0,
        index = recoverIndex(value);
      if (!this.inverted) for (var i = 0; i < index; i++) diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
      return this.ranges[index * 3] + diff + recoverOffset(value);
    }
  }, {
    key: "mapResult",
    value: function mapResult(pos) {
      var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this._map(pos, assoc, false);
    }
  }, {
    key: "map",
    value: function map(pos) {
      var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this._map(pos, assoc, true);
    }
  }, {
    key: "_map",
    value: function _map(pos, assoc, simple) {
      var diff = 0,
        oldIndex = this.inverted ? 2 : 1,
        newIndex = this.inverted ? 1 : 2;
      for (var i = 0; i < this.ranges.length; i += 3) {
        var start = this.ranges[i] - (this.inverted ? diff : 0);
        if (start > pos) break;
        var oldSize = this.ranges[i + oldIndex],
          newSize = this.ranges[i + newIndex],
          end = start + oldSize;
        if (pos <= end) {
          var side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
          var result = start + diff + (side < 0 ? 0 : newSize);
          if (simple) return result;
          var recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
          var del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
          if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
          return new MapResult(result, del, recover);
        }
        diff += newSize - oldSize;
      }
      return simple ? pos + diff : new MapResult(pos + diff, 0, null);
    }
  }, {
    key: "touches",
    value: function touches(pos, recover) {
      var diff = 0,
        index = recoverIndex(recover);
      var oldIndex = this.inverted ? 2 : 1,
        newIndex = this.inverted ? 1 : 2;
      for (var i = 0; i < this.ranges.length; i += 3) {
        var start = this.ranges[i] - (this.inverted ? diff : 0);
        if (start > pos) break;
        var oldSize = this.ranges[i + oldIndex],
          end = start + oldSize;
        if (pos <= end && i == index * 3) return true;
        diff += this.ranges[i + newIndex] - oldSize;
      }
      return false;
    }
  }, {
    key: "forEach",
    value: function forEach(f) {
      var oldIndex = this.inverted ? 2 : 1,
        newIndex = this.inverted ? 1 : 2;
      for (var i = 0, diff = 0; i < this.ranges.length; i += 3) {
        var start = this.ranges[i],
          oldStart = start - (this.inverted ? diff : 0),
          newStart = start + (this.inverted ? 0 : diff);
        var oldSize = this.ranges[i + oldIndex],
          newSize = this.ranges[i + newIndex];
        f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
        diff += newSize - oldSize;
      }
    }
  }, {
    key: "invert",
    value: function invert() {
      return new StepMap(this.ranges, !this.inverted);
    }
  }, {
    key: "toString",
    value: function toString() {
      return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
  }], [{
    key: "offset",
    value: function offset(n) {
      return n == 0 ? StepMap.empty : new StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
    }
  }]);
  return StepMap;
}();
StepMap.empty = new StepMap([]);
var Mapping = function () {
  function Mapping() {
    var maps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var mirror = arguments.length > 1 ? arguments[1] : undefined;
    var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var to = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : maps.length;
    _classCallCheck(this, Mapping);
    this.maps = maps;
    this.mirror = mirror;
    this.from = from;
    this.to = to;
  }
  _createClass(Mapping, [{
    key: "slice",
    value: function slice() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.maps.length;
      return new Mapping(this.maps, this.mirror, from, to);
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Mapping(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
    }
  }, {
    key: "appendMap",
    value: function appendMap(map, mirrors) {
      this.to = this.maps.push(map);
      if (mirrors != null) this.setMirror(this.maps.length - 1, mirrors);
    }
  }, {
    key: "appendMapping",
    value: function appendMapping(mapping) {
      for (var i = 0, startSize = this.maps.length; i < mapping.maps.length; i++) {
        var mirr = mapping.getMirror(i);
        this.appendMap(mapping.maps[i], mirr != null && mirr < i ? startSize + mirr : undefined);
      }
    }
  }, {
    key: "getMirror",
    value: function getMirror(n) {
      if (this.mirror) for (var i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
    }
  }, {
    key: "setMirror",
    value: function setMirror(n, m) {
      if (!this.mirror) this.mirror = [];
      this.mirror.push(n, m);
    }
  }, {
    key: "appendMappingInverted",
    value: function appendMappingInverted(mapping) {
      for (var i = mapping.maps.length - 1, totalSize = this.maps.length + mapping.maps.length; i >= 0; i--) {
        var mirr = mapping.getMirror(i);
        this.appendMap(mapping.maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : undefined);
      }
    }
  }, {
    key: "invert",
    value: function invert() {
      var inverse = new Mapping();
      inverse.appendMappingInverted(this);
      return inverse;
    }
  }, {
    key: "map",
    value: function map(pos) {
      var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (this.mirror) return this._map(pos, assoc, true);
      for (var i = this.from; i < this.to; i++) pos = this.maps[i].map(pos, assoc);
      return pos;
    }
  }, {
    key: "mapResult",
    value: function mapResult(pos) {
      var assoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this._map(pos, assoc, false);
    }
  }, {
    key: "_map",
    value: function _map(pos, assoc, simple) {
      var delInfo = 0;
      for (var i = this.from; i < this.to; i++) {
        var map = this.maps[i],
          result = map.mapResult(pos, assoc);
        if (result.recover != null) {
          var corr = this.getMirror(i);
          if (corr != null && corr > i && corr < this.to) {
            i = corr;
            pos = this.maps[corr].recover(result.recover);
            continue;
          }
        }
        delInfo |= result.delInfo;
        pos = result.pos;
      }
      return simple ? pos : new MapResult(pos, delInfo, null);
    }
  }]);
  return Mapping;
}();
var stepsByID = Object.create(null);
var Step = function () {
  function Step() {
    _classCallCheck(this, Step);
  }
  _createClass(Step, [{
    key: "getMap",
    value: function getMap() {
      return StepMap.empty;
    }
  }, {
    key: "merge",
    value: function merge(other) {
      return null;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
      var type = stepsByID[json.stepType];
      if (!type) throw new RangeError("No step type ".concat(json.stepType, " defined"));
      return type.fromJSON(schema, json);
    }
  }, {
    key: "jsonID",
    value: function jsonID(id, stepClass) {
      if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
      stepsByID[id] = stepClass;
      stepClass.prototype.jsonID = id;
      return stepClass;
    }
  }]);
  return Step;
}();
var StepResult = function () {
  function StepResult(doc, failed) {
    _classCallCheck(this, StepResult);
    this.doc = doc;
    this.failed = failed;
  }
  _createClass(StepResult, null, [{
    key: "ok",
    value: function ok(doc) {
      return new StepResult(doc, null);
    }
  }, {
    key: "fail",
    value: function fail(message) {
      return new StepResult(null, message);
    }
  }, {
    key: "fromReplace",
    value: function fromReplace(doc, from, to, slice) {
      try {
        return StepResult.ok(doc.replace(from, to, slice));
      } catch (e) {
        if (e instanceof prosemirrorModel.ReplaceError) return StepResult.fail(e.message);
        throw e;
      }
    }
  }]);
  return StepResult;
}();
function mapFragment(fragment, f, parent) {
  var mapped = [];
  for (var i = 0; i < fragment.childCount; i++) {
    var child = fragment.child(i);
    if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline) child = f(child, parent, i);
    mapped.push(child);
  }
  return prosemirrorModel.Fragment.fromArray(mapped);
}
var AddMarkStep = function (_Step) {
  _inherits(AddMarkStep, _Step);
  var _super = _createSuper(AddMarkStep);
  function AddMarkStep(from, to, mark) {
    var _this;
    _classCallCheck(this, AddMarkStep);
    _this = _super.call(this);
    _this.from = from;
    _this.to = to;
    _this.mark = mark;
    return _this;
  }
  _createClass(AddMarkStep, [{
    key: "apply",
    value: function apply(doc) {
      var _this2 = this;
      var oldSlice = doc.slice(this.from, this.to),
        $from = doc.resolve(this.from);
      var parent = $from.node($from.sharedDepth(this.to));
      var slice = new prosemirrorModel.Slice(mapFragment(oldSlice.content, function (node, parent) {
        if (!node.isAtom || !parent.type.allowsMarkType(_this2.mark.type)) return node;
        return node.mark(_this2.mark.addToSet(node.marks));
      }, parent), oldSlice.openStart, oldSlice.openEnd);
      return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
  }, {
    key: "invert",
    value: function invert() {
      return new RemoveMarkStep(this.from, this.to, this.mark);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);
      if (from.deleted && to.deleted || from.pos >= to.pos) return null;
      return new AddMarkStep(from.pos, to.pos, this.mark);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      if (other instanceof AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
      return null;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "addMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
      return new AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
  }]);
  return AddMarkStep;
}(Step);
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = function (_Step2) {
  _inherits(RemoveMarkStep, _Step2);
  var _super2 = _createSuper(RemoveMarkStep);
  function RemoveMarkStep(from, to, mark) {
    var _this3;
    _classCallCheck(this, RemoveMarkStep);
    _this3 = _super2.call(this);
    _this3.from = from;
    _this3.to = to;
    _this3.mark = mark;
    return _this3;
  }
  _createClass(RemoveMarkStep, [{
    key: "apply",
    value: function apply(doc) {
      var _this4 = this;
      var oldSlice = doc.slice(this.from, this.to);
      var slice = new prosemirrorModel.Slice(mapFragment(oldSlice.content, function (node) {
        return node.mark(_this4.mark.removeFromSet(node.marks));
      }, doc), oldSlice.openStart, oldSlice.openEnd);
      return StepResult.fromReplace(doc, this.from, this.to, slice);
    }
  }, {
    key: "invert",
    value: function invert() {
      return new AddMarkStep(this.from, this.to, this.mark);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);
      if (from.deleted && to.deleted || from.pos >= to.pos) return null;
      return new RemoveMarkStep(from.pos, to.pos, this.mark);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      if (other instanceof RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
      return null;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "removeMark",
        mark: this.mark.toJSON(),
        from: this.from,
        to: this.to
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
      return new RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
    }
  }]);
  return RemoveMarkStep;
}(Step);
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = function (_Step3) {
  _inherits(AddNodeMarkStep, _Step3);
  var _super3 = _createSuper(AddNodeMarkStep);
  function AddNodeMarkStep(pos, mark) {
    var _this5;
    _classCallCheck(this, AddNodeMarkStep);
    _this5 = _super3.call(this);
    _this5.pos = pos;
    _this5.mark = mark;
    return _this5;
  }
  _createClass(AddNodeMarkStep, [{
    key: "apply",
    value: function apply(doc) {
      var node = doc.nodeAt(this.pos);
      if (!node) return StepResult.fail("No node at mark step's position");
      var updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
      return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      var node = doc.nodeAt(this.pos);
      if (node) {
        var newSet = this.mark.addToSet(node.marks);
        if (newSet.length == node.marks.length) {
          for (var i = 0; i < node.marks.length; i++) if (!node.marks[i].isInSet(newSet)) return new AddNodeMarkStep(this.pos, node.marks[i]);
          return new AddNodeMarkStep(this.pos, this.mark);
        }
      }
      return new RemoveNodeMarkStep(this.pos, this.mark);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new AddNodeMarkStep(pos.pos, this.mark);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "addNodeMark",
        pos: this.pos,
        mark: this.mark.toJSON()
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
      return new AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
  }]);
  return AddNodeMarkStep;
}(Step);
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = function (_Step4) {
  _inherits(RemoveNodeMarkStep, _Step4);
  var _super4 = _createSuper(RemoveNodeMarkStep);
  function RemoveNodeMarkStep(pos, mark) {
    var _this6;
    _classCallCheck(this, RemoveNodeMarkStep);
    _this6 = _super4.call(this);
    _this6.pos = pos;
    _this6.mark = mark;
    return _this6;
  }
  _createClass(RemoveNodeMarkStep, [{
    key: "apply",
    value: function apply(doc) {
      var node = doc.nodeAt(this.pos);
      if (!node) return StepResult.fail("No node at mark step's position");
      var updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
      return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      var node = doc.nodeAt(this.pos);
      if (!node || !this.mark.isInSet(node.marks)) return this;
      return new AddNodeMarkStep(this.pos, this.mark);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new RemoveNodeMarkStep(pos.pos, this.mark);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "removeNodeMark",
        pos: this.pos,
        mark: this.mark.toJSON()
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
      return new RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
    }
  }]);
  return RemoveNodeMarkStep;
}(Step);
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = function (_Step5) {
  _inherits(ReplaceStep, _Step5);
  var _super5 = _createSuper(ReplaceStep);
  function ReplaceStep(from, to, slice) {
    var _this7;
    var structure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, ReplaceStep);
    _this7 = _super5.call(this);
    _this7.from = from;
    _this7.to = to;
    _this7.slice = slice;
    _this7.structure = structure;
    return _this7;
  }
  _createClass(ReplaceStep, [{
    key: "apply",
    value: function apply(doc) {
      if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
      return StepResult.fromReplace(doc, this.from, this.to, this.slice);
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return new StepMap([this.from, this.to - this.from, this.slice.size]);
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      return new ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);
      if (from.deletedAcross && to.deletedAcross) return null;
      return new ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice);
    }
  }, {
    key: "merge",
    value: function merge(other) {
      if (!(other instanceof ReplaceStep) || other.structure || this.structure) return null;
      if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
        var slice = this.slice.size + other.slice.size == 0 ? prosemirrorModel.Slice.empty : new prosemirrorModel.Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
        return new ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
      } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
        var _slice = this.slice.size + other.slice.size == 0 ? prosemirrorModel.Slice.empty : new prosemirrorModel.Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
        return new ReplaceStep(other.from, this.to, _slice, this.structure);
      } else {
        return null;
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {
        stepType: "replace",
        from: this.from,
        to: this.to
      };
      if (this.slice.size) json.slice = this.slice.toJSON();
      if (this.structure) json.structure = true;
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
      return new ReplaceStep(json.from, json.to, prosemirrorModel.Slice.fromJSON(schema, json.slice), !!json.structure);
    }
  }]);
  return ReplaceStep;
}(Step);
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = function (_Step6) {
  _inherits(ReplaceAroundStep, _Step6);
  var _super6 = _createSuper(ReplaceAroundStep);
  function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert) {
    var _this8;
    var structure = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    _classCallCheck(this, ReplaceAroundStep);
    _this8 = _super6.call(this);
    _this8.from = from;
    _this8.to = to;
    _this8.gapFrom = gapFrom;
    _this8.gapTo = gapTo;
    _this8.slice = slice;
    _this8.insert = insert;
    _this8.structure = structure;
    return _this8;
  }
  _createClass(ReplaceAroundStep, [{
    key: "apply",
    value: function apply(doc) {
      if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
      var gap = doc.slice(this.gapFrom, this.gapTo);
      if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
      var inserted = this.slice.insertAt(this.insert, gap.content);
      if (!inserted) return StepResult.fail("Content does not fit in gap");
      return StepResult.fromReplace(doc, this.from, this.to, inserted);
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      var gap = this.gapTo - this.gapFrom;
      return new ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var from = mapping.mapResult(this.from, 1),
        to = mapping.mapResult(this.to, -1);
      var gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
      var gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
      if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
      return new ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {
        stepType: "replaceAround",
        from: this.from,
        to: this.to,
        gapFrom: this.gapFrom,
        gapTo: this.gapTo,
        insert: this.insert
      };
      if (this.slice.size) json.slice = this.slice.toJSON();
      if (this.structure) json.structure = true;
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
      return new ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, prosemirrorModel.Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
    }
  }]);
  return ReplaceAroundStep;
}(Step);
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
  var $from = doc.resolve(from),
    dist = to - from,
    depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    var next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function _addMark(tr, from, to, mark) {
  var removed = [],
    added = [];
  var removing, adding;
  tr.doc.nodesBetween(from, to, function (node, pos, parent) {
    if (!node.isInline) return;
    var marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      var start = Math.max(pos, from),
        end = Math.min(pos + node.nodeSize, to);
      var newSet = mark.addToSet(marks);
      for (var i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
        }
      }
      if (adding && adding.to == start) adding.to = end;else added.push(adding = new AddMarkStep(start, end, mark));
    }
  });
  removed.forEach(function (s) {
    return tr.step(s);
  });
  added.forEach(function (s) {
    return tr.step(s);
  });
}
function _removeMark(tr, from, to, mark) {
  var matched = [],
    step = 0;
  tr.doc.nodesBetween(from, to, function (node, pos) {
    if (!node.isInline) return;
    step++;
    var toRemove = null;
    if (mark instanceof prosemirrorModel.MarkType) {
      var set = node.marks,
        found;
      while (found = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found);
        set = found.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) toRemove = [mark];
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      var end = Math.min(pos + node.nodeSize, to);
      for (var i = 0; i < toRemove.length; i++) {
        var style = toRemove[i],
          _found = void 0;
        for (var j = 0; j < matched.length; j++) {
          var m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) _found = m;
        }
        if (_found) {
          _found.to = end;
          _found.step = step;
        } else {
          matched.push({
            style: style,
            from: Math.max(pos, from),
            to: end,
            step: step
          });
        }
      }
    }
  });
  matched.forEach(function (m) {
    return tr.step(new RemoveMarkStep(m.from, m.to, m.style));
  });
}
function _clearIncompatible(tr, pos, parentType) {
  var match = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : parentType.contentMatch;
  var clearNewlines = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var node = tr.doc.nodeAt(pos);
  var replSteps = [],
    cur = pos + 1;
  for (var i = 0; i < node.childCount; i++) {
    var child = node.child(i),
      end = cur + child.nodeSize;
    var allowed = match.matchType(child.type);
    if (!allowed) {
      replSteps.push(new ReplaceStep(cur, end, prosemirrorModel.Slice.empty));
    } else {
      match = allowed;
      for (var j = 0; j < child.marks.length; j++) if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      if (clearNewlines && child.isText && parentType.whitespace != "pre") {
        var m = void 0,
          newline = /\r?\n|\r/g,
          slice = void 0;
        while (m = newline.exec(child.text)) {
          if (!slice) slice = new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
          replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
        }
      }
    }
    cur = end;
  }
  if (!match.validEnd) {
    var fill = match.fillBefore(prosemirrorModel.Fragment.empty, true);
    tr.replace(cur, cur, new prosemirrorModel.Slice(fill, 0, 0));
  }
  for (var _i = replSteps.length - 1; _i >= 0; _i--) tr.step(replSteps[_i]);
}
function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
function liftTarget(range) {
  var parent = range.parent;
  var content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (var depth = range.depth;; --depth) {
    var node = range.$from.node(depth);
    var index = range.$from.index(depth),
      endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
  }
  return null;
}
function _lift(tr, range, target) {
  var $from = range.$from,
    $to = range.$to,
    depth = range.depth;
  var gapStart = $from.before(depth + 1),
    gapEnd = $to.after(depth + 1);
  var start = gapStart,
    end = gapEnd;
  var before = prosemirrorModel.Fragment.empty,
    openStart = 0;
  for (var d = depth, splitting = false; d > target; d--) if (splitting || $from.index(d) > 0) {
    splitting = true;
    before = prosemirrorModel.Fragment.from($from.node(d).copy(before));
    openStart++;
  } else {
    start--;
  }
  var after = prosemirrorModel.Fragment.empty,
    openEnd = 0;
  for (var _d = depth, _splitting = false; _d > target; _d--) if (_splitting || $to.after(_d + 1) < $to.end(_d)) {
    _splitting = true;
    after = prosemirrorModel.Fragment.from($to.node(_d).copy(after));
    openEnd++;
  } else {
    end++;
  }
  tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new prosemirrorModel.Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
}
function findWrapping(range, nodeType) {
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var innerRange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : range;
  var around = findWrappingOutside(range, nodeType);
  var inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner) return null;
  return around.map(withAttrs).concat({
    type: nodeType,
    attrs: attrs
  }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return {
    type: type,
    attrs: null
  };
}
function findWrappingOutside(range, type) {
  var parent = range.parent,
    startIndex = range.startIndex,
    endIndex = range.endIndex;
  var around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around) return null;
  var outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  var parent = range.parent,
    startIndex = range.startIndex,
    endIndex = range.endIndex;
  var inner = parent.child(startIndex);
  var inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) return null;
  var lastType = inside.length ? inside[inside.length - 1] : type;
  var innerMatch = lastType.contentMatch;
  for (var i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd) return null;
  return inside;
}
function _wrap2(tr, range, wrappers) {
  var content = prosemirrorModel.Fragment.empty;
  for (var i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      var match = wrappers[i].type.contentMatch.matchFragment(content);
      if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    content = prosemirrorModel.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }
  var start = range.start,
    end = range.end;
  tr.step(new ReplaceAroundStep(start, end, start, end, new prosemirrorModel.Slice(content, 0, 0), wrappers.length, true));
}
function _setBlockType(tr, from, to, type, attrs) {
  if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
  var mapFrom = tr.steps.length;
  tr.doc.nodesBetween(from, to, function (node, pos) {
    var attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
    if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
      var convertNewlines = null;
      if (type.schema.linebreakReplacement) {
        var pre = type.whitespace == "pre",
          supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
      }
      if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
      _clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, undefined, convertNewlines === null);
      var mapping = tr.mapping.slice(mapFrom);
      var startM = mapping.map(pos, 1),
        endM = mapping.map(pos + node.nodeSize, 1);
      tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
      if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
      return false;
    }
  });
}
function replaceNewlines(tr, node, pos, mapFrom) {
  node.forEach(function (child, offset) {
    if (child.isText) {
      var m,
        newline = /\r?\n|\r/g;
      while (m = newline.exec(child.text)) {
        var start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
        tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
  node.forEach(function (child, offset) {
    if (child.type == child.type.schema.linebreakReplacement) {
      var start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
      tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
    }
  });
}
function canChangeType(doc, pos, type) {
  var $pos = doc.resolve(pos),
    index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
}
function _setNodeMarkup(tr, pos, type, attrs, marks) {
  var node = tr.doc.nodeAt(pos);
  if (!node) throw new RangeError("No node at given position");
  if (!type) type = node.type;
  var newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
  if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
  tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(newNode), 0, 0), 1, true));
}
function canSplit(doc, pos) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var typesAfter = arguments.length > 3 ? arguments[3] : undefined;
  var $pos = doc.resolve(pos),
    base = $pos.depth - depth;
  var innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
  for (var d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    var node = $pos.node(d),
      _index = $pos.index(d);
    if (node.type.spec.isolating) return false;
    var rest = node.content.cutByIndex(_index, node.childCount);
    var overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    var after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(_index + 1, node.childCount) || !after.type.validContent(rest)) return false;
  }
  var index = $pos.indexAfter(base);
  var baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function _split(tr, pos) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var typesAfter = arguments.length > 3 ? arguments[3] : undefined;
  var $pos = tr.doc.resolve(pos),
    before = prosemirrorModel.Fragment.empty,
    after = prosemirrorModel.Fragment.empty;
  for (var d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = prosemirrorModel.Fragment.from($pos.node(d).copy(before));
    var typeAfter = typesAfter && typesAfter[i];
    after = prosemirrorModel.Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  tr.step(new ReplaceStep(pos, pos, new prosemirrorModel.Slice(before.append(after), depth, depth), true));
}
function canJoin(doc, pos) {
  var $pos = doc.resolve(pos),
    index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
  if (!b.content.size) a.type.compatibleContent(b.type);
  var match = a.contentMatchAt(a.childCount);
  var linebreakReplacement = a.type.schema.linebreakReplacement;
  for (var i = 0; i < b.childCount; i++) {
    var child = b.child(i);
    var type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
    match = match.matchType(type);
    if (!match) return false;
    if (!a.type.allowsMarks(child.marks)) return false;
  }
  return match.validEnd;
}
function joinable(a, b) {
  return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
function joinPoint(doc, pos) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  var $pos = doc.resolve(pos);
  for (var d = $pos.depth;; d--) {
    var before = void 0,
      after = void 0,
      index = $pos.index(d);
    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index++;
      after = $pos.node(d).maybeChild(index);
    } else {
      before = $pos.node(d).maybeChild(index - 1);
      after = $pos.node(d + 1);
    }
    if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
    if (d == 0) break;
    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
}
function _join(tr, pos, depth) {
  var convertNewlines = null;
  var linebreakReplacement = tr.doc.type.schema.linebreakReplacement;
  var $before = tr.doc.resolve(pos - depth),
    beforeType = $before.node().type;
  if (linebreakReplacement && beforeType.inlineContent) {
    var pre = beforeType.whitespace == "pre";
    var supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
    if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
  }
  var mapFrom = tr.steps.length;
  if (convertNewlines === false) {
    var $after = tr.doc.resolve(pos + depth);
    replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
  }
  if (beforeType.inlineContent) _clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
  var mapping = tr.mapping.slice(mapFrom),
    start = mapping.map(pos - depth);
  tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), prosemirrorModel.Slice.empty, true));
  if (convertNewlines === true) {
    var $full = tr.doc.resolve(start);
    replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
  }
  return tr;
}
function insertPoint(doc, pos, nodeType) {
  var $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
  if ($pos.parentOffset == 0) for (var d = $pos.depth - 1; d >= 0; d--) {
    var index = $pos.index(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
    if (index > 0) return null;
  }
  if ($pos.parentOffset == $pos.parent.content.size) for (var _d2 = $pos.depth - 1; _d2 >= 0; _d2--) {
    var _index2 = $pos.indexAfter(_d2);
    if ($pos.node(_d2).canReplaceWith(_index2, _index2, nodeType)) return $pos.after(_d2 + 1);
    if (_index2 < $pos.node(_d2).childCount) return null;
  }
  return null;
}
function dropPoint(doc, pos, slice) {
  var $pos = doc.resolve(pos);
  if (!slice.content.size) return pos;
  var content = slice.content;
  for (var i = 0; i < slice.openStart; i++) content = content.firstChild.content;
  for (var pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (var d = $pos.depth; d >= 0; d--) {
      var bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      var insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      var parent = $pos.node(d),
        fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        var wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}
function replaceStep(doc, from) {
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : from;
  var slice = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : prosemirrorModel.Slice.empty;
  if (from == to && !slice.size) return null;
  var $from = doc.resolve(from),
    $to = doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
  return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
var Fitter = function () {
  function Fitter($from, $to, unplaced) {
    _classCallCheck(this, Fitter);
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = prosemirrorModel.Fragment.empty;
    for (var i = 0; i <= $from.depth; i++) {
      var node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (var _i2 = $from.depth; _i2 > 0; _i2--) this.placed = prosemirrorModel.Fragment.from($from.node(_i2).copy(this.placed));
  }
  _createClass(Fitter, [{
    key: "depth",
    get: function get() {
      return this.frontier.length - 1;
    }
  }, {
    key: "fit",
    value: function fit() {
      while (this.unplaced.size) {
        var fit = this.findFittable();
        if (fit) this.placeNodes(fit);else this.openMore() || this.dropNode();
      }
      var moveInline = this.mustMoveInline(),
        placedSize = this.placed.size - this.depth - this.$from.depth;
      var $from = this.$from,
        $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
      if (!$to) return null;
      var content = this.placed,
        openStart = $from.depth,
        openEnd = $to.depth;
      while (openStart && openEnd && content.childCount == 1) {
        content = content.firstChild.content;
        openStart--;
        openEnd--;
      }
      var slice = new prosemirrorModel.Slice(content, openStart, openEnd);
      if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
      if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
      return null;
    }
  }, {
    key: "findFittable",
    value: function findFittable() {
      var startDepth = this.unplaced.openStart;
      for (var cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
        var node = cur.firstChild;
        if (cur.childCount > 1) openEnd = 0;
        if (node.type.spec.isolating && openEnd <= d) {
          startDepth = d;
          break;
        }
        cur = node.content;
      }
      for (var pass = 1; pass <= 2; pass++) {
        for (var sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
          var fragment = void 0,
            parent = null;
          if (sliceDepth) {
            parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
            fragment = parent.content;
          } else {
            fragment = this.unplaced.content;
          }
          var first = fragment.firstChild;
          for (var frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
            var _this$frontier$fronti = this.frontier[frontierDepth],
              type = _this$frontier$fronti.type,
              match = _this$frontier$fronti.match,
              _wrap = void 0,
              inject = null;
            if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(prosemirrorModel.Fragment.from(first), false)) : parent && type.compatibleContent(parent.type))) return {
              sliceDepth: sliceDepth,
              frontierDepth: frontierDepth,
              parent: parent,
              inject: inject
            };else if (pass == 2 && first && (_wrap = match.findWrapping(first.type))) return {
              sliceDepth: sliceDepth,
              frontierDepth: frontierDepth,
              parent: parent,
              wrap: _wrap
            };
            if (parent && match.matchType(parent.type)) break;
          }
        }
      }
    }
  }, {
    key: "openMore",
    value: function openMore() {
      var _this$unplaced = this.unplaced,
        content = _this$unplaced.content,
        openStart = _this$unplaced.openStart,
        openEnd = _this$unplaced.openEnd;
      var inner = contentAt(content, openStart);
      if (!inner.childCount || inner.firstChild.isLeaf) return false;
      this.unplaced = new prosemirrorModel.Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
      return true;
    }
  }, {
    key: "dropNode",
    value: function dropNode() {
      var _this$unplaced2 = this.unplaced,
        content = _this$unplaced2.content,
        openStart = _this$unplaced2.openStart,
        openEnd = _this$unplaced2.openEnd;
      var inner = contentAt(content, openStart);
      if (inner.childCount <= 1 && openStart > 0) {
        var openAtEnd = content.size - openStart <= openStart + inner.size;
        this.unplaced = new prosemirrorModel.Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
      } else {
        this.unplaced = new prosemirrorModel.Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
      }
    }
  }, {
    key: "placeNodes",
    value: function placeNodes(_ref) {
      var sliceDepth = _ref.sliceDepth,
        frontierDepth = _ref.frontierDepth,
        parent = _ref.parent,
        inject = _ref.inject,
        wrap = _ref.wrap;
      while (this.depth > frontierDepth) this.closeFrontierNode();
      if (wrap) for (var i = 0; i < wrap.length; i++) this.openFrontierNode(wrap[i]);
      var slice = this.unplaced,
        fragment = parent ? parent.content : slice.content;
      var openStart = slice.openStart - sliceDepth;
      var taken = 0,
        add = [];
      var _this$frontier$fronti2 = this.frontier[frontierDepth],
        match = _this$frontier$fronti2.match,
        type = _this$frontier$fronti2.type;
      if (inject) {
        for (var _i3 = 0; _i3 < inject.childCount; _i3++) add.push(inject.child(_i3));
        match = match.matchFragment(inject);
      }
      var openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
      while (taken < fragment.childCount) {
        var next = fragment.child(taken),
          matches = match.matchType(next.type);
        if (!matches) break;
        taken++;
        if (taken > 1 || openStart == 0 || next.content.size) {
          match = matches;
          add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
        }
      }
      var toEnd = taken == fragment.childCount;
      if (!toEnd) openEndCount = -1;
      this.placed = addToFragment(this.placed, frontierDepth, prosemirrorModel.Fragment.from(add));
      this.frontier[frontierDepth].match = match;
      if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
      for (var _i4 = 0, cur = fragment; _i4 < openEndCount; _i4++) {
        var node = cur.lastChild;
        this.frontier.push({
          type: node.type,
          match: node.contentMatchAt(node.childCount)
        });
        cur = node.content;
      }
      this.unplaced = !toEnd ? new prosemirrorModel.Slice(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? prosemirrorModel.Slice.empty : new prosemirrorModel.Slice(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
    }
  }, {
    key: "mustMoveInline",
    value: function mustMoveInline() {
      if (!this.$to.parent.isTextblock) return -1;
      var top = this.frontier[this.depth],
        level;
      if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
      var depth = this.$to.depth,
        after = this.$to.after(depth);
      while (depth > 1 && after == this.$to.end(--depth)) ++after;
      return after;
    }
  }, {
    key: "findCloseLevel",
    value: function findCloseLevel($to) {
      scan: for (var i = Math.min(this.depth, $to.depth); i >= 0; i--) {
        var _this$frontier$i = this.frontier[i],
          match = _this$frontier$i.match,
          type = _this$frontier$i.type;
        var dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
        var fit = contentAfterFits($to, i, type, match, dropInner);
        if (!fit) continue;
        for (var d = i - 1; d >= 0; d--) {
          var _this$frontier$d = this.frontier[d],
            _match = _this$frontier$d.match,
            _type = _this$frontier$d.type;
          var matches = contentAfterFits($to, d, _type, _match, true);
          if (!matches || matches.childCount) continue scan;
        }
        return {
          depth: i,
          fit: fit,
          move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
        };
      }
    }
  }, {
    key: "close",
    value: function close($to) {
      var close = this.findCloseLevel($to);
      if (!close) return null;
      while (this.depth > close.depth) this.closeFrontierNode();
      if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
      $to = close.move;
      for (var d = close.depth + 1; d <= $to.depth; d++) {
        var node = $to.node(d),
          add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
        this.openFrontierNode(node.type, node.attrs, add);
      }
      return $to;
    }
  }, {
    key: "openFrontierNode",
    value: function openFrontierNode(type) {
      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var content = arguments.length > 2 ? arguments[2] : undefined;
      var top = this.frontier[this.depth];
      top.match = top.match.matchType(type);
      this.placed = addToFragment(this.placed, this.depth, prosemirrorModel.Fragment.from(type.create(attrs, content)));
      this.frontier.push({
        type: type,
        match: type.contentMatch
      });
    }
  }, {
    key: "closeFrontierNode",
    value: function closeFrontierNode() {
      var open = this.frontier.pop();
      var add = open.match.fillBefore(prosemirrorModel.Fragment.empty, true);
      if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
    }
  }]);
  return Fitter;
}();
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0) return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (var i = 0; i < depth; i++) fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) return node;
  var frag = node.content;
  if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(prosemirrorModel.Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  var node = $to.node(depth),
    index = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index == node.childCount && !type.compatibleContent(node.type)) return null;
  var fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
  for (var i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return true;
  return false;
}
function definesContent(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function _replaceRange(tr, from, to, slice) {
  if (!slice.size) return tr.deleteRange(from, to);
  var $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
  var targetDepths = coveredDepths($from, tr.doc.resolve(to));
  if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
  var preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  for (var d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    var spec = $from.node(d).type.spec;
    if (spec.defining || spec.definingAsContext || spec.isolating) break;
    if (targetDepths.indexOf(d) > -1) preferredTarget = d;else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
  }
  var preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  var leftNodes = [],
    preferredDepth = slice.openStart;
  for (var content = slice.content, i = 0;; i++) {
    var node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) break;
    content = node.content;
  }
  for (var _d3 = preferredDepth - 1; _d3 >= 0; _d3--) {
    var leftNode = leftNodes[_d3],
      def = definesContent(leftNode.type);
    if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = _d3;else if (def || !leftNode.type.isTextblock) break;
  }
  for (var j = slice.openStart; j >= 0; j--) {
    var openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    var insert = leftNodes[openDepth];
    if (!insert) continue;
    for (var _i5 = 0; _i5 < targetDepths.length; _i5++) {
      var targetDepth = targetDepths[(_i5 + preferredTargetIndex) % targetDepths.length],
        expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      var parent = $from.node(targetDepth - 1),
        index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new prosemirrorModel.Slice(closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
    }
  }
  var startSteps = tr.steps.length;
  for (var _i6 = targetDepths.length - 1; _i6 >= 0; _i6--) {
    tr.replace(from, to, slice);
    if (tr.steps.length > startSteps) break;
    var depth = targetDepths[_i6];
    if (depth < 0) continue;
    from = $from.before(depth);
    to = $to.after(depth);
  }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    var first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    var match = parent.contentMatchAt(0);
    var start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(prosemirrorModel.Fragment.empty, true));
  }
  return fragment;
}
function _replaceRangeWith(tr, from, to, node) {
  if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
    var point = insertPoint(tr.doc, from, node.type);
    if (point != null) from = to = point;
  }
  tr.replaceRange(from, to, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(node), 0, 0));
}
function _deleteRange(tr, from, to) {
  var $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  var covered = coveredDepths($from, $to);
  for (var i = 0; i < covered.length; i++) {
    var depth = covered[i],
      last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr["delete"]($from.start(depth), $to.end(depth));
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr["delete"]($from.before(depth), $to.after(depth));
  }
  for (var d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr["delete"]($from.before(d), to);
  }
  tr["delete"](from, to);
}
function coveredDepths($from, $to) {
  var result = [],
    minDepth = Math.min($from.depth, $to.depth);
  for (var d = minDepth; d >= 0; d--) {
    var start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
  }
  return result;
}
var AttrStep = function (_Step7) {
  _inherits(AttrStep, _Step7);
  var _super7 = _createSuper(AttrStep);
  function AttrStep(pos, attr, value) {
    var _this9;
    _classCallCheck(this, AttrStep);
    _this9 = _super7.call(this);
    _this9.pos = pos;
    _this9.attr = attr;
    _this9.value = value;
    return _this9;
  }
  _createClass(AttrStep, [{
    key: "apply",
    value: function apply(doc) {
      var node = doc.nodeAt(this.pos);
      if (!node) return StepResult.fail("No node at attribute step's position");
      var attrs = Object.create(null);
      for (var name in node.attrs) attrs[name] = node.attrs[name];
      attrs[this.attr] = this.value;
      var updated = node.type.create(attrs, null, node.marks);
      return StepResult.fromReplace(doc, this.pos, this.pos + 1, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return StepMap.empty;
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      return new AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      var pos = mapping.mapResult(this.pos, 1);
      return pos.deletedAfter ? null : new AttrStep(pos.pos, this.attr, this.value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "attr",
        pos: this.pos,
        attr: this.attr,
        value: this.value
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
      return new AttrStep(json.pos, json.attr, json.value);
    }
  }]);
  return AttrStep;
}(Step);
Step.jsonID("attr", AttrStep);
var DocAttrStep = function (_Step8) {
  _inherits(DocAttrStep, _Step8);
  var _super8 = _createSuper(DocAttrStep);
  function DocAttrStep(attr, value) {
    var _this10;
    _classCallCheck(this, DocAttrStep);
    _this10 = _super8.call(this);
    _this10.attr = attr;
    _this10.value = value;
    return _this10;
  }
  _createClass(DocAttrStep, [{
    key: "apply",
    value: function apply(doc) {
      var attrs = Object.create(null);
      for (var name in doc.attrs) attrs[name] = doc.attrs[name];
      attrs[this.attr] = this.value;
      var updated = doc.type.create(attrs, doc.content, doc.marks);
      return StepResult.ok(updated);
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return StepMap.empty;
    }
  }, {
    key: "invert",
    value: function invert(doc) {
      return new DocAttrStep(this.attr, doc.attrs[this.attr]);
    }
  }, {
    key: "map",
    value: function map(mapping) {
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        stepType: "docAttr",
        attr: this.attr,
        value: this.value
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(schema, json) {
      if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
      return new DocAttrStep(json.attr, json.value);
    }
  }]);
  return DocAttrStep;
}(Step);
Step.jsonID("docAttr", DocAttrStep);
exports.TransformError = function (_Error) {
  _inherits(TransformError, _Error);
  var _super9 = _createSuper(TransformError);
  function TransformError() {
    _classCallCheck(this, TransformError);
    return _super9.apply(this, arguments);
  }
  return _createClass(TransformError);
}(_wrapNativeSuper(Error));
exports.TransformError = function TransformError(message) {
  var err = Error.call(this, message);
  err.__proto__ = TransformError.prototype;
  return err;
};
exports.TransformError.prototype = Object.create(Error.prototype);
exports.TransformError.prototype.constructor = exports.TransformError;
exports.TransformError.prototype.name = "TransformError";
var Transform = function () {
  function Transform(doc) {
    _classCallCheck(this, Transform);
    this.doc = doc;
    this.steps = [];
    this.docs = [];
    this.mapping = new Mapping();
  }
  _createClass(Transform, [{
    key: "before",
    get: function get() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
  }, {
    key: "step",
    value: function step(_step) {
      var result = this.maybeStep(_step);
      if (result.failed) throw new exports.TransformError(result.failed);
      return this;
    }
  }, {
    key: "maybeStep",
    value: function maybeStep(step) {
      var result = step.apply(this.doc);
      if (!result.failed) this.addStep(step, result.doc);
      return result;
    }
  }, {
    key: "docChanged",
    get: function get() {
      return this.steps.length > 0;
    }
  }, {
    key: "addStep",
    value: function addStep(step, doc) {
      this.docs.push(this.doc);
      this.steps.push(step);
      this.mapping.appendMap(step.getMap());
      this.doc = doc;
    }
  }, {
    key: "replace",
    value: function replace(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
      var slice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : prosemirrorModel.Slice.empty;
      var step = replaceStep(this.doc, from, to, slice);
      if (step) this.step(step);
      return this;
    }
  }, {
    key: "replaceWith",
    value: function replaceWith(from, to, content) {
      return this.replace(from, to, new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(content), 0, 0));
    }
  }, {
    key: "delete",
    value: function _delete(from, to) {
      return this.replace(from, to, prosemirrorModel.Slice.empty);
    }
  }, {
    key: "insert",
    value: function insert(pos, content) {
      return this.replaceWith(pos, pos, content);
    }
  }, {
    key: "replaceRange",
    value: function replaceRange(from, to, slice) {
      _replaceRange(this, from, to, slice);
      return this;
    }
  }, {
    key: "replaceRangeWith",
    value: function replaceRangeWith(from, to, node) {
      _replaceRangeWith(this, from, to, node);
      return this;
    }
  }, {
    key: "deleteRange",
    value: function deleteRange(from, to) {
      _deleteRange(this, from, to);
      return this;
    }
  }, {
    key: "lift",
    value: function lift(range, target) {
      _lift(this, range, target);
      return this;
    }
  }, {
    key: "join",
    value: function join(pos) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      _join(this, pos, depth);
      return this;
    }
  }, {
    key: "wrap",
    value: function wrap(range, wrappers) {
      _wrap2(this, range, wrappers);
      return this;
    }
  }, {
    key: "setBlockType",
    value: function setBlockType(from) {
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : from;
      var type = arguments.length > 2 ? arguments[2] : undefined;
      var attrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      _setBlockType(this, from, to, type, attrs);
      return this;
    }
  }, {
    key: "setNodeMarkup",
    value: function setNodeMarkup(pos, type) {
      var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var marks = arguments.length > 3 ? arguments[3] : undefined;
      _setNodeMarkup(this, pos, type, attrs, marks);
      return this;
    }
  }, {
    key: "setNodeAttribute",
    value: function setNodeAttribute(pos, attr, value) {
      this.step(new AttrStep(pos, attr, value));
      return this;
    }
  }, {
    key: "setDocAttribute",
    value: function setDocAttribute(attr, value) {
      this.step(new DocAttrStep(attr, value));
      return this;
    }
  }, {
    key: "addNodeMark",
    value: function addNodeMark(pos, mark) {
      this.step(new AddNodeMarkStep(pos, mark));
      return this;
    }
  }, {
    key: "removeNodeMark",
    value: function removeNodeMark(pos, mark) {
      if (!(mark instanceof prosemirrorModel.Mark)) {
        var node = this.doc.nodeAt(pos);
        if (!node) throw new RangeError("No node at position " + pos);
        mark = mark.isInSet(node.marks);
        if (!mark) return this;
      }
      this.step(new RemoveNodeMarkStep(pos, mark));
      return this;
    }
  }, {
    key: "split",
    value: function split(pos) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var typesAfter = arguments.length > 2 ? arguments[2] : undefined;
      _split(this, pos, depth, typesAfter);
      return this;
    }
  }, {
    key: "addMark",
    value: function addMark(from, to, mark) {
      _addMark(this, from, to, mark);
      return this;
    }
  }, {
    key: "removeMark",
    value: function removeMark(from, to, mark) {
      _removeMark(this, from, to, mark);
      return this;
    }
  }, {
    key: "clearIncompatible",
    value: function clearIncompatible(pos, parentType, match) {
      _clearIncompatible(this, pos, parentType, match);
      return this;
    }
  }]);
  return Transform;
}();
exports.AddMarkStep = AddMarkStep;
exports.AddNodeMarkStep = AddNodeMarkStep;
exports.AttrStep = AttrStep;
exports.DocAttrStep = DocAttrStep;
exports.MapResult = MapResult;
exports.Mapping = Mapping;
exports.RemoveMarkStep = RemoveMarkStep;
exports.RemoveNodeMarkStep = RemoveNodeMarkStep;
exports.ReplaceAroundStep = ReplaceAroundStep;
exports.ReplaceStep = ReplaceStep;
exports.Step = Step;
exports.StepMap = StepMap;
exports.StepResult = StepResult;
exports.Transform = Transform;
exports.canJoin = canJoin;
exports.canSplit = canSplit;
exports.dropPoint = dropPoint;
exports.findWrapping = findWrapping;
exports.insertPoint = insertPoint;
exports.joinPoint = joinPoint;
exports.liftTarget = liftTarget;
exports.replaceStep = replaceStep;


/***/ }),

/***/ "./node_modules/prosemirror-view/dist/index.cjs":
/*!******************************************************!*\
  !*** ./node_modules/prosemirror-view/dist/index.cjs ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var prosemirrorState = __webpack_require__(/*! prosemirror-state */ "./node_modules/prosemirror-state/dist/index.cjs");
var prosemirrorModel = __webpack_require__(/*! prosemirror-model */ "./node_modules/prosemirror-model/dist/index.cjs");
var prosemirrorTransform = __webpack_require__(/*! prosemirror-transform */ "./node_modules/prosemirror-transform/dist/index.cjs");
var domIndex = function domIndex(node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
};
var parentNode = function parentNode(node) {
  var parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function textRange(node, from, to) {
  var range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range;
};
var clearReusedRange = function clearReusedRange() {
  reusedRange = null;
};
var isEquivalentPosition = function isEquivalentPosition(node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  for (;;) {
    if (node == targetNode && off == targetOff) return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      var parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false") return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      node = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (node.contentEditable == "false") return false;
      off = dir < 0 ? nodeSize(node) : 0;
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset) return node;
    if (node.nodeType == 1 && offset > 0) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset - 1];
      offset = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset < node.nodeValue.length) return node;
    if (node.nodeType == 1 && offset < node.childNodes.length) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset];
      offset = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset, parent) {
  for (var atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd;) {
    if (node == parent) return true;
    var index = domIndex(node);
    node = node.parentNode;
    if (!node) return false;
    atStart = atStart && index == 0;
    atEnd = atEnd && index == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  var desc;
  for (var cur = dom; cur; cur = cur.parentNode) if (desc = cur.pmViewDesc) break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function selectionCollapsed(domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  var event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc) {
  var elt = doc.activeElement;
  while (elt && elt.shadowRoot) elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc, x, y) {
  if (doc.caretPositionFromPoint) {
    try {
      var pos = doc.caretPositionFromPoint(x, y);
      if (pos) return {
        node: pos.offsetNode,
        offset: Math.min(nodeSize(pos.offsetNode), pos.offset)
      };
    } catch (_) {}
  }
  if (doc.caretRangeFromPoint) {
    var range = doc.caretRangeFromPoint(x, y);
    if (range) return {
      node: range.startContainer,
      offset: Math.min(nodeSize(range.startContainer), range.startOffset)
    };
  }
}
var nav = typeof navigator != "undefined" ? navigator : null;
var doc = typeof document != "undefined" ? document : null;
var agent = nav && nav.userAgent || "";
var ie_edge = /Edge\/(\d+)/.exec(agent);
var ie_upto10 = /MSIE \d/.exec(agent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
var gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
var chrome = !!_chrome;
var chrome_version = _chrome ? +_chrome[1] : 0;
var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
var windows = nav ? /Win/.test(nav.platform) : false;
var android = /Android \d/.test(agent);
var webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style;
var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc) {
  var vp = doc.defaultView && doc.defaultView.visualViewport;
  if (vp) return {
    left: 0,
    right: vp.width,
    top: 0,
    bottom: vp.height
  };
  return {
    left: 0,
    right: doc.documentElement.clientWidth,
    top: 0,
    bottom: doc.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node) {
  var rect = node.getBoundingClientRect();
  var scaleX = rect.width / node.offsetWidth || 1;
  var scaleY = rect.height / node.offsetHeight || 1;
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  var scrollThreshold = view.someProp("scrollThreshold") || 0,
    scrollMargin = view.someProp("scrollMargin") || 5;
  var doc = view.dom.ownerDocument;
  for (var parent = startDOM || view.dom;; parent = parentNode(parent)) {
    if (!parent) break;
    if (parent.nodeType != 1) continue;
    var elt = parent;
    var atTop = elt == doc.body;
    var bounding = atTop ? windowRect(doc) : clientRect(elt);
    var moveX = 0,
      moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top")) moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left")) moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));else if (rect.right > bounding.right - getSide(scrollThreshold, "right")) moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc.defaultView.scrollBy(moveX, moveY);
      } else {
        var startX = elt.scrollLeft,
          startY = elt.scrollTop;
        if (moveY) elt.scrollTop += moveY;
        if (moveX) elt.scrollLeft += moveX;
        var dX = elt.scrollLeft - startX,
          dY = elt.scrollTop - startY;
        rect = {
          left: rect.left - dX,
          top: rect.top - dY,
          right: rect.right - dX,
          bottom: rect.bottom - dY
        };
      }
    }
    if (atTop || /^(fixed|sticky)$/.test(getComputedStyle(parent).position)) break;
  }
}
function storeScrollPos(view) {
  var rect = view.dom.getBoundingClientRect(),
    startY = Math.max(0, rect.top);
  var refDOM, refTop;
  for (var x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    var dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom)) continue;
    var localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return {
    refDOM: refDOM,
    refTop: refTop,
    stack: scrollStack(view.dom)
  };
}
function scrollStack(dom) {
  var stack = [],
    doc = dom.ownerDocument;
  for (var cur = dom; cur; cur = parentNode(cur)) {
    stack.push({
      dom: cur,
      top: cur.scrollTop,
      left: cur.scrollLeft
    });
    if (dom == doc) break;
  }
  return stack;
}
function resetScrollPos(_ref) {
  var refDOM = _ref.refDOM,
    refTop = _ref.refTop,
    stack = _ref.stack;
  var newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (var i = 0; i < stack.length; i++) {
    var _stack$i = stack[i],
      dom = _stack$i.dom,
      top = _stack$i.top,
      left = _stack$i.left;
    if (dom.scrollTop != top + dTop) dom.scrollTop = top + dTop;
    if (dom.scrollLeft != left) dom.scrollLeft = left;
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive();
  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  var stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {
        preventScroll: true
      };
      return true;
    }
  } : undefined);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  var closest,
    dxClosest = 2e8,
    coordsClosest,
    offset = 0;
  var rowBot = coords.top,
    rowTop = coords.top;
  var firstBelow, coordsBelow;
  for (var child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    var rects = void 0;
    if (child.nodeType == 1) rects = child.getClientRects();else if (child.nodeType == 3) rects = textRange(child).getClientRects();else continue;
    for (var i = 0; i < rects.length; i++) {
      var rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        var dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx) offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = {
          left: Math.max(rect.left, Math.min(rect.right, coords.left)),
          top: rect.top
        };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom)) offset = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1) return {
    node: node,
    offset: offset
  };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  var len = node.nodeValue.length;
  var range = document.createRange();
  for (var i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    var rect = singleRect(range, 1);
    if (rect.top == rect.bottom) continue;
    if (inRect(coords, rect)) return {
      node: node,
      offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
    };
  }
  return {
    node: node,
    offset: 0
  };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  var parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  var _findOffsetInNode = findOffsetInNode(elt, coords),
    node = _findOffsetInNode.node,
    offset = _findOffsetInNode.offset,
    bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    var rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset, bias);
}
function posFromCaret(view, node, offset, coords) {
  var outsideBlock = -1;
  for (var cur = node, sawBlock = false;;) {
    if (cur == view.dom) break;
    var desc = view.docView.nearestDesc(cur, true);
    if (!desc) return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM)) {
      var rect = desc.dom.getBoundingClientRect();
      if (desc.node.isBlock && desc.parent) {
        if (!sawBlock && rect.left > coords.left || rect.top > coords.top) outsideBlock = desc.posBefore;else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top) outsideBlock = desc.posAfter;
        sawBlock = true;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        var before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset, -1);
}
function elementFromPoint(element, coords, box) {
  var len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (var startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI;;) {
      var child = element.childNodes[i];
      if (child.nodeType == 1) {
        var rects = child.getClientRects();
        for (var j = 0; j < rects.length; j++) {
          var rect = rects[j];
          if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI) break;
    }
  }
  return element;
}
function _posAtCoords(view, coords) {
  var doc = view.dom.ownerDocument,
    node,
    offset = 0;
  var caret = caretFromPoint(doc, coords.left, coords.top);
  if (caret) {
    node = caret.node;
    offset = caret.offset;
  }
  var elt = (view.root.elementFromPoint ? view.root : doc).elementFromPoint(coords.left, coords.top);
  var pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    var box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) return null;
  }
  if (safari) {
    for (var p = elt; node && p; p = parentNode(p)) if (p.draggable) node = undefined;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      offset = Math.min(offset, node.childNodes.length);
      if (offset < node.childNodes.length) {
        var next = node.childNodes[offset],
          _box;
        if (next.nodeName == "IMG" && (_box = next.getBoundingClientRect()).right <= coords.left && _box.bottom > coords.top) offset++;
      }
    }
    var prev;
    if (webkit && offset && node.nodeType == 1 && (prev = node.childNodes[offset - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top) offset--;
    if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom) pos = view.state.doc.content.size;else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR") pos = posFromCaret(view, node, offset, coords);
  }
  if (pos == null) pos = posFromElement(view, elt, coords);
  var desc = view.docView.nearestDesc(elt, true);
  return {
    pos: pos,
    inside: desc ? desc.posAtStart - desc.border : -1
  };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  var rects = target.getClientRects();
  if (rects.length) {
    var first = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first)) return first;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _coordsAtPos(view, pos, side) {
  var _view$docView$domFrom = view.docView.domFromPos(pos, side < 0 ? -1 : 1),
    node = _view$docView$domFrom.node,
    offset = _view$docView$domFrom.offset,
    atom = _view$docView$domFrom.atom;
  var supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
      var rect = singleRect(textRange(node, offset, offset), side);
      if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
        var rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
        if (rectBefore.top == rect.top) {
          var rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
          if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      var from = offset,
        to = offset,
        takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset == node.nodeValue.length) {
        from--;
        takeSide = 1;
      } else if (side < 0) {
        from--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from, to), takeSide), takeSide < 0);
    }
  }
  var $dom = view.state.doc.resolve(pos - (atom || 0));
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
      var before = node.childNodes[offset - 1];
      if (before.nodeType == 1) return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset < nodeSize(node)) {
      var after = node.childNodes[offset];
      if (after.nodeType == 1) return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
    var _before = node.childNodes[offset - 1];
    var target = _before.nodeType == 3 ? textRange(_before, nodeSize(_before) - (supportEmptyRange ? 0 : 1)) : _before.nodeType == 1 && (_before.nodeName != "BR" || !_before.nextSibling) ? _before : null;
    if (target) return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset < nodeSize(node)) {
    var _after = node.childNodes[offset];
    while (_after.pmViewDesc && _after.pmViewDesc.ignoreForCoords) _after = _after.nextSibling;
    var _target = !_after ? null : _after.nodeType == 3 ? textRange(_after, 0, supportEmptyRange ? 0 : 1) : _after.nodeType == 1 ? _after : null;
    if (_target) return flattenV(singleRect(_target, -1), true);
  }
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left) {
  if (rect.width == 0) return rect;
  var x = left ? rect.left : rect.right;
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: x,
    right: x
  };
}
function flattenH(rect, top) {
  if (rect.height == 0) return rect;
  var y = top ? rect.top : rect.bottom;
  return {
    top: y,
    bottom: y,
    left: rect.left,
    right: rect.right
  };
}
function withFlushedState(view, state, f) {
  var viewState = view.state,
    active = view.root.activeElement;
  if (viewState != state) view.updateState(state);
  if (active != view.dom) view.focus();
  try {
    return f();
  } finally {
    if (viewState != state) view.updateState(viewState);
    if (active != view.dom && active) active.focus();
  }
}
function endOfTextblockVertical(view, state, dir) {
  var sel = state.selection;
  var $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, function () {
    var _view$docView$domFrom2 = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1),
      dom = _view$docView$domFrom2.node;
    for (;;) {
      var nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    var coords = _coordsAtPos(view, $pos.pos, 1);
    for (var child = dom.firstChild; child; child = child.nextSibling) {
      var boxes = void 0;
      if (child.nodeType == 1) boxes = child.getClientRects();else if (child.nodeType == 3) boxes = textRange(child, 0, child.nodeValue.length).getClientRects();else continue;
      for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) return false;
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  var $head = state.selection.$head;
  if (!$head.parent.isTextblock) return false;
  var offset = $head.parentOffset,
    atStart = !offset,
    atEnd = offset == $head.parent.content.size;
  var sel = view.domSelection();
  if (!sel) return $head.pos == $head.start() || $head.pos == $head.end();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state, function () {
    var _view$domSelectionRan = view.domSelectionRange(),
      oldNode = _view$domSelectionRan.focusNode,
      oldOff = _view$domSelectionRan.focusOffset,
      anchorNode = _view$domSelectionRan.anchorNode,
      anchorOffset = _view$domSelectionRan.anchorOffset;
    var oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    var parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    var _view$domSelectionRan2 = view.domSelectionRange(),
      newNode = _view$domSelectionRan2.focusNode,
      newOff = _view$domSelectionRan2.focusOffset;
    var result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend) sel.extend(oldNode, oldOff);
    } catch (_) {}
    if (oldBidiLevel != null) sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
var cachedState = null;
var cachedDir = null;
var cachedResult = false;
function _endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) return cachedResult;
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}
var NOT_DIRTY = 0,
  CHILD_DIRTY = 1,
  CONTENT_DIRTY = 2,
  NODE_DIRTY = 3;
var ViewDesc = function () {
  function ViewDesc(parent, children, dom, contentDOM) {
    _classCallCheck(this, ViewDesc);
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    dom.pmViewDesc = this;
  }
  _createClass(ViewDesc, [{
    key: "matchesWidget",
    value: function matchesWidget(widget) {
      return false;
    }
  }, {
    key: "matchesMark",
    value: function matchesMark(mark) {
      return false;
    }
  }, {
    key: "matchesNode",
    value: function matchesNode(node, outerDeco, innerDeco) {
      return false;
    }
  }, {
    key: "matchesHack",
    value: function matchesHack(nodeName) {
      return false;
    }
  }, {
    key: "parseRule",
    value: function parseRule() {
      return null;
    }
  }, {
    key: "stopEvent",
    value: function stopEvent(event) {
      return false;
    }
  }, {
    key: "size",
    get: function get() {
      var size = 0;
      for (var i = 0; i < this.children.length; i++) size += this.children[i].size;
      return size;
    }
  }, {
    key: "border",
    get: function get() {
      return 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.parent = undefined;
      if (this.dom.pmViewDesc == this) this.dom.pmViewDesc = undefined;
      for (var i = 0; i < this.children.length; i++) this.children[i].destroy();
    }
  }, {
    key: "posBeforeChild",
    value: function posBeforeChild(child) {
      for (var i = 0, pos = this.posAtStart;; i++) {
        var cur = this.children[i];
        if (cur == child) return pos;
        pos += cur.size;
      }
    }
  }, {
    key: "posBefore",
    get: function get() {
      return this.parent.posBeforeChild(this);
    }
  }, {
    key: "posAtStart",
    get: function get() {
      return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
  }, {
    key: "posAfter",
    get: function get() {
      return this.posBefore + this.size;
    }
  }, {
    key: "posAtEnd",
    get: function get() {
      return this.posAtStart + this.size - 2 * this.border;
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(dom, offset, bias) {
      if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
        if (bias < 0) {
          var domBefore, desc;
          if (dom == this.contentDOM) {
            domBefore = dom.childNodes[offset - 1];
          } else {
            while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
            domBefore = dom.previousSibling;
          }
          while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) domBefore = domBefore.previousSibling;
          return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
        } else {
          var domAfter, _desc;
          if (dom == this.contentDOM) {
            domAfter = dom.childNodes[offset];
          } else {
            while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
            domAfter = dom.nextSibling;
          }
          while (domAfter && !((_desc = domAfter.pmViewDesc) && _desc.parent == this)) domAfter = domAfter.nextSibling;
          return domAfter ? this.posBeforeChild(_desc) : this.posAtEnd;
        }
      }
      var atEnd;
      if (dom == this.dom && this.contentDOM) {
        atEnd = offset > domIndex(this.contentDOM);
      } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
        atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
      } else if (this.dom.firstChild) {
        if (offset == 0) for (var search = dom;; search = search.parentNode) {
          if (search == this.dom) {
            atEnd = false;
            break;
          }
          if (search.previousSibling) break;
        }
        if (atEnd == null && offset == dom.childNodes.length) for (var _search = dom;; _search = _search.parentNode) {
          if (_search == this.dom) {
            atEnd = true;
            break;
          }
          if (_search.nextSibling) break;
        }
      }
      return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
    }
  }, {
    key: "nearestDesc",
    value: function nearestDesc(dom) {
      var onlyNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      for (var first = true, cur = dom; cur; cur = cur.parentNode) {
        var desc = this.getDesc(cur),
          nodeDOM = void 0;
        if (desc && (!onlyNodes || desc.node)) {
          if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom)) first = false;else return desc;
        }
      }
    }
  }, {
    key: "getDesc",
    value: function getDesc(dom) {
      var desc = dom.pmViewDesc;
      for (var cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
    }
  }, {
    key: "posFromDOM",
    value: function posFromDOM(dom, offset, bias) {
      for (var scan = dom; scan; scan = scan.parentNode) {
        var desc = this.getDesc(scan);
        if (desc) return desc.localPosFromDOM(dom, offset, bias);
      }
      return -1;
    }
  }, {
    key: "descAt",
    value: function descAt(pos) {
      for (var i = 0, offset = 0; i < this.children.length; i++) {
        var child = this.children[i],
          end = offset + child.size;
        if (offset == pos && end != offset) {
          while (!child.border && child.children.length) child = child.children[0];
          return child;
        }
        if (pos < end) return child.descAt(pos - offset - child.border);
        offset = end;
      }
    }
  }, {
    key: "domFromPos",
    value: function domFromPos(pos, side) {
      if (!this.contentDOM) return {
        node: this.dom,
        offset: 0,
        atom: pos + 1
      };
      var i = 0,
        offset = 0;
      for (var curPos = 0; i < this.children.length; i++) {
        var child = this.children[i],
          end = curPos + child.size;
        if (end > pos || child instanceof TrailingHackViewDesc) {
          offset = pos - curPos;
          break;
        }
        curPos = end;
      }
      if (offset) return this.children[i].domFromPos(offset - this.children[i].border, side);
      for (var prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {}
      if (side <= 0) {
        var _prev,
          enter = true;
        for (;; i--, enter = false) {
          _prev = i ? this.children[i - 1] : null;
          if (!_prev || _prev.dom.parentNode == this.contentDOM) break;
        }
        if (_prev && side && enter && !_prev.border && !_prev.domAtom) return _prev.domFromPos(_prev.size, side);
        return {
          node: this.contentDOM,
          offset: _prev ? domIndex(_prev.dom) + 1 : 0
        };
      } else {
        var next,
          _enter = true;
        for (;; i++, _enter = false) {
          next = i < this.children.length ? this.children[i] : null;
          if (!next || next.dom.parentNode == this.contentDOM) break;
        }
        if (next && _enter && !next.border && !next.domAtom) return next.domFromPos(0, side);
        return {
          node: this.contentDOM,
          offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length
        };
      }
    }
  }, {
    key: "parseRange",
    value: function parseRange(from, to) {
      var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (this.children.length == 0) return {
        node: this.contentDOM,
        from: from,
        to: to,
        fromOffset: 0,
        toOffset: this.contentDOM.childNodes.length
      };
      var fromOffset = -1,
        toOffset = -1;
      for (var offset = base, i = 0;; i++) {
        var child = this.children[i],
          end = offset + child.size;
        if (fromOffset == -1 && from <= end) {
          var childBase = offset + child.border;
          if (from >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from, to, childBase);
          from = offset;
          for (var j = i; j > 0; j--) {
            var prev = this.children[j - 1];
            if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
              fromOffset = domIndex(prev.dom) + 1;
              break;
            }
            from -= prev.size;
          }
          if (fromOffset == -1) fromOffset = 0;
        }
        if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
          to = end;
          for (var _j = i + 1; _j < this.children.length; _j++) {
            var next = this.children[_j];
            if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
              toOffset = domIndex(next.dom);
              break;
            }
            to += next.size;
          }
          if (toOffset == -1) toOffset = this.contentDOM.childNodes.length;
          break;
        }
        offset = end;
      }
      return {
        node: this.contentDOM,
        from: from,
        to: to,
        fromOffset: fromOffset,
        toOffset: toOffset
      };
    }
  }, {
    key: "emptyChildAt",
    value: function emptyChildAt(side) {
      if (this.border || !this.contentDOM || !this.children.length) return false;
      var child = this.children[side < 0 ? 0 : this.children.length - 1];
      return child.size == 0 || child.emptyChildAt(side);
    }
  }, {
    key: "domAfterPos",
    value: function domAfterPos(pos) {
      var _this$domFromPos = this.domFromPos(pos, 0),
        node = _this$domFromPos.node,
        offset = _this$domFromPos.offset;
      if (node.nodeType != 1 || offset == node.childNodes.length) throw new RangeError("No node after pos " + pos);
      return node.childNodes[offset];
    }
  }, {
    key: "setSelection",
    value: function setSelection(anchor, head, root) {
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var from = Math.min(anchor, head),
        to = Math.max(anchor, head);
      for (var i = 0, offset = 0; i < this.children.length; i++) {
        var child = this.children[i],
          end = offset + child.size;
        if (from > offset && to < end) return child.setSelection(anchor - offset - child.border, head - offset - child.border, root, force);
        offset = end;
      }
      var anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
      var headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
      var domSel = root.getSelection();
      var brKludge = false;
      if ((gecko || safari) && anchor == head) {
        var _anchorDOM = anchorDOM,
          node = _anchorDOM.node,
          _offset = _anchorDOM.offset;
        if (node.nodeType == 3) {
          brKludge = !!(_offset && node.nodeValue[_offset - 1] == "\n");
          if (brKludge && _offset == node.nodeValue.length) {
            for (var scan = node, after; scan; scan = scan.parentNode) {
              if (after = scan.nextSibling) {
                if (after.nodeName == "BR") anchorDOM = headDOM = {
                  node: after.parentNode,
                  offset: domIndex(after) + 1
                };
                break;
              }
              var desc = scan.pmViewDesc;
              if (desc && desc.node && desc.node.isBlock) break;
            }
          }
        } else {
          var prev = node.childNodes[_offset - 1];
          brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
        }
      }
      if (gecko && domSel.focusNode && domSel.focusNode != headDOM.node && domSel.focusNode.nodeType == 1) {
        var _after2 = domSel.focusNode.childNodes[domSel.focusOffset];
        if (_after2 && _after2.contentEditable == "false") force = true;
      }
      if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, domSel.focusNode, domSel.focusOffset)) return;
      var domSelExtended = false;
      if ((domSel.extend || anchor == head) && !brKludge) {
        domSel.collapse(anchorDOM.node, anchorDOM.offset);
        try {
          if (anchor != head) domSel.extend(headDOM.node, headDOM.offset);
          domSelExtended = true;
        } catch (_) {}
      }
      if (!domSelExtended) {
        if (anchor > head) {
          var tmp = anchorDOM;
          anchorDOM = headDOM;
          headDOM = tmp;
        }
        var range = document.createRange();
        range.setEnd(headDOM.node, headDOM.offset);
        range.setStart(anchorDOM.node, anchorDOM.offset);
        domSel.removeAllRanges();
        domSel.addRange(range);
      }
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(mutation) {
      return !this.contentDOM && mutation.type != "selection";
    }
  }, {
    key: "contentLost",
    get: function get() {
      return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }
  }, {
    key: "markDirty",
    value: function markDirty(from, to) {
      for (var offset = 0, i = 0; i < this.children.length; i++) {
        var child = this.children[i],
          end = offset + child.size;
        if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
          var startInside = offset + child.border,
            endInside = end - child.border;
          if (from >= startInside && to <= endInside) {
            this.dirty = from == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
            if (from == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM)) child.dirty = NODE_DIRTY;else child.markDirty(from - startInside, to - startInside);
            return;
          } else {
            child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
          }
        }
        offset = end;
      }
      this.dirty = CONTENT_DIRTY;
    }
  }, {
    key: "markParentsDirty",
    value: function markParentsDirty() {
      var level = 1;
      for (var node = this.parent; node; node = node.parent, level++) {
        var dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
        if (node.dirty < dirty) node.dirty = dirty;
      }
    }
  }, {
    key: "domAtom",
    get: function get() {
      return false;
    }
  }, {
    key: "ignoreForCoords",
    get: function get() {
      return false;
    }
  }, {
    key: "isText",
    value: function isText(text) {
      return false;
    }
  }]);
  return ViewDesc;
}();
var WidgetViewDesc = function (_ViewDesc) {
  _inherits(WidgetViewDesc, _ViewDesc);
  var _super = _createSuper(WidgetViewDesc);
  function WidgetViewDesc(parent, widget, view, pos) {
    var _this;
    _classCallCheck(this, WidgetViewDesc);
    var self,
      dom = widget.type.toDOM;
    if (typeof dom == "function") dom = dom(view, function () {
      if (!self) return pos;
      if (self.parent) return self.parent.posBeforeChild(self);
    });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        var wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    _this = _super.call(this, parent, [], dom, null);
    _this.widget = widget;
    _this.widget = widget;
    self = _assertThisInitialized(_this);
    return _this;
  }
  _createClass(WidgetViewDesc, [{
    key: "matchesWidget",
    value: function matchesWidget(widget) {
      return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
    }
  }, {
    key: "parseRule",
    value: function parseRule() {
      return {
        ignore: true
      };
    }
  }, {
    key: "stopEvent",
    value: function stopEvent(event) {
      var stop = this.widget.spec.stopEvent;
      return stop ? stop(event) : false;
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(mutation) {
      return mutation.type != "selection" || this.widget.spec.ignoreSelection;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.widget.type.destroy(this.dom);
      _get(_getPrototypeOf(WidgetViewDesc.prototype), "destroy", this).call(this);
    }
  }, {
    key: "domAtom",
    get: function get() {
      return true;
    }
  }, {
    key: "side",
    get: function get() {
      return this.widget.type.side;
    }
  }]);
  return WidgetViewDesc;
}(ViewDesc);
var CompositionViewDesc = function (_ViewDesc2) {
  _inherits(CompositionViewDesc, _ViewDesc2);
  var _super2 = _createSuper(CompositionViewDesc);
  function CompositionViewDesc(parent, dom, textDOM, text) {
    var _this2;
    _classCallCheck(this, CompositionViewDesc);
    _this2 = _super2.call(this, parent, [], dom, null);
    _this2.textDOM = textDOM;
    _this2.text = text;
    return _this2;
  }
  _createClass(CompositionViewDesc, [{
    key: "size",
    get: function get() {
      return this.text.length;
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(dom, offset) {
      if (dom != this.textDOM) return this.posAtStart + (offset ? this.size : 0);
      return this.posAtStart + offset;
    }
  }, {
    key: "domFromPos",
    value: function domFromPos(pos) {
      return {
        node: this.textDOM,
        offset: pos
      };
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(mut) {
      return mut.type === 'characterData' && mut.target.nodeValue == mut.oldValue;
    }
  }]);
  return CompositionViewDesc;
}(ViewDesc);
var MarkViewDesc = function (_ViewDesc3) {
  _inherits(MarkViewDesc, _ViewDesc3);
  var _super3 = _createSuper(MarkViewDesc);
  function MarkViewDesc(parent, mark, dom, contentDOM) {
    var _this3;
    _classCallCheck(this, MarkViewDesc);
    _this3 = _super3.call(this, parent, [], dom, contentDOM);
    _this3.mark = mark;
    return _this3;
  }
  _createClass(MarkViewDesc, [{
    key: "parseRule",
    value: function parseRule() {
      if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) return null;
      return {
        mark: this.mark.type.name,
        attrs: this.mark.attrs,
        contentElement: this.contentDOM
      };
    }
  }, {
    key: "matchesMark",
    value: function matchesMark(mark) {
      return this.dirty != NODE_DIRTY && this.mark.eq(mark);
    }
  }, {
    key: "markDirty",
    value: function markDirty(from, to) {
      _get(_getPrototypeOf(MarkViewDesc.prototype), "markDirty", this).call(this, from, to);
      if (this.dirty != NOT_DIRTY) {
        var parent = this.parent;
        while (!parent.node) parent = parent.parent;
        if (parent.dirty < this.dirty) parent.dirty = this.dirty;
        this.dirty = NOT_DIRTY;
      }
    }
  }, {
    key: "slice",
    value: function slice(from, to, view) {
      var copy = MarkViewDesc.create(this.parent, this.mark, true, view);
      var nodes = this.children,
        size = this.size;
      if (to < size) nodes = replaceNodes(nodes, to, size, view);
      if (from > 0) nodes = replaceNodes(nodes, 0, from, view);
      for (var i = 0; i < nodes.length; i++) nodes[i].parent = copy;
      copy.children = nodes;
      return copy;
    }
  }], [{
    key: "create",
    value: function create(parent, mark, inline, view) {
      var custom = view.nodeViews[mark.type.name];
      var spec = custom && custom(mark, view, inline);
      if (!spec || !spec.dom) spec = prosemirrorModel.DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline), null, mark.attrs);
      return new MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom);
    }
  }]);
  return MarkViewDesc;
}(ViewDesc);
var NodeViewDesc = function (_ViewDesc4) {
  _inherits(NodeViewDesc, _ViewDesc4);
  var _super4 = _createSuper(NodeViewDesc);
  function NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    var _this4;
    _classCallCheck(this, NodeViewDesc);
    _this4 = _super4.call(this, parent, [], dom, contentDOM);
    _this4.node = node;
    _this4.outerDeco = outerDeco;
    _this4.innerDeco = innerDeco;
    _this4.nodeDOM = nodeDOM;
    return _this4;
  }
  _createClass(NodeViewDesc, [{
    key: "parseRule",
    value: function parseRule() {
      var _this5 = this;
      if (this.node.type.spec.reparseInView) return null;
      var rule = {
        node: this.node.type.name,
        attrs: this.node.attrs
      };
      if (this.node.type.whitespace == "pre") rule.preserveWhitespace = "full";
      if (!this.contentDOM) {
        rule.getContent = function () {
          return _this5.node.content;
        };
      } else if (!this.contentLost) {
        rule.contentElement = this.contentDOM;
      } else {
        for (var i = this.children.length - 1; i >= 0; i--) {
          var child = this.children[i];
          if (this.dom.contains(child.dom.parentNode)) {
            rule.contentElement = child.dom.parentNode;
            break;
          }
        }
        if (!rule.contentElement) rule.getContent = function () {
          return prosemirrorModel.Fragment.empty;
        };
      }
      return rule;
    }
  }, {
    key: "matchesNode",
    value: function matchesNode(node, outerDeco, innerDeco) {
      return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
    }
  }, {
    key: "size",
    get: function get() {
      return this.node.nodeSize;
    }
  }, {
    key: "border",
    get: function get() {
      return this.node.isLeaf ? 0 : 1;
    }
  }, {
    key: "updateChildren",
    value: function updateChildren(view, pos) {
      var _this6 = this;
      var inline = this.node.inlineContent,
        off = pos;
      var composition = view.composing ? this.localCompositionInfo(view, pos) : null;
      var localComposition = composition && composition.pos > -1 ? composition : null;
      var compositionInChild = composition && composition.pos < 0;
      var updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
      iterDeco(this.node, this.innerDeco, function (widget, i, insideNode) {
        if (widget.spec.marks) updater.syncToMarks(widget.spec.marks, inline, view);else if (widget.type.side >= 0 && !insideNode) updater.syncToMarks(i == _this6.node.childCount ? prosemirrorModel.Mark.none : _this6.node.child(i).marks, inline, view);
        updater.placeWidget(widget, view, off);
      }, function (child, outerDeco, innerDeco, i) {
        updater.syncToMarks(child.marks, inline, view);
        var compIndex;
        if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;else {
          updater.addNode(child, outerDeco, innerDeco, view, off);
        }
        off += child.nodeSize;
      });
      updater.syncToMarks([], inline, view);
      if (this.node.isTextblock) updater.addTextblockHacks();
      updater.destroyRest();
      if (updater.changed || this.dirty == CONTENT_DIRTY) {
        if (localComposition) this.protectLocalComposition(view, localComposition);
        renderDescs(this.contentDOM, this.children, view);
        if (ios) iosHacks(this.dom);
      }
    }
  }, {
    key: "localCompositionInfo",
    value: function localCompositionInfo(view, pos) {
      var _view$state$selection = view.state.selection,
        from = _view$state$selection.from,
        to = _view$state$selection.to;
      if (!(view.state.selection instanceof prosemirrorState.TextSelection) || from < pos || to > pos + this.node.content.size) return null;
      var textNode = view.input.compositionNode;
      if (!textNode || !this.dom.contains(textNode.parentNode)) return null;
      if (this.node.inlineContent) {
        var text = textNode.nodeValue;
        var textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);
        return textPos < 0 ? null : {
          node: textNode,
          pos: textPos,
          text: text
        };
      } else {
        return {
          node: textNode,
          pos: -1,
          text: ""
        };
      }
    }
  }, {
    key: "protectLocalComposition",
    value: function protectLocalComposition(view, _ref2) {
      var node = _ref2.node,
        pos = _ref2.pos,
        text = _ref2.text;
      if (this.getDesc(node)) return;
      var topNode = node;
      for (;; topNode = topNode.parentNode) {
        if (topNode.parentNode == this.contentDOM) break;
        while (topNode.previousSibling) topNode.parentNode.removeChild(topNode.previousSibling);
        while (topNode.nextSibling) topNode.parentNode.removeChild(topNode.nextSibling);
        if (topNode.pmViewDesc) topNode.pmViewDesc = undefined;
      }
      var desc = new CompositionViewDesc(this, topNode, node, text);
      view.input.compositionNodes.push(desc);
      this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
    }
  }, {
    key: "update",
    value: function update(node, outerDeco, innerDeco, view) {
      if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node)) return false;
      this.updateInner(node, outerDeco, innerDeco, view);
      return true;
    }
  }, {
    key: "updateInner",
    value: function updateInner(node, outerDeco, innerDeco, view) {
      this.updateOuterDeco(outerDeco);
      this.node = node;
      this.innerDeco = innerDeco;
      if (this.contentDOM) this.updateChildren(view, this.posAtStart);
      this.dirty = NOT_DIRTY;
    }
  }, {
    key: "updateOuterDeco",
    value: function updateOuterDeco(outerDeco) {
      if (sameOuterDeco(outerDeco, this.outerDeco)) return;
      var needsWrap = this.nodeDOM.nodeType != 1;
      var oldDOM = this.dom;
      this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
      if (this.dom != oldDOM) {
        oldDOM.pmViewDesc = undefined;
        this.dom.pmViewDesc = this;
      }
      this.outerDeco = outerDeco;
    }
  }, {
    key: "selectNode",
    value: function selectNode() {
      if (this.nodeDOM.nodeType == 1) this.nodeDOM.classList.add("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) this.dom.draggable = true;
    }
  }, {
    key: "deselectNode",
    value: function deselectNode() {
      if (this.nodeDOM.nodeType == 1) {
        this.nodeDOM.classList.remove("ProseMirror-selectednode");
        if (this.contentDOM || !this.node.type.spec.draggable) this.dom.removeAttribute("draggable");
      }
    }
  }, {
    key: "domAtom",
    get: function get() {
      return this.node.isAtom;
    }
  }], [{
    key: "create",
    value: function create(parent, node, outerDeco, innerDeco, view, pos) {
      var custom = view.nodeViews[node.type.name],
        descObj;
      var spec = custom && custom(node, view, function () {
        if (!descObj) return pos;
        if (descObj.parent) return descObj.parent.posBeforeChild(descObj);
      }, outerDeco, innerDeco);
      var dom = spec && spec.dom,
        contentDOM = spec && spec.contentDOM;
      if (node.isText) {
        if (!dom) dom = document.createTextNode(node.text);else if (dom.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
      } else if (!dom) {
        var _spec = prosemirrorModel.DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
        dom = _spec.dom;
        contentDOM = _spec.contentDOM;
      }
      if (!contentDOM && !node.isText && dom.nodeName != "BR") {
        if (!dom.hasAttribute("contenteditable")) dom.contentEditable = "false";
        if (node.type.spec.draggable) dom.draggable = true;
      }
      var nodeDOM = dom;
      dom = applyOuterDeco(dom, outerDeco, node);
      if (spec) return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);else if (node.isText) return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);else return new NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
    }
  }]);
  return NodeViewDesc;
}(ViewDesc);
function docViewDesc(doc, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc);
  var docView = new NodeViewDesc(undefined, doc, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM) docView.updateChildren(view, 0);
  return docView;
}
var TextViewDesc = function (_NodeViewDesc) {
  _inherits(TextViewDesc, _NodeViewDesc);
  var _super5 = _createSuper(TextViewDesc);
  function TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    _classCallCheck(this, TextViewDesc);
    return _super5.call(this, parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  _createClass(TextViewDesc, [{
    key: "parseRule",
    value: function parseRule() {
      var skip = this.nodeDOM.parentNode;
      while (skip && skip != this.dom && !skip.pmIsDeco) skip = skip.parentNode;
      return {
        skip: skip || true
      };
    }
  }, {
    key: "update",
    value: function update(node, outerDeco, innerDeco, view) {
      if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node)) return false;
      this.updateOuterDeco(outerDeco);
      if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
        this.nodeDOM.nodeValue = node.text;
        if (view.trackWrites == this.nodeDOM) view.trackWrites = null;
      }
      this.node = node;
      this.dirty = NOT_DIRTY;
      return true;
    }
  }, {
    key: "inParent",
    value: function inParent() {
      var parentDOM = this.parent.contentDOM;
      for (var n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return true;
      return false;
    }
  }, {
    key: "domFromPos",
    value: function domFromPos(pos) {
      return {
        node: this.nodeDOM,
        offset: pos
      };
    }
  }, {
    key: "localPosFromDOM",
    value: function localPosFromDOM(dom, offset, bias) {
      if (dom == this.nodeDOM) return this.posAtStart + Math.min(offset, this.node.text.length);
      return _get(_getPrototypeOf(TextViewDesc.prototype), "localPosFromDOM", this).call(this, dom, offset, bias);
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(mutation) {
      return mutation.type != "characterData" && mutation.type != "selection";
    }
  }, {
    key: "slice",
    value: function slice(from, to, view) {
      var node = this.node.cut(from, to),
        dom = document.createTextNode(node.text);
      return new TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
    }
  }, {
    key: "markDirty",
    value: function markDirty(from, to) {
      _get(_getPrototypeOf(TextViewDesc.prototype), "markDirty", this).call(this, from, to);
      if (this.dom != this.nodeDOM && (from == 0 || to == this.nodeDOM.nodeValue.length)) this.dirty = NODE_DIRTY;
    }
  }, {
    key: "domAtom",
    get: function get() {
      return false;
    }
  }, {
    key: "isText",
    value: function isText(text) {
      return this.node.text == text;
    }
  }]);
  return TextViewDesc;
}(NodeViewDesc);
var TrailingHackViewDesc = function (_ViewDesc5) {
  _inherits(TrailingHackViewDesc, _ViewDesc5);
  var _super6 = _createSuper(TrailingHackViewDesc);
  function TrailingHackViewDesc() {
    _classCallCheck(this, TrailingHackViewDesc);
    return _super6.apply(this, arguments);
  }
  _createClass(TrailingHackViewDesc, [{
    key: "parseRule",
    value: function parseRule() {
      return {
        ignore: true
      };
    }
  }, {
    key: "matchesHack",
    value: function matchesHack(nodeName) {
      return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
    }
  }, {
    key: "domAtom",
    get: function get() {
      return true;
    }
  }, {
    key: "ignoreForCoords",
    get: function get() {
      return this.dom.nodeName == "IMG";
    }
  }]);
  return TrailingHackViewDesc;
}(ViewDesc);
var CustomNodeViewDesc = function (_NodeViewDesc2) {
  _inherits(CustomNodeViewDesc, _NodeViewDesc2);
  var _super7 = _createSuper(CustomNodeViewDesc);
  function CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    var _this7;
    _classCallCheck(this, CustomNodeViewDesc);
    _this7 = _super7.call(this, parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    _this7.spec = spec;
    return _this7;
  }
  _createClass(CustomNodeViewDesc, [{
    key: "update",
    value: function update(node, outerDeco, innerDeco, view) {
      if (this.dirty == NODE_DIRTY) return false;
      if (this.spec.update) {
        var result = this.spec.update(node, outerDeco, innerDeco);
        if (result) this.updateInner(node, outerDeco, innerDeco, view);
        return result;
      } else if (!this.contentDOM && !node.isLeaf) {
        return false;
      } else {
        return _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "update", this).call(this, node, outerDeco, innerDeco, view);
      }
    }
  }, {
    key: "selectNode",
    value: function selectNode() {
      this.spec.selectNode ? this.spec.selectNode() : _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "selectNode", this).call(this);
    }
  }, {
    key: "deselectNode",
    value: function deselectNode() {
      this.spec.deselectNode ? this.spec.deselectNode() : _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "deselectNode", this).call(this);
    }
  }, {
    key: "setSelection",
    value: function setSelection(anchor, head, root, force) {
      this.spec.setSelection ? this.spec.setSelection(anchor, head, root) : _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "setSelection", this).call(this, anchor, head, root, force);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.spec.destroy) this.spec.destroy();
      _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "destroy", this).call(this);
    }
  }, {
    key: "stopEvent",
    value: function stopEvent(event) {
      return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
    }
  }, {
    key: "ignoreMutation",
    value: function ignoreMutation(mutation) {
      return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : _get(_getPrototypeOf(CustomNodeViewDesc.prototype), "ignoreMutation", this).call(this, mutation);
    }
  }]);
  return CustomNodeViewDesc;
}(NodeViewDesc);
function renderDescs(parentDOM, descs, view) {
  var dom = parentDOM.firstChild,
    written = false;
  for (var i = 0; i < descs.length; i++) {
    var desc = descs[i],
      childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      var pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) view.trackWrites = null;
}
var OuterDecoLevel = function OuterDecoLevel(nodeName) {
  if (nodeName) this.nodeName = nodeName;
};
OuterDecoLevel.prototype = Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) return noDeco;
  var top = needsWrap ? noDeco[0] : new OuterDecoLevel(),
    result = [top];
  for (var i = 0; i < outerDeco.length; i++) {
    var attrs = outerDeco[i].type.attrs;
    if (!attrs) continue;
    if (attrs.nodeName) result.push(top = new OuterDecoLevel(attrs.nodeName));
    for (var name in attrs) {
      var val = attrs[name];
      if (val == null) continue;
      if (needsWrap && result.length == 1) result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class") top["class"] = (top["class"] ? top["class"] + " " : "") + val;else if (name == "style") top.style = (top.style ? top.style + ";" : "") + val;else if (name != "nodeName") top[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
  var curDOM = nodeDOM;
  for (var i = 0; i < curComputed.length; i++) {
    var deco = curComputed[i],
      prev = prevComputed[i];
    if (i) {
      var parent = void 0;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (var name in prev) if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) dom.removeAttribute(name);
  for (var _name in cur) if (_name != "class" && _name != "style" && _name != "nodeName" && cur[_name] != prev[_name]) dom.setAttribute(_name, cur[_name]);
  if (prev["class"] != cur["class"]) {
    var prevList = prev["class"] ? prev["class"].split(" ").filter(Boolean) : [];
    var curList = cur["class"] ? cur["class"].split(" ").filter(Boolean) : [];
    for (var i = 0; i < prevList.length; i++) if (curList.indexOf(prevList[i]) == -1) dom.classList.remove(prevList[i]);
    for (var _i = 0; _i < curList.length; _i++) if (prevList.indexOf(curList[_i]) == -1) dom.classList.add(curList[_i]);
    if (dom.classList.length == 0) dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      var prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        m;
      while (m = prop.exec(prev.style)) dom.style.removeProperty(m[1]);
    }
    if (cur.style) dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return false;
  return true;
}
function rm(dom) {
  var next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = function () {
  function ViewTreeUpdater(top, lock, view) {
    _classCallCheck(this, ViewTreeUpdater);
    this.lock = lock;
    this.view = view;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = top;
    this.preMatch = preMatch(top.node.content, top);
  }
  _createClass(ViewTreeUpdater, [{
    key: "destroyBetween",
    value: function destroyBetween(start, end) {
      if (start == end) return;
      for (var i = start; i < end; i++) this.top.children[i].destroy();
      this.top.children.splice(start, end - start);
      this.changed = true;
    }
  }, {
    key: "destroyRest",
    value: function destroyRest() {
      this.destroyBetween(this.index, this.top.children.length);
    }
  }, {
    key: "syncToMarks",
    value: function syncToMarks(marks, inline, view) {
      var keep = 0,
        depth = this.stack.length >> 1;
      var maxKeep = Math.min(depth, marks.length);
      while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false) keep++;
      while (keep < depth) {
        this.destroyRest();
        this.top.dirty = NOT_DIRTY;
        this.index = this.stack.pop();
        this.top = this.stack.pop();
        depth--;
      }
      while (depth < marks.length) {
        this.stack.push(this.top, this.index + 1);
        var found = -1;
        for (var i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
          var next = this.top.children[i];
          if (next.matchesMark(marks[depth]) && !this.isLocked(next.dom)) {
            found = i;
            break;
          }
        }
        if (found > -1) {
          if (found > this.index) {
            this.changed = true;
            this.destroyBetween(this.index, found);
          }
          this.top = this.top.children[this.index];
        } else {
          var markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
          this.top.children.splice(this.index, 0, markDesc);
          this.top = markDesc;
          this.changed = true;
        }
        this.index = 0;
        depth++;
      }
    }
  }, {
    key: "findNodeMatch",
    value: function findNodeMatch(node, outerDeco, innerDeco, index) {
      var found = -1,
        targetDesc;
      if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
        found = this.top.children.indexOf(targetDesc, this.index);
      } else {
        for (var i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
          var child = this.top.children[i];
          if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
            found = i;
            break;
          }
        }
      }
      if (found < 0) return false;
      this.destroyBetween(this.index, found);
      this.index++;
      return true;
    }
  }, {
    key: "updateNodeAt",
    value: function updateNodeAt(node, outerDeco, innerDeco, index, view) {
      var child = this.top.children[index];
      if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM) child.dirty = CONTENT_DIRTY;
      if (!child.update(node, outerDeco, innerDeco, view)) return false;
      this.destroyBetween(this.index, index);
      this.index++;
      return true;
    }
  }, {
    key: "findIndexWithChild",
    value: function findIndexWithChild(domNode) {
      for (;;) {
        var parent = domNode.parentNode;
        if (!parent) return -1;
        if (parent == this.top.contentDOM) {
          var desc = domNode.pmViewDesc;
          if (desc) for (var i = this.index; i < this.top.children.length; i++) {
            if (this.top.children[i] == desc) return i;
          }
          return -1;
        }
        domNode = parent;
      }
    }
  }, {
    key: "updateNextNode",
    value: function updateNextNode(node, outerDeco, innerDeco, view, index, pos) {
      for (var i = this.index; i < this.top.children.length; i++) {
        var next = this.top.children[i];
        if (next instanceof NodeViewDesc) {
          var _preMatch = this.preMatch.matched.get(next);
          if (_preMatch != null && _preMatch != index) return false;
          var nextDOM = next.dom,
            updated = void 0;
          var locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
          if (!locked && next.update(node, outerDeco, innerDeco, view)) {
            this.destroyBetween(this.index, i);
            if (next.dom != nextDOM) this.changed = true;
            this.index++;
            return true;
          } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
            this.destroyBetween(this.index, i);
            this.top.children[this.index] = updated;
            if (updated.contentDOM) {
              updated.dirty = CONTENT_DIRTY;
              updated.updateChildren(view, pos + 1);
              updated.dirty = NOT_DIRTY;
            }
            this.changed = true;
            this.index++;
            return true;
          }
          break;
        }
      }
      return false;
    }
  }, {
    key: "recreateWrapper",
    value: function recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
      if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco)) return null;
      var wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
      if (wrapper.contentDOM) {
        wrapper.children = next.children;
        next.children = [];
        var _iterator = _createForOfIteratorHelper(wrapper.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ch = _step.value;
            ch.parent = wrapper;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      next.destroy();
      return wrapper;
    }
  }, {
    key: "addNode",
    value: function addNode(node, outerDeco, innerDeco, view, pos) {
      var desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
      if (desc.contentDOM) desc.updateChildren(view, pos + 1);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }, {
    key: "placeWidget",
    value: function placeWidget(widget, view, pos) {
      var next = this.index < this.top.children.length ? this.top.children[this.index] : null;
      if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
        this.index++;
      } else {
        var desc = new WidgetViewDesc(this.top, widget, view, pos);
        this.top.children.splice(this.index++, 0, desc);
        this.changed = true;
      }
    }
  }, {
    key: "addTextblockHacks",
    value: function addTextblockHacks() {
      var lastChild = this.top.children[this.index - 1],
        parent = this.top;
      while (lastChild instanceof MarkViewDesc) {
        parent = lastChild;
        lastChild = parent.children[parent.children.length - 1];
      }
      if (!lastChild || !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
        if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false") this.addHackNode("IMG", parent);
        this.addHackNode("BR", this.top);
      }
    }
  }, {
    key: "addHackNode",
    value: function addHackNode(nodeName, parent) {
      if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
        this.index++;
      } else {
        var dom = document.createElement(nodeName);
        if (nodeName == "IMG") {
          dom.className = "ProseMirror-separator";
          dom.alt = "";
        }
        if (nodeName == "BR") dom.className = "ProseMirror-trailingBreak";
        var hack = new TrailingHackViewDesc(this.top, [], dom, null);
        if (parent != this.top) parent.children.push(hack);else parent.children.splice(this.index++, 0, hack);
        this.changed = true;
      }
    }
  }, {
    key: "isLocked",
    value: function isLocked(node) {
      return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
    }
  }]);
  return ViewTreeUpdater;
}();
function preMatch(frag, parentDesc) {
  var curDesc = parentDesc,
    descI = curDesc.children.length;
  var fI = frag.childCount,
    matched = new Map(),
    matches = [];
  outer: while (fI > 0) {
    var desc = void 0;
    for (;;) {
      if (descI) {
        var next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    var node = desc.node;
    if (!node) continue;
    if (node != frag.child(fI - 1)) break;
    --fI;
    matched.set(desc, fI);
    matches.push(desc);
  }
  return {
    index: fI,
    matched: matched,
    matches: matches.reverse()
  };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  var locals = deco.locals(parent),
    offset = 0;
  if (locals.length == 0) {
    for (var i = 0; i < parent.childCount; i++) {
      var child = parent.child(i);
      onNode(child, locals, deco.forChild(offset, child), i);
      offset += child.nodeSize;
    }
    return;
  }
  var decoIndex = 0,
    active = [],
    restNode = null;
  for (var parentIndex = 0;;) {
    var widget = void 0,
      widgets = void 0;
    while (decoIndex < locals.length && locals[decoIndex].to == offset) {
      var next = locals[decoIndex++];
      if (next.widget) {
        if (!widget) widget = next;else (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (var _i2 = 0; _i2 < widgets.length; _i2++) onWidget(widgets[_i2], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    var _child = void 0,
      index = void 0;
    if (restNode) {
      index = -1;
      _child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      _child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (var _i3 = 0; _i3 < active.length; _i3++) if (active[_i3].to <= offset) active.splice(_i3--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset) active.push(locals[decoIndex++]);
    var end = offset + _child.nodeSize;
    if (_child.isText) {
      var cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) cutAt = locals[decoIndex].from;
      for (var _i4 = 0; _i4 < active.length; _i4++) if (active[_i4].to < cutAt) cutAt = active[_i4].to;
      if (cutAt < end) {
        restNode = _child.cut(cutAt - offset);
        _child = _child.cut(0, cutAt - offset);
        end = cutAt;
        index = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end) decoIndex++;
    }
    var outerDeco = _child.isInline && !_child.isLeaf ? active.filter(function (d) {
      return !d.inline;
    }) : active.slice();
    onNode(_child, outerDeco, deco.forChild(offset, _child), index);
    offset = end;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    var oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function findTextInFragment(frag, text, from, to) {
  for (var i = 0, pos = 0; i < frag.childCount && pos <= to;) {
    var child = frag.child(i++),
      childStart = pos;
    pos += child.nodeSize;
    if (!child.isText) continue;
    var str = child.text;
    while (i < frag.childCount) {
      var next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) break;
      str += next.text;
    }
    if (pos >= from) {
      if (pos >= to && str.slice(to - text.length - childStart, to - childStart) == text) return to - text.length;
      var found = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
      if (found >= 0 && found + text.length + childStart >= from) return childStart + found;
      if (from == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text) return to;
    }
  }
  return -1;
}
function replaceNodes(nodes, from, to, view, replacement) {
  var result = [];
  for (var i = 0, off = 0; i < nodes.length; i++) {
    var child = nodes[i],
      start = off,
      end = off += child.size;
    if (start >= to || end <= from) {
      result.push(child);
    } else {
      if (start < from) result.push(child.slice(0, from - start, view));
      if (replacement) {
        result.push(replacement);
        replacement = undefined;
      }
      if (end > to) result.push(child.slice(to - start, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var domSel = view.domSelectionRange(),
    doc = view.state.doc;
  if (!domSel.focusNode) return null;
  var nearestDesc = view.docView.nearestDesc(domSel.focusNode),
    inWidget = nearestDesc && nearestDesc.size == 0;
  var head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0) return null;
  var $head = doc.resolve(head),
    anchor,
    selection;
  if (selectionCollapsed(domSel)) {
    anchor = head;
    while (nearestDesc && !nearestDesc.node) nearestDesc = nearestDesc.parent;
    var nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && prosemirrorState.NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      var pos = nearestDesc.posBefore;
      selection = new prosemirrorState.NodeSelection(head == pos ? $head : doc.resolve(pos));
    }
  } else {
    if (domSel instanceof view.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
      var min = head,
        max = head;
      for (var i = 0; i < domSel.rangeCount; i++) {
        var range = domSel.getRangeAt(i);
        min = Math.min(min, view.docView.posFromDOM(range.startContainer, range.startOffset, 1));
        max = Math.max(max, view.docView.posFromDOM(range.endContainer, range.endOffset, -1));
      }
      if (min < 0) return null;
      var _ref3 = max == view.state.selection.anchor ? [max, min] : [min, max];
      var _ref4 = _slicedToArray(_ref3, 2);
      anchor = _ref4[0];
      head = _ref4[1];
      $head = doc.resolve(head);
    } else {
      anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    }
    if (anchor < 0) return null;
  }
  var $anchor = doc.resolve(anchor);
  if (!selection) {
    var bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) return;
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    var domSel = view.domSelectionRange(),
      curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    var anchor = sel.anchor,
      head = sel.head,
      resetEditableFrom,
      resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof prosemirrorState.TextSelection)) {
      if (!sel.$from.parent.inlineContent) resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent) resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view.root, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) resetEditable(resetEditableFrom);
      if (resetEditableTo) resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  var _view$docView$domFrom3 = view.docView.domFromPos(pos, 0),
    node = _view$docView$domFrom3.node,
    offset = _view$docView$domFrom3.offset;
  var after = offset < node.childNodes.length ? node.childNodes[offset] : null;
  var before = offset ? node.childNodes[offset - 1] : null;
  if (safari && after && after.contentEditable == "false") return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) return setEditable(after);else if (before) return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  var doc = view.dom.ownerDocument;
  doc.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  var domSel = view.domSelectionRange();
  var node = domSel.anchorNode,
    offset = domSel.anchorOffset;
  doc.addEventListener("selectionchange", view.input.hideSelectionGuard = function () {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
      doc.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(function () {
        if (!editorOwnsSelection(view) || view.state.selection.visible) view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  var domSel = view.domSelection(),
    range = document.createRange();
  if (!domSel) return;
  var node = view.cursorWrapper.dom,
    img = node.nodeName == "IMG";
  if (img) range.setStart(node.parentNode, domIndex(node) + 1);else range.setStart(node, 0);
  range.collapse(true);
  domSel.removeAllRanges();
  domSel.addRange(range);
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof prosemirrorState.NodeSelection) {
    var desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = undefined;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", function (f) {
    return f(view, $anchor, $head);
  }) || prosemirrorState.TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus()) return false;
  return hasSelection(view);
}
function hasSelection(view) {
  var sel = view.domSelectionRange();
  if (!sel.anchorNode) return false;
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  var anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  var domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  var _state$selection = state.selection,
    $anchor = _state$selection.$anchor,
    $head = _state$selection.$head;
  var $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  var $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && prosemirrorState.Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof prosemirrorState.TextSelection) {
    if (mods.indexOf("s") > -1) {
      var $head = sel.$head,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf) return false;
      var $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new prosemirrorState.TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      var next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof prosemirrorState.NodeSelection) return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      var _$head = sel.$head,
        _node = _$head.textOffset ? null : dir < 0 ? _$head.nodeBefore : _$head.nodeAfter,
        desc;
      if (!_node || _node.isText) return false;
      var nodePos = dir < 0 ? _$head.pos - _node.nodeSize : _$head.pos;
      if (!(_node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) return false;
      if (prosemirrorState.NodeSelection.isSelectable(_node)) {
        return apply(view, new prosemirrorState.NodeSelection(dir < 0 ? view.state.doc.resolve(_$head.pos - _node.nodeSize) : _$head));
      } else if (webkit) {
        return apply(view, new prosemirrorState.TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + _node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof prosemirrorState.NodeSelection && sel.node.isInline) {
    return apply(view, new prosemirrorState.TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    var _next = moveSelectionBlock(view.state, dir);
    if (_next) return apply(view, _next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  var desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
function skipIgnoredNodesBefore(view) {
  var sel = view.domSelectionRange();
  var node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  var moveNode,
    moveOffset,
    force = false;
  if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset], -1)) force = true;
  for (;;) {
    if (offset > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        var before = node.childNodes[offset - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset;
        } else if (before.nodeType == 3) {
          node = before;
          offset = node.nodeValue.length;
        } else break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      var prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = 0;
      } else {
        node = prev;
        offset = nodeLen(node);
      }
    }
  }
  if (force) setSelFocus(view, node, offset);else if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function skipIgnoredNodesAfter(view) {
  var sel = view.domSelectionRange();
  var node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  var len = nodeLen(node);
  var moveNode, moveOffset;
  for (;;) {
    if (offset < len) {
      if (node.nodeType != 1) break;
      var after = node.childNodes[offset];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset;
      } else break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      var next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = len = 0;
      } else {
        node = next;
        offset = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  var desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset) {
  while (node && offset == node.childNodes.length && !hasBlockDesc(node)) {
    offset = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset < node.childNodes.length) {
    var next = node.childNodes[offset];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = 0;
  }
}
function textNodeBefore(node, offset) {
  while (node && !offset && !hasBlockDesc(node)) {
    offset = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset) {
    var next = node.childNodes[offset - 1];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset) {
  if (node.nodeType != 3) {
    var before, after;
    if (after = textNodeAfter(node, offset)) {
      node = after;
      offset = 0;
    } else if (before = textNodeBefore(node, offset)) {
      node = before;
      offset = before.nodeValue.length;
    }
  }
  var sel = view.domSelection();
  if (!sel) return;
  if (selectionCollapsed(sel)) {
    var range = document.createRange();
    range.setEnd(node, offset);
    range.setStart(node, offset);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset);
  }
  view.domObserver.setCurSelection();
  var state = view.state;
  setTimeout(function () {
    if (view.state == state) selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  var $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    var coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      var before = view.coordsAtPos(pos - 1);
      var mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1) return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      var after = view.coordsAtPos(pos + 1);
      var _mid = (after.top + after.bottom) / 2;
      if (_mid > coords.top && _mid < coords.bottom && Math.abs(after.left - coords.left) > 1) return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  var computed = getComputedStyle(view.dom).direction;
  return computed == "rtl" ? "rtl" : "ltr";
}
function selectVertically(view, dir, mods) {
  var sel = view.state.selection;
  if (sel instanceof prosemirrorState.TextSelection && !sel.empty || mods.indexOf("s") > -1) return false;
  if (mac && mods.indexOf("m") > -1) return false;
  var $from = sel.$from,
    $to = sel.$to;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    var next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof prosemirrorState.NodeSelection) return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    var side = dir < 0 ? $from : $to;
    var beyond = sel instanceof prosemirrorState.AllSelection ? prosemirrorState.Selection.near(side, dir) : prosemirrorState.Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof prosemirrorState.TextSelection)) return true;
  var _view$state$selection2 = view.state.selection,
    $head = _view$state$selection2.$head,
    $anchor = _view$state$selection2.$anchor,
    empty = _view$state$selection2.empty;
  if (!$head.sameParent($anchor)) return true;
  if (!empty) return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return true;
  var nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    var tr = view.state.tr;
    if (dir < 0) tr["delete"]($head.pos - nextNode.nodeSize, $head.pos);else tr["delete"]($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0) return false;
  var _view$domSelectionRan3 = view.domSelectionRange(),
    focusNode = _view$domSelectionRan3.focusNode,
    focusOffset = _view$domSelectionRan3.focusOffset;
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    var child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(function () {
      return switchEditable(view, child, "false");
    }, 20);
  }
  return false;
}
function getMods(event) {
  var result = "";
  if (event.ctrlKey) result += "c";
  if (event.metaKey) result += "m";
  if (event.altKey) result += "a";
  if (event.shiftKey) result += "s";
  return result;
}
function captureKeyDown(view, event) {
  var code = event.keyCode,
    mods = getMods(event);
  if (code == 8 || mac && code == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code == 13 || code == 27) {
    return true;
  } else if (code == 37 || mac && code == 66 && mods == "c") {
    var dir = code == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 39 || mac && code == 70 && mods == "c") {
    var _dir = code == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, _dir, mods) || skipIgnoredNodes(view, _dir);
  } else if (code == 38 || mac && code == 80 && mods == "c") {
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code == 40 || mac && code == 78 && mods == "c") {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice) {
  view.someProp("transformCopied", function (f) {
    slice = f(slice, view);
  });
  var context = [],
    _slice = slice,
    content = _slice.content,
    openStart = _slice.openStart,
    openEnd = _slice.openEnd;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    var node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  var serializer = view.someProp("clipboardSerializer") || prosemirrorModel.DOMSerializer.fromSchema(view.state.schema);
  var doc = detachedDoc(),
    wrap = doc.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, {
    document: doc
  }));
  var firstChild = wrap.firstChild,
    needsWrap,
    wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (var i = needsWrap.length - 1; i >= 0; i--) {
      var wrapper = doc.createElement(needsWrap[i]);
      while (wrap.firstChild) wrapper.appendChild(wrap.firstChild);
      wrap.appendChild(wrapper);
      wrappers++;
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) firstChild.setAttribute("data-pm-slice", "".concat(openStart, " ").concat(openEnd).concat(wrappers ? " -".concat(wrappers) : "", " ").concat(JSON.stringify(context)));
  var text = view.someProp("clipboardTextSerializer", function (f) {
    return f(slice, view);
  }) || slice.content.textBetween(0, slice.content.size, "\n\n");
  return {
    dom: wrap,
    text: text,
    slice: slice
  };
}
function parseFromClipboard(view, text, html, plainText, $context) {
  var inCode = $context.parent.type.spec.code;
  var dom, slice;
  if (!html && !text) return null;
  var asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", function (f) {
      text = f(text, inCode || plainText, view);
    });
    if (inCode) return text ? new prosemirrorModel.Slice(prosemirrorModel.Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : prosemirrorModel.Slice.empty;
    var parsed = view.someProp("clipboardTextParser", function (f) {
      return f(text, $context, plainText, view);
    });
    if (parsed) {
      slice = parsed;
    } else {
      var marks = $context.marks();
      var schema = view.state.schema,
        serializer = prosemirrorModel.DOMSerializer.fromSchema(schema);
      dom = document.createElement("div");
      text.split(/(?:\r\n?|\n)+/).forEach(function (block) {
        var p = dom.appendChild(document.createElement("p"));
        if (block) p.appendChild(serializer.serializeNode(schema.text(block, marks)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", function (f) {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit) restoreReplacedSpaces(dom);
  }
  var contextNode = dom && dom.querySelector("[data-pm-slice]");
  var sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3]) for (var i = +sliceData[3]; i > 0; i--) {
    var child = dom.firstChild;
    while (child && child.nodeType != 1) child = child.nextSibling;
    if (!child) break;
    dom = child;
  }
  if (!slice) {
    var parser = view.someProp("clipboardParser") || view.someProp("domParser") || prosemirrorModel.DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode: function ruleFromNode(dom) {
        if (dom.nodeName == "BR" && !dom.nextSibling && dom.parentNode && !inlineParents.test(dom.parentNode.nodeName)) return {
          ignore: true
        };
        return null;
      }
    });
  }
  if (sliceData) {
    slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    slice = prosemirrorModel.Slice.maxOpen(normalizeSiblings(slice.content, $context), true);
    if (slice.openStart || slice.openEnd) {
      var openStart = 0,
        openEnd = 0;
      for (var node = slice.content.firstChild; openStart < slice.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {}
      for (var _node2 = slice.content.lastChild; openEnd < slice.openEnd && !_node2.type.spec.isolating; openEnd++, _node2 = _node2.lastChild) {}
      slice = closeSlice(slice, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", function (f) {
    slice = f(slice, view);
  });
  return slice;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) return fragment;
  var _loop = function _loop() {
      var parent = $context.node(d);
      var match = parent.contentMatchAt($context.index(d));
      var lastWrap,
        result = [];
      fragment.forEach(function (node) {
        if (!result) return;
        var wrap = match.findWrapping(node.type),
          inLast;
        if (!wrap) return result = null;
        if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
          result[result.length - 1] = inLast;
        } else {
          if (result.length) result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
          var wrapped = withWrappers(node, wrap);
          result.push(wrapped);
          match = match.matchType(wrapped.type);
          lastWrap = wrap;
        }
      });
      if (result) return {
        v: prosemirrorModel.Fragment.from(result)
      };
    },
    _ret;
  for (var d = $context.depth; d >= 0; d--) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return fragment;
}
function withWrappers(node, wrap) {
  var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  for (var i = wrap.length - 1; i >= from; i--) node = wrap[i].create(null, prosemirrorModel.Fragment.from(node));
  return node;
}
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    var inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    var match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1])) return sibling.copy(sibling.content.append(prosemirrorModel.Fragment.from(withWrappers(node, wrap, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0) return node;
  var fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  var fill = node.contentMatchAt(node.childCount).fillBefore(prosemirrorModel.Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from, to, depth, openEnd) {
  var node = side < 0 ? fragment.firstChild : fragment.lastChild,
    inner = node.content;
  if (fragment.childCount > 1) openEnd = 0;
  if (depth < to - 1) inner = closeRange(inner, side, from, to, depth + 1, openEnd);
  if (depth >= from) inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(prosemirrorModel.Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart) slice = new prosemirrorModel.Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd);
  if (openEnd < slice.openEnd) slice = new prosemirrorModel.Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd);
  return slice;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
function maybeWrapTrusted(html) {
  var trustedTypes = window.trustedTypes;
  if (!trustedTypes) return html;
  return trustedTypes.createPolicy("detachedDocument", {
    createHTML: function createHTML(s) {
      return s;
    }
  }).createHTML(html);
}
function readHTML(html) {
  var metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) html = html.slice(metas[0].length);
  var elt = detachedDoc().createElement("div");
  var firstTag = /<([a-z][^>\s]+)/i.exec(html),
    wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) html = wrap.map(function (n) {
    return "<" + n + ">";
  }).join("") + html + wrap.map(function (n) {
    return "</" + n + ">";
  }).reverse().join("");
  elt.innerHTML = maybeWrapTrusted(html);
  if (wrap) for (var i = 0; i < wrap.length; i++) elt = elt.querySelector(wrap[i]) || elt;
  return elt;
}
function restoreReplacedSpaces(dom) {
  var nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode) node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice, context) {
  if (!slice.size) return slice;
  var schema = slice.content.firstChild.type.schema,
    array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice;
  }
  var content = slice.content,
    openStart = slice.openStart,
    openEnd = slice.openEnd;
  for (var i = array.length - 2; i >= 0; i -= 2) {
    var type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) break;
    content = prosemirrorModel.Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new prosemirrorModel.Slice(content, openStart, openEnd);
}
var handlers = {};
var editHandlers = {};
var passiveHandlers = {
  touchstart: true,
  touchmove: true
};
var InputState = _createClass(function InputState() {
  _classCallCheck(this, InputState);
  this.shiftKey = false;
  this.mouseDown = null;
  this.lastKeyCode = null;
  this.lastKeyCodeTime = 0;
  this.lastClick = {
    time: 0,
    x: 0,
    y: 0,
    type: ""
  };
  this.lastSelectionOrigin = null;
  this.lastSelectionTime = 0;
  this.lastIOSEnter = 0;
  this.lastIOSEnterFallbackTimeout = -1;
  this.lastFocus = 0;
  this.lastTouch = 0;
  this.lastAndroidDelete = 0;
  this.composing = false;
  this.compositionNode = null;
  this.composingTimeout = -1;
  this.compositionNodes = [];
  this.compositionEndedAt = -2e8;
  this.compositionID = 1;
  this.compositionPendingChanges = 0;
  this.domChangeCount = 0;
  this.eventHandlers = Object.create(null);
  this.hideSelectionGuard = null;
});
function initInput(view) {
  var _loop2 = function _loop2() {
    var handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = function (event) {
      if (eventBelongsToView(view, event) && !runCustomHandler(view, event) && (view.editable || !(event.type in editHandlers))) handler(view, event);
    }, passiveHandlers[event] ? {
      passive: true
    } : undefined);
  };
  for (var event in handlers) {
    _loop2();
  }
  if (safari) view.dom.addEventListener("input", function () {
    return null;
  });
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (var type in view.input.eventHandlers) view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", function (currentHandlers) {
    for (var type in currentHandlers) if (!view.input.eventHandlers[type]) view.dom.addEventListener(type, view.input.eventHandlers[type] = function (event) {
      return runCustomHandler(view, event);
    });
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", function (handlers) {
    var handler = handlers[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;
  for (var node = event.target; node != view.dom; node = node.parentNode) if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return false;
  return true;
}
function _dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) handlers[event.type](view, event);
}
editHandlers.keydown = function (view, _event) {
  var event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  if (android && chrome && event.keyCode == 13) return;
  if (view.domObserver.selectionChanged(view.domSelectionRange())) view.domObserver.flush();else if (event.keyCode != 229) view.domObserver.forceFlush();
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    var now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(function () {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", function (f) {
          return f(view, keyEvent(13, "Enter"));
        });
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", function (f) {
    return f(view, event);
  }) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = function (view, event) {
  if (event.keyCode == 16) view.input.shiftKey = false;
};
editHandlers.keypress = function (view, _event) {
  var event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey) return;
  if (view.someProp("handleKeyPress", function (f) {
    return f(view, event);
  })) {
    event.preventDefault();
    return;
  }
  var sel = view.state.selection;
  if (!(sel instanceof prosemirrorState.TextSelection) || !sel.$from.sameParent(sel.$to)) {
    var text = String.fromCharCode(event.charCode);
    if (!/[\r\n]/.test(text) && !view.someProp("handleTextInput", function (f) {
      return f(view, sel.$from.pos, sel.$to.pos, text);
    })) view.dispatch(view.state.tr.insertText(text).scrollIntoView());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return {
    left: event.clientX,
    top: event.clientY
  };
}
function isNear(event, click) {
  var dx = click.x - event.clientX,
    dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) return false;
  var $pos = view.state.doc.resolve(inside);
  var _loop3 = function _loop3(i) {
      if (view.someProp(propName, function (f) {
        return i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false);
      })) return {
        v: true
      };
    },
    _ret2;
  for (var i = $pos.depth + 1; i > 0; i--) {
    _ret2 = _loop3(i);
    if (_ret2) return _ret2.v;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) view.focus();
  if (view.state.selection.eq(selection)) return;
  var tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) return false;
  var $pos = view.state.doc.resolve(inside),
    node = $pos.nodeAfter;
  if (node && node.isAtom && prosemirrorState.NodeSelection.isSelectable(node)) {
    updateSelection(view, new prosemirrorState.NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) return false;
  var sel = view.state.selection,
    selectedNode,
    selectAt;
  if (sel instanceof prosemirrorState.NodeSelection) selectedNode = sel.node;
  var $pos = view.state.doc.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (prosemirrorState.NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) selectAt = $pos.before(sel.$from.depth);else selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, prosemirrorState.NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", function (f) {
    return f(view, pos, event);
  }) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", function (f) {
    return f(view, pos, event);
  });
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", function (f) {
    return f(view, pos, event);
  }) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) return false;
  var doc = view.state.doc;
  if (inside == -1) {
    if (doc.inlineContent) {
      updateSelection(view, prosemirrorState.TextSelection.create(doc, 0, doc.content.size), "pointer");
      return true;
    }
    return false;
  }
  var $pos = doc.resolve(inside);
  for (var i = $pos.depth + 1; i > 0; i--) {
    var node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    var nodePos = $pos.before(i);
    if (node.inlineContent) updateSelection(view, prosemirrorState.TextSelection.create(doc, nodePos + 1, nodePos + 1 + node.content.size), "pointer");else if (prosemirrorState.NodeSelection.isSelectable(node)) updateSelection(view, prosemirrorState.NodeSelection.create(doc, nodePos), "pointer");else continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = function (view, _event) {
  var event = _event;
  view.input.shiftKey = event.shiftKey;
  var flushed = forceDOMFlush(view);
  var now = Date.now(),
    type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier]) {
    if (view.input.lastClick.type == "singleClick") type = "doubleClick";else if (view.input.lastClick.type == "doubleClick") type = "tripleClick";
  }
  view.input.lastClick = {
    time: now,
    x: event.clientX,
    y: event.clientY,
    type: type
  };
  var pos = view.posAtCoords(eventCoords(event));
  if (!pos) return;
  if (type == "singleClick") {
    if (view.input.mouseDown) view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = function () {
  function MouseDown(view, pos, event, flushed) {
    var _this8 = this;
    _classCallCheck(this, MouseDown);
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    var targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      var $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    var target = flushed ? null : event.target;
    var targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc && targetDesc.dom.nodeType == 1 ? targetDesc.dom : null;
    var selection = view.state.selection;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof prosemirrorState.NodeSelection && selection.from <= targetPos && selection.to > targetPos) this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
    };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.draggable = true;
      if (this.mightDrag.setUneditable) setTimeout(function () {
        if (_this8.view.input.mouseDown == _this8) _this8.target.setAttribute("contentEditable", "false");
      }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  _createClass(MouseDown, [{
    key: "done",
    value: function done() {
      var _this9 = this;
      this.view.root.removeEventListener("mouseup", this.up);
      this.view.root.removeEventListener("mousemove", this.move);
      if (this.mightDrag && this.target) {
        this.view.domObserver.stop();
        if (this.mightDrag.addAttr) this.target.removeAttribute("draggable");
        if (this.mightDrag.setUneditable) this.target.removeAttribute("contentEditable");
        this.view.domObserver.start();
      }
      if (this.delayedSelectionSync) setTimeout(function () {
        return selectionToDOM(_this9.view);
      });
      this.view.input.mouseDown = null;
    }
  }, {
    key: "up",
    value: function up(event) {
      this.done();
      if (!this.view.dom.contains(event.target)) return;
      var pos = this.pos;
      if (this.view.state.doc != this.startDoc) pos = this.view.posAtCoords(eventCoords(event));
      this.updateAllowDefault(event);
      if (this.allowDefault || !pos) {
        setSelectionOrigin(this.view, "pointer");
      } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
        event.preventDefault();
      } else if (event.button == 0 && (this.flushed || safari && this.mightDrag && !this.mightDrag.node.isAtom || chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
        updateSelection(this.view, prosemirrorState.Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
        event.preventDefault();
      } else {
        setSelectionOrigin(this.view, "pointer");
      }
    }
  }, {
    key: "move",
    value: function move(event) {
      this.updateAllowDefault(event);
      setSelectionOrigin(this.view, "pointer");
      if (event.buttons == 0) this.done();
    }
  }, {
    key: "updateAllowDefault",
    value: function updateAllowDefault(event) {
      if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) this.allowDefault = true;
    }
  }]);
  return MouseDown;
}();
handlers.touchstart = function (view) {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = function (view) {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = function (view) {
  return forceDOMFlush(view);
};
function inOrNearComposition(view, event) {
  if (view.composing) return true;
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = android ? 5000 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = function (view) {
  if (!view.composing) {
    view.domObserver.flush();
    var state = view.state,
      $pos = state.selection.$to;
    if (state.selection instanceof prosemirrorState.TextSelection && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(function (m) {
      return m.type.spec.inclusive === false;
    }))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view, !state.selection.empty);
      if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        var sel = view.domSelectionRange();
        for (var node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0;) {
          var before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
          if (!before) break;
          if (before.nodeType == 3) {
            var _sel = view.domSelection();
            if (_sel) _sel.collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = function (view, event) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges) Promise.resolve().then(function () {
      return view.domObserver.flush();
    });
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1) view.input.composingTimeout = setTimeout(function () {
    return endComposition(view);
  }, delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0) view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  var sel = view.domSelectionRange();
  if (!sel.focusNode) return null;
  var textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  var textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    var descAfter = textAfter.pmViewDesc,
      lastChanged = view.domObserver.lastChangedTextNode;
    if (textBefore == lastChanged || textAfter == lastChanged) return lastChanged;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      var descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue))) return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  var event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view) {
  var restarting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (android && view.domObserver.flushingSoon >= 0) return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (restarting || view.docView && view.docView.dirty) {
    var sel = selectionFromDOM(view);
    if (sel && !sel.eq(view.state.selection)) view.dispatch(view.state.tr.setSelection(sel));else if ((view.markCursor || restarting) && !view.state.selection.empty) view.dispatch(view.state.tr.deleteSelection());else view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode) return;
  var wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  var sel = getSelection(),
    range = document.createRange();
  range.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(function () {
    if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    view.focus();
  }, 50);
}
var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = function (view, _event) {
  var event = _event;
  var sel = view.state.selection,
    cut = event.type == "cut";
  if (sel.empty) return;
  var data = brokenClipboardAPI ? null : event.clipboardData;
  var slice = sel.content(),
    _serializeForClipboar = serializeForClipboard(view, slice),
    dom = _serializeForClipboar.dom,
    text = _serializeForClipboar.text;
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut) view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode) return;
  var plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  var target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  var plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(function () {
    view.focus();
    if (target.parentNode) target.parentNode.removeChild(target);
    if (plainText) doPaste(view, target.value, null, plain, event);else doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text, html, preferPlain, event) {
  var slice = parseFromClipboard(view, text, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", function (f) {
    return f(view, event, slice || prosemirrorModel.Slice.empty);
  })) return true;
  if (!slice) return false;
  var singleNode = sliceSingleNode(slice);
  var tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  var text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text) return text;
  var uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = function (view, _event) {
  var event = _event;
  if (view.composing && !android) return;
  var data = brokenClipboardAPI ? null : event.clipboardData;
  var plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event)) event.preventDefault();else capturePaste(view, event);
};
var Dragging = _createClass(function Dragging(slice, move, node) {
  _classCallCheck(this, Dragging);
  this.slice = slice;
  this.move = move;
  this.node = node;
});
var dragCopyModifier = mac ? "altKey" : "ctrlKey";
handlers.dragstart = function (view, _event) {
  var event = _event;
  var mouseDown = view.input.mouseDown;
  if (mouseDown) mouseDown.done();
  if (!event.dataTransfer) return;
  var sel = view.state.selection;
  var pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  var node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof prosemirrorState.NodeSelection ? sel.to - 1 : sel.to)) ;else if (mouseDown && mouseDown.mightDrag) {
    node = prosemirrorState.NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    var desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) node = prosemirrorState.NodeSelection.create(view.state.doc, desc.posBefore);
  }
  var draggedSlice = (node || view.state.selection).content();
  var _serializeForClipboar2 = serializeForClipboard(view, draggedSlice),
    dom = _serializeForClipboar2.dom,
    text = _serializeForClipboar2.text,
    slice = _serializeForClipboar2.slice;
  if (!event.dataTransfer.files.length || !chrome || chrome_version > 120) event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) event.dataTransfer.setData("text/plain", text);
  view.dragging = new Dragging(slice, !event[dragCopyModifier], node);
};
handlers.dragend = function (view) {
  var dragging = view.dragging;
  window.setTimeout(function () {
    if (view.dragging == dragging) view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = function (_, e) {
  return e.preventDefault();
};
editHandlers.drop = function (view, _event) {
  var event = _event;
  var dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer) return;
  var eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos) return;
  var $mouse = view.state.doc.resolve(eventPos.pos);
  var slice = dragging && dragging.slice;
  if (slice) {
    view.someProp("transformPasted", function (f) {
      slice = f(slice, view);
    });
  } else {
    slice = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  var move = !!(dragging && !event[dragCopyModifier]);
  if (view.someProp("handleDrop", function (f) {
    return f(view, event, slice || prosemirrorModel.Slice.empty, move);
  })) {
    event.preventDefault();
    return;
  }
  if (!slice) return;
  event.preventDefault();
  var insertPos = slice ? prosemirrorTransform.dropPoint(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null) insertPos = $mouse.pos;
  var tr = view.state.tr;
  if (move) {
    var node = dragging.node;
    if (node) node.replace(tr);else tr.deleteSelection();
  }
  var pos = tr.mapping.map(insertPos);
  var isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  var beforeInsert = tr.doc;
  if (isNode) tr.replaceRangeWith(pos, pos, slice.content.firstChild);else tr.replaceRange(pos, pos, slice);
  if (tr.doc.eq(beforeInsert)) return;
  var $pos = tr.doc.resolve(pos);
  if (isNode && prosemirrorState.NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) {
    tr.setSelection(new prosemirrorState.NodeSelection($pos));
  } else {
    var end = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach(function (_from, _to, _newFrom, newTo) {
      return end = newTo;
    });
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = function (view) {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(function () {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange())) selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = function (view, _event) {
  var event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget)) view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = function (view, _event) {
  var event = _event;
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    var domChangeCount = view.input.domChangeCount;
    setTimeout(function () {
      if (view.input.domChangeCount != domChangeCount) return;
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(8, "Backspace"));
      })) return;
      var $cursor = view.state.selection.$cursor;
      if ($cursor && $cursor.pos > 0) view.dispatch(view.state.tr["delete"]($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
for (var prop in editHandlers) handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b) return true;
  for (var p in a) if (a[p] !== b[p]) return false;
  for (var _p in b) if (!(_p in a)) return false;
  return true;
}
var WidgetType = function () {
  function WidgetType(toDOM, spec) {
    _classCallCheck(this, WidgetType);
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  _createClass(WidgetType, [{
    key: "map",
    value: function map(mapping, span, offset, oldOffset) {
      var _mapping$mapResult = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1),
        pos = _mapping$mapResult.pos,
        deleted = _mapping$mapResult.deleted;
      return deleted ? null : new Decoration(pos - offset, pos - offset, this);
    }
  }, {
    key: "valid",
    value: function valid() {
      return true;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this == other || other instanceof WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
    }
  }, {
    key: "destroy",
    value: function destroy(node) {
      if (this.spec.destroy) this.spec.destroy(node);
    }
  }]);
  return WidgetType;
}();
var InlineType = function () {
  function InlineType(attrs, spec) {
    _classCallCheck(this, InlineType);
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  _createClass(InlineType, [{
    key: "map",
    value: function map(mapping, span, offset, oldOffset) {
      var from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
      var to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
      return from >= to ? null : new Decoration(from, to, this);
    }
  }, {
    key: "valid",
    value: function valid(_, span) {
      return span.from < span.to;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this == other || other instanceof InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }], [{
    key: "is",
    value: function is(span) {
      return span.type instanceof InlineType;
    }
  }]);
  return InlineType;
}();
var NodeType = function () {
  function NodeType(attrs, spec) {
    _classCallCheck(this, NodeType);
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  _createClass(NodeType, [{
    key: "map",
    value: function map(mapping, span, offset, oldOffset) {
      var from = mapping.mapResult(span.from + oldOffset, 1);
      if (from.deleted) return null;
      var to = mapping.mapResult(span.to + oldOffset, -1);
      if (to.deleted || to.pos <= from.pos) return null;
      return new Decoration(from.pos - offset, to.pos - offset, this);
    }
  }, {
    key: "valid",
    value: function valid(node, span) {
      var _node$content$findInd = node.content.findIndex(span.from),
        index = _node$content$findInd.index,
        offset = _node$content$findInd.offset,
        child;
      return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      return this == other || other instanceof NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);
  return NodeType;
}();
var Decoration = function () {
  function Decoration(from, to, type) {
    _classCallCheck(this, Decoration);
    this.from = from;
    this.to = to;
    this.type = type;
  }
  _createClass(Decoration, [{
    key: "copy",
    value: function copy(from, to) {
      return new Decoration(from, to, this.type);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
    }
  }, {
    key: "map",
    value: function map(mapping, offset, oldOffset) {
      return this.type.map(mapping, this, offset, oldOffset);
    }
  }, {
    key: "spec",
    get: function get() {
      return this.type.spec;
    }
  }, {
    key: "inline",
    get: function get() {
      return this.type instanceof InlineType;
    }
  }, {
    key: "widget",
    get: function get() {
      return this.type instanceof WidgetType;
    }
  }], [{
    key: "widget",
    value: function widget(pos, toDOM, spec) {
      return new Decoration(pos, pos, new WidgetType(toDOM, spec));
    }
  }, {
    key: "inline",
    value: function inline(from, to, attrs, spec) {
      return new Decoration(from, to, new InlineType(attrs, spec));
    }
  }, {
    key: "node",
    value: function node(from, to, attrs, spec) {
      return new Decoration(from, to, new NodeType(attrs, spec));
    }
  }]);
  return Decoration;
}();
var none = [],
  noSpec = {};
var DecorationSet = function () {
  function DecorationSet(local, children) {
    _classCallCheck(this, DecorationSet);
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  _createClass(DecorationSet, [{
    key: "find",
    value: function find(start, end, predicate) {
      var result = [];
      this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
      return result;
    }
  }, {
    key: "findInner",
    value: function findInner(start, end, result, offset, predicate) {
      for (var i = 0; i < this.local.length; i++) {
        var span = this.local[i];
        if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec))) result.push(span.copy(span.from + offset, span.to + offset));
      }
      for (var _i5 = 0; _i5 < this.children.length; _i5 += 3) {
        if (this.children[_i5] < end && this.children[_i5 + 1] > start) {
          var childOff = this.children[_i5] + 1;
          this.children[_i5 + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
        }
      }
    }
  }, {
    key: "map",
    value: function map(mapping, doc, options) {
      if (this == empty || mapping.maps.length == 0) return this;
      return this.mapInner(mapping, doc, 0, 0, options || noSpec);
    }
  }, {
    key: "mapInner",
    value: function mapInner(mapping, node, offset, oldOffset, options) {
      var newLocal;
      for (var i = 0; i < this.local.length; i++) {
        var mapped = this.local[i].map(mapping, offset, oldOffset);
        if (mapped && mapped.type.valid(node, mapped)) (newLocal || (newLocal = [])).push(mapped);else if (options.onRemove) options.onRemove(this.local[i].spec);
      }
      if (this.children.length) return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);else return newLocal ? new DecorationSet(newLocal.sort(byPos), none) : empty;
    }
  }, {
    key: "add",
    value: function add(doc, decorations) {
      if (!decorations.length) return this;
      if (this == empty) return DecorationSet.create(doc, decorations);
      return this.addInner(doc, decorations, 0);
    }
  }, {
    key: "addInner",
    value: function addInner(doc, decorations, offset) {
      var _this10 = this;
      var children,
        childIndex = 0;
      doc.forEach(function (childNode, childOffset) {
        var baseOffset = childOffset + offset,
          found;
        if (!(found = takeSpansForNode(decorations, childNode, baseOffset))) return;
        if (!children) children = _this10.children.slice();
        while (childIndex < children.length && children[childIndex] < childOffset) childIndex += 3;
        if (children[childIndex] == childOffset) children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1);else children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec));
        childIndex += 3;
      });
      var local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
      for (var i = 0; i < local.length; i++) if (!local[i].type.valid(doc, local[i])) local.splice(i--, 1);
      return new DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
    }
  }, {
    key: "remove",
    value: function remove(decorations) {
      if (decorations.length == 0 || this == empty) return this;
      return this.removeInner(decorations, 0);
    }
  }, {
    key: "removeInner",
    value: function removeInner(decorations, offset) {
      var children = this.children,
        local = this.local;
      for (var i = 0; i < children.length; i += 3) {
        var found = void 0;
        var from = children[i] + offset,
          to = children[i + 1] + offset;
        for (var j = 0, span; j < decorations.length; j++) if (span = decorations[j]) {
          if (span.from > from && span.to < to) {
            decorations[j] = null;
            (found || (found = [])).push(span);
          }
        }
        if (!found) continue;
        if (children == this.children) children = this.children.slice();
        var removed = children[i + 2].removeInner(found, from + 1);
        if (removed != empty) {
          children[i + 2] = removed;
        } else {
          children.splice(i, 3);
          i -= 3;
        }
      }
      if (local.length) for (var _i6 = 0, _span; _i6 < decorations.length; _i6++) if (_span = decorations[_i6]) {
        for (var _j2 = 0; _j2 < local.length; _j2++) if (local[_j2].eq(_span, offset)) {
          if (local == this.local) local = this.local.slice();
          local.splice(_j2--, 1);
        }
      }
      if (children == this.children && local == this.local) return this;
      return local.length || children.length ? new DecorationSet(local, children) : empty;
    }
  }, {
    key: "forChild",
    value: function forChild(offset, node) {
      if (this == empty) return this;
      if (node.isLeaf) return DecorationSet.empty;
      var child, local;
      for (var i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset) {
        if (this.children[i] == offset) child = this.children[i + 2];
        break;
      }
      var start = offset + 1,
        end = start + node.content.size;
      for (var _i7 = 0; _i7 < this.local.length; _i7++) {
        var dec = this.local[_i7];
        if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
          var from = Math.max(start, dec.from) - start,
            to = Math.min(end, dec.to) - start;
          if (from < to) (local || (local = [])).push(dec.copy(from, to));
        }
      }
      if (local) {
        var localSet = new DecorationSet(local.sort(byPos), none);
        return child ? new DecorationGroup([localSet, child]) : localSet;
      }
      return child || empty;
    }
  }, {
    key: "eq",
    value: function eq(other) {
      if (this == other) return true;
      if (!(other instanceof DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return false;
      for (var i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return false;
      for (var _i8 = 0; _i8 < this.children.length; _i8 += 3) if (this.children[_i8] != other.children[_i8] || this.children[_i8 + 1] != other.children[_i8 + 1] || !this.children[_i8 + 2].eq(other.children[_i8 + 2])) return false;
      return true;
    }
  }, {
    key: "locals",
    value: function locals(node) {
      return removeOverlap(this.localsInner(node));
    }
  }, {
    key: "localsInner",
    value: function localsInner(node) {
      if (this == empty) return none;
      if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
      var result = [];
      for (var i = 0; i < this.local.length; i++) {
        if (!(this.local[i].type instanceof InlineType)) result.push(this.local[i]);
      }
      return result;
    }
  }, {
    key: "forEachSet",
    value: function forEachSet(f) {
      f(this);
    }
  }], [{
    key: "create",
    value: function create(doc, decorations) {
      return decorations.length ? buildTree(decorations, doc, 0, noSpec) : empty;
    }
  }]);
  return DecorationSet;
}();
DecorationSet.empty = new DecorationSet([], []);
DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty;
var DecorationGroup = function () {
  function DecorationGroup(members) {
    _classCallCheck(this, DecorationGroup);
    this.members = members;
  }
  _createClass(DecorationGroup, [{
    key: "map",
    value: function map(mapping, doc) {
      var mappedDecos = this.members.map(function (member) {
        return member.map(mapping, doc, noSpec);
      });
      return DecorationGroup.from(mappedDecos);
    }
  }, {
    key: "forChild",
    value: function forChild(offset, child) {
      if (child.isLeaf) return DecorationSet.empty;
      var found = [];
      for (var i = 0; i < this.members.length; i++) {
        var result = this.members[i].forChild(offset, child);
        if (result == empty) continue;
        if (result instanceof DecorationGroup) found = found.concat(result.members);else found.push(result);
      }
      return DecorationGroup.from(found);
    }
  }, {
    key: "eq",
    value: function eq(other) {
      if (!(other instanceof DecorationGroup) || other.members.length != this.members.length) return false;
      for (var i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return false;
      return true;
    }
  }, {
    key: "locals",
    value: function locals(node) {
      var result,
        sorted = true;
      for (var i = 0; i < this.members.length; i++) {
        var locals = this.members[i].localsInner(node);
        if (!locals.length) continue;
        if (!result) {
          result = locals;
        } else {
          if (sorted) {
            result = result.slice();
            sorted = false;
          }
          for (var j = 0; j < locals.length; j++) result.push(locals[j]);
        }
      }
      return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
    }
  }, {
    key: "forEachSet",
    value: function forEachSet(f) {
      for (var i = 0; i < this.members.length; i++) this.members[i].forEachSet(f);
    }
  }], [{
    key: "from",
    value: function from(members) {
      switch (members.length) {
        case 0:
          return empty;
        case 1:
          return members[0];
        default:
          return new DecorationGroup(members.every(function (m) {
            return m instanceof DecorationSet;
          }) ? members : members.reduce(function (r, m) {
            return r.concat(m instanceof DecorationSet ? m : m.members);
          }, []));
      }
    }
  }]);
  return DecorationGroup;
}();
function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
  var children = oldChildren.slice();
  var _loop4 = function _loop4(_baseOffset) {
    var moved = 0;
    mapping.maps[i].forEach(function (oldStart, oldEnd, newStart, newEnd) {
      var dSize = newEnd - newStart - (oldEnd - oldStart);
      for (var _i12 = 0; _i12 < children.length; _i12 += 3) {
        var end = children[_i12 + 1];
        if (end < 0 || oldStart > end + _baseOffset - moved) continue;
        var start = children[_i12] + _baseOffset - moved;
        if (oldEnd >= start) {
          children[_i12 + 1] = oldStart <= start ? -2 : -1;
        } else if (oldStart >= _baseOffset && dSize) {
          children[_i12] += dSize;
          children[_i12 + 1] += dSize;
        }
      }
      moved += dSize;
    });
    _baseOffset = mapping.maps[i].map(_baseOffset, -1);
    baseOffset = _baseOffset;
  };
  for (var i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    _loop4(baseOffset);
  }
  var mustRebuild = false;
  for (var _i9 = 0; _i9 < children.length; _i9 += 3) if (children[_i9 + 1] < 0) {
    if (children[_i9 + 1] == -2) {
      mustRebuild = true;
      children[_i9 + 1] = -1;
      continue;
    }
    var from = mapping.map(oldChildren[_i9] + oldOffset),
      fromLocal = from - offset;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue;
    }
    var to = mapping.map(oldChildren[_i9 + 1] + oldOffset, -1),
      toLocal = to - offset;
    var _node$content$findInd2 = node.content.findIndex(fromLocal),
      index = _node$content$findInd2.index,
      childOffset = _node$content$findInd2.offset;
    var childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      var mapped = children[_i9 + 2].mapInner(mapping, childNode, from + 1, oldChildren[_i9] + oldOffset + 1, options);
      if (mapped != empty) {
        children[_i9] = fromLocal;
        children[_i9 + 1] = toLocal;
        children[_i9 + 2] = mapped;
      } else {
        children[_i9 + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  }
  if (mustRebuild) {
    var decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
    var built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (var _i10 = 0; _i10 < children.length; _i10 += 3) if (children[_i10 + 1] < 0) {
      children.splice(_i10, 3);
      _i10 -= 3;
    }
    for (var _i11 = 0, j = 0; _i11 < built.children.length; _i11 += 3) {
      var _from2 = built.children[_i11];
      while (j < children.length && children[j] < _from2) j += 3;
      children.splice(j, 0, built.children[_i11], built.children[_i11 + 1], built.children[_i11 + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset) {
  if (!offset || !spans.length) return spans;
  var result = [];
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    result.push(new Decoration(span.from + offset, span.to + offset, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
  function gather(set, oldOffset) {
    for (var i = 0; i < set.local.length; i++) {
      var mapped = set.local[i].map(mapping, offset, oldOffset);
      if (mapped) decorations.push(mapped);else if (options.onRemove) options.onRemove(set.local[i].spec);
    }
    for (var _i13 = 0; _i13 < set.children.length; _i13 += 3) gather(set.children[_i13 + 2], set.children[_i13] + oldOffset + 1);
  }
  for (var i = 0; i < children.length; i += 3) if (children[i + 1] == -1) gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset) {
  if (node.isLeaf) return null;
  var end = offset + node.nodeSize,
    found = null;
  for (var i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset && span.to < end) {
      (found || (found = [])).push(span);
      spans[i] = null;
    }
  }
  return found;
}
function withoutNulls(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) if (array[i] != null) result.push(array[i]);
  return result;
}
function buildTree(spans, node, offset, options) {
  var children = [],
    hasNulls = false;
  node.forEach(function (childNode, localStart) {
    var found = takeSpansForNode(spans, childNode, localStart + offset);
    if (found) {
      hasNulls = true;
      var subtree = buildTree(found, childNode, offset + localStart + 1, options);
      if (subtree != empty) children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  var locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
  for (var i = 0; i < locals.length; i++) if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) options.onRemove(locals[i].spec);
    locals.splice(i--, 1);
  }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  var working = spans;
  for (var i = 0; i < working.length - 1; i++) {
    var span = working[i];
    if (span.from != span.to) for (var j = i + 1; j < working.length; j++) {
      var next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) working = spans.slice();
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue;
      } else {
        if (next.from < span.to) {
          if (working == spans) working = spans.slice();
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break;
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) i++;
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  var found = [];
  view.someProp("decorations", function (f) {
    var result = f(view.state);
    if (result && result != empty) found.push(result);
  });
  if (view.cursorWrapper) found.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = ie && ie_version <= 11;
var SelectionState = function () {
  function SelectionState() {
    _classCallCheck(this, SelectionState);
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  _createClass(SelectionState, [{
    key: "set",
    value: function set(sel) {
      this.anchorNode = sel.anchorNode;
      this.anchorOffset = sel.anchorOffset;
      this.focusNode = sel.focusNode;
      this.focusOffset = sel.focusOffset;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.anchorNode = this.focusNode = null;
    }
  }, {
    key: "eq",
    value: function eq(sel) {
      return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
    }
  }]);
  return SelectionState;
}();
var DOMObserver = function () {
  function DOMObserver(view, handleDOMChange) {
    var _this11 = this;
    _classCallCheck(this, DOMObserver);
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) _this11.queue.push(mutations[i]);
      if (ie && ie_version <= 11 && mutations.some(function (m) {
        return m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length;
      })) _this11.flushSoon();else _this11.flush();
    });
    if (useCharData) {
      this.onCharData = function (e) {
        _this11.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        });
        _this11.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  _createClass(DOMObserver, [{
    key: "flushSoon",
    value: function flushSoon() {
      var _this12 = this;
      if (this.flushingSoon < 0) this.flushingSoon = window.setTimeout(function () {
        _this12.flushingSoon = -1;
        _this12.flush();
      }, 20);
    }
  }, {
    key: "forceFlush",
    value: function forceFlush() {
      if (this.flushingSoon > -1) {
        window.clearTimeout(this.flushingSoon);
        this.flushingSoon = -1;
        this.flush();
      }
    }
  }, {
    key: "start",
    value: function start() {
      if (this.observer) {
        this.observer.takeRecords();
        this.observer.observe(this.view.dom, observeOptions);
      }
      if (this.onCharData) this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
      this.connectSelection();
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this13 = this;
      if (this.observer) {
        var take = this.observer.takeRecords();
        if (take.length) {
          for (var i = 0; i < take.length; i++) this.queue.push(take[i]);
          window.setTimeout(function () {
            return _this13.flush();
          }, 20);
        }
        this.observer.disconnect();
      }
      if (this.onCharData) this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
      this.disconnectSelection();
    }
  }, {
    key: "connectSelection",
    value: function connectSelection() {
      this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
  }, {
    key: "disconnectSelection",
    value: function disconnectSelection() {
      this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
    }
  }, {
    key: "suppressSelectionUpdates",
    value: function suppressSelectionUpdates() {
      var _this14 = this;
      this.suppressingSelectionUpdates = true;
      setTimeout(function () {
        return _this14.suppressingSelectionUpdates = false;
      }, 50);
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange() {
      if (!hasFocusAndSelection(this.view)) return;
      if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
      if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
        var sel = this.view.domSelectionRange();
        if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
      }
      this.flush();
    }
  }, {
    key: "setCurSelection",
    value: function setCurSelection() {
      this.currentSelection.set(this.view.domSelectionRange());
    }
  }, {
    key: "ignoreSelectionChange",
    value: function ignoreSelectionChange(sel) {
      if (!sel.focusNode) return true;
      var ancestors = new Set(),
        container;
      for (var scan = sel.focusNode; scan; scan = parentNode(scan)) ancestors.add(scan);
      for (var _scan = sel.anchorNode; _scan; _scan = parentNode(_scan)) if (ancestors.has(_scan)) {
        container = _scan;
        break;
      }
      var desc = container && this.view.docView.nearestDesc(container);
      if (desc && desc.ignoreMutation({
        type: "selection",
        target: container.nodeType == 3 ? container.parentNode : container
      })) {
        this.setCurSelection();
        return true;
      }
    }
  }, {
    key: "pendingRecords",
    value: function pendingRecords() {
      if (this.observer) {
        var _iterator2 = _createForOfIteratorHelper(this.observer.takeRecords()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var mut = _step2.value;
            this.queue.push(mut);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this.queue;
    }
  }, {
    key: "selectionChanged",
    value: function selectionChanged(sel) {
      return !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(this.view) && !this.ignoreSelectionChange(sel);
    }
  }, {
    key: "flush",
    value: function flush() {
      var view = this.view;
      if (!view.docView || this.flushingSoon > -1) return;
      var mutations = this.pendingRecords();
      if (mutations.length) this.queue = [];
      var sel = view.domSelectionRange(),
        newSel = this.selectionChanged(sel);
      var from = -1,
        to = -1,
        typeOver = false,
        added = [];
      if (view.editable) {
        for (var i = 0; i < mutations.length; i++) {
          var result = this.registerMutation(mutations[i], added);
          if (result) {
            from = from < 0 ? result.from : Math.min(result.from, from);
            to = to < 0 ? result.to : Math.max(result.to, to);
            if (result.typeOver) typeOver = true;
          }
        }
      }
      if (gecko && added.length) {
        var brs = added.filter(function (n) {
          return n.nodeName == "BR";
        });
        if (brs.length == 2) {
          var _brs = _slicedToArray(brs, 2),
            a = _brs[0],
            b = _brs[1];
          if (a.parentNode && a.parentNode.parentNode == b.parentNode) b.remove();else a.remove();
        } else {
          var focusNode = this.currentSelection.focusNode;
          var _iterator3 = _createForOfIteratorHelper(brs),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var br = _step3.value;
              var parent = br.parentNode;
              if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view, focusNode) != parent)) br.remove();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
      var readSel = null;
      if (from < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(prosemirrorState.Selection.near(view.state.doc.resolve(0), 1))) {
        view.input.lastFocus = 0;
        selectionToDOM(view);
        this.currentSelection.set(sel);
        view.scrollToSelection();
      } else if (from > -1 || newSel) {
        if (from > -1) {
          view.docView.markDirty(from, to);
          checkCSS(view);
        }
        this.handleDOMChange(from, to, typeOver, added);
        if (view.docView && view.docView.dirty) view.updateState(view.state);else if (!this.currentSelection.eq(sel)) selectionToDOM(view);
        this.currentSelection.set(sel);
      }
    }
  }, {
    key: "registerMutation",
    value: function registerMutation(mut, added) {
      if (added.indexOf(mut.target) > -1) return null;
      var desc = this.view.docView.nearestDesc(mut.target);
      if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" || mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
      if (!desc || desc.ignoreMutation(mut)) return null;
      if (mut.type == "childList") {
        for (var i = 0; i < mut.addedNodes.length; i++) {
          var node = mut.addedNodes[i];
          added.push(node);
          if (node.nodeType == 3) this.lastChangedTextNode = node;
        }
        if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) return {
          from: desc.posBefore,
          to: desc.posAfter
        };
        var prev = mut.previousSibling,
          next = mut.nextSibling;
        if (ie && ie_version <= 11 && mut.addedNodes.length) {
          for (var _i14 = 0; _i14 < mut.addedNodes.length; _i14++) {
            var _mut$addedNodes$_i = mut.addedNodes[_i14],
              previousSibling = _mut$addedNodes$_i.previousSibling,
              nextSibling = _mut$addedNodes$_i.nextSibling;
            if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) prev = previousSibling;
            if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) next = nextSibling;
          }
        }
        var fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
        var from = desc.localPosFromDOM(mut.target, fromOffset, -1);
        var toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
        var to = desc.localPosFromDOM(mut.target, toOffset, 1);
        return {
          from: from,
          to: to
        };
      } else if (mut.type == "attributes") {
        return {
          from: desc.posAtStart - desc.border,
          to: desc.posAtEnd + desc.border
        };
      } else {
        this.lastChangedTextNode = mut.target;
        return {
          from: desc.posAtStart,
          to: desc.posAtEnd,
          typeOver: mut.target.nodeValue == mut.oldValue
        };
      }
    }
  }]);
  return DOMObserver;
}();
var cssChecked = new WeakMap();
var cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view)) return;
  cssChecked.set(view, null);
  if (['normal', 'nowrap', 'pre-line'].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned) return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  var anchorNode = range.startContainer,
    anchorOffset = range.startOffset;
  var focusNode = range.endContainer,
    focusOffset = range.endOffset;
  var currentAnchor = view.domAtPos(view.state.selection.anchor);
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset)) {
    var _ref5 = [focusNode, focusOffset, anchorNode, anchorOffset];
    anchorNode = _ref5[0];
    anchorOffset = _ref5[1];
    focusNode = _ref5[2];
    focusOffset = _ref5[3];
  }
  return {
    anchorNode: anchorNode,
    anchorOffset: anchorOffset,
    focusNode: focusNode,
    focusOffset: focusOffset
  };
}
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    var range = selection.getComposedRanges(view.root)[0];
    if (range) return rangeToSelectionRange(view, range);
  }
  var found;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found = event.getTargetRanges()[0];
  }
  view.dom.addEventListener("beforeinput", read, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read, true);
  return found ? rangeToSelectionRange(view, found) : null;
}
function blockParent(view, node) {
  for (var p = node.parentNode; p && p != view.dom; p = p.parentNode) {
    var desc = view.docView.nearestDesc(p, true);
    if (desc && desc.node.isBlock) return p;
  }
  return null;
}
function parseBetween(view, from_, to_) {
  var _view$docView$parseRa = view.docView.parseRange(from_, to_),
    parent = _view$docView$parseRa.node,
    fromOffset = _view$docView$parseRa.fromOffset,
    toOffset = _view$docView$parseRa.toOffset,
    from = _view$docView$parseRa.from,
    to = _view$docView$parseRa.to;
  var domSel = view.domSelectionRange();
  var find;
  var anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{
      node: anchor,
      offset: domSel.anchorOffset
    }];
    if (!selectionCollapsed(domSel)) find.push({
      node: domSel.focusNode,
      offset: domSel.focusOffset
    });
  }
  if (chrome && view.input.lastKeyCode === 8) {
    for (var off = toOffset; off > fromOffset; off--) {
      var node = parent.childNodes[off - 1],
        desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) break;
    }
  }
  var startDoc = view.state.doc;
  var parser = view.someProp("domParser") || prosemirrorModel.DOMParser.fromSchema(view.state.schema);
  var $from = startDoc.resolve(from);
  var sel = null,
    doc = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode: ruleFromNode,
      context: $from
    });
  if (find && find[0].pos != null) {
    var _anchor = find[0].pos,
      head = find[1] && find[1].pos;
    if (head == null) head = _anchor;
    sel = {
      anchor: _anchor + from,
      head: head + from
    };
  }
  return {
    doc: doc,
    sel: sel,
    from: from,
    to: to
  };
}
function ruleFromNode(dom) {
  var desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      var skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip: skip
      };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from, to, typeOver, addedNodes) {
  var compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from < 0) {
    var origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    var newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(13, "Enter"));
      })) return;
      var _tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer") _tr.setMeta("pointer", true);else if (origin == "key") _tr.scrollIntoView();
      if (compositionID) _tr.setMeta("composition", compositionID);
      view.dispatch(_tr);
    }
    return;
  }
  var $before = view.state.doc.resolve(from);
  var shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  var sel = view.state.selection;
  var parse = parseBetween(view, from, to);
  var doc = view.state.doc,
    compare = doc.slice(parse.from, parse.to);
  var preferredPos, preferredSide;
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  var change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if (change) view.input.domChangeCount++;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some(function (n) {
    return n.nodeType == 1 && !isInline.test(n.nodeName);
  }) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", function (f) {
    return f(view, keyEvent(13, "Enter"));
  })) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof prosemirrorState.TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {
        start: sel.from,
        endA: sel.to,
        endB: sel.to
      };
    } else {
      if (parse.sel) {
        var _sel2 = resolveSelection(view, view.state.doc, parse.sel);
        if (_sel2 && !_sel2.eq(view.state.selection)) {
          var _tr2 = view.state.tr.setSelection(_sel2);
          if (compositionID) _tr2.setMeta("composition", compositionID);
          view.dispatch(_tr2);
        }
      }
      return;
    }
  }
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof prosemirrorState.TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  var $from = parse.doc.resolveNoCache(change.start - parse.from);
  var $to = parse.doc.resolveNoCache(change.endB - parse.from);
  var $fromA = doc.resolve(change.start);
  var inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  var nextSel;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some(function (n) {
    return n.nodeName == "DIV" || n.nodeName == "P";
  })) || !inlineChange && $from.pos < parse.doc.content.size && !$from.sameParent($to) && (nextSel = prosemirrorState.Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head == $to.pos) && view.someProp("handleKeyDown", function (f) {
    return f(view, keyEvent(13, "Enter"));
  })) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", function (f) {
    return f(view, keyEvent(8, "Backspace"));
  })) {
    if (android && chrome) view.domObserver.suppressSelectionUpdates();
    return;
  }
  if (chrome && android && change.endB == change.start) view.input.lastAndroidDelete = Date.now();
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse.doc.resolveNoCache(change.endB - parse.from);
    setTimeout(function () {
      view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  var chFrom = change.start,
    chTo = change.endA;
  var tr, storedMarks, markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(function () {
          return selectionToDOM(view);
        }, 20);
      }
      tr = view.state.tr["delete"](chFrom, chTo);
      storedMarks = doc.resolve(change.start).marksAcross(doc.resolve(change.endA));
    } else if (change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))) {
      tr = view.state.tr;
      if (markChange.type == "add") tr.addMark(chFrom, chTo, markChange.mark);else tr.removeMark(chFrom, chTo, markChange.mark);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      var text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      if (view.someProp("handleTextInput", function (f) {
        return f(view, chFrom, chTo, text);
      })) return;
      tr = view.state.tr.insertText(text, chFrom, chTo);
    }
  }
  if (!tr) tr = view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
  if (parse.sel) {
    var _sel3 = resolveSelection(view, tr.doc, parse.sel);
    if (_sel3 && !(chrome && android && view.composing && _sel3.empty && (change.start != change.endB || view.input.lastAndroidDelete < Date.now() - 100) && (_sel3.head == chFrom || _sel3.head == tr.mapping.map(chTo) - 1) || ie && _sel3.empty && _sel3.head == chFrom)) tr.setSelection(_sel3);
  }
  if (storedMarks) tr.ensureMarks(storedMarks);
  if (compositionID) tr.setMeta("composition", compositionID);
  view.dispatch(tr.scrollIntoView());
}
function resolveSelection(view, doc, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc.content.size) return null;
  return selectionBetween(view, doc.resolve(parsedSel.anchor), doc.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  var curMarks = cur.firstChild.marks,
    prevMarks = prev.firstChild.marks;
  var added = curMarks,
    removed = prevMarks,
    type,
    mark,
    update;
  for (var i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
  for (var _i15 = 0; _i15 < curMarks.length; _i15++) removed = curMarks[_i15].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = function update(node) {
      return node.mark(mark.addToSet(node.marks));
    };
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = function update(node) {
      return node.mark(mark.removeFromSet(node.marks));
    };
  } else {
    return null;
  }
  var updated = [];
  for (var _i16 = 0; _i16 < prev.childCount; _i16++) updated.push(update(prev.child(_i16)));
  if (prosemirrorModel.Fragment.from(updated).eq(cur)) return {
    mark: mark,
    type: type
  };
}
function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
  if (end - start <= $newEnd.pos - $newStart.pos || skipClosingAndOpening($newStart, true, false) < $newEnd.pos) return false;
  var $start = old.resolve(start);
  if (!$newStart.parent.isTextblock) {
    var after = $start.nodeAfter;
    return after != null && end == start + after.nodeSize;
  }
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return false;
  var $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end) return false;
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  var depth = $pos.depth,
    end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    var next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  var start = a.findDiffStart(b, pos);
  if (start == null) return null;
  var _a$findDiffEnd = a.findDiffEnd(b, pos + a.size, pos + b.size),
    endA = _a$findDiffEnd.a,
    endB = _a$findDiffEnd.b;
  if (preferredSide == "end") {
    var adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    var move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    var _move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= _move;
    if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1))) start += _move ? 1 : -1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {
    start: start,
    endA: endA,
    endB: endB
  };
}
function isSurrogatePair(str) {
  if (str.length != 2) return false;
  var a = str.charCodeAt(0),
    b = str.charCodeAt(1);
  return a >= 0xDC00 && a <= 0xDFFF && b >= 0xD800 && b <= 0xDBFF;
}
var __serializeForClipboard = serializeForClipboard;
var __parseFromClipboard = parseFromClipboard;
var __endComposition = endComposition;
var EditorView = function () {
  function EditorView(place, props) {
    var _this15 = this;
    _classCallCheck(this, EditorView);
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = undefined;
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild) place.appendChild(this.dom);else if (typeof place == "function") place(this.dom);else if (place.mount) this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, function (from, to, typeOver, added) {
      return readDOMChange(_this15, from, to, typeOver, added);
    });
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  _createClass(EditorView, [{
    key: "composing",
    get: function get() {
      return this.input.composing;
    }
  }, {
    key: "props",
    get: function get() {
      if (this._props.state != this.state) {
        var prev = this._props;
        this._props = {};
        for (var name in prev) this._props[name] = prev[name];
        this._props.state = this.state;
      }
      return this._props;
    }
  }, {
    key: "update",
    value: function update(props) {
      if (props.handleDOMEvents != this._props.handleDOMEvents) ensureListeners(this);
      var prevProps = this._props;
      this._props = props;
      if (props.plugins) {
        props.plugins.forEach(checkStateComponent);
        this.directPlugins = props.plugins;
      }
      this.updateStateInner(props.state, prevProps);
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      var updated = {};
      for (var name in this._props) updated[name] = this._props[name];
      updated.state = this.state;
      for (var _name2 in props) updated[_name2] = props[_name2];
      this.update(updated);
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      this.updateStateInner(state, this._props);
    }
  }, {
    key: "updateStateInner",
    value: function updateStateInner(state, prevProps) {
      var _a;
      var prev = this.state,
        redraw = false,
        updateSel = false;
      if (state.storedMarks && this.composing) {
        clearComposition(this);
        updateSel = true;
      }
      this.state = state;
      var pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
      if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
        var nodeViews = buildNodeViews(this);
        if (changedNodeViews(nodeViews, this.nodeViews)) {
          this.nodeViews = nodeViews;
          redraw = true;
        }
      }
      if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
        ensureListeners(this);
      }
      this.editable = getEditable(this);
      updateCursorWrapper(this);
      var innerDeco = viewDecorations(this),
        outerDeco = computeDocDeco(this);
      var scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
      var updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
      if (updateDoc || !state.selection.eq(prev.selection)) updateSel = true;
      var oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
      if (updateSel) {
        this.domObserver.stop();
        var forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
        if (updateDoc) {
          var chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
          if (this.composing) this.input.compositionNode = findCompositionNode(this);
          if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
            this.docView.updateOuterDeco(outerDeco);
            this.docView.destroy();
            this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
          }
          if (chromeKludge && !this.trackWrites) forceSelUpdate = true;
        }
        if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
          selectionToDOM(this, forceSelUpdate);
        } else {
          syncNodeSelection(this, state.selection);
          this.domObserver.setCurSelection();
        }
        this.domObserver.start();
      }
      this.updatePluginViews(prev);
      if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc)) this.updateDraggedNode(this.dragging, prev);
      if (scroll == "reset") {
        this.dom.scrollTop = 0;
      } else if (scroll == "to selection") {
        this.scrollToSelection();
      } else if (oldScrollPos) {
        resetScrollPos(oldScrollPos);
      }
    }
  }, {
    key: "scrollToSelection",
    value: function scrollToSelection() {
      var _this16 = this;
      var startDOM = this.domSelectionRange().focusNode;
      if (this.someProp("handleScrollToSelection", function (f) {
        return f(_this16);
      })) ;else if (this.state.selection instanceof prosemirrorState.NodeSelection) {
        var target = this.docView.domAfterPos(this.state.selection.from);
        if (target.nodeType == 1) scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
      } else {
        scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
      }
    }
  }, {
    key: "destroyPluginViews",
    value: function destroyPluginViews() {
      var view;
      while (view = this.pluginViews.pop()) if (view.destroy) view.destroy();
    }
  }, {
    key: "updatePluginViews",
    value: function updatePluginViews(prevState) {
      if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
        this.prevDirectPlugins = this.directPlugins;
        this.destroyPluginViews();
        for (var i = 0; i < this.directPlugins.length; i++) {
          var plugin = this.directPlugins[i];
          if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
        }
        for (var _i17 = 0; _i17 < this.state.plugins.length; _i17++) {
          var _plugin = this.state.plugins[_i17];
          if (_plugin.spec.view) this.pluginViews.push(_plugin.spec.view(this));
        }
      } else {
        for (var _i18 = 0; _i18 < this.pluginViews.length; _i18++) {
          var pluginView = this.pluginViews[_i18];
          if (pluginView.update) pluginView.update(this, prevState);
        }
      }
    }
  }, {
    key: "updateDraggedNode",
    value: function updateDraggedNode(dragging, prev) {
      var sel = dragging.node,
        found = -1;
      if (this.state.doc.nodeAt(sel.from) == sel.node) {
        found = sel.from;
      } else {
        var movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
        var moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
        if (moved == sel.node) found = movedPos;
      }
      this.dragging = new Dragging(dragging.slice, dragging.move, found < 0 ? undefined : prosemirrorState.NodeSelection.create(this.state.doc, found));
    }
  }, {
    key: "someProp",
    value: function someProp(propName, f) {
      var prop = this._props && this._props[propName],
        value;
      if (prop != null && (value = f ? f(prop) : prop)) return value;
      for (var i = 0; i < this.directPlugins.length; i++) {
        var _prop = this.directPlugins[i].props[propName];
        if (_prop != null && (value = f ? f(_prop) : _prop)) return value;
      }
      var plugins = this.state.plugins;
      if (plugins) for (var _i19 = 0; _i19 < plugins.length; _i19++) {
        var _prop2 = plugins[_i19].props[propName];
        if (_prop2 != null && (value = f ? f(_prop2) : _prop2)) return value;
      }
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      if (ie) {
        var node = this.root.activeElement;
        if (node == this.dom) return true;
        if (!node || !this.dom.contains(node)) return false;
        while (node && this.dom != node && this.dom.contains(node)) {
          if (node.contentEditable == 'false') return false;
          node = node.parentElement;
        }
        return true;
      }
      return this.root.activeElement == this.dom;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.domObserver.stop();
      if (this.editable) focusPreventScroll(this.dom);
      selectionToDOM(this);
      this.domObserver.start();
    }
  }, {
    key: "root",
    get: function get() {
      var _this17 = this;
      var cached = this._root;
      if (cached == null) {
        var _loop5 = function _loop5(search) {
            if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
              if (!search.getSelection) Object.getPrototypeOf(search).getSelection = function () {
                return search.ownerDocument.getSelection();
              };
              return {
                v: _this17._root = search
              };
            }
          },
          _ret3;
        for (var search = this.dom.parentNode; search; search = search.parentNode) {
          _ret3 = _loop5(search);
          if (_ret3) return _ret3.v;
        }
      }
      return cached || document;
    }
  }, {
    key: "updateRoot",
    value: function updateRoot() {
      this._root = null;
    }
  }, {
    key: "posAtCoords",
    value: function posAtCoords(coords) {
      return _posAtCoords(this, coords);
    }
  }, {
    key: "coordsAtPos",
    value: function coordsAtPos(pos) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return _coordsAtPos(this, pos, side);
    }
  }, {
    key: "domAtPos",
    value: function domAtPos(pos) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.docView.domFromPos(pos, side);
    }
  }, {
    key: "nodeDOM",
    value: function nodeDOM(pos) {
      var desc = this.docView.descAt(pos);
      return desc ? desc.nodeDOM : null;
    }
  }, {
    key: "posAtDOM",
    value: function posAtDOM(node, offset) {
      var bias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      var pos = this.docView.posFromDOM(node, offset, bias);
      if (pos == null) throw new RangeError("DOM position not inside the editor");
      return pos;
    }
  }, {
    key: "endOfTextblock",
    value: function endOfTextblock(dir, state) {
      return _endOfTextblock(this, state || this.state, dir);
    }
  }, {
    key: "pasteHTML",
    value: function pasteHTML(html, event) {
      return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
    }
  }, {
    key: "pasteText",
    value: function pasteText(text, event) {
      return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.docView) return;
      destroyInput(this);
      this.destroyPluginViews();
      if (this.mounted) {
        this.docView.update(this.state.doc, [], viewDecorations(this), this);
        this.dom.textContent = "";
      } else if (this.dom.parentNode) {
        this.dom.parentNode.removeChild(this.dom);
      }
      this.docView.destroy();
      this.docView = null;
      clearReusedRange();
    }
  }, {
    key: "isDestroyed",
    get: function get() {
      return this.docView == null;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      return _dispatchEvent(this, event);
    }
  }, {
    key: "dispatch",
    value: function dispatch(tr) {
      var dispatchTransaction = this._props.dispatchTransaction;
      if (dispatchTransaction) dispatchTransaction.call(this, tr);else this.updateState(this.state.apply(tr));
    }
  }, {
    key: "domSelectionRange",
    value: function domSelectionRange() {
      var sel = this.domSelection();
      if (!sel) return {
        focusNode: null,
        focusOffset: 0,
        anchorNode: null,
        anchorOffset: 0
      };
      return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
    }
  }, {
    key: "domSelection",
    value: function domSelection() {
      return this.root.getSelection();
    }
  }]);
  return EditorView;
}();
function computeDocDeco(view) {
  var attrs = Object.create(null);
  attrs["class"] = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", function (value) {
    if (typeof value == "function") value = value(view.state);
    if (value) for (var attr in value) {
      if (attr == "class") attrs["class"] += " " + value[attr];else if (attr == "style") attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName") attrs[attr] = String(value[attr]);
    }
  });
  if (!attrs.translate) attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    var dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = {
      dom: dom,
      deco: Decoration.widget(view.state.selection.from, dom, {
        raw: true,
        marks: view.markCursor
      })
    };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", function (value) {
    return value(view.state) === false;
  });
}
function selectionContextChanged(sel1, sel2) {
  var depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  var result = Object.create(null);
  function add(obj) {
    for (var _prop3 in obj) if (!Object.prototype.hasOwnProperty.call(result, _prop3)) result[_prop3] = obj[_prop3];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  var nA = 0,
    nB = 0;
  for (var _prop4 in a) {
    if (a[_prop4] != b[_prop4]) return true;
    nA++;
  }
  for (var _ in b) nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}
exports.Decoration = Decoration;
exports.DecorationSet = DecorationSet;
exports.EditorView = EditorView;
exports.__endComposition = __endComposition;
exports.__parseFromClipboard = __parseFromClipboard;
exports.__serializeForClipboard = __serializeForClipboard;


/***/ }),

/***/ "./node_modules/w3c-keyname/index.cjs":
/*!********************************************!*\
  !*** ./node_modules/w3c-keyname/index.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};

var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: "\""
};

var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);

// Fill in the digit keys
for (var i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);

// The function keys
for (var i = 1; i <= 24; i++) base[i + 111] = "F" + i;

// And the alphabetic keys
for (var i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}

// For each code that doesn't have a shift-equivalent, copy the base name
for (var code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];

function keyName(event) {
  // On macOS, keys held with Shift and Cmd don't reflect the effect of Shift in `.key`.
  // On IE, shift effect is never included in `.key`.
  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey ||
      ie && event.shiftKey && event.key && event.key.length == 1 ||
      event.key == "Unidentified";
  var name = (!ignoreKey && event.key) ||
    (event.shiftKey ? shift : base)[event.keyCode] ||
    event.key || "Unidentified";
  // Edge sometimes produces wrong names (Issue #3)
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8860571/
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name
}

exports.base = base;
exports.keyName = keyName;
exports.shift = shift;


/***/ })

}]);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"qEo3B":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7a2040b76fa4ea68";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kjLP2":[function(require,module,exports) {
var _web = require("solid-js/web");
const _tmpl$ = /*#__PURE__*/ (0, _web.template)(`<h1>solid-parameter-controls examples</h1>`, 2);
function ExampleApp() {
    return [
        _tmpl$.cloneNode(true),
        asd
    ];
}
(0, _web.render)(ExampleApp, document.getElementById("container"));

},{"solid-js/web":"1DGm0"}],"1DGm0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorBoundary", ()=>(0, _solidJs.ErrorBoundary));
parcelHelpers.export(exports, "For", ()=>(0, _solidJs.For));
parcelHelpers.export(exports, "Index", ()=>(0, _solidJs.Index));
parcelHelpers.export(exports, "Match", ()=>(0, _solidJs.Match));
parcelHelpers.export(exports, "Show", ()=>(0, _solidJs.Show));
parcelHelpers.export(exports, "Suspense", ()=>(0, _solidJs.Suspense));
parcelHelpers.export(exports, "SuspenseList", ()=>(0, _solidJs.SuspenseList));
parcelHelpers.export(exports, "Switch", ()=>(0, _solidJs.Switch));
parcelHelpers.export(exports, "createComponent", ()=>(0, _solidJs.createComponent));
parcelHelpers.export(exports, "effect", ()=>(0, _solidJs.createRenderEffect));
parcelHelpers.export(exports, "getOwner", ()=>(0, _solidJs.getOwner));
parcelHelpers.export(exports, "mergeProps", ()=>(0, _solidJs.mergeProps));
parcelHelpers.export(exports, "Aliases", ()=>Aliases);
parcelHelpers.export(exports, "Assets", ()=>Assets);
parcelHelpers.export(exports, "ChildProperties", ()=>ChildProperties);
parcelHelpers.export(exports, "DOMElements", ()=>DOMElements);
parcelHelpers.export(exports, "DelegatedEvents", ()=>DelegatedEvents);
parcelHelpers.export(exports, "Dynamic", ()=>Dynamic);
parcelHelpers.export(exports, "HydrationScript", ()=>Assets);
parcelHelpers.export(exports, "NoHydration", ()=>NoHydration);
parcelHelpers.export(exports, "Portal", ()=>Portal);
parcelHelpers.export(exports, "PropAliases", ()=>PropAliases);
parcelHelpers.export(exports, "Properties", ()=>Properties);
parcelHelpers.export(exports, "SVGElements", ()=>SVGElements);
parcelHelpers.export(exports, "SVGNamespace", ()=>SVGNamespace);
parcelHelpers.export(exports, "addEventListener", ()=>addEventListener);
parcelHelpers.export(exports, "assign", ()=>assign);
parcelHelpers.export(exports, "classList", ()=>classList);
parcelHelpers.export(exports, "className", ()=>className);
parcelHelpers.export(exports, "clearDelegatedEvents", ()=>clearDelegatedEvents);
parcelHelpers.export(exports, "delegateEvents", ()=>delegateEvents);
parcelHelpers.export(exports, "dynamicProperty", ()=>dynamicProperty);
parcelHelpers.export(exports, "escape", ()=>escape);
parcelHelpers.export(exports, "generateHydrationScript", ()=>generateHydrationScript);
parcelHelpers.export(exports, "getHydrationKey", ()=>getHydrationKey);
parcelHelpers.export(exports, "getNextElement", ()=>getNextElement);
parcelHelpers.export(exports, "getNextMarker", ()=>getNextMarker);
parcelHelpers.export(exports, "getNextMatch", ()=>getNextMatch);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "innerHTML", ()=>innerHTML);
parcelHelpers.export(exports, "insert", ()=>insert);
parcelHelpers.export(exports, "isServer", ()=>isServer);
parcelHelpers.export(exports, "memo", ()=>memo);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "renderToStream", ()=>renderToStream);
parcelHelpers.export(exports, "renderToString", ()=>renderToString);
parcelHelpers.export(exports, "renderToStringAsync", ()=>renderToStringAsync);
parcelHelpers.export(exports, "resolveSSRNode", ()=>resolveSSRNode);
parcelHelpers.export(exports, "runHydrationEvents", ()=>runHydrationEvents);
parcelHelpers.export(exports, "setAttribute", ()=>setAttribute);
parcelHelpers.export(exports, "setAttributeNS", ()=>setAttributeNS);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "ssr", ()=>ssr);
parcelHelpers.export(exports, "ssrAttribute", ()=>ssrAttribute);
parcelHelpers.export(exports, "ssrClassList", ()=>ssrClassList);
parcelHelpers.export(exports, "ssrHydrationKey", ()=>ssrHydrationKey);
parcelHelpers.export(exports, "ssrSpread", ()=>ssrSpread);
parcelHelpers.export(exports, "ssrStyle", ()=>ssrStyle);
parcelHelpers.export(exports, "style", ()=>style);
parcelHelpers.export(exports, "template", ()=>template);
var _solidJs = require("solid-js");
const booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
];
const Properties = /*#__PURE__*/ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
]);
const ChildProperties = /*#__PURE__*/ new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]);
const Aliases = {
    className: "class",
    htmlFor: "for"
};
const PropAliases = {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
};
const DelegatedEvents = /*#__PURE__*/ new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
]);
const SVGElements = /*#__PURE__*/ new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern"
]);
const SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
};
const DOMElements = /*#__PURE__*/ new Set([
    "html",
    "base",
    "head",
    "link",
    "meta",
    "style",
    "title",
    "body",
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "main",
    "nav",
    "section",
    "body",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "img",
    "map",
    "track",
    "video",
    "embed",
    "iframe",
    "object",
    "param",
    "picture",
    "portal",
    "source",
    "svg",
    "math",
    "canvas",
    "noscript",
    "script",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "textarea",
    "details",
    "dialog",
    "menu",
    "summary",
    "details",
    "slot",
    "template",
    "acronym",
    "applet",
    "basefont",
    "bgsound",
    "big",
    "blink",
    "center",
    "content",
    "dir",
    "font",
    "frame",
    "frameset",
    "hgroup",
    "image",
    "keygen",
    "marquee",
    "menuitem",
    "nobr",
    "noembed",
    "noframes",
    "plaintext",
    "rb",
    "rtc",
    "shadow",
    "spacer",
    "strike",
    "tt",
    "xmp",
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "portal",
    "pre",
    "progress",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp",
    "input"
]);
function memo(fn, equals) {
    return (0, _solidJs.createMemo)(fn, undefined, !equals ? {
        equals
    } : undefined);
}
function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
    while(aStart < aEnd || bStart < bEnd){
        if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
            continue;
        }
        while(a[aEnd - 1] === b[bEnd - 1]){
            aEnd--;
            bEnd--;
        }
        if (aEnd === aStart) {
            const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
            while(bStart < bEnd)parentNode.insertBefore(b[bStart++], node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            if (!map || !map.has(a[aStart])) a[aStart].remove();
            aStart++;
        }
        else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            const node = a[--aEnd].nextSibling;
            parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
            parentNode.insertBefore(b[--bEnd], node);
            a[aEnd] = b[bEnd];
        } else {
            if (!map) {
                map = new Map();
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            const index = map.get(a[aStart]);
            if (index != null) {
                if (bStart < index && index < bEnd) {
                    let i = aStart, sequence = 1, t;
                    while(++i < aEnd && i < bEnd){
                        if ((t = map.get(a[i])) == null || t !== index + sequence) break;
                        sequence++;
                    }
                    if (sequence > index - bStart) {
                        const node = a[aStart];
                        while(bStart < index)parentNode.insertBefore(b[bStart++], node);
                    } else parentNode.replaceChild(b[bStart++], a[aStart++]);
                } else aStart++;
            } else a[aStart++].remove();
        }
    }
}
const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init) {
    let disposer;
    (0, _solidJs.createRoot)((dispose)=>{
        disposer = dispose;
        element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
    });
    return ()=>{
        disposer();
        element.textContent = "";
    };
}
function template(html, check, isSVG) {
    const t = document.createElement("template");
    t.innerHTML = html;
    let node = t.content.firstChild;
    if (isSVG) node = node.firstChild;
    return node;
}
function delegateEvents(eventNames, document = window.document) {
    const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
    for(let i = 0, l = eventNames.length; i < l; i++){
        const name = eventNames[i];
        if (!e.has(name)) {
            e.add(name);
            document.addEventListener(name, eventHandler);
        }
    }
}
function clearDelegatedEvents(document = window.document) {
    if (document[$$EVENTS]) {
        for (let name of document[$$EVENTS].keys())document.removeEventListener(name, eventHandler);
        delete document[$$EVENTS];
    }
}
function setAttribute(node, name, value) {
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
    if (value == null) node.removeAttributeNS(namespace, name);
    else node.setAttributeNS(namespace, name, value);
}
function className(node, value) {
    if (value == null) node.removeAttribute("class");
    else node.className = value;
}
function addEventListener(node, name, handler, delegate) {
    if (delegate) {
        if (Array.isArray(handler)) {
            node[`$$${name}`] = handler[0];
            node[`$$${name}Data`] = handler[1];
        } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
        const handlerFn = handler[0];
        node.addEventListener(name, handler[0] = (e)=>handlerFn.call(node, handler[1], e));
    } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
    const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
    let i, len;
    for(i = 0, len = prevKeys.length; i < len; i++){
        const key = prevKeys[i];
        if (!key || key === "undefined" || value[key]) continue;
        toggleClassKey(node, key, false);
        delete prev[key];
    }
    for(i = 0, len = classKeys.length; i < len; i++){
        const key = classKeys[i], classValue = !!value[key];
        if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
        toggleClassKey(node, key, true);
        prev[key] = classValue;
    }
    return prev;
}
function style(node, value, prev = {}) {
    const nodeStyle = node.style;
    const prevString = typeof prev === "string";
    if (value == null && prevString || typeof value === "string") return nodeStyle.cssText = value;
    prevString && (nodeStyle.cssText = undefined, prev = {});
    value || (value = {});
    let v, s;
    for(s in prev){
        value[s] == null && nodeStyle.removeProperty(s);
        delete prev[s];
    }
    for(s in value){
        v = value[s];
        if (v !== prev[s]) {
            nodeStyle.setProperty(s, v);
            prev[s] = v;
        }
    }
    return prev;
}
function spread(node, accessor, isSVG, skipChildren) {
    if (typeof accessor === "function") (0, _solidJs.createRenderEffect)((current)=>spreadExpression(node, accessor(), current, isSVG, skipChildren));
    else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}
function dynamicProperty(props, key) {
    const src = props[key];
    Object.defineProperty(props, key, {
        get () {
            return src();
        },
        enumerable: true
    });
    return props;
}
function innerHTML(parent, content) {
    !(0, _solidJs.sharedConfig).context && (parent.innerHTML = content);
}
function insert(parent, accessor, marker, initial) {
    if (marker !== undefined && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    (0, _solidJs.createRenderEffect)((current)=>insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
    props || (props = {});
    for(const prop in prevProps)if (!(prop in props)) {
        if (prop === "children") continue;
        assignProp(node, prop, null, prevProps[prop], isSVG, skipRef);
    }
    for(const prop1 in props){
        if (prop1 === "children") {
            if (!skipChildren) insertExpression(node, props.children);
            continue;
        }
        const value = props[prop1];
        prevProps[prop1] = assignProp(node, prop1, value, prevProps[prop1], isSVG, skipRef);
    }
}
function hydrate$1(code, element, options = {}) {
    (0, _solidJs.sharedConfig).completed = globalThis._$HY.completed;
    (0, _solidJs.sharedConfig).events = globalThis._$HY.events;
    (0, _solidJs.sharedConfig).load = globalThis._$HY.load;
    (0, _solidJs.sharedConfig).gather = (root)=>gatherHydratable(element, root);
    (0, _solidJs.sharedConfig).registry = new Map();
    (0, _solidJs.sharedConfig).context = {
        id: options.renderId || "",
        count: 0
    };
    gatherHydratable(element, options.renderId);
    const dispose = render(code, element, [
        ...element.childNodes
    ]);
    (0, _solidJs.sharedConfig).context = null;
    return dispose;
}
function getNextElement(template1) {
    let node, key;
    if (!(0, _solidJs.sharedConfig).context || !(node = (0, _solidJs.sharedConfig).registry.get(key = getHydrationKey()))) return template1.cloneNode(true);
    if ((0, _solidJs.sharedConfig).completed) (0, _solidJs.sharedConfig).completed.add(node);
    (0, _solidJs.sharedConfig).registry.delete(key);
    return node;
}
function getNextMatch(el, nodeName) {
    while(el && el.localName !== nodeName)el = el.nextSibling;
    return el;
}
function getNextMarker(start) {
    let end = start, count = 0, current = [];
    if ((0, _solidJs.sharedConfig).context) while(end){
        if (end.nodeType === 8) {
            const v = end.nodeValue;
            if (v === "#") count++;
            else if (v === "/") {
                if (count === 0) return [
                    end,
                    current
                ];
                count--;
            }
        }
        current.push(end);
        end = end.nextSibling;
    }
    return [
        end,
        current
    ];
}
function runHydrationEvents() {
    if ((0, _solidJs.sharedConfig).events && !(0, _solidJs.sharedConfig).events.queued) {
        queueMicrotask(()=>{
            const { completed , events  } = (0, _solidJs.sharedConfig);
            events.queued = false;
            while(events.length){
                const [el, e] = events[0];
                if (!completed.has(el)) return;
                eventHandler(e);
                events.shift();
            }
        });
        (0, _solidJs.sharedConfig).events.queued = true;
    }
}
function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w)=>w.toUpperCase());
}
function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for(let i = 0, nameLen = classNames.length; i < nameLen; i++)node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef) {
    let isCE, isProp, isChildProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
        if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
        const e = prop.slice(3);
        prev && node.removeEventListener(e, prev);
        value && node.addEventListener(e, value);
    } else if (prop.slice(0, 10) === "oncapture:") {
        const e = prop.slice(10);
        prev && node.removeEventListener(e, prev, true);
        value && node.addEventListener(e, value, true);
    } else if (prop.slice(0, 2) === "on") {
        const name = prop.slice(2).toLowerCase();
        const delegate = DelegatedEvents.has(name);
        if (!delegate && prev) {
            const h = Array.isArray(prev) ? prev[0] : prev;
            node.removeEventListener(name, h);
        }
        if (delegate || value) {
            addEventListener(node, name, value, delegate);
            delegate && delegateEvents([
                name
            ]);
        }
    } else if ((isChildProp = ChildProperties.has(prop)) || !isSVG && (PropAliases[prop] || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
        if (prop === "class" || prop === "className") className(node, value);
        else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;
        else node[PropAliases[prop] || prop] = value;
    } else {
        const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
        if (ns) setAttributeNS(node, ns, prop, value);
        else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
}
function eventHandler(e) {
    const key = `$$${e.type}`;
    let node = e.composedPath && e.composedPath()[0] || e.target;
    if (e.target !== node) Object.defineProperty(e, "target", {
        configurable: true,
        value: node
    });
    Object.defineProperty(e, "currentTarget", {
        configurable: true,
        get () {
            return node || document;
        }
    });
    if ((0, _solidJs.sharedConfig).registry && !(0, _solidJs.sharedConfig).done) {
        (0, _solidJs.sharedConfig).done = true;
        document.querySelectorAll("[id^=pl-]").forEach((elem)=>elem.remove());
    }
    while(node !== null){
        const handler = node[key];
        if (handler && !node.disabled) {
            const data = node[`${key}Data`];
            data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
            if (e.cancelBubble) return;
        }
        node = node.host && node.host !== node && node.host instanceof Node ? node.host : node.parentNode;
    }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
    props || (props = {});
    if (!skipChildren && "children" in props) (0, _solidJs.createRenderEffect)(()=>prevProps.children = insertExpression(node, props.children, prevProps.children));
    props.ref && props.ref(node);
    (0, _solidJs.createRenderEffect)(()=>assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
    if ((0, _solidJs.sharedConfig).context && !current) current = [
        ...parent.childNodes
    ];
    while(typeof current === "function")current = current();
    if (value === current) return current;
    const t = typeof value, multi = marker !== undefined;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
        if ((0, _solidJs.sharedConfig).context) return current;
        if (t === "number") value = value.toString();
        if (multi) {
            let node = current[0];
            if (node && node.nodeType === 3) node.data = value;
            else node = document.createTextNode(value);
            current = cleanChildren(parent, current, marker, node);
        } else if (current !== "" && typeof current === "string") current = parent.firstChild.data = value;
        else current = parent.textContent = value;
    } else if (value == null || t === "boolean") {
        if ((0, _solidJs.sharedConfig).context) return current;
        current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
        (0, _solidJs.createRenderEffect)(()=>{
            let v = value();
            while(typeof v === "function")v = v();
            current = insertExpression(parent, v, current, marker);
        });
        return ()=>current;
    } else if (Array.isArray(value)) {
        const array = [];
        if (normalizeIncomingArray(array, value, unwrapArray)) {
            (0, _solidJs.createRenderEffect)(()=>current = insertExpression(parent, array, current, marker, true));
            return ()=>current;
        }
        if ((0, _solidJs.sharedConfig).context) for(let i = 0; i < array.length; i++){
            if (array[i].parentNode) return current = array;
        }
        if (array.length === 0) {
            current = cleanChildren(parent, current, marker);
            if (multi) return current;
        } else if (Array.isArray(current)) {
            if (current.length === 0) appendNodes(parent, array, marker);
            else reconcileArrays(parent, current, array);
        } else {
            current && cleanChildren(parent);
            appendNodes(parent, array);
        }
        current = array;
    } else if (value instanceof Node) {
        if ((0, _solidJs.sharedConfig).context && value.parentNode) return current = multi ? [
            value
        ] : value;
        if (Array.isArray(current)) {
            if (multi) return current = cleanChildren(parent, current, marker, value);
            cleanChildren(parent, current, null, value);
        } else if (current == null || current === "" || !parent.firstChild) parent.appendChild(value);
        else parent.replaceChild(value, parent.firstChild);
        current = value;
    }
    return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
    let dynamic = false;
    for(let i = 0, len = array.length; i < len; i++){
        let item = array[i], t;
        if (item instanceof Node) normalized.push(item);
        else if (item == null || item === true || item === false) ;
        else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item) || dynamic;
        else if ((t = typeof item) === "string") normalized.push(document.createTextNode(item));
        else if (t === "function") {
            if (unwrap) {
                while(typeof item === "function")item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [
                    item
                ]) || dynamic;
            } else {
                normalized.push(item);
                dynamic = true;
            }
        } else normalized.push(document.createTextNode(item.toString()));
    }
    return dynamic;
}
function appendNodes(parent, array, marker) {
    for(let i = 0, len = array.length; i < len; i++)parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
    if (marker === undefined) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
        let inserted = false;
        for(let i = current.length - 1; i >= 0; i--){
            const el = current[i];
            if (node !== el) {
                const isParent = el.parentNode === parent;
                if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
                else isParent && el.remove();
            } else inserted = true;
        }
    } else parent.insertBefore(node, marker);
    return [
        node
    ];
}
function gatherHydratable(element, root) {
    const templates = element.querySelectorAll(`*[data-hk]`);
    for(let i = 0; i < templates.length; i++){
        const node = templates[i];
        const key = node.getAttribute("data-hk");
        if ((!root || key.startsWith(root)) && !(0, _solidJs.sharedConfig).registry.has(key)) (0, _solidJs.sharedConfig).registry.set(key, node);
    }
}
function getHydrationKey() {
    const hydrate1 = (0, _solidJs.sharedConfig).context;
    return `${hydrate1.id}${hydrate1.count++}`;
}
function Assets() {
    return;
}
function NoHydration(props) {
    return (0, _solidJs.sharedConfig).context ? undefined : props.children;
}
function throwInBrowser(func) {
    const err = new Error(`${func.name} is not supported in the browser, returning undefined`);
    console.error(err);
}
function renderToString(fn, options) {
    throwInBrowser(renderToString);
}
function renderToStringAsync(fn, options) {
    throwInBrowser(renderToStringAsync);
}
function renderToStream(fn, options) {
    throwInBrowser(renderToStream);
}
function ssr(template, ...nodes) {}
function resolveSSRNode(node) {}
function ssrClassList(value) {}
function ssrStyle(value) {}
function ssrSpread(accessor) {}
function ssrAttribute(key, value) {}
function ssrHydrationKey() {}
function escape(html) {}
function generateHydrationScript() {}
const isServer = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
const hydrate = (...args)=>{
    (0, _solidJs.enableHydration)();
    return hydrate$1(...args);
};
function Portal(props) {
    const { useShadow  } = props, marker = document.createTextNode(""), mount = props.mount || document.body;
    function renderPortal() {
        if ((0, _solidJs.sharedConfig).context) {
            const [s, set] = (0, _solidJs.createSignal)(false);
            queueMicrotask(()=>set(true));
            return ()=>s() && props.children;
        } else return ()=>props.children;
    }
    if (mount instanceof HTMLHeadElement) {
        const [clean, setClean] = (0, _solidJs.createSignal)(false);
        const cleanup = ()=>setClean(true);
        (0, _solidJs.createRoot)((dispose)=>insert(mount, ()=>!clean() ? renderPortal()() : dispose(), null));
        (0, _solidJs.onCleanup)(()=>{
            if ((0, _solidJs.sharedConfig).context) queueMicrotask(cleanup);
            else cleanup();
        });
    } else {
        const container = createElement(props.isSVG ? "g" : "div", props.isSVG), renderRoot = useShadow && container.attachShadow ? container.attachShadow({
            mode: "open"
        }) : container;
        Object.defineProperty(container, "host", {
            get () {
                return marker.parentNode;
            }
        });
        insert(renderRoot, renderPortal());
        mount.appendChild(container);
        props.ref && props.ref(container);
        (0, _solidJs.onCleanup)(()=>mount.removeChild(container));
    }
    return marker;
}
function Dynamic(props) {
    const [p, others] = (0, _solidJs.splitProps)(props, [
        "component"
    ]);
    const cached = (0, _solidJs.createMemo)(()=>p.component);
    return (0, _solidJs.createMemo)(()=>{
        const component = cached();
        switch(typeof component){
            case "function":
                return (0, _solidJs.untrack)(()=>component(others));
            case "string":
                const isSvg = SVGElements.has(component);
                const el = (0, _solidJs.sharedConfig).context ? getNextElement() : createElement(component, isSvg);
                spread(el, others, isSvg);
                return el;
        }
    });
}

},{"solid-js":"5aELA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5aELA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$DEVCOMP", ()=>$DEVCOMP);
parcelHelpers.export(exports, "$PROXY", ()=>$PROXY);
parcelHelpers.export(exports, "$TRACK", ()=>$TRACK);
parcelHelpers.export(exports, "DEV", ()=>DEV);
parcelHelpers.export(exports, "ErrorBoundary", ()=>ErrorBoundary);
parcelHelpers.export(exports, "For", ()=>For);
parcelHelpers.export(exports, "Index", ()=>Index);
parcelHelpers.export(exports, "Match", ()=>Match);
parcelHelpers.export(exports, "Show", ()=>Show);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "SuspenseList", ()=>SuspenseList);
parcelHelpers.export(exports, "Switch", ()=>Switch);
parcelHelpers.export(exports, "batch", ()=>batch);
parcelHelpers.export(exports, "cancelCallback", ()=>cancelCallback);
parcelHelpers.export(exports, "children", ()=>children);
parcelHelpers.export(exports, "createComponent", ()=>createComponent);
parcelHelpers.export(exports, "createComputed", ()=>createComputed);
parcelHelpers.export(exports, "createContext", ()=>createContext);
parcelHelpers.export(exports, "createDeferred", ()=>createDeferred);
parcelHelpers.export(exports, "createEffect", ()=>createEffect);
parcelHelpers.export(exports, "createMemo", ()=>createMemo);
parcelHelpers.export(exports, "createReaction", ()=>createReaction);
parcelHelpers.export(exports, "createRenderEffect", ()=>createRenderEffect);
parcelHelpers.export(exports, "createResource", ()=>createResource);
parcelHelpers.export(exports, "createRoot", ()=>createRoot);
parcelHelpers.export(exports, "createSelector", ()=>createSelector);
parcelHelpers.export(exports, "createSignal", ()=>createSignal);
parcelHelpers.export(exports, "createUniqueId", ()=>createUniqueId);
parcelHelpers.export(exports, "enableExternalSource", ()=>enableExternalSource);
parcelHelpers.export(exports, "enableHydration", ()=>enableHydration);
parcelHelpers.export(exports, "enableScheduling", ()=>enableScheduling);
parcelHelpers.export(exports, "equalFn", ()=>equalFn);
parcelHelpers.export(exports, "from", ()=>from);
parcelHelpers.export(exports, "getListener", ()=>getListener);
parcelHelpers.export(exports, "getOwner", ()=>getOwner);
parcelHelpers.export(exports, "indexArray", ()=>indexArray);
parcelHelpers.export(exports, "lazy", ()=>lazy);
parcelHelpers.export(exports, "mapArray", ()=>mapArray);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "observable", ()=>observable);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "onCleanup", ()=>onCleanup);
parcelHelpers.export(exports, "onError", ()=>onError);
parcelHelpers.export(exports, "onMount", ()=>onMount);
parcelHelpers.export(exports, "requestCallback", ()=>requestCallback);
parcelHelpers.export(exports, "resetErrorBoundaries", ()=>resetErrorBoundaries);
parcelHelpers.export(exports, "runWithOwner", ()=>runWithOwner);
parcelHelpers.export(exports, "sharedConfig", ()=>sharedConfig);
parcelHelpers.export(exports, "splitProps", ()=>splitProps);
parcelHelpers.export(exports, "startTransition", ()=>startTransition);
parcelHelpers.export(exports, "untrack", ()=>untrack);
parcelHelpers.export(exports, "useContext", ()=>useContext);
parcelHelpers.export(exports, "useTransition", ()=>useTransition);
let taskIdCounter = 1, isCallbackScheduled = false, isPerformingWork = false, taskQueue = [], currentTask = null, shouldYieldToHost = null, yieldInterval = 5, deadline = 0, maxYieldInterval = 300, scheduleCallback = null, scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
    const channel = new MessageChannel(), port = channel.port2;
    scheduleCallback = ()=>port.postMessage(null);
    channel.port1.onmessage = ()=>{
        if (scheduledCallback !== null) {
            const currentTime = performance.now();
            deadline = currentTime + yieldInterval;
            const hasTimeRemaining = true;
            try {
                const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
                if (!hasMoreWork) scheduledCallback = null;
                else port.postMessage(null);
            } catch (error) {
                port.postMessage(null);
                throw error;
            }
        }
    };
    if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
        const scheduling = navigator.scheduling;
        shouldYieldToHost = ()=>{
            const currentTime = performance.now();
            if (currentTime >= deadline) {
                if (scheduling.isInputPending()) return true;
                return currentTime >= maxYieldInterval;
            } else return false;
        };
    } else shouldYieldToHost = ()=>performance.now() >= deadline;
}
function enqueue(taskQueue1, task) {
    function findIndex() {
        let m = 0;
        let n = taskQueue1.length - 1;
        while(m <= n){
            const k = n + m >> 1;
            const cmp = task.expirationTime - taskQueue1[k].expirationTime;
            if (cmp > 0) m = k + 1;
            else if (cmp < 0) n = k - 1;
            else return k;
        }
        return m;
    }
    taskQueue1.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
    if (!scheduleCallback) setupScheduler();
    let startTime = performance.now(), timeout = maxSigned31BitInt;
    if (options && options.timeout) timeout = options.timeout;
    const newTask = {
        id: taskIdCounter++,
        fn,
        startTime,
        expirationTime: startTime + timeout
    };
    enqueue(taskQueue, newTask);
    if (!isCallbackScheduled && !isPerformingWork) {
        isCallbackScheduled = true;
        scheduledCallback = flushWork;
        scheduleCallback();
    }
    return newTask;
}
function cancelCallback(task) {
    task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
    isCallbackScheduled = false;
    isPerformingWork = true;
    try {
        return workLoop(hasTimeRemaining, initialTime);
    } finally{
        currentTask = null;
        isPerformingWork = false;
    }
}
function workLoop(hasTimeRemaining, initialTime) {
    let currentTime = initialTime;
    currentTask = taskQueue[0] || null;
    while(currentTask !== null){
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) break;
        const callback = currentTask.fn;
        if (callback !== null) {
            currentTask.fn = null;
            const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            callback(didUserCallbackTimeout);
            currentTime = performance.now();
            if (currentTask === taskQueue[0]) taskQueue.shift();
        } else taskQueue.shift();
        currentTask = taskQueue[0] || null;
    }
    return currentTask !== null;
}
const sharedConfig = {};
function setHydrateContext(context) {
    sharedConfig.context = context;
}
function nextHydrateContext() {
    return {
        ...sharedConfig.context,
        id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
        count: 0
    };
}
const equalFn = (a, b)=>a === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const $DEVCOMP = Symbol("solid-dev-component");
const signalOptions = {
    equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};
const [transPending, setTransPending] = /*@__PURE__*/ createSignal(false);
var Owner = null;
let Transition = null;
let Scheduler = null;
let ExternalSourceFactory = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, root = unowned && true ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: null,
        owner: detachedOwner || owner
    }, updateFn = unowned ? fn : ()=>fn(()=>cleanNode(root));
    Owner = root;
    Listener = null;
    try {
        return runUpdates(updateFn, true);
    } finally{
        Listener = listener;
        Owner = owner;
    }
}
function createSignal(value1, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
        value: value1,
        observers: null,
        observerSlots: null,
        pending: NOTPENDING,
        comparator: options.equals || undefined
    };
    const setter = (value)=>{
        if (typeof value === "function") {
            if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.pending !== NOTPENDING ? s.pending : s.tValue);
            else value = value(s.pending !== NOTPENDING ? s.pending : s.value);
        }
        return writeSignal(s, value);
    };
    return [
        readSignal.bind(s),
        setter
    ];
}
function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c);
    else updateComputation(c);
}
function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c);
    else updateComputation(c);
}
function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && lookup(Owner, SuspenseContext.id);
    if (s) c.suspense = s;
    c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
}
function createReaction(onInvalidate, options) {
    let fn;
    const c = createComputation(()=>{
        fn ? fn() : untrack(onInvalidate);
        fn = undefined;
    }, undefined, false, 0), s = SuspenseContext && lookup(Owner, SuspenseContext.id);
    if (s) c.suspense = s;
    c.user = true;
    return (tracking)=>{
        fn = tracking;
        updateComputation(c);
    };
}
function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.pending = NOTPENDING;
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || undefined;
    if (Scheduler && Transition && Transition.running) {
        c.tState = STALE;
        Updates.push(c);
    } else updateComputation(c);
    return readSignal.bind(c);
}
function createResource(source, fetcher, options) {
    if (arguments.length === 2) {
        if (typeof fetcher === "object") {
            options = fetcher;
            fetcher = source;
            source = true;
        }
    } else if (arguments.length === 1) {
        fetcher = source;
        source = true;
    }
    options || (options = {});
    const contexts = new Set(), [value, setValue] = createSignal(options.initialValue), [track, trigger] = createSignal(undefined, {
        equals: false
    }), [loading, setLoading] = createSignal(false), [error, setError] = createSignal();
    let err = undefined, pr = null, initP = null, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    if (sharedConfig.context) {
        id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
        if (sharedConfig.load) initP = sharedConfig.load(id);
    }
    function loadEnd(p, v, e, key) {
        if (pr === p) {
            pr = null;
            resolved = true;
            if (initP && (p === initP || v === initP) && options.onHydrated) queueMicrotask(()=>options.onHydrated(key, {
                    value: v
                }));
            initP = null;
            setError(err = e);
            if (Transition && p && loadedUnderTransition) {
                Transition.promises.delete(p);
                loadedUnderTransition = false;
                runUpdates(()=>{
                    Transition.running = true;
                    if (!Transition.promises.size) {
                        Effects.push.apply(Effects, Transition.effects);
                        Transition.effects = [];
                    }
                    completeLoad(v);
                }, false);
            } else completeLoad(v);
        }
        return v;
    }
    function completeLoad(v) {
        batch(()=>{
            setValue(()=>v);
            setLoading(false);
            for (const c of contexts.keys())c.decrement();
            contexts.clear();
        });
    }
    function read() {
        const c = SuspenseContext && lookup(Owner, SuspenseContext.id), v = value();
        if (err) throw err;
        if (Listener && !Listener.user && c) createComputed(()=>{
            track();
            if (pr) {
                if (c.resolved && Transition) Transition.promises.add(pr);
                else if (!contexts.has(c)) {
                    c.increment();
                    contexts.add(c);
                }
            }
        });
        return v;
    }
    function load(refetching = true) {
        if (refetching && scheduled) return;
        scheduled = false;
        setError(err = undefined);
        const lookup1 = dynamic ? dynamic() : source;
        loadedUnderTransition = Transition && Transition.running;
        if (lookup1 == null || lookup1 === false) {
            loadEnd(pr, untrack(value));
            return;
        }
        if (Transition && pr) Transition.promises.delete(pr);
        const p = initP || untrack(()=>fetcher(lookup1, {
                value: value(),
                refetching
            }));
        if (typeof p !== "object" || !("then" in p)) {
            loadEnd(pr, p);
            return p;
        }
        pr = p;
        scheduled = true;
        queueMicrotask(()=>scheduled = false);
        batch(()=>{
            setLoading(true);
            trigger();
        });
        return p.then((v)=>loadEnd(p, v, undefined, lookup1), (e)=>loadEnd(p, e, e));
    }
    Object.defineProperties(read, {
        loading: {
            get () {
                return loading();
            }
        },
        error: {
            get () {
                return error();
            }
        },
        latest: {
            get () {
                if (!resolved) return read();
                if (err) throw err;
                return value();
            }
        }
    });
    if (dynamic) createComputed(()=>load(false));
    else load(false);
    return [
        read,
        {
            refetch: load,
            mutate: setValue
        }
    ];
}
function createDeferred(source, options) {
    let t, timeout = options ? options.timeoutMs : undefined;
    const node = createComputation(()=>{
        if (!t || !t.fn) t = requestCallback(()=>setDeferred(()=>node.value), timeout !== undefined ? {
            timeout
        } : undefined);
        return source();
    }, undefined, true);
    const [deferred, setDeferred] = createSignal(node.value, options);
    updateComputation(node);
    setDeferred(()=>node.value);
    return deferred;
}
function createSelector(source, fn = equalFn, options) {
    const subs = new Map();
    const node = createComputation((p)=>{
        const v = source();
        for (const key of subs.keys())if (fn(key, v) !== fn(key, p)) {
            const l = subs.get(key);
            for (const c of l.values()){
                c.state = STALE;
                if (c.pure) Updates.push(c);
                else Effects.push(c);
            }
        }
        return v;
    }, undefined, true, STALE);
    updateComputation(node);
    return (key)=>{
        let listener;
        if (listener = Listener) {
            let l;
            if (l = subs.get(key)) l.add(listener);
            else subs.set(key, l = new Set([
                listener
            ]));
            onCleanup(()=>{
                l.delete(listener);
                !l.size && subs.delete(key);
            });
        }
        return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
    };
}
function batch(fn) {
    if (Pending) return fn();
    let result;
    const q = Pending = [];
    try {
        result = fn();
    } finally{
        Pending = null;
    }
    runUpdates(()=>{
        for(let i = 0; i < q.length; i += 1){
            const data = q[i];
            if (data.pending !== NOTPENDING) {
                const pending = data.pending;
                data.pending = NOTPENDING;
                writeSignal(data, pending);
            }
        }
    }, false);
    return result;
}
function untrack(fn) {
    let result, listener = Listener;
    Listener = null;
    result = fn();
    Listener = listener;
    return result;
}
function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return (prevValue)=>{
        let input;
        if (isArray) {
            input = Array(deps.length);
            for(let i = 0; i < deps.length; i++)input[i] = deps[i]();
        } else input = deps();
        if (defer) {
            defer = false;
            return undefined;
        }
        const result = untrack(()=>fn(input, prevInput, prevValue));
        prevInput = input;
        return result;
    };
}
function onMount(fn) {
    createEffect(()=>untrack(fn));
}
function onCleanup(fn) {
    if (Owner === null) ;
    else if (Owner.cleanups === null) Owner.cleanups = [
        fn
    ];
    else Owner.cleanups.push(fn);
    return fn;
}
function onError(fn) {
    ERROR || (ERROR = Symbol("error"));
    if (Owner === null) ;
    else if (Owner.context === null) Owner.context = {
        [ERROR]: [
            fn
        ]
    };
    else if (!Owner.context[ERROR]) Owner.context[ERROR] = [
        fn
    ];
    else Owner.context[ERROR].push(fn);
}
function getListener() {
    return Listener;
}
function getOwner() {
    return Owner;
}
function runWithOwner(o, fn) {
    const prev = Owner;
    Owner = o;
    try {
        return runUpdates(fn, true);
    } finally{
        Owner = prev;
    }
}
function enableScheduling(scheduler = requestCallback) {
    Scheduler = scheduler;
}
function startTransition(fn) {
    if (Transition && Transition.running) {
        fn();
        return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(()=>{
        Listener = l;
        Owner = o;
        let t;
        if (Scheduler || SuspenseContext) {
            t = Transition || (Transition = {
                sources: new Set(),
                effects: [],
                promises: new Set(),
                disposed: new Set(),
                queue: new Set(),
                running: true
            });
            t.done || (t.done = new Promise((res)=>t.resolve = res));
            t.running = true;
        }
        batch(fn);
        Listener = Owner = null;
        return t ? t.done : undefined;
    });
}
function useTransition() {
    return [
        transPending,
        startTransition
    ];
}
function resumeEffects(e) {
    Effects.push.apply(Effects, e);
    e.length = 0;
}
function createContext(defaultValue) {
    const id = Symbol("context");
    return {
        id,
        Provider: createProvider(id),
        defaultValue
    };
}
function useContext(context) {
    let ctx;
    return (ctx = lookup(Owner, context.id)) !== undefined ? ctx : context.defaultValue;
}
function children(fn) {
    const children1 = createMemo(fn);
    return createMemo(()=>resolveChildren(children1()));
}
let SuspenseContext;
function getSuspenseContext() {
    return SuspenseContext || (SuspenseContext = createContext({}));
}
function enableExternalSource(factory) {
    if (ExternalSourceFactory) {
        const oldFactory = ExternalSourceFactory;
        ExternalSourceFactory = (fn, trigger)=>{
            const oldSource = oldFactory(fn, trigger);
            const source = factory((x)=>oldSource.track(x), trigger);
            return {
                track: (x)=>source.track(x),
                dispose () {
                    source.dispose();
                    oldSource.dispose();
                }
            };
        };
    } else ExternalSourceFactory = factory;
}
function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (!runningTransition && this.state || runningTransition && this.tState)) {
        const updates = Updates;
        Updates = null;
        !runningTransition && this.state === STALE || runningTransition && this.tState === STALE ? updateComputation(this) : lookUpstream(this);
        Updates = updates;
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        if (!Listener.sources) {
            Listener.sources = [
                this
            ];
            Listener.sourceSlots = [
                sSlot
            ];
        } else {
            Listener.sources.push(this);
            Listener.sourceSlots.push(sSlot);
        }
        if (!this.observers) {
            this.observers = [
                Listener
            ];
            this.observerSlots = [
                Listener.sources.length - 1
            ];
        } else {
            this.observers.push(Listener);
            this.observerSlots.push(Listener.sources.length - 1);
        }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
}
function writeSignal(node, value, isComp) {
    if (Pending) {
        if (node.pending === NOTPENDING) Pending.push(node);
        node.pending = value;
        return value;
    }
    if (node.comparator) {
        if (Transition && Transition.running && Transition.sources.has(node)) {
            if (node.comparator(node.tValue, value)) return value;
        } else if (node.comparator(node.value, value)) return value;
    }
    let TransitionRunning = false;
    if (Transition) {
        TransitionRunning = Transition.running;
        if (TransitionRunning || !isComp && Transition.sources.has(node)) {
            Transition.sources.add(node);
            node.tValue = value;
        }
        if (!TransitionRunning) node.value = value;
    } else node.value = value;
    if (node.observers && node.observers.length) runUpdates(()=>{
        for(let i = 0; i < node.observers.length; i += 1){
            const o = node.observers[i];
            if (TransitionRunning && Transition.disposed.has(o)) continue;
            if (TransitionRunning && !o.tState || !TransitionRunning && !o.state) {
                if (o.pure) Updates.push(o);
                else Effects.push(o);
                if (o.observers) markDownstream(o);
            }
            if (TransitionRunning) o.tState = STALE;
            else o.state = STALE;
        }
        if (Updates.length > 10e5) {
            Updates = [];
            throw new Error();
        }
    }, false);
    return value;
}
function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const owner = Owner, listener = Listener, time = ExecCount;
    Listener = Owner = node;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
    if (Transition && !Transition.running && Transition.sources.has(node)) queueMicrotask(()=>{
        runUpdates(()=>{
            Transition && (Transition.running = true);
            runComputation(node, node.tValue, time);
        }, false);
    });
    Listener = listener;
    Owner = owner;
}
function runComputation(node, value, time) {
    let nextValue;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        handleError(err);
    }
    if (!node.updatedAt || node.updatedAt <= time) {
        if (node.observers && node.observers.length) writeSignal(node, nextValue, true);
        else if (Transition && Transition.running && node.pure) {
            Transition.sources.add(node);
            node.tValue = nextValue;
        } else node.value = nextValue;
        node.updatedAt = time;
    }
}
function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
        fn,
        state: state,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: init,
        owner: Owner,
        context: null,
        pure
    };
    if (Transition && Transition.running) {
        c.state = 0;
        c.tState = state;
    }
    if (Owner === null) ;
    else if (Owner !== UNOWNED) {
        if (Transition && Transition.running && Owner.pure) {
            if (!Owner.tOwned) Owner.tOwned = [
                c
            ];
            else Owner.tOwned.push(c);
        } else if (!Owner.owned) Owner.owned = [
            c
        ];
        else Owner.owned.push(c);
    }
    if (ExternalSourceFactory) {
        const [track, trigger] = createSignal(undefined, {
            equals: false
        });
        const ordinary = ExternalSourceFactory(c.fn, trigger);
        onCleanup(()=>ordinary.dispose());
        const triggerInTransition = ()=>startTransition(trigger).then(()=>inTransition.dispose());
        const inTransition = ExternalSourceFactory(c.fn, triggerInTransition);
        c.fn = (x)=>{
            track();
            return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
        };
    }
    return c;
}
function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if (!runningTransition && node.state === 0 || runningTransition && node.tState === 0) return;
    if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [
        node
    ];
    while((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)){
        if (runningTransition && Transition.disposed.has(node)) return;
        if (!runningTransition && node.state || runningTransition && node.tState) ancestors.push(node);
    }
    for(let i = ancestors.length - 1; i >= 0; i--){
        node = ancestors[i];
        if (runningTransition) {
            let top = node, prev = ancestors[i + 1];
            while((top = top.owner) && top !== prev){
                if (Transition.disposed.has(top)) return;
            }
        }
        if (!runningTransition && node.state === STALE || runningTransition && node.tState === STALE) updateComputation(node);
        else if (!runningTransition && node.state === PENDING || runningTransition && node.tState === PENDING) {
            const updates = Updates;
            Updates = null;
            lookUpstream(node, ancestors[0]);
            Updates = updates;
        }
    }
}
function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
        const res = fn();
        completeUpdates(wait);
        return res;
    } catch (err) {
        handleError(err);
    } finally{
        Updates = null;
        if (!wait) Effects = null;
    }
}
function completeUpdates(wait) {
    if (Updates) {
        if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
        else runQueue(Updates);
        Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition && Transition.running) {
        if (Transition.promises.size || Transition.queue.size) {
            Transition.running = false;
            Transition.effects.push.apply(Transition.effects, Effects);
            Effects = null;
            setTransPending(true);
            return;
        }
        const sources = Transition.sources;
        res = Transition.resolve;
        Effects.forEach((e)=>{
            "tState" in e && (e.state = e.tState);
            delete e.tState;
        });
        Transition = null;
        batch(()=>{
            sources.forEach((v)=>{
                v.value = v.tValue;
                if (v.owned) for(let i = 0, len = v.owned.length; i < len; i++)cleanNode(v.owned[i]);
                if (v.tOwned) v.owned = v.tOwned;
                delete v.tValue;
                delete v.tOwned;
                v.tState = 0;
            });
            setTransPending(false);
        });
    }
    if (Effects.length) batch(()=>{
        runEffects(Effects);
        Effects = null;
    });
    else Effects = null;
    if (res) res();
}
function runQueue(queue) {
    for(let i = 0; i < queue.length; i++)runTop(queue[i]);
}
function scheduleQueue(queue) {
    for(let i = 0; i < queue.length; i++){
        const item = queue[i];
        const tasks = Transition.queue;
        if (!tasks.has(item)) {
            tasks.add(item);
            Scheduler(()=>{
                tasks.delete(item);
                runUpdates(()=>{
                    Transition.running = true;
                    runTop(item);
                    if (!tasks.size) {
                        Effects.push.apply(Effects, Transition.effects);
                        Transition.effects = [];
                    }
                }, false);
                Transition && (Transition.running = false);
            });
        }
    }
}
function runUserEffects(queue) {
    let i, userLength = 0;
    for(i = 0; i < queue.length; i++){
        const e = queue[i];
        if (!e.user) runTop(e);
        else queue[userLength++] = e;
    }
    if (sharedConfig.context) setHydrateContext();
    const resume = queue.length;
    for(i = 0; i < userLength; i++)runTop(queue[i]);
    for(i = resume; i < queue.length; i++)runTop(queue[i]);
}
function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0;
    else node.state = 0;
    for(let i = 0; i < node.sources.length; i += 1){
        const source = node.sources[i];
        if (source.sources) {
            if (!runningTransition && source.state === STALE || runningTransition && source.tState === STALE) {
                if (source !== ignore) runTop(source);
            } else if (!runningTransition && source.state === PENDING || runningTransition && source.tState === PENDING) lookUpstream(source, ignore);
        }
    }
}
function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for(let i = 0; i < node.observers.length; i += 1){
        const o = node.observers[i];
        if (!runningTransition && !o.state || runningTransition && !o.tState) {
            if (runningTransition) o.tState = PENDING;
            else o.state = PENDING;
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            o.observers && markDownstream(o);
        }
    }
}
function cleanNode(node) {
    let i;
    if (node.sources) while(node.sources.length){
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
            const n = obs.pop(), s = source.observerSlots.pop();
            if (index < obs.length) {
                n.sourceSlots[s] = index;
                obs[index] = n;
                source.observerSlots[index] = s;
            }
        }
    }
    if (Transition && Transition.running && node.pure) {
        if (node.tOwned) {
            for(i = 0; i < node.tOwned.length; i++)cleanNode(node.tOwned[i]);
            delete node.tOwned;
        }
        reset(node, true);
    } else if (node.owned) {
        for(i = 0; i < node.owned.length; i++)cleanNode(node.owned[i]);
        node.owned = null;
    }
    if (node.cleanups) {
        for(i = 0; i < node.cleanups.length; i++)node.cleanups[i]();
        node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0;
    else node.state = 0;
    node.context = null;
}
function reset(node, top) {
    if (!top) {
        node.tState = 0;
        Transition.disposed.add(node);
    }
    if (node.owned) for(let i = 0; i < node.owned.length; i++)reset(node.owned[i]);
}
function handleError(err) {
    const fns = ERROR && lookup(Owner, ERROR);
    if (!fns) throw err;
    fns.forEach((f)=>f(err));
}
function lookup(owner, key) {
    return owner ? owner.context && owner.context[key] !== undefined ? owner.context[key] : lookup(owner.owner, key) : undefined;
}
function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
    if (Array.isArray(children2)) {
        const results = [];
        for(let i = 0; i < children2.length; i++){
            const result = resolveChildren(children2[i]);
            Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
        }
        return results;
    }
    return children2;
}
function createProvider(id) {
    return function provider(props) {
        let res;
        createComputed(()=>res = untrack(()=>{
                Owner.context = {
                    [id]: props.value
                };
                return children(()=>props.children);
            }));
        return res;
    };
}
function getSymbol() {
    const SymbolCopy = Symbol;
    return SymbolCopy.observable || "@@observable";
}
function observable(input) {
    const $$observable = getSymbol();
    return {
        subscribe (observer) {
            if (!(observer instanceof Object) || observer == null) throw new TypeError("Expected the observer to be an object.");
            const handler = "next" in observer ? observer.next.bind(observer) : observer;
            let complete = false;
            createComputed(()=>{
                if (complete) return;
                const v = input();
                untrack(()=>handler(v));
            });
            return {
                unsubscribe () {
                    complete = true;
                }
            };
        },
        [$$observable] () {
            return this;
        }
    };
}
function from(producer) {
    const [s, set] = createSignal(undefined, {
        equals: false
    });
    if ("subscribe" in producer) {
        const unsub = producer.subscribe((v)=>set(()=>v));
        onCleanup(()=>"unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
    } else {
        const clean = producer(set);
        onCleanup(clean);
    }
    return s;
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
    for(let i = 0; i < d.length; i++)d[i]();
}
function mapArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        let newItems = list() || [], i, j;
        newItems[$TRACK];
        return untrack(()=>{
            let newLen = newItems.length, newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    indexes && (indexes = []);
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for(j = 0; j < newLen; j++){
                    items[j] = newItems[j];
                    mapped[j] = createRoot(mapper);
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for(start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for(end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--){
                    temp[newEnd] = mapped[end];
                    tempdisposers[newEnd] = disposers[end];
                    indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = new Map();
                newIndicesNext = new Array(newEnd + 1);
                for(j = newEnd; j >= start; j--){
                    item = newItems[j];
                    i = newIndices.get(item);
                    newIndicesNext[j] = i === undefined ? -1 : i;
                    newIndices.set(item, j);
                }
                for(i = start; i <= end; i++){
                    item = items[i];
                    j = newIndices.get(item);
                    if (j !== undefined && j !== -1) {
                        temp[j] = mapped[i];
                        tempdisposers[j] = disposers[i];
                        indexes && (tempIndexes[j] = indexes[i]);
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else disposers[i]();
                }
                for(j = start; j < newLen; j++)if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                        indexes[j] = tempIndexes[j];
                        indexes[j](j);
                    }
                } else mapped[j] = createRoot(mapper);
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
            }
            return mapped;
        });
        function mapper(disposer) {
            disposers[j] = disposer;
            if (indexes) {
                const [s, set] = createSignal(j);
                indexes[j] = set;
                return mapFn(newItems[j], s);
            }
            return mapFn(newItems[j]);
        }
    };
}
function indexArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], signals = [], len = 0, i;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        const newItems = list() || [];
        newItems[$TRACK];
        return untrack(()=>{
            if (newItems.length === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    signals = [];
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
                return mapped;
            }
            if (items[0] === FALLBACK) {
                disposers[0]();
                disposers = [];
                items = [];
                mapped = [];
                len = 0;
            }
            for(i = 0; i < newItems.length; i++){
                if (i < items.length && items[i] !== newItems[i]) signals[i](()=>newItems[i]);
                else if (i >= items.length) mapped[i] = createRoot(mapper);
            }
            for(; i < items.length; i++)disposers[i]();
            len = signals.length = disposers.length = newItems.length;
            items = newItems.slice(0);
            return mapped = mapped.slice(0, len);
        });
        function mapper(disposer) {
            disposers[i] = disposer;
            const [s, set] = createSignal(newItems[i]);
            signals[i] = set;
            return mapFn(s, i);
        }
    };
}
let hydrationEnabled = false;
function enableHydration() {
    hydrationEnabled = true;
}
function createComponent(Comp, props) {
    if (hydrationEnabled) {
        if (sharedConfig.context) {
            const c = sharedConfig.context;
            setHydrateContext(nextHydrateContext());
            const r = untrack(()=>Comp(props || {}));
            setHydrateContext(c);
            return r;
        }
    }
    return untrack(()=>Comp(props || {}));
}
function trueFn() {
    return true;
}
const propTraps = {
    get (_, property, receiver) {
        if (property === $PROXY) return receiver;
        return _.get(property);
    },
    has (_, property) {
        return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor (_, property) {
        return {
            configurable: true,
            enumerable: true,
            get () {
                return _.get(property);
            },
            set: trueFn,
            deleteProperty: trueFn
        };
    },
    ownKeys (_) {
        return _.keys();
    }
};
function resolveSource(s) {
    return (s = typeof s === "function" ? s() : s) == null ? {} : s;
}
function mergeProps(...sources) {
    return new Proxy({
        get (property) {
            for(let i = sources.length - 1; i >= 0; i--){
                const v = resolveSource(sources[i])[property];
                if (v !== undefined) return v;
            }
        },
        has (property) {
            for(let i = sources.length - 1; i >= 0; i--){
                if (property in resolveSource(sources[i])) return true;
            }
            return false;
        },
        keys () {
            const keys = [];
            for(let i = 0; i < sources.length; i++)keys.push(...Object.keys(resolveSource(sources[i])));
            return [
                ...new Set(keys)
            ];
        }
    }, propTraps);
}
function splitProps(props, ...keys) {
    const blocked = new Set(keys.flat());
    const descriptors = Object.getOwnPropertyDescriptors(props);
    const res = keys.map((k)=>{
        const clone = {};
        for(let i = 0; i < k.length; i++){
            const key = k[i];
            Object.defineProperty(clone, key, descriptors[key] ? descriptors[key] : {
                get () {
                    return props[key];
                },
                set () {
                    return true;
                }
            });
        }
        return clone;
    });
    res.push(new Proxy({
        get (property) {
            return blocked.has(property) ? undefined : props[property];
        },
        has (property) {
            return blocked.has(property) ? false : property in props;
        },
        keys () {
            return Object.keys(props).filter((k)=>!blocked.has(k));
        }
    }, propTraps));
    return res;
}
function lazy(fn) {
    let comp;
    let p;
    const wrap = (props)=>{
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            (p || (p = fn())).then((mod)=>{
                setHydrateContext(ctx);
                set(()=>mod.default);
                setHydrateContext();
            });
            comp = s;
        } else if (!comp) {
            const [s] = createResource(()=>(p || (p = fn())).then((mod)=>mod.default));
            comp = s;
        } else {
            const c = comp();
            if (c) return c(props);
        }
        let Comp;
        return createMemo(()=>(Comp = comp()) && untrack(()=>{
                if (!ctx) return Comp(props);
                const c = sharedConfig.context;
                setHydrateContext(ctx);
                const r = Comp(props);
                setHydrateContext(c);
                return r;
            }));
    };
    wrap.preload = ()=>p || ((p = fn()).then((mod)=>comp = ()=>mod.default), p);
    return wrap;
}
let counter = 0;
function createUniqueId() {
    const ctx = sharedConfig.context;
    return ctx ? `${ctx.id}${ctx.count++}` : `cl-${counter++}`;
}
function For(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(mapArray(()=>props.each, props.children, fallback ? fallback : undefined));
}
function Index(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(indexArray(()=>props.each, props.children, fallback ? fallback : undefined));
}
function Show(props) {
    let strictEqual = false;
    const condition = createMemo(()=>props.when, undefined, {
        equals: (a, b)=>strictEqual ? a === b : !a === !b
    });
    return createMemo(()=>{
        const c = condition();
        if (c) {
            const child = props.children;
            return (strictEqual = typeof child === "function" && child.length > 0) ? untrack(()=>child(c)) : child;
        }
        return props.fallback;
    });
}
function Switch(props) {
    let strictEqual = false;
    const conditions = children(()=>props.children), evalConditions = createMemo(()=>{
        let conds = conditions();
        if (!Array.isArray(conds)) conds = [
            conds
        ];
        for(let i = 0; i < conds.length; i++){
            const c = conds[i].when;
            if (c) return [
                i,
                c,
                conds[i]
            ];
        }
        return [
            -1
        ];
    }, undefined, {
        equals: (a, b)=>a[0] === b[0] && (strictEqual ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2]
    });
    return createMemo(()=>{
        const [index, when, cond] = evalConditions();
        if (index < 0) return props.fallback;
        const c = cond.children;
        return (strictEqual = typeof c === "function" && c.length > 0) ? untrack(()=>c(when)) : c;
    });
}
function Match(props) {
    return props;
}
let Errors;
const NoErrors = {};
function resetErrorBoundaries() {
    Errors && [
        ...Errors
    ].forEach((fn)=>fn(NoErrors));
}
function ErrorBoundary(props) {
    let err = NoErrors;
    if (sharedConfig.context && sharedConfig.load) err = sharedConfig.load(sharedConfig.context.id + sharedConfig.context.count) || NoErrors;
    const [errored, setErrored] = createSignal(err);
    Errors || (Errors = new Set());
    Errors.add(setErrored);
    onCleanup(()=>Errors.delete(setErrored));
    return createMemo(()=>{
        let e;
        if ((e = errored()) !== NoErrors) {
            const f = props.fallback;
            return typeof f === "function" && f.length ? untrack(()=>f(e, ()=>setErrored(NoErrors))) : f;
        }
        onError(setErrored);
        return props.children;
    });
}
const SuspenseListContext = createContext();
function SuspenseList(props) {
    let index = 0, suspenseSetter, showContent1, showFallback1;
    const listContext = useContext(SuspenseListContext);
    if (listContext) {
        const [inFallback, setFallback] = createSignal(false);
        suspenseSetter = setFallback;
        [showContent1, showFallback1] = listContext.register(inFallback);
    }
    const registry = [], comp = createComponent(SuspenseListContext.Provider, {
        value: {
            register: (inFallback)=>{
                const [showingContent, showContent] = createSignal(false), [showingFallback, showFallback] = createSignal(false);
                registry[index++] = {
                    inFallback,
                    showContent,
                    showFallback
                };
                return [
                    showingContent,
                    showingFallback
                ];
            }
        },
        get children () {
            return props.children;
        }
    });
    createComputed(()=>{
        const reveal = props.revealOrder, tail = props.tail, visibleContent = showContent1 ? showContent1() : true, visibleFallback = showFallback1 ? showFallback1() : true, reverse = reveal === "backwards";
        if (reveal === "together") {
            const all = registry.every((i)=>!i.inFallback());
            suspenseSetter && suspenseSetter(!all);
            registry.forEach((i)=>{
                i.showContent(all && visibleContent);
                i.showFallback(visibleFallback);
            });
            return;
        }
        let stop = false;
        for(let i1 = 0, len = registry.length; i1 < len; i1++){
            const n = reverse ? len - i1 - 1 : i1, s = registry[n].inFallback();
            if (!stop && !s) {
                registry[n].showContent(visibleContent);
                registry[n].showFallback(visibleFallback);
            } else {
                const next = !stop;
                if (next && suspenseSetter) suspenseSetter(true);
                if (!tail || next && tail === "collapsed") registry[n].showFallback(visibleFallback);
                else registry[n].showFallback(false);
                stop = true;
                registry[n].showContent(next);
            }
        }
        if (!stop && suspenseSetter) suspenseSetter(false);
    });
    return comp;
}
function Suspense(props) {
    let counter1 = 0, showContent, showFallback, ctx, p, flicker, error;
    const [inFallback1, setFallback] = createSignal(false), SuspenseContext1 = getSuspenseContext(), store = {
        increment: ()=>{
            if (++counter1 === 1) setFallback(true);
        },
        decrement: ()=>{
            if (--counter1 === 0) setFallback(false);
        },
        inFallback: inFallback1,
        effects: [],
        resolved: false
    }, owner = getOwner();
    if (sharedConfig.context && sharedConfig.load) {
        const key = sharedConfig.context.id + sharedConfig.context.count;
        p = sharedConfig.load(key);
        if (p) {
            if (typeof p !== "object" || !("then" in p)) p = Promise.resolve(p);
            const [s, set] = createSignal(undefined, {
                equals: false
            });
            flicker = s;
            p.then((err)=>{
                if ((error = err) || sharedConfig.done) return set();
                sharedConfig.gather(key);
                setHydrateContext(ctx);
                set();
                setHydrateContext();
            });
        }
    }
    const listContext = useContext(SuspenseListContext);
    if (listContext) [showContent, showFallback] = listContext.register(store.inFallback);
    let dispose1;
    onCleanup(()=>dispose1 && dispose1());
    return createComponent(SuspenseContext1.Provider, {
        value: store,
        get children () {
            return createMemo(()=>{
                if (error) throw error;
                ctx = sharedConfig.context;
                if (flicker) {
                    flicker();
                    return flicker = undefined;
                }
                if (ctx && p === undefined) setHydrateContext();
                const rendered = createMemo(()=>props.children);
                return createMemo(()=>{
                    const inFallback = store.inFallback(), visibleContent = showContent ? showContent() : true, visibleFallback = showFallback ? showFallback() : true;
                    dispose1 && dispose1();
                    if ((!inFallback || p !== undefined) && visibleContent) {
                        store.resolved = true;
                        ctx = p = undefined;
                        resumeEffects(store.effects);
                        return rendered();
                    }
                    if (!visibleFallback) return;
                    return createRoot((disposer)=>{
                        dispose1 = disposer;
                        if (ctx) {
                            setHydrateContext({
                                id: ctx.id + "f",
                                count: 0
                            });
                            ctx = undefined;
                        }
                        return props.fallback;
                    }, owner);
                });
            });
        }
    });
}
let DEV;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["qEo3B","kjLP2"], "kjLP2", "parcelRequirefcd4")

//# sourceMappingURL=index.6fa4ea68.js.map

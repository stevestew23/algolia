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
})({"iWvxK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _resultsPage = require("./components/results-page");
var _resultsPageDefault = parcelHelpers.interopDefault(_resultsPage);
class SpencerAndWilliamsSearch {
    constructor(){
        this._initSearch();
    }
    _initSearch() {
        this.resultPage = new (0, _resultsPageDefault.default)();
    }
}
const app = new SpencerAndWilliamsSearch();

},{"./components/results-page":"kUdrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kUdrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearch = require("algoliasearch");
var _algoliasearchDefault = parcelHelpers.interopDefault(_algoliasearch);
var _instantsearchJs = require("instantsearch.js");
var _instantsearchJsDefault = parcelHelpers.interopDefault(_instantsearchJs);
var _widgets = require("instantsearch.js/es/widgets");
var _resultHit = require("../templates/result-hit");
var _resultHitDefault = parcelHelpers.interopDefault(_resultHit);
var _middlewares = require("instantsearch.js/es/middlewares");
/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */ class ResultPage {
    constructor(){
        this._registerClient();
        this._registerWidgets();
        this._startSearch();
    }
    /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */ _registerClient() {
        this._searchClient = (0, _algoliasearchDefault.default)("9RAXH3QAFG", "936d051754d7b5a2f16855d3d69638af");
        const insightsMiddleware = (0, _middlewares.createInsightsMiddleware)({
            insightsClient: window.aa
        });
        this._searchInstance = (0, _instantsearchJsDefault.default)({
            indexName: "spencerWilliam_store",
            searchClient: this._searchClient
        });
        this._searchInstance.use(insightsMiddleware);
    }
    /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */ _registerWidgets() {
        aa("setUserToken", "myUser");
        this._searchInstance.addWidgets([
            (0, _widgets.searchBox)({
                container: "#searchbox"
            }),
            (0, _widgets.hits)({
                container: "#hits",
                templates: {
                    item: (0, _resultHitDefault.default)
                }
            }),
            (0, _widgets.pagination)({
                container: "#pagination"
            }),
            (0, _widgets.refinementList)({
                container: "#brand-facet",
                attribute: "brand"
            }),
            (0, _widgets.refinementList)({
                container: "#categories-facet",
                attribute: "categories"
            })
        ]);
    }
    /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */ _startSearch() {
        this._searchInstance.start();
    }
}
exports.default = ResultPage;

},{"algoliasearch":"jU9w3","instantsearch.js":"5B89y","instantsearch.js/es/widgets":"bk5Jd","../templates/result-hit":"d7jLd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","instantsearch.js/es/middlewares":"4GGlC"}],"jU9w3":[function(require,module,exports) {
/*! algoliasearch.umd.js | 4.20.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t;
    }
    function e(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function r(r) {
        for(var n = 1; n < arguments.length; n++){
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(a), !0).forEach(function(e) {
                t(r, e, a[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
        return r;
    }
    function n(t, e) {
        if (null == t) return {};
        var r, n, a = function(t, e) {
            if (null == t) return {};
            var r, n, a = {}, o = Object.keys(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]);
            return a;
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
        }
        return a;
    }
    function a(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var r = [], n = !0, a = !1, o = void 0;
            try {
                for(var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
            } catch (t) {
                a = !0, o = t;
            } finally{
                try {
                    n || null == u.return || u.return();
                } finally{
                    if (a) throw o;
                }
            }
            return r;
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function o(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for(var e = 0, r = new Array(t.length); e < t.length; e++)r[e] = t[e];
                return r;
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    function i(t) {
        var e, r = "algoliasearch-client-js-".concat(t.key), n = function() {
            return void 0 === e && (e = t.localStorage || window.localStorage), e;
        }, o = function() {
            return JSON.parse(n().getItem(r) || "{}");
        }, i = function(t) {
            n().setItem(r, JSON.stringify(t));
        }, u = function() {
            var e = t.timeToLive ? 1e3 * t.timeToLive : null, r = o(), n = Object.fromEntries(Object.entries(r).filter(function(t) {
                return void 0 !== a(t, 2)[1].timestamp;
            }));
            if (i(n), e) {
                var u = Object.fromEntries(Object.entries(n).filter(function(t) {
                    var r = a(t, 2)[1], n = (new Date).getTime();
                    return !(r.timestamp + e < n);
                }));
                i(u);
            }
        };
        return {
            get: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return Promise.resolve().then(function() {
                    u();
                    var e = JSON.stringify(t);
                    return o()[e];
                }).then(function(t) {
                    return Promise.all([
                        t ? t.value : e(),
                        void 0 !== t
                    ]);
                }).then(function(t) {
                    var e = a(t, 2), n = e[0], o = e[1];
                    return Promise.all([
                        n,
                        o || r.miss(n)
                    ]);
                }).then(function(t) {
                    return a(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve().then(function() {
                    var a = o();
                    return a[JSON.stringify(t)] = {
                        timestamp: (new Date).getTime(),
                        value: e
                    }, n().setItem(r, JSON.stringify(a)), e;
                });
            },
            delete: function(t) {
                return Promise.resolve().then(function() {
                    var e = o();
                    delete e[JSON.stringify(t)], n().setItem(r, JSON.stringify(e));
                });
            },
            clear: function() {
                return Promise.resolve().then(function() {
                    n().removeItem(r);
                });
            }
        };
    }
    function u(t) {
        var e = o(t.caches), r = e.shift();
        return void 0 === r ? {
            get: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, n = e();
                return n.then(function(t) {
                    return Promise.all([
                        t,
                        r.miss(t)
                    ]);
                }).then(function(t) {
                    return a(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve(e);
            },
            delete: function(t) {
                return Promise.resolve();
            },
            clear: function() {
                return Promise.resolve();
            }
        } : {
            get: function(t, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return r.get(t, n, a).catch(function() {
                    return u({
                        caches: e
                    }).get(t, n, a);
                });
            },
            set: function(t, n) {
                return r.set(t, n).catch(function() {
                    return u({
                        caches: e
                    }).set(t, n);
                });
            },
            delete: function(t) {
                return r.delete(t).catch(function() {
                    return u({
                        caches: e
                    }).delete(t);
                });
            },
            clear: function() {
                return r.clear().catch(function() {
                    return u({
                        caches: e
                    }).clear();
                });
            }
        };
    }
    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }, e = {};
        return {
            get: function(r, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, o = JSON.stringify(r);
                if (o in e) return Promise.resolve(t.serializable ? JSON.parse(e[o]) : e[o]);
                var i = n(), u = a && a.miss || function() {
                    return Promise.resolve();
                };
                return i.then(function(t) {
                    return u(t);
                }).then(function() {
                    return i;
                });
            },
            set: function(r, n) {
                return e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n, Promise.resolve(n);
            },
            delete: function(t) {
                return delete e[JSON.stringify(t)], Promise.resolve();
            },
            clear: function() {
                return e = {}, Promise.resolve();
            }
        };
    }
    function c(t, e, r) {
        var n = {
            "x-algolia-api-key": r,
            "x-algolia-application-id": e
        };
        return {
            headers: function() {
                return t === m.WithinHeaders ? n : {};
            },
            queryParameters: function() {
                return t === m.WithinQueryParameters ? n : {};
            }
        };
    }
    function f(t) {
        var e = 0;
        return t(function r() {
            return e++, new Promise(function(n) {
                setTimeout(function() {
                    n(t(r));
                }, Math.min(100 * e, 1e3));
            });
        });
    }
    function d(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
            return Promise.resolve();
        };
        return Object.assign(t, {
            wait: function(r) {
                return d(t.then(function(t) {
                    return Promise.all([
                        e(t, r),
                        t
                    ]);
                }).then(function(t) {
                    return t[1];
                }));
            }
        });
    }
    function l(t) {
        for(var e = t.length - 1; e > 0; e--){
            var r = Math.floor(Math.random() * (e + 1)), n = t[e];
            t[e] = t[r], t[r] = n;
        }
        return t;
    }
    function p(t, e) {
        return e ? (Object.keys(e).forEach(function(r) {
            t[r] = e[r](t);
        }), t) : t;
    }
    function h(t) {
        for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n];
        var a = 0;
        return t.replace(/%s/g, function() {
            return encodeURIComponent(r[a++]);
        });
    }
    var m = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function y(t, e) {
        var r = t || {}, n = r.data || {};
        return Object.keys(r).forEach(function(t) {
            -1 === [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable"
            ].indexOf(t) && (n[t] = r[t]);
        }), {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || e,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable
        };
    }
    var g = {
        Read: 1,
        Write: 2,
        Any: 3
    }, v = 1, b = 2, O = 3;
    function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
        return r(r({}, t), {}, {
            status: e,
            lastUpdate: Date.now()
        });
    }
    function w(t) {
        return "string" == typeof t ? {
            protocol: "https",
            url: t,
            accept: g.Any
        } : {
            protocol: t.protocol || "https",
            url: t.url,
            accept: t.accept || g.Any
        };
    }
    var I = "DELETE", j = "GET", x = "POST", D = "PUT";
    function q(t, e) {
        return Promise.all(e.map(function(e) {
            return t.get(e, function() {
                return Promise.resolve(P(e));
            });
        })).then(function(t) {
            var r = t.filter(function(t) {
                return function(t) {
                    return t.status === v || Date.now() - t.lastUpdate > 12e4;
                }(t);
            }), n = t.filter(function(t) {
                return function(t) {
                    return t.status === O && Date.now() - t.lastUpdate <= 12e4;
                }(t);
            }), a = [].concat(o(r), o(n));
            return {
                getTimeout: function(t, e) {
                    return (0 === n.length && 0 === t ? 1 : n.length + 3 + t) * e;
                },
                statelessHosts: a.length > 0 ? a.map(function(t) {
                    return w(t);
                }) : e
            };
        });
    }
    function S(t, e, n, a) {
        var i = [], u = function(t, e) {
            if (t.method === j || void 0 === t.data && void 0 === e.data) return;
            var n = Array.isArray(t.data) ? t.data : r(r({}, t.data), e.data);
            return JSON.stringify(n);
        }(n, a), s = function(t, e) {
            var n = r(r({}, t.headers), e.headers), a = {};
            return Object.keys(n).forEach(function(t) {
                var e = n[t];
                a[t.toLowerCase()] = e;
            }), a;
        }(t, a), c = n.method, f = n.method !== j ? {} : r(r({}, n.data), a.data), d = r(r(r({
            "x-algolia-agent": t.userAgent.value
        }, t.queryParameters), f), a.queryParameters), l = 0, p = function e(r, o) {
            var f = r.pop();
            if (void 0 === f) throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: R(i)
            };
            var p = {
                data: u,
                headers: s,
                method: c,
                url: N(f, n.path, d),
                connectTimeout: o(l, t.timeouts.connect),
                responseTimeout: o(l, a.timeout)
            }, h = function(t) {
                var e = {
                    request: p,
                    response: t,
                    host: f,
                    triesLeft: r.length
                };
                return i.push(e), e;
            }, m = {
                onSuccess: function(t) {
                    return function(t) {
                        try {
                            return JSON.parse(t.content);
                        } catch (e) {
                            throw function(t, e) {
                                return {
                                    name: "DeserializationError",
                                    message: t,
                                    response: e
                                };
                            }(e.message, t);
                        }
                    }(t);
                },
                onRetry: function(n) {
                    var a = h(n);
                    return n.isTimedOut && l++, Promise.all([
                        t.logger.info("Retryable failure", A(a)),
                        t.hostsCache.set(f, P(f, n.isTimedOut ? O : b))
                    ]).then(function() {
                        return e(r, o);
                    });
                },
                onFail: function(t) {
                    throw h(t), function(t, e) {
                        var r = t.content, n = t.status, a = r;
                        try {
                            a = JSON.parse(r).message;
                        } catch (t) {}
                        return function(t, e, r) {
                            return {
                                name: "ApiError",
                                message: t,
                                status: e,
                                transporterStackTrace: r
                            };
                        }(a, n, e);
                    }(t, R(i));
                }
            };
            return t.requester.send(p).then(function(t) {
                return function(t, e) {
                    return function(t) {
                        var e = t.status;
                        return t.isTimedOut || function(t) {
                            var e = t.isTimedOut, r = t.status;
                            return !e && 0 == ~~r;
                        }(t) || 2 != ~~(e / 100) && 4 != ~~(e / 100);
                    }(t) ? e.onRetry(t) : 2 == ~~(t.status / 100) ? e.onSuccess(t) : e.onFail(t);
                }(t, m);
            });
        };
        return q(t.hostsCache, e).then(function(t) {
            return p(o(t.statelessHosts).reverse(), t.getTimeout);
        });
    }
    function k(t) {
        var e = t.hostsCache, r = t.logger, n = t.requester, o = t.requestsCache, i = t.responsesCache, u = t.timeouts, s = t.userAgent, c = t.hosts, f = t.queryParameters, d = {
            hostsCache: e,
            logger: r,
            requester: n,
            requestsCache: o,
            responsesCache: i,
            timeouts: u,
            userAgent: s,
            headers: t.headers,
            queryParameters: f,
            hosts: c.map(function(t) {
                return w(t);
            }),
            read: function(t, e) {
                var r = y(e, d.timeouts.read), n = function() {
                    return S(d, d.hosts.filter(function(t) {
                        return 0 != (t.accept & g.Read);
                    }), t, r);
                };
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return n();
                var o = {
                    request: t,
                    mappedRequestOptions: r,
                    transporter: {
                        queryParameters: d.queryParameters,
                        headers: d.headers
                    }
                };
                return d.responsesCache.get(o, function() {
                    return d.requestsCache.get(o, function() {
                        return d.requestsCache.set(o, n()).then(function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                t
                            ]);
                        }, function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                Promise.reject(t)
                            ]);
                        }).then(function(t) {
                            var e = a(t, 2);
                            e[0];
                            return e[1];
                        });
                    });
                }, {
                    miss: function(t) {
                        return d.responsesCache.set(o, t);
                    }
                });
            },
            write: function(t, e) {
                return S(d, d.hosts.filter(function(t) {
                    return 0 != (t.accept & g.Write);
                }), t, y(e, d.timeouts.write));
            }
        };
        return d;
    }
    function T(t) {
        var e = {
            value: "Algolia for JavaScript (".concat(t, ")"),
            add: function(t) {
                var r = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                return -1 === e.value.indexOf(r) && (e.value = "".concat(e.value).concat(r)), e;
            }
        };
        return e;
    }
    function N(t, e, r) {
        var n = E(r), a = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
        return n.length && (a += "?".concat(n)), a;
    }
    function E(t) {
        return Object.keys(t).map(function(e) {
            var r;
            return h("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]));
        }).join("&");
    }
    function R(t) {
        return t.map(function(t) {
            return A(t);
        });
    }
    function A(t) {
        var e = t.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {};
        return r(r({}, t), {}, {
            request: r(r({}, t.request), {}, {
                headers: r(r({}, t.request.headers), e)
            })
        });
    }
    var C = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: x,
                path: "2/abtests",
                data: e
            }, r);
        };
    }, U = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: I,
                path: h("2/abtests/%s", e)
            }, r);
        };
    }, z = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("2/abtests/%s", e)
            }, r);
        };
    }, J = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "2/abtests"
            }, e);
        };
    }, F = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: x,
                path: h("2/abtests/%s/stop", e)
            }, r);
        };
    }, H = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/strategies/personalization"
            }, e);
        };
    }, M = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: x,
                path: "1/strategies/personalization",
                data: e
            }, r);
        };
    };
    function K(t) {
        return function e(r) {
            return t.request(r).then(function(n) {
                if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
                    cursor: n.cursor
                }) : e({
                    page: (r.page || 0) + 1
                });
            });
        }({});
    }
    var W = function(t) {
        return function(e, a) {
            var o = a || {}, i = o.queryParameters, u = n(o, [
                "queryParameters"
            ]), s = r({
                acl: e
            }, void 0 !== i ? {
                queryParameters: i
            } : {});
            return d(t.transporter.write({
                method: x,
                path: "1/keys",
                data: s
            }, u), function(e, r) {
                return f(function(n) {
                    return tt(t)(e.key, r).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return n();
                    });
                });
            });
        };
    }, B = function(t) {
        return function(e, r, n) {
            var a = y(n);
            return a.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: x,
                path: "1/clusters/mapping",
                data: {
                    cluster: r
                }
            }, a);
        };
    }, Q = function(t) {
        return function(e, r, n) {
            return t.transporter.write({
                method: x,
                path: "1/clusters/mapping/batch",
                data: {
                    users: e,
                    cluster: r
                }
            }, n);
        };
    }, G = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: x,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: {
                        action: "addEntry",
                        body: []
                    }
                }
            }, r), function(e, r) {
                return xt(t)(e.taskID, r);
            });
        };
    }, L = function(t) {
        return function(e, r, n) {
            return d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/operation", e),
                data: {
                    operation: "copy",
                    destination: r
                }
            }, n), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, V = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Rules
                ]
            }));
        };
    }, _ = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Settings
                ]
            }));
        };
    }, X = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Synonyms
                ]
            }));
        };
    }, Y = function(t) {
        return function(e, r) {
            return e.method === j ? t.transporter.read(e, r) : t.transporter.write(e, r);
        };
    }, Z = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: I,
                path: h("1/keys/%s", e)
            }, r), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).then(r).catch(function(t) {
                        if (404 !== t.status) throw t;
                    });
                });
            });
        };
    }, $ = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "deleteEntry",
                    body: {
                        objectID: t
                    }
                };
            });
            return d(t.transporter.write({
                method: x,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return xt(t)(e.taskID, r);
            });
        };
    }, tt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/keys/%s", e)
            }, r);
        };
    }, et = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/task/%s", e.toString())
            }, r);
        };
    }, rt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "/1/dictionaries/*/settings"
            }, e);
        };
    }, nt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/logs"
            }, e);
        };
    }, at = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/clusters/mapping/top"
            }, e);
        };
    }, ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/clusters/mapping/%s", e)
            }, r);
        };
    }, it = function(t) {
        return function(e) {
            var r = e || {}, a = r.retrieveMappings, o = n(r, [
                "retrieveMappings"
            ]);
            return !0 === a && (o.getClusters = !0), t.transporter.read({
                method: j,
                path: "1/clusters/mapping/pending"
            }, o);
        };
    }, ut = function(t) {
        return function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                transporter: t.transporter,
                appId: t.appId,
                indexName: e
            };
            return p(n, r.methods);
        };
    }, st = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/keys"
            }, e);
        };
    }, ct = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/clusters"
            }, e);
        };
    }, ft = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/indexes"
            }, e);
        };
    }, dt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: "1/clusters/mapping"
            }, e);
        };
    }, lt = function(t) {
        return function(e, r, n) {
            return d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/operation", e),
                data: {
                    operation: "move",
                    destination: r
                }
            }, n), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, pt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: x,
                path: "1/indexes/*/batch",
                data: {
                    requests: e
                }
            }, r), function(e, r) {
                return Promise.all(Object.keys(e.taskID).map(function(n) {
                    return ut(t)(n, {
                        methods: {
                            waitTask: de
                        }
                    }).waitTask(e.taskID[n], r);
                }));
            });
        };
    }, ht = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: "1/indexes/*/objects",
                data: {
                    requests: e
                }
            }, r);
        };
    }, mt = function(t) {
        return function(e, n) {
            var a = e.map(function(t) {
                return r(r({}, t), {}, {
                    params: E(t.params || {})
                });
            });
            return t.transporter.read({
                method: x,
                path: "1/indexes/*/queries",
                data: {
                    requests: a
                },
                cacheable: !0
            }, n);
        };
    }, yt = function(t) {
        return function(e, a) {
            return Promise.all(e.map(function(e) {
                var o = e.params, i = o.facetName, u = o.facetQuery, s = n(o, [
                    "facetName",
                    "facetQuery"
                ]);
                return ut(t)(e.indexName, {
                    methods: {
                        searchForFacetValues: ue
                    }
                }).searchForFacetValues(i, u, r(r({}, a), s));
            }));
        };
    }, gt = function(t) {
        return function(e, r) {
            var n = y(r);
            return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: I,
                path: "1/clusters/mapping"
            }, n);
        };
    }, vt = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d(t.transporter.write({
                method: x,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: a
                }
            }, n), function(e, r) {
                return xt(t)(e.taskID, r);
            });
        };
    }, bt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: x,
                path: h("1/keys/%s/restore", e)
            }, r), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return r();
                    });
                });
            });
        };
    }, Ot = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d(t.transporter.write({
                method: x,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return xt(t)(e.taskID, r);
            });
        };
    }, Pt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: x,
                path: h("/1/dictionaries/%s/search", e),
                data: {
                    query: r
                },
                cacheable: !0
            }, n);
        };
    }, wt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping/search",
                data: {
                    query: e
                }
            }, r);
        };
    }, It = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: D,
                path: "/1/dictionaries/*/settings",
                data: e
            }, r), function(e, r) {
                return xt(t)(e.taskID, r);
            });
        };
    }, jt = function(t) {
        return function(e, r) {
            var a = Object.assign({}, r), o = r || {}, i = o.queryParameters, u = n(o, [
                "queryParameters"
            ]), s = i ? {
                queryParameters: i
            } : {}, c = [
                "acl",
                "indexes",
                "referers",
                "restrictSources",
                "queryParameters",
                "description",
                "maxQueriesPerIPPerHour",
                "maxHitsPerQuery"
            ];
            return d(t.transporter.write({
                method: D,
                path: h("1/keys/%s", e),
                data: s
            }, u), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).then(function(t) {
                        return function(t) {
                            return Object.keys(a).filter(function(t) {
                                return -1 !== c.indexOf(t);
                            }).every(function(e) {
                                if (Array.isArray(t[e]) && Array.isArray(a[e])) {
                                    var r = t[e];
                                    return r.length === a[e].length && r.every(function(t, r) {
                                        return t === a[e][r];
                                    });
                                }
                                return t[e] === a[e];
                            });
                        }(t) ? Promise.resolve() : r();
                    });
                });
            });
        };
    }, xt = function(t) {
        return function(e, r) {
            return f(function(n) {
                return et(t)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, Dt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/batch", t.indexName),
                data: {
                    requests: e
                }
            }, r), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, qt = function(t) {
        return function(e) {
            return K(r(r({
                shouldStop: function(t) {
                    return void 0 === t.cursor;
                }
            }, e), {}, {
                request: function(r) {
                    return t.transporter.read({
                        method: x,
                        path: h("1/indexes/%s/browse", t.indexName),
                        data: r
                    }, e);
                }
            }));
        };
    }, St = function(t) {
        return function(e) {
            var n = r({
                hitsPerPage: 1e3
            }, e);
            return K(r(r({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {}, {
                request: function(e) {
                    return se(t)("", r(r({}, n), e)).then(function(t) {
                        return r(r({}, t), {}, {
                            hits: t.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, kt = function(t) {
        return function(e) {
            var n = r({
                hitsPerPage: 1e3
            }, e);
            return K(r(r({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {}, {
                request: function(e) {
                    return ce(t)("", r(r({}, n), e)).then(function(t) {
                        return r(r({}, t), {}, {
                            hits: t.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, Tt = function(t) {
        return function(e, r, a) {
            var o = a || {}, i = o.batchSize, u = n(o, [
                "batchSize"
            ]), s = {
                taskIDs: [],
                objectIDs: []
            };
            return d(function n() {
                var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = [];
                for(a = o; a < e.length && (c.push(e[a]), c.length !== (i || 1e3)); a++);
                return 0 === c.length ? Promise.resolve(s) : Dt(t)(c.map(function(t) {
                    return {
                        action: r,
                        body: t
                    };
                }), u).then(function(t) {
                    return s.objectIDs = s.objectIDs.concat(t.objectIDs), s.taskIDs.push(t.taskID), a++, n(a);
                });
            }(), function(e, r) {
                return Promise.all(e.taskIDs.map(function(e) {
                    return de(t)(e, r);
                }));
            });
        };
    }, Nt = function(t) {
        return function(e) {
            return d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/clear", t.indexName)
            }, e), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Et = function(t) {
        return function(e) {
            var r = e || {}, a = r.forwardToReplicas, o = y(n(r, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/rules/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Rt = function(t) {
        return function(e) {
            var r = e || {}, a = r.forwardToReplicas, o = y(n(r, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/synonyms/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, At = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/deleteByQuery", t.indexName),
                data: e
            }, r), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ct = function(t) {
        return function(e) {
            return d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s", t.indexName)
            }, e), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ut = function(t) {
        return function(e, r) {
            return d(zt(t)([
                e
            ], r).then(function(t) {
                return {
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, zt = function(t) {
        return function(e, r) {
            var n = e.map(function(t) {
                return {
                    objectID: t
                };
            });
            return Tt(t)(n, le.DeleteObject, r);
        };
    }, Jt = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s/rules/%s", t.indexName, e)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ft = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ht = function(t) {
        return function(e) {
            return Lt(t)(e).then(function() {
                return !0;
            }).catch(function(t) {
                if (404 !== t.status) throw t;
                return !1;
            });
        };
    }, Mt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: x,
                path: h("1/answers/%s/prediction", t.indexName),
                data: {
                    query: e,
                    queryLanguages: r
                },
                cacheable: !0
            }, n);
        };
    }, Kt = function(t) {
        return function(e, o) {
            var i = o || {}, u = i.query, s = i.paginate, c = n(i, [
                "query",
                "paginate"
            ]), f = 0;
            return function n() {
                return ie(t)(u || "", r(r({}, c), {}, {
                    page: f
                })).then(function(t) {
                    for(var r = 0, o = Object.entries(t.hits); r < o.length; r++){
                        var i = a(o[r], 2), u = i[0], c = i[1];
                        if (e(c)) return {
                            object: c,
                            position: parseInt(u, 10),
                            page: f
                        };
                    }
                    if (f++, !1 === s || f >= t.nbPages) throw {
                        name: "ObjectNotFoundError",
                        message: "Object not found."
                    };
                    return n();
                });
            }();
        };
    }, Wt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/%s", t.indexName, e)
            }, r);
        };
    }, Bt = function() {
        return function(t, e) {
            for(var r = 0, n = Object.entries(t.hits); r < n.length; r++){
                var o = a(n[r], 2), i = o[0];
                if (o[1].objectID === e) return parseInt(i, 10);
            }
            return -1;
        };
    }, Qt = function(t) {
        return function(e, a) {
            var o = a || {}, i = o.attributesToRetrieve, u = n(o, [
                "attributesToRetrieve"
            ]), s = e.map(function(e) {
                return r({
                    indexName: t.indexName,
                    objectID: e
                }, i ? {
                    attributesToRetrieve: i
                } : {});
            });
            return t.transporter.read({
                method: x,
                path: "1/indexes/*/objects",
                data: {
                    requests: s
                }
            }, u);
        };
    }, Gt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/rules/%s", t.indexName, e)
            }, r);
        };
    }, Lt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/settings", t.indexName),
                data: {
                    getVersion: 2
                }
            }, e);
        };
    }, Vt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, r);
        };
    }, _t = function(t) {
        return function(e, r) {
            return d(Xt(t)([
                e
            ], r).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Xt = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.createIfNotExists, i = n(a, [
                "createIfNotExists"
            ]), u = o ? le.PartialUpdateObject : le.PartialUpdateObjectNoCreate;
            return Tt(t)(e, u, i);
        };
    }, Yt = function(t) {
        return function(e, i) {
            var u = i || {}, s = u.safe, c = u.autoGenerateObjectIDIfNotExist, f = u.batchSize, l = n(u, [
                "safe",
                "autoGenerateObjectIDIfNotExist",
                "batchSize"
            ]), p = function(e, r, n, a) {
                return d(t.transporter.write({
                    method: x,
                    path: h("1/indexes/%s/operation", e),
                    data: {
                        operation: n,
                        destination: r
                    }
                }, a), function(e, r) {
                    return de(t)(e.taskID, r);
                });
            }, m = Math.random().toString(36).substring(7), y = "".concat(t.indexName, "_tmp_").concat(m), g = ee({
                appId: t.appId,
                transporter: t.transporter,
                indexName: y
            }), v = [], b = p(t.indexName, y, "copy", r(r({}, l), {}, {
                scope: [
                    "settings",
                    "synonyms",
                    "rules"
                ]
            }));
            return v.push(b), d((s ? b.wait(l) : b).then(function() {
                var t = g(e, r(r({}, l), {}, {
                    autoGenerateObjectIDIfNotExist: c,
                    batchSize: f
                }));
                return v.push(t), s ? t.wait(l) : t;
            }).then(function() {
                var e = p(y, t.indexName, "move", l);
                return v.push(e), s ? e.wait(l) : e;
            }).then(function() {
                return Promise.all(v);
            }).then(function(t) {
                var e = a(t, 3), r = e[0], n = e[1], i = e[2];
                return {
                    objectIDs: n.objectIDs,
                    taskIDs: [
                        r.taskID
                    ].concat(o(n.taskIDs), [
                        i.taskID
                    ])
                };
            }), function(t, e) {
                return Promise.all(v.map(function(t) {
                    return t.wait(e);
                }));
            });
        };
    }, Zt = function(t) {
        return function(e, n) {
            return ne(t)(e, r(r({}, n), {}, {
                clearExistingRules: !0
            }));
        };
    }, $t = function(t) {
        return function(e, n) {
            return oe(t)(e, r(r({}, n), {}, {
                clearExistingSynonyms: !0
            }));
        };
    }, te = function(t) {
        return function(e, r) {
            return d(ee(t)([
                e
            ], r).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ee = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.autoGenerateObjectIDIfNotExist, i = n(a, [
                "autoGenerateObjectIDIfNotExist"
            ]), u = o ? le.AddObject : le.UpdateObject;
            if (u === le.UpdateObject) {
                var s = !0, c = !1, f = void 0;
                try {
                    for(var l, p = e[Symbol.iterator](); !(s = (l = p.next()).done); s = !0){
                        if (void 0 === l.value.objectID) return d(Promise.reject({
                            name: "MissingObjectIDError",
                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                        }));
                    }
                } catch (t) {
                    c = !0, f = t;
                } finally{
                    try {
                        s || null == p.return || p.return();
                    } finally{
                        if (c) throw f;
                    }
                }
            }
            return Tt(t)(e, u, i);
        };
    }, re = function(t) {
        return function(e, r) {
            return ne(t)([
                e
            ], r);
        };
    }, ne = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = a.clearExistingRules, u = y(n(a, [
                "forwardToReplicas",
                "clearExistingRules"
            ]));
            return o && (u.queryParameters.forwardToReplicas = 1), i && (u.queryParameters.clearExistingRules = 1), d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/rules/batch", t.indexName),
                data: e
            }, u), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ae = function(t) {
        return function(e, r) {
            return oe(t)([
                e
            ], r);
        };
    }, oe = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = a.clearExistingSynonyms, u = a.replaceExistingSynonyms, s = y(n(a, [
                "forwardToReplicas",
                "clearExistingSynonyms",
                "replaceExistingSynonyms"
            ]));
            return o && (s.queryParameters.forwardToReplicas = 1), (u || i) && (s.queryParameters.replaceExistingSynonyms = 1), d(t.transporter.write({
                method: x,
                path: h("1/indexes/%s/synonyms/batch", t.indexName),
                data: e
            }, s), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ie = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/query", t.indexName),
                data: {
                    query: e
                },
                cacheable: !0
            }, r);
        };
    }, ue = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/facets/%s/query", t.indexName, e),
                data: {
                    facetQuery: r
                },
                cacheable: !0
            }, n);
        };
    }, se = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/rules/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, ce = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/synonyms/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, fe = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: D,
                path: h("1/indexes/%s/settings", t.indexName),
                data: e
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, de = function(t) {
        return function(e, r) {
            return f(function(n) {
                return (function(t) {
                    return function(e, r) {
                        return t.transporter.read({
                            method: j,
                            path: h("1/indexes/%s/task/%s", t.indexName, e.toString())
                        }, r);
                    };
                })(t)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, le = {
        AddObject: "addObject",
        UpdateObject: "updateObject",
        PartialUpdateObject: "partialUpdateObject",
        PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
        DeleteObject: "deleteObject",
        DeleteIndex: "delete",
        ClearIndex: "clear"
    }, pe = {
        Settings: "settings",
        Synonyms: "synonyms",
        Rules: "rules"
    }, he = 1, me = 2, ye = 3;
    function ge(t, e, n) {
        var a, o = {
            appId: t,
            apiKey: e,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(t) {
                    return new Promise(function(e) {
                        var r = new XMLHttpRequest;
                        r.open(t.method, t.url, !0), Object.keys(t.headers).forEach(function(e) {
                            return r.setRequestHeader(e, t.headers[e]);
                        });
                        var n, a = function(t, n) {
                            return setTimeout(function() {
                                r.abort(), e({
                                    status: 0,
                                    content: n,
                                    isTimedOut: !0
                                });
                            }, 1e3 * t);
                        }, o = a(t.connectTimeout, "Connection timeout");
                        r.onreadystatechange = function() {
                            r.readyState > r.OPENED && void 0 === n && (clearTimeout(o), n = a(t.responseTimeout, "Socket timeout"));
                        }, r.onerror = function() {
                            0 === r.status && (clearTimeout(o), clearTimeout(n), e({
                                content: r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1
                            }));
                        }, r.onload = function() {
                            clearTimeout(o), clearTimeout(n), e({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1
                            });
                        }, r.send(t.data);
                    });
                }
            },
            logger: (a = ye, {
                debug: function(t, e) {
                    return he >= a && console.debug(t, e), Promise.resolve();
                },
                info: function(t, e) {
                    return me >= a && console.info(t, e), Promise.resolve();
                },
                error: function(t, e) {
                    return console.error(t, e), Promise.resolve();
                }
            }),
            responsesCache: s(),
            requestsCache: s({
                serializable: !1
            }),
            hostsCache: u({
                caches: [
                    i({
                        key: "".concat("4.20.0", "-").concat(t)
                    }),
                    s()
                ]
            }),
            userAgent: T("4.20.0").add({
                segment: "Browser"
            })
        }, f = r(r({}, o), n), d = function() {
            return function(t) {
                return function(t) {
                    var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
                        hosts: [
                            {
                                url: "personalization.".concat(e, ".algolia.com")
                            }
                        ]
                    }, t), {}, {
                        headers: r(r(r({}, n.headers()), {
                            "content-type": "application/json"
                        }), t.headers),
                        queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
                    }));
                    return p({
                        appId: t.appId,
                        transporter: a
                    }, t.methods);
                }(r(r(r({}, o), t), {}, {
                    methods: {
                        getPersonalizationStrategy: H,
                        setPersonalizationStrategy: M
                    }
                }));
            };
        };
        return function(t) {
            var e = t.appId, n = c(void 0 !== t.authMode ? t.authMode : m.WithinHeaders, e, t.apiKey), a = k(r(r({
                hosts: [
                    {
                        url: "".concat(e, "-dsn.algolia.net"),
                        accept: g.Read
                    },
                    {
                        url: "".concat(e, ".algolia.net"),
                        accept: g.Write
                    }
                ].concat(l([
                    {
                        url: "".concat(e, "-1.algolianet.com")
                    },
                    {
                        url: "".concat(e, "-2.algolianet.com")
                    },
                    {
                        url: "".concat(e, "-3.algolianet.com")
                    }
                ]))
            }, t), {}, {
                headers: r(r(r({}, n.headers()), {
                    "content-type": "application/x-www-form-urlencoded"
                }), t.headers),
                queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
            }));
            return p({
                transporter: a,
                appId: e,
                addAlgoliaAgent: function(t, e) {
                    a.userAgent.add({
                        segment: t,
                        version: e
                    });
                },
                clearCache: function() {
                    return Promise.all([
                        a.requestsCache.clear(),
                        a.responsesCache.clear()
                    ]).then(function() {});
                }
            }, t.methods);
        }(r(r({}, f), {}, {
            methods: {
                search: mt,
                searchForFacetValues: yt,
                multipleBatch: pt,
                multipleGetObjects: ht,
                multipleQueries: mt,
                copyIndex: L,
                copySettings: _,
                copySynonyms: X,
                copyRules: V,
                moveIndex: lt,
                listIndices: ft,
                getLogs: nt,
                listClusters: ct,
                multipleSearchForFacetValues: yt,
                getApiKey: tt,
                addApiKey: W,
                listApiKeys: st,
                updateApiKey: jt,
                deleteApiKey: Z,
                restoreApiKey: bt,
                assignUserID: B,
                assignUserIDs: Q,
                getUserID: ot,
                searchUserIDs: wt,
                listUserIDs: dt,
                getTopUserIDs: at,
                removeUserID: gt,
                hasPendingMappings: it,
                clearDictionaryEntries: G,
                deleteDictionaryEntries: $,
                getDictionarySettings: rt,
                getAppTask: et,
                replaceDictionaryEntries: vt,
                saveDictionaryEntries: Ot,
                searchDictionaryEntries: Pt,
                setDictionarySettings: It,
                waitAppTask: xt,
                customRequest: Y,
                initIndex: function(t) {
                    return function(e) {
                        return ut(t)(e, {
                            methods: {
                                batch: Dt,
                                delete: Ct,
                                findAnswers: Mt,
                                getObject: Wt,
                                getObjects: Qt,
                                saveObject: te,
                                saveObjects: ee,
                                search: ie,
                                searchForFacetValues: ue,
                                waitTask: de,
                                setSettings: fe,
                                getSettings: Lt,
                                partialUpdateObject: _t,
                                partialUpdateObjects: Xt,
                                deleteObject: Ut,
                                deleteObjects: zt,
                                deleteBy: At,
                                clearObjects: Nt,
                                browseObjects: qt,
                                getObjectPosition: Bt,
                                findObject: Kt,
                                exists: Ht,
                                saveSynonym: ae,
                                saveSynonyms: oe,
                                getSynonym: Vt,
                                searchSynonyms: ce,
                                browseSynonyms: kt,
                                deleteSynonym: Ft,
                                clearSynonyms: Rt,
                                replaceAllObjects: Yt,
                                replaceAllSynonyms: $t,
                                searchRules: se,
                                getRule: Gt,
                                deleteRule: Jt,
                                saveRule: re,
                                saveRules: ne,
                                replaceAllRules: Zt,
                                browseRules: St,
                                clearRules: Et
                            }
                        });
                    };
                },
                initAnalytics: function() {
                    return function(t) {
                        return function(t) {
                            var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
                                hosts: [
                                    {
                                        url: "analytics.".concat(e, ".algolia.com")
                                    }
                                ]
                            }, t), {}, {
                                headers: r(r(r({}, n.headers()), {
                                    "content-type": "application/json"
                                }), t.headers),
                                queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
                            }));
                            return p({
                                appId: t.appId,
                                transporter: a
                            }, t.methods);
                        }(r(r(r({}, o), t), {}, {
                            methods: {
                                addABTest: C,
                                getABTest: z,
                                getABTests: J,
                                stopABTest: F,
                                deleteABTest: U
                            }
                        }));
                    };
                },
                initPersonalization: d,
                initRecommendation: function() {
                    return function(t) {
                        return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d()(t);
                    };
                }
            }
        }));
    }
    return ge.version = "4.20.0", ge;
});

},{}],"5B89y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./helpers/index.js");
var _indexJs1 = require("./lib/infiniteHitsCache/index.js");
var _instantSearchJs = require("./lib/InstantSearch.js");
var _instantSearchJsDefault = parcelHelpers.interopDefault(_instantSearchJs);
var _indexJs2 = require("./lib/utils/index.js");
var _versionJs = require("./lib/version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _indexJs3 = require("./types/index.js");
parcelHelpers.exportAll(_indexJs3, exports);
/**
 * InstantSearch is the main component of InstantSearch.js. This object
 * manages the widget and lets you add new ones.
 *
 * Two parameters are required to get you started with InstantSearch.js:
 *  - `indexName`: the main index that you will use for your new search UI
 *  - `searchClient`: the search client to plug to InstantSearch.js
 *
 * The [search client provided by Algolia](algolia.com/doc/api-client/getting-started/what-is-the-api-client/javascript/)
 * needs an `appId` and an `apiKey`. Those parameters can be found in your
 * [Algolia dashboard](https://www.algolia.com/api-keys).
 *
 * If you want to get up and running quickly with InstantSearch.js, have a
 * look at the [getting started](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/).
 */ var instantsearch = function instantsearch(options) {
    return new (0, _instantSearchJsDefault.default)(options);
};
instantsearch.version = (0, _versionJsDefault.default);
instantsearch.createInfiniteHitsSessionStorageCache = (0, _indexJs2.deprecate)((0, _indexJs1.createInfiniteHitsSessionStorageCache), "import { createInfiniteHitsSessionStorageCache } from 'instantsearch.js/es/lib/infiniteHitsCache'");
instantsearch.highlight = (0, _indexJs2.deprecate)((0, _indexJs.highlight), "import { highlight } from 'instantsearch.js/es/helpers'");
instantsearch.reverseHighlight = (0, _indexJs2.deprecate)((0, _indexJs.reverseHighlight), "import { reverseHighlight } from 'instantsearch.js/es/helpers'");
instantsearch.snippet = (0, _indexJs2.deprecate)((0, _indexJs.snippet), "import { snippet } from 'instantsearch.js/es/helpers'");
instantsearch.reverseSnippet = (0, _indexJs2.deprecate)((0, _indexJs.reverseSnippet), "import { reverseSnippet } from 'instantsearch.js/es/helpers'");
instantsearch.insights = (0, _indexJs.insights);
instantsearch.getInsightsAnonymousUserToken = (0, _indexJs.getInsightsAnonymousUserToken);
Object.defineProperty(instantsearch, "widgets", {
    get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
    }
});
Object.defineProperty(instantsearch, "connectors", {
    get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
    }
});
exports.default = instantsearch;

},{"./helpers/index.js":"8kgzi","./lib/infiniteHitsCache/index.js":"co24K","./lib/InstantSearch.js":"8mJmb","./lib/utils/index.js":"etVYs","./lib/version.js":"hkkLK","./types/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kgzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseHighlight", ()=>(0, _reverseHighlightJsDefault.default));
parcelHelpers.export(exports, "reverseSnippet", ()=>(0, _reverseSnippetJsDefault.default));
parcelHelpers.export(exports, "highlight", ()=>(0, _highlightJsDefault.default));
parcelHelpers.export(exports, "snippet", ()=>(0, _snippetJsDefault.default));
parcelHelpers.export(exports, "insights", ()=>(0, _insightsJsDefault.default));
parcelHelpers.export(exports, "getInsightsAnonymousUserToken", ()=>(0, _getInsightsAnonymousUserTokenJsDefault.default));
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>(0, _getInsightsAnonymousUserTokenJs.getInsightsAnonymousUserTokenInternal));
var _highlightJs = require("./highlight.js");
parcelHelpers.exportAll(_highlightJs, exports);
var _reverseHighlightJs = require("./reverseHighlight.js");
parcelHelpers.exportAll(_reverseHighlightJs, exports);
var _snippetJs = require("./snippet.js");
parcelHelpers.exportAll(_snippetJs, exports);
var _reverseSnippetJs = require("./reverseSnippet.js");
parcelHelpers.exportAll(_reverseSnippetJs, exports);
var _reverseHighlightJsDefault = parcelHelpers.interopDefault(_reverseHighlightJs);
var _reverseSnippetJsDefault = parcelHelpers.interopDefault(_reverseSnippetJs);
var _highlightJsDefault = parcelHelpers.interopDefault(_highlightJs);
var _snippetJsDefault = parcelHelpers.interopDefault(_snippetJs);
var _insightsJs = require("./insights.js");
var _insightsJsDefault = parcelHelpers.interopDefault(_insightsJs);
var _getInsightsAnonymousUserTokenJs = require("./get-insights-anonymous-user-token.js");
var _getInsightsAnonymousUserTokenJsDefault = parcelHelpers.interopDefault(_getInsightsAnonymousUserTokenJs);

},{"./highlight.js":"juTzj","./reverseHighlight.js":"258GF","./snippet.js":"lMCRi","./reverseSnippet.js":"5cYoY","./insights.js":"2EZr9","./get-insights-anonymous-user-token.js":"cRBQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juTzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>highlight);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = (0, _suitJs.component)("Highlight");
function highlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    (0, _indexJs.warning)(false, "`instantsearch.highlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Highlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
    var highlightAttributeResult = (0, _indexJs.getPropertyByPath)(hit._highlightResult, attribute);
    // @MAJOR fallback to attribute value if highlight is not found
    (0, _indexJs.warning)(highlightAttributeResult, 'Could not enable highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var _ref2 = highlightAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"du81D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component", ()=>component);
var NAMESPACE = "ais";
var component = function component(componentName) {
    return function() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
        var descendent = descendantName ? "-".concat(descendantName) : "";
        var modifier = modifierName ? "--".concat(modifierName) : "";
        return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
};

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

},{}],"etVYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _capitalizeJs = require("./capitalize.js");
parcelHelpers.exportAll(_capitalizeJs, exports);
var _checkIndexUiStateJs = require("./checkIndexUiState.js");
parcelHelpers.exportAll(_checkIndexUiStateJs, exports);
var _checkRenderingJs = require("./checkRendering.js");
parcelHelpers.exportAll(_checkRenderingJs, exports);
var _clearRefinementsJs = require("./clearRefinements.js");
parcelHelpers.exportAll(_clearRefinementsJs, exports);
var _concatHighlightedPartsJs = require("./concatHighlightedParts.js");
parcelHelpers.exportAll(_concatHighlightedPartsJs, exports);
var _createConcurrentSafePromiseJs = require("./createConcurrentSafePromise.js");
parcelHelpers.exportAll(_createConcurrentSafePromiseJs, exports);
var _createSendEventForFacetJs = require("./createSendEventForFacet.js");
parcelHelpers.exportAll(_createSendEventForFacetJs, exports);
var _createSendEventForHitsJs = require("./createSendEventForHits.js");
parcelHelpers.exportAll(_createSendEventForHitsJs, exports);
var _setIndexHelperStateJs = require("./setIndexHelperState.js");
parcelHelpers.exportAll(_setIndexHelperStateJs, exports);
var _isIndexWidgetJs = require("./isIndexWidget.js");
parcelHelpers.exportAll(_isIndexWidgetJs, exports);
var _debounceJs = require("./debounce.js");
parcelHelpers.exportAll(_debounceJs, exports);
var _deferJs = require("./defer.js");
parcelHelpers.exportAll(_deferJs, exports);
var _documentationJs = require("./documentation.js");
parcelHelpers.exportAll(_documentationJs, exports);
var _escapeHighlightJs = require("./escape-highlight.js");
parcelHelpers.exportAll(_escapeHighlightJs, exports);
var _escapeHtmlJs = require("./escape-html.js");
parcelHelpers.exportAll(_escapeHtmlJs, exports);
var _escapeFacetValueJs = require("./escapeFacetValue.js");
parcelHelpers.exportAll(_escapeFacetValueJs, exports);
var _findJs = require("./find.js");
parcelHelpers.exportAll(_findJs, exports);
var _findIndexJs = require("./findIndex.js");
parcelHelpers.exportAll(_findIndexJs, exports);
var _geoSearchJs = require("./geo-search.js");
parcelHelpers.exportAll(_geoSearchJs, exports);
var _getAppIdAndApiKeyJs = require("./getAppIdAndApiKey.js");
parcelHelpers.exportAll(_getAppIdAndApiKeyJs, exports);
var _getContainerNodeJs = require("./getContainerNode.js");
parcelHelpers.exportAll(_getContainerNodeJs, exports);
var _getHighlightedPartsJs = require("./getHighlightedParts.js");
parcelHelpers.exportAll(_getHighlightedPartsJs, exports);
var _getHighlightFromSiblingsJs = require("./getHighlightFromSiblings.js");
parcelHelpers.exportAll(_getHighlightFromSiblingsJs, exports);
var _getObjectTypeJs = require("./getObjectType.js");
parcelHelpers.exportAll(_getObjectTypeJs, exports);
var _getPropertyByPathJs = require("./getPropertyByPath.js");
parcelHelpers.exportAll(_getPropertyByPathJs, exports);
var _getRefinementsJs = require("./getRefinements.js");
parcelHelpers.exportAll(_getRefinementsJs, exports);
var _getWidgetAttributeJs = require("./getWidgetAttribute.js");
parcelHelpers.exportAll(_getWidgetAttributeJs, exports);
var _hitsAbsolutePositionJs = require("./hits-absolute-position.js");
parcelHelpers.exportAll(_hitsAbsolutePositionJs, exports);
var _hitsQueryIdJs = require("./hits-query-id.js");
parcelHelpers.exportAll(_hitsQueryIdJs, exports);
var _hydrateSearchClientJs = require("./hydrateSearchClient.js");
parcelHelpers.exportAll(_hydrateSearchClientJs, exports);
var _isDomElementJs = require("./isDomElement.js");
parcelHelpers.exportAll(_isDomElementJs, exports);
var _isEqualJs = require("./isEqual.js");
parcelHelpers.exportAll(_isEqualJs, exports);
var _isFacetRefinedJs = require("./isFacetRefined.js");
parcelHelpers.exportAll(_isFacetRefinedJs, exports);
var _isFiniteNumberJs = require("./isFiniteNumber.js");
parcelHelpers.exportAll(_isFiniteNumberJs, exports);
var _isPlainObjectJs = require("./isPlainObject.js");
parcelHelpers.exportAll(_isPlainObjectJs, exports);
var _isSpecialClickJs = require("./isSpecialClick.js");
parcelHelpers.exportAll(_isSpecialClickJs, exports);
var _walkIndexJs = require("./walkIndex.js");
parcelHelpers.exportAll(_walkIndexJs, exports);
var _loggerJs = require("./logger.js");
parcelHelpers.exportAll(_loggerJs, exports);
var _mergeSearchParametersJs = require("./mergeSearchParameters.js");
parcelHelpers.exportAll(_mergeSearchParametersJs, exports);
var _omitJs = require("./omit.js");
parcelHelpers.exportAll(_omitJs, exports);
var _noopJs = require("./noop.js");
parcelHelpers.exportAll(_noopJs, exports);
var _rangeJs = require("./range.js");
parcelHelpers.exportAll(_rangeJs, exports);
var _renderArgsJs = require("./render-args.js");
parcelHelpers.exportAll(_renderArgsJs, exports);
var _resolveSearchParametersJs = require("./resolveSearchParameters.js");
parcelHelpers.exportAll(_resolveSearchParametersJs, exports);
var _reverseHighlightedPartsJs = require("./reverseHighlightedParts.js");
parcelHelpers.exportAll(_reverseHighlightedPartsJs, exports);
var _safelyRunOnBrowserJs = require("./safelyRunOnBrowser.js");
parcelHelpers.exportAll(_safelyRunOnBrowserJs, exports);
var _serializerJs = require("./serializer.js");
parcelHelpers.exportAll(_serializerJs, exports);
var _toArrayJs = require("./toArray.js");
parcelHelpers.exportAll(_toArrayJs, exports);
var _uniqJs = require("./uniq.js");
parcelHelpers.exportAll(_uniqJs, exports);

},{"./capitalize.js":false,"./checkIndexUiState.js":"bH0Ll","./checkRendering.js":"jF2C6","./clearRefinements.js":false,"./concatHighlightedParts.js":"12qh7","./createConcurrentSafePromise.js":"6Z3iP","./createSendEventForFacet.js":"05go2","./createSendEventForHits.js":"24sIF","./setIndexHelperState.js":"jt8Bk","./isIndexWidget.js":"6po8k","./debounce.js":"kovBT","./defer.js":"bO5Os","./documentation.js":"gLqHy","./escape-highlight.js":"59mW0","./escape-html.js":"9Tb0e","./escapeFacetValue.js":false,"./find.js":"6Dhef","./findIndex.js":false,"./geo-search.js":false,"./getAppIdAndApiKey.js":"7XKtv","./getContainerNode.js":"ayQ3q","./getHighlightedParts.js":"7jCC9","./getHighlightFromSiblings.js":false,"./getObjectType.js":false,"./getPropertyByPath.js":"2Q0lT","./getRefinements.js":false,"./getWidgetAttribute.js":"lGWeY","./hits-absolute-position.js":"dMQpP","./hits-query-id.js":"iBpEo","./hydrateSearchClient.js":"9kHZi","./isDomElement.js":false,"./isEqual.js":"14V8N","./isFacetRefined.js":false,"./isFiniteNumber.js":false,"./isPlainObject.js":false,"./isSpecialClick.js":"lKDby","./walkIndex.js":false,"./logger.js":"glTTt","./mergeSearchParameters.js":"9Li6L","./omit.js":"jUp5X","./noop.js":"6iazv","./range.js":"1dHGc","./render-args.js":"cQjTc","./resolveSearchParameters.js":"a7lVI","./reverseHighlightedParts.js":"kBcoN","./safelyRunOnBrowser.js":"3Ntti","./serializer.js":"jg61H","./toArray.js":"e49Zv","./uniq.js":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1J2wi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bH0Ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIndexUiState", ()=>checkIndexUiState);
var _capitalizeJs = require("./capitalize.js");
var _loggerJs = require("./logger.js");
var _typedObjectJs = require("./typedObject.js");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// Some connectors are responsible for multiple widgets so we need
// to map them.
function getWidgetNames(connectorName) {
    switch(connectorName){
        case "range":
            return [];
        case "menu":
            return [
                "menu",
                "menuSelect"
            ];
        default:
            return [
                connectorName
            ];
    }
}
var stateToWidgetsMap = {
    query: {
        connectors: [
            "connectSearchBox"
        ],
        widgets: [
            "ais.searchBox",
            "ais.autocomplete",
            "ais.voiceSearch"
        ]
    },
    refinementList: {
        connectors: [
            "connectRefinementList"
        ],
        widgets: [
            "ais.refinementList"
        ]
    },
    menu: {
        connectors: [
            "connectMenu"
        ],
        widgets: [
            "ais.menu"
        ]
    },
    hierarchicalMenu: {
        connectors: [
            "connectHierarchicalMenu"
        ],
        widgets: [
            "ais.hierarchicalMenu"
        ]
    },
    numericMenu: {
        connectors: [
            "connectNumericMenu"
        ],
        widgets: [
            "ais.numericMenu"
        ]
    },
    ratingMenu: {
        connectors: [
            "connectRatingMenu"
        ],
        widgets: [
            "ais.ratingMenu"
        ]
    },
    range: {
        connectors: [
            "connectRange"
        ],
        widgets: [
            "ais.rangeInput",
            "ais.rangeSlider",
            "ais.range"
        ]
    },
    toggle: {
        connectors: [
            "connectToggleRefinement"
        ],
        widgets: [
            "ais.toggleRefinement"
        ]
    },
    geoSearch: {
        connectors: [
            "connectGeoSearch"
        ],
        widgets: [
            "ais.geoSearch"
        ]
    },
    sortBy: {
        connectors: [
            "connectSortBy"
        ],
        widgets: [
            "ais.sortBy"
        ]
    },
    page: {
        connectors: [
            "connectPagination"
        ],
        widgets: [
            "ais.pagination",
            "ais.infiniteHits"
        ]
    },
    hitsPerPage: {
        connectors: [
            "connectHitsPerPage"
        ],
        widgets: [
            "ais.hitsPerPage"
        ]
    },
    configure: {
        connectors: [
            "connectConfigure"
        ],
        widgets: [
            "ais.configure"
        ]
    },
    places: {
        connectors: [],
        widgets: [
            "ais.places"
        ]
    }
};
function checkIndexUiState(_ref) {
    var index = _ref.index, indexUiState = _ref.indexUiState;
    var mountedWidgets = index.getWidgets().map(function(widget) {
        return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = (0, _typedObjectJs.keys)(indexUiState).reduce(function(acc, parameter) {
        var widgetUiState = stateToWidgetsMap[parameter];
        if (!widgetUiState) return acc;
        var requiredWidgets = widgetUiState.widgets;
        if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
            return mountedWidgets.includes(requiredWidget);
        })) acc.push([
            parameter,
            {
                connectors: widgetUiState.connectors,
                widgets: widgetUiState.widgets.map(function(widgetIdentifier) {
                    return widgetIdentifier.split("ais.")[1];
                })
            }
        ]);
        return acc;
    }, []);
    (0, _loggerJs.warning)(missingWidgets.length === 0, 'The UI state for the index "'.concat(index.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(index.getIndexId(), '":\n\n').concat(missingWidgets.map(function(_ref2) {
        var _ref4;
        var _ref3 = _slicedToArray(_ref2, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
        return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref4 = []).concat.apply(_ref4, _toConsumableArray(widgets.map(function(name) {
            return getWidgetNames(name);
        }))).map(function(name) {
            return '"'.concat(name, '"');
        }).join(", "));
    }).join("\n"), '\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don\'t render anything:\n\n```\n').concat(missingWidgets.filter(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), _stateParameter = _ref6[0], connectors = _ref6[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
        var capitalizedWidget = (0, _capitalizeJs.capitalize)(widgets[0]);
        var connectorName = connectors[0];
        return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join("\n"), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
        var capitalizedWidget = (0, _capitalizeJs.capitalize)(widgets[0]);
        return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(",\n  "), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets"));
}

},{"./capitalize.js":"1J2wi","./logger.js":"glTTt","./typedObject.js":"5SpMp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glTTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "warning", ()=>_warning);
var _noopJs = require("./noop.js");
/**
 * Logs a warning when this function is called, in development environment only.
 */ var deprecate = function deprecate(fn, message) {
    return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */ var warn = (0, _noopJs.noop);
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ var _warning = (0, _noopJs.noop);
warn = function warn(message) {
    // eslint-disable-next-line no-console
    console.warn("[InstantSearch.js]: ".concat(message.trim()));
};
deprecate = function deprecate(fn, message) {
    var hasAlreadyPrinted = false;
    return function() {
        if (!hasAlreadyPrinted) {
            hasAlreadyPrinted = true;
            warn(message);
        }
        return fn.apply(void 0, arguments);
    };
};
_warning = function warning(condition, message) {
    if (condition) return;
    var hasAlreadyPrinted = _warning.cache[message];
    if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
    }
};
_warning.cache = {};

},{"./noop.js":"6iazv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iazv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SpMp":[function(require,module,exports) {
/**
 * A typed version of Object.keys, to use when looping over a static object
 * inspired from https://stackoverflow.com/a/65117465/3185307
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keys", ()=>keys);
var keys = Object.keys;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jF2C6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkRendering", ()=>checkRendering);
var _getObjectTypeJs = require("./getObjectType.js");
function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== "function") throw new Error("The render function is not valid (received type ".concat((0, _getObjectTypeJs.getObjectType)(rendering), ").\n\n").concat(usage));
}

},{"./getObjectType.js":"3XQ8P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XQ8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getObjectType", ()=>getObjectType);
function getObjectType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12qh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatHighlightedParts", ()=>concatHighlightedParts);
var _escapeHighlightJs = require("./escape-highlight.js");
function concatHighlightedParts(parts) {
    var highlightPreTag = (0, _escapeHighlightJs.TAG_REPLACEMENT).highlightPreTag, highlightPostTag = (0, _escapeHighlightJs.TAG_REPLACEMENT).highlightPostTag;
    return parts.map(function(part) {
        return part.isHighlighted ? highlightPreTag + part.value + highlightPostTag : part.value;
    }).join("");
}

},{"./escape-highlight.js":"59mW0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59mW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAG_PLACEHOLDER", ()=>TAG_PLACEHOLDER);
parcelHelpers.export(exports, "TAG_REPLACEMENT", ()=>TAG_REPLACEMENT);
parcelHelpers.export(exports, "escapeHits", ()=>escapeHits);
parcelHelpers.export(exports, "escapeFacets", ()=>escapeFacets);
var _escapeHtmlJs = require("./escape-html.js");
var _isPlainObjectJs = require("./isPlainObject.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var TAG_PLACEHOLDER = {
    highlightPreTag: "__ais-highlight__",
    highlightPostTag: "__/ais-highlight__"
};
var TAG_REPLACEMENT = {
    highlightPreTag: "<mark>",
    highlightPostTag: "</mark>"
};
// @MAJOR: in the future, this should only escape, not replace
function replaceTagsAndEscape(value) {
    return (0, _escapeHtmlJs.escape)(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, "g"), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, "g"), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if ((0, _isPlainObjectJs.isPlainObject)(input) && typeof input.value !== "string") return Object.keys(input).reduce(function(acc, key) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, recursiveEscape(input[key])));
    }, {});
    if (Array.isArray(input)) return input.map(recursiveEscape);
    return _objectSpread(_objectSpread({}, input), {}, {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_ref) {
            var hit = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
            if (hit._highlightResult) hit._highlightResult = recursiveEscape(hit._highlightResult);
            if (hit._snippetResult) hit._snippetResult = recursiveEscape(hit._snippetResult);
            return hit;
        });
        hits.__escaped = true;
    }
    return hits;
}
function escapeFacets(facetHits) {
    return facetHits.map(function(h) {
        return _objectSpread(_objectSpread({}, h), {}, {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}

},{"./escape-html.js":"9Tb0e","./isPlainObject.js":"cIivc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Tb0e":[function(require,module,exports) {
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */ // Used to map characters to HTML entities.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */ parcelHelpers.export(exports, "escape", ()=>escape);
/**
 * Converts the HTML entities "&", "<", ">", '"', and "'" in `string` to their
 * characters.
 */ parcelHelpers.export(exports, "unescape", ()=>unescape);
var htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
};
// Used to match HTML entities and HTML characters.
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
function escape(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
        return htmlEntities[character];
    }) : value;
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/unescape.js
 */ // Used to map HTML entities to characters.
var htmlCharacters = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
};
// Used to match HTML entities and HTML characters.
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function unescape(value) {
    return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
        return htmlCharacters[character];
    }) : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIivc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */ parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */ function getTag(value) {
    if (value === null) return value === undefined ? "[object Undefined]" : "[object Null]";
    return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return _typeof(value) === "object" && value !== null;
}
function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== "[object Object]") return false;
    if (Object.getPrototypeOf(value) === null) return true;
    var proto = value;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(value) === proto;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Z3iP":[function(require,module,exports) {
// copied from
// https://github.com/algolia/autocomplete.js/blob/307a7acc4283e10a19cb7d067f04f1bea79dc56f/packages/autocomplete-core/src/utils/createConcurrentSafePromise.ts#L1:L1
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createConcurrentSafePromise", ()=>createConcurrentSafePromise);
function createConcurrentSafePromise() {
    var basePromiseId = -1;
    var latestResolvedId = -1;
    var latestResolvedValue = undefined;
    return function runConcurrentSafePromise(promise) {
        var currentPromiseId = ++basePromiseId;
        return Promise.resolve(promise).then(function(x) {
            // The promise might take too long to resolve and get outdated. This would
            // result in resolving stale values.
            // When this happens, we ignore the promise value and return the one
            // coming from the latest resolved value.
            //
            // +----------------------------------+
            // |        100ms                     |
            // | run(1) +--->  R1                 |
            // |        300ms                     |
            // | run(2) +-------------> R2 (SKIP) |
            // |        200ms                     |
            // | run(3) +--------> R3             |
            // +----------------------------------+
            if (latestResolvedValue && currentPromiseId < latestResolvedId) return latestResolvedValue;
            latestResolvedId = currentPromiseId;
            latestResolvedValue = x;
            return x;
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05go2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForFacet", ()=>createSendEventForFacet);
var _isFacetRefinedJs = require("./isFacetRefined.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function createSendEventForFacet(_ref) {
    var instantSearchInstance = _ref.instantSearchInstance, helper = _ref.helper, attr = _ref.attribute, widgetType = _ref.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var facetValue = args[1], _args$ = args[2], eventName = _args$ === void 0 ? "Filter Applied" : _args$, _args$2 = args[3], additionalData = _args$2 === void 0 ? {} : _args$2;
        var _args$0$split = args[0].split(":"), _args$0$split2 = _slicedToArray(_args$0$split, 2), eventType = _args$0$split2[0], eventModifier = _args$0$split2[1];
        var attribute = typeof attr === "string" ? attr : attr(facetValue);
        if (args.length === 1 && _typeof(args[0]) === "object") instantSearchInstance.sendEventToInsights(args[0]);
        else if (eventType === "click" && args.length >= 2 && args.length <= 4) {
            if (!(0, _isFacetRefinedJs.isFacetRefined)(helper, attribute, facetValue)) // send event only when the facet is being checked "ON"
            instantSearchInstance.sendEventToInsights({
                insightsMethod: "clickedFilters",
                widgetType: widgetType,
                eventType: eventType,
                eventModifier: eventModifier,
                payload: _objectSpread({
                    eventName: eventName,
                    index: helper.getIndex(),
                    filters: [
                        "".concat(attribute, ":").concat(facetValue)
                    ]
                }, additionalData),
                attribute: attribute
            });
        } else throw new Error("You need to pass between two and four arguments like:\n  sendEvent('click', facetValue, eventName?, additionalData?);\n\nIf you want to send a custom payload, you can pass one object: sendEvent(customPayload);\n");
    };
    return sendEventForFacet;
}

},{"./isFacetRefined.js":"b5SV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5SV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFacetRefined", ()=>isFacetRefined);
function isFacetRefined(helper, facet, value) {
    if (helper.state.isHierarchicalFacet(facet)) return helper.state.isHierarchicalFacetRefined(facet, value);
    else if (helper.state.isConjunctiveFacet(facet)) return helper.state.isFacetRefined(facet, value);
    else return helper.state.isDisjunctiveFacetRefined(facet, value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24sIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_buildEventPayloadsForHits", ()=>_buildEventPayloadsForHits);
parcelHelpers.export(exports, "createSendEventForHits", ()=>createSendEventForHits);
parcelHelpers.export(exports, "createBindEventForHits", ()=>createBindEventForHits);
var _serializerJs = require("./serializer.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function chunk(arr) {
    var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var chunks = [];
    for(var i = 0; i < Math.ceil(arr.length / chunkSize); i++)chunks.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    return chunks;
}
function _buildEventPayloadsForHits(_ref) {
    var index = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args, instantSearchInstance = _ref.instantSearchInstance;
    // when there's only one argument, that means it's custom
    if (args.length === 1 && _typeof(args[0]) === "object") return [
        args[0]
    ];
    var _args$0$split = args[0].split(":"), _args$0$split2 = _slicedToArray(_args$0$split, 2), eventType = _args$0$split2[0], eventModifier = _args$0$split2[1];
    var hits = args[1];
    var eventName = args[2];
    var additionalData = args[3] || {};
    if (!hits) throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
    if ((eventType === "click" || eventType === "conversion") && !eventName) throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
    var hitsArray = Array.isArray(hits) ? hits : [
        hits
    ];
    if (hitsArray.length === 0) return [];
    var queryID = hitsArray[0].__queryID;
    var hitsChunks = chunk(hitsArray);
    var objectIDsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.objectID;
        });
    });
    var positionsByChunk = hitsChunks.map(function(batch) {
        return batch.map(function(hit) {
            return hit.__position;
        });
    });
    if (eventType === "view") {
        if (instantSearchInstance.status !== "idle") return [];
        return hitsChunks.map(function(batch, i) {
            return {
                insightsMethod: "viewedObjectIDs",
                widgetType: widgetType,
                eventType: eventType,
                payload: _objectSpread({
                    eventName: eventName || "Hits Viewed",
                    index: index,
                    objectIDs: objectIDsByChunk[i]
                }, additionalData),
                hits: batch,
                eventModifier: eventModifier
            };
        });
    } else if (eventType === "click") return hitsChunks.map(function(batch, i) {
        return {
            insightsMethod: "clickedObjectIDsAfterSearch",
            widgetType: widgetType,
            eventType: eventType,
            payload: _objectSpread({
                eventName: eventName || "Hit Clicked",
                index: index,
                queryID: queryID,
                objectIDs: objectIDsByChunk[i],
                positions: positionsByChunk[i]
            }, additionalData),
            hits: batch,
            eventModifier: eventModifier
        };
    });
    else if (eventType === "conversion") return hitsChunks.map(function(batch, i) {
        return {
            insightsMethod: "convertedObjectIDsAfterSearch",
            widgetType: widgetType,
            eventType: eventType,
            payload: _objectSpread({
                eventName: eventName || "Hit Converted",
                index: index,
                queryID: queryID,
                objectIDs: objectIDsByChunk[i]
            }, additionalData),
            hits: batch,
            eventModifier: eventModifier
        };
    });
    else throw new Error('eventType("'.concat(eventType, '") is not supported.\n    If you want to send a custom payload, you can pass one object: ').concat(methodName, "(customPayload);\n    "));
}
function createSendEventForHits(_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance, index = _ref2.index, widgetType = _ref2.widgetType;
    var sentEvents = {};
    var timer = undefined;
    var sendEventForHits = function sendEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var payloads = _buildEventPayloadsForHits({
            widgetType: widgetType,
            index: index,
            methodName: "sendEvent",
            args: args,
            instantSearchInstance: instantSearchInstance
        });
        payloads.forEach(function(payload) {
            if (payload.eventType === "click" && payload.eventModifier === "internal" && sentEvents[payload.eventType]) return;
            sentEvents[payload.eventType] = true;
            instantSearchInstance.sendEventToInsights(payload);
        });
        clearTimeout(timer);
        timer = setTimeout(function() {
            sentEvents = {};
        }, 0);
    };
    return sendEventForHits;
}
function createBindEventForHits(_ref3) {
    var index = _ref3.index, widgetType = _ref3.widgetType, instantSearchInstance = _ref3.instantSearchInstance;
    var bindEventForHits = function bindEventForHits() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var payloads = _buildEventPayloadsForHits({
            widgetType: widgetType,
            index: index,
            methodName: "bindEvent",
            args: args,
            instantSearchInstance: instantSearchInstance
        });
        return payloads.length ? "data-insights-event=".concat((0, _serializerJs.serializePayload)(payloads)) : "";
    };
    return bindEventForHits;
}

},{"./serializer.js":"jg61H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jg61H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializePayload", ()=>serializePayload);
parcelHelpers.export(exports, "deserializePayload", ()=>deserializePayload);
function serializePayload(payload) {
    return btoa(encodeURIComponent(JSON.stringify(payload)));
}
function deserializePayload(serialized) {
    return JSON.parse(decodeURIComponent(atob(serialized)));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jt8Bk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setIndexHelperState", ()=>setIndexHelperState);
var _checkIndexUiStateJs = require("./checkIndexUiState.js");
var _isIndexWidgetJs = require("./isIndexWidget.js");
function setIndexHelperState(finalUiState, indexWidget) {
    var nextIndexUiState = finalUiState[indexWidget.getIndexId()] || {};
    (0, _checkIndexUiStateJs.checkIndexUiState)({
        index: indexWidget,
        indexUiState: nextIndexUiState
    });
    indexWidget.getHelper().setState(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
        uiState: nextIndexUiState
    }));
    indexWidget.getWidgets().filter((0, _isIndexWidgetJs.isIndexWidget)).forEach(function(widget) {
        return setIndexHelperState(finalUiState, widget);
    });
}

},{"./checkIndexUiState.js":"bH0Ll","./isIndexWidget.js":"6po8k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6po8k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIndexWidget", ()=>isIndexWidget);
function isIndexWidget(widget) {
    return widget.$$type === "ais.index";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kovBT":[function(require,module,exports) {
// Debounce a function call to the trailing edge.
// The debounced function returns a promise.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(func, wait) {
    var lastTimeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return new Promise(function(resolve, reject) {
            if (lastTimeout) clearTimeout(lastTimeout);
            lastTimeout = setTimeout(function() {
                lastTimeout = null;
                Promise.resolve(func.apply(void 0, args)).then(resolve).catch(reject);
            }, wait);
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bO5Os":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defer", ()=>defer);
var nextMicroTask = Promise.resolve();
function defer(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (progress !== null) return;
        progress = nextMicroTask.then(function() {
            progress = null;
            if (cancelled) {
                cancelled = false;
                return;
            }
            callback.apply(void 0, args);
        });
    };
    fn.wait = function() {
        if (progress === null) throw new Error("The deferred function should be called before calling `wait()`");
        return progress;
    };
    fn.cancel = function() {
        if (progress === null) return;
        cancelled = true;
    };
    return fn;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLqHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDocumentationLink", ()=>createDocumentationLink);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>createDocumentationMessageGenerator);
function createDocumentationLink(_ref) {
    var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
    return [
        "https://www.algolia.com/doc/api-reference/widgets/",
        name,
        "/js/",
        connector ? "#connector" : ""
    ].join("");
}
function createDocumentationMessageGenerator() {
    for(var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++)widgets[_key] = arguments[_key];
    var links = widgets.map(function(widget) {
        return createDocumentationLink(widget);
    }).join(", ");
    return function(message) {
        return [
            message,
            "See documentation: ".concat(links)
        ].filter(Boolean).join("\n\n");
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Dhef":[function(require,module,exports) {
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find);
function find(items, predicate) {
    var value;
    for(var i = 0; i < items.length; i++){
        value = items[i];
        // inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
        if (predicate(value, i, items)) return value;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tlAy":[function(require,module,exports) {
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findIndex", ()=>findIndex);
function findIndex(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XKtv":[function(require,module,exports) {
// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>getAppIdAndApiKey);
function getAppIdAndApiKey(searchClient) {
    if (searchClient.transporter) {
        // searchClient v4
        var _searchClient$transpo = searchClient.transporter, headers = _searchClient$transpo.headers, queryParameters = _searchClient$transpo.queryParameters;
        var APP_ID = "x-algolia-application-id";
        var API_KEY = "x-algolia-api-key";
        var appId = headers[APP_ID] || queryParameters[APP_ID];
        var apiKey = headers[API_KEY] || queryParameters[API_KEY];
        return [
            appId,
            apiKey
        ];
    } else // searchClient v3
    return [
        searchClient.applicationID,
        searchClient.apiKey
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayQ3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 *
 * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
 * @return {HTMLElement} Container node
 * @throws Error when the type is not correct
 */ parcelHelpers.export(exports, "getContainerNode", ()=>getContainerNode);
var _isDomElementJs = require("./isDomElement.js");
function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === "string";
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!(0, _isDomElementJs.isDomElement)(domElement)) {
        var errorMessage = "Container must be `string` or `HTMLElement`.";
        if (isSelectorString) errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
        throw new Error(errorMessage);
    }
    return domElement;
}

},{"./isDomElement.js":"3TY64","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TY64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDomElement", ()=>isDomElement);
function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jCC9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHighlightedParts", ()=>getHighlightedParts);
var _escapeHighlightJs = require("./escape-highlight.js");
function getHighlightedParts(highlightedValue) {
    // @MAJOR: this should use TAG_PLACEHOLDER
    var highlightPostTag = (0, _escapeHighlightJs.TAG_REPLACEMENT).highlightPostTag, highlightPreTag = (0, _escapeHighlightJs.TAG_REPLACEMENT).highlightPreTag;
    var splitByPreTag = highlightedValue.split(highlightPreTag);
    var firstValue = splitByPreTag.shift();
    var elements = !firstValue ? [] : [
        {
            value: firstValue,
            isHighlighted: false
        }
    ];
    splitByPreTag.forEach(function(split) {
        var splitByPostTag = split.split(highlightPostTag);
        elements.push({
            value: splitByPostTag[0],
            isHighlighted: true
        });
        if (splitByPostTag[1] !== "") elements.push({
            value: splitByPostTag[1],
            isHighlighted: false
        });
    });
    return elements;
}

},{"./escape-highlight.js":"59mW0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAPc5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHighlightFromSiblings", ()=>getHighlightFromSiblings);
var _escapeHtmlJs = require("./escape-html.js");
var hasAlphanumeric = new RegExp(/\w/i);
function getHighlightFromSiblings(parts, i) {
    var _parts, _parts2;
    var current = parts[i];
    var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
    var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
    if (!hasAlphanumeric.test((0, _escapeHtmlJs.unescape)(current.value)) && isPreviousHighlighted === isNextHighlighted) return isPreviousHighlighted;
    return current.isHighlighted;
}

},{"./escape-html.js":"9Tb0e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0lT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPropertyByPath", ()=>getPropertyByPath);
function getPropertyByPath(object, path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return parts.reduce(function(current, key) {
        return current && current[key];
    }, object);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGWeY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWidgetAttribute", ()=>getWidgetAttribute);
function getWidgetAttribute(widget, initOptions) {
    var _widget$getWidgetRend;
    var renderState = (_widget$getWidgetRend = widget.getWidgetRenderState) === null || _widget$getWidgetRend === void 0 ? void 0 : _widget$getWidgetRend.call(widget, initOptions);
    var attribute = null;
    if (renderState && renderState.widgetParams) {
        // casting as widgetParams is checked just before
        var widgetParams = renderState.widgetParams;
        if (widgetParams.attribute) attribute = widgetParams.attribute;
        else if (Array.isArray(widgetParams.attributes)) attribute = widgetParams.attributes[0];
    }
    if (typeof attribute !== "string") throw new Error("Could not find the attribute of the widget:\n\n".concat(JSON.stringify(widget), "\n\nPlease check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly."));
    return attribute;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMQpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>addAbsolutePosition);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _objectSpread(_objectSpread({}, hit), {}, {
            __position: hitsPerPage * page + idx + 1
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBpEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addQueryID", ()=>addQueryID);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function addQueryID(hits, queryID) {
    if (!queryID) return hits;
    return hits.map(function(hit) {
        return _objectSpread(_objectSpread({}, hit), {}, {
            __queryID: queryID
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kHZi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @ts-nocheck (types to be fixed during actual implementation)
parcelHelpers.export(exports, "hydrateSearchClient", ()=>hydrateSearchClient);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function hydrateSearchClient(client, results) {
    if (!results) return;
    // Disable cache hydration on:
    // - Algoliasearch API Client < v4 with cache disabled
    // - Third party clients (detected by the `addAlgoliaAgent` function missing)
    if ((!client.transporter || client._cacheHydrated) && (!client._useCache || typeof client.addAlgoliaAgent !== "function")) return;
    // Algoliasearch API Client >= v4
    // To hydrate the client we need to populate the cache with the data from
    // the server (done in `hydrateSearchClientWithMultiIndexRequest` or
    // `hydrateSearchClientWithSingleIndexRequest`). But since there is no way
    // for us to compute the key the same way as `algoliasearch-client` we need
    // to populate it on a custom key and override the `search` method to
    // search on it first.
    if (client.transporter && !client._cacheHydrated) {
        client._cacheHydrated = true;
        var baseMethod = client.search;
        client.search = function(requests) {
            for(var _len = arguments.length, methodArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)methodArgs[_key - 1] = arguments[_key];
            var requestsWithSerializedParams = requests.map(function(request) {
                return _objectSpread(_objectSpread({}, request), {}, {
                    params: serializeQueryParameters(request.params)
                });
            });
            return client.transporter.responsesCache.get({
                method: "search",
                args: [
                    requestsWithSerializedParams
                ].concat(methodArgs)
            }, function() {
                return baseMethod.apply(void 0, [
                    requests
                ].concat(methodArgs));
            });
        };
        // Populate the cache with the data from the server
        client.transporter.responsesCache.set({
            method: "search",
            args: [
                Object.keys(results).reduce(function(acc, key) {
                    return acc.concat(results[key].results.map(function(request) {
                        return {
                            indexName: request.index,
                            params: request.params
                        };
                    }));
                }, [])
            ]
        }, {
            results: Object.keys(results).reduce(function(acc, key) {
                return acc.concat(results[key].results);
            }, [])
        });
    }
    // Algoliasearch API Client < v4
    // Prior to client v4 we didn't have a proper API to hydrate the client
    // cache from the outside. The following code populates the cache with
    // a single-index result. You can find more information about the
    // computation of the key inside the client (see link below).
    // https://github.com/algolia/algoliasearch-client-javascript/blob/c27e89ff92b2a854ae6f40dc524bffe0f0cbc169/src/AlgoliaSearchCore.js#L232-L240
    if (!client.transporter) {
        var cacheKey = "/1/indexes/*/queries_body_".concat(JSON.stringify({
            requests: Object.keys(results).reduce(function(acc, key) {
                return acc.concat(results[key].rawResults.map(function(request) {
                    return {
                        indexName: request.index,
                        params: request.params
                    };
                }));
            }, [])
        }));
        client.cache = _objectSpread(_objectSpread({}, client.cache), {}, _defineProperty({}, cacheKey, JSON.stringify({
            results: Object.keys(results).reduce(function(acc, key) {
                return acc.concat(results[key].rawResults);
            }, [])
        })));
    }
}
// This function is copied from the algoliasearch v4 API Client. If modified,
// consider updating it also in `serializeQueryParameters` from `@algolia/transporter`.
function serializeQueryParameters(parameters) {
    var isObjectOrArray = function isObjectOrArray(value) {
        return Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]";
    };
    var encode = function encode(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        var i = 0;
        return format.replace(/%s/g, function() {
            return encodeURIComponent(args[i++]);
        });
    };
    return Object.keys(parameters).map(function(key) {
        return encode("%s=%s", key, isObjectOrArray(parameters[key]) ? JSON.stringify(parameters[key]) : parameters[key]);
    }).join("&");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14V8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) return true;
    if (isPrimitive(first) || isPrimitive(second) || typeof first === "function" || typeof second === "function") return first === second;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    // @TODO avoid for..of because of the large polyfill
    // eslint-disable-next-line no-restricted-syntax
    for(var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++){
        var key = _Object$keys[_i];
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKDby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSpecialClick", ()=>isSpecialClick);
function isSpecialClick(event) {
    var isMiddleClick = event.button === 1;
    return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Li6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeSearchParameters", ()=>mergeSearchParameters);
var _findIndexJs = require("./findIndex.js");
var _uniqJs = require("./uniq.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "facets",
    "disjunctiveFacets",
    "facetsRefinements",
    "facetsExcludes",
    "disjunctiveFacetsRefinements",
    "numericRefinements",
    "tagRefinements",
    "hierarchicalFacets",
    "hierarchicalFacetsRefinements",
    "ruleContexts"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var mergeWithRest = function mergeWithRest(left, right) {
    var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, _excluded);
    return left.setQueryParameters(rest);
};
// Merge facets
var mergeFacets = function mergeFacets(left, right) {
    return right.facets.reduce(function(_, name) {
        return _.addFacet(name);
    }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
    return right.disjunctiveFacets.reduce(function(_, name) {
        return _.addDisjunctiveFacet(name);
    }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
    return left.setQueryParameters({
        hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
            var index = (0, _findIndexJs.findIndex)(facets, function(_) {
                return _.name === facet.name;
            });
            if (index === -1) return facets.concat(facet);
            var nextFacets = facets.slice();
            nextFacets.splice(index, 1, facet);
            return nextFacets;
        }, left.hierarchicalFacets)
    });
};
// Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
    return right.tagRefinements.reduce(function(_, value) {
        return _.addTagRefinement(value);
    }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
    return left.setQueryParameters({
        facetsRefinements: _objectSpread(_objectSpread({}, left.facetsRefinements), right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _objectSpread(_objectSpread({}, left.facetsExcludes), right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _objectSpread(_objectSpread({}, left.disjunctiveFacetsRefinements), right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _objectSpread(_objectSpread({}, left.numericRefinements), right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _objectSpread(_objectSpread({}, left.hierarchicalFacetsRefinements), right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = (0, _uniqJs.uniq)([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) return left.setQueryParameters({
        ruleContexts: ruleContexts
    });
    return left;
};
var mergeSearchParameters = function mergeSearchParameters() {
    for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++)parameters[_key] = arguments[_key];
    return parameters.reduce(function(left, right) {
        var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
        var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
        var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
        var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
        var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
        var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
        var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
        var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
        var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
        var facetsMerged = mergeFacets(ruleContextsMerged, right);
        return mergeWithRest(facetsMerged, right);
    });
};

},{"./findIndex.js":"8tlAy","./uniq.js":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uniq", ()=>uniq);
function uniq(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUp5X":[function(require,module,exports) {
/**
 * Creates a new object with the same keys as the original object, but without the excluded keys.
 * @param source original object
 * @param excluded keys to remove from the original object
 * @returns the new object
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "omit", ()=>omit);
function omit(source, excluded) {
    if (source === null || source === undefined) return source;
    return Object.keys(source).reduce(function(target, key) {
        if (excluded.indexOf(key) >= 0) return target;
        var validKey = key;
        target[validKey] = source[validKey];
        return target;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1dHGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range);
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function range(_ref) {
    var _ref$start = _ref.start, start = _ref$start === void 0 ? 0 : _ref$start, end = _ref.end, _ref$step = _ref.step, step = _ref$step === void 0 ? 1 : _ref$step;
    // We can't divide by 0 so we re-assign the step to 1 if it happens.
    var limitStep = step === 0 ? 1 : step;
    // In some cases the array to create has a decimal length.
    // We therefore need to round the value.
    // Example:
    //   { start: 1, end: 5000, step: 500 }
    //   => Array length = (5000 - 1) / 500 = 9.998
    var arrayLength = Math.round((end - start) / limitStep);
    return _toConsumableArray(Array(arrayLength)).map(function(_, current) {
        return start + current * limitStep;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQjTc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInitArgs", ()=>createInitArgs);
parcelHelpers.export(exports, "createRenderArgs", ()=>createRenderArgs);
function createInitArgs(instantSearchInstance, parent, uiState) {
    var helper = parent.getHelper();
    return {
        uiState: uiState,
        helper: helper,
        parent: parent,
        instantSearchInstance: instantSearchInstance,
        state: helper.state,
        renderState: instantSearchInstance.renderState,
        templatesConfig: instantSearchInstance.templatesConfig,
        createURL: parent.createURL,
        scopedResults: [],
        searchMetadata: {
            isSearchStalled: instantSearchInstance.status === "stalled"
        },
        status: instantSearchInstance.status,
        error: instantSearchInstance.error
    };
}
function createRenderArgs(instantSearchInstance, parent) {
    var results = parent.getResults();
    var helper = parent.getHelper();
    return {
        helper: helper,
        parent: parent,
        instantSearchInstance: instantSearchInstance,
        results: results,
        scopedResults: parent.getScopedResults(),
        state: results ? results._state : helper.state,
        renderState: instantSearchInstance.renderState,
        templatesConfig: instantSearchInstance.templatesConfig,
        createURL: parent.createURL,
        searchMetadata: {
            isSearchStalled: instantSearchInstance.status === "stalled"
        },
        status: instantSearchInstance.status,
        error: instantSearchInstance.error
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7lVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveSearchParameters", ()=>resolveSearchParameters);
function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBcoN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseHighlightedParts", ()=>reverseHighlightedParts);
var _getHighlightFromSiblingsJs = require("./getHighlightFromSiblings.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function reverseHighlightedParts(parts) {
    if (!parts.some(function(part) {
        return part.isHighlighted;
    })) return parts.map(function(part) {
        return _objectSpread(_objectSpread({}, part), {}, {
            isHighlighted: false
        });
    });
    return parts.map(function(part, i) {
        return _objectSpread(_objectSpread({}, part), {}, {
            isHighlighted: !(0, _getHighlightFromSiblingsJs.getHighlightFromSiblings)(parts, i)
        });
    });
}

},{"./getHighlightFromSiblings.js":"fAPc5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Ntti":[function(require,module,exports) {
// eslint-disable-next-line no-restricted-globals
/**
 * Runs code on browser environments safely.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "safelyRunOnBrowser", ()=>safelyRunOnBrowser);
function safelyRunOnBrowser(callback) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        fallback: function fallback() {
            return undefined;
        }
    }, fallback = _ref.fallback;
    // eslint-disable-next-line no-restricted-globals
    if (typeof window === "undefined") return fallback();
    // eslint-disable-next-line no-restricted-globals
    return callback({
        window: window
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e49Zv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray);
function toArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"258GF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>reverseHighlight);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = (0, _suitJs.component)("ReverseHighlight");
function reverseHighlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    (0, _indexJs.warning)(false, "`instantsearch.reverseHighlight` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseHighlight` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
    var highlightAttributeResult = (0, _indexJs.getPropertyByPath)(hit._highlightResult, attribute);
    // @MAJOR fallback to attribute value if highlight is not found
    (0, _indexJs.warning)(highlightAttributeResult, 'Could not enable reverse highlight for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var _ref2 = highlightAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    var reverseHighlightedValue = (0, _indexJs.concatHighlightedParts)((0, _indexJs.reverseHighlightedParts)((0, _indexJs.getHighlightedParts)(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMCRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>snippet);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = (0, _suitJs.component)("Snippet");
function snippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    (0, _indexJs.warning)(false, "`instantsearch.snippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `Snippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
    var snippetAttributeResult = (0, _indexJs.getPropertyByPath)(hit._snippetResult, attribute);
    // @MAJOR fallback to attribute value if snippet is not found
    (0, _indexJs.warning)(snippetAttributeResult, 'Could not enable snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n'));
    var _ref2 = snippetAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cYoY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>reverseSnippet);
var _suitJs = require("../lib/suit.js");
var _indexJs = require("../lib/utils/index.js");
var suit = (0, _suitJs.component)("ReverseSnippet");
function reverseSnippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    (0, _indexJs.warning)(false, "`instantsearch.reverseSnippet` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `ReverseSnippet` component.\n\nFor more information, visit https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/?client=html+tagged+templates#upgrade-templates");
    var snippetAttributeResult = (0, _indexJs.getPropertyByPath)(hit._snippetResult, attribute);
    // @MAJOR fallback to attribute value if snippet is not found
    (0, _indexJs.warning)(snippetAttributeResult, 'Could not enable reverse snippet for "'.concat(attribute, '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n'));
    var _ref2 = snippetAttributeResult || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value;
    // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    var reverseHighlightedValue = (0, _indexJs.concatHighlightedParts)((0, _indexJs.reverseHighlightedParts)((0, _indexJs.getHighlightedParts)(attributeValue)));
    return reverseHighlightedValue.replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _indexJs.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}

},{"../lib/suit.js":"du81D","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EZr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @deprecated use bindEvent instead */ parcelHelpers.export(exports, "readDataAttributes", ()=>readDataAttributes);
/** @deprecated use bindEvent instead */ parcelHelpers.export(exports, "writeDataAttributes", ()=>writeDataAttributes);
parcelHelpers.export(exports, "default", ()=>insights);
var _indexJs = require("../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function readDataAttributes(domElement) {
    var method = domElement.getAttribute("data-insights-method");
    var serializedPayload = domElement.getAttribute("data-insights-payload");
    if (typeof serializedPayload !== "string") throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");
    try {
        var payload = (0, _indexJs.deserializePayload)(serializedPayload);
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error("The insights helper was unable to parse `data-insights-payload`.");
    }
}
function writeDataAttributes(_ref) {
    var method = _ref.method, payload = _ref.payload;
    if (_typeof(payload) !== "object") throw new Error("The insights helper expects the payload to be an object.");
    var serializedPayload;
    try {
        serializedPayload = (0, _indexJs.serializePayload)(payload);
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
}
function insights(method, payload) {
    (0, _indexJs.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cRBQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANONYMOUS_TOKEN_COOKIE_KEY", ()=>ANONYMOUS_TOKEN_COOKIE_KEY);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>getInsightsAnonymousUserTokenInternal);
parcelHelpers.export(exports, "default", ()=>getInsightsAnonymousUserToken);
var _indexJs = require("../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var ANONYMOUS_TOKEN_COOKIE_KEY = "_ALGOLIA";
function getCookie(name) {
    if ((typeof document === "undefined" ? "undefined" : _typeof(document)) !== "object" || typeof document.cookie !== "string") return undefined;
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(";");
    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === " ")cookie = cookie.substring(1);
        if (cookie.indexOf(prefix) === 0) return cookie.substring(prefix.length, cookie.length);
    }
    return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
function getInsightsAnonymousUserToken() {
    (0, _indexJs.warning)(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return getInsightsAnonymousUserTokenInternal();
}

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"co24K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInfiniteHitsSessionStorageCache", ()=>(0, _sessionStorageJsDefault.default));
var _sessionStorageJs = require("./sessionStorage.js");
var _sessionStorageJsDefault = parcelHelpers.interopDefault(_sessionStorageJs);

},{"./sessionStorage.js":"gzyTs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzyTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createInfiniteHitsSessionStorageCache);
var _indexJs = require("../utils/index.js");
var _excluded = [
    "page"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getStateWithoutPage(state) {
    var _ref = state || {}, page = _ref.page, rest = _objectWithoutProperties(_ref, _excluded);
    return rest;
}
var KEY = "ais.infiniteHits";
function createInfiniteHitsSessionStorageCache() {
    return {
        read: function read(_ref2) {
            var state = _ref2.state;
            var sessionStorage = (0, _indexJs.safelyRunOnBrowser)(function(_ref3) {
                var window = _ref3.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) return null;
            try {
                var cache = JSON.parse(// @ts-expect-error JSON.parse() requires a string, but it actually accepts null, too.
                sessionStorage.getItem(KEY));
                return cache && (0, _indexJs.isEqual)(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (error instanceof SyntaxError) try {
                    sessionStorage.removeItem(KEY);
                } catch (err) {
                // do nothing
                }
                return null;
            }
        },
        write: function write(_ref4) {
            var state = _ref4.state, hits = _ref4.hits;
            var sessionStorage = (0, _indexJs.safelyRunOnBrowser)(function(_ref5) {
                var window = _ref5.window;
                return window.sessionStorage;
            });
            if (!sessionStorage) return;
            try {
                sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {
            // do nothing
            }
        }
    };
}

},{"../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mJmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INSTANTSEARCH_FUTURE_DEFAULTS", ()=>INSTANTSEARCH_FUTURE_DEFAULTS);
var _events = require("@algolia/events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _createInsightsMiddlewareJs = require("../middlewares/createInsightsMiddleware.js");
var _createMetadataMiddlewareJs = require("../middlewares/createMetadataMiddleware.js");
var _createRouterMiddlewareJs = require("../middlewares/createRouterMiddleware.js");
var _indexJs = require("../widgets/index/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _createHelpersJs = require("./createHelpers.js");
var _createHelpersJsDefault = parcelHelpers.interopDefault(_createHelpersJs);
var _indexJs1 = require("./utils/index.js");
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs1.createDocumentationMessageGenerator)({
    name: "instantsearch"
});
function defaultCreateURL() {
    return "#";
}
var INSTANTSEARCH_FUTURE_DEFAULTS = {
    preserveSharedStateOnUnmount: false
};
/**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */ var InstantSearch = /*#__PURE__*/ function(_EventEmitter) {
    _inherits(InstantSearch, _EventEmitter);
    var _super = _createSuper(InstantSearch);
    function InstantSearch(options) {
        var _options$future2;
        var _this;
        _classCallCheck(this, InstantSearch);
        _this = _super.call(this);
        // prevent `render` event listening from causing a warning
        _defineProperty(_assertThisInitialized(_this), "client", void 0);
        _defineProperty(_assertThisInitialized(_this), "indexName", void 0);
        _defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);
        _defineProperty(_assertThisInitialized(_this), "onStateChange", null);
        _defineProperty(_assertThisInitialized(_this), "future", void 0);
        _defineProperty(_assertThisInitialized(_this), "helper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);
        _defineProperty(_assertThisInitialized(_this), "started", void 0);
        _defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);
        _defineProperty(_assertThisInitialized(_this), "renderState", {});
        _defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialResults", void 0);
        _defineProperty(_assertThisInitialized(_this), "_createURL", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);
        _defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
        _defineProperty(_assertThisInitialized(_this), "_insights", void 0);
        _defineProperty(_assertThisInitialized(_this), "middleware", []);
        _defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);
        /**
     * The status of the search. Can be "idle", "loading", "stalled", or "error".
     */ _defineProperty(_assertThisInitialized(_this), "status", "idle");
        /**
     * The last returned error from the Search API.
     * The error gets cleared when the next valid search response is rendered.
     */ _defineProperty(_assertThisInitialized(_this), "error", undefined);
        _defineProperty(_assertThisInitialized(_this), "scheduleSearch", (0, _indexJs1.defer)(function() {
            if (_this.started) _this.mainHelper.search();
        }));
        _defineProperty(_assertThisInitialized(_this), "scheduleRender", (0, _indexJs1.defer)(function() {
            var _this$mainHelper;
            var shouldResetStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            if (!((_this$mainHelper = _this.mainHelper) !== null && _this$mainHelper !== void 0 && _this$mainHelper.hasPendingRequests())) {
                clearTimeout(_this._searchStalledTimer);
                _this._searchStalledTimer = null;
                if (shouldResetStatus) {
                    _this.status = "idle";
                    _this.error = undefined;
                }
            }
            _this.mainIndex.render({
                instantSearchInstance: _assertThisInitialized(_this)
            });
            _this.emit("render");
        }));
        _defineProperty(_assertThisInitialized(_this), "onInternalStateChange", (0, _indexJs1.defer)(function() {
            var nextUiState = _this.mainIndex.getWidgetUiState({});
            _this.middleware.forEach(function(_ref) {
                var instance = _ref.instance;
                instance.onStateChange({
                    uiState: nextUiState
                });
            });
        }));
        _this.setMaxListeners(100);
        var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? "" : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, _options$insights = options.insights, insights = _options$insights === void 0 ? undefined : _options$insights, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang, _options$future = options.future, future = _options$future === void 0 ? _objectSpread(_objectSpread({}, INSTANTSEARCH_FUTURE_DEFAULTS), options.future || {}) : _options$future;
        if (searchClient === null) throw new Error(withUsage("The `searchClient` option is required."));
        if (typeof searchClient.search !== "function") throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        if (typeof searchClient.addAlgoliaAgent === "function") searchClient.addAlgoliaAgent("instantsearch.js (".concat((0, _versionJsDefault.default), ")"));
        (0, _indexJs1.warning)(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (insightsClient && typeof insightsClient !== "function") throw new Error(withUsage("The `insightsClient` option should be a function."));
        (0, _indexJs1.warning)(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat((0, _indexJs1.createDocumentationLink)({
            name: "configure"
        })));
        if (((_options$future2 = options.future) === null || _options$future2 === void 0 ? void 0 : _options$future2.preserveSharedStateOnUnmount) === undefined) // eslint-disable-next-line no-console
        console.info("Starting from the next major version, InstantSearch will change how widgets state is preserved when they are removed. InstantSearch will keep the state of unmounted widgets to be usable by other widgets with the same attribute.\n\nWe recommend setting `future.preserveSharedStateOnUnmount` to true to adopt this change today.\nTo stay with the current behaviour and remove this warning, set the option to false.\n\nSee documentation: ".concat((0, _indexJs1.createDocumentationLink)({
            name: "instantsearch"
        }), "#widget-param-future\n          "));
        _this.client = searchClient;
        _this.future = future;
        _this.insightsClient = insightsClient;
        _this.indexName = indexName;
        _this.helper = null;
        _this.mainHelper = null;
        _this.mainIndex = (0, _indexJsDefault.default)({
            indexName: indexName
        });
        _this.onStateChange = onStateChange;
        _this.started = false;
        _this.templatesConfig = {
            helpers: (0, _createHelpersJsDefault.default)({
                numberLocale: numberLocale
            }),
            compileOptions: {}
        };
        _this._stalledSearchDelay = stalledSearchDelay;
        _this._searchStalledTimer = null;
        _this._createURL = defaultCreateURL;
        _this._initialUiState = initialUiState;
        _this._initialResults = null;
        _this._insights = insights;
        if (searchFunction) {
            (0, _indexJs1.warning)(false, "The `searchFunction` option is deprecated. Use `onStateChange` instead.");
            _this._searchFunction = searchFunction;
        }
        _this.sendEventToInsights = (0, _indexJs1.noop);
        if (routing) {
            var routerOptions = typeof routing === "boolean" ? {} : routing;
            routerOptions.$$internal = true;
            _this.use((0, _createRouterMiddlewareJs.createRouterMiddleware)(routerOptions));
        }
        // This is the default Insights middleware,
        // added when `insights` is set to true by the user.
        // Any user-provided middleware will be added later and override this one.
        if (insights) {
            var insightsOptions = typeof insights === "boolean" ? {} : insights;
            insightsOptions.$$internal = true;
            _this.use((0, _createInsightsMiddlewareJs.createInsightsMiddleware)(insightsOptions));
        }
        if ((0, _createMetadataMiddlewareJs.isMetadataEnabled)()) _this.use((0, _createMetadataMiddlewareJs.createMetadataMiddleware)({
            $$internal: true
        }));
        return _this;
    }
    /**
   * Hooks a middleware into the InstantSearch lifecycle.
   */ _createClass(InstantSearch, [
        {
            key: "_isSearchStalled",
            get: /**
     * @deprecated use `status === 'stalled'` instead
     */ function get() {
                (0, _indexJs1.warning)(false, '`InstantSearch._isSearchStalled` is deprecated and will be removed in InstantSearch.js 5.0.\n\nUse `InstantSearch.status === "stalled"` instead.');
                return this.status === "stalled";
            }
        },
        {
            key: "use",
            value: function use() {
                var _this2 = this;
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++)middleware[_key] = arguments[_key];
                var newMiddlewareList = middleware.map(function(fn) {
                    var newMiddleware = _objectSpread({
                        $$type: "__unknown__",
                        $$internal: false,
                        subscribe: (0, _indexJs1.noop),
                        started: (0, _indexJs1.noop),
                        unsubscribe: (0, _indexJs1.noop),
                        onStateChange: (0, _indexJs1.noop)
                    }, fn({
                        instantSearchInstance: _this2
                    }));
                    _this2.middleware.push({
                        creator: fn,
                        instance: newMiddleware
                    });
                    return newMiddleware;
                });
                // If the instance has already started, we directly subscribe the
                // middleware so they're notified of changes.
                if (this.started) newMiddlewareList.forEach(function(m) {
                    m.subscribe();
                    m.started();
                });
                return this;
            }
        },
        {
            key: "unuse",
            value: function unuse() {
                for(var _len2 = arguments.length, middlewareToUnuse = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)middlewareToUnuse[_key2] = arguments[_key2];
                this.middleware.filter(function(m) {
                    return middlewareToUnuse.includes(m.creator);
                }).forEach(function(m) {
                    return m.instance.unsubscribe();
                });
                this.middleware = this.middleware.filter(function(m) {
                    return !middlewareToUnuse.includes(m.creator);
                });
                return this;
            }
        },
        {
            key: "EXPERIMENTAL_use",
            value: function EXPERIMENTAL_use() {
                (0, _indexJs1.warning)(false, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.");
                return this.use.apply(this, arguments);
            }
        },
        {
            key: "addWidget",
            value: function addWidget(widget) {
                (0, _indexJs1.warning)(false, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`");
                return this.addWidgets([
                    widget
                ]);
            }
        },
        {
            key: "addWidgets",
            value: function addWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
                if (widgets.some(function(widget) {
                    return typeof widget.init !== "function" && typeof widget.render !== "function";
                })) throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
                this.mainIndex.addWidgets(widgets);
                return this;
            }
        },
        {
            key: "removeWidget",
            value: function removeWidget(widget) {
                (0, _indexJs1.warning)(false, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`");
                return this.removeWidgets([
                    widget
                ]);
            }
        },
        {
            key: "removeWidgets",
            value: function removeWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
                if (widgets.some(function(widget) {
                    return typeof widget.dispose !== "function";
                })) throw new Error(withUsage("The widget definition expects a `dispose` method."));
                this.mainIndex.removeWidgets(widgets);
                return this;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this3 = this;
                if (this.started) throw new Error(withUsage("The `start` method has already been called once."));
                // This Helper is used for the queries, we don't care about its state. The
                // states are managed at the `index` level. We use this Helper to create
                // DerivedHelper scoped into the `index` widgets.
                // In Vue InstantSearch' hydrate, a main helper gets set before start, so
                // we need to respect this helper as a way to keep all listeners correct.
                var mainHelper = this.mainHelper || (0, _algoliasearchHelperDefault.default)(this.client, this.indexName);
                mainHelper.search = function() {
                    _this3.status = "loading";
                    _this3.scheduleRender(false);
                    (0, _indexJs1.warning)(Boolean(_this3.indexName) || _this3.mainIndex.getWidgets().some((0, _indexJs1.isIndexWidget)), "No indexName provided, nor an explicit index widget in the widgets tree. This is required to be able to display results.");
                    // This solution allows us to keep the exact same API for the users but
                    // under the hood, we have a different implementation. It should be
                    // completely transparent for the rest of the codebase. Only this module
                    // is impacted.
                    return mainHelper.searchOnlyWithDerivedHelpers();
                };
                if (this._searchFunction) {
                    // this client isn't used to actually search, but required for the helper
                    // to not throw errors
                    var fakeClient = {
                        search: function search() {
                            return new Promise((0, _indexJs1.noop));
                        }
                    };
                    this._mainHelperSearch = mainHelper.search.bind(mainHelper);
                    mainHelper.search = function() {
                        var mainIndexHelper = _this3.mainIndex.getHelper();
                        var searchFunctionHelper = (0, _algoliasearchHelperDefault.default)(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
                        searchFunctionHelper.once("search", function(_ref2) {
                            var state = _ref2.state;
                            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
                            _this3._mainHelperSearch();
                        });
                        // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
                        searchFunctionHelper.on("change", function(_ref3) {
                            var state = _ref3.state;
                            mainIndexHelper.setState(state);
                        });
                        _this3._searchFunction(searchFunctionHelper);
                        return mainHelper;
                    };
                }
                // Only the "main" Helper emits the `error` event vs the one for `search`
                // and `results` that are also emitted on the derived one.
                mainHelper.on("error", function(_ref4) {
                    var error = _ref4.error;
                    if (!(error instanceof Error)) {
                        // typescript lies here, error is in some cases { name: string, message: string }
                        var err = error;
                        error = Object.keys(err).reduce(function(acc, key) {
                            acc[key] = err[key];
                            return acc;
                        }, new Error(err.message));
                    }
                    // If an error is emitted, it is re-thrown by events. In previous versions
                    // we emitted {error}, which is thrown as:
                    // "Uncaught, unspecified \"error\" event. ([object Object])"
                    // To avoid breaking changes, we make the error available in both
                    // `error` and `error.error`
                    // @MAJOR emit only error
                    error.error = error;
                    _this3.error = error;
                    _this3.status = "error";
                    _this3.scheduleRender(false);
                    // This needs to execute last because it throws the error.
                    _this3.emit("error", error);
                });
                this.mainHelper = mainHelper;
                this.middleware.forEach(function(_ref5) {
                    var instance = _ref5.instance;
                    instance.subscribe();
                });
                this.mainIndex.init({
                    instantSearchInstance: this,
                    parent: null,
                    uiState: this._initialUiState
                });
                if (this._initialResults) {
                    (0, _indexJs1.hydrateSearchClient)(this.client, this._initialResults);
                    var originalScheduleSearch = this.scheduleSearch;
                    // We don't schedule a first search when initial results are provided
                    // because we already have the results to render. This skips the initial
                    // network request on the browser on `start`.
                    this.scheduleSearch = (0, _indexJs1.defer)((0, _indexJs1.noop));
                    // We also skip the initial network request when widgets are dynamically
                    // added in the first tick (that's the case in all the framework-based flavors).
                    // When we add a widget to `index`, it calls `scheduleSearch`. We can rely
                    // on our `defer` util to restore the original `scheduleSearch` value once
                    // widgets are added to hook back to the regular lifecycle.
                    (0, _indexJs1.defer)(function() {
                        _this3.scheduleSearch = originalScheduleSearch;
                    })();
                } else if (this.mainIndex.getWidgets().length > 0) this.scheduleSearch();
                // Keep the previous reference for legacy purpose, some pattern use
                // the direct Helper access `search.helper` (e.g multi-index).
                this.helper = this.mainIndex.getHelper();
                // track we started the search if we add more widgets,
                // to init them directly after add
                this.started = true;
                this.middleware.forEach(function(_ref6) {
                    var instance = _ref6.instance;
                    instance.started();
                });
                // This is the automatic Insights middleware,
                // added when `insights` is unset and the initial results possess `queryID`.
                // Any user-provided middleware will be added later and override this one.
                if (typeof this._insights === "undefined") mainHelper.derivedHelpers[0].once("result", function() {
                    var hasAutomaticInsights = _this3.mainIndex.getScopedResults().some(function(_ref7) {
                        var results = _ref7.results;
                        return results === null || results === void 0 ? void 0 : results._automaticInsights;
                    });
                    if (hasAutomaticInsights) _this3.use((0, _createInsightsMiddlewareJs.createInsightsMiddleware)({
                        $$internal: true,
                        $$automatic: true
                    }));
                });
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this$mainHelper2;
                this.scheduleSearch.cancel();
                this.scheduleRender.cancel();
                clearTimeout(this._searchStalledTimer);
                this.removeWidgets(this.mainIndex.getWidgets());
                this.mainIndex.dispose();
                // You can not start an instance two times, therefore a disposed instance
                // needs to set started as false otherwise this can not be restarted at a
                // later point.
                this.started = false;
                // The helper needs to be reset to perform the next search from a fresh state.
                // If not reset, it would use the state stored before calling `dispose()`.
                this.removeAllListeners();
                (_this$mainHelper2 = this.mainHelper) === null || _this$mainHelper2 === void 0 || _this$mainHelper2.removeAllListeners();
                this.mainHelper = null;
                this.helper = null;
                this.middleware.forEach(function(_ref8) {
                    var instance = _ref8.instance;
                    instance.unsubscribe();
                });
            }
        },
        {
            key: "scheduleStalledRender",
            value: function scheduleStalledRender() {
                var _this4 = this;
                if (!this._searchStalledTimer) this._searchStalledTimer = setTimeout(function() {
                    _this4.status = "stalled";
                    _this4.scheduleRender();
                }, this._stalledSearchDelay);
            }
        },
        {
            key: "setUiState",
            value: function setUiState(uiState) {
                var _this5 = this;
                var callOnStateChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                if (!this.mainHelper) throw new Error(withUsage("The `start` method needs to be called before `setUiState`."));
                // We refresh the index UI state to update the local UI state that the
                // main index passes to the function form of `setUiState`.
                this.mainIndex.refreshUiState();
                var nextUiState = typeof uiState === "function" ? uiState(this.mainIndex.getWidgetUiState({})) : uiState;
                if (this.onStateChange && callOnStateChange) this.onStateChange({
                    uiState: nextUiState,
                    setUiState: function setUiState(finalUiState) {
                        (0, _indexJs1.setIndexHelperState)(typeof finalUiState === "function" ? finalUiState(nextUiState) : finalUiState, _this5.mainIndex);
                        _this5.scheduleSearch();
                        _this5.onInternalStateChange();
                    }
                });
                else {
                    (0, _indexJs1.setIndexHelperState)(nextUiState, this.mainIndex);
                    this.scheduleSearch();
                    this.onInternalStateChange();
                }
            }
        },
        {
            key: "getUiState",
            value: function getUiState() {
                if (this.started) // We refresh the index UI state to make sure changes from `refine` are taken in account
                this.mainIndex.refreshUiState();
                return this.mainIndex.getWidgetUiState({});
            }
        },
        {
            key: "createURL",
            value: function createURL() {
                var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!this.started) throw new Error(withUsage("The `start` method needs to be called before `createURL`."));
                return this._createURL(nextState);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.mainHelper) throw new Error(withUsage("The `start` method needs to be called before `refresh`."));
                this.mainHelper.clearCache().search();
            }
        }
    ]);
    return InstantSearch;
}((0, _eventsDefault.default));
exports.default = InstantSearch;

},{"@algolia/events":"euNDO","algoliasearch-helper":"jGqjt","../middlewares/createInsightsMiddleware.js":"bQz4Y","../middlewares/createMetadataMiddleware.js":"lOLJd","../middlewares/createRouterMiddleware.js":"4mKEu","../widgets/index/index.js":"kdZTz","./createHelpers.js":"8IHo3","./utils/index.js":"etVYs","./version.js":"hkkLK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euNDO":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
// EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {};
    // If there is no 'error' event listener then throw.
    if (type === "error") {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events) this._events = {};
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === "function") // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {};
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === "function";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"jGqjt":[function(require,module,exports) {
"use strict";
var AlgoliaSearchHelper = require("1b1fdf9690fc1c7d");
var SearchParameters = require("a770951d729582f6");
var SearchResults = require("35d5086d921a2a44");
/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper} The helper instance
 */ function algoliasearchHelper(client, index, opts) {
    return new AlgoliaSearchHelper(client, index, opts);
}
/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */ algoliasearchHelper.version = require("3d3cb5e4c53f4704");
/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */ algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */ algoliasearchHelper.SearchParameters = SearchParameters;
/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */ algoliasearchHelper.SearchResults = SearchResults;
module.exports = algoliasearchHelper;

},{"1b1fdf9690fc1c7d":"jewxp","a770951d729582f6":"dQfwH","35d5086d921a2a44":"lUGU6","3d3cb5e4c53f4704":"cs17k"}],"jewxp":[function(require,module,exports) {
"use strict";
var EventEmitter = require("896062abbc9a9020");
var DerivedHelper = require("b3e184b01ad29979");
var escapeFacetValue = require("733825284750738b").escapeFacetValue;
var inherits = require("56f20ea85e6e7b72");
var merge = require("5367936649cc4be2");
var objectHasKeys = require("e63a15a18c80ab32");
var omit = require("4b0b6c7ecbf87056");
var requestBuilder = require("27fe8085dc300d55");
var SearchParameters = require("fe8e436295a0c343");
var SearchResults = require("bd55396c0e591d9d");
var version = require("34567ff0067dd504");
/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */ /**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */ /**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */ /**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */ /**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */ /**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */ /**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */ /**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */ function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === "function") client.addAlgoliaAgent("JS Helper (" + version + ")");
    this.setClient(client);
    var opts = options || {};
    opts.index = index;
    this.state = SearchParameters.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
}
inherits(AlgoliaSearchHelper, EventEmitter);
/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */ AlgoliaSearchHelper.prototype.search = function() {
    this._search({
        onlyWithDerivedHelpers: false
    });
    return this;
};
AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
    this._search({
        onlyWithDerivedHelpers: true
    });
    return this;
};
/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */ AlgoliaSearchHelper.prototype.getQuery = function() {
    var state = this.state;
    return requestBuilder._getHitsSearchParams(state);
};
/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [cb] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */ AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
    var tempState = !options ? this.state : this.state.setQueryParameters(options);
    var queries = requestBuilder._getQueries(tempState.index, tempState);
    // eslint-disable-next-line consistent-this
    var self = this;
    this._currentNbQueries++;
    this.emit("searchOnce", {
        state: tempState
    });
    if (cb) {
        this.client.search(queries).then(function(content) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
            cb(null, new SearchResults(tempState, content.results), tempState);
        }).catch(function(err) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
            cb(err, null, tempState);
        });
        return undefined;
    }
    return this.client.search(queries).then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
        };
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        throw e;
    });
};
/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 * @deprecated answers is deprecated and will be replaced with new initiatives
 */ AlgoliaSearchHelper.prototype.findAnswers = function(options) {
    // eslint-disable-next-line no-console
    console.warn("[algoliasearch-helper] answers is no longer supported");
    var state = this.state;
    var derivedHelper = this.derivedHelpers[0];
    if (!derivedHelper) return Promise.resolve([]);
    var derivedState = derivedHelper.getModifiedState(state);
    var data = merge({
        attributesForPrediction: options.attributesForPrediction,
        nbHits: options.nbHits
    }, {
        params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            "attributesToSnippet",
            "hitsPerPage",
            "restrictSearchableAttributes",
            "snippetEllipsisText"
        ])
    });
    var errorMessage = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
    if (typeof this.client.initIndex !== "function") throw new Error(errorMessage);
    var index = this.client.initIndex(derivedState.index);
    if (typeof index.findAnswers !== "function") throw new Error(errorMessage);
    return index.findAnswers(derivedState.query, options.queryLanguages, data);
};
/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */ /**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */ /**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */ AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === "function";
    var clientHasInitIndex = typeof this.client.initIndex === "function";
    if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== "function") throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
    var state = this.state.setQueryParameters(userState || {});
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
    this._currentNbQueries++;
    // eslint-disable-next-line consistent-this
    var self = this;
    var searchForFacetValuesPromise;
    // newer algoliasearch ^3.27.1 - ~4.0.0
    if (clientHasSFFV) searchForFacetValuesPromise = this.client.searchForFacetValues([
        {
            indexName: state.index,
            params: algoliaQuery
        }
    ]);
    else if (clientHasInitIndex) searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
    else {
        // @MAJOR only use client.search
        delete algoliaQuery.facetName;
        searchForFacetValuesPromise = this.client.search([
            {
                type: "facet",
                facet: facet,
                indexName: state.index,
                params: algoliaQuery
            }
        ]).then(function processResponse(response) {
            return response.results[0];
        });
    }
    this.emit("searchForFacetValues", {
        state: state,
        facet: facet,
        query: query
    });
    return searchForFacetValuesPromise.then(function addIsRefined(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        content = Array.isArray(content) ? content[0] : content;
        content.facetHits.forEach(function(f) {
            f.escapedValue = escapeFacetValue(f.value);
            f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
        });
        return content;
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        throw e;
    });
};
/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setQuery = function(q) {
    this._change({
        state: this.state.resetPage().setQuery(q),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */ AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
    this._change({
        state: this.state.resetPage().clearRefinements(name),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.clearTags = function() {
    this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */ AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, path) {
    this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(facet, path),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addRefine = function() {
    return this.addFacetRefinement.apply(this, arguments);
};
/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().addExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */ AlgoliaSearchHelper.prototype.addExclude = function() {
    return this.addFacetExclusion.apply(this, arguments);
};
/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addTag = function(tag) {
    this._change({
        state: this.state.resetPage().addTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
    this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeRefine = function() {
    return this.removeFacetRefinement.apply(this, arguments);
};
/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */ AlgoliaSearchHelper.prototype.removeExclude = function() {
    return this.removeFacetExclusion.apply(this, arguments);
};
/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeTag = function(tag) {
    this._change({
        state: this.state.resetPage().removeTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */ AlgoliaSearchHelper.prototype.toggleExclude = function() {
    return this.toggleFacetExclusion.apply(this, arguments);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
    return this.toggleFacetRefinement(facet, value);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefine = function() {
    return this.toggleFacetRefinement.apply(this, arguments);
};
/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
    this._change({
        state: this.state.resetPage().toggleTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */ AlgoliaSearchHelper.prototype.nextPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
};
/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */ AlgoliaSearchHelper.prototype.previousPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
};
/**
 * @private
 * @param {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @chainable
 * @fires change
 */ function setCurrentPage(page) {
    if (page < 0) throw new Error("Page requested below 0.");
    this._change({
        state: this.state.setPage(page),
        isPageReset: false
    });
    return this;
}
/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setIndex = function(name) {
    this._change({
        state: this.state.resetPage().setIndex(name),
        isPageReset: true
    });
    return this;
};
/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */ AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
    this._change({
        state: this.state.resetPage().setQueryParameter(parameter, value),
        isPageReset: true
    });
    return this;
};
/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setState = function(newState) {
    this._change({
        state: SearchParameters.make(newState),
        isPageReset: false
    });
    return this;
};
/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */ AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
    this.state = new SearchParameters(newState);
    return this;
};
/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */ AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
    if (objectHasKeys(this.state.getNumericRefinements(attribute))) return true;
    else if (this.state.isConjunctiveFacet(attribute)) return this.state.isFacetRefined(attribute);
    else if (this.state.isDisjunctiveFacet(attribute)) return this.state.isDisjunctiveFacetRefined(attribute);
    else if (this.state.isHierarchicalFacet(attribute)) return this.state.isHierarchicalFacetRefined(attribute);
    // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement
    return false;
};
/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
 * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */ AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
    return this.state.isExcludeRefined(facet, value);
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */ AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
};
/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean} true if the tag is currently refined
 */ AlgoliaSearchHelper.prototype.hasTag = function(tag) {
    return this.state.isTagRefined(tag);
};
// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */ AlgoliaSearchHelper.prototype.isTagRefined = function() {
    return this.hasTagRefinements.apply(this, arguments);
};
/**
 * Get the name of the currently used index.
 * @return {string} name of the index
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */ AlgoliaSearchHelper.prototype.getIndex = function() {
    return this.state.index;
};
function getCurrentPage() {
    return this.state.page;
}
/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */ AlgoliaSearchHelper.prototype.getTags = function() {
    return this.state.tagRefinements;
};
/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */ AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
    var refinements = [];
    if (this.state.isConjunctiveFacet(facetName)) {
        var conjRefinements = this.state.getConjunctiveRefinements(facetName);
        conjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "conjunctive"
            });
        });
        var excludeRefinements = this.state.getExcludeRefinements(facetName);
        excludeRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "exclude"
            });
        });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
        var disjunctiveRefinements = this.state.getDisjunctiveRefinements(facetName);
        disjunctiveRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "disjunctive"
            });
        });
    }
    var numericRefinements = this.state.getNumericRefinements(facetName);
    Object.keys(numericRefinements).forEach(function(operator) {
        var value = numericRefinements[operator];
        refinements.push({
            value: value,
            operator: operator,
            type: "numeric"
        });
    });
    return refinements;
};
/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */ AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
    return this.state.getNumericRefinement(attribute, operator);
};
/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */ AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
};
// /////////// PRIVATE
/**
 * Perform the underlying queries
 * @private
 * @param {object} options options for the query
 * @param {boolean} [options.onlyWithDerivedHelpers=false] if true, only the derived helpers will be queried
 * @return {undefined} does not return anything
 * @fires search
 * @fires result
 * @fires error
 */ AlgoliaSearchHelper.prototype._search = function(options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];
    if (!options.onlyWithDerivedHelpers) {
        mainQueries = requestBuilder._getQueries(state.index, state);
        states.push({
            state: state,
            queriesCount: mainQueries.length,
            helper: this
        });
        this.emit("search", {
            state: state,
            results: this.lastResults
        });
    }
    var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
        var derivedState = derivedHelper.getModifiedState(state);
        var derivedStateQueries = derivedState.index ? requestBuilder._getQueries(derivedState.index, derivedState) : [];
        states.push({
            state: derivedState,
            queriesCount: derivedStateQueries.length,
            helper: derivedHelper
        });
        derivedHelper.emit("search", {
            state: derivedState,
            results: derivedHelper.lastResults
        });
        return derivedStateQueries;
    });
    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
    var queryId = this._queryId++;
    this._currentNbQueries++;
    if (!queries.length) return Promise.resolve({
        results: []
    }).then(this._dispatchAlgoliaResponse.bind(this, states, queryId));
    try {
        this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
        // If we reach this part, we're in an internal error state
        this.emit("error", {
            error: error
        });
    }
    return undefined;
};
/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>} states state used to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */ AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
    // @TODO remove the number of outdated queries discarded instead of just one
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    if (this._currentNbQueries === 0) this.emit("searchQueueEmpty");
    var results = content.results.slice();
    states.forEach(function(s) {
        var state = s.state;
        var queriesCount = s.queriesCount;
        var helper = s.helper;
        var specificResults = results.splice(0, queriesCount);
        if (!state.index) {
            helper.emit("result", {
                results: null,
                state: state
            });
            return;
        }
        helper.lastResults = new SearchResults(state, specificResults);
        helper.emit("result", {
            results: helper.lastResults,
            state: state
        });
    });
};
AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    this.emit("error", {
        error: error
    });
    if (this._currentNbQueries === 0) this.emit("searchQueueEmpty");
};
AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
    return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};
/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean} true if there are refinements on this attribute
 */ AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
    return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};
AlgoliaSearchHelper.prototype._change = function(event) {
    var state = event.state;
    var isPageReset = event.isPageReset;
    if (state !== this.state) {
        this.state = state;
        this.emit("change", {
            state: this.state,
            results: this.lastResults,
            isPageReset: isPageReset
        });
    }
};
/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */ AlgoliaSearchHelper.prototype.clearCache = function() {
    if (this.client.clearCache) this.client.clearCache();
    return this;
};
/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper} Method is chainable, it returns itself
 */ AlgoliaSearchHelper.prototype.setClient = function(newClient) {
    if (this.client === newClient) return this;
    if (typeof newClient.addAlgoliaAgent === "function") newClient.addAlgoliaAgent("JS Helper (" + version + ")");
    this.client = newClient;
    return this;
};
/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch} the currently used client
 */ AlgoliaSearchHelper.prototype.getClient = function() {
    return this.client;
};
/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper} a new DerivedHelper
 */ AlgoliaSearchHelper.prototype.derive = function(fn) {
    var derivedHelper = new DerivedHelper(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
};
/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @param  {DerivedHelper} derivedHelper the derived helper to detach
 * @return {undefined} nothing is returned
 * @throws Error
 */ AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error("Derived helper already detached");
    this.derivedHelpers.splice(pos, 1);
};
/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */ AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
    return this._currentNbQueries > 0;
};
/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */ /**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */ module.exports = AlgoliaSearchHelper;

},{"896062abbc9a9020":"euNDO","b3e184b01ad29979":"6UDS7","733825284750738b":"3r1Qc","56f20ea85e6e7b72":"a0E30","5367936649cc4be2":"eGyc5","e63a15a18c80ab32":"alqSr","4b0b6c7ecbf87056":"l3IzD","27fe8085dc300d55":"6rfof","fe8e436295a0c343":"dQfwH","bd55396c0e591d9d":"lUGU6","34567ff0067dd504":"cs17k"}],"6UDS7":[function(require,module,exports) {
"use strict";
var EventEmitter = require("998484121f087e5e");
var inherits = require("4e066029e42aa872");
/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 * @param {AlgoliaSearchHelper} mainHelper the main helper
 * @param {function} fn the function to create the derived state
 */ function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
}
inherits(DerivedHelper, EventEmitter);
/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */ DerivedHelper.prototype.detach = function() {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
};
DerivedHelper.prototype.getModifiedState = function(parameters) {
    return this.fn(parameters);
};
module.exports = DerivedHelper;

},{"998484121f087e5e":"euNDO","4e066029e42aa872":"a0E30"}],"a0E30":[function(require,module,exports) {
"use strict";
function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}
module.exports = inherits;

},{}],"3r1Qc":[function(require,module,exports) {
"use strict";
/**
 * Replaces a leading - with \-
 * @private
 * @param {any} value the facet value to replace
 * @returns {any} the escaped facet value or the value if it was not a string
 */ function escapeFacetValue(value) {
    if (typeof value !== "string") return value;
    return String(value).replace(/^-/, "\\-");
}
/**
 * Replaces a leading \- with -
 * @private
 * @param {any} value the escaped facet value
 * @returns {any} the unescaped facet value or the value if it was not a string
 */ function unescapeFacetValue(value) {
    if (typeof value !== "string") return value;
    return value.replace(/^\\-/, "-");
}
module.exports = {
    escapeFacetValue: escapeFacetValue,
    unescapeFacetValue: unescapeFacetValue
};

},{}],"eGyc5":[function(require,module,exports) {
"use strict";
function clone(value) {
    if (typeof value === "object" && value !== null) return _merge(Array.isArray(value) ? [] : {}, value);
    return value;
}
function isObjectOrArrayOrFunction(value) {
    return typeof value === "function" || Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]";
}
function _merge(target, source) {
    if (target === source) return target;
    // eslint-disable-next-line no-restricted-syntax
    for(var key in source){
        if (!Object.prototype.hasOwnProperty.call(source, key) || key === "__proto__" || key === "constructor") continue;
        var sourceVal = source[key];
        var targetVal = target[key];
        if (typeof targetVal !== "undefined" && typeof sourceVal === "undefined") continue;
        if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) target[key] = _merge(targetVal, sourceVal);
        else target[key] = clone(sourceVal);
    }
    return target;
}
/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} target The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */ function merge(target) {
    if (!isObjectOrArrayOrFunction(target)) target = {};
    for(var i = 1, l = arguments.length; i < l; i++){
        var source = arguments[i];
        if (isObjectOrArrayOrFunction(source)) _merge(target, source);
    }
    return target;
}
module.exports = merge;

},{}],"alqSr":[function(require,module,exports) {
"use strict";
function objectHasKeys(obj) {
    return obj && Object.keys(obj).length > 0;
}
module.exports = objectHasKeys;

},{}],"l3IzD":[function(require,module,exports) {
"use strict";
// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source === null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key;
    var i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        // eslint-disable-next-line no-continue
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose;

},{}],"6rfof":[function(require,module,exports) {
"use strict";
var merge = require("beb35508a19c9c94");
function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function(acc, curr) {
        acc[curr] = obj[curr];
        return acc;
    }, {});
}
var requestBuilder = {
    /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @param  {string} index The name of the index
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object[]} The queries
   */ _getQueries: function getQueries(index, state) {
        var queries = [];
        // One query for the hits
        queries.push({
            indexName: index,
            params: requestBuilder._getHitsSearchParams(state)
        });
        // One for each disjunctive facets
        state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
            queries.push({
                indexName: index,
                params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
            });
        });
        // More to get the parent levels of the hierarchical facets when refined
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            // If we are deeper than level 0 (starting from `beer > IPA`)
            // we want to get all parent values
            if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
                // We generate a map of the filters we will use for our facet values queries
                var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
                    return map.concat({
                        attribute: hierarchicalFacet.attributes[level],
                        value: level === 0 ? segment : [
                            map[map.length - 1].value,
                            segment
                        ].join(separator)
                    });
                }, []);
                filtersMap.forEach(function(filter, level) {
                    var params = requestBuilder._getDisjunctiveFacetSearchParams(state, filter.attribute, level === 0);
                    // Keep facet filters unrelated to current hierarchical attributes
                    function hasHierarchicalFacetFilter(value) {
                        return hierarchicalFacet.attributes.some(function(attribute) {
                            return attribute === value.split(":")[0];
                        });
                    }
                    var filteredFacetFilters = (params.facetFilters || []).reduce(function(acc, facetFilter) {
                        if (Array.isArray(facetFilter)) {
                            var filtered = facetFilter.filter(function(filterValue) {
                                return !hasHierarchicalFacetFilter(filterValue);
                            });
                            if (filtered.length > 0) acc.push(filtered);
                        }
                        if (typeof facetFilter === "string" && !hasHierarchicalFacetFilter(facetFilter)) acc.push(facetFilter);
                        return acc;
                    }, []);
                    var parent = filtersMap[level - 1];
                    if (level > 0) params.facetFilters = filteredFacetFilters.concat(parent.attribute + ":" + parent.value);
                    else params.facetFilters = filteredFacetFilters.length > 0 ? filteredFacetFilters : undefined;
                    queries.push({
                        indexName: index,
                        params: params
                    });
                });
            }
        });
        return queries;
    },
    /**
   * Build search parameters used to fetch hits
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @return {object.<string, any>} The search parameters for hits
   */ _getHitsSearchParams: function(state) {
        var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state)).sort();
        var facetFilters = requestBuilder._getFacetFilters(state);
        var numericFilters = requestBuilder._getNumericFilters(state);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            facets: facets.indexOf("*") > -1 ? [
                "*"
            ] : facets,
            tagFilters: tagFilters
        };
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
    },
    /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object} The search parameters for a disjunctive facet
   */ _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
        var numericFilters = requestBuilder._getNumericFilters(state, facet);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            hitsPerPage: 0,
            page: 0,
            analytics: false,
            clickAnalytics: false
        };
        if (tagFilters.length > 0) additionalParams.tagFilters = tagFilters;
        var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
        if (hierarchicalFacet) additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
        else additionalParams.facets = facet;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
    },
    /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */ _getNumericFilters: function(state, facetName) {
        if (state.numericFilters) return state.numericFilters;
        var numericFilters = [];
        Object.keys(state.numericRefinements).forEach(function(attribute) {
            var operators = state.numericRefinements[attribute] || {};
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                if (facetName !== attribute) values.forEach(function(value) {
                    if (Array.isArray(value)) {
                        var vs = value.map(function(v) {
                            return attribute + operator + v;
                        });
                        numericFilters.push(vs);
                    } else numericFilters.push(attribute + operator + value);
                });
            });
        });
        return numericFilters;
    },
    /**
   * Return the tags filters depending on which format is used, either tagFilters or tagRefinements
   * @private
   * @param {SearchParameters} state the state from which to get the filters
   * @return {string} Tag filters in a single string
   */ _getTagFilters: function(state) {
        if (state.tagFilters) return state.tagFilters;
        return state.tagRefinements.join(",");
    },
    /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {SearchParameters} state The state from which to get the queries
   * @param  {string} [facet] if set, the current disjunctive facet
   * @param  {boolean} [hierarchicalRootLevel] ?? FIXME
   * @return {array.<string>} The facet filters in the algolia format
   */ _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = [];
        var facetsRefinements = state.facetsRefinements || {};
        Object.keys(facetsRefinements).sort().forEach(function(facetName) {
            var facetValues = facetsRefinements[facetName] || [];
            facetValues.sort().forEach(function(facetValue) {
                facetFilters.push(facetName + ":" + facetValue);
            });
        });
        var facetsExcludes = state.facetsExcludes || {};
        Object.keys(facetsExcludes).sort().forEach(function(facetName) {
            var facetValues = facetsExcludes[facetName] || [];
            facetValues.sort().forEach(function(facetValue) {
                facetFilters.push(facetName + ":-" + facetValue);
            });
        });
        var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
        Object.keys(disjunctiveFacetsRefinements).sort().forEach(function(facetName) {
            var facetValues = disjunctiveFacetsRefinements[facetName] || [];
            if (facetName === facet || !facetValues || facetValues.length === 0) return;
            var orFilters = [];
            facetValues.sort().forEach(function(facetValue) {
                orFilters.push(facetName + ":" + facetValue);
            });
            facetFilters.push(orFilters);
        });
        var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
        Object.keys(hierarchicalFacetsRefinements).sort().forEach(function(facetName) {
            var facetValues = hierarchicalFacetsRefinements[facetName] || [];
            var facetValue = facetValues[0];
            if (facetValue === undefined) return;
            var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeToRefine;
            var attributesIndex;
            // we ask for parent facet values only when the `facet` is the current hierarchical facet
            if (facet === facetName) {
                // if we are at the root level already, no need to ask for facet values, we get them from
                // the hits query
                if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) return;
                if (!rootPath) {
                    attributesIndex = facetValue.split(separator).length - 2;
                    facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
                } else {
                    attributesIndex = rootPath.split(separator).length - 1;
                    facetValue = rootPath;
                }
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            } else {
                attributesIndex = facetValue.split(separator).length - 1;
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            }
            if (attributeToRefine) facetFilters.push([
                attributeToRefine + ":" + facetValue
            ]);
        });
        return facetFilters;
    },
    _getHitsHierarchicalFacetsAttributes: function(state) {
        var out = [];
        return state.hierarchicalFacets.reduce(// ask for as much levels as there's hierarchical refinements
        function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
            // if no refinement, ask for root level
            if (!hierarchicalRefinement) {
                allAttributes.push(hierarchicalFacet.attributes[0]);
                return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
        }, out);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        if (rootLevel === true) {
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeIndex = 0;
            if (rootPath) attributeIndex = rootPath.split(separator).length;
            return [
                hierarchicalFacet.attributes[attributeIndex]
            ];
        }
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || "";
        // if refinement is 'beers > IPA > Flying dog',
        // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)
        var parentLevel = hierarchicalRefinement.split(separator).length - 1;
        return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },
    getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
        var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
        var searchForFacetSearchParameters = {
            facetQuery: query,
            facetName: facetName
        };
        if (typeof maxFacetHits === "number") searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
        return sortObject(merge({}, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters));
    }
};
module.exports = requestBuilder;

},{"beb35508a19c9c94":"eGyc5"}],"dQfwH":[function(require,module,exports) {
"use strict";
var defaultsPure = require("95fd382c7fb33828");
var find = require("18c24957c50b6bbe");
var intersection = require("a5ce8ba05df13461");
var merge = require("90e7fadc1f54c11");
var objectHasKeys = require("35baad6945c6f2e7");
var omit = require("16532e4deb890661");
var valToNumber = require("24560ede3ee1986");
var isValidUserToken = require("cbae9a0e9c7cbd4c");
var RefinementList = require("7241c7b9ea228771");
/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 * @param {any} a numeric refinement value
 * @param {any} b numeric refinement value
 * @return {boolean} true if the values are equal
 */ function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
    });
    return a === b;
}
/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */ function findArray(array, searchedValue) {
    return find(array, function(currentValue) {
        return isEqualNumericRefinement(currentValue, searchedValue);
    });
}
/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */ /**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */ /**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */ function SearchParameters(newParameters) {
    var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
    if (params.userToken !== undefined && !isValidUserToken(params.userToken)) // eslint-disable-next-line no-console
    console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}");
    /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.facets = params.facets || [];
    /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */ this.hierarchicalFacets = params.hierarchicalFacets || [];
    // Refinements
    /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsRefinements = params.facetsRefinements || {};
    /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsExcludes = params.facetsExcludes || {};
    /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
    /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */ this.numericRefinements = params.numericRefinements || {};
    /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */ this.tagRefinements = params.tagRefinements || [];
    /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
    // eslint-disable-next-line consistent-this
    var self = this;
    Object.keys(params).forEach(function(paramName) {
        var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
        var isValueDefined = params[paramName] !== undefined;
        if (!isKeyKnown && isValueDefined) self[paramName] = params[paramName];
    });
}
/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */ SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */ SearchParameters._parseNumbers = function(partialState) {
    // Do not parse numbers again in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;
    var numbers = {};
    var numberKeys = [
        "aroundPrecision",
        "aroundRadius",
        "getRankingInfo",
        "minWordSizefor2Typos",
        "minWordSizefor1Typo",
        "page",
        "maxValuesPerFacet",
        "distinct",
        "minimumAroundRadius",
        "hitsPerPage",
        "minProximity"
    ];
    numberKeys.forEach(function(k) {
        var value = partialState[k];
        if (typeof value === "string") {
            var parsedValue = parseFloat(value);
            // global isNaN is ok to use here, value is only number or NaN
            numbers[k] = isNaN(parsedValue) ? value : parsedValue;
        }
    });
    // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles
    if (Array.isArray(partialState.insideBoundingBox)) numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
        if (Array.isArray(geoRect)) return geoRect.map(function(value) {
            return parseFloat(value);
        });
        return geoRect;
    });
    if (partialState.numericRefinements) {
        var numericRefinements = {};
        Object.keys(partialState.numericRefinements).forEach(function(attribute) {
            var operators = partialState.numericRefinements[attribute] || {};
            numericRefinements[attribute] = {};
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator];
                var parsedValues = values.map(function(v) {
                    if (Array.isArray(v)) return v.map(function(vPrime) {
                        if (typeof vPrime === "string") return parseFloat(vPrime);
                        return vPrime;
                    });
                    else if (typeof v === "string") return parseFloat(v);
                    return v;
                });
                numericRefinements[attribute][operator] = parsedValues;
            });
        });
        numbers.numericRefinements = numericRefinements;
    }
    return merge({}, partialState, numbers);
};
/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */ SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);
    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function(facet) {
        if (facet.rootPath) {
            var currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) instance = instance.clearRefinements(facet.name);
            // get it again in case it has been cleared
            currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length === 0) instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
        }
    });
    return instance;
};
/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */ SearchParameters.validate = function(currentState, parameters) {
    var params = parameters || {};
    if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) return new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.");
    if (currentState.tagRefinements.length > 0 && params.tagFilters) return new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.");
    if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    return null;
};
SearchParameters.prototype = {
    constructor: SearchParameters,
    /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters} new instance with filters cleared
   */ clearRefinements: function clearRefinements(attribute) {
        var patch = {
            numericRefinements: this._clearNumericRefinements(attribute),
            facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, "conjunctiveFacet"),
            facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, "exclude"),
            disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, "disjunctiveFacet"),
            hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, "hierarchicalFacet")
        };
        if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) return this;
        return this.setQueryParameters(patch);
    },
    /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters} new instance with tags cleared
   */ clearTags: function clearTags() {
        if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
        return this.setQueryParameters({
            tagFilters: undefined,
            tagRefinements: []
        });
    },
    /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters} new instance
   */ setIndex: function setIndex(index) {
        if (index === this.index) return this;
        return this.setQueryParameters({
            index: index
        });
    },
    /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters} new instance
   */ setQuery: function setQuery(newQuery) {
        if (newQuery === this.query) return this;
        return this.setQueryParameters({
            query: newQuery
        });
    },
    /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters} new instance
   */ setPage: function setPage(newPage) {
        if (newPage === this.page) return this;
        return this.setQueryParameters({
            page: newPage
        });
    },
    /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters} new instance
   */ setFacets: function setFacets(facets) {
        return this.setQueryParameters({
            facets: facets
        });
    },
    /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters} new instance
   */ setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
        return this.setQueryParameters({
            disjunctiveFacets: facets
        });
    },
    /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters} new instance
   */ setHitsPerPage: function setHitsPerPage(n) {
        if (this.hitsPerPage === n) return this;
        return this.setQueryParameters({
            hitsPerPage: n
        });
    },
    /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters} new instance
   */ setTypoTolerance: function setTypoTolerance(typoTolerance) {
        if (this.typoTolerance === typoTolerance) return this;
        return this.setQueryParameters({
            typoTolerance: typoTolerance
        });
    },
    /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters} new instance
   * @example
   * // for price = 50 or 40
   * state.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * state.addNumericRefinement('size', '=', 38);
   * state.addNumericRefinement('size', '=', 40);
   */ addNumericRefinement: function(attribute, operator, value) {
        var val = valToNumber(value);
        if (this.isNumericRefined(attribute, operator, val)) return this;
        var mod = merge({}, this.numericRefinements);
        mod[attribute] = merge({}, mod[attribute]);
        if (mod[attribute][operator]) {
            // Array copy
            mod[attribute][operator] = mod[attribute][operator].slice();
            // Add the element. Concat can't be used here because value can be an array.
            mod[attribute][operator].push(val);
        } else mod[attribute][operator] = [
            val
        ];
        return this.setQueryParameters({
            numericRefinements: mod
        });
    },
    /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getConjunctiveRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsRefinements[facetName] || [];
    },
    /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getDisjunctiveRefinements: function(facetName) {
        if (!this.isDisjunctiveFacet(facetName)) return [];
        return this.disjunctiveFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getHierarchicalRefinement: function(facetName) {
        // we send an array but we currently do not support multiple
        // hierarchicalRefinements for a hierarchicalFacet
        return this.hierarchicalFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getExcludeRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsExcludes[facetName] || [];
    },
    /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters} new instance
   */ removeNumericRefinement: function(attribute, operator, number) {
        var paramValue = number;
        if (paramValue !== undefined) {
            if (!this.isNumericRefined(attribute, operator, paramValue)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
                })
            });
        } else if (operator !== undefined) {
            if (!this.isNumericRefined(attribute, operator)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator;
                })
            });
        }
        if (!this.isNumericRefined(attribute)) return this;
        return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
                return key === attribute;
            })
        });
    },
    /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */ getNumericRefinements: function(facetName) {
        return this.numericRefinements[facetName] || {};
    },
    /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */ getNumericRefinement: function(attribute, operator) {
        return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
    },
    /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>} new numeric refinements
   */ _clearNumericRefinements: function _clearNumericRefinements(attribute) {
        if (attribute === undefined) {
            if (!objectHasKeys(this.numericRefinements)) return this.numericRefinements;
            return {};
        } else if (typeof attribute === "string") return omit(this.numericRefinements, [
            attribute
        ]);
        else if (typeof attribute === "function") {
            var hasChanged = false;
            var numericRefinements = this.numericRefinements;
            var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
                var operators = numericRefinements[key];
                var operatorList = {};
                operators = operators || {};
                Object.keys(operators).forEach(function(operator) {
                    var values = operators[operator] || [];
                    var outValues = [];
                    values.forEach(function(value) {
                        var predicateResult = attribute({
                            val: value,
                            op: operator
                        }, key, "numeric");
                        if (!predicateResult) outValues.push(value);
                    });
                    if (outValues.length !== values.length) hasChanged = true;
                    operatorList[operator] = outValues;
                });
                memo[key] = operatorList;
                return memo;
            }, {});
            if (hasChanged) return newNumericRefinements;
            return this.numericRefinements;
        }
        // We return nothing if the attribute is not undefined, a string or a function,
        // as it is not a valid value for a refinement
        return undefined;
    },
    /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters} new instance
   */ addFacet: function addFacet(facet) {
        if (this.isConjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            facets: this.facets.concat([
                facet
            ])
        });
    },
    /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters} new instance
   */ addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
        if (this.isDisjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.concat([
                facet
            ])
        });
    },
    /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters} new instance
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */ addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
        if (this.isHierarchicalFacet(hierarchicalFacet.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + hierarchicalFacet.name + "`");
        return this.setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.concat([
                hierarchicalFacet
            ])
        });
    },
    /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */ addFacetRefinement: function addFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */ addExcludeRefinement: function addExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters} new instance
   */ addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters} new instance
   */ addTagRefinement: function addTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.concat(tag)
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters} new instance
   */ removeFacet: function removeFacet(facet) {
        if (!this.isConjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            facets: this.facets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters} new instance
   */ removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
        if (!this.isDisjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters} new instance
   */ removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
        if (!this.isHierarchicalFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
                return f.name !== facet;
            })
        });
    },
    /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters} new instance
   */ removeFacetRefinement: function removeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */ removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters} new instance
   */ removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters} new instance
   */ removeTagRefinement: function removeTagRefinement(tag) {
        if (!this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.filter(function(t) {
                return t !== tag;
            })
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */ toggleRefinement: function toggleRefinement(facet, value) {
        return this.toggleFacetRefinement(facet, value);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters} new instance
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */ toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
        if (this.isHierarchicalFacet(facet)) return this.toggleHierarchicalFacetRefinement(facet, value);
        else if (this.isConjunctiveFacet(facet)) return this.toggleConjunctiveFacetRefinement(facet, value);
        else if (this.isDisjunctiveFacet(facet)) return this.toggleDisjunctiveFacetRefinement(facet, value);
        throw new Error("Cannot refine the undeclared facet " + facet + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */ toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
            facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */ toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
            facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */ toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters} new instance
   */ toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration");
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
        var mod = {};
        var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
        if (upOneOrMultipleLevel) {
            if (value.indexOf(separator) === -1) // go back to root level
            mod[facet] = [];
            else mod[facet] = [
                value.slice(0, value.lastIndexOf(separator))
            ];
        } else mod[facet] = [
            value
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */ addHierarchicalFacetRefinement: function(facet, path) {
        if (this.isHierarchicalFacetRefined(facet)) throw new Error(facet + " is already refined.");
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
        var mod = {};
        mod[facet] = [
            path
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */ removeHierarchicalFacetRefinement: function(facet) {
        if (!this.isHierarchicalFacetRefined(facet)) return this;
        var mod = {};
        mod[facet] = [];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters} new instance
   */ toggleTagRefinement: function toggleTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this.removeTagRefinement(tag);
        return this.addTagRefinement(tag);
    },
    /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a disjunctive facet
   */ isDisjunctiveFacet: function(facet) {
        return this.disjunctiveFacets.indexOf(facet) > -1;
    },
    /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean} true if facetName is a hierarchical facet
   */ isHierarchicalFacet: function(facetName) {
        return this.getHierarchicalFacetByName(facetName) !== undefined;
    },
    /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean} true if facet is a conjunctive facet
   */ isConjunctiveFacet: function(facet) {
        return this.facets.indexOf(facet) > -1;
    },
    /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isFacetRefined: function isFacetRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isExcludeRefined: function isExcludeRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */ isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean} true if the facet is refined
   */ isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
        if (!this.isHierarchicalFacet(facet)) return false;
        var refinements = this.getHierarchicalRefinement(facet);
        if (!value) return refinements.length > 0;
        return refinements.indexOf(value) !== -1;
    },
    /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */ isNumericRefined: function isNumericRefined(attribute, operator, value) {
        if (value === undefined && operator === undefined) return Boolean(this.numericRefinements[attribute]);
        var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;
        if (value === undefined || !isOperatorDefined) return isOperatorDefined;
        var parsedValue = valToNumber(value);
        var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
        return isOperatorDefined && isAttributeValueDefined;
    },
    /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean} true if tag is refined
   */ isTagRefined: function isTagRefined(tag) {
        return this.tagRefinements.indexOf(tag) !== -1;
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */ getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        // eslint-disable-next-line consistent-this
        var self = this;
        // attributes used for numeric filter can also be disjunctive
        var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self.numericRefinements[facet]).length > 0;
        }), this.disjunctiveFacets);
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
            return self.disjunctiveFacetsRefinements[facet].length > 0;
        }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets()).sort();
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]} returns the list of refinements
   */ getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        // eslint-disable-next-line consistent-this
        var self = this;
        return intersection(// enforce the order between the two arrays,
        // so that refinement name index === hierarchical facet index
        this.hierarchicalFacets.map(function(facet) {
            return facet.name;
        }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self.hierarchicalFacetsRefinements[facet].length > 0;
        })).sort();
    },
    /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]} returns the list of facets that are not refined
   */ getUnrefinedDisjunctiveFacets: function() {
        var refinedFacets = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function(f) {
            return refinedFacets.indexOf(f) === -1;
        });
    },
    managedParameters: [
        "index",
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "hierarchicalFacets",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacetsRefinements"
    ],
    getQueryParams: function getQueryParams() {
        var managedParameters = this.managedParameters;
        var queryParams = {};
        // eslint-disable-next-line consistent-this
        var self = this;
        Object.keys(this).forEach(function(paramName) {
            var paramValue = self[paramName];
            if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) queryParams[paramName] = paramValue;
        });
        return queryParams;
    },
    /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */ setQueryParameter: function setParameter(parameter, value) {
        if (this[parameter] === value) return this;
        var modification = {};
        modification[parameter] = value;
        return this.setQueryParameters(modification);
    },
    /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */ setQueryParameters: function setQueryParameters(params) {
        if (!params) return this;
        var error = SearchParameters.validate(this, params);
        if (error) throw error;
        // eslint-disable-next-line consistent-this
        var self = this;
        var nextWithNumbers = SearchParameters._parseNumbers(params);
        var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
            acc[key] = self[key];
            return acc;
        }, {});
        var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key) {
            var isPreviousValueDefined = previous[key] !== undefined;
            var isNextValueDefined = nextWithNumbers[key] !== undefined;
            if (isPreviousValueDefined && !isNextValueDefined) return omit(previous, [
                key
            ]);
            if (isNextValueDefined) previous[key] = nextWithNumbers[key];
            return previous;
        }, previousPlainObject);
        return new this.constructor(nextPlainObject);
    },
    /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */ resetPage: function() {
        if (this.page === undefined) return this;
        return this.setPage(0);
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
        return hierarchicalFacet.sortBy || [
            "isRefined:desc",
            "name:asc"
        ];
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
        return hierarchicalFacet.separator || " > ";
    },
    /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */ _getHierarchicalRootPath: function(hierarchicalFacet) {
        return hierarchicalFacet.rootPath || null;
    },
    /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet the hierarchicalFacet object
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */ _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
        if (typeof hierarchicalFacet.showParentLevel === "boolean") return hierarchicalFacet.showParentLevel;
        return true;
    },
    /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName the hierarchicalFacet name
   * @return {object} a hierarchicalFacet
   */ getHierarchicalFacetByName: function(hierarchicalFacetName) {
        return find(this.hierarchicalFacets, function(f) {
            return f.name === hierarchicalFacetName;
        });
    },
    /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */ getHierarchicalFacetBreadcrumb: function(facetName) {
        if (!this.isHierarchicalFacet(facetName)) return [];
        var refinement = this.getHierarchicalRefinement(facetName)[0];
        if (!refinement) return [];
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
        var path = refinement.split(separator);
        return path.map(function(part) {
            return part.trim();
        });
    },
    toString: function() {
        return JSON.stringify(this, null, 2);
    }
};
/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */ module.exports = SearchParameters;

},{"95fd382c7fb33828":"2BeUG","18c24957c50b6bbe":"hBcv7","a5ce8ba05df13461":"iaaF4","90e7fadc1f54c11":"eGyc5","35baad6945c6f2e7":"alqSr","16532e4deb890661":"l3IzD","24560ede3ee1986":"jWUZB","cbae9a0e9c7cbd4c":"eZyse","7241c7b9ea228771":"5Zz04"}],"2BeUG":[function(require,module,exports) {
"use strict";
// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);
    return sources.reduceRight(function(acc, source) {
        Object.keys(Object(source)).forEach(function(key) {
            if (source[key] === undefined) return;
            if (acc[key] !== undefined) // remove if already added, so that we can add it in correct order
            delete acc[key];
            acc[key] = source[key];
        });
        return acc;
    }, {});
};

},{}],"hBcv7":[function(require,module,exports) {
"use strict";
// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return undefined;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return array[i];
    }
    return undefined;
};

},{}],"iaaF4":[function(require,module,exports) {
"use strict";
function intersection(arr1, arr2) {
    return arr1.filter(function(value, index) {
        return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index /* skips duplicates */ ;
    });
}
module.exports = intersection;

},{}],"jWUZB":[function(require,module,exports) {
"use strict";
function valToNumber(v) {
    if (typeof v === "number") return v;
    else if (typeof v === "string") return parseFloat(v);
    else if (Array.isArray(v)) return v.map(valToNumber);
    throw new Error("The value should be a number, a parsable string or an array of those.");
}
module.exports = valToNumber;

},{}],"eZyse":[function(require,module,exports) {
"use strict";
module.exports = function isValidUserToken(userToken) {
    if (userToken === null) return false;
    return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};

},{}],"5Zz04":[function(require,module,exports) {
"use strict";
/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */ var defaultsPure = require("a0d484ad52a9b3cc");
var objectHasKeys = require("40483bb7a3899ed8");
var omit = require("7bf4fdd67ee70b2");
var lib = {
    /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */ addRefinement: function addRefinement(refinementList, attribute, value) {
        if (lib.isRefined(refinementList, attribute, value)) return refinementList;
        var valueAsString = "" + value;
        var facetRefinement = !refinementList[attribute] ? [
            valueAsString
        ] : refinementList[attribute].concat(valueAsString);
        var mod = {};
        mod[attribute] = facetRefinement;
        return defaultsPure({}, mod, refinementList);
    },
    /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */ removeRefinement: function removeRefinement(refinementList, attribute, value) {
        if (value === undefined) // we use the "filter" form of clearRefinement, since it leaves empty values as-is
        // the form with a string will remove the attribute completely
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f;
        });
        var valueAsString = "" + value;
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f && valueAsString === v;
        });
    },
    /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */ toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
        if (value === undefined) throw new Error("toggleRefinement should be used with a value");
        if (lib.isRefined(refinementList, attribute, value)) return lib.removeRefinement(refinementList, attribute, value);
        return lib.addRefinement(refinementList, attribute, value);
    },
    /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */ clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
        if (attribute === undefined) {
            // return the same object if the list is already empty
            // this is mainly for tests, as it doesn't have much impact on performance
            if (!objectHasKeys(refinementList)) return refinementList;
            return {};
        } else if (typeof attribute === "string") return omit(refinementList, [
            attribute
        ]);
        else if (typeof attribute === "function") {
            var hasChanged = false;
            var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
                var values = refinementList[key] || [];
                var facetList = values.filter(function(value) {
                    return !attribute(value, key, refinementType);
                });
                if (facetList.length !== values.length) hasChanged = true;
                memo[key] = facetList;
                return memo;
            }, {});
            if (hasChanged) return newRefinementList;
            return refinementList;
        }
        // We return nothing if the attribute is not undefined, a string or a function,
        // as it is not a valid value for a refinement
        return undefined;
    },
    /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean} true if the attribute is refined, false otherwise
   */ isRefined: function isRefined(refinementList, attribute, refinementValue) {
        var containsRefinements = Boolean(refinementList[attribute]) && refinementList[attribute].length > 0;
        if (refinementValue === undefined || !containsRefinements) return containsRefinements;
        var refinementValueAsString = "" + refinementValue;
        return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    }
};
module.exports = lib;

},{"a0d484ad52a9b3cc":"2BeUG","40483bb7a3899ed8":"alqSr","7bf4fdd67ee70b2":"l3IzD"}],"lUGU6":[function(require,module,exports) {
"use strict";
var compact = require("258e1d598524b12");
var defaultsPure = require("1b924f1e6522d7a3");
var fv = require("c77bf945727bed89");
var find = require("1bf5570ac6996d32");
var findIndex = require("39a43179302907ed");
var formatSort = require("241cffdb5426e123");
var merge = require("8e8ece6df4b7410e");
var orderBy = require("6772e43d706a1f04");
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
var generateHierarchicalTree = require("dea175eecc359a9");
/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */ /**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */ /**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */ /**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */ /**
 * Turn an array of attributes in an object of attributes with their position in the array as value
 * @param {string[]} attributes the list of attributes in the record
 * @return {object} the list of attributes indexed by attribute name
 */ function getIndices(attributes) {
    var indices = {};
    attributes.forEach(function(val, idx) {
        indices[val] = idx;
    });
    return indices;
}
function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) dest.stats = facetStats[key];
}
/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */ /**
 * @param {HierarchicalFacet[]} hierarchicalFacets All hierarchical facets
 * @param {string} hierarchicalAttributeName The name of the hierarchical attribute
 * @return {HierarchicalFacet} The hierarchical facet matching the attribute name
 */ function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
    return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
        var facetNames = hierarchicalFacet.attributes || [];
        return facetNames.indexOf(hierarchicalAttributeName) > -1;
    });
}
// eslint-disable-next-line valid-jsdoc
/**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/ function SearchResults(state, results, options) {
    var mainSubResponse = results[0];
    this._rawResults = results;
    // eslint-disable-next-line consistent-this
    var self = this;
    // https://www.algolia.com/doc/api-reference/api-methods/search/#response
    Object.keys(mainSubResponse).forEach(function(key) {
        self[key] = mainSubResponse[key];
    });
    // Make every key of the result options reachable from the instance
    Object.keys(options || {}).forEach(function(key) {
        self[key] = options[key];
    });
    /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   * - `value` : the value of the facet highlighted (html)
   * - `matchLevel`: `full`, `partial` or `none`, depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */ /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */ /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */ /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * sum of the processing time of all the queries
   * @name processingTimeMS
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ this.processingTimeMS = results.reduce(function(sum, result) {
        return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
    }, 0);
    /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */ this.disjunctiveFacets = [];
    /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */ this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
        return [];
    });
    /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */ this.facets = [];
    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;
    // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.
    var mainFacets = mainSubResponse.facets || {};
    Object.keys(mainFacets).forEach(function(facetKey) {
        var facetValueObject = mainFacets[facetKey];
        var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
        if (hierarchicalFacet) {
            // Place the hierarchicalFacet data at the correct index depending on
            // the attributes order that was defined at the helper initialization
            var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
            var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
                return f.name === hierarchicalFacet.name;
            });
            self.hierarchicalFacets[idxAttributeName][facetIndex] = {
                attribute: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
        } else {
            var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
            var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
            var position;
            if (isFacetDisjunctive) {
                position = disjunctiveFacetsIndices[facetKey];
                self.disjunctiveFacets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
            }
            if (isFacetConjunctive) {
                position = facetsIndices[facetKey];
                self.facets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
            }
        }
    });
    // Make sure we do not keep holes within the hierarchical facets
    this.hierarchicalFacets = compact(this.hierarchicalFacets);
    // aggregate the refined disjunctive facets
    disjunctiveFacets.forEach(function(disjunctiveFacet) {
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {};
        var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
        // There should be only item in facets.
        Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position;
            if (hierarchicalFacet) {
                position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                self.hierarchicalFacets[position][attributeIndex].data = merge({}, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
            } else {
                position = disjunctiveFacetsIndices[dfacet];
                var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
                self.disjunctiveFacets[position] = {
                    name: dfacet,
                    data: defaultsPure({}, facetResults, dataFromMainRequest),
                    exhaustive: result.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);
                if (state.disjunctiveFacetsRefinements[dfacet]) state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                    // add the disjunctive refinements if it is no more retrieved
                    if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(unescapeFacetValue(refinementValue)) > -1) self.disjunctiveFacets[position].data[refinementValue] = 0;
                });
            }
        });
        nextDisjunctiveResult++;
    });
    // if we have some parent level values for hierarchical facets, merge them
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        // if we are already at a root refinement (or no refinement at all), there is no
        // root level values request
        if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) return;
        results.slice(nextDisjunctiveResult).forEach(function(result) {
            var facets = result && result.facets ? result.facets : {};
            Object.keys(facets).forEach(function(dfacet) {
                var facetResults = facets[dfacet];
                var position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
                // then the disjunctive values will be `beers` (count: 100),
                // but we do not want to display
                //   | beers (100)
                //     > IPA (5)
                // We want
                //   | beers (5)
                //     > IPA (5)
                var defaultData = {};
                if (currentRefinement.length > 0) {
                    var root = currentRefinement[0].split(separator)[0];
                    defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
                }
                self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
            });
            nextDisjunctiveResult++;
        });
    });
    // add the excludes
    Object.keys(state.facetsExcludes).forEach(function(facetName) {
        var excludes = state.facetsExcludes[facetName];
        var position = facetsIndices[facetName];
        self.facets[position] = {
            name: facetName,
            data: mainFacets[facetName],
            exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        excludes.forEach(function(facetValue) {
            self.facets[position] = self.facets[position] || {
                name: facetName
            };
            self.facets[position].data = self.facets[position].data || {};
            self.facets[position].data[facetValue] = 0;
        });
    });
    /**
   * @type {Array}
   */ this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
    /**
   * @type {Array}
   */ this.facets = compact(this.facets);
    /**
   * @type {Array}
   */ this.disjunctiveFacets = compact(this.disjunctiveFacets);
    this._state = state;
}
/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */ SearchResults.prototype.getFacetByName = function(name) {
    function predicate(facet) {
        return facet.name === name;
    }
    return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};
/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */ function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
        return facet.name === attribute;
    }
    if (results._state.isConjunctiveFacet(attribute)) {
        var facet = find(results.facets, predicate);
        if (!facet) return [];
        return Object.keys(facet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: facet.data[name],
                isRefined: results._state.isFacetRefined(attribute, value),
                isExcluded: results._state.isExcludeRefined(attribute, name)
            };
        });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
        var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
        if (!disjunctiveFacet) return [];
        return Object.keys(disjunctiveFacet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: disjunctiveFacet.data[name],
                isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
            };
        });
    } else if (results._state.isHierarchicalFacet(attribute)) {
        var hierarchicalFacetValues = find(results.hierarchicalFacets, predicate);
        if (!hierarchicalFacetValues) return hierarchicalFacetValues;
        var hierarchicalFacet = results._state.getHierarchicalFacetByName(attribute);
        var separator = results._state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = unescapeFacetValue(results._state.getHierarchicalRefinement(attribute)[0] || "");
        if (currentRefinement.indexOf(hierarchicalFacet.rootPath) === 0) currentRefinement = currentRefinement.replace(hierarchicalFacet.rootPath + separator, "");
        var currentRefinementSplit = currentRefinement.split(separator);
        currentRefinementSplit.unshift(attribute);
        setIsRefined(hierarchicalFacetValues, currentRefinementSplit, 0);
        return hierarchicalFacetValues;
    }
    return undefined;
}
/**
 * Set the isRefined of a hierarchical facet result based on the current state.
 * @param {SearchResults.HierarchicalFacet} item Hierarchical facet to fix
 * @param {string[]} currentRefinement array of parts of the current hierarchical refinement
 * @param {number} depth recursion depth in the currentRefinement
 * @return {undefined} function mutates the item
 */ function setIsRefined(item, currentRefinement, depth) {
    item.isRefined = item.name === currentRefinement[depth];
    if (item.data) item.data.forEach(function(child) {
        setIsRefined(child, currentRefinement, depth + 1);
    });
}
/**
 * Sort nodes of a hierarchical or disjunctive facet results
 * @private
 * @param {function} sortFn sort function to apply
 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
 * @param {string[]} names attribute names
 * @param {number} [level=0] current index in the names array
 * @return {HierarchicalFacet|Array} sorted node
 */ function recSort(sortFn, node, names, level) {
    level = level || 0;
    if (Array.isArray(node)) return sortFn(node, names[level]);
    if (!node.data || node.data.length === 0) return node;
    var children = node.data.map(function(childNode) {
        return recSort(sortFn, childNode, names, level + 1);
    });
    var sortedChildren = sortFn(children, names[level]);
    var newNode = defaultsPure({
        data: sortedChildren
    }, node);
    return newNode;
}
SearchResults.DEFAULT_SORT = [
    "isRefined:desc",
    "count:desc",
    "name:asc"
];
function vanillaSortFn(order, data) {
    return data.sort(order);
}
/**
 * @typedef FacetOrdering
 * @type {Object}
 * @property {string[]} [order]
 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
 */ /**
 * Sorts facet arrays via their facet ordering
 * @param {Array} facetValues the values
 * @param {FacetOrdering} facetOrdering the ordering
 * @returns {Array} the sorted facet values
 */ function sortViaFacetOrdering(facetValues, facetOrdering) {
    var orderedFacets = [];
    var remainingFacets = [];
    var order = facetOrdering.order || [];
    /**
   * an object with the keys being the values in order, the values their index:
   * ['one', 'two'] -> { one: 0, two: 1 }
   */ var reverseOrder = order.reduce(function(acc, name, i) {
        acc[name] = i;
        return acc;
    }, {});
    facetValues.forEach(function(item) {
        // hierarchical facets get sorted using their raw name
        var name = item.path || item.name;
        if (reverseOrder[name] !== undefined) orderedFacets[reverseOrder[name]] = item;
        else remainingFacets.push(item);
    });
    orderedFacets = orderedFacets.filter(function(facet) {
        return facet;
    });
    var sortRemainingBy = facetOrdering.sortRemainingBy;
    var ordering;
    if (sortRemainingBy === "hidden") return orderedFacets;
    else if (sortRemainingBy === "alpha") ordering = [
        [
            "path",
            "name"
        ],
        [
            "asc",
            "asc"
        ]
    ];
    else ordering = [
        [
            "count"
        ],
        [
            "desc"
        ]
    ];
    return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
}
/**
 * @param {SearchResults} results the search results class
 * @param {string} attribute the attribute to retrieve ordering of
 * @returns {FacetOrdering | undefined} the facet ordering
 */ function getFacetOrdering(results, attribute) {
    return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
}
/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {boolean} [opts.facetOrdering]
 * Force the use of facetOrdering from the result if a sortBy is present. If
 * sortBy isn't present, facetOrdering will be used automatically.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */ SearchResults.prototype.getFacetValues = function(attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) return undefined;
    var options = defaultsPure({}, opts, {
        sortBy: SearchResults.DEFAULT_SORT,
        // if no sortBy is given, attempt to sort based on facetOrdering
        // if it is given, we still allow to sort via facet ordering first
        facetOrdering: !(opts && opts.sortBy)
    });
    // eslint-disable-next-line consistent-this
    var results = this;
    var attributes;
    if (Array.isArray(facetValues)) attributes = [
        attribute
    ];
    else {
        var config = results._state.getHierarchicalFacetByName(facetValues.name);
        attributes = config.attributes;
    }
    return recSort(function(data, facetName) {
        if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (facetOrdering) return sortViaFacetOrdering(data, facetOrdering);
        }
        if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
        } else if (typeof options.sortBy === "function") return vanillaSortFn(options.sortBy, data);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
    }, facetValues, attributes);
};
/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */ SearchResults.prototype.getFacetStats = function(attribute) {
    if (this._state.isConjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.facets, attribute);
    else if (this._state.isDisjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    return undefined;
};
/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */ /**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName The attribute to look for
 * @return {object|undefined} The stats of the facet
 */ function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find(facetList, function(facet) {
        return facet.name === facetName;
    });
    return data && data.stats;
}
/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */ SearchResults.prototype.getRefinements = function() {
    var state = this._state;
    // eslint-disable-next-line consistent-this
    var results = this;
    var res = [];
    Object.keys(state.facetsRefinements).forEach(function(attributeName) {
        state.facetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "facet", attributeName, name, results.facets));
        });
    });
    Object.keys(state.facetsExcludes).forEach(function(attributeName) {
        state.facetsExcludes[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "exclude", attributeName, name, results.facets));
        });
    });
    Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
        state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "disjunctive", attributeName, name, results.disjunctiveFacets));
        });
    });
    Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
        state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
        });
    });
    Object.keys(state.numericRefinements).forEach(function(attributeName) {
        var operators = state.numericRefinements[attributeName];
        Object.keys(operators).forEach(function(operator) {
            operators[operator].forEach(function(value) {
                res.push({
                    type: "numeric",
                    attributeName: attributeName,
                    name: value,
                    numericValue: value,
                    operator: operator
                });
            });
        });
    });
    state.tagRefinements.forEach(function(name) {
        res.push({
            type: "tag",
            attributeName: "_tags",
            name: name
        });
    });
    return res;
};
/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */ /**
 * @param {SearchParameters} state the current state
 * @param {string} type the type of the refinement
 * @param {string} attributeName The attribute of the facet
 * @param {*} name The name of the facet
 * @param {Facet[]} resultsFacets facets from the results
 * @return {Refinement} the refinement
 */ function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find(resultsFacets, function(f) {
        return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = facet && facet.exhaustive || false;
    return {
        type: type,
        attributeName: attributeName,
        name: name,
        count: count,
        exhaustive: exhaustive
    };
}
/**
 * @param {SearchParameters} state the current state
 * @param {string} attributeName the attribute of the hierarchical facet
 * @param {string} name the name of the facet
 * @param {Facet[]} resultsFacets facets from the results
 * @return {HierarchicalFacet} the hierarchical facet
 */ function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
    var split = name.split(separator);
    var rootFacet = find(resultsFacets, function(facet) {
        return facet.name === attributeName;
    });
    var facet = split.reduce(function(intermediateFacet, part) {
        var newFacet = intermediateFacet && find(intermediateFacet.data, function(f) {
            return f.name === part;
        });
        return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);
    var count = facet && facet.count || 0;
    var exhaustive = facet && facet.exhaustive || false;
    var path = facet && facet.path || "";
    return {
        type: "hierarchical",
        attributeName: attributeName,
        name: path,
        count: count,
        exhaustive: exhaustive
    };
}
module.exports = SearchResults;

},{"258e1d598524b12":"dFh0T","1b924f1e6522d7a3":"2BeUG","c77bf945727bed89":"3r1Qc","1bf5570ac6996d32":"hBcv7","39a43179302907ed":"fzLII","241cffdb5426e123":"g3eEb","8e8ece6df4b7410e":"eGyc5","6772e43d706a1f04":"kd35s","dea175eecc359a9":"9tLzD"}],"dFh0T":[function(require,module,exports) {
"use strict";
module.exports = function compact(array) {
    if (!Array.isArray(array)) return [];
    return array.filter(Boolean);
};

},{}],"fzLII":[function(require,module,exports) {
"use strict";
// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
};

},{}],"g3eEb":[function(require,module,exports) {
"use strict";
var find = require("24e57209149b12cc");
/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */ module.exports = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function(sort) {
        return sort.split(":");
    });
    return sortBy.reduce(function preparePredicate(out, sort) {
        var sortInstruction = sort.split(":");
        var matchingDefault = find(defaultInstructions, function(defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
        });
        if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
        }
        out[0].push(matchingDefault[0]);
        out[1].push(matchingDefault[1]);
        return out;
    }, [
        [],
        []
    ]);
};

},{"24e57209149b12cc":"hBcv7"}],"kd35s":[function(require,module,exports) {
"use strict";
function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined;
        var valIsNull = value === null;
        var othIsDefined = other !== undefined;
        var othIsNull = other === null;
        if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) return 1;
        if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) return -1;
    }
    return 0;
}
/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 * @return {Array<object>} sorted collection
 */ function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) return [];
    if (!Array.isArray(orders)) orders = [];
    var result = collection.map(function(value, index) {
        return {
            criteria: iteratees.map(function(iteratee) {
                return value[iteratee];
            }),
            index: index,
            value: value
        };
    });
    result.sort(function comparer(object, other) {
        var index = -1;
        while(++index < object.criteria.length){
            var res = compareAscending(object.criteria[index], other.criteria[index]);
            if (res) {
                if (index >= orders.length) return res;
                if (orders[index] === "desc") return -res;
                return res;
            }
        }
        // This ensures a stable sort in V8 and other engines.
        // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    });
    return result.map(function(res) {
        return res.value;
    });
}
module.exports = orderBy;

},{}],"9tLzD":[function(require,module,exports) {
"use strict";
module.exports = generateTrees;
var fv = require("1b8f018c8f5028e1");
var find = require("cb23541e39918f7");
var prepareHierarchicalFacetSortBy = require("37e6c32646ea4692");
var orderBy = require("e5443bc1a7cdb4bf");
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
        var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
        var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || "";
        var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
        var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
        var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
            return facetResult.exhaustive;
        });
        var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
        var results = hierarchicalFacetResult;
        if (hierarchicalRootPath) results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
        return results.reduce(generateTreeFn, {
            name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
            count: null,
            isRefined: true,
            path: null,
            escapedValue: null,
            exhaustive: rootExhaustive,
            data: null
        });
    };
}
function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
    return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
        var parent = hierarchicalTree;
        if (currentHierarchicalLevel > 0) {
            var level = 0;
            parent = hierarchicalTree;
            while(level < currentHierarchicalLevel){
                /**
         * @type {object[]]} hierarchical data
         */ var data = parent && Array.isArray(parent.data) ? parent.data : [];
                parent = find(data, function(subtree) {
                    return subtree.isRefined;
                });
                level++;
            }
        }
        // we found a refined parent, let's add current level data under it
        if (parent) {
            // filter values in case an object has multiple categories:
            //   {
            //     categories: {
            //       level0: ['beers', 'bières'],
            //       level1: ['beers > IPA', 'bières > Belges']
            //     }
            //   }
            //
            // If parent refinement is `beers`, then we do not want to have `bières > Belges`
            // showing up
            var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
                return [
                    facetValue,
                    hierarchicalFacetResult.data[facetValue]
                ];
            }).filter(function(tuple) {
                var facetValue = tuple[0];
                return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
            });
            parent.data = orderBy(picked.map(function(tuple) {
                var facetValue = tuple[0];
                var facetCount = tuple[1];
                return format(facetCount, facetValue, hierarchicalSeparator, unescapeFacetValue(currentRefinement), hierarchicalFacetResult.exhaustive);
            }), sortBy[0], sortBy[1]);
        }
        return hierarchicalTree;
    };
}
// eslint-disable-next-line max-params
function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) return false;
    // we always want root levels (only when there is no prefix path)
    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || // if there is a rootPath, being root level mean 1 level under rootPath
    hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || // if current refinement is a root level and current facetValue is a root level,
    // keep the facetValue
    facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 || // facetValue is a child of the current parent, add it
    facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
}
function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
        name: parts[parts.length - 1].trim(),
        path: facetValue,
        escapedValue: escapeFacetValue(facetValue),
        count: facetCount,
        isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
        exhaustive: exhaustive,
        data: null
    };
}

},{"1b8f018c8f5028e1":"3r1Qc","cb23541e39918f7":"hBcv7","37e6c32646ea4692":"g3eEb","e5443bc1a7cdb4bf":"kd35s"}],"cs17k":[function(require,module,exports) {
"use strict";
module.exports = "3.15.0";

},{}],"bQz4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInsightsMiddleware", ()=>createInsightsMiddleware);
var _indexJs = require("../helpers/index.js");
var _indexJs1 = require("../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var ALGOLIA_INSIGHTS_VERSION = "2.6.0";
var ALGOLIA_INSIGHTS_SRC = "https://cdn.jsdelivr.net/npm/search-insights@".concat(ALGOLIA_INSIGHTS_VERSION, "/dist/search-insights.min.js");
function createInsightsMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _insightsClient = props.insightsClient, insightsInitParams = props.insightsInitParams, onEvent = props.onEvent, _props$$$internal = props.$$internal, $$internal = _props$$$internal === void 0 ? false : _props$$$internal, _props$$$automatic = props.$$automatic, $$automatic = _props$$$automatic === void 0 ? false : _props$$$automatic;
    var potentialInsightsClient = _insightsClient;
    if (!_insightsClient && _insightsClient !== null) (0, _indexJs1.safelyRunOnBrowser)(function(_ref) {
        var window = _ref.window;
        var pointer = window.AlgoliaAnalyticsObject || "aa";
        if (typeof pointer === "string") potentialInsightsClient = window[pointer];
        if (!potentialInsightsClient) {
            window.AlgoliaAnalyticsObject = pointer;
            if (!window[pointer]) {
                window[pointer] = function() {
                    if (!window[pointer].queue) window[pointer].queue = [];
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    window[pointer].queue.push(args);
                };
                window[pointer].version = ALGOLIA_INSIGHTS_VERSION;
                window[pointer].shouldAddScript = true;
            }
            potentialInsightsClient = window[pointer];
        }
    });
    // if still no insightsClient was found, we use a noop
    var insightsClient = potentialInsightsClient || (0, _indexJs1.noop);
    return function(_ref2) {
        var instantSearchInstance = _ref2.instantSearchInstance;
        // remove existing default insights middleware
        // user-provided insights middleware takes precedence
        var existingInsightsMiddlewares = instantSearchInstance.middleware.filter(function(m) {
            return m.instance.$$type === "ais.insights" && m.instance.$$internal;
        }).map(function(m) {
            return m.creator;
        });
        instantSearchInstance.unuse.apply(instantSearchInstance, _toConsumableArray(existingInsightsMiddlewares));
        var _getAppIdAndApiKey = (0, _indexJs1.getAppIdAndApiKey)(instantSearchInstance.client), _getAppIdAndApiKey2 = _slicedToArray(_getAppIdAndApiKey, 2), appId = _getAppIdAndApiKey2[0], apiKey = _getAppIdAndApiKey2[1];
        // search-insights.js also throws an error so dev-only clarification is sufficient
        (0, _indexJs1.warning)(Boolean(appId && apiKey), "could not extract Algolia credentials from searchClient in insights middleware.");
        var queuedUserToken = undefined;
        var userTokenBeforeInit = undefined;
        if (Array.isArray(insightsClient.queue)) {
            // Context: The umd build of search-insights is asynchronously loaded by the snippet.
            //
            // When user calls `aa('setUserToken', 'my-user-token')` before `search-insights` is loaded,
            // ['setUserToken', 'my-user-token'] gets stored in `aa.queue`.
            // Whenever `search-insights` is finally loaded, it will process the queue.
            //
            // But here's the reason why we handle it here:
            // At this point, even though `search-insights` is not loaded yet,
            // we still want to read the token from the queue.
            // Otherwise, the first search call will be fired without the token.
            var _ref3 = (0, _indexJs1.find)(insightsClient.queue.slice().reverse(), function(_ref5) {
                var _ref6 = _slicedToArray(_ref5, 1), method = _ref6[0];
                return method === "setUserToken";
            }) || [];
            var _ref4 = _slicedToArray(_ref3, 2);
            queuedUserToken = _ref4[1];
        }
        insightsClient("getUserToken", null, function(_error, userToken) {
            // If user has called `aa('setUserToken', 'my-user-token')` before creating
            // the `insights` middleware, we store them temporarily and
            // set it later on.
            //
            // Otherwise, the `init` call might override it with anonymous user token.
            userTokenBeforeInit = userToken;
        });
        // Only `init` if the `insightsInitParams` option is passed or
        // if the `insightsClient` version doesn't supports optional `init` calling.
        if (insightsInitParams || !isModernInsightsClient(insightsClient)) insightsClient("init", _objectSpread({
            appId: appId,
            apiKey: apiKey,
            partial: true
        }, insightsInitParams));
        var initialParameters;
        var helper;
        return {
            $$type: "ais.insights",
            $$internal: $$internal,
            $$automatic: $$automatic,
            onStateChange: function onStateChange() {},
            subscribe: function subscribe() {
                if (!insightsClient.shouldAddScript) return;
                var errorMessage = "[insights middleware]: could not load search-insights.js. Please load it manually following https://alg.li/insights-init";
                try {
                    var script = document.createElement("script");
                    script.async = true;
                    script.src = ALGOLIA_INSIGHTS_SRC;
                    script.onerror = function() {
                        instantSearchInstance.emit("error", new Error(errorMessage));
                    };
                    document.body.appendChild(script);
                    insightsClient.shouldAddScript = false;
                } catch (cause) {
                    insightsClient.shouldAddScript = false;
                    instantSearchInstance.emit("error", new Error(errorMessage));
                }
            },
            started: function started() {
                insightsClient("addAlgoliaAgent", "insights-middleware");
                helper = instantSearchInstance.mainHelper;
                initialParameters = {
                    userToken: helper.state.userToken,
                    clickAnalytics: helper.state.clickAnalytics
                };
                // We don't want to force clickAnalytics when the insights is enabled from the search response.
                // This means we don't enable insights for indices that don't opt in
                if (!$$automatic) helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
                    clickAnalytics: true
                }));
                if (!$$internal) instantSearchInstance.scheduleSearch();
                var setUserTokenToSearch = function setUserTokenToSearch(userToken) {
                    var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (!userToken) return;
                    var existingToken = helper.state.userToken;
                    function applyToken() {
                        helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), {}, {
                            userToken: userToken
                        }));
                        if (existingToken && existingToken !== userToken) instantSearchInstance.scheduleSearch();
                    }
                    // Delay the token application to the next render cycle
                    if (!immediate) setTimeout(applyToken, 0);
                    else applyToken();
                };
                var anonymousUserToken = (0, _indexJs.getInsightsAnonymousUserTokenInternal)();
                if (anonymousUserToken) // When `aa('init', { ... })` is called, it creates an anonymous user token in cookie.
                // We can set it as userToken.
                setUserTokenToSearch(anonymousUserToken, true);
                // We consider the `userToken` coming from a `init` call to have a higher
                // importance than the one coming from the queue.
                if (userTokenBeforeInit) {
                    setUserTokenToSearch(userTokenBeforeInit, true);
                    insightsClient("setUserToken", userTokenBeforeInit);
                } else if (queuedUserToken) {
                    setUserTokenToSearch(queuedUserToken, true);
                    insightsClient("setUserToken", queuedUserToken);
                }
                // This updates userToken which is set explicitly by `aa('setUserToken', userToken)`
                insightsClient("onUserTokenChange", setUserTokenToSearch, {
                    immediate: true
                });
                var insightsClientWithLocalCredentials = insightsClient;
                if (isModernInsightsClient(insightsClient)) insightsClientWithLocalCredentials = function insightsClientWithLocalCredentials(method, payload) {
                    var extraParams = {
                        headers: {
                            "X-Algolia-Application-Id": appId,
                            "X-Algolia-API-Key": apiKey
                        }
                    };
                    // @ts-ignore we are calling this only when we know that the client actually is correct
                    return insightsClient(method, payload, extraParams);
                };
                instantSearchInstance.sendEventToInsights = function(event) {
                    if (onEvent) onEvent(event, insightsClientWithLocalCredentials);
                    else if (event.insightsMethod) {
                        // Source is used to differentiate events sent by instantsearch from those sent manually.
                        event.payload.algoliaSource = [
                            "instantsearch"
                        ];
                        if ($$automatic) event.payload.algoliaSource.push("instantsearch-automatic");
                        if (event.eventModifier === "internal") event.payload.algoliaSource.push("instantsearch-internal");
                        insightsClientWithLocalCredentials(event.insightsMethod, event.payload);
                        (0, _indexJs1.warning)(Boolean(helper.state.userToken), "\nCannot send event to Algolia Insights because `userToken` is not set.\n\nSee documentation: https://www.algolia.com/doc/guides/building-search-ui/going-further/send-insights-events/js/#setting-the-usertoken\n");
                    } else (0, _indexJs1.warning)(false, "Cannot send event to Algolia Insights because `insightsMethod` option is missing.");
                };
            },
            unsubscribe: function unsubscribe() {
                insightsClient("onUserTokenChange", undefined);
                instantSearchInstance.sendEventToInsights = (0, _indexJs1.noop);
                if (helper && initialParameters) {
                    helper.overrideStateWithoutTriggeringChangeEvent(_objectSpread(_objectSpread({}, helper.state), initialParameters));
                    instantSearchInstance.scheduleSearch();
                }
            }
        };
    };
}
/**
 * Determines if a given insights `client` supports the optional call to `init`
 * and the ability to set credentials via extra parameters when sending events.
 */ function isModernInsightsClient(client) {
    var _split$map = (client.version || "").split(".").map(Number), _split$map2 = _slicedToArray(_split$map, 2), major = _split$map2[0], minor = _split$map2[1];
    /* eslint-disable @typescript-eslint/naming-convention */ var v3 = major >= 3;
    var v2_6 = major === 2 && minor >= 6;
    var v1_10 = major === 1 && minor >= 10;
    /* eslint-enable @typescript-eslint/naming-convention */ return v3 || v2_6 || v1_10;
}

},{"../helpers/index.js":"8kgzi","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOLJd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMetadataEnabled", ()=>isMetadataEnabled);
/**
 * Exposes the metadata of mounted widgets in a custom
 * `<meta name="instantsearch:widgets" />` tag. The metadata per widget is:
 * - applied parameters
 * - widget name
 * - connector name
 */ parcelHelpers.export(exports, "createMetadataMiddleware", ()=>createMetadataMiddleware);
var _indexJs = require("../lib/utils/index.js");
function extractWidgetPayload(widgets, instantSearchInstance, payload) {
    var initOptions = (0, _indexJs.createInitArgs)(instantSearchInstance, instantSearchInstance.mainIndex, instantSearchInstance._initialUiState);
    widgets.forEach(function(widget) {
        var widgetParams = {};
        if (widget.getWidgetRenderState) {
            var renderState = widget.getWidgetRenderState(initOptions);
            if (renderState && renderState.widgetParams) // casting, as we just earlier checked widgetParams exists, and thus an object
            widgetParams = renderState.widgetParams;
        }
        // since we destructure in all widgets, the parameters with defaults are set to "undefined"
        var params = Object.keys(widgetParams).filter(function(key) {
            return widgetParams[key] !== undefined;
        });
        payload.widgets.push({
            type: widget.$$type,
            widgetType: widget.$$widgetType,
            params: params
        });
        if (widget.$$type === "ais.index") extractWidgetPayload(widget.getWidgets(), instantSearchInstance, payload);
    });
}
function isMetadataEnabled() {
    return (0, _indexJs.safelyRunOnBrowser)(function(_ref) {
        var _window$navigator, _window$navigator$use;
        var window = _ref.window;
        return ((_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : (_window$navigator$use = _window$navigator.userAgent) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.indexOf("Algolia Crawler")) > -1;
    }, {
        fallback: function fallback() {
            return false;
        }
    });
}
function createMetadataMiddleware() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref2$$$internal = _ref2.$$internal, $$internal = _ref2$$$internal === void 0 ? false : _ref2$$$internal;
    return function(_ref3) {
        var instantSearchInstance = _ref3.instantSearchInstance;
        var payload = {
            widgets: []
        };
        var payloadContainer = document.createElement("meta");
        var refNode = document.querySelector("head");
        payloadContainer.name = "instantsearch:widgets";
        return {
            $$type: "ais.metadata",
            $$internal: $$internal,
            onStateChange: function onStateChange() {},
            subscribe: function subscribe() {
                // using setTimeout here to delay extraction until widgets have been added in a tick (e.g. Vue)
                setTimeout(function() {
                    var client = instantSearchInstance.client;
                    payload.ua = client.transporter && client.transporter.userAgent ? client.transporter.userAgent.value : client._ua;
                    extractWidgetPayload(instantSearchInstance.mainIndex.getWidgets(), instantSearchInstance, payload);
                    instantSearchInstance.middleware.forEach(function(middleware) {
                        return payload.widgets.push({
                            middleware: true,
                            type: middleware.instance.$$type,
                            internal: middleware.instance.$$internal
                        });
                    });
                    payloadContainer.content = JSON.stringify(payload);
                    refNode.appendChild(payloadContainer);
                }, 0);
            },
            started: function started() {},
            unsubscribe: function unsubscribe() {
                payloadContainer.remove();
            }
        };
    };
}

},{"../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mKEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRouterMiddleware", ()=>createRouterMiddleware);
var _historyJs = require("../lib/routers/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _simpleJs = require("../lib/stateMappings/simple.js");
var _simpleJsDefault = parcelHelpers.interopDefault(_simpleJs);
var _indexJs = require("../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _props$router = props.router, router = _props$router === void 0 ? (0, _historyJsDefault.default)() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? (0, _simpleJsDefault.default)() : _props$stateMapping, _props$$$internal = props.$$internal, $$internal = _props$$$internal === void 0 ? false : _props$$$internal;
    return function(_ref) {
        var instantSearchInstance = _ref.instantSearchInstance;
        function topLevelCreateURL(nextState) {
            var previousUiState = // If only the mainIndex is initialized, we don't yet know what other
            // index widgets are used. Therefore we fall back to the initialUiState.
            // We can't indiscriminately use the initialUiState because then we
            // reintroduce state that was changed by the user.
            // When there are no widgets, we are sure the user can't yet have made
            // any changes.
            instantSearchInstance.mainIndex.getWidgets().length === 0 ? instantSearchInstance._initialUiState : instantSearchInstance.mainIndex.getWidgetUiState({});
            var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
                return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, indexId, nextState[indexId]));
            }, previousUiState);
            var route = stateMapping.stateToRoute(uiState);
            return router.createURL(route);
        }
        // casting to UiState here to keep createURL unaware of custom UiState
        // (as long as it's an object, it's ok)
        instantSearchInstance._createURL = topLevelCreateURL;
        var lastRouteState = undefined;
        var initialUiState = instantSearchInstance._initialUiState;
        return {
            $$type: "ais.router({router:".concat(router.$$type || "__unknown__", ", stateMapping:").concat(stateMapping.$$type || "__unknown__", "})"),
            $$internal: $$internal,
            onStateChange: function onStateChange(_ref2) {
                var uiState = _ref2.uiState;
                var routeState = stateMapping.stateToRoute(uiState);
                if (lastRouteState === undefined || !(0, _indexJs.isEqual)(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                instantSearchInstance._initialUiState = _objectSpread(_objectSpread({}, initialUiState), stateMapping.routeToState(router.read()));
                router.onUpdate(function(route) {
                    if (instantSearchInstance.mainIndex.getWidgets().length > 0) instantSearchInstance.setUiState(stateMapping.routeToState(route));
                });
            },
            started: function started() {
                var _router$start;
                (_router$start = router.start) === null || _router$start === void 0 || _router$start.call(router);
            },
            unsubscribe: function unsubscribe() {
                router.dispose();
            }
        };
    };
};

},{"../lib/routers/history.js":"haLSt","../lib/stateMappings/simple.js":"7Ci0f","../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haLSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>historyRouter);
var _qs = require("qs");
var _qsDefault = parcelHelpers.interopDefault(_qs);
var _indexJs = require("../utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var setWindowTitle = function setWindowTitle(title) {
    if (title) // This function is only executed on browsers so we can disable this check.
    // eslint-disable-next-line no-restricted-globals
    window.document.title = title;
};
var BrowserHistory = /*#__PURE__*/ function() {
    /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */ function BrowserHistory(_ref) {
        var _this = this;
        var windowTitle = _ref.windowTitle, _ref$writeDelay = _ref.writeDelay, writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay, createURL = _ref.createURL, parseURL = _ref.parseURL, getLocation = _ref.getLocation, start = _ref.start, dispose = _ref.dispose, push = _ref.push;
        _classCallCheck(this, BrowserHistory);
        _defineProperty(this, "$$type", "ais.browser");
        /**
     * Transforms a UI state into a title for the page.
     */ _defineProperty(this, "windowTitle", void 0);
        /**
     * Time in milliseconds before performing a write in the history.
     * It prevents from adding too many entries in the history and
     * makes the back button more usable.
     *
     * @default 400
     */ _defineProperty(this, "writeDelay", void 0);
        /**
     * Creates a full URL based on the route state.
     * The storage adaptor maps all syncable keys to the query string of the URL.
     */ _defineProperty(this, "_createURL", void 0);
        /**
     * Parses the URL into a route state.
     * It should be symmetrical to `createURL`.
     */ _defineProperty(this, "parseURL", void 0);
        /**
     * Returns the location to store in the history.
     * @default () => window.location
     */ _defineProperty(this, "getLocation", void 0);
        _defineProperty(this, "writeTimer", void 0);
        _defineProperty(this, "_onPopState", void 0);
        /**
     * Indicates if last action was back/forward in the browser.
     */ _defineProperty(this, "inPopState", false);
        /**
     * Indicates whether the history router is disposed or not.
     */ _defineProperty(this, "isDisposed", false);
        /**
     * Indicates the window.history.length before the last call to
     * window.history.pushState (called in `write`).
     * It allows to determine if a `pushState` has been triggered elsewhere,
     * and thus to prevent the `write` method from calling `pushState`.
     */ _defineProperty(this, "latestAcknowledgedHistory", 0);
        _defineProperty(this, "_start", void 0);
        _defineProperty(this, "_dispose", void 0);
        _defineProperty(this, "_push", void 0);
        this.windowTitle = windowTitle;
        this.writeTimer = undefined;
        this.writeDelay = writeDelay;
        this._createURL = createURL;
        this.parseURL = parseURL;
        this.getLocation = getLocation;
        this._start = start;
        this._dispose = dispose;
        this._push = push;
        (0, _indexJs.safelyRunOnBrowser)(function(_ref2) {
            var window1 = _ref2.window;
            var title = _this.windowTitle && _this.windowTitle(_this.read());
            setWindowTitle(title);
            _this.latestAcknowledgedHistory = window1.history.length;
        });
    }
    /**
   * Reads the URL and returns a syncable UI search state.
   */ _createClass(BrowserHistory, [
        {
            key: "read",
            value: function read() {
                return this.parseURL({
                    qsModule: (0, _qsDefault.default),
                    location: this.getLocation()
                });
            }
        },
        {
            key: "write",
            value: function write(routeState) {
                var _this2 = this;
                (0, _indexJs.safelyRunOnBrowser)(function(_ref3) {
                    var window1 = _ref3.window;
                    var url = _this2.createURL(routeState);
                    var title = _this2.windowTitle && _this2.windowTitle(routeState);
                    if (_this2.writeTimer) clearTimeout(_this2.writeTimer);
                    _this2.writeTimer = setTimeout(function() {
                        setWindowTitle(title);
                        if (_this2.shouldWrite(url)) {
                            if (_this2._push) _this2._push(url);
                            else window1.history.pushState(routeState, title || "", url);
                            _this2.latestAcknowledgedHistory = window1.history.length;
                        }
                        _this2.inPopState = false;
                        _this2.writeTimer = undefined;
                    }, _this2.writeDelay);
                });
            }
        },
        {
            key: "onUpdate",
            value: function onUpdate(callback) {
                var _this3 = this;
                if (this._start) this._start(function() {
                    callback(_this3.read());
                });
                this._onPopState = function() {
                    if (_this3.writeTimer) {
                        clearTimeout(_this3.writeTimer);
                        _this3.writeTimer = undefined;
                    }
                    _this3.inPopState = true;
                    // We always read the state from the URL because the state of the history
                    // can be incorect in some cases (e.g. using React Router).
                    callback(_this3.read());
                };
                (0, _indexJs.safelyRunOnBrowser)(function(_ref4) {
                    var window1 = _ref4.window;
                    window1.addEventListener("popstate", _this3._onPopState);
                });
            }
        },
        {
            key: "createURL",
            value: function createURL(routeState) {
                var url = this._createURL({
                    qsModule: (0, _qsDefault.default),
                    routeState: routeState,
                    location: this.getLocation()
                });
                try {
                    // We just want to check if the URL is valid.
                    // eslint-disable-next-line no-new
                    new URL(url);
                } catch (e) {
                    (0, _indexJs.warning)(false, "The URL returned by the `createURL` function is invalid.\nPlease make sure it returns an absolute URL to avoid issues, e.g: `https://algolia.com/search?query=iphone`.");
                }
                return url;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this4 = this;
                if (this._dispose) this._dispose();
                this.isDisposed = true;
                (0, _indexJs.safelyRunOnBrowser)(function(_ref5) {
                    var window1 = _ref5.window;
                    if (_this4._onPopState) window1.removeEventListener("popstate", _this4._onPopState);
                });
                if (this.writeTimer) clearTimeout(this.writeTimer);
                this.write({});
            }
        },
        {
            key: "start",
            value: function start() {
                this.isDisposed = false;
            }
        },
        {
            key: "shouldWrite",
            value: function shouldWrite(url) {
                var _this5 = this;
                return (0, _indexJs.safelyRunOnBrowser)(function(_ref6) {
                    var window1 = _ref6.window;
                    // We do want to `pushState` if:
                    // - the router is not disposed, IS.js needs to update the URL
                    // OR
                    // - the last write was from InstantSearch.js
                    // (unlike a SPA, where it would have last written)
                    var lastPushWasByISAfterDispose = !(_this5.isDisposed && _this5.latestAcknowledgedHistory !== window1.history.length);
                    return(// When the last state change was through popstate, the IS.js state changes,
                    // but that should not write the URL.
                    !_this5.inPopState && // When the previous pushState after dispose was by IS.js, we want to write the URL.
                    lastPushWasByISAfterDispose && // When the URL is the same as the current one, we do not want to write it.
                    url !== window1.location.href);
                });
            }
        }
    ]);
    return BrowserHistory;
}();
function historyRouter() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref7$createURL = _ref7.createURL, createURL = _ref7$createURL === void 0 ? function(_ref8) {
        var qsModule = _ref8.qsModule, routeState = _ref8.routeState, location = _ref8.location;
        var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? "" : _location$port, pathname = location.pathname, hash = location.hash;
        var queryString = qsModule.stringify(routeState);
        var portWithPrefix = port === "" ? "" : ":".concat(port);
        // IE <= 11 has no proper `location.origin` so we cannot rely on it.
        if (!queryString) return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
        return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
    } : _ref7$createURL, _ref7$parseURL = _ref7.parseURL, parseURL = _ref7$parseURL === void 0 ? function(_ref9) {
        var qsModule = _ref9.qsModule, location = _ref9.location;
        // `qs` by default converts arrays with more than 20 items to an object.
        // We want to avoid this because the data structure manipulated can therefore vary.
        // Setting the limit to `100` seems a good number because the engine's default is 100
        // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
        //
        // Using an `arrayLimit` of `n` allows `n + 1` items.
        //
        // See:
        //   - https://github.com/ljharb/qs#parsing-arrays
        //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
        return qsModule.parse(location.search.slice(1), {
            arrayLimit: 99
        });
    } : _ref7$parseURL, _ref7$writeDelay = _ref7.writeDelay, writeDelay = _ref7$writeDelay === void 0 ? 400 : _ref7$writeDelay, windowTitle = _ref7.windowTitle, _ref7$getLocation = _ref7.getLocation, getLocation = _ref7$getLocation === void 0 ? function() {
        return (0, _indexJs.safelyRunOnBrowser)(function(_ref10) {
            var window1 = _ref10.window;
            return window1.location;
        }, {
            fallback: function fallback() {
                throw new Error("You need to provide `getLocation` to the `history` router in environments where `window` does not exist.");
            }
        });
    } : _ref7$getLocation, start = _ref7.start, dispose = _ref7.dispose, push = _ref7.push;
    return new BrowserHistory({
        createURL: createURL,
        parseURL: parseURL,
        writeDelay: writeDelay,
        windowTitle: windowTitle,
        getLocation: getLocation,
        start: start,
        dispose: dispose,
        push: push
    });
}

},{"qs":"kW4GH","../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW4GH":[function(require,module,exports) {
"use strict";
var stringify = require("a472ccaa2f2351e9");
var parse = require("7ffa4249597bf32b");
var formats = require("454df9476704f887");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"a472ccaa2f2351e9":"aJuQi","7ffa4249597bf32b":"fSZqi","454df9476704f887":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
"use strict";
var utils = require("44263cc7b702ebf");
var formats = require("929f8531a94a537c");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset) {
    var obj = object;
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    });
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ",");
                var valuesJoined = "";
                for(var i = 0; i < valuesArray.length; ++i)valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
                return [
                    formatter(keyValue) + "=" + valuesJoined
                ];
            }
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) // we need to join elements in
    objKeys = [
        {
            value: obj.length > 0 ? obj.join(",") || null : void 0
        }
    ];
    else if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += "utf8=%26%2310003%3B&";
        else // encodeURIComponent('✓')
        prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};

},{"44263cc7b702ebf":"chmkc","929f8531a94a537c":"d7Ogf"}],"chmkc":[function(require,module,exports) {
"use strict";
var formats = require("7adf3674f81a2c87");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== "undefined") obj[i] = source[i];
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== "object") {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
         || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"7adf3674f81a2c87":"d7Ogf"}],"d7Ogf":[function(require,module,exports) {
"use strict";
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],"fSZqi":[function(require,module,exports) {
"use strict";
var utils = require("e76649c95dd0e736");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) charset = "utf-8";
            else if (parts[i] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") obj[cleanRoot] = leaf;
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    return utils.compact(obj);
};

},{"e76649c95dd0e736":"chmkc"}],"7Ci0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>simpleStateMapping);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "configure"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getIndexStateWithoutConfigure(uiState) {
    var configure = uiState.configure, trackedUiState = _objectWithoutProperties(uiState, _excluded);
    return trackedUiState;
}
function simpleStateMapping() {
    return {
        $$type: "ais.simple",
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {});
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {});
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdZTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "initialSearchParameters"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "index-widget"
});
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */ function privateHelperSetState(helper, _ref) {
    var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
    if (state !== helper.state) {
        helper.state = state;
        helper.emit("change", {
            state: helper.state,
            results: helper.lastResults,
            isPageReset: isPageReset,
            _uiState: _uiState
        });
    }
}
function getLocalWidgetsUiState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return widgets.reduce(function(uiState, widget) {
        if ((0, _indexJs.isIndexWidget)(widget)) return uiState;
        if (!widget.getWidgetUiState && !widget.getWidgetState) return uiState;
        if (widget.getWidgetUiState) return widget.getWidgetUiState(uiState, widgetStateOptions);
        return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties(widgetSearchParametersOptions, _excluded);
    return widgets.filter(function(widget) {
        return !(0, _indexJs.isIndexWidget)(widget);
    }).reduce(function(state, widget) {
        if (!widget.getWidgetSearchParameters) return state;
        return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
}
function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter((0, _indexJs.isIndexWidget));
    if (indexWidgets.length === 0) return;
    indexWidgets.forEach(function(widget) {
        var widgetHelper = widget.getHelper();
        privateHelperSetState(widgetHelper, {
            state: widgetHelper.state.resetPage(),
            isPageReset: true
        });
        resetPageFromWidgets(widget.getWidgets());
    });
}
function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter((0, _indexJs.isIndexWidget));
    return indexWidgets.reduce(function(scopedResults, current) {
        return scopedResults.concat.apply(scopedResults, [
            {
                indexId: current.getIndexId(),
                results: current.getResults(),
                helper: current.getHelper()
            }
        ].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
}
var index = function index(widgetParams) {
    if (widgetParams === undefined || widgetParams.indexName === undefined) throw new Error(withUsage("The `indexName` option is required."));
    var indexName = widgetParams.indexName, _widgetParams$indexId = widgetParams.indexId, indexId = _widgetParams$indexId === void 0 ? indexName : _widgetParams$indexId;
    var localWidgets = [];
    var localUiState = {};
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    var lastValidSearchParameters = null;
    return {
        $$type: "ais.index",
        $$widgetType: "ais.index",
        getIndexName: function getIndexName() {
            return indexName;
        },
        getIndexId: function getIndexId() {
            return indexId;
        },
        getHelper: function getHelper() {
            return helper;
        },
        getResults: function getResults() {
            var _derivedHelper;
            if (!((_derivedHelper = derivedHelper) !== null && _derivedHelper !== void 0 && _derivedHelper.lastResults)) return null;
            // To make the UI optimistic, we patch the state to display to the current
            // one instead of the one associated with the latest results.
            // This means user-driven UI changes (e.g., checked checkbox) are reflected
            // immediately instead of waiting for Algolia to respond, regardless of
            // the status of the network request.
            derivedHelper.lastResults._state = helper.state;
            return derivedHelper.lastResults;
        },
        getPreviousState: function getPreviousState() {
            return lastValidSearchParameters;
        },
        getScopedResults: function getScopedResults() {
            var widgetParent = this.getParent();
            // If the widget is the root, we consider itself as the only sibling.
            var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [
                this
            ];
            return resolveScopedResultsFromWidgets(widgetSiblings);
        },
        getParent: function getParent() {
            return localParent;
        },
        createURL: function createURL(nextState) {
            if (typeof nextState === "function") return localInstantSearchInstance._createURL(_defineProperty({}, indexId, nextState(localUiState)));
            return localInstantSearchInstance._createURL(_defineProperty({}, indexId, getLocalWidgetsUiState(localWidgets, {
                searchParameters: nextState,
                helper: helper
            })));
        },
        getWidgets: function getWidgets() {
            return localWidgets;
        },
        addWidgets: function addWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage("The `addWidgets` method expects an array of widgets."));
            if (widgets.some(function(widget) {
                return typeof widget.init !== "function" && typeof widget.render !== "function";
            })) throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
            localWidgets = localWidgets.concat(widgets);
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                privateHelperSetState(helper, {
                    state: getLocalWidgetsSearchParameters(localWidgets, {
                        uiState: localUiState,
                        initialSearchParameters: helper.state
                    }),
                    _uiState: localUiState
                });
                // We compute the render state before calling `init` in a separate loop
                // to construct the whole render state object that is then passed to
                // `init`.
                widgets.forEach(function(widget) {
                    if (widget.getRenderState) {
                        var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, (0, _indexJs.createInitArgs)(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
                        storeRenderState({
                            renderState: renderState,
                            instantSearchInstance: localInstantSearchInstance,
                            parent: _this
                        });
                    }
                });
                widgets.forEach(function(widget) {
                    if (widget.init) widget.init((0, _indexJs.createInitArgs)(localInstantSearchInstance, _this, localInstantSearchInstance._initialUiState));
                });
                localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        removeWidgets: function removeWidgets(widgets) {
            var _this2 = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage("The `removeWidgets` method expects an array of widgets."));
            if (widgets.some(function(widget) {
                return typeof widget.dispose !== "function";
            })) throw new Error(withUsage("The widget definition expects a `dispose` method."));
            localWidgets = localWidgets.filter(function(widget) {
                return widgets.indexOf(widget) === -1;
            });
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                var cleanedState = widgets.reduce(function(state, widget) {
                    // the `dispose` method exists at this point we already assert it
                    var next = widget.dispose({
                        helper: helper,
                        state: state,
                        parent: _this2
                    });
                    return next || state;
                }, helper.state);
                var newState = localInstantSearchInstance.future.preserveSharedStateOnUnmount ? getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: localUiState,
                    initialSearchParameters: new (0, _algoliasearchHelperDefault.default).SearchParameters({
                        index: this.getIndexName()
                    })
                }) : getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: getLocalWidgetsUiState(localWidgets, {
                        searchParameters: cleanedState,
                        helper: helper
                    }),
                    initialSearchParameters: cleanedState
                });
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: newState,
                    helper: helper
                });
                helper.setState(newState);
                if (localWidgets.length) localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        init: function init(_ref2) {
            var _this3 = this, _instantSearchInstanc;
            var instantSearchInstance = _ref2.instantSearchInstance, parent = _ref2.parent, uiState = _ref2.uiState;
            if (helper !== null) // helper is already initialized, therefore we do not need to set up
            // any listeners
            return;
            localInstantSearchInstance = instantSearchInstance;
            localParent = parent;
            localUiState = uiState[indexId] || {};
            // The `mainHelper` is already defined at this point. The instance is created
            // inside InstantSearch at the `start` method, which occurs before the `init`
            // step.
            var mainHelper = instantSearchInstance.mainHelper;
            var parameters = getLocalWidgetsSearchParameters(localWidgets, {
                uiState: localUiState,
                initialSearchParameters: new (0, _algoliasearchHelperDefault.default).SearchParameters({
                    index: indexName
                })
            });
            // This Helper is only used for state management we do not care about the
            // `searchClient`. Only the "main" Helper created at the `InstantSearch`
            // level is aware of the client.
            helper = (0, _algoliasearchHelperDefault.default)({}, parameters.index, parameters);
            // We forward the call to `search` to the "main" instance of the Helper
            // which is responsible for managing the queries (it's the only one that is
            // aware of the `searchClient`).
            helper.search = function() {
                if (instantSearchInstance.onStateChange) {
                    instantSearchInstance.onStateChange({
                        uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
                        setUiState: function setUiState(nextState) {
                            return instantSearchInstance.setUiState(nextState, false);
                        }
                    });
                    // We don't trigger a search when controlled because it becomes the
                    // responsibility of `setUiState`.
                    return mainHelper;
                }
                return mainHelper.search();
            };
            helper.searchWithoutTriggeringOnStateChange = function() {
                return mainHelper.search();
            };
            // We use the same pattern for the `searchForFacetValues`.
            helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
                var state = helper.state.setQueryParameters(userState);
                return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
            };
            derivedHelper = mainHelper.derive(function() {
                return (0, _indexJs.mergeSearchParameters).apply(void 0, [
                    mainHelper.state
                ].concat(_toConsumableArray((0, _indexJs.resolveSearchParameters)(_this3))));
            });
            var indexInitialResults = (_instantSearchInstanc = instantSearchInstance._initialResults) === null || _instantSearchInstanc === void 0 ? void 0 : _instantSearchInstanc[this.getIndexId()];
            if (indexInitialResults) {
                // We restore the shape of the results provided to the instance to respect
                // the helper's structure.
                var results = new (0, _algoliasearchHelperDefault.default).SearchResults(new (0, _algoliasearchHelperDefault.default).SearchParameters(indexInitialResults.state), indexInitialResults.results);
                derivedHelper.lastResults = results;
                helper.lastResults = results;
            }
            // Subscribe to the Helper state changes for the page before widgets
            // are initialized. This behavior mimics the original one of the Helper.
            // It makes sense to replicate it at the `init` step. We have another
            // listener on `change` below, once `init` is done.
            helper.on("change", function(_ref3) {
                var isPageReset = _ref3.isPageReset;
                if (isPageReset) resetPageFromWidgets(localWidgets);
            });
            derivedHelper.on("search", function() {
                // The index does not manage the "staleness" of the search. This is the
                // responsibility of the main instance. It does not make sense to manage
                // it at the index level because it's either: all of them or none of them
                // that are stalled. The queries are performed into a single network request.
                instantSearchInstance.scheduleStalledRender();
                (0, _indexJs.checkIndexUiState)({
                    index: _this3,
                    indexUiState: localUiState
                });
            });
            derivedHelper.on("result", function(_ref4) {
                var results = _ref4.results;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender();
                // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastResults, which it used to in pre-federated
                // search behavior.
                helper.lastResults = results;
                lastValidSearchParameters = results === null || results === void 0 ? void 0 : results._state;
            });
            // We compute the render state before calling `init` in a separate loop
            // to construct the whole render state object that is then passed to
            // `init`.
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, (0, _indexJs.createInitArgs)(instantSearchInstance, _this3, uiState));
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this3
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                (0, _indexJs.warning)(// if it has NO getWidgetState or if it has getWidgetUiState, we don't warn
                // aka we warn if there's _only_ getWidgetState
                !widget.getWidgetState || Boolean(widget.getWidgetUiState), "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.");
                if (widget.init) widget.init((0, _indexJs.createInitArgs)(instantSearchInstance, _this3, uiState));
            });
            // Subscribe to the Helper state changes for the `uiState` once widgets
            // are initialized. Until the first render, state changes are part of the
            // configuration step. This is mainly for backward compatibility with custom
            // widgets. When the subscription happens before the `init` step, the (static)
            // configuration of the widget is pushed in the URL. That's what we want to avoid.
            // https://github.com/algolia/instantsearch/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
            helper.on("change", function(event) {
                var state = event.state;
                var _uiState = event._uiState;
                localUiState = getLocalWidgetsUiState(localWidgets, {
                    searchParameters: state,
                    helper: helper
                }, _uiState || {});
                // We don't trigger an internal change when controlled because it
                // becomes the responsibility of `setUiState`.
                if (!instantSearchInstance.onStateChange) instantSearchInstance.onInternalStateChange();
            });
            if (indexInitialResults) // If there are initial results, we're not notified of the next results
            // because we don't trigger an initial search. We therefore need to directly
            // schedule a render that will render the results injected on the helper.
            instantSearchInstance.scheduleRender();
        },
        render: function render(_ref5) {
            var _this4 = this;
            var instantSearchInstance = _ref5.instantSearchInstance;
            // we can't attach a listener to the error event of search, as the error
            // then would no longer be thrown for global handlers.
            if (instantSearchInstance.status === "error" && !instantSearchInstance.mainHelper.hasPendingRequests() && lastValidSearchParameters) helper.setState(lastValidSearchParameters);
            // We only render index widgets if there are no results.
            // This makes sure `render` is never called with `results` being `null`.
            var widgetsToRender = this.getResults() ? localWidgets : localWidgets.filter((0, _indexJs.isIndexWidget));
            widgetsToRender.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this4.getIndexId()] || {}, (0, _indexJs.createRenderArgs)(instantSearchInstance, _this4));
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this4
                    });
                }
            });
            widgetsToRender.forEach(function(widget) {
                // At this point, all the variables used below are set. Both `helper`
                // and `derivedHelper` have been created at the `init` step. The attribute
                // `lastResults` might be `null` though. It's possible that a stalled render
                // happens before the result e.g with a dynamically added index the request might
                // be delayed. The render is triggered for the complete tree but some parts do
                // not have results yet.
                if (widget.render) widget.render((0, _indexJs.createRenderArgs)(instantSearchInstance, _this4));
            });
        },
        dispose: function dispose() {
            var _this5 = this, _helper, _derivedHelper2;
            localWidgets.forEach(function(widget) {
                if (widget.dispose) // The dispose function is always called once the instance is started
                // (it's an effect of `removeWidgets`). The index is initialized and
                // the Helper is available. We don't care about the return value of
                // `dispose` because the index is removed. We can't call `removeWidgets`
                // because we want to keep the widgets on the instance, to allow idempotent
                // operations on `add` & `remove`.
                widget.dispose({
                    helper: helper,
                    state: helper.state,
                    parent: _this5
                });
            });
            localInstantSearchInstance = null;
            localParent = null;
            (_helper = helper) === null || _helper === void 0 || _helper.removeAllListeners();
            helper = null;
            (_derivedHelper2 = derivedHelper) === null || _derivedHelper2 === void 0 || _derivedHelper2.detach();
            derivedHelper = null;
        },
        getWidgetUiState: function getWidgetUiState(uiState) {
            return localWidgets.filter((0, _indexJs.isIndexWidget)).reduce(function(previousUiState, innerIndex) {
                return innerIndex.getWidgetUiState(previousUiState);
            }, _objectSpread(_objectSpread({}, uiState), {}, _defineProperty({}, indexId, _objectSpread(_objectSpread({}, uiState[indexId]), localUiState))));
        },
        getWidgetState: function getWidgetState(uiState) {
            (0, _indexJs.warning)(false, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.");
            return this.getWidgetUiState(uiState);
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
            var uiState = _ref6.uiState;
            return getLocalWidgetsSearchParameters(localWidgets, {
                uiState: uiState,
                initialSearchParameters: searchParameters
            });
        },
        refreshUiState: function refreshUiState() {
            localUiState = getLocalWidgetsUiState(localWidgets, {
                searchParameters: this.getHelper().state,
                helper: this.getHelper()
            }, localUiState);
        },
        setIndexUiState: function setIndexUiState(indexUiState) {
            var nextIndexUiState = typeof indexUiState === "function" ? indexUiState(localUiState) : indexUiState;
            localInstantSearchInstance.setUiState(function(state) {
                return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, indexId, nextIndexUiState));
            });
        }
    };
};
exports.default = index;
function storeRenderState(_ref7) {
    var renderState = _ref7.renderState, instantSearchInstance = _ref7.instantSearchInstance, parent = _ref7.parent;
    var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
    instantSearchInstance.renderState = _objectSpread(_objectSpread({}, instantSearchInstance.renderState), {}, _defineProperty({}, parentIndexName, _objectSpread(_objectSpread({}, instantSearchInstance.renderState[parentIndexName]), renderState)));
}

},{"algoliasearch-helper":"jGqjt","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8IHo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>hoganHelpers);
var _indexJs = require("../helpers/index.js");
var _formatNumberJs = require("./formatNumber.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
        formatNumber: function formatNumber(value, render) {
            return (0, _formatNumberJs.formatNumber)(Number(render(value)), numberLocale);
        },
        highlight: function highlight(options, render) {
            try {
                var highlightOptions = JSON.parse(options);
                return render((0, _indexJs.highlight)(_objectSpread(_objectSpread({}, highlightOptions), {}, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        reverseHighlight: function reverseHighlight(options, render) {
            try {
                var reverseHighlightOptions = JSON.parse(options);
                return render((0, _indexJs.reverseHighlight)(_objectSpread(_objectSpread({}, reverseHighlightOptions), {}, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        snippet: function snippet(options, render) {
            try {
                var snippetOptions = JSON.parse(options);
                return render((0, _indexJs.snippet)(_objectSpread(_objectSpread({}, snippetOptions), {}, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        reverseSnippet: function reverseSnippet(options, render) {
            try {
                var reverseSnippetOptions = JSON.parse(options);
                return render((0, _indexJs.reverseSnippet)(_objectSpread(_objectSpread({}, reverseSnippetOptions), {}, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        insights: function insights(options, render) {
            try {
                var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
                return render((0, _indexJs.insights)(method, _objectSpread({
                    objectIDs: [
                        this.objectID
                    ]
                }, payload)));
            } catch (error) {
                throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
            }
        }
    };
}

},{"../helpers/index.js":"8kgzi","./formatNumber.js":"dXHIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXHIt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatNumber", ()=>formatNumber);
function formatNumber(value, numberLocale) {
    return value.toLocaleString(numberLocale);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkkLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "4.60.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bk5Jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analytics", ()=>(0, _analyticsJsDefault.default));
parcelHelpers.export(exports, "breadcrumb", ()=>(0, _breadcrumbJsDefault.default));
parcelHelpers.export(exports, "clearRefinements", ()=>(0, _clearRefinementsJsDefault.default));
parcelHelpers.export(exports, "configure", ()=>(0, _configureJsDefault.default));
parcelHelpers.export(exports, "currentRefinements", ()=>(0, _currentRefinementsJsDefault.default));
parcelHelpers.export(exports, "EXPERIMENTAL_configureRelatedItems", ()=>(0, _configureRelatedItemsJsDefault.default));
parcelHelpers.export(exports, "geoSearch", ()=>(0, _geoSearchJsDefault.default));
parcelHelpers.export(exports, "hierarchicalMenu", ()=>(0, _hierarchicalMenuJsDefault.default));
parcelHelpers.export(exports, "hits", ()=>(0, _hitsJsDefault.default));
parcelHelpers.export(exports, "hitsPerPage", ()=>(0, _hitsPerPageJsDefault.default));
parcelHelpers.export(exports, "index", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "infiniteHits", ()=>(0, _infiniteHitsJsDefault.default));
parcelHelpers.export(exports, "menu", ()=>(0, _menuJsDefault.default));
parcelHelpers.export(exports, "menuSelect", ()=>(0, _menuSelectJsDefault.default));
parcelHelpers.export(exports, "numericMenu", ()=>(0, _numericMenuJsDefault.default));
parcelHelpers.export(exports, "pagination", ()=>(0, _paginationJsDefault.default));
parcelHelpers.export(exports, "panel", ()=>(0, _panelJsDefault.default));
parcelHelpers.export(exports, "places", ()=>(0, _placesJsDefault.default));
parcelHelpers.export(exports, "poweredBy", ()=>(0, _poweredByJsDefault.default));
parcelHelpers.export(exports, "queryRuleContext", ()=>(0, _queryRuleContextJsDefault.default));
parcelHelpers.export(exports, "queryRuleCustomData", ()=>(0, _queryRuleCustomDataJsDefault.default));
parcelHelpers.export(exports, "rangeInput", ()=>(0, _rangeInputJsDefault.default));
parcelHelpers.export(exports, "rangeSlider", ()=>(0, _rangeSliderJsDefault.default));
parcelHelpers.export(exports, "ratingMenu", ()=>(0, _ratingMenuJsDefault.default));
parcelHelpers.export(exports, "refinementList", ()=>(0, _refinementListJsDefault.default));
parcelHelpers.export(exports, "relevantSort", ()=>(0, _relevantSortJsDefault.default));
parcelHelpers.export(exports, "searchBox", ()=>(0, _searchBoxJsDefault.default));
parcelHelpers.export(exports, "sortBy", ()=>(0, _sortByJsDefault.default));
parcelHelpers.export(exports, "stats", ()=>(0, _statsJsDefault.default));
parcelHelpers.export(exports, "toggleRefinement", ()=>(0, _toggleRefinementJsDefault.default));
parcelHelpers.export(exports, "voiceSearch", ()=>(0, _voiceSearchJsDefault.default));
parcelHelpers.export(exports, "EXPERIMENTAL_answers", ()=>EXPERIMENTAL_answers);
parcelHelpers.export(exports, "EXPERIMENTAL_dynamicWidgets", ()=>EXPERIMENTAL_dynamicWidgets);
parcelHelpers.export(exports, "dynamicWidgets", ()=>(0, _dynamicWidgetsJsDefault.default));
var _indexJs = require("../lib/utils/index.js");
var _answersJs = require("./answers/answers.js");
var _answersJsDefault = parcelHelpers.interopDefault(_answersJs);
var _dynamicWidgetsJs = require("./dynamic-widgets/dynamic-widgets.js");
var _dynamicWidgetsJsDefault = parcelHelpers.interopDefault(_dynamicWidgetsJs);
var _analyticsJs = require("./analytics/analytics.js");
var _analyticsJsDefault = parcelHelpers.interopDefault(_analyticsJs);
var _breadcrumbJs = require("./breadcrumb/breadcrumb.js");
var _breadcrumbJsDefault = parcelHelpers.interopDefault(_breadcrumbJs);
var _clearRefinementsJs = require("./clear-refinements/clear-refinements.js");
var _clearRefinementsJsDefault = parcelHelpers.interopDefault(_clearRefinementsJs);
var _configureJs = require("./configure/configure.js");
var _configureJsDefault = parcelHelpers.interopDefault(_configureJs);
var _currentRefinementsJs = require("./current-refinements/current-refinements.js");
var _currentRefinementsJsDefault = parcelHelpers.interopDefault(_currentRefinementsJs);
var _configureRelatedItemsJs = require("./configure-related-items/configure-related-items.js");
var _configureRelatedItemsJsDefault = parcelHelpers.interopDefault(_configureRelatedItemsJs);
var _geoSearchJs = require("./geo-search/geo-search.js");
var _geoSearchJsDefault = parcelHelpers.interopDefault(_geoSearchJs);
var _hierarchicalMenuJs = require("./hierarchical-menu/hierarchical-menu.js");
var _hierarchicalMenuJsDefault = parcelHelpers.interopDefault(_hierarchicalMenuJs);
var _hitsJs = require("./hits/hits.js");
var _hitsJsDefault = parcelHelpers.interopDefault(_hitsJs);
var _hitsPerPageJs = require("./hits-per-page/hits-per-page.js");
var _hitsPerPageJsDefault = parcelHelpers.interopDefault(_hitsPerPageJs);
var _indexJs1 = require("./index/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _infiniteHitsJs = require("./infinite-hits/infinite-hits.js");
var _infiniteHitsJsDefault = parcelHelpers.interopDefault(_infiniteHitsJs);
var _menuJs = require("./menu/menu.js");
var _menuJsDefault = parcelHelpers.interopDefault(_menuJs);
var _menuSelectJs = require("./menu-select/menu-select.js");
var _menuSelectJsDefault = parcelHelpers.interopDefault(_menuSelectJs);
var _numericMenuJs = require("./numeric-menu/numeric-menu.js");
var _numericMenuJsDefault = parcelHelpers.interopDefault(_numericMenuJs);
var _paginationJs = require("./pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _panelJs = require("./panel/panel.js");
var _panelJsDefault = parcelHelpers.interopDefault(_panelJs);
var _placesJs = require("./places/places.js");
var _placesJsDefault = parcelHelpers.interopDefault(_placesJs);
var _poweredByJs = require("./powered-by/powered-by.js");
var _poweredByJsDefault = parcelHelpers.interopDefault(_poweredByJs);
var _queryRuleContextJs = require("./query-rule-context/query-rule-context.js");
var _queryRuleContextJsDefault = parcelHelpers.interopDefault(_queryRuleContextJs);
var _queryRuleCustomDataJs = require("./query-rule-custom-data/query-rule-custom-data.js");
var _queryRuleCustomDataJsDefault = parcelHelpers.interopDefault(_queryRuleCustomDataJs);
var _rangeInputJs = require("./range-input/range-input.js");
var _rangeInputJsDefault = parcelHelpers.interopDefault(_rangeInputJs);
var _rangeSliderJs = require("./range-slider/range-slider.js");
var _rangeSliderJsDefault = parcelHelpers.interopDefault(_rangeSliderJs);
var _ratingMenuJs = require("./rating-menu/rating-menu.js");
var _ratingMenuJsDefault = parcelHelpers.interopDefault(_ratingMenuJs);
var _refinementListJs = require("./refinement-list/refinement-list.js");
var _refinementListJsDefault = parcelHelpers.interopDefault(_refinementListJs);
var _relevantSortJs = require("./relevant-sort/relevant-sort.js");
var _relevantSortJsDefault = parcelHelpers.interopDefault(_relevantSortJs);
var _searchBoxJs = require("./search-box/search-box.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
var _sortByJs = require("./sort-by/sort-by.js");
var _sortByJsDefault = parcelHelpers.interopDefault(_sortByJs);
var _statsJs = require("./stats/stats.js");
var _statsJsDefault = parcelHelpers.interopDefault(_statsJs);
var _toggleRefinementJs = require("./toggle-refinement/toggle-refinement.js");
var _toggleRefinementJsDefault = parcelHelpers.interopDefault(_toggleRefinementJs);
var _voiceSearchJs = require("./voice-search/voice-search.js");
var _voiceSearchJsDefault = parcelHelpers.interopDefault(_voiceSearchJs);
var EXPERIMENTAL_answers = (0, _indexJs.deprecate)((0, _answersJsDefault.default), "answers is no longer supported");
var EXPERIMENTAL_dynamicWidgets = (0, _indexJs.deprecate)((0, _dynamicWidgetsJsDefault.default), "use dynamicWidgets");

},{"../lib/utils/index.js":"etVYs","./answers/answers.js":"gPI3S","./dynamic-widgets/dynamic-widgets.js":"rM3hn","./analytics/analytics.js":false,"./breadcrumb/breadcrumb.js":false,"./clear-refinements/clear-refinements.js":false,"./configure/configure.js":false,"./current-refinements/current-refinements.js":false,"./configure-related-items/configure-related-items.js":false,"./geo-search/geo-search.js":false,"./hierarchical-menu/hierarchical-menu.js":false,"./hits/hits.js":"bPDYG","./hits-per-page/hits-per-page.js":false,"./index/index.js":false,"./infinite-hits/infinite-hits.js":false,"./menu/menu.js":false,"./menu-select/menu-select.js":false,"./numeric-menu/numeric-menu.js":false,"./pagination/pagination.js":"aGC8J","./panel/panel.js":false,"./places/places.js":false,"./powered-by/powered-by.js":false,"./query-rule-context/query-rule-context.js":false,"./query-rule-custom-data/query-rule-custom-data.js":false,"./range-input/range-input.js":false,"./range-slider/range-slider.js":false,"./rating-menu/rating-menu.js":false,"./refinement-list/refinement-list.js":"5rn2R","./relevant-sort/relevant-sort.js":false,"./search-box/search-box.js":"jSd18","./sort-by/sort-by.js":false,"./stats/stats.js":false,"./toggle-refinement/toggle-refinement.js":false,"./voice-search/voice-search.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPI3S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _answersJs = require("../../components/Answers/Answers.js");
var _answersJsDefault = parcelHelpers.interopDefault(_answersJs);
var _connectAnswersJs = require("../../connectors/answers/connectAnswers.js");
var _connectAnswersJsDefault = parcelHelpers.interopDefault(_connectAnswersJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/templating/index.js");
var _indexJs1 = require("../../lib/utils/index.js");
var _defaultTemplatesJs = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs1.createDocumentationMessageGenerator)({
    name: "answers"
});
var suit = (0, _suitJs.component)("Answers");
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, renderState = _ref.renderState, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
        var hits = _ref2.hits, isLoading = _ref2.isLoading, instantSearchInstance = _ref2.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _indexJs.prepareTemplateProps)({
                defaultTemplates: (0, _defaultTemplatesJsDefault.default),
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)((0, _preact.h)((0, _answersJsDefault.default), {
            cssClasses: cssClasses,
            hits: hits,
            isLoading: isLoading,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
var answersWidget = function answersWidget(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, attributesForPrediction = _ref3.attributesForPrediction, queryLanguages = _ref3.queryLanguages, nbHits = _ref3.nbHits, searchDebounceTime = _ref3.searchDebounceTime, renderDebounceTime = _ref3.renderDebounceTime, escapeHTML = _ref3.escapeHTML, extraParameters = _ref3.extraParameters, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {} : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _indexJs1.getContainerNode)(container);
    var cssClasses = {
        root: (0, _uiComponentsShared.cx)(suit(), userCssClasses.root),
        emptyRoot: (0, _uiComponentsShared.cx)(suit({
            modifierName: "empty"
        }), userCssClasses.emptyRoot),
        header: (0, _uiComponentsShared.cx)(suit({
            descendantName: "header"
        }), userCssClasses.header),
        loader: (0, _uiComponentsShared.cx)(suit({
            descendantName: "loader"
        }), userCssClasses.loader),
        list: (0, _uiComponentsShared.cx)(suit({
            descendantName: "list"
        }), userCssClasses.list),
        item: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item"
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = (0, _connectAnswersJsDefault.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _objectSpread(_objectSpread({}, makeWidget({
        attributesForPrediction: attributesForPrediction,
        queryLanguages: queryLanguages,
        nbHits: nbHits,
        searchDebounceTime: searchDebounceTime,
        renderDebounceTime: renderDebounceTime,
        escapeHTML: escapeHTML,
        extraParameters: extraParameters
    })), {}, {
        $$widgetType: "ais.answers"
    });
};
exports.default = answersWidget;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../components/Answers/Answers.js":"1xwOr","../../connectors/answers/connectAnswers.js":"9medE","../../lib/suit.js":"du81D","../../lib/templating/index.js":"aFegL","../../lib/utils/index.js":"etVYs","./defaultTemplates.js":"7YIrg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dPT3X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cx = require("./cx");
parcelHelpers.exportAll(_cx, exports);
var _renderer = require("./Renderer");
parcelHelpers.exportAll(_renderer, exports);

},{"./cx":"2mnDv","./Renderer":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mnDv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cx", ()=>cx);
function cx() {
    for(var _len = arguments.length, cssClasses = new Array(_len), _key = 0; _key < _len; _key++)cssClasses[_key] = arguments[_key];
    return cssClasses.reduce(function(acc, className) {
        if (Array.isArray(className)) return acc.concat(className);
        return acc.concat([
            className
        ]);
    }, []).filter(Boolean).join(" ");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>m);
parcelHelpers.export(exports, "Fragment", ()=>k);
parcelHelpers.export(exports, "cloneElement", ()=>F);
parcelHelpers.export(exports, "createContext", ()=>G);
parcelHelpers.export(exports, "createElement", ()=>y);
parcelHelpers.export(exports, "createRef", ()=>_);
parcelHelpers.export(exports, "h", ()=>y);
parcelHelpers.export(exports, "hydrate", ()=>E);
parcelHelpers.export(exports, "isValidElement", ()=>t);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>$);
var n, l, u, t, i, o, r, f, e, c = {}, s = [], a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v = Array.isArray;
function h(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function p(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function y(l, u, t) {
    var i, o, r, f = {};
    for(r in u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return d(l, f, i, o, null);
}
function d(n, t, i, o, r) {
    var f = {
        type: n,
        props: t,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r ? ++u : r,
        __i: -1
    };
    return null == r && null != l.vnode && l.vnode(f), f;
}
function _() {
    return {
        current: null
    };
}
function k(n) {
    return n.children;
}
function m(n, l) {
    this.props = n, this.context = l;
}
function b(n, l) {
    if (null == l) return n.__ ? b(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? b(n) : null;
}
function g(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return g(n);
    }
}
function w(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
    var n, l, u, t, o, r, e, c, s;
    for(i.sort(f); n = i.shift();)n.__d && (l = i.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = h({}, e)).__v = e.__v + 1, z(s, r, e, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [
        c
    ] : null, t, null == c ? b(e) : c, e.__h, o), r.__.__k[r.__i] = r, L(t, r, o), r.__e != c && g(r)), i.length > l && i.sort(f));
    x.__r = 0;
}
function C(n, l, u, t, i, o, r, f, e, a, h) {
    var p, y, _, m, g, w, x, C, $, D = 0, H = t && t.__k || s, I = H.length, T = I, j = l.length;
    for(u.__k = [], p = 0; p < j; p++)null != (m = u.__k[p] = null == (m = l[p]) || "boolean" == typeof m || "function" == typeof m ? null : m.constructor == String || "number" == typeof m || "bigint" == typeof m ? d(null, m, null, null, m) : v(m) ? d(k, {
        children: m
    }, null, null, null) : m.__b > 0 ? d(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) ? (m.__ = u, m.__b = u.__b + 1, m.__i = p, -1 === (C = A(m, H, x = p + D, T)) ? _ = c : (_ = H[C] || c, H[C] = void 0, T--), z(n, m, _, i, o, r, f, e, a, h), g = m.__e, (y = m.ref) && _.ref != y && (_.ref && N(_.ref, null, m), h.push(y, m.__c || g, m)), null == w && null != g && (w = g), ($ = _ === c || null === _.__v) ? -1 == C && D-- : C !== x && (C === x + 1 ? D++ : C > x ? T > j - x ? D += C - x : D-- : D = C < x && C == x - 1 ? C - x : 0), x = p + D, "function" == typeof m.type ? (C !== x || _.__k === m.__k ? e = P(m, e, n) : void 0 !== m.__d ? e = m.__d : g && (e = g.nextSibling), m.__d = void 0) : g && (e = C !== x || $ ? S(n, g, e) : g.nextSibling), "function" == typeof u.type && (u.__d = e)) : (_ = H[p]) && null == _.key && _.__e && (_.__e == e && (e = b(_), "function" == typeof u.type && (u.__d = e)), O(_, _, !1), H[p] = null);
    for(u.__e = w, p = I; p--;)null != H[p] && ("function" == typeof u.type && null != H[p].__e && H[p].__e == e && (u.__d = H[p].__e.nextSibling), O(H[p], H[p]));
}
function P(n, l, u) {
    for(var t, i = n.__k, o = 0; i && o < i.length; o++)(t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? P(t, l, u) : S(u, t.__e, l));
    return l;
}
function $(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (v(n) ? n.some(function(n) {
        $(n, l);
    }) : l.push(n)), l;
}
function S(n, l, u) {
    return l != u && n.insertBefore(l, u || null), l.nextSibling;
}
function A(n, l, u, t) {
    var i = n.key, o = n.type, r = u - 1, f = u + 1, e = l[u];
    if (null === e || e && i == e.key && o === e.type) return u;
    if (t > (null != e ? 1 : 0)) for(; r >= 0 || f < l.length;){
        if (r >= 0) {
            if ((e = l[r]) && i == e.key && o === e.type) return r;
            r--;
        }
        if (f < l.length) {
            if ((e = l[f]) && i == e.key && o === e.type) return f;
            f++;
        }
    }
    return -1;
}
function D(n, l, u, t, i) {
    var o;
    for(o in u)"children" === o || "key" === o || o in l || I(n, o, null, u[o], t);
    for(o in l)i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || I(n, o, l[o], u[o], t);
}
function H(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function I(n, l, u, t, i) {
    var o;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || H(n.style, l, "");
            if (u) for(l in u)t && u[l] === t[l] || H(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = Date.now(), n.addEventListener(l, o ? j : T, o)) : n.removeEventListener(l, o ? j : T, o);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && "role" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function T(n) {
    var u = this.l[n.type + !1];
    if (n.t) {
        if (n.t <= u.u) return;
    } else n.t = Date.now();
    return u(l.event ? l.event(n) : n);
}
function j(n) {
    return this.l[n.type + !0](l.event ? l.event(n) : n);
}
function z(n, u, t, i, o, r, f, e, c, s) {
    var a, p, y, d, _, b, g, w, x, P, $, S, A, D, H, I = u.type;
    if (void 0 !== u.constructor) return null;
    null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [
        e
    ]), (a = l.__b) && a(u);
    n: if ("function" == typeof I) try {
        if (w = u.props, x = (a = I.contextType) && i[a.__c], P = a ? x ? x.props.value : a.__ : i, t.__c ? g = (p = u.__c = t.__c).__ = p.__E : ("prototype" in I && I.prototype.render ? u.__c = p = new I(w, P) : (u.__c = p = new m(w, P), p.constructor = I, p.render = q), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = P, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != I.getDerivedStateFromProps && (p.__s == p.state && (p.__s = h({}, p.__s)), h(p.__s, I.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == I.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
        else {
            if (null == I.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, P), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, P) || u.__v === t.__v)) {
                for(u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < p._sb.length; $++)p.__h.push(p._sb[$]);
                p._sb = [], p.__h.length && f.push(p);
                break n;
            }
            null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, P), null != p.componentDidUpdate && p.__h.push(function() {
                p.componentDidUpdate(d, _, b);
            });
        }
        if (p.context = P, p.props = w, p.__P = n, p.__e = !1, S = l.__r, A = 0, "prototype" in I && I.prototype.render) {
            for(p.state = p.__s, p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), D = 0; D < p._sb.length; D++)p.__h.push(p._sb[D]);
            p._sb = [];
        } else do p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
        while (p.__d && ++A < 25);
        p.state = p.__s, null != p.getChildContext && (i = h(h({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (b = p.getSnapshotBeforeUpdate(d, _)), C(n, v(H = null != a && a.type === k && null == a.key ? a.props.children : a) ? H : [
            H
        ], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), g && (p.__E = p.__ = null);
    } catch (n) {
        u.__v = null, c || null != r ? (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null) : (u.__e = t.__e, u.__k = t.__k), l.__e(n, u, t);
    }
    else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = M(t.__e, u, t, i, o, r, f, c, s);
    (a = l.diffed) && a(u);
}
function L(n, u, t) {
    u.__d = void 0;
    for(var i = 0; i < t.length; i++)N(t[i], t[++i], t[++i]);
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function M(l, u, t, i, o, r, f, e, s) {
    var a, h, y, d = t.props, _ = u.props, k = u.type, m = 0;
    if ("svg" === k && (o = !0), null != r) {
        for(; m < r.length; m++)if ((a = r[m]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
            l = a, r[m] = null;
            break;
        }
    }
    if (null == l) {
        if (null === k) return document.createTextNode(_);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
    }
    if (null === k) d === _ || e && l.data === _ || (l.data = _);
    else {
        if (r = r && n.call(l.childNodes), h = (d = t.props || c).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
            if (null != r) for(d = {}, m = 0; m < l.attributes.length; m++)d[l.attributes[m].name] = l.attributes[m].value;
            (y || h) && (y && (h && y.__html == h.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
        }
        if (D(l, _, d, o, e), y) u.__k = [];
        else if (C(l, v(m = u.props.children) ? m : [
            m
        ], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && b(t, 0), e, s), null != r) for(m = r.length; m--;)null != r[m] && p(r[m]);
        e || ("value" in _ && void 0 !== (m = _.value) && (m !== l.value || "progress" === k && !m || "option" === k && m !== d.value) && I(l, "value", m, d.value, !1), "checked" in _ && void 0 !== (m = _.checked) && m !== l.checked && I(l, "checked", m, d.checked, !1));
    }
    return l;
}
function N(n, u, t) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, t);
    }
}
function O(n, u, t) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        i.base = i.__P = null, n.__c = void 0;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && O(i[o], u, t || "function" != typeof n.type);
    t || null == n.__e || p(n.__e), n.__ = n.__e = n.__d = void 0;
}
function q(n, l, u) {
    return this.constructor(n, u);
}
function B(u, t, i) {
    var o, r, f, e;
    l.__ && l.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], z(t, u = (!o && i || t).__k = y(k, null, [
        u
    ]), r || c, c, void 0 !== t.ownerSVGElement, !o && i ? [
        i
    ] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), L(f, u, e);
}
function E(n, l) {
    B(n, l, E);
}
function F(l, u, t) {
    var i, o, r, f, e = h({}, l.props);
    for(r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u)"key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
    return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
    var u = {
        __c: l = "__cC" + e++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, t;
            return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function() {
                return t;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(function(n) {
                    n.__e = !0, w(n);
                });
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
    __e: function(n, l, u, t) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, t = function(n) {
    return null != n && null == n.constructor;
}, m.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), w(this));
}, m.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), w(this));
}, m.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, x.__r = 0, e = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xwOr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var Answers = function Answers(_ref) {
    var hits = _ref.hits, isLoading = _ref.isLoading, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    return (0, _preact.h)("div", {
        className: (0, _uiComponentsShared.cx)(cssClasses.root, hits.length === 0 && cssClasses.emptyRoot)
    }, (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
        templateKey: "header",
        rootProps: {
            className: cssClasses.header
        },
        data: {
            hits: hits,
            isLoading: isLoading
        }
    })), isLoading ? (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
        templateKey: "loader",
        rootProps: {
            className: cssClasses.loader
        }
    })) : (0, _preact.h)("ul", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _objectSpread(_objectSpread({}, hit), {}, {
                get __hitIndex () {
                    (0, _indexJs.warning)(false, "The `__hitIndex` property is deprecated. Use the absolute `__position` instead.");
                    return index;
                }
            })
        }));
    })));
};
exports.default = Answers;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVPg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _indexJs = require("../../lib/templating/index.js");
var _indexJs1 = require("../../lib/utils/index.js");
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var defaultProps = {
    data: {},
    rootTagName: "div",
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
};
// @TODO: Template should be a generic and receive TData to pass to Templates (to avoid TTemplateData to be set as `any`)
var Template = /*#__PURE__*/ function(_Component) {
    _inherits(Template, _Component);
    var _super = _createSuper(Template);
    function Template() {
        _classCallCheck(this, Template);
        return _super.apply(this, arguments);
    }
    _createClass(Template, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !(0, _indexJs1.isEqual)(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !(0, _indexJs1.isEqual)(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var nonFunctionTemplates = Object.keys(this.props.templates).filter(function(key) {
                    return typeof _this.props.templates[key] !== "function";
                });
                (0, _indexJs1.warning)(nonFunctionTemplates.length === 0, "Hogan.js and string-based templates are deprecated and will not be supported in InstantSearch.js 5.x.\n\nYou can replace them with function-form templates and use either the provided `html` function or JSX templates.\n\nString-based templates: ".concat(nonFunctionTemplates.join(", "), ".\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/upgrade-guides/js/#upgrade-templates"));
                var RootTagName = this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
                var content = (0, _indexJs.renderTemplate)({
                    templates: this.props.templates,
                    templateKey: this.props.templateKey,
                    compileOptions: compileOptions,
                    helpers: this.props.templatesConfig.helpers,
                    data: this.props.data,
                    bindEvent: this.props.bindEvent,
                    sendEvent: this.props.sendEvent
                });
                if (content === null) // Adds a noscript to the DOM but virtual DOM is null
                // See http://facebook.github.io/react/docs/component-specs.html#render
                return null;
                if (_typeof(content) === "object") return (0, _preact.h)(RootTagName, this.props.rootProps, content);
                return (0, _preact.h)(RootTagName, _extends({}, this.props.rootProps, {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template;
}((0, _preact.Component));
_defineProperty(Template, "defaultProps", defaultProps);
exports.default = Template;

},{"preact":"26zcy","../../lib/templating/index.js":"aFegL","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFegL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _prepareTemplatePropsJs = require("./prepareTemplateProps.js");
parcelHelpers.exportAll(_prepareTemplatePropsJs, exports);
var _renderTemplateJs = require("./renderTemplate.js");
parcelHelpers.exportAll(_renderTemplateJs, exports);

},{"./prepareTemplateProps.js":"lSxsR","./renderTemplate.js":"eHJGm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSxsR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Prepares an object to be passed to the Template widget
 */ parcelHelpers.export(exports, "prepareTemplateProps", ()=>prepareTemplateProps);
var _uniqJs = require("../utils/uniq.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function prepareTemplates(// can not use = {} here, since the template could have different constraints
defaultTemplates) {
    var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allKeys = (0, _uniqJs.uniq)([].concat(_toConsumableArray(Object.keys(defaultTemplates || {})), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function(config, key) {
        var defaultTemplate = defaultTemplates ? defaultTemplates[key] : undefined;
        var customTemplate = templates[key];
        var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
        config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
        config.useCustomCompileOptions[key] = isCustomTemplate;
        return config;
    }, {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        templates: {},
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        useCustomCompileOptions: {}
    });
}
function prepareTemplateProps(_ref) {
    var defaultTemplates = _ref.defaultTemplates, templates = _ref.templates, templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _objectSpread({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}

},{"../utils/uniq.js":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHJGm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTemplate", ()=>renderTemplate);
var _hoganJs = require("hogan.js");
var _hoganJsDefault = parcelHelpers.interopDefault(_hoganJs);
var _preact = require("htm/preact");
var _indexJs = require("../../helpers/components/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// We add all our template helper methods to the template as lambdas. Note
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
    var data = arguments.length > 2 ? arguments[2] : undefined;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return (0, _hoganJsDefault.default).compile(value, compileOptions).render(_this);
                };
                return helpers[helperKey].call(data, text, render);
            };
        }));
    }, {});
}
function renderTemplate(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, compileOptions = _ref.compileOptions, helpers = _ref.helpers, data = _ref.data, bindEvent = _ref.bindEvent, sendEvent = _ref.sendEvent;
    var template = templates[templateKey];
    if (typeof template !== "string" && typeof template !== "function") throw new Error("Template must be 'string' or 'function', was '".concat(_typeof(template), "' (key: ").concat(templateKey, ")"));
    if (typeof template === "function") {
        // @MAJOR no longer pass bindEvent when string templates are removed
        var params = bindEvent || {};
        params.html = (0, _preact.html);
        params.sendEvent = sendEvent;
        params.components = {
            Highlight: (0, _indexJs.Highlight),
            ReverseHighlight: (0, _indexJs.ReverseHighlight),
            Snippet: (0, _indexJs.Snippet),
            ReverseSnippet: (0, _indexJs.ReverseSnippet)
        };
        // @MAJOR remove the `as any` when string templates are removed
        // needed because not every template receives sendEvent
        return template(data, params);
    }
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return (0, _hoganJsDefault.default).compile(template, compileOptions).render(_objectSpread(_objectSpread({}, data), {}, {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
    }).trim();
}

},{"hogan.js":"gkYEi","htm/preact":"69o8G","../../helpers/components/index.js":"loU9i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkYEi":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ // This file is for use with Node.js. See dist/ for browser files.
var Hogan = require("4e66dbf6cb8a598f");
Hogan.Template = require("e7deafde58d5557f").Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;

},{"4e66dbf6cb8a598f":"ezTiX","e7deafde58d5557f":"kCFri"}],"ezTiX":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ (function(Hogan) {
    // Setup regex  assignments
    // remove whitespace according to Mustache spec
    var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
    Hogan.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        "$": 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        "_v": 9,
        "{": 10,
        "&": 11,
        "_t": 12
    };
    Hogan.scan = function scan(text, delimiters) {
        var len = text.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = "", tokens = [], seenTag = false, i = 0, lineStart = 0, otag = "{{", ctag = "}}";
        function addBuf() {
            if (buf.length > 0) {
                tokens.push({
                    tag: "_t",
                    text: new String(buf)
                });
                buf = "";
            }
        }
        function lineIsWhitespace() {
            var isAllWhitespace = true;
            for(var j = lineStart; j < tokens.length; j++){
                isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
                if (!isAllWhitespace) return false;
            }
            return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
            addBuf();
            if (haveSeenTag && lineIsWhitespace()) {
                for(var j = lineStart, next; j < tokens.length; j++)if (tokens[j].text) {
                    if ((next = tokens[j + 1]) && next.tag == ">") // set indent to token value
                    next.indent = tokens[j].text.toString();
                    tokens.splice(j, 1);
                }
            } else if (!noNewLine) tokens.push({
                tag: "\n"
            });
            seenTag = false;
            lineStart = tokens.length;
        }
        function changeDelimiters(text, index) {
            var close = "=" + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf("=", index) + 1, closeIndex)).split(" ");
            otag = delimiters[0];
            ctag = delimiters[delimiters.length - 1];
            return closeIndex + close.length - 1;
        }
        if (delimiters) {
            delimiters = delimiters.split(" ");
            otag = delimiters[0];
            ctag = delimiters[1];
        }
        for(i = 0; i < len; i++){
            if (state == IN_TEXT) {
                if (tagChange(otag, text, i)) {
                    --i;
                    addBuf();
                    state = IN_TAG_TYPE;
                } else if (text.charAt(i) == "\n") filterLine(seenTag);
                else buf += text.charAt(i);
            } else if (state == IN_TAG_TYPE) {
                i += otag.length - 1;
                tag = Hogan.tags[text.charAt(i + 1)];
                tagType = tag ? text.charAt(i + 1) : "_v";
                if (tagType == "=") {
                    i = changeDelimiters(text, i);
                    state = IN_TEXT;
                } else {
                    if (tag) i++;
                    state = IN_TAG;
                }
                seenTag = i;
            } else if (tagChange(ctag, text, i)) {
                tokens.push({
                    tag: tagType,
                    n: trim(buf),
                    otag: otag,
                    ctag: ctag,
                    i: tagType == "/" ? seenTag - otag.length : i + ctag.length
                });
                buf = "";
                i += ctag.length - 1;
                state = IN_TEXT;
                if (tagType == "{") {
                    if (ctag == "}}") i++;
                    else cleanTripleStache(tokens[tokens.length - 1]);
                }
            } else buf += text.charAt(i);
        }
        filterLine(seenTag, true);
        return tokens;
    };
    function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === "}") token.n = token.n.substring(0, token.n.length - 1);
    }
    function trim(s) {
        if (s.trim) return s.trim();
        return s.replace(/^\s*|\s*$/g, "");
    }
    function tagChange(tag, text, index) {
        if (text.charAt(index) != tag.charAt(0)) return false;
        for(var i = 1, l = tag.length; i < l; i++){
            if (text.charAt(index + i) != tag.charAt(i)) return false;
        }
        return true;
    }
    // the tags allowed inside super templates
    var allowedInSuper = {
        "_t": true,
        "\n": true,
        "$": true,
        "/": true
    };
    function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while(tokens.length > 0){
            token = tokens.shift();
            if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) throw new Error("Illegal content in < super tag.");
            if (Hogan.tags[token.tag] <= Hogan.tags["$"] || isOpener(token, customTags)) {
                stack.push(token);
                token.nodes = buildTree(tokens, token.tag, stack, customTags);
            } else if (token.tag == "/") {
                if (stack.length === 0) throw new Error("Closing tag without opener: /" + token.n);
                opener = stack.pop();
                if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
                opener.end = token.i;
                return instructions;
            } else if (token.tag == "\n") token.last = tokens.length == 0 || tokens[0].tag == "\n";
            instructions.push(token);
        }
        if (stack.length > 0) throw new Error("missing closing tag: " + stack.pop().n);
        return instructions;
    }
    function isOpener(token, tags) {
        for(var i = 0, l = tags.length; i < l; i++)if (tags[i].o == token.n) {
            token.tag = "#";
            return true;
        }
    }
    function isCloser(close, open, tags) {
        for(var i = 0, l = tags.length; i < l; i++){
            if (tags[i].c == close && tags[i].o == open) return true;
        }
    }
    function stringifySubstitutions(obj) {
        var items = [];
        for(var key in obj)items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + "}");
        return "{ " + items.join(",") + " }";
    }
    function stringifyPartials(codeObj) {
        var partials = [];
        for(var key in codeObj.partials)partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
    }
    Hogan.stringify = function(codeObj, text, options) {
        return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
    };
    var serialNo = 0;
    Hogan.generate = function(tree, text, options) {
        serialNo = 0;
        var context = {
            code: "",
            subs: {},
            partials: {}
        };
        Hogan.walk(tree, context);
        if (options.asString) return this.stringify(context, text, options);
        return this.makeTemplate(context, text, options);
    };
    Hogan.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + "return t.fl();";
    };
    Hogan.template = Hogan.Template;
    Hogan.makeTemplate = function(codeObj, text, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
        return new this.template(template, text, this, options);
    };
    Hogan.makePartials = function(codeObj) {
        var key, template = {
            subs: {},
            partials: codeObj.partials,
            name: codeObj.name
        };
        for(key in template.partials)template.partials[key] = this.makePartials(template.partials[key]);
        for(key in codeObj.subs)template.subs[key] = new Function("c", "p", "t", "i", codeObj.subs[key]);
        return template;
    };
    function esc(s) {
        return s.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
    }
    function chooseMethod(s) {
        return ~s.indexOf(".") ? "d" : "f";
    }
    function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = {
            name: node.n,
            partials: {}
        };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
        return sym;
    }
    Hogan.codegen = {
        "#": function(node, context) {
            context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + "c,p,0," + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){' + "t.rs(c,p," + "function(c,p,t){";
            Hogan.walk(node.nodes, context);
            context.code += "});c.pop();}";
        },
        "^": function(node, context) {
            context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
            Hogan.walk(node.nodes, context);
            context.code += "};";
        },
        ">": createPartial,
        "<": function(node, context) {
            var ctx = {
                partials: {},
                code: "",
                subs: {},
                inPartial: true
            };
            Hogan.walk(node.nodes, ctx);
            var template = context.partials[createPartial(node, context)];
            template.subs = ctx.subs;
            template.partials = ctx.partials;
        },
        "$": function(node, context) {
            var ctx = {
                subs: {},
                code: "",
                partials: context.partials,
                prefix: node.n
            };
            Hogan.walk(node.nodes, ctx);
            context.subs[node.n] = ctx.code;
            if (!context.inPartial) context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
        },
        "\n": function(node, context) {
            context.code += write('"\\n"' + (node.last ? "" : " + i"));
        },
        "_v": function(node, context) {
            context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        "_t": function(node, context) {
            context.code += write('"' + esc(node.text) + '"');
        },
        "{": tripleStache,
        "&": tripleStache
    };
    function tripleStache(node, context) {
        context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    }
    function write(s) {
        return "t.b(" + s + ");";
    }
    Hogan.walk = function(nodelist, context) {
        var func;
        for(var i = 0, l = nodelist.length; i < l; i++){
            func = Hogan.codegen[nodelist[i].tag];
            func && func(nodelist[i], context);
        }
        return context;
    };
    Hogan.parse = function(tokens, text, options) {
        options = options || {};
        return buildTree(tokens, "", [], options.sectionTags || []);
    };
    Hogan.cache = {};
    Hogan.cacheKey = function(text, options) {
        return [
            text,
            !!options.asString,
            !!options.disableLambda,
            options.delimiters,
            !!options.modelGet
        ].join("||");
    };
    Hogan.compile = function(text, options) {
        options = options || {};
        var key = Hogan.cacheKey(text, options);
        var template = this.cache[key];
        if (template) {
            var partials = template.partials;
            for(var name in partials)delete partials[name].instance;
            return template;
        }
        template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
        return this.cache[key] = template;
    };
})(exports);

},{}],"kCFri":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ var Hogan = {};
(function(Hogan) {
    Hogan.Template = function(codeObj, text, compiler, options) {
        codeObj = codeObj || {};
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {};
        this.text = text || "";
        this.partials = codeObj.partials || {};
        this.subs = codeObj.subs || {};
        this.buf = "";
    };
    Hogan.Template.prototype = {
        // render: replaced by generated code.
        r: function(context, partials, indent) {
            return "";
        },
        // variable escaping
        v: hoganEscape,
        // triple stache
        t: coerceToString,
        render: function render(context, partials, indent) {
            return this.ri([
                context
            ], partials || {}, indent);
        },
        // render internal -- a hook for overrides that catches partials too
        ri: function(context, partials, indent) {
            return this.r(context, partials, indent);
        },
        // ensurePartial
        ep: function(symbol, partials) {
            var partial = this.partials[symbol];
            // check to see that if we've instantiated this partial before
            var template = partials[partial.name];
            if (partial.instance && partial.base == template) return partial.instance;
            if (typeof template == "string") {
                if (!this.c) throw new Error("No compiler available.");
                template = this.c.compile(template, this.options);
            }
            if (!template) return null;
            // We use this to check whether the partials dictionary has changed
            this.partials[symbol].base = template;
            if (partial.subs) {
                // Make sure we consider parent template now
                if (!partials.stackText) partials.stackText = {};
                for(key in partial.subs)if (!partials.stackText[key]) partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
                template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
            }
            this.partials[symbol].instance = template;
            return template;
        },
        // tries to find a partial in the current scope and render it
        rp: function(symbol, context, partials, indent) {
            var partial = this.ep(symbol, partials);
            if (!partial) return "";
            return partial.ri(context, partials, indent);
        },
        // render a section
        rs: function(context, partials, section) {
            var tail = context[context.length - 1];
            if (!isArray(tail)) {
                section(context, partials, this);
                return;
            }
            for(var i = 0; i < tail.length; i++){
                context.push(tail[i]);
                section(context, partials, this);
                context.pop();
            }
        },
        // maybe start a section
        s: function(val, ctx, partials, inverted, start, end, tags) {
            var pass;
            if (isArray(val) && val.length === 0) return false;
            if (typeof val == "function") val = this.ms(val, ctx, partials, inverted, start, end, tags);
            pass = !!val;
            if (!inverted && pass && ctx) ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
            return pass;
        },
        // find values with dotted names
        d: function(key1, ctx, partials, returnFound) {
            var found, names = key1.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
            if (key1 === "." && isArray(ctx[ctx.length - 2])) val = ctx[ctx.length - 1];
            else for(var i = 1; i < names.length; i++){
                found = findInScope(names[i], val, doModelGet);
                if (found !== undefined) {
                    cx = val;
                    val = found;
                } else val = "";
            }
            if (returnFound && !val) return false;
            if (!returnFound && typeof val == "function") {
                ctx.push(cx);
                val = this.mv(val, ctx, partials);
                ctx.pop();
            }
            return val;
        },
        // find values with normal names
        f: function(key1, ctx, partials, returnFound) {
            var val = false, v = null, found = false, doModelGet = this.options.modelGet;
            for(var i = ctx.length - 1; i >= 0; i--){
                v = ctx[i];
                val = findInScope(key1, v, doModelGet);
                if (val !== undefined) {
                    found = true;
                    break;
                }
            }
            if (!found) return returnFound ? false : "";
            if (!returnFound && typeof val == "function") val = this.mv(val, ctx, partials);
            return val;
        },
        // higher order templates
        ls: function(func, cx, partials, text, tags) {
            var oldTags = this.options.delimiters;
            this.options.delimiters = tags;
            this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
            this.options.delimiters = oldTags;
            return false;
        },
        // compile text
        ct: function(text, cx, partials) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(text, this.options).render(cx, partials);
        },
        // template result buffering
        b: function(s) {
            this.buf += s;
        },
        fl: function() {
            var r = this.buf;
            this.buf = "";
            return r;
        },
        // method replace section
        ms: function(func, ctx, partials, inverted, start, end, tags) {
            var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
            if (typeof result == "function") {
                if (inverted) return true;
                else {
                    textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                    return this.ls(result, cx, partials, textSource.substring(start, end), tags);
                }
            }
            return result;
        },
        // method replace variable
        mv: function(func, ctx, partials) {
            var cx = ctx[ctx.length - 1];
            var result = func.call(cx);
            if (typeof result == "function") return this.ct(coerceToString(result.call(cx)), cx, partials);
            return result;
        },
        sub: function(name, context, partials, indent) {
            var f = this.subs[name];
            if (f) {
                this.activeSub = name;
                f(context, partials, this, indent);
                this.activeSub = false;
            }
        }
    };
    //Find a key in an object
    function findInScope(key1, scope, doModelGet) {
        var val;
        if (scope && typeof scope == "object") {
            if (scope[key1] !== undefined) val = scope[key1];
            else if (doModelGet && scope.get && typeof scope.get == "function") val = scope.get(key1);
        }
        return val;
    }
    function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {}
        PartialTemplate.prototype = instance;
        function Substitutions() {}
        Substitutions.prototype = instance.subs;
        var key1;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {}; //hehe. substext.
        partial.buf = "";
        stackSubs = stackSubs || {};
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for(key1 in subs)if (!stackSubs[key1]) stackSubs[key1] = subs[key1];
        for(key1 in stackSubs)partial.subs[key1] = stackSubs[key1];
        stackPartials = stackPartials || {};
        partial.stackPartials = stackPartials;
        for(key1 in partials)if (!stackPartials[key1]) stackPartials[key1] = partials[key1];
        for(key1 in stackPartials)partial.partials[key1] = stackPartials[key1];
        return partial;
    }
    var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
    function coerceToString(val) {
        return String(val === null || val === undefined ? "" : val);
    }
    function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
    }
    var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    };
})(exports);

},{}],"69o8G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "h", ()=>(0, _preact.h));
parcelHelpers.export(exports, "render", ()=>(0, _preact.render));
parcelHelpers.export(exports, "Component", ()=>(0, _preact.Component));
parcelHelpers.export(exports, "html", ()=>m);
var _preact = require("preact");
var _htm = require("htm");
var _htmDefault = parcelHelpers.interopDefault(_htm);
var m = (0, _htmDefault.default).bind((0, _preact.h));

},{"preact":"26zcy","htm":"58er4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58er4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(s) {
        var r = t.get(this);
        return r || (r = new Map, t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n) {
            for(var t, s, r = 1, e = "", u = "", h = [
                0
            ], p = function(n) {
                1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";
            }, a = 0; a < n.length; a++){
                a && (1 === r && p(), p(a));
                for(var l = 0; l < n[a].length; l++)t = n[a][l], 1 === r ? "<" === t ? (p(), h = [
                    h
                ], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "	" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
            }
            return p(), h;
        }(s)), r), arguments, [])).length > 1 ? r : r[0];
    });
var n = function(t, s, r, e) {
    var u;
    s[0] = 0;
    for(var h = 1; h < s.length; h++){
        var p = s[h++], a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
        3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, [
            "",
            null
        ])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
    }
    return e;
}, t = new Map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loU9i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highlightJs = require("./Highlight.js");
parcelHelpers.exportAll(_highlightJs, exports);
var _reverseHighlightJs = require("./ReverseHighlight.js");
parcelHelpers.exportAll(_reverseHighlightJs, exports);
var _reverseSnippetJs = require("./ReverseSnippet.js");
parcelHelpers.exportAll(_reverseSnippetJs, exports);
var _snippetJs = require("./Snippet.js");
parcelHelpers.exportAll(_snippetJs, exports);

},{"./Highlight.js":"4TLuf","./ReverseHighlight.js":"fOKzf","./ReverseSnippet.js":"Xcace","./Snippet.js":"8YreG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TLuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Highlight", ()=>Highlight);
var _preact = require("preact");
var _highlightJs = require("../../components/Highlight/Highlight.js");
var _indexJs = require("../../lib/utils/index.js");
var _excluded = [
    "hit",
    "attribute",
    "cssClasses"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function Highlight(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute, cssClasses = _ref.cssClasses, props = _objectWithoutProperties(_ref, _excluded);
    var property = (0, _indexJs.getPropertyByPath)(hit._highlightResult, attribute) || [];
    var properties = (0, _indexJs.toArray)(property);
    (0, _indexJs.warning)(Boolean(properties.length), 'Could not enable highlight for "'.concat(attribute.toString(), '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var parts = properties.map(function(_ref2) {
        var value = _ref2.value;
        return (0, _indexJs.getHighlightedParts)((0, _indexJs.unescape)(value || ""));
    });
    return (0, _preact.h)((0, _highlightJs.Highlight), _extends({}, props, {
        parts: parts,
        classNames: cssClasses
    }));
}

},{"preact":"26zcy","../../components/Highlight/Highlight.js":"10ROh","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10ROh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Highlight", ()=>Highlight);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _internalHighlightJs = require("../InternalHighlight/InternalHighlight.js");
var _excluded = [
    "classNames"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function Highlight(_ref) {
    var _ref$classNames = _ref.classNames, classNames = _ref$classNames === void 0 ? {} : _ref$classNames, props = _objectWithoutProperties(_ref, _excluded);
    return (0, _preact.h)((0, _internalHighlightJs.InternalHighlight), _extends({
        classNames: {
            root: (0, _uiComponentsShared.cx)("ais-Highlight", classNames.root),
            highlighted: (0, _uiComponentsShared.cx)("ais-Highlight-highlighted", classNames.highlighted),
            nonHighlighted: (0, _uiComponentsShared.cx)("ais-Highlight-nonHighlighted", classNames.nonHighlighted),
            separator: (0, _uiComponentsShared.cx)("ais-Highlight-separator", classNames.separator)
        }
    }, props));
}

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../InternalHighlight/InternalHighlight.js":"k66mA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k66mA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternalHighlight", ()=>InternalHighlight);
var _uiComponentsHighlightVdom = require("@algolia/ui-components-highlight-vdom");
var _preact = require("preact");
var InternalHighlight = (0, _uiComponentsHighlightVdom.createHighlightComponent)({
    createElement: (0, _preact.createElement),
    Fragment: (0, _preact.Fragment)
});

},{"@algolia/ui-components-highlight-vdom":"e2Mln","preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2Mln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highlight = require("./Highlight");
parcelHelpers.exportAll(_highlight, exports);

},{"./Highlight":"gFZQR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFZQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHighlightComponent", ()=>createHighlightComponent);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _excluded = [
    "parts",
    "highlightedTagName",
    "nonHighlightedTagName",
    "separator",
    "className",
    "classNames"
];
function createHighlightPartComponent(_ref) {
    var createElement = _ref.createElement;
    return function HighlightPart(_ref2) {
        var classNames = _ref2.classNames, children = _ref2.children, highlightedTagName = _ref2.highlightedTagName, isHighlighted = _ref2.isHighlighted, nonHighlightedTagName = _ref2.nonHighlightedTagName;
        var TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;
        return createElement(TagName, {
            className: isHighlighted ? classNames.highlighted : classNames.nonHighlighted
        }, children);
    };
}
function createHighlightComponent(_ref3) {
    var createElement = _ref3.createElement, Fragment = _ref3.Fragment;
    var HighlightPart = createHighlightPartComponent({
        createElement: createElement,
        Fragment: Fragment
    });
    return function Highlight(userProps) {
        // Not destructured in function signature, to make sure it's not exposed in
        // the type definition.
        var parts = userProps.parts, _userProps$highlighte = userProps.highlightedTagName, highlightedTagName = _userProps$highlighte === void 0 ? "mark" : _userProps$highlighte, _userProps$nonHighlig = userProps.nonHighlightedTagName, nonHighlightedTagName = _userProps$nonHighlig === void 0 ? "span" : _userProps$nonHighlig, _userProps$separator = userProps.separator, separator = _userProps$separator === void 0 ? ", " : _userProps$separator, className = userProps.className, _userProps$classNames = userProps.classNames, classNames = _userProps$classNames === void 0 ? {} : _userProps$classNames, props = (0, _objectWithoutPropertiesDefault.default)(userProps, _excluded);
        return createElement("span", (0, _extendsDefault.default)({}, props, {
            className: (0, _uiComponentsShared.cx)(classNames.root, className)
        }), parts.map(function(part, partIndex) {
            var isLastPart = partIndex === parts.length - 1;
            return createElement(Fragment, {
                key: partIndex
            }, part.map(function(subPart, subPartIndex) {
                return createElement(HighlightPart, {
                    key: subPartIndex,
                    classNames: classNames,
                    highlightedTagName: highlightedTagName,
                    nonHighlightedTagName: nonHighlightedTagName,
                    isHighlighted: subPart.isHighlighted
                }, subPart.value);
            }), !isLastPart && createElement("span", {
                className: classNames.separator
            }, separator));
        }));
    };
}

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/objectWithoutProperties":"lte4p","@algolia/ui-components-shared":"dPT3X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vw3vn":[function(require,module,exports) {
function _extends() {
    module.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"lte4p":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("424c8dc91f0a14f9");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"424c8dc91f0a14f9":"hvCCX"}],"hvCCX":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"fOKzf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReverseHighlight", ()=>ReverseHighlight);
var _preact = require("preact");
var _reverseHighlightJs = require("../../components/ReverseHighlight/ReverseHighlight.js");
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "hit",
    "attribute",
    "cssClasses"
], _excluded2 = [
    "isHighlighted"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ReverseHighlight(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute, cssClasses = _ref.cssClasses, props = _objectWithoutProperties(_ref, _excluded);
    var property = (0, _indexJs.getPropertyByPath)(hit._highlightResult, attribute) || [];
    var properties = (0, _indexJs.toArray)(property);
    (0, _indexJs.warning)(Boolean(properties.length), 'Could not enable highlight for "'.concat(attribute.toString(), '", will display an empty string.\nPlease check whether this attribute exists and is either searchable or specified in `attributesToHighlight`.\n\nSee: https://alg.li/highlighting\n'));
    var parts = properties.map(function(_ref2) {
        var value = _ref2.value;
        return (0, _indexJs.getHighlightedParts)((0, _indexJs.unescape)(value || "")).map(function(_ref3) {
            var isHighlighted = _ref3.isHighlighted, rest = _objectWithoutProperties(_ref3, _excluded2);
            return _objectSpread(_objectSpread({}, rest), {}, {
                isHighlighted: !isHighlighted
            });
        });
    });
    return (0, _preact.h)((0, _reverseHighlightJs.ReverseHighlight), _extends({}, props, {
        parts: parts,
        classNames: cssClasses
    }));
}

},{"preact":"26zcy","../../components/ReverseHighlight/ReverseHighlight.js":"03bAR","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03bAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReverseHighlight", ()=>ReverseHighlight);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _internalHighlightJs = require("../InternalHighlight/InternalHighlight.js");
var _excluded = [
    "classNames"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ReverseHighlight(_ref) {
    var _ref$classNames = _ref.classNames, classNames = _ref$classNames === void 0 ? {} : _ref$classNames, props = _objectWithoutProperties(_ref, _excluded);
    return (0, _preact.h)((0, _internalHighlightJs.InternalHighlight), _extends({
        classNames: {
            root: (0, _uiComponentsShared.cx)("ais-ReverseHighlight", classNames.root),
            highlighted: (0, _uiComponentsShared.cx)("ais-ReverseHighlight-highlighted", classNames.highlighted),
            nonHighlighted: (0, _uiComponentsShared.cx)("ais-ReverseHighlight-nonHighlighted", classNames.nonHighlighted),
            separator: (0, _uiComponentsShared.cx)("ais-ReverseHighlight-separator", classNames.separator)
        }
    }, props));
}

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../InternalHighlight/InternalHighlight.js":"k66mA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Xcace":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReverseSnippet", ()=>ReverseSnippet);
var _preact = require("preact");
var _reverseSnippetJs = require("../../components/ReverseSnippet/ReverseSnippet.js");
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "hit",
    "attribute",
    "cssClasses"
], _excluded2 = [
    "isHighlighted"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ReverseSnippet(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute, cssClasses = _ref.cssClasses, props = _objectWithoutProperties(_ref, _excluded);
    var property = (0, _indexJs.getPropertyByPath)(hit._snippetResult, attribute) || [];
    var properties = (0, _indexJs.toArray)(property);
    (0, _indexJs.warning)(Boolean(properties.length), 'Could not enable snippet for "'.concat(attribute.toString(), '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n'));
    var parts = properties.map(function(_ref2) {
        var value = _ref2.value;
        return (0, _indexJs.getHighlightedParts)((0, _indexJs.unescape)(value || "")).map(function(_ref3) {
            var isHighlighted = _ref3.isHighlighted, rest = _objectWithoutProperties(_ref3, _excluded2);
            return _objectSpread(_objectSpread({}, rest), {}, {
                isHighlighted: !isHighlighted
            });
        });
    });
    return (0, _preact.h)((0, _reverseSnippetJs.ReverseSnippet), _extends({}, props, {
        parts: parts,
        classNames: cssClasses
    }));
}

},{"preact":"26zcy","../../components/ReverseSnippet/ReverseSnippet.js":"edfKj","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edfKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReverseSnippet", ()=>ReverseSnippet);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _internalHighlightJs = require("../InternalHighlight/InternalHighlight.js");
var _excluded = [
    "classNames"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ReverseSnippet(_ref) {
    var _ref$classNames = _ref.classNames, classNames = _ref$classNames === void 0 ? {} : _ref$classNames, props = _objectWithoutProperties(_ref, _excluded);
    return (0, _preact.h)((0, _internalHighlightJs.InternalHighlight), _extends({
        classNames: {
            root: (0, _uiComponentsShared.cx)("ais-ReverseSnippet", classNames.root),
            highlighted: (0, _uiComponentsShared.cx)("ais-ReverseSnippet-highlighted", classNames.highlighted),
            nonHighlighted: (0, _uiComponentsShared.cx)("ais-ReverseSnippet-nonHighlighted", classNames.nonHighlighted),
            separator: (0, _uiComponentsShared.cx)("ais-ReverseSnippet-separator", classNames.separator)
        }
    }, props));
}

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../InternalHighlight/InternalHighlight.js":"k66mA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YreG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Snippet", ()=>Snippet);
var _preact = require("preact");
var _snippetJs = require("../../components/Snippet/Snippet.js");
var _indexJs = require("../../lib/utils/index.js");
var _excluded = [
    "hit",
    "attribute",
    "cssClasses"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function Snippet(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute, cssClasses = _ref.cssClasses, props = _objectWithoutProperties(_ref, _excluded);
    var property = (0, _indexJs.getPropertyByPath)(hit._snippetResult, attribute) || [];
    var properties = (0, _indexJs.toArray)(property);
    (0, _indexJs.warning)(Boolean(properties.length), 'Could not enable snippet for "'.concat(attribute.toString(), '", will display an empty string.\nPlease check whether this attribute exists and is specified in `attributesToSnippet`.\n\nSee: https://alg.li/highlighting\n'));
    var parts = properties.map(function(_ref2) {
        var value = _ref2.value;
        return (0, _indexJs.getHighlightedParts)((0, _indexJs.unescape)(value || ""));
    });
    return (0, _preact.h)((0, _snippetJs.Snippet), _extends({}, props, {
        parts: parts,
        classNames: cssClasses
    }));
}

},{"preact":"26zcy","../../components/Snippet/Snippet.js":"kNTK6","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNTK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Snippet", ()=>Snippet);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _internalHighlightJs = require("../InternalHighlight/InternalHighlight.js");
var _excluded = [
    "classNames"
];
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function Snippet(_ref) {
    var _ref$classNames = _ref.classNames, classNames = _ref$classNames === void 0 ? {} : _ref$classNames, props = _objectWithoutProperties(_ref, _excluded);
    return (0, _preact.h)((0, _internalHighlightJs.InternalHighlight), _extends({
        classNames: {
            root: (0, _uiComponentsShared.cx)("ais-Snippet", classNames.root),
            highlighted: (0, _uiComponentsShared.cx)("ais-Snippet-highlighted", classNames.highlighted),
            nonHighlighted: (0, _uiComponentsShared.cx)("ais-Snippet-nonHighlighted", classNames.nonHighlighted),
            separator: (0, _uiComponentsShared.cx)("ais-Snippet-separator", classNames.separator)
        }
    }, props));
}

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../InternalHighlight/InternalHighlight.js":"k66mA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9medE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function hasFindAnswersMethod(answersIndex) {
    return typeof answersIndex.findAnswers === "function";
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "answers",
    connector: true
});
var connectAnswers = function connectAnswers(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, queryLanguages = _ref.queryLanguages, attributesForPrediction = _ref.attributesForPrediction, _ref$nbHits = _ref.nbHits, nbHits = _ref$nbHits === void 0 ? 1 : _ref$nbHits, _ref$renderDebounceTi = _ref.renderDebounceTime, renderDebounceTime = _ref$renderDebounceTi === void 0 ? 100 : _ref$renderDebounceTi, _ref$searchDebounceTi = _ref.searchDebounceTime, searchDebounceTime = _ref$searchDebounceTi === void 0 ? 100 : _ref$searchDebounceTi, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$extraParameters = _ref.extraParameters, extraParameters = _ref$extraParameters === void 0 ? {} : _ref$extraParameters;
        // @ts-expect-error checking for the wrong value
        if (!queryLanguages || queryLanguages.length === 0) throw new Error(withUsage("The `queryLanguages` expects an array of strings."));
        var runConcurrentSafePromise = (0, _indexJs.createConcurrentSafePromise)();
        var lastHits = [];
        var isLoading = false;
        var debouncedRender = (0, _indexJs.debounce)(renderFn, renderDebounceTime);
        // this does not directly use DebouncedFunction<findAnswers>, since then the generic will disappear
        var debouncedRefine;
        return {
            $$type: "ais.answers",
            init: function init(initOptions) {
                var state = initOptions.state, instantSearchInstance = initOptions.instantSearchInstance;
                var answersIndex = instantSearchInstance.client.initIndex(state.index);
                if (!hasFindAnswersMethod(answersIndex)) throw new Error(withUsage("`algoliasearch` >= 4.8.0 required."));
                debouncedRefine = (0, _indexJs.debounce)(answersIndex.findAnswers, searchDebounceTime);
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var _this = this;
                var query = renderOptions.state.query;
                if (!query) {
                    // renders nothing with empty query
                    lastHits = [];
                    isLoading = false;
                    renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                    return;
                }
                // render the loader
                lastHits = [];
                isLoading = true;
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                // call /answers API
                runConcurrentSafePromise(debouncedRefine(query, queryLanguages, _objectSpread(_objectSpread({}, extraParameters), {}, {
                    nbHits: nbHits,
                    attributesForPrediction: attributesForPrediction
                }))).then(function(result) {
                    if (!result) // It's undefined when it's debounced.
                    return;
                    if (escapeHTML && result.hits.length > 0) result.hits = (0, _indexJs.escapeHits)(result.hits);
                    var hitsWithAbsolutePosition = (0, _indexJs.addAbsolutePosition)(result.hits, 0, nbHits);
                    var hitsWithAbsolutePositionAndQueryID = (0, _indexJs.addQueryID)(hitsWithAbsolutePosition, result.queryID);
                    lastHits = hitsWithAbsolutePositionAndQueryID;
                    isLoading = false;
                    debouncedRender(_objectSpread(_objectSpread({}, _this.getWidgetRenderState(renderOptions)), {}, {
                        instantSearchInstance: renderOptions.instantSearchInstance
                    }), false);
                });
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    answers: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState() {
                return {
                    hits: lastHits,
                    isLoading: isLoading,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(_ref2) {
                var state = _ref2.state;
                unmountFn();
                return state;
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                return state;
            }
        };
    };
};
exports.default = connectAnswers;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YIrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultTemplates = {
    header: function header() {
        return "";
    },
    loader: function loader() {
        return "";
    },
    item: function item(_item) {
        return JSON.stringify(_item);
    }
};
exports.default = defaultTemplates;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rM3hn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _connectDynamicWidgetsJs = require("../../connectors/dynamic-widgets/connectDynamicWidgets.js");
var _connectDynamicWidgetsJsDefault = parcelHelpers.interopDefault(_connectDynamicWidgetsJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "container",
    "widgets",
    "fallbackWidget"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "dynamic-widgets"
});
var suit = (0, _suitJs.component)("DynamicWidgets");
function createContainer(rootContainer) {
    var container = document.createElement("div");
    container.className = suit({
        descendantName: "widget"
    });
    rootContainer.appendChild(container);
    return container;
}
var dynamicWidgets = function dynamicWidgets(widgetParams) {
    var _ref = widgetParams || {}, containerSelector = _ref.container, widgets = _ref.widgets, fallbackWidget = _ref.fallbackWidget, otherWidgetParams = _objectWithoutProperties(_ref, _excluded);
    if (!containerSelector) throw new Error(withUsage("The `container` option is required."));
    if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
        return typeof widget === "function";
    }))) throw new Error(withUsage("The `widgets` option expects an array of callbacks."));
    var userContainer = (0, _indexJs.getContainerNode)(containerSelector);
    var rootContainer = document.createElement("div");
    rootContainer.className = suit();
    var containers = new Map();
    var connectorWidgets = [];
    var makeWidget = (0, _connectDynamicWidgetsJsDefault.default)(function(_ref2, isFirstRender) {
        var attributesToRender = _ref2.attributesToRender;
        if (isFirstRender) userContainer.appendChild(rootContainer);
        attributesToRender.forEach(function(attribute) {
            if (!containers.has(attribute)) return;
            var container = containers.get(attribute);
            rootContainer.appendChild(container);
        });
    }, function() {
        userContainer.removeChild(rootContainer);
    });
    var widget = makeWidget(_objectSpread(_objectSpread({}, otherWidgetParams), {}, {
        widgets: connectorWidgets,
        fallbackWidget: typeof fallbackWidget === "function" ? function(_ref3) {
            var attribute = _ref3.attribute;
            var container = createContainer(rootContainer);
            containers.set(attribute, container);
            return fallbackWidget({
                attribute: attribute,
                container: container
            });
        } : undefined
    }));
    return _objectSpread(_objectSpread({}, widget), {}, {
        init: function init(initOptions) {
            widgets.forEach(function(cb) {
                var container = createContainer(rootContainer);
                var childWidget = cb(container);
                var attribute = (0, _indexJs.getWidgetAttribute)(childWidget, initOptions);
                containers.set(attribute, container);
                connectorWidgets.push(childWidget);
            });
            widget.init(initOptions);
        },
        $$widgetType: "ais.dynamicWidgets"
    });
};
exports.default = dynamicWidgets;

},{"../../connectors/dynamic-widgets/connectDynamicWidgets.js":"iH4FH","../../lib/suit.js":"du81D","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iH4FH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "dynamic-widgets",
    connector: true
});
var MAX_WILDCARD_FACETS = 20;
var connectDynamicWidgets = function connectDynamicWidgets(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var widgets = widgetParams.widgets, _widgetParams$maxValu = widgetParams.maxValuesPerFacet, maxValuesPerFacet = _widgetParams$maxValu === void 0 ? 20 : _widgetParams$maxValu, _widgetParams$facets = widgetParams.facets, facets = _widgetParams$facets === void 0 ? [
            "*"
        ] : _widgetParams$facets, _widgetParams$transfo = widgetParams.transformItems, transformItems = _widgetParams$transfo === void 0 ? function(items) {
            return items;
        } : _widgetParams$transfo, fallbackWidget = widgetParams.fallbackWidget;
        if (!(widgets && Array.isArray(widgets) && widgets.every(function(widget) {
            return _typeof(widget) === "object";
        }))) throw new Error(withUsage("The `widgets` option expects an array of widgets."));
        if (!(Array.isArray(facets) && facets.length <= 1 && (facets[0] === "*" || facets[0] === undefined))) throw new Error(withUsage('The `facets` option only accepts [] or ["*"], you passed '.concat(JSON.stringify(facets))));
        var localWidgets = new Map();
        return {
            $$type: "ais.dynamicWidgets",
            init: function init(initOptions) {
                widgets.forEach(function(widget) {
                    var attribute = (0, _indexJs.getWidgetAttribute)(widget, initOptions);
                    localWidgets.set(attribute, {
                        widget: widget,
                        isMounted: false
                    });
                });
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var parent = renderOptions.parent;
                var renderState = this.getWidgetRenderState(renderOptions);
                var widgetsToUnmount = [];
                var widgetsToMount = [];
                if (fallbackWidget) renderState.attributesToRender.forEach(function(attribute) {
                    if (!localWidgets.has(attribute)) {
                        var widget = fallbackWidget({
                            attribute: attribute
                        });
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: false
                        });
                    }
                });
                localWidgets.forEach(function(_ref, attribute) {
                    var widget = _ref.widget, isMounted = _ref.isMounted;
                    var shouldMount = renderState.attributesToRender.indexOf(attribute) > -1;
                    if (!isMounted && shouldMount) {
                        widgetsToMount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: true
                        });
                    } else if (isMounted && !shouldMount) {
                        widgetsToUnmount.push(widget);
                        localWidgets.set(attribute, {
                            widget: widget,
                            isMounted: false
                        });
                    }
                });
                parent.addWidgets(widgetsToMount);
                // make sure this only happens after the regular render, otherwise it
                // happens too quick, since render is "deferred" for the next microtask,
                // so this needs to be a whole task later
                setTimeout(function() {
                    return parent.removeWidgets(widgetsToUnmount);
                }, 0);
                renderFn(_objectSpread(_objectSpread({}, renderState), {}, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref2) {
                var parent = _ref2.parent;
                var toRemove = [];
                localWidgets.forEach(function(_ref3) {
                    var widget = _ref3.widget, isMounted = _ref3.isMounted;
                    if (isMounted) toRemove.push(widget);
                });
                parent.removeWidgets(toRemove);
                unmountFn();
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                // broadening the scope of facets to avoid conflict between never and *
                return facets.reduce(function(acc, curr) {
                    return acc.addFacet(curr);
                }, state.setQueryParameters({
                    maxValuesPerFacet: Math.max(maxValuesPerFacet || 0, state.maxValuesPerFacet || 0)
                }));
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    dynamicWidgets: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref4) {
                var _results$renderingCon, _results$renderingCon2, _results$renderingCon3, _results$renderingCon4;
                var results = _ref4.results, state = _ref4.state;
                if (!results) return {
                    attributesToRender: [],
                    widgetParams: widgetParams
                };
                var attributesToRender = transformItems((_results$renderingCon = (_results$renderingCon2 = results.renderingContent) === null || _results$renderingCon2 === void 0 ? void 0 : (_results$renderingCon3 = _results$renderingCon2.facetOrdering) === null || _results$renderingCon3 === void 0 ? void 0 : (_results$renderingCon4 = _results$renderingCon3.facets) === null || _results$renderingCon4 === void 0 ? void 0 : _results$renderingCon4.order) !== null && _results$renderingCon !== void 0 ? _results$renderingCon : [], {
                    results: results
                });
                if (!Array.isArray(attributesToRender)) throw new Error(withUsage("The `transformItems` option expects a function that returns an Array."));
                (0, _indexJs.warning)(maxValuesPerFacet >= (state.maxValuesPerFacet || 0), "The maxValuesPerFacet set by dynamic widgets (".concat(maxValuesPerFacet, ") is smaller than one of the limits set by a widget (").concat(state.maxValuesPerFacet, "). This causes a mismatch in query parameters and thus an extra network request when that widget is mounted."));
                (0, _indexJs.warning)(attributesToRender.length <= MAX_WILDCARD_FACETS || widgetParams.facets !== undefined, "More than ".concat(MAX_WILDCARD_FACETS, " facets are requested to be displayed without explicitly setting which facets to retrieve. This could have a performance impact. Set \"facets\" to [] to do two smaller network requests, or explicitly to ['*'] to avoid this warning."));
                return {
                    attributesToRender: attributesToRender,
                    widgetParams: widgetParams
                };
            }
        };
    };
};
exports.default = connectDynamicWidgets;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPDYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _hitsJs = require("../../components/Hits/Hits.js");
var _hitsJsDefault = parcelHelpers.interopDefault(_hitsJs);
var _connectHitsJs = require("../../connectors/hits/connectHits.js");
var _connectHitsJsDefault = parcelHelpers.interopDefault(_connectHitsJs);
var _indexJs = require("../../lib/insights/index.js");
var _suitJs = require("../../lib/suit.js");
var _indexJs1 = require("../../lib/templating/index.js");
var _indexJs2 = require("../../lib/utils/index.js");
var _defaultTemplatesJs = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs2.createDocumentationMessageGenerator)({
    name: "hits"
});
var suit = (0, _suitJs.component)("Hits");
var renderer = function renderer(_ref) {
    var renderState = _ref.renderState, cssClasses = _ref.cssClasses, containerNode = _ref.containerNode, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
        var receivedHits = _ref2.hits, results = _ref2.results, instantSearchInstance = _ref2.instantSearchInstance, insights = _ref2.insights, bindEvent = _ref2.bindEvent, sendEvent = _ref2.sendEvent;
        if (isFirstRendering) {
            renderState.templateProps = (0, _indexJs1.prepareTemplateProps)({
                defaultTemplates: (0, _defaultTemplatesJsDefault.default),
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)((0, _preact.h)((0, _hitsJsDefault.default), {
            cssClasses: cssClasses,
            hits: receivedHits,
            results: results,
            templateProps: renderState.templateProps,
            insights: insights,
            sendEvent: sendEvent,
            bindEvent: bindEvent
        }), containerNode);
    };
};
var hits = function hits(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, escapeHTML = _ref3.escapeHTML, transformItems = _ref3.transformItems, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {} : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _indexJs2.getContainerNode)(container);
    var cssClasses = {
        root: (0, _uiComponentsShared.cx)(suit(), userCssClasses.root),
        emptyRoot: (0, _uiComponentsShared.cx)(suit({
            modifierName: "empty"
        }), userCssClasses.emptyRoot),
        list: (0, _uiComponentsShared.cx)(suit({
            descendantName: "list"
        }), userCssClasses.list),
        item: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item"
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeWidget = (0, _indexJs.withInsights)((0, _connectHitsJsDefault.default))(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _objectSpread(_objectSpread({}, makeWidget({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    })), {}, {
        $$widgetType: "ais.hits"
    });
};
exports.default = hits;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../components/Hits/Hits.js":"as3BB","../../connectors/hits/connectHits.js":"b5DNx","../../lib/insights/index.js":"hnOzt","../../lib/suit.js":"du81D","../../lib/templating/index.js":"aFegL","../../lib/utils/index.js":"etVYs","./defaultTemplates.js":"fxjDh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"as3BB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Hits);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _listenerJs = require("../../lib/insights/listener.js");
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function Hits(_ref) {
    var results = _ref.results, hits = _ref.hits, insights = _ref.insights, bindEvent = _ref.bindEvent, sendEvent = _ref.sendEvent, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    var handleInsightsClick = (0, _listenerJs.createInsightsEventHandler)({
        insights: insights,
        sendEvent: sendEvent
    });
    if (results.hits.length === 0) return (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
        templateKey: "empty",
        rootProps: {
            className: (0, _uiComponentsShared.cx)(cssClasses.root, cssClasses.emptyRoot),
            onClick: handleInsightsClick
        },
        data: results
    }));
    return (0, _preact.h)("div", {
        className: cssClasses.root
    }, (0, _preact.h)("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item,
                onClick: function onClick(event) {
                    handleInsightsClick(event);
                    sendEvent("click:internal", hit, "Hit Clicked");
                },
                onAuxClick: function onAuxClick(event) {
                    handleInsightsClick(event);
                    sendEvent("click:internal", hit, "Hit Clicked");
                }
            },
            key: hit.objectID,
            data: _objectSpread(_objectSpread({}, hit), {}, {
                get __hitIndex () {
                    (0, _indexJs.warning)(false, "The `__hitIndex` property is deprecated. Use the absolute `__position` instead.");
                    return index;
                }
            }),
            bindEvent: bindEvent,
            sendEvent: sendEvent
        }));
    })));
}

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../lib/insights/listener.js":"hhB68","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhB68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInsightsEventHandler", ()=>createInsightsEventHandler);
parcelHelpers.export(exports, "default", ()=>withInsightsListener);
var _preact = require("preact");
var _insightsJs = require("../../helpers/insights.js");
var _indexJs = require("../utils/index.js");
var createInsightsEventHandler = function createInsightsEventHandler(_ref) {
    var insights = _ref.insights, sendEvent = _ref.sendEvent;
    return function(event) {
        // new way, e.g. bindEvent("click", hit, "Hit clicked")
        var insightsThroughSendEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
            return element.hasAttribute("data-insights-event");
        });
        if (insightsThroughSendEvent) {
            var payload = parseInsightsEvent(insightsThroughSendEvent);
            payload.forEach(function(single) {
                return sendEvent(single);
            });
        }
        // old way, e.g. instantsearch.insights("clickedObjectIDsAfterSearch", { .. })
        var insightsThroughFunction = findInsightsTarget(event.target, event.currentTarget, function(element) {
            return element.hasAttribute("data-insights-method") && element.hasAttribute("data-insights-payload");
        });
        if (insightsThroughFunction) {
            var _readDataAttributes = (0, _insightsJs.readDataAttributes)(insightsThroughFunction), method = _readDataAttributes.method, _payload = _readDataAttributes.payload;
            insights(method, _payload);
        }
    };
};
function findInsightsTarget(startElement, endElement, validator) {
    var element = startElement;
    while(element && !validator(element)){
        if (element === endElement) return null;
        element = element.parentElement;
    }
    return element;
}
function parseInsightsEvent(element) {
    var serializedPayload = element.getAttribute("data-insights-event");
    if (typeof serializedPayload !== "string") throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
    try {
        return (0, _indexJs.deserializePayload)(serializedPayload);
    } catch (error) {
        throw new Error("The insights middleware was unable to parse `data-insights-event`.");
    }
}
function withInsightsListener(BaseComponent) {
    (0, _indexJs.warning)(false, "The `withInsightsListener` function is deprecated and will be removed in the next major version. Please use `sendEvent` directly instead.");
    return function WithInsightsListener(props) {
        var handleClick = createInsightsEventHandler(props);
        return (0, _preact.h)("div", {
            onClick: handleClick
        }, (0, _preact.h)(BaseComponent, props));
    };
}

},{"preact":"26zcy","../../helpers/insights.js":"2EZr9","../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5DNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "hits",
    connector: true
});
var connectHits = function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        var sendEvent;
        var bindEvent;
        return {
            $$type: "ais.hits",
            init: function init(initOptions) {
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var renderState = this.getWidgetRenderState(renderOptions);
                renderFn(_objectSpread(_objectSpread({}, renderState), {}, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
                renderState.sendEvent("view:internal", renderState.hits);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    hits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var results = _ref2.results, helper = _ref2.helper, instantSearchInstance = _ref2.instantSearchInstance;
                if (!sendEvent) sendEvent = (0, _indexJs.createSendEventForHits)({
                    instantSearchInstance: instantSearchInstance,
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                if (!bindEvent) bindEvent = (0, _indexJs.createBindEventForHits)({
                    index: helper.getIndex(),
                    widgetType: this.$$type,
                    instantSearchInstance: instantSearchInstance
                });
                if (!results) return {
                    hits: [],
                    results: undefined,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
                if (escapeHTML && results.hits.length > 0) results.hits = (0, _indexJs.escapeHits)(results.hits);
                var hitsWithAbsolutePosition = (0, _indexJs.addAbsolutePosition)(results.hits, results.page, results.hitsPerPage);
                var hitsWithAbsolutePositionAndQueryID = (0, _indexJs.addQueryID)(hitsWithAbsolutePosition, results.queryID);
                var transformedHits = transformItems(hitsWithAbsolutePositionAndQueryID, {
                    results: results
                });
                return {
                    hits: transformedHits,
                    results: results,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                if (!escapeHTML) return state;
                return state.setQueryParameters(Object.keys((0, _indexJs.TAG_PLACEHOLDER)).reduce(function(acc, key) {
                    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
                }, {}));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                if (!escapeHTML) return state;
                return state.setQueryParameters((0, _indexJs.TAG_PLACEHOLDER));
            }
        };
    };
};
exports.default = connectHits;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnOzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withInsights", ()=>(0, _clientJsDefault.default));
parcelHelpers.export(exports, "inferInsightsPayload", ()=>(0, _clientJs.inferPayload));
parcelHelpers.export(exports, "withInsightsListener", ()=>(0, _listenerJsDefault.default));
var _clientJs = require("./client.js");
var _clientJsDefault = parcelHelpers.interopDefault(_clientJs);
var _listenerJs = require("./listener.js");
var _listenerJsDefault = parcelHelpers.interopDefault(_listenerJs);

},{"./client.js":"1CWch","./listener.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CWch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inferPayload", ()=>inferPayload);
parcelHelpers.export(exports, "default", ()=>withInsights);
var _indexJs = require("../utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = (0, _indexJs.find)(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === "undefined") throw new Error('Could not find objectID "'.concat(objectID, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = (0, _indexJs.uniq)(selectedHits.map(function(hit) {
        return hit.__queryID;
    }));
    if (queryIDs.length > 1) throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
    var queryID = queryIDs[0];
    if (typeof queryID !== "string") throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    return queryID;
};
var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function(hit) {
        return hit.__position;
    });
};
var inferPayload = function inferPayload(_ref) {
    var method = _ref.method, results = _ref.results, hits = _ref.hits, objectIDs = _ref.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch(method){
        case "clickedObjectIDsAfterSearch":
            var positions = getPositions(selectedHits);
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs,
                positions: positions
            };
        case "convertedObjectIDsAfterSearch":
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs
            };
        default:
            throw new Error('Unsupported method passed to insights: "'.concat(method, '".'));
    }
};
var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function(method) {
        for(var _len = arguments.length, payloads = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)payloads[_key - 1] = arguments[_key];
        var payload = payloads[0];
        (0, _indexJs.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (!aa) {
            var withInstantSearchUsage = (0, _indexJs.createDocumentationMessageGenerator)({
                name: "instantsearch"
            });
            throw new Error(withInstantSearchUsage("The `insightsClient` option has not been provided to `instantsearch`."));
        }
        if (!Array.isArray(payload.objectIDs)) throw new TypeError("Expected `objectIDs` to be an array.");
        var inferredPayload = inferPayload({
            method: method,
            results: results,
            hits: hits,
            objectIDs: payload.objectIDs
        });
        aa(method, _objectSpread(_objectSpread({}, inferredPayload), payload));
    };
};
function withInsights(connector) {
    return function(renderFn, unmountFn) {
        return connector(function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_objectSpread(_objectSpread({}, renderOptions), {}, {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        }, unmountFn);
    };
}

},{"../utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxjDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
var defaultTemplates = {
    empty: function empty() {
        return "No results";
    },
    item: function item(data) {
        return JSON.stringify((0, _indexJs.omit)(data, [
            "__hitIndex"
        ]), null, 2);
    }
};
exports.default = defaultTemplates;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGC8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _paginationJs = require("../../components/Pagination/Pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _connectPaginationJs = require("../../connectors/pagination/connectPagination.js");
var _connectPaginationJsDefault = parcelHelpers.interopDefault(_connectPaginationJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var suit = (0, _suitJs.component)("Pagination");
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "pagination"
});
var defaultTemplates = {
    previous: function previous() {
        return "\u2039";
    },
    next: function next() {
        return "\u203A";
    },
    page: function page(_ref) {
        var _page = _ref.page;
        return "".concat(_page);
    },
    first: function first() {
        return "\xab";
    },
    last: function last() {
        return "\xbb";
    }
};
var renderer = function renderer(_ref2) {
    var containerNode = _ref2.containerNode, cssClasses = _ref2.cssClasses, templates = _ref2.templates, showFirst = _ref2.showFirst, showLast = _ref2.showLast, showPrevious = _ref2.showPrevious, showNext = _ref2.showNext, scrollToNode = _ref2.scrollToNode;
    return function(_ref3, isFirstRendering) {
        var createURL = _ref3.createURL, currentRefinement = _ref3.currentRefinement, nbPages = _ref3.nbPages, pages = _ref3.pages, isFirstPage = _ref3.isFirstPage, isLastPage = _ref3.isLastPage, refine = _ref3.refine;
        if (isFirstRendering) return;
        var setCurrentPage = function setCurrentPage(pageNumber) {
            refine(pageNumber);
            if (scrollToNode !== false) scrollToNode.scrollIntoView();
        };
        (0, _preact.render)((0, _preact.h)((0, _paginationJsDefault.default), {
            createURL: createURL,
            cssClasses: cssClasses,
            currentPage: currentRefinement,
            templates: templates,
            nbPages: nbPages,
            pages: pages,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage,
            setCurrentPage: setCurrentPage,
            showFirst: showFirst,
            showLast: showLast,
            showPrevious: showPrevious,
            showNext: showNext
        }), containerNode);
    };
};
var pagination = function pagination(widgetParams) {
    var _ref4 = widgetParams || {}, container = _ref4.container, _ref4$templates = _ref4.templates, userTemplates = _ref4$templates === void 0 ? {} : _ref4$templates, _ref4$cssClasses = _ref4.cssClasses, userCssClasses = _ref4$cssClasses === void 0 ? {} : _ref4$cssClasses, totalPages = _ref4.totalPages, padding = _ref4.padding, _ref4$showFirst = _ref4.showFirst, showFirst = _ref4$showFirst === void 0 ? true : _ref4$showFirst, _ref4$showLast = _ref4.showLast, showLast = _ref4$showLast === void 0 ? true : _ref4$showLast, _ref4$showPrevious = _ref4.showPrevious, showPrevious = _ref4$showPrevious === void 0 ? true : _ref4$showPrevious, _ref4$showNext = _ref4.showNext, showNext = _ref4$showNext === void 0 ? true : _ref4$showNext, _ref4$scrollTo = _ref4.scrollTo, userScrollTo = _ref4$scrollTo === void 0 ? "body" : _ref4$scrollTo;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _indexJs.getContainerNode)(container);
    var scrollTo = userScrollTo === true ? "body" : userScrollTo;
    var scrollToNode = scrollTo !== false ? (0, _indexJs.getContainerNode)(scrollTo) : false;
    var cssClasses = {
        root: (0, _uiComponentsShared.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _uiComponentsShared.cx)(suit({
            modifierName: "noRefinement"
        }), userCssClasses.noRefinementRoot),
        list: (0, _uiComponentsShared.cx)(suit({
            descendantName: "list"
        }), userCssClasses.list),
        item: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item"
        }), userCssClasses.item),
        firstPageItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "firstPage"
        }), userCssClasses.firstPageItem),
        lastPageItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "lastPage"
        }), userCssClasses.lastPageItem),
        previousPageItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "previousPage"
        }), userCssClasses.previousPageItem),
        nextPageItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "nextPage"
        }), userCssClasses.nextPageItem),
        pageItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "page"
        }), userCssClasses.pageItem),
        selectedItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "selected"
        }), userCssClasses.selectedItem),
        disabledItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "disabled"
        }), userCssClasses.disabledItem),
        link: (0, _uiComponentsShared.cx)(suit({
            descendantName: "link"
        }), userCssClasses.link)
    };
    var templates = _objectSpread(_objectSpread({}, defaultTemplates), userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        showFirst: showFirst,
        showLast: showLast,
        showPrevious: showPrevious,
        showNext: showNext,
        scrollToNode: scrollToNode
    });
    var makeWidget = (0, _connectPaginationJsDefault.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _objectSpread(_objectSpread({}, makeWidget({
        totalPages: totalPages,
        padding: padding
    })), {}, {
        $$widgetType: "ais.pagination"
    });
};
exports.default = pagination;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../components/Pagination/Pagination.js":"4kiOm","../../connectors/pagination/connectPagination.js":"bHouJ","../../lib/suit.js":"du81D","../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kiOm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function Pagination(props) {
    function createClickHandler(pageNumber) {
        return function(event) {
            if ((0, _indexJs.isSpecialClick)(event)) // do not alter the default browser behavior
            // if one special key is down
            return;
            event.preventDefault();
            props.setCurrentPage(pageNumber);
        };
    }
    return (0, _preact.h)("div", {
        className: (0, _uiComponentsShared.cx)(props.cssClasses.root, props.nbPages <= 1 && props.cssClasses.noRefinementRoot)
    }, (0, _preact.h)("ul", {
        className: props.cssClasses.list
    }, props.showFirst && (0, _preact.h)(PaginationLink, {
        ariaLabel: "First Page",
        className: props.cssClasses.firstPageItem,
        isDisabled: props.isFirstPage,
        templates: props.templates,
        templateKey: "first",
        pageNumber: 0,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showPrevious && (0, _preact.h)(PaginationLink, {
        ariaLabel: "Previous Page",
        className: props.cssClasses.previousPageItem,
        isDisabled: props.isFirstPage,
        templates: props.templates,
        templateKey: "previous",
        pageNumber: props.currentPage - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.pages.map(function(pageNumber) {
        return (0, _preact.h)(PaginationLink, {
            key: pageNumber,
            ariaLabel: "Page ".concat(pageNumber + 1),
            className: props.cssClasses.pageItem,
            isSelected: pageNumber === props.currentPage,
            templates: props.templates,
            templateKey: "page",
            pageNumber: pageNumber,
            createURL: props.createURL,
            cssClasses: props.cssClasses,
            createClickHandler: createClickHandler
        });
    }), props.showNext && (0, _preact.h)(PaginationLink, {
        ariaLabel: "Next Page",
        className: props.cssClasses.nextPageItem,
        isDisabled: props.isLastPage,
        templates: props.templates,
        templateKey: "next",
        pageNumber: props.currentPage + 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    }), props.showLast && (0, _preact.h)(PaginationLink, {
        ariaLabel: "Last Page, Page ".concat(props.nbPages),
        className: props.cssClasses.lastPageItem,
        isDisabled: props.isLastPage,
        templates: props.templates,
        templateKey: "last",
        pageNumber: props.nbPages - 1,
        createURL: props.createURL,
        cssClasses: props.cssClasses,
        createClickHandler: createClickHandler
    })));
}
function PaginationLink(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, ariaLabel = _ref.ariaLabel, pageNumber = _ref.pageNumber, className = _ref.className, _ref$isDisabled = _ref.isDisabled, isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled, _ref$isSelected = _ref.isSelected, isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected, cssClasses = _ref.cssClasses, createURL = _ref.createURL, createClickHandler = _ref.createClickHandler;
    return (0, _preact.h)("li", {
        className: (0, _uiComponentsShared.cx)(cssClasses.item, isDisabled && cssClasses.disabledItem, className, isSelected && cssClasses.selectedItem)
    }, isDisabled ? (0, _preact.h)((0, _templateJsDefault.default), {
        rootTagName: "span",
        rootProps: {
            className: cssClasses.link,
            "aria-label": ariaLabel
        },
        templateKey: templateKey,
        templates: templates,
        data: {
            page: pageNumber + 1
        }
    }) : (0, _preact.h)((0, _templateJsDefault.default), {
        rootTagName: "a",
        rootProps: {
            className: cssClasses.link,
            "aria-label": ariaLabel,
            href: createURL(pageNumber),
            onClick: createClickHandler(pageNumber)
        },
        templateKey: templateKey,
        templates: templates,
        data: {
            page: pageNumber + 1
        }
    }));
}
exports.default = Pagination;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHouJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
var _paginatorJs = require("./Paginator.js");
var _paginatorJsDefault = parcelHelpers.interopDefault(_paginatorJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "pagination",
    connector: true
});
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */ var connectPagination = function connectPagination(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, totalPages = _ref.totalPages, _ref$padding = _ref.padding, padding = _ref$padding === void 0 ? 3 : _ref$padding;
        var pager = new (0, _paginatorJsDefault.default)({
            currentPage: 0,
            total: 0,
            padding: padding
        });
        var connectorState = {};
        function getMaxPage(_ref2) {
            var nbPages = _ref2.nbPages;
            return totalPages !== undefined ? Math.min(totalPages, nbPages) : nbPages;
        }
        return {
            $$type: "ais.pagination",
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                return state.setQueryParameter("page", undefined);
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
                var searchParameters = _ref4.searchParameters;
                var page = searchParameters.page || 0;
                if (!page) return uiState;
                return _objectSpread(_objectSpread({}, uiState), {}, {
                    page: page + 1
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
                var uiState = _ref5.uiState;
                var page = uiState.page ? uiState.page - 1 : 0;
                return searchParameters.setQueryParameter("page", page);
            },
            getWidgetRenderState: function getWidgetRenderState(_ref6) {
                var results = _ref6.results, helper = _ref6.helper, state = _ref6.state, createURL = _ref6.createURL;
                if (!connectorState.refine) connectorState.refine = function(page) {
                    helper.setPage(page);
                    helper.search();
                };
                if (!connectorState.createURL) connectorState.createURL = function(page) {
                    return createURL(function(uiState) {
                        return _objectSpread(_objectSpread({}, uiState), {}, {
                            page: page + 1
                        });
                    });
                };
                var page = state.page || 0;
                var nbPages = getMaxPage(results || {
                    nbPages: 0
                });
                pager.currentPage = page;
                pager.total = nbPages;
                return {
                    createURL: connectorState.createURL,
                    refine: connectorState.refine,
                    canRefine: nbPages > 1,
                    currentRefinement: page,
                    nbHits: (results === null || results === void 0 ? void 0 : results.nbHits) || 0,
                    nbPages: nbPages,
                    pages: results ? pager.pages() : [],
                    isFirstPage: pager.isFirstPage(),
                    isLastPage: pager.isLastPage(),
                    widgetParams: widgetParams
                };
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    pagination: this.getWidgetRenderState(renderOptions)
                });
            }
        };
    };
};
exports.default = connectPagination;

},{"../../lib/utils/index.js":"etVYs","./Paginator.js":"4Vcbp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Vcbp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var Paginator = /*#__PURE__*/ function() {
    function Paginator(params) {
        _classCallCheck(this, Paginator);
        _defineProperty(this, "currentPage", void 0);
        _defineProperty(this, "total", void 0);
        _defineProperty(this, "padding", void 0);
        this.currentPage = params.currentPage;
        this.total = params.total;
        this.padding = params.padding;
    }
    _createClass(Paginator, [
        {
            key: "pages",
            value: function pages() {
                var total = this.total, currentPage = this.currentPage, padding = this.padding;
                if (total === 0) return [
                    0
                ];
                var totalDisplayedPages = this.nbPagesDisplayed(padding, total);
                if (totalDisplayedPages === total) return (0, _indexJs.range)({
                    end: total
                });
                var paddingLeft = this.calculatePaddingLeft(currentPage, padding, total, totalDisplayedPages);
                var paddingRight = totalDisplayedPages - paddingLeft;
                var first = currentPage - paddingLeft;
                var last = currentPage + paddingRight;
                return (0, _indexJs.range)({
                    start: first,
                    end: last
                });
            }
        },
        {
            key: "nbPagesDisplayed",
            value: function nbPagesDisplayed(padding, total) {
                return Math.min(2 * padding + 1, total);
            }
        },
        {
            key: "calculatePaddingLeft",
            value: function calculatePaddingLeft(current, padding, total, totalDisplayedPages) {
                if (current <= padding) return current;
                if (current >= total - padding) return totalDisplayedPages - (total - current);
                return padding;
            }
        },
        {
            key: "isLastPage",
            value: function isLastPage() {
                return this.currentPage === this.total - 1 || this.total === 0;
            }
        },
        {
            key: "isFirstPage",
            value: function isFirstPage() {
                return this.currentPage === 0;
            }
        }
    ]);
    return Paginator;
}();
exports.default = Paginator;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rn2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _refinementListJs = require("../../components/RefinementList/RefinementList.js");
var _refinementListJsDefault = parcelHelpers.interopDefault(_refinementListJs);
var _connectRefinementListJs = require("../../connectors/refinement-list/connectRefinementList.js");
var _connectRefinementListJsDefault = parcelHelpers.interopDefault(_connectRefinementListJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/templating/index.js");
var _indexJs1 = require("../../lib/utils/index.js");
var _defaultTemplatesJs = require("../search-box/defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
var _defaultTemplatesJs1 = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault1 = parcelHelpers.interopDefault(_defaultTemplatesJs1);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs1.createDocumentationMessageGenerator)({
    name: "refinement-list"
});
var suit = (0, _suitJs.component)("RefinementList");
var searchBoxSuit = (0, _suitJs.component)("SearchBox");
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, templates = _ref.templates, searchBoxTemplates = _ref.searchBoxTemplates, renderState = _ref.renderState, showMore = _ref.showMore, searchable = _ref.searchable, searchablePlaceholder = _ref.searchablePlaceholder, searchableIsAlwaysActive = _ref.searchableIsAlwaysActive;
    return function(_ref2, isFirstRendering) {
        var refine = _ref2.refine, items = _ref2.items, createURL = _ref2.createURL, searchForItems = _ref2.searchForItems, isFromSearch = _ref2.isFromSearch, instantSearchInstance = _ref2.instantSearchInstance, toggleShowMore = _ref2.toggleShowMore, isShowingMore = _ref2.isShowingMore, hasExhaustiveItems = _ref2.hasExhaustiveItems, canToggleShowMore = _ref2.canToggleShowMore;
        if (isFirstRendering) {
            renderState.templateProps = (0, _indexJs.prepareTemplateProps)({
                defaultTemplates: (0, _defaultTemplatesJsDefault1.default),
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            renderState.searchBoxTemplateProps = (0, _indexJs.prepareTemplateProps)({
                defaultTemplates: (0, _defaultTemplatesJsDefault.default),
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: searchBoxTemplates
            });
            return;
        }
        (0, _preact.render)((0, _preact.h)((0, _refinementListJsDefault.default), {
            createURL: createURL,
            cssClasses: cssClasses,
            facetValues: items,
            templateProps: renderState.templateProps,
            searchBoxTemplateProps: renderState.searchBoxTemplateProps,
            toggleRefinement: refine,
            searchFacetValues: searchable ? searchForItems : undefined,
            searchPlaceholder: searchablePlaceholder,
            searchIsAlwaysActive: searchableIsAlwaysActive,
            isFromSearch: isFromSearch,
            showMore: showMore && !isFromSearch && items.length > 0,
            toggleShowMore: toggleShowMore,
            isShowingMore: isShowingMore,
            hasExhaustiveItems: hasExhaustiveItems,
            canToggleShowMore: canToggleShowMore
        }), containerNode);
    };
};
/**
 * The refinement list widget is one of the most common widget that you can find
 * in a search UI. With this widget, the user can filter the dataset based on facets.
 *
 * The refinement list displays only the most relevant facets for the current search
 * context. The sort option only affects the facet that are returned by the engine,
 * not which facets are returned.
 *
 * This widget also implements search for facet values, which is a mini search inside the
 * values of the facets. This makes easy to deal with uncommon facet values.
 *
 * @requirements
 *
 * The attribute passed to `attribute` must be declared as an
 * [attribute for faceting](https://www.algolia.com/doc/guides/searching/faceting/#declaring-attributes-for-faceting)
 * in your Algolia settings.
 *
 * If you also want to use search for facet values on this attribute, you need to make it searchable using the [dashboard](https://www.algolia.com/explorer/display/) or using the [API](https://www.algolia.com/doc/guides/searching/faceting/#search-for-facet-values).
 */ var refinementList = function refinementList(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, attribute = _ref3.attribute, operator = _ref3.operator, sortBy = _ref3.sortBy, limit = _ref3.limit, showMore = _ref3.showMore, showMoreLimit = _ref3.showMoreLimit, _ref3$searchable = _ref3.searchable, searchable = _ref3$searchable === void 0 ? false : _ref3$searchable, _ref3$searchablePlace = _ref3.searchablePlaceholder, searchablePlaceholder = _ref3$searchablePlace === void 0 ? "Search..." : _ref3$searchablePlace, _ref3$searchableEscap = _ref3.searchableEscapeFacetValues, searchableEscapeFacetValues = _ref3$searchableEscap === void 0 ? true : _ref3$searchableEscap, _ref3$searchableIsAlw = _ref3.searchableIsAlwaysActive, searchableIsAlwaysActive = _ref3$searchableIsAlw === void 0 ? true : _ref3$searchableIsAlw, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? {} : _ref3$templates, transformItems = _ref3.transformItems;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var escapeFacetValues = searchable ? Boolean(searchableEscapeFacetValues) : false;
    var containerNode = (0, _indexJs1.getContainerNode)(container);
    var cssClasses = {
        root: (0, _uiComponentsShared.cx)(suit(), userCssClasses.root),
        noRefinementRoot: (0, _uiComponentsShared.cx)(suit({
            modifierName: "noRefinement"
        }), userCssClasses.noRefinementRoot),
        list: (0, _uiComponentsShared.cx)(suit({
            descendantName: "list"
        }), userCssClasses.list),
        item: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item"
        }), userCssClasses.item),
        selectedItem: (0, _uiComponentsShared.cx)(suit({
            descendantName: "item",
            modifierName: "selected"
        }), userCssClasses.selectedItem),
        searchBox: (0, _uiComponentsShared.cx)(suit({
            descendantName: "searchBox"
        }), userCssClasses.searchBox),
        label: (0, _uiComponentsShared.cx)(suit({
            descendantName: "label"
        }), userCssClasses.label),
        checkbox: (0, _uiComponentsShared.cx)(suit({
            descendantName: "checkbox"
        }), userCssClasses.checkbox),
        labelText: (0, _uiComponentsShared.cx)(suit({
            descendantName: "labelText"
        }), userCssClasses.labelText),
        count: (0, _uiComponentsShared.cx)(suit({
            descendantName: "count"
        }), userCssClasses.count),
        noResults: (0, _uiComponentsShared.cx)(suit({
            descendantName: "noResults"
        }), userCssClasses.noResults),
        showMore: (0, _uiComponentsShared.cx)(suit({
            descendantName: "showMore"
        }), userCssClasses.showMore),
        disabledShowMore: (0, _uiComponentsShared.cx)(suit({
            descendantName: "showMore",
            modifierName: "disabled"
        }), userCssClasses.disabledShowMore),
        searchable: {
            root: (0, _uiComponentsShared.cx)(searchBoxSuit(), userCssClasses.searchableRoot),
            form: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "form"
            }), userCssClasses.searchableForm),
            input: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "input"
            }), userCssClasses.searchableInput),
            submit: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "submit"
            }), userCssClasses.searchableSubmit),
            submitIcon: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "submitIcon"
            }), userCssClasses.searchableSubmitIcon),
            reset: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "reset"
            }), userCssClasses.searchableReset),
            resetIcon: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "resetIcon"
            }), userCssClasses.searchableResetIcon),
            loadingIndicator: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "loadingIndicator"
            }), userCssClasses.searchableLoadingIndicator),
            loadingIcon: (0, _uiComponentsShared.cx)(searchBoxSuit({
                descendantName: "loadingIcon"
            }), userCssClasses.searchableLoadingIcon)
        }
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        searchBoxTemplates: {
            submit: templates.searchableSubmit,
            reset: templates.searchableReset,
            loadingIndicator: templates.searchableLoadingIndicator
        },
        renderState: {},
        searchable: searchable,
        searchablePlaceholder: searchablePlaceholder,
        searchableIsAlwaysActive: searchableIsAlwaysActive,
        showMore: showMore
    });
    var makeWidget = (0, _connectRefinementListJsDefault.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _objectSpread(_objectSpread({}, makeWidget({
        attribute: attribute,
        operator: operator,
        limit: limit,
        showMore: showMore,
        showMoreLimit: showMoreLimit,
        sortBy: sortBy,
        escapeFacetValues: escapeFacetValues,
        transformItems: transformItems
    })), {}, {
        $$widgetType: "ais.refinementList"
    });
};
exports.default = refinementList;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../components/RefinementList/RefinementList.js":"2a3aK","../../connectors/refinement-list/connectRefinementList.js":"kkKYv","../../lib/suit.js":"du81D","../../lib/templating/index.js":"aFegL","../../lib/utils/index.js":"etVYs","../search-box/defaultTemplates.js":"aAfNi","./defaultTemplates.js":"iPrXC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2a3aK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
var _searchBoxJs = require("../SearchBox/SearchBox.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
var _refinementListItemJs = require("./RefinementListItem.js");
var _refinementListItemJsDefault = parcelHelpers.interopDefault(_refinementListItemJs);
var _excluded = [
    "root"
];
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
// CSS types
var defaultProps = {
    cssClasses: {},
    depth: 0
};
function isHierarchicalMenuItem(facetValue) {
    return facetValue.data !== undefined;
}
var RefinementList = /*#__PURE__*/ function(_Component) {
    _inherits(RefinementList, _Component);
    var _super = _createSuper(RefinementList);
    function RefinementList() {
        var _this;
        _classCallCheck(this, RefinementList);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "searchBox", (0, _preact.createRef)());
        _defineProperty(_assertThisInitialized(_this), "_generateFacetItem", function(facetValue) {
            var subItems;
            if (isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0) {
                var _this$props$cssClasse = _this.props.cssClasses, root = _this$props$cssClasse.root, cssClasses = _objectWithoutProperties(_this$props$cssClasse, _excluded);
                subItems = (0, _preact.h)(RefinementList, _extends({}, _this.props, {
                    // We want to keep `root` required for external usage but not for the
                    // sub items.
                    cssClasses: cssClasses,
                    depth: _this.props.depth + 1,
                    facetValues: facetValue.data,
                    showMore: false,
                    className: _this.props.cssClasses.childList
                }));
            }
            var url = _this.props.createURL(facetValue.value);
            var templateData = _objectSpread(_objectSpread({}, facetValue), {}, {
                url: url,
                attribute: _this.props.attribute,
                cssClasses: _this.props.cssClasses,
                isFromSearch: _this.props.isFromSearch
            });
            var key = facetValue.value;
            if (facetValue.isRefined !== undefined) key += "/".concat(facetValue.isRefined);
            if (facetValue.count !== undefined) key += "/".concat(facetValue.count);
            var refinementListItemClassName = (0, _uiComponentsShared.cx)(_this.props.cssClasses.item, facetValue.isRefined && _this.props.cssClasses.selectedItem, !facetValue.count && _this.props.cssClasses.disabledItem, Boolean(isHierarchicalMenuItem(facetValue) && Array.isArray(facetValue.data) && facetValue.data.length > 0) && _this.props.cssClasses.parentItem);
            return (0, _preact.h)((0, _refinementListItemJsDefault.default), {
                templateKey: "item",
                key: key,
                facetValueToRefine: facetValue.value,
                handleClick: _this.handleItemClick,
                isRefined: facetValue.isRefined,
                className: refinementListItemClassName,
                subItems: subItems,
                templateData: templateData,
                templateProps: _this.props.templateProps
            });
        });
        // Click events on DOM tree like LABEL > INPUT will result in two click events
        // instead of one.
        // No matter the framework, see https://www.google.com/search?q=click+label+twice
        //
        // Thus making it hard to distinguish activation from deactivation because both click events
        // are very close. Debounce is a solution but hacky.
        //
        // So the code here checks if the click was done on or in a LABEL. If this LABEL
        // has a checkbox inside, we ignore the first click event because we will get another one.
        //
        // We also check if the click was done inside a link and then e.preventDefault() because we already
        // handle the url
        //
        // Finally, we always stop propagation of the event to avoid multiple levels RefinementLists to fail: click
        // on child would click on parent also
        _defineProperty(_assertThisInitialized(_this), "handleItemClick", function(_ref) {
            var facetValueToRefine = _ref.facetValueToRefine, isRefined = _ref.isRefined, originalEvent = _ref.originalEvent;
            if ((0, _indexJs.isSpecialClick)(originalEvent)) // do not alter the default browser behavior
            // if one special key is down
            return;
            if (!(originalEvent.target instanceof HTMLElement) || !(originalEvent.target.parentNode instanceof HTMLElement)) return;
            if (isRefined && originalEvent.target.parentNode.querySelector('input[type="radio"]:checked')) // Prevent refinement for being reset if the user clicks on an already checked radio button
            return;
            if (originalEvent.target.tagName === "INPUT") {
                _this.refine(facetValueToRefine);
                return;
            }
            var parent = originalEvent.target;
            while(parent !== originalEvent.currentTarget){
                if (parent.tagName === "LABEL" && (parent.querySelector('input[type="checkbox"]') || parent.querySelector('input[type="radio"]'))) return;
                if (parent.tagName === "A" && parent.href) originalEvent.preventDefault();
                parent = parent.parentNode;
            }
            originalEvent.stopPropagation();
            _this.refine(facetValueToRefine);
        });
        return _this;
    }
    _createClass(RefinementList, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                var areFacetValuesDifferent = !(0, _indexJs.isEqual)(this.props.facetValues, nextProps.facetValues);
                return areFacetValuesDifferent;
            }
        },
        {
            key: "refine",
            value: function refine(facetValueToRefine) {
                this.props.toggleRefinement(facetValueToRefine);
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.searchBox.current && !nextProps.isFromSearch) this.searchBox.current.resetInput();
            }
        },
        {
            key: "refineFirstValue",
            value: function refineFirstValue() {
                var firstValue = this.props.facetValues && this.props.facetValues[0];
                if (firstValue) {
                    var actualValue = firstValue.value;
                    this.props.toggleRefinement(actualValue);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var showMoreButtonClassName = (0, _uiComponentsShared.cx)(this.props.cssClasses.showMore, !(this.props.showMore === true && this.props.canToggleShowMore) && this.props.cssClasses.disabledShowMore);
                var showMoreButton = this.props.showMore === true && (0, _preact.h)((0, _templateJsDefault.default), _extends({}, this.props.templateProps, {
                    templateKey: "showMoreText",
                    rootTagName: "button",
                    rootProps: {
                        className: showMoreButtonClassName,
                        disabled: !this.props.canToggleShowMore,
                        onClick: this.props.toggleShowMore
                    },
                    data: {
                        isShowingMore: this.props.isShowingMore
                    }
                }));
                var shouldDisableSearchBox = this.props.searchIsAlwaysActive !== true && !(this.props.isFromSearch || !this.props.hasExhaustiveItems);
                var searchBox = this.props.searchFacetValues && (0, _preact.h)("div", {
                    className: this.props.cssClasses.searchBox
                }, (0, _preact.h)((0, _searchBoxJsDefault.default), {
                    ref: this.searchBox,
                    placeholder: this.props.searchPlaceholder,
                    disabled: shouldDisableSearchBox,
                    cssClasses: this.props.cssClasses.searchable,
                    templates: this.props.searchBoxTemplateProps.templates,
                    onChange: function onChange(event) {
                        return _this2.props.searchFacetValues(event.target.value);
                    },
                    onReset: function onReset() {
                        return _this2.props.searchFacetValues("");
                    },
                    onSubmit: function onSubmit() {
                        return _this2.refineFirstValue();
                    },
                    searchAsYouType: false,
                    ariaLabel: "Search for filters"
                }));
                var facetValues = this.props.facetValues && this.props.facetValues.length > 0 && (0, _preact.h)("ul", {
                    className: this.props.cssClasses.list
                }, this.props.facetValues.map(this._generateFacetItem, this));
                var noResults = this.props.searchFacetValues && this.props.isFromSearch && (!this.props.facetValues || this.props.facetValues.length === 0) && (0, _preact.h)((0, _templateJsDefault.default), _extends({}, this.props.templateProps, {
                    templateKey: "searchableNoResults",
                    rootProps: {
                        className: this.props.cssClasses.noResults
                    }
                }));
                var rootClassName = (0, _uiComponentsShared.cx)(this.props.cssClasses.root, (!this.props.facetValues || this.props.facetValues.length === 0) && this.props.cssClasses.noRefinementRoot, this.props.className);
                return (0, _preact.h)("div", {
                    className: rootClassName
                }, this.props.children, searchBox, facetValues, noResults, showMoreButton);
            }
        }
    ]);
    return RefinementList;
}((0, _preact.Component));
_defineProperty(RefinementList, "defaultProps", defaultProps);
exports.default = RefinementList;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../lib/utils/index.js":"etVYs","../SearchBox/SearchBox.js":"acfnu","../Template/Template.js":"aVPg5","./RefinementListItem.js":"iBH7m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acfnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _indexJs = require("../../lib/utils/index.js");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var defaultProps = {
    query: "",
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    ariaLabel: "Search",
    onChange: (0, _indexJs.noop),
    onSubmit: (0, _indexJs.noop),
    onReset: (0, _indexJs.noop),
    refine: (0, _indexJs.noop)
};
var SearchBox = /*#__PURE__*/ function(_Component) {
    _inherits(SearchBox, _Component);
    var _super = _createSuper(SearchBox);
    function SearchBox() {
        var _this;
        _classCallCheck(this, SearchBox);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
            query: _this.props.query,
            focused: false
        });
        _defineProperty(_assertThisInitialized(_this), "input", (0, _preact.createRef)());
        _defineProperty(_assertThisInitialized(_this), "onInput", function(event) {
            var _this$props = _this.props, searchAsYouType = _this$props.searchAsYouType, refine = _this$props.refine, onChange = _this$props.onChange;
            var query = event.target.value;
            if (searchAsYouType) refine(query);
            _this.setState({
                query: query
            });
            onChange(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSubmit", function(event) {
            var _this$props2 = _this.props, searchAsYouType = _this$props2.searchAsYouType, refine = _this$props2.refine, onSubmit = _this$props2.onSubmit;
            event.preventDefault();
            event.stopPropagation();
            if (_this.input.current) _this.input.current.blur();
            if (!searchAsYouType) refine(_this.state.query);
            onSubmit(event);
            return false;
        });
        _defineProperty(_assertThisInitialized(_this), "onReset", function(event) {
            var _this$props3 = _this.props, refine = _this$props3.refine, onReset = _this$props3.onReset;
            var query = "";
            if (_this.input.current) _this.input.current.focus();
            refine(query);
            _this.setState({
                query: query
            });
            onReset(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
            _this.setState({
                focused: false
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
            _this.setState({
                focused: true
            });
        });
        return _this;
    }
    _createClass(SearchBox, [
        {
            key: "resetInput",
            value: /**
     * This public method is used in the RefinementList SFFV search box
     * to reset the input state when an item is selected.
     *
     * @see RefinementList#componentWillReceiveProps
     * @return {undefined}
     */ function resetInput() {
                this.setState({
                    query: ""
                });
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                /**
       * when the user is typing, we don't want to replace the query typed
       * by the user (state.query) with the query exposed by the connector (props.query)
       * see: https://github.com/algolia/instantsearch/issues/4141
       */ if (!this.state.focused && nextProps.query !== this.state.query) this.setState({
                    query: nextProps.query
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, cssClasses = _this$props4.cssClasses, placeholder = _this$props4.placeholder, autofocus = _this$props4.autofocus, showSubmit = _this$props4.showSubmit, showReset = _this$props4.showReset, showLoadingIndicator = _this$props4.showLoadingIndicator, templates = _this$props4.templates, isSearchStalled = _this$props4.isSearchStalled, ariaLabel = _this$props4.ariaLabel;
                return (0, _preact.h)("div", {
                    className: cssClasses.root
                }, (0, _preact.h)("form", {
                    action: "",
                    role: "search",
                    className: cssClasses.form,
                    noValidate: true,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                }, (0, _preact.h)("input", {
                    ref: this.input,
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: cssClasses.input,
                    type: "search",
                    placeholder: placeholder,
                    autoFocus: autofocus,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    "aria-label": ariaLabel
                }), (0, _preact.h)((0, _templateJsDefault.default), {
                    templateKey: "submit",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.submit,
                        type: "submit",
                        title: "Submit the search query.",
                        hidden: !showSubmit
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), (0, _preact.h)((0, _templateJsDefault.default), {
                    templateKey: "reset",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.reset,
                        type: "reset",
                        title: "Clear the search query.",
                        hidden: !(showReset && this.state.query.trim() && !isSearchStalled)
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), showLoadingIndicator && (0, _preact.h)((0, _templateJsDefault.default), {
                    templateKey: "loadingIndicator",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.loadingIndicator,
                        hidden: !isSearchStalled
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                })));
            }
        }
    ]);
    return SearchBox;
}((0, _preact.Component));
_defineProperty(SearchBox, "defaultProps", defaultProps);
exports.default = SearchBox;

},{"preact":"26zcy","../../lib/utils/index.js":"etVYs","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBH7m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _templateJs = require("../Template/Template.js");
var _templateJsDefault = parcelHelpers.interopDefault(_templateJs);
function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function RefinementListItem(_ref) {
    var className = _ref.className, handleClick = _ref.handleClick, facetValueToRefine = _ref.facetValueToRefine, isRefined = _ref.isRefined, templateProps = _ref.templateProps, templateKey = _ref.templateKey, templateData = _ref.templateData, subItems = _ref.subItems;
    return (0, _preact.h)("li", {
        className: className,
        onClick: function onClick(originalEvent) {
            handleClick({
                facetValueToRefine: facetValueToRefine,
                isRefined: isRefined,
                originalEvent: originalEvent
            });
        }
    }, (0, _preact.h)((0, _templateJsDefault.default), _extends({}, templateProps, {
        templateKey: templateKey,
        data: templateData
    })), subItems);
}
exports.default = RefinementListItem;

},{"preact":"26zcy","../Template/Template.js":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkKYv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var _excluded = [
    "name",
    "escapedValue"
], _excluded2 = [
    "escapedValue",
    "value"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "refinement-list",
    connector: true
});
var DEFAULT_SORT = [
    "isRefined",
    "count:desc",
    "name:asc"
];
/**
 * **RefinementList** connector provides the logic to build a custom widget that
 * will let the user filter the results based on the values of a specific facet.
 *
 * **Requirement:** the attribute passed as `attribute` must be present in
 * attributesForFaceting of the searched index.
 *
 * This connector provides:
 * - a `refine()` function to select an item.
 * - a `toggleShowMore()` function to display more or less items
 * - a `searchForItems()` function to search within the items.
 */ var connectRefinementList = function connectRefinementList(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, attribute = _ref.attribute, _ref$operator = _ref.operator, operator = _ref$operator === void 0 ? "or" : _ref$operator, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$showMore = _ref.showMore, showMore = _ref$showMore === void 0 ? false : _ref$showMore, _ref$showMoreLimit = _ref.showMoreLimit, showMoreLimit = _ref$showMoreLimit === void 0 ? 20 : _ref$showMoreLimit, _ref$sortBy = _ref.sortBy, sortBy = _ref$sortBy === void 0 ? DEFAULT_SORT : _ref$sortBy, _ref$escapeFacetValue = _ref.escapeFacetValues, escapeFacetValues = _ref$escapeFacetValue === void 0 ? true : _ref$escapeFacetValue, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        if (!attribute) throw new Error(withUsage("The `attribute` option is required."));
        if (!/^(and|or)$/.test(operator)) throw new Error(withUsage('The `operator` must one of: `"and"`, `"or"` (got "'.concat(operator, '").')));
        if (showMore === true && showMoreLimit <= limit) throw new Error(withUsage("`showMoreLimit` should be greater than `limit`."));
        var formatItems = function formatItems(_ref2) {
            var label = _ref2.name, value = _ref2.escapedValue, item = _objectWithoutProperties(_ref2, _excluded);
            return _objectSpread(_objectSpread({}, item), {}, {
                value: value,
                label: label,
                highlighted: label
            });
        };
        var lastResultsFromMainSearch;
        var lastItemsFromMainSearch = [];
        var hasExhaustiveItems = true;
        var triggerRefine;
        var sendEvent;
        var isShowingMore = false;
        // Provide the same function to the `renderFn` so that way the user
        // has to only bind it once when `isFirstRendering` for instance
        var toggleShowMore = function toggleShowMore() {};
        function cachedToggleShowMore() {
            toggleShowMore();
        }
        function createToggleShowMore(renderOptions, widget) {
            return function() {
                isShowingMore = !isShowingMore;
                widget.render(renderOptions);
            };
        }
        function getLimit() {
            return isShowingMore ? showMoreLimit : limit;
        }
        var searchForFacetValues = function searchForFacetValues() {
            return function() {};
        };
        var createSearchForFacetValues = function createSearchForFacetValues(helper, widget) {
            return function(renderOptions) {
                return function(query) {
                    var instantSearchInstance = renderOptions.instantSearchInstance, searchResults = renderOptions.results;
                    if (query === "" && lastItemsFromMainSearch) // render with previous data from the helper.
                    renderFn(_objectSpread(_objectSpread({}, widget.getWidgetRenderState(_objectSpread(_objectSpread({}, renderOptions), {}, {
                        results: lastResultsFromMainSearch
                    }))), {}, {
                        instantSearchInstance: instantSearchInstance
                    }), false);
                    else {
                        var tags = {
                            highlightPreTag: escapeFacetValues ? (0, _indexJs.TAG_PLACEHOLDER).highlightPreTag : (0, _indexJs.TAG_REPLACEMENT).highlightPreTag,
                            highlightPostTag: escapeFacetValues ? (0, _indexJs.TAG_PLACEHOLDER).highlightPostTag : (0, _indexJs.TAG_REPLACEMENT).highlightPostTag
                        };
                        helper.searchForFacetValues(attribute, query, // We cap the `maxFacetHits` value to 100 because the Algolia API
                        // doesn't support a greater number.
                        // See https://www.algolia.com/doc/api-reference/api-parameters/maxFacetHits/
                        Math.min(getLimit(), 100), tags).then(function(results) {
                            var facetValues = escapeFacetValues ? (0, _indexJs.escapeFacets)(results.facetHits) : results.facetHits;
                            var normalizedFacetValues = transformItems(facetValues.map(function(_ref3) {
                                var escapedValue = _ref3.escapedValue, value = _ref3.value, item = _objectWithoutProperties(_ref3, _excluded2);
                                return _objectSpread(_objectSpread({}, item), {}, {
                                    value: escapedValue,
                                    label: value
                                });
                            }), {
                                results: searchResults
                            });
                            renderFn(_objectSpread(_objectSpread({}, widget.getWidgetRenderState(_objectSpread(_objectSpread({}, renderOptions), {}, {
                                results: lastResultsFromMainSearch
                            }))), {}, {
                                items: normalizedFacetValues,
                                canToggleShowMore: false,
                                canRefine: true,
                                isFromSearch: true,
                                instantSearchInstance: instantSearchInstance
                            }), false);
                        });
                    }
                };
            };
        };
        return {
            $$type: "ais.refinementList",
            init: function init(initOptions) {
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    refinementList: _objectSpread(_objectSpread({}, renderState.refinementList), {}, _defineProperty({}, attribute, this.getWidgetRenderState(renderOptions)))
                });
            },
            getWidgetRenderState: function getWidgetRenderState(renderOptions) {
                var _this = this;
                var results = renderOptions.results, state = renderOptions.state, _createURL = renderOptions.createURL, instantSearchInstance = renderOptions.instantSearchInstance, helper = renderOptions.helper;
                var items = [];
                var facetValues = [];
                if (!sendEvent || !triggerRefine || !searchForFacetValues) {
                    sendEvent = (0, _indexJs.createSendEventForFacet)({
                        instantSearchInstance: instantSearchInstance,
                        helper: helper,
                        attribute: attribute,
                        widgetType: this.$$type
                    });
                    triggerRefine = function triggerRefine(facetValue) {
                        sendEvent("click:internal", facetValue);
                        helper.toggleFacetRefinement(attribute, facetValue).search();
                    };
                    searchForFacetValues = createSearchForFacetValues(helper, this);
                }
                if (results) {
                    var values = results.getFacetValues(attribute, {
                        sortBy: sortBy,
                        facetOrdering: sortBy === DEFAULT_SORT
                    });
                    facetValues = values && Array.isArray(values) ? values : [];
                    items = transformItems(facetValues.slice(0, getLimit()).map(formatItems), {
                        results: results
                    });
                    var maxValuesPerFacetConfig = state.maxValuesPerFacet;
                    var currentLimit = getLimit();
                    // If the limit is the max number of facet retrieved it is impossible to know
                    // if the facets are exhaustive. The only moment we are sure it is exhaustive
                    // is when it is strictly under the number requested unless we know that another
                    // widget has requested more values (maxValuesPerFacet > getLimit()).
                    // Because this is used for making the search of facets unable or not, it is important
                    // to be conservative here.
                    hasExhaustiveItems = maxValuesPerFacetConfig > currentLimit ? facetValues.length <= currentLimit : facetValues.length < currentLimit;
                    lastResultsFromMainSearch = results;
                    lastItemsFromMainSearch = items;
                    if (renderOptions.results) toggleShowMore = createToggleShowMore(renderOptions, this);
                }
                // Do not mistake searchForFacetValues and searchFacetValues which is the actual search
                // function
                var searchFacetValues = searchForFacetValues && searchForFacetValues(renderOptions);
                var canShowLess = isShowingMore && lastItemsFromMainSearch.length > limit;
                var canShowMore = showMore && !hasExhaustiveItems;
                var canToggleShowMore = canShowLess || canShowMore;
                return {
                    createURL: function createURL(facetValue) {
                        return _createURL(function(uiState) {
                            return _this.getWidgetUiState(uiState, {
                                searchParameters: state.resetPage().toggleFacetRefinement(attribute, facetValue),
                                helper: helper
                            });
                        });
                    },
                    items: items,
                    refine: triggerRefine,
                    searchForItems: searchFacetValues,
                    isFromSearch: false,
                    canRefine: items.length > 0,
                    widgetParams: widgetParams,
                    isShowingMore: isShowingMore,
                    canToggleShowMore: canToggleShowMore,
                    toggleShowMore: cachedToggleShowMore,
                    sendEvent: sendEvent,
                    hasExhaustiveItems: hasExhaustiveItems
                };
            },
            dispose: function dispose(_ref4) {
                var state = _ref4.state;
                unmountFn();
                var withoutMaxValuesPerFacet = state.setQueryParameter("maxValuesPerFacet", undefined);
                if (operator === "and") return withoutMaxValuesPerFacet.removeFacet(attribute);
                return withoutMaxValuesPerFacet.removeDisjunctiveFacet(attribute);
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref5) {
                var searchParameters = _ref5.searchParameters;
                var values = operator === "or" ? searchParameters.getDisjunctiveRefinements(attribute) : searchParameters.getConjunctiveRefinements(attribute);
                if (!values.length) return uiState;
                return _objectSpread(_objectSpread({}, uiState), {}, {
                    refinementList: _objectSpread(_objectSpread({}, uiState.refinementList), {}, _defineProperty({}, attribute, values))
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
                var uiState = _ref6.uiState;
                var isDisjunctive = operator === "or";
                if (searchParameters.isHierarchicalFacet(attribute)) {
                    (0, _indexJs.warning)(false, 'RefinementList: Attribute "'.concat(attribute, '" is already used by another widget applying hierarchical faceting.\nAs this is not supported, please make sure to remove this other widget or this RefinementList widget will not work at all.'));
                    return searchParameters;
                }
                if (isDisjunctive && searchParameters.isConjunctiveFacet(attribute) || !isDisjunctive && searchParameters.isDisjunctiveFacet(attribute)) {
                    (0, _indexJs.warning)(false, 'RefinementList: Attribute "'.concat(attribute, '" is used by another refinement list with a different operator.\nAs this is not supported, please make sure to only use this attribute with one of the two operators.'));
                    return searchParameters;
                }
                var values = uiState.refinementList && uiState.refinementList[attribute];
                var withoutRefinements = searchParameters.clearRefinements(attribute);
                var withFacetConfiguration = isDisjunctive ? withoutRefinements.addDisjunctiveFacet(attribute) : withoutRefinements.addFacet(attribute);
                var currentMaxValuesPerFacet = withFacetConfiguration.maxValuesPerFacet || 0;
                var nextMaxValuesPerFacet = Math.max(currentMaxValuesPerFacet, showMore ? showMoreLimit : limit);
                var withMaxValuesPerFacet = withFacetConfiguration.setQueryParameter("maxValuesPerFacet", nextMaxValuesPerFacet);
                if (!values) {
                    var key = isDisjunctive ? "disjunctiveFacetsRefinements" : "facetsRefinements";
                    return withMaxValuesPerFacet.setQueryParameters(_defineProperty({}, key, _objectSpread(_objectSpread({}, withMaxValuesPerFacet[key]), {}, _defineProperty({}, attribute, []))));
                }
                return values.reduce(function(parameters, value) {
                    return isDisjunctive ? parameters.addDisjunctiveFacetRefinement(attribute, value) : parameters.addFacetRefinement(attribute, value);
                }, withMaxValuesPerFacet);
            }
        };
    };
};
exports.default = connectRefinementList;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAfNi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _ref2 = (0, _preact.h)("path", {
    d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
});
var _ref4 = (0, _preact.h)("path", {
    d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
});
var _ref6 = (0, _preact.h)("g", {
    fill: "none",
    fillRule: "evenodd"
}, (0, _preact.h)("g", {
    transform: "translate(1 1)",
    strokeWidth: "2"
}, (0, _preact.h)("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18"
}), (0, _preact.h)("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
}, (0, _preact.h)("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
}))));
var defaultTemplate = {
    reset: function reset(_ref) {
        var cssClasses = _ref.cssClasses;
        return (0, _preact.h)("svg", {
            className: cssClasses.resetIcon,
            viewBox: "0 0 20 20",
            width: "10",
            height: "10",
            "aria-hidden": "true"
        }, _ref2);
    },
    submit: function submit(_ref3) {
        var cssClasses = _ref3.cssClasses;
        return (0, _preact.h)("svg", {
            className: cssClasses.submitIcon,
            width: "10",
            height: "10",
            viewBox: "0 0 40 40",
            "aria-hidden": "true"
        }, _ref4);
    },
    loadingIndicator: function loadingIndicator(_ref5) {
        var cssClasses = _ref5.cssClasses;
        return (0, _preact.h)("svg", {
            className: cssClasses.loadingIcon,
            width: "16",
            height: "16",
            viewBox: "0 0 38 38",
            stroke: "#444",
            "aria-hidden": "true"
        }, _ref6);
    }
};
exports.default = defaultTemplate;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPrXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _formatNumberJs = require("../../lib/formatNumber.js");
var defaultTemplates = {
    item: function item(_ref) {
        var cssClasses = _ref.cssClasses, count = _ref.count, value = _ref.value, highlighted = _ref.highlighted, isRefined = _ref.isRefined, isFromSearch = _ref.isFromSearch;
        return (0, _preact.h)("label", {
            className: (0, _uiComponentsShared.cx)(cssClasses.label)
        }, (0, _preact.h)("input", {
            type: "checkbox",
            className: (0, _uiComponentsShared.cx)(cssClasses.checkbox),
            value: value,
            defaultChecked: isRefined
        }), (0, _preact.h)("span", {
            className: (0, _uiComponentsShared.cx)(cssClasses.labelText),
            dangerouslySetInnerHTML: isFromSearch ? {
                __html: highlighted
            } : undefined
        }, !isFromSearch && highlighted), (0, _preact.h)("span", {
            className: (0, _uiComponentsShared.cx)(cssClasses.count)
        }, (0, _formatNumberJs.formatNumber)(count)));
    },
    showMoreText: function showMoreText(_ref2) {
        var isShowingMore = _ref2.isShowingMore;
        return isShowingMore ? "Show less" : "Show more";
    },
    searchableNoResults: function searchableNoResults() {
        return "No results";
    }
};
exports.default = defaultTemplates;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../lib/formatNumber.js":"dXHIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSd18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uiComponentsShared = require("@algolia/ui-components-shared");
var _preact = require("preact");
var _searchBoxJs = require("../../components/SearchBox/SearchBox.js");
var _searchBoxJsDefault = parcelHelpers.interopDefault(_searchBoxJs);
var _connectSearchBoxJs = require("../../connectors/search-box/connectSearchBox.js");
var _connectSearchBoxJsDefault = parcelHelpers.interopDefault(_connectSearchBoxJs);
var _suitJs = require("../../lib/suit.js");
var _indexJs = require("../../lib/utils/index.js");
var _defaultTemplatesJs = require("./defaultTemplates.js");
var _defaultTemplatesJsDefault = parcelHelpers.interopDefault(_defaultTemplatesJs);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "search-box"
});
var suit = (0, _suitJs.component)("SearchBox");
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, placeholder = _ref.placeholder, templates = _ref.templates, autofocus = _ref.autofocus, searchAsYouType = _ref.searchAsYouType, showReset = _ref.showReset, showSubmit = _ref.showSubmit, showLoadingIndicator = _ref.showLoadingIndicator;
    return function(_ref2) {
        var refine = _ref2.refine, query = _ref2.query, isSearchStalled = _ref2.isSearchStalled;
        (0, _preact.render)((0, _preact.h)((0, _searchBoxJsDefault.default), {
            query: query,
            placeholder: placeholder,
            autofocus: autofocus,
            refine: refine,
            searchAsYouType: searchAsYouType,
            templates: templates,
            showSubmit: showSubmit,
            showReset: showReset,
            showLoadingIndicator: showLoadingIndicator,
            isSearchStalled: isSearchStalled,
            cssClasses: cssClasses
        }), containerNode);
    };
};
/**
 * The searchbox widget is used to let the user set a text based query.
 *
 * This is usually the  main entry point to start the search in an instantsearch context. For that
 * reason is usually placed on top, and not hidden so that the user can start searching right
 * away.
 *
 */ var searchBox = function searchBox(widgetParams) {
    var _ref3 = widgetParams || {}, container = _ref3.container, _ref3$placeholder = _ref3.placeholder, placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses, _ref3$autofocus = _ref3.autofocus, autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus, _ref3$searchAsYouType = _ref3.searchAsYouType, searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType, _ref3$showReset = _ref3.showReset, showReset = _ref3$showReset === void 0 ? true : _ref3$showReset, _ref3$showSubmit = _ref3.showSubmit, showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit, _ref3$showLoadingIndi = _ref3.showLoadingIndicator, showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi, queryHook = _ref3.queryHook, _ref3$templates = _ref3.templates, userTemplates = _ref3$templates === void 0 ? {} : _ref3$templates;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _indexJs.getContainerNode)(container);
    var cssClasses = {
        root: (0, _uiComponentsShared.cx)(suit(), userCssClasses.root),
        form: (0, _uiComponentsShared.cx)(suit({
            descendantName: "form"
        }), userCssClasses.form),
        input: (0, _uiComponentsShared.cx)(suit({
            descendantName: "input"
        }), userCssClasses.input),
        submit: (0, _uiComponentsShared.cx)(suit({
            descendantName: "submit"
        }), userCssClasses.submit),
        submitIcon: (0, _uiComponentsShared.cx)(suit({
            descendantName: "submitIcon"
        }), userCssClasses.submitIcon),
        reset: (0, _uiComponentsShared.cx)(suit({
            descendantName: "reset"
        }), userCssClasses.reset),
        resetIcon: (0, _uiComponentsShared.cx)(suit({
            descendantName: "resetIcon"
        }), userCssClasses.resetIcon),
        loadingIndicator: (0, _uiComponentsShared.cx)(suit({
            descendantName: "loadingIndicator"
        }), userCssClasses.loadingIndicator),
        loadingIcon: (0, _uiComponentsShared.cx)(suit({
            descendantName: "loadingIcon"
        }), userCssClasses.loadingIcon)
    };
    var templates = _objectSpread(_objectSpread({}, (0, _defaultTemplatesJsDefault.default)), userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        placeholder: placeholder,
        templates: templates,
        autofocus: autofocus,
        searchAsYouType: searchAsYouType,
        showReset: showReset,
        showSubmit: showSubmit,
        showLoadingIndicator: showLoadingIndicator
    });
    var makeWidget = (0, _connectSearchBoxJsDefault.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _objectSpread(_objectSpread({}, makeWidget({
        queryHook: queryHook
    })), {}, {
        $$widgetType: "ais.searchBox"
    });
};
exports.default = searchBox;

},{"@algolia/ui-components-shared":"dPT3X","preact":"26zcy","../../components/SearchBox/SearchBox.js":"acfnu","../../connectors/search-box/connectSearchBox.js":"kqCmi","../../lib/suit.js":"du81D","../../lib/utils/index.js":"etVYs","./defaultTemplates.js":"aAfNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqCmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../lib/utils/index.js");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var withUsage = (0, _indexJs.createDocumentationMessageGenerator)({
    name: "search-box",
    connector: true
});
/**
 * @typedef {Object} CustomSearchBoxWidgetParams
 * @property {function(string, function(string))} [queryHook = undefined] A function that will be called every time
 * a new value for the query is set. The first parameter is the query and the second is a
 * function to actually trigger the search. The function takes the query as the parameter.
 *
 * This queryHook can be used to debounce the number of searches done from the searchBox.
 */ var defaultQueryHook = function defaultQueryHook(query, hook) {
    return hook(query);
};
/**
 * **SearchBox** connector provides the logic to build a widget that will let the user search for a query.
 *
 * The connector provides to the rendering: `refine()` to set the query. The behaviour of this function
 * may be impacted by the `queryHook` widget parameter.
 */ var connectSearchBox = function connectSearchBox(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _indexJs.noop);
    (0, _indexJs.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref$queryHook = _ref.queryHook, queryHook = _ref$queryHook === void 0 ? defaultQueryHook : _ref$queryHook;
        var _refine;
        var _clear;
        return {
            $$type: "ais.searchBox",
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(initOptions)), {}, {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread(_objectSpread({}, this.getWidgetRenderState(renderOptions)), {}, {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref2) {
                var state = _ref2.state;
                unmountFn();
                return state.setQueryParameter("query", undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread(_objectSpread({}, renderState), {}, {
                    searchBox: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref3) {
                var helper = _ref3.helper, searchMetadata = _ref3.searchMetadata, state = _ref3.state;
                if (!_refine) {
                    _refine = function _refine(query) {
                        queryHook(query, function(q) {
                            return helper.setQuery(q).search();
                        });
                    };
                    _clear = function _clear() {
                        helper.setQuery("").search();
                    };
                }
                return {
                    query: state.query || "",
                    refine: _refine,
                    clear: _clear,
                    widgetParams: widgetParams,
                    isSearchStalled: searchMetadata.isSearchStalled
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref4) {
                var searchParameters = _ref4.searchParameters;
                var query = searchParameters.query || "";
                if (query === "" || uiState && uiState.query === query) return uiState;
                return _objectSpread(_objectSpread({}, uiState), {}, {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref5) {
                var uiState = _ref5.uiState;
                return searchParameters.setQueryParameter("query", uiState.query || "");
            }
        };
    };
};
exports.default = connectSearchBox;

},{"../../lib/utils/index.js":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7jLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const resultHit = (hit)=>`<a class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div class="result-hit__controls">
    <button id="view-item" class="result-hit__view">View</button>
    <button id="add-to-cart" class="result-hit__cart">Add To Cart</button>
  </div>
</a>`;
exports.default = resultHit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GGlC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createInsightsMiddlewareJs = require("./createInsightsMiddleware.js");
parcelHelpers.exportAll(_createInsightsMiddlewareJs, exports);
var _createRouterMiddlewareJs = require("./createRouterMiddleware.js");
parcelHelpers.exportAll(_createRouterMiddlewareJs, exports);
var _createMetadataMiddlewareJs = require("./createMetadataMiddleware.js");
parcelHelpers.exportAll(_createMetadataMiddlewareJs, exports);

},{"./createInsightsMiddleware.js":"bQz4Y","./createRouterMiddleware.js":false,"./createMetadataMiddleware.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iWvxK","bNKaB"], "bNKaB", "parcelRequire95ae")

//# sourceMappingURL=index.0641b553.js.map

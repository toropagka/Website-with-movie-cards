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
})({"3Unyy":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
             // $FlowFixMe
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

},{}],"bDbGG":[function(require,module,exports) {
var _constantsJs = require("./constants.js");
var _apiJs = require("./api.js");
const openPopUp = document.querySelector(".open-pop-up");
const closePopUp = document.querySelector(".close-pop-up");
const savePopUp = document.querySelector(".save-pop-up");
const popUp = document.querySelector(".pop-up");
const whatToWatch = document.querySelector(".what-to-watch");
const closeEditCard = document.querySelector(".close-pop-up_edit");
const editPopUp = document.querySelector(".edit-wrapper");
const movieRecordListElement = document.querySelector(".movies");
const overlayContainer = document.querySelector(".overlay-container");
const searchField = document.querySelector(".search-line__search");
let isAppInit = false;
function arrowUp() {
    let t;
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout("arrowUp()", 20);
    } else clearTimeout(t);
    return false;
}
let currentYear = new Date().getFullYear();
let midFooterInfo = document.querySelector("p.copy").innerHTML = `&copy; ${currentYear}  ООО “Фаворит”`;
class Dialog {
    constructor(actionClass, addClass, showClass){
        this.actionClass = actionClass;
        this.addClass = addClass;
        this.showClass = showClass;
    }
    openPopUp() {
        this.actionClass.addEventListener("click", (e)=>{
            e.preventDefault();
            this.showClass.classList.add(this.addClass);
        });
    }
    closePopUp() {
        this.actionClass.addEventListener("click", (e)=>{
            e.preventDefault();
            this.showClass.classList.remove(this.addClass);
            let form = document.forms;
            for(let i = 0; i < form.length; i++)form[i].reset();
        });
    }
}
const dialogOpen = new Dialog(openPopUp, "active", popUp);
dialogOpen.openPopUp();
const dialogClose = new Dialog(closePopUp, "active", popUp);
dialogClose.closePopUp();
function formDataToObject(formData) {
    const result = {};
    formData.forEach((value, key)=>{
        result[key] = value;
    });
    return result;
}
function reloadMovieRecord() {
    return (0, _apiJs.getAllMovieRecords)().then((response)=>response.json()).then((movieRecords)=>{
        movieRecordListElement.innerHTML = "";
        for (const movieRecord1 of movieRecords)movieRecordListElement.innerHTML += createMovieRecordItem(movieRecord1);
        // /**@type {Array<HTMLDiveElement>} */
        const moviePosterCards = Array.from(movieRecordListElement.querySelectorAll("div.card__film-preview_wrapper"));
        for (const card of moviePosterCards){
            const movieId = parseInt(card.dataset.id);
            card.addEventListener("click", ()=>{
                const movieRecord = movieRecords.find((item)=>item.id === movieId);
                if (typeof movieRecord === "undefined") throw new Error(`Movie record with id="${movieId}" not defined`);
                openMovieCard(overlayContainer, movieRecord);
            });
        }
        const likeButtons = Array.from(movieRecordListElement.querySelectorAll(".heart__svg"));
        for (let likeButton of likeButtons){
            const movieRecordId = parseInt(likeButton.dataset.id, 10);
            let movieRecord = movieRecords.find((item)=>item.id === movieRecordId);
            likeButton.addEventListener("click", ()=>{
                likeButton.classList.toggle("activity__heart-liked");
                (0, _apiJs.updateMovieRecord)(movieRecordId, {
                    ...movieRecord,
                    liked: !movieRecord.liked
                }).then((result)=>movieRecord = result).then(()=>reloadMovieRecord()).catch((error)=>{
                    likeButton.classList.toggle("activity__heart-liked");
                    console.error(error);
                });
            });
        }
        const sawButtons = Array.from(movieRecordListElement.querySelectorAll(".activity__saw"));
        for (let sawButton of sawButtons){
            const movieRecordId = parseInt(sawButton.dataset.id, 10);
            let movieRecord = movieRecords.find((item)=>item.id === movieRecordId);
            sawButton.addEventListener("click", ()=>{
                sawButton.classList.toggle("activity__saw-done");
                (0, _apiJs.updateMovieRecord)(movieRecordId, {
                    ...movieRecord,
                    viewed: !movieRecord.viewed
                }).then((result)=>movieRecord = result).then(()=>reloadMovieRecord()).catch((error)=>{
                    sawButton.classList.toggle("activity__saw-done");
                    console.error(error);
                });
            });
        }
        if (!isAppInit) {
            const url = new URL(location.href);
            const movieRecordIdAsString = url.searchParams.get("id");
            if (typeof movieRecordIdAsString === "string") {
                const movieRecordId = parseInt(movieRecordIdAsString, 10);
                if (!Number.isNaN(movieRecordId)) {
                    const movieRecord = movieRecords.find((item)=>item.id === movieRecordId);
                    if (typeof movieRecord !== "undefined") openMovieCard(overlayContainer, movieRecord);
                }
            }
        }
        isAppInit = true;
    });
}
function createMovieRecordItem(movieRecord) {
    return `<li>
  <article class="card">
    <div class="card__film-preview_wrapper" data-id="${movieRecord.id}">
    <img class="card__film-preview" src="${(0, _constantsJs.BASE_API_URL) + movieRecord.poster}" alt="${movieRecord.name}">
    </div>
    <p class="card__grey-text card__grey-text_year">${movieRecord.year}</p>
    <p class="card__films-name">${movieRecord.name}</p>
    <p class="card__grey-text">${movieRecord.genres}</p>
    <div class="card__activity activity">
      <button type="button" class="activity__heart">
        <svg data-id=" ${movieRecord.id} " class="heart__svg ${movieRecord.liked ? "activity__heart-liked" : ""} " width="18" height="15" viewBox="0 0 20 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="activity__saw ${movieRecord.viewed ? "activity__saw-done" : ""} " data-id="${movieRecord.id}">
        <p>Просмотрено</p>
        <svg class="svg-mark-saw" width="20" height="16" viewBox="0 0 20 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.125 9.125L6.625 13.625L17.875 2.375" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

  </article>
</li>`;
}
function openMovieCard(container, movieRecord) {
    let url = new URL(location.href);
    url.searchParams.set("id", movieRecord.id);
    history.pushState({}, "", url);
    let localMovieRecord = movieRecord;
    container.innerHTML = `<div class="movies-wrapper_hidden active" id="${localMovieRecord.id}">
  <div class="container_hidden">
    <article class="card_hidden">
    <button type="button" class="card__button_hidden">&times;</button>
      <div class="card__film-preview_hidden">
        <img class="img__film-preview_hidden" src="${(0, _constantsJs.BASE_API_URL) + localMovieRecord.poster}" alt="${localMovieRecord.name}">
      </div>
      <p class="card__grey-text_hidden card__grey-text_year">${localMovieRecord.year}</p>
      <p class="card__films-name_hidden">${localMovieRecord.name}</p>
      <p class="card__grey-text_hidden">${localMovieRecord.genres}</p>
      <p class="card__description_hidden">${localMovieRecord.description}</p>
      <div class="activity_hidden">
        <button class=" activity_pencil">
          <svg class="activity__pencil_hidden" width="30" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.232 5.23199L18.768 8.76799M16.732 3.73199C17.2009 3.26309 17.8369 2.99966 18.5 2.99966C19.1631 2.99966 19.7991 3.26309 20.268 3.73199C20.7369 4.2009 21.0003 4.83687 21.0003 5.49999C21.0003 6.16312 20.7369 6.79909 20.268 7.26799L6.5 21.036H3V17.464L16.732 3.73199Z"
              stroke="#34343E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button type="button" class="activity__heart">
        <svg data-id=" ${movieRecord.id} " class="heart__svg ${movieRecord.liked ? "activity__heart-liked" : ""} " width="18" height="15" viewBox="0 0 20 18" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="activity__saw ${movieRecord.viewed ? "activity__saw-done" : ""} activity__saw_hidden" data-id="${movieRecord.id}">
      <p>Просмотрено</p>
      <svg class="svg-mark-saw" width="20" height="16" viewBox="0 0 20 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.125 9.125L6.625 13.625L17.875 2.375" stroke-width="3"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
      </div>
  </div>
  </article>
  </div>`;
    container.querySelector(".card__button_hidden").addEventListener("click", ()=>{
        url.searchParams.delete("id");
        history.pushState({}, "", url);
        container.innerHTML = "";
    });
    container.querySelector(".activity_pencil").addEventListener("click", ()=>openEditMovieCard(container, localMovieRecord));
    const likeButton = container.querySelector(".heart__svg");
    const watchButton = container.querySelector(".activity__saw");
    likeButton.addEventListener("click", ()=>{
        likeButton.classList.toggle("activity__heart-liked");
        (0, _apiJs.updateMovieRecord)(localMovieRecord.id, {
            ...localMovieRecord,
            liked: !localMovieRecord.liked
        }).then((value)=>localMovieRecord = value).then(()=>reloadMovieRecord()).catch(()=>likeButton.classList.toggle("activity__heart-liked"));
    });
    watchButton.addEventListener("click", ()=>{
        watchButton.classList.toggle("activity__saw-done");
        (0, _apiJs.updateMovieRecord)(localMovieRecord.id, {
            ...localMovieRecord,
            viewed: !localMovieRecord.viewed
        }).then((value)=>localMovieRecord = value).then(()=>reloadMovieRecord()).catch(()=>watchButton.classList.toggle("activity__saw-done"));
    });
}
function openEditMovieCard(container, movieRecord) {
    container.innerHTML = `<div class="edit-wrapper">
    <div class="pop-up pop-up-edit active" id="pop-up-edit">
    <div class="pop-up__container pop-up-edit__container">
      <div class="pop-up__body pop-up-edit__body">
        <p class="pop-up__header pop-up-edit__header">Редактирование<br>закладки</p>
        <form action="" class="pop-up__form pop-up-edit__form" enctype="multipart/form-data" method="post"
          name="formEdit">
          <p class="form__sign">Название</p>
          <input name="name" type="text" placeholder="Type something here..." class="pop-up__input pop-up-edit__input">
          <p class="form__sign">Год выпуска</p>
          <input name="year" type="text" placeholder="Type something here..." class="pop-up__input pop-up-edit__input">
          <div class="form__poster_wrapper">
            <p class="form__sign">Постер</p>
            <input name="poster" type="file" placeholder="file not selected" accept="image/*"
            class="pop-up__input pop-up-edit__input pop-up-edit__input_poster">
          </div>
          <p class="form__sign">Жанры</p>
          <input name="genres" type="text" placeholder="Type something here..." class="pop-up__input">
          <p class="form__sign">Описание</p>
          <textarea name="description" placeholder="Type something here..." class="pop-up__input"></textarea>
          <p class="form__sign">Удалить закладку</p>
          <button type="button" class="pop-up__button-select pop-up-edit__button-select_delete">Удалить</button>
          <div class="pop-up__buttons">
            <button type="button" class="pop-up__button-select close-pop-up close-pop-up_edit">Отменить</button>
            <button type="submit" class="pop-up__button-select save-pop-up">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <div>`;
    let url = new URL(location.href);
    url.searchParams.set("id", movieRecord.id);
    history.pushState({}, "", url);
    /** @type {HTMLFormElement} */ const form = container.querySelector("form.pop-up-edit__form");
    form.elements.namedItem("name").value = movieRecord.name;
    form.elements.namedItem("year").value = movieRecord.year;
    form.elements.namedItem("genres").value = movieRecord.genres;
    form.elements.namedItem("description").value = movieRecord.description;
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const formData = new FormData(form);
        const formValue = formDataToObject(formData);
        console.log(formValue);
        if (formValue.poster.size > 0) (0, _apiJs.uploadPoster)(formValue.poster).then((posterUrl)=>{
            return (0, _apiJs.updateMovieRecord)(movieRecord.id, {
                ...movieRecord,
                ...formValue,
                poster: posterUrl
            });
        }).then(()=>{
            container.innerHTML = "";
        }).then(()=>{
            reloadMovieRecord(container);
        }).catch((error)=>{
            container.innerHTML = "";
            console.error(error);
        });
        else (0, _apiJs.updateMovieRecord)(movieRecord.id, {
            ...movieRecord,
            ...formValue,
            poster: movieRecord.poster
        }).then(()=>{
            container.innerHTML = "";
        }).then(()=>{
            reloadMovieRecord(container);
        }).catch((error)=>{
            container.innerHTML = "";
            console.error(error);
        });
    });
    form.querySelector(".close-pop-up_edit").addEventListener("click", ()=>{
        url.searchParams.delete("id");
        history.pushState({}, "", url);
        container.innerHTML = "";
    });
    form.querySelector(".pop-up-edit__button-select_delete").addEventListener("click", ()=>{
        (0, _apiJs.deleteMovieRecord)(movieRecord.id).then(()=>{
            container.innerHTML = "";
        }).then(()=>{
            reloadMovieRecord(container);
        }).catch((error)=>{
            container.innerHTML = "";
            console.error(error);
        });
    });
}
function findMovieCardByName(e) {
    let localMovieRecord = e;
    let searchInput = document.getElementById("searchInput").value.toLowerCase().trim(); //поисковый запрос в нижнем регистре
    let result = localMovieRecord.filter((item)=>item.name.toLowerCase().includes(`${searchInput}`));
    return result;
}
function openFinishMessage() {
    overlayContainer.innerHTML = `<div class="pop-up pop-up_finish active">
  <div class="pop-up__container">
    <div class="pop-up__body pop-up__body_finish">
    <span class="pop-up_finish">Вы посмотрели все фильмы. Отличная работа!</span>
    <img src="./images/good.png" alt="good job" class="pop-up_good">
    <button type="button" class="card__button_hidden">&times;</button>
    </div>
  </div>
</div>`;
    overlayContainer.querySelector(".card__button_hidden").addEventListener("click", ()=>{
        overlayContainer.innerHTML = "";
    });
    return overlayContainer;
}
function showRandomMovie(e) {
    let localMovieRecord = e;
    let viewedMovieCard = localMovieRecord.filter((item)=>item.viewed === false);
    if (viewedMovieCard.length > 0) {
        let randomCard = Math.floor(Math.random() * viewedMovieCard.length);
        let randomCardValue = viewedMovieCard[randomCard].id;
        localMovieRecord = localMovieRecord.find((item)=>item.id === randomCardValue);
        return openMovieCard(overlayContainer, localMovieRecord);
    } else openFinishMessage();
}
searchField.addEventListener("input", function() {
    (0, _apiJs.getAllMovieRecords)().then((response)=>response.json()).then((e)=>findMovieCardByName(e)).then((result)=>{
        movieRecordListElement.innerHTML = "";
        for (const item1 of result)movieRecordListElement.innerHTML += createMovieRecordItem(item1);
        /**@type {Array<HTMLDiveElement>} */ const moviePosterCards = Array.from(movieRecordListElement.querySelectorAll("div.card__film-preview_wrapper"));
        for (const card of moviePosterCards){
            const movieId = parseInt(card.dataset.id);
            card.addEventListener("click", ()=>{
                const movieRecord = result.find((item)=>item.id === movieId);
                if (typeof movieRecord === "undefined") throw new Error(`Movie record with id="${movieId}" not defined`);
                openMovieCard(overlayContainer, movieRecord);
            });
        }
    });
});
whatToWatch.addEventListener("click", ()=>{
    (0, _apiJs.getAllMovieRecords)().then((response)=>response.json()).then((e)=>showRandomMovie(e));
});
savePopUp.addEventListener("click", ()=>{
    const form = document.forms.namedItem("formCreate");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const formData = new FormData(form);
        const formResult = {
            ...formDataToObject(formData),
            favorite: false,
            viewed: false
        };
        (0, _apiJs.uploadPoster)(formResult.poster).then((posterUrl)=>{
            return (0, _apiJs.createMovieRecord)({
                ...formResult,
                poster: posterUrl
            });
        });
        event.target.reset();
    }, {
        once: true
    });
    popUp.classList.remove("active");
}, {
    once: true
});
reloadMovieRecord();

},{"./constants.js":"1j8D1","./api.js":"6yDOL"}],"1j8D1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_API_URL", ()=>BASE_API_URL);
const BASE_API_URL = "http://localhost:3000";

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

},{}],"6yDOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMovieRecord", ()=>createMovieRecord);
parcelHelpers.export(exports, "updateMovieRecord", ()=>updateMovieRecord);
parcelHelpers.export(exports, "getAllMovieRecords", ()=>getAllMovieRecords);
parcelHelpers.export(exports, "uploadPoster", ()=>uploadPoster);
parcelHelpers.export(exports, "deleteMovieRecord", ()=>deleteMovieRecord);
var _constants = require("./constants");
async function createMovieRecord(movieRecord) {
    const response = await fetch(`${(0, _constants.BASE_API_URL)}/movie-records`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movieRecord)
    });
    return response.json();
}
async function updateMovieRecord(id, movieRecord) {
    const response = await fetch(`${(0, _constants.BASE_API_URL)}/movie-records/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movieRecord)
    });
    return response.json();
}
function getAllMovieRecords() {
    return fetch(`${(0, _constants.BASE_API_URL)}/movie-records`);
}
function uploadPoster(file) {
    const formData = new FormData();
    formData.append("poster", file);
    return fetch(`${(0, _constants.BASE_API_URL)}/poster`, {
        method: "POST",
        body: formData
    }).then((response)=>response.json()).then((posterCreate)=>posterCreate.path);
}
function deleteMovieRecord(id) {
    return fetch(`${(0, _constants.BASE_API_URL)}/movie-records/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=>response.json());
}

},{"./constants":"1j8D1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3Unyy","bDbGG"], "bDbGG", "parcelRequire94c2")

//# sourceMappingURL=index.fbb3188c.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/countries.json":[function(require,module,exports) {
module.exports = [{
  "name": "??????????????????",
  "capital": "????????????????",
  "language": "????????????????????",
  "infected": false,
  "flag": "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
}, {
  "name": "??????????????????",
  "capital": "??????????-????????????",
  "language": "????????????????????",
  "infected": true,
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAB9CAMAAADQgdxqAAAAw1BMVEV0rN////9vqt6lx+n2tA76uA78+/vaw7fUuKjWuKTq2s728/LGiEbJoobNpIHLoHrOn3KzZgDKpZLWtZ3El3fElG3SmlutZQzalQnsqg707erfzMPOp5Djya/auJm4hGPo3tvXqH3Zs4rbtZLs5+rPkEXTjTHOggDJmGjamDC3fE3q1MDFjFHFhjy9eSPEfRXUjiW1dUGzcDK4bwCqYx7BjV/cqGvfpF3Ylz+7ejbclCHixKTJgyvSomy6fUHDdQCbTg7233zvAAADmklEQVR4nO3a23KqSBQG4KwZ6Ra6PcWIpBEFoZUISk5GNCL7/Z9qGqZm9u2+mFWzsdZXZcWKF8u/+kAffHgghBBCCCGEEEIIIYQQQgghhBBCyC/74048/HknHuBOUJDfDXoQroBzYL5AroMbpM/YTIFtA18A66OWQgzCAJ4ciDhMlzAOwHnCKwWoQVYKnBlkr7BcgvsNMwf8FUOrhhXEfGOeMiFVUoYmSBkIKdRZtR+gwArCB8AiCXEEpb9eJy9hFMNiDTDgSAXRutZwBELHySbR2TpeuuZNsnVgNMSqhxMkNH1oPAb/omSQf0dpZQdSvUTN/0DgTMRIQXaZgMplMnb2aXWUml/5dczcyvS3G840jNS1nFwHzHX9mu9X18OhGOzHWrguiChHGu0YQYRvepb/GokqT4u3ydyYvBfTPFXx1gVQKE95lCCPx6EDalOF+Xn+4fUsq+d9zOVtUX9l4AyOj10JYqL0pbbD/Jp/Fj2rZ1i94vN8DYStZb87g91nZmbyv+rRcVJYTXs0L6uYDIZNk4DKHISiGEGebro82UKNivmzZT3/85oXqc25HekUo2+hdC2mQvtU1O7tw+pdLp5x2ZomOR82p9MpUhglkYIwJhI+2M0vZpj/KDxv+8MMee9zzMMkMR9i1EQIwne7PNellvu5Z8aH92x4Zpx4873UZZnnux3CgguvRUI+a4NYz5733Pz1JrsBT0R3WsRQ0emkN8V70cy9TZBmBi7Obl2c7FB1JYh4THVk5qf+zMxaTZDttv0zL0YqsU+lvGHsFTFaxMnMxJR91cPBpG6a5HJpGqSeHEf1l29Wv8xHKIr2ZHdtEVzPP5/s20/zoA+79WQXj7PYgcytF1L+XGud87DamG38cNWZtVa7+nW3yyTN7eL979XvW5HmlYhe/S6tfg2WR8LsR4Qe7wfF4XA97nntuy4LdI6x0AKsIP23EWt2iGOzMeRaHqvj3olls0MU2S5EKYk02EW7Z49ezJ7drtLhtwykuITtnl11KQi0pyjONkw2iTuN11ybN7EWnTtFac+1YL2AOEpekvWalxDFICPWvXMtswxRNyWkCkpYLsNSKCnYkXfvpNF845XfnP1+p83Z7yZrzn7DFVo15GuFJweCFKZT4FF7Go93ho1+PwIL3tyPqBnr7v1IS/isubFSWGP8X3SH+Lu5nyD/9y8W/iv381sUQgghhBBCCCGEEEIIIYQQQgghhPyyvwBG1nt5iYy5LgAAAABJRU5ErkJggg=="
}, {
  "name": "??????????????",
  "capital": "??????????????????",
  "language": "????????????????????",
  "infected": true,
  "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png"
}, {
  "name": "??????????????",
  "capital": "????????",
  "language": "????????????????????",
  "infected": false,
  "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png"
}, {
  "name": "???????????? ????????????????",
  "capital": "????????????",
  "language": "????????????????????(????????????????????)",
  "infected": true,
  "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACzCAMAAABhCSMaAAABFFBMVEX////QCBoAAGf19fXLy8v6+vrOAADg4ODu7u7n5+fX19exsbG9vb2goKAAAGCSkpLPAA7WOUOFhYTXQUtqanXutbjrqKwfH3YtLX2qqrK/v9T/+frJydtubnaqqrPDq6vUAA6Ja2wAAFvUJDLWMT7S0tIAAFesrMnzycz21dj76evw8PeWlpbTAACdnZ2pqand3euKirHolpvlhYt+fqrfa3Lid37S0uOgoMH54OLdXWXRFCHo6PL87vDxv8NGRobusLWjo8LcWGC0tM9ycqJAQIMREWlYWJF2dqNiYpaFha3qnaLljZJlZZYtLXXm2NnTv8A2Nn4VFXYmJngWFmokJHTZTVWVf4C/pKWpj5CJamuOeXvUEplhAAAPGUlEQVR4nO2dCVfbOhOGk0DclsUEuFBKaJs6C5CwJOyQhB1S1lJa6G37///HJzmxZFuj8RrD/aL3nLucA9jyY400I8kzqZSSkpKS0itSduCFYhkaWEno2Ki8HUzZ8IhoGJZ3AygLj5sNB0N/680gqoenB8eBxiTTxTIyiOriMeHY0ZhkaJehWMrl8vCgiTxz2cRD4TjYdNG8+2aikbH59OHDpw/mvxz/4/oP8qPef8bYFcc+o3rgv/jJcVnhmv4aQ/5hKB6g+xE6XTYONLTTfCseYj7PwveKHoOMeXbFGW0VkTbLb23EcefK/YJ1weVp9601bXq5PFw22dBuw9CY48w3TduuYnAW7/VMZOl2NGlEdjRx3PfpxLpcdUfLuW9WPE6lhsdMNm9tbLrm9O5BI79xi7GpN4zIjXwZNLpxXbeuNlt03zen3e6TH4yN9dg40NAh+EEz8aFWtduJCudF0Bgdbksld5fJaQfL5o9GRwmbbrexoyEjsIkmncvt7CNshk7ujf8aGv1pr9a7UnWnKdhSaTbf/eHo+qjVbZxoRh56LdW0jTwCp3atR2lp4mh0fcsCk79pum+pabfsYdfH13vdhlhUD82QAw35/Wd8rjqKACdpNPqRdcP88qloS6dL/LnGV2i36VmUhYYONWWOhvzJ9jIG5+yn8d9AYzwuWhepbmtClykd259qbWK8a1FONG9Gyg+r9r/KzbYRNrWvmZDNTRKNnjlntiTOS1p6xzlwrEysrbPBxoHm86rzL3Gr2j2qvHY0lSM2Lx0eALbkNoyVqTXLomxo3lE0mvuPD3CrCjVXJYbGeGK2tL8t+niTx8IDTUytjINohj8XhC7XnMXmqtbXEMNxQmh0/dzy8fKzJdGWtoHhQo5muArATaNWVb8yXicao7Nr/fHhJGBLYEA0MTUhQ0MaK/rQuW3MA8ye/AzY7CTQ6D/3hnp/Wt3MAfESbAsomlT7Rpzh0rfYXNUKGFf1H41uNFq9P8zfpIXHKWzIHgdHAw9ZpSXJxUwFi6v6jUa32dLSpBhIPsuNwAsNabF4QQ+rWvxhvBY0xvsTFi9tFoSX3JxB5hU5mjHrmikg1ChsYlaVbfj2APuKRtevrUWo/AYwNODB4ZQUzYd71uplwUMiHiBqVQtHFX/t7yMavXLB1x5ORVuaRp9g/uKjHI1RuWDrPYfPwKVxD/DIeFk0xgX38Q60gvtykyiYOnm1CBo9o182rN9tb4qDe3ED3hPuqnbuxwPsFxpdv2MDAhAv5TbRtd0G9UFQNAT9PUO/DCyhTs7KLk61e+c9V/UHjW5cMVuamRZ9vB20yyx+N+hFPNAQ+h1uVdOiVR1gc1XqrHuTpNHYXmh1W/TxSjNYm+tXvd7uhYaG8g2ra0JW1USH+ZbXakUf0OiZc+7jibZUQG2p1ri0ru6NhryEn2xjIg+8hCLmHKRaHXTIiR+N3rHApA6FQDKnoS5ZavHJYBfyg4bAOedWJTg5xHRRJ2cxYwjt7xsaQz+x4qX2pjg4FtDBsfXVPjj6Q0N8hC32LoABX8M9wD150BkvGjKlWpNmG/DxmhsomGvnrOETDXkd39lD7AvrzWSuwlcrLowk0BgXLF5aBhwxJF5KUR/P1UbfaDKZyhV7DGiu8lhZl6wBxojGmDtjYABHYxqdlxZERyMAGjKRs/C+DcRV6Vs0JIHjqtjQkImUN06YSHMe8VIDmCuCoKELrNyqgLgKt6oFaLUiJjS6wdfEl4AuLayJOzQPdulgaEgbbCFbYHNeuBB7YixovAZCfIFJssUYFA3tuNgkkMYngUbF9X7iQBNx+ryUjOqB0ZBXlFm0XId9wHVo4nGVa9shBjTGuTUv5Q+LQLyEL7s9ut5VJDTOuCqww+ncBY6Mxrhk8VIbdNWxtqCuehg0jrkqtQF04Q2PMIXDiYhG169ZgAesiTfRSbOFL0aGQ0PaZAtud4Dg9hh7WSy4jYrGY1nAo/t6HLgLi4Yu1dutSjBx3ANkYVwUNLawF9pOLKGDXt1z4yM0GrrzdceCf+jgARr8W3FVeDQkXrJmg/ymePsi7uOde+8lRkDjWDIC96vwuKpDV9bDotErR3yvFnCwcB/Pe4ktKhoCx3YwA1i0P0V9rbMjPSwa/YgvzAIv5RSPl/xtIkZEQ4/Gsa0eYBc45xG6GEYYNEaFzUupDeA83iZ20+y1z02yqGioY3HGD1SKc1X6EGtnvRMGTYf7eMDW6gHqOZz53lqNjoZ6gKyp0LYyava1Ifa/vtEMWa8C3pDHXsUuvhwbNxrz8DbfBRatSpMeRnDINxrrPUAG7LEwEuSkQixoqAfIjinvA0dYSpIjLFHQBD6mMHTyPdDpk5jQOA9rAJti+GpFcDSij5fTmvhebdCPBuJCY85VfPsHOC6Hb6UGQ9PegLaZ0SNRwQ/Fx4fGccgS+pAGj6uCoIHCfY9tVNv+UgxoQnyQVbnYtbwc4qLmXNKeURfVN5olzX1pfOk1S889BBeCJvM+uC4fmQfYni261Sxizph/NE33hWfxcw+PjyEe5VGOZhi7G/KK0J9iE1XQyTumJknlfZYvMfUNTUgpNFIpNFIpNFIpNFIpNFIpNFIpNFIpNFLJ0XwuTSerEkYmnS4m3JzJv3I0QnjYZ+Fk6EpVolr9Ikez6tXW/28VFBqZFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpFBqpMDRqz1uKpjiZrIo4maSbU5KjGc4nK+/zNQm3Rx09kkqhkUqhkUqhkUqhkUqhkUqhkUqhkUqhkUqO5sPjXHD9eM++vYTUnim5VOTfZodHk7+dLLovPMlLEzXe/wjzKDF/sTu3i5FZnhY+tdX4p7ZReg25snBpliEmuxuqEGWc33nrl3tY82VFFONAk0odA99+86/uAxdMwb/zDpwd4GtL1u4UmDC6oN3aP0KOONa0N9PiV/c31ifCra2Xyw5gK0wFCSmiGBOaVGr/WbwHL5aw2/FZ2iFmNPocy0QCNnpHfKOT7mJT0WeoPGBVuU0ro0JtL1h513jy19iScEItBosoCskx4pi827dAThv2l7XrIB0nDjR6B7OlPJRhltlSNkzWo6GUXMvPYvqcyWWrgy4kmvXIyCxittTezon5VFgO/dZVqFxZ9ZRc+UPhhrkCS0xfQ/KhxoyGzEsYmPyNCCbHcm7U9oxKqAxrRgO9KWBVGhvZan7nqvjy8kGCcvXxeemsEyEv31kK0RKQQvuUOZcL/irtRMvm+IT6eHgRxfqVESWbo4FaFVBGr2ArT+6raHKUHKCXV+i8BBRRbLIiikN7T1FzgD7tYcNxFSiiwooup1p3/cwBavAknJAOgVxiPGkTqx0QKXPsE2pVYgZMe3akXU+rCp1v+GkPCySrQGZvniurdR5PvmFdv0KtSuy3udyOzar6kW9YN7bQNkGZq1m8lG3YUnhHzFJtXKJzVRVITF9kiek9sq6FQqMfoWDAIorsZc07kp1Fz22OWxVU7oEn+61jpchDZcQ/Qd8UlCWfZXOsx54RX9fPsUEPyBJtj6vizIhvS7QOtgQtokh8PFdL4qijYFQa2FSZuhXnKu2GucfS3O+Bq2/wOheQoHiJVzpcOOpT9Q1bTRCwVcJsmbblCARqgoRAY1zihg34eEXbgkk/a7Z0cFcCGP54LtV5R2mHMGhsWT4h5WfFtYccW3uowQVAYqz0g64YgWX0uAcIzVVB6kN1UFuCkq9vsy4jFKaKGw2taRPQA0zb1gAXriqh0ej36I2raE2k+pEsoW28VcVwpwKyKl7lXMiS77cWna1QHySwwI5111ovXuo7GlrU3MOvED1AZlX1rTC16Iw7fJCDqhryQS4j9NV+oSFWnzlD9wihDM68c98ZAdHol2i81Aby4Bf5euxVsnUvdb2D+l3HgAe4bXWc7J5trvJRLVVHHar2hriOl2YJo2tbWNHLfqChc5XHwqM4V6X5wiP3AL1r7OJrD1DhN772IJuX+oqGFnkMHFc929wvfzV2jbkTdBMbiJf4Ot7u+ctVZsYHx2PghfLB8cRHZWZb1RFIYLEqFvL7W57uWz1v3Kqyt0BpIlaDIXtN3VO0Cvw9ih6Pl+ZfvAo8vrIOxVW8+g49W4Gg8VheFDaY02E2mPuHhtZJQoPOJWzrMDX//R8pmrGg8RIvoigvmJgkGkchSkhtwAPk9RdrU6EOrB2KzoFtGFv0s5WRBBpiVT/QaQTdDgpzlq96UBB9PO5SXgUpANJnNGSuwlfWl+QvOTgauPIwX3sIdsSn32i8XdZbYGgw1wCDosmDNUDZZsGZPJB8KTQ06FzErQoIdA4DoxHDM3tB0rpYFPs1oKHhMb5aIZ6t0HbagdC0d4ACOzeBjyAkj8bzoCEw4aaRr+iEC0COwKnNETACtzgxNLQQJe6mCbWukW8v3WjAIorH1k93O2HAJIiGwEEPjwkLuMgXu040eWAgb7J5KRu8MFXyaIgHuIWdrWg7j0n5RTODrj2czRnhGpssGtJx3qNrgA7D8IcGchqnWRHFIAUTXxgNXX7CrYp3AYJmxRMNdB6P2xJeFPuVoTE9QH/nAAt/QTRvOZr8sbhFkWYbf9kg8dKrQOO5PLffW+ou/J1YWwfRlLtooG8ueBHFED7ey6OhcRW+QVKkz2yiGRsru9G8e1MuUzBAQVJeKLvViDDIvCAaCqeBusd0DbDwy7QnguatDc1QDw1eRPEsoi29IBpPD7C6ra3+Mu2pTDqNC83IyPKBtrq6WnCoFP5DEVh2NK57ObUaLxpHrXRIh6Xf42yoYWi6U1T54d9/f//+/evX3y9Mf/6urfT08Z94NGVdcOXXny+I/vxivzgV060/rsi0tja+/rvbabpDjQ1Nd/oeG10fX1uZmJgaOE1MrNA+Y9qTE0232wyPETYEDukpE4Mk2m3G17tkevZkR2OxGRuldAZNhMsoI2ND0+s2JhsKh9AZONHHHjbJ2DsNRWOONnSWInC6eAZN5LHLXTICmi4bAmekbOIZMJUJl5E3jAwPLHpsTDiUziDqDQUjkKFoCJsuHEpnEPWuB4aSsUejWQ7HxDN4Mp98SCTD2fToDKKGLDDCCkY2y/EMpnoEwAgrq8RY/A8rihUIN6pliAAAAABJRU5ErkJggg=="
}];
},{}],"../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};

      /******/ // The require function
      /******/
      function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/exports: {},
          /******/id: moduleId,
          /******/loaded: false
          /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }

      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __webpack_require__.m = modules;

      /******/ // expose the module cache
      /******/
      __webpack_require__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/
      __webpack_require__.p = "";

      /******/ // Load entry module and return exports
      /******/
      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__(1)['default'];
      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _handlebarsBase = __webpack_require__(3);
      var base = _interopRequireWildcard(_handlebarsBase);

      // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)

      var _handlebarsSafeString = __webpack_require__(36);
      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
      var _handlebarsException = __webpack_require__(5);
      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
      var _handlebarsUtils = __webpack_require__(4);
      var Utils = _interopRequireWildcard(_handlebarsUtils);
      var _handlebarsRuntime = __webpack_require__(37);
      var runtime = _interopRequireWildcard(_handlebarsRuntime);
      var _handlebarsNoConflict = __webpack_require__(43);
      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

      // For compatibility and usage outside of module systems, make the Handlebars object a namespace
      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;
        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };
        return hb;
      }
      var inst = create();
      inst.create = create;
      _handlebarsNoConflict2['default'](inst);
      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];

      /***/
    }, /* 1 */
    /***/function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      };
      exports.__esModule = true;

      /***/
    }, /* 2 */
    /***/function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };
      exports.__esModule = true;

      /***/
    }, /* 3 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      var _helpers = __webpack_require__(9);
      var _decorators = __webpack_require__(29);
      var _logger = __webpack_require__(31);
      var _logger2 = _interopRequireDefault(_logger);
      var _internalProtoAccess = __webpack_require__(32);
      var VERSION = '4.7.7';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';
      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};
        _helpers.registerDefaultHelpers(this);
        _decorators.registerDefaultDecorators(this);
      }
      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }
            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }
            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },
        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];

      /***/
    }, /* 4 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
        possible = /[&<>"'`=]/;
      function escapeChar(chr) {
        return escape[chr];
      }
      function extend(obj /* , ...source */) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }
        return obj;
      }
      var toString = Object.prototype.toString;
      exports.toString = toString;
      // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
      /* eslint-disable func-style */
      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      };
      // fallback for older versions of Chrome and Safari
      /* istanbul ignore next */
      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }
      exports.isFunction = isFunction;

      /* eslint-enable func-style */

      /* istanbul ignore next */
      var isArray = Array.isArray || function (value) {
        return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
      };
      exports.isArray = isArray;
      // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      }
      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          }

          // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.
          string = '' + string;
        }
        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      }
      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }
      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }
      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }
      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }

      /***/
    }, /* 5 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$defineProperty = __webpack_require__(6)['default'];
      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];
      function Exception(message, node) {
        var loc = node && node.loc,
          line = undefined,
          endLineNumber = undefined,
          column = undefined,
          endColumn = undefined;
        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += ' - ' + line + ':' + column;
        }
        var tmp = Error.prototype.constructor.call(this, message);

        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }

        /* istanbul ignore else */
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }
        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;

            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */
            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, 'endColumn', {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }
      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];

      /***/
    }, /* 6 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(7),
        __esModule: true
      };

      /***/
    }, /* 7 */
    /***/function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);
      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };

      /***/
    }, /* 8 */
    /***/function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };

      /***/
    }, /* 9 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;
      var _helpersBlockHelperMissing = __webpack_require__(10);
      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
      var _helpersEach = __webpack_require__(11);
      var _helpersEach2 = _interopRequireDefault(_helpersEach);
      var _helpersHelperMissing = __webpack_require__(24);
      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
      var _helpersIf = __webpack_require__(25);
      var _helpersIf2 = _interopRequireDefault(_helpersIf);
      var _helpersLog = __webpack_require__(26);
      var _helpersLog2 = _interopRequireDefault(_helpersLog);
      var _helpersLookup = __webpack_require__(27);
      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
      var _helpersWith = __webpack_require__(28);
      var _helpersWith2 = _interopRequireDefault(_helpersWith);
      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);
        _helpersEach2['default'](instance);
        _helpersHelperMissing2['default'](instance);
        _helpersIf2['default'](instance);
        _helpersLog2['default'](instance);
        _helpersLookup2['default'](instance);
        _helpersWith2['default'](instance);
      }
      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];
          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }

      /***/
    }, /* 10 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
            fn = options.fn;
          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }
              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }
            return fn(context, options);
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 11 */
    /***/function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        'use strict';

        var _Object$keys = __webpack_require__(12)['default'];
        var _interopRequireDefault = __webpack_require__(2)['default'];
        exports.__esModule = true;
        var _utils = __webpack_require__(4);
        var _exception = __webpack_require__(5);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function (instance) {
          instance.registerHelper('each', function (context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }
            var fn = options.fn,
              inverse = options.inverse,
              i = 0,
              ret = '',
              data = undefined,
              contextPath = undefined;
            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            if (options.data) {
              data = _utils.createFrame(options.data);
            }
            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }
              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }
            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }
                context = newContext;
                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;
                  _Object$keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }
                    priorKey = key;
                    i++;
                  });
                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }
            if (i === 0) {
              ret = inverse(this);
            }
            return ret;
          });
        };
        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());

      /***/
    }, /* 12 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(13),
        __esModule: true
      };

      /***/
    }, /* 13 */
    /***/function (module, exports, __webpack_require__) {
      __webpack_require__(14);
      module.exports = __webpack_require__(20).Object.keys;

      /***/
    }, /* 14 */
    /***/function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__(15);
      __webpack_require__(17)('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });

      /***/
    }, /* 15 */
    /***/function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(16);
      module.exports = function (it) {
        return Object(defined(it));
      };

      /***/
    }, /* 16 */
    /***/function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    }, /* 17 */
    /***/function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(18),
        core = __webpack_require__(20),
        fails = __webpack_require__(23);
      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
          exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };

      /***/
    }, /* 18 */
    /***/function (module, exports, __webpack_require__) {
      var global = __webpack_require__(19),
        core = __webpack_require__(20),
        ctx = __webpack_require__(21),
        PROTOTYPE = 'prototype';
      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F,
          IS_GLOBAL = type & $export.G,
          IS_STATIC = type & $export.S,
          IS_PROTO = type & $export.P,
          IS_BIND = type & $export.B,
          IS_WRAP = type & $export.W,
          exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
          target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
          key,
          own,
          out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
          // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global)
          // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (param) {
              return this instanceof C ? new C(param) : C(param);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
            // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      };
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      module.exports = $export;

      /***/
    }, /* 19 */
    /***/function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    }, /* 20 */
    /***/function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    }, /* 21 */
    /***/function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(22);
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function /* ...args */
        () {
          return fn.apply(that, arguments);
        };
      };

      /***/
    }, /* 22 */
    /***/function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };

      /***/
    }, /* 23 */
    /***/function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    }, /* 24 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function () /* [args, ]options */{
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 25 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#if requires exactly one argument');
          }
          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          }

          // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#unless requires exactly one argument');
          }
          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 26 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports['default'] = function (instance) {
        instance.registerHelper('log', function () /* message, options */{
          var args = [undefined],
            options = arguments[arguments.length - 1];
          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }
          var level = 1;
          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }
          args[0] = level;
          instance.log.apply(instance, args);
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 27 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field, options) {
          if (!obj) {
            // Note for 5.0: Change to "obj == null" in 5.0
            return obj;
          }
          return options.lookupProperty(obj, field);
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 28 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#with requires exactly one argument');
          }
          if (_utils.isFunction(context)) {
            context = context.call(this);
          }
          var fn = options.fn;
          if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 29 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;
      var _decoratorsInline = __webpack_require__(30);
      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }

      /***/
    }, /* 30 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;
          if (!props.partials) {
            props.partials = {};
            ret = function (context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }
          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };
      module.exports = exports['default'];

      /***/
    }, /* 31 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      var _utils = __webpack_require__(4);
      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }
          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);
          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) {
              method = 'log';
            }
            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }
            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };

      exports['default'] = logger;
      module.exports = exports['default'];

      /***/
    }, /* 32 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];
      var _Object$keys = __webpack_require__(12)['default'];
      var _interopRequireWildcard = __webpack_require__(1)['default'];
      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;
      var _createNewLookupObject = __webpack_require__(35);
      var _logger = __webpack_require__(31);
      var logger = _interopRequireWildcard(_logger);
      var loggedProperties = _Object$create(null);
      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = _Object$create(null);
        defaultMethodWhiteList['constructor'] = false;
        defaultMethodWhiteList['__defineGetter__'] = false;
        defaultMethodWhiteList['__defineSetter__'] = false;
        defaultMethodWhiteList['__lookupGetter__'] = false;
        var defaultPropertyWhiteList = _Object$create(null);
        // eslint-disable-next-line no-proto
        defaultPropertyWhiteList['__proto__'] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }
      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === 'function') {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }
      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }
        if (protoAccessControlForType.defaultValue !== undefined) {
          return protoAccessControlForType.defaultValue;
        }
        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }
      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }
      function resetLoggedProperties() {
        _Object$keys(loggedProperties).forEach(function (propertyName) {
          delete loggedProperties[propertyName];
        });
      }

      /***/
    }, /* 33 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(34),
        __esModule: true
      };

      /***/
    }, /* 34 */
    /***/function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);
      module.exports = function create(P, D) {
        return $.create(P, D);
      };

      /***/
    }, /* 35 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];
      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;
      var _utils = __webpack_require__(4);

      /**
       * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
       * The resulting object can be used with "object[property]" to check if a property exists
       * @param {...object} sources a varargs parameter of source objects that will be merged
       * @returns {object}
       */

      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }
        return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
      }

      /***/
    }, /* 36 */
    /***/function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;
      function SafeString(string) {
        this.string = string;
      }
      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };
      exports['default'] = SafeString;
      module.exports = exports['default'];

      /***/
    }, /* 37 */
    /***/function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$seal = __webpack_require__(38)['default'];
      var _Object$keys = __webpack_require__(12)['default'];
      var _interopRequireWildcard = __webpack_require__(1)['default'];
      var _interopRequireDefault = __webpack_require__(2)['default'];
      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;
      var _utils = __webpack_require__(4);
      var Utils = _interopRequireWildcard(_utils);
      var _exception = __webpack_require__(5);
      var _exception2 = _interopRequireDefault(_exception);
      var _base = __webpack_require__(3);
      var _helpers = __webpack_require__(9);
      var _internalWrapHelper = __webpack_require__(42);
      var _internalProtoAccess = __webpack_require__(32);
      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
          currentRevision = _base.COMPILER_REVISION;
        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }
        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
            compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }
      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }
        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
        }
        templateSpec.main.decorator = templateSpec.main_d;

        // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as pseudo-supported APIs.
        env.VM.checkRevision(templateSpec.compiler);

        // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) {
              options.ids[0] = true;
            }
          }
          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }
                lines[i] = options.indent + lines[i];
              }
              result = lines.join('\n');
            }
            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        }

        // Just add water
        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
              });
            }
            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) {
              return result;
            }
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }
            return undefined;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);
              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
              fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }
            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }
            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };
        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;
          ret._setup(options);
          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }
          var depths = undefined,
            blockParams = templateSpec.useBlockParams ? [] : undefined;
          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }
          function main(context /*, options*/) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }
          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }
        ret.isTop = true;
        ret._setup = function (options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) {
              // Use mergeIfNeeded here to prevent compiling global partials multiple times
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }
            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };
        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }
          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }
          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };
        return ret;
      }
      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;
          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }
          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }
        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }

      /**
       * This is currently part of the official API, therefore implementation details should not be changed.
       */

      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }
      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;
        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }
        var partialBlock = undefined;
        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data);
            // Wrapper function to get access to currentPartialBlock from the closure
            var fn = options.fn;
            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

              // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.
              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };
            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }
        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }
        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }
      function noop() {
        return '';
      }
      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }
        return data;
      }
      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }
        return prog;
      }
      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        _Object$keys(mergedHelpers).forEach(function (helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }
      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function (options) {
          return Utils.extend({
            lookupProperty: lookupProperty
          }, options);
        });
      }

      /***/
    }, /* 38 */
    /***/function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(39),
        __esModule: true
      };

      /***/
    }, /* 39 */
    /***/function (module, exports, __webpack_require__) {
      __webpack_require__(40);
      module.exports = __webpack_require__(20).Object.seal;

      /***/
    }, /* 40 */
    /***/function (module, exports, __webpack_require__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __webpack_require__(41);
      __webpack_require__(17)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });

      /***/
    }, /* 41 */
    /***/function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };

      /***/
    }, /* 42 */
    /***/function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;
      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== 'function') {
          // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
          // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
          return helper;
        }
        var wrapper = function wrapper() /* dynamic arguments */{
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };
        return wrapper;
      }

      /***/
    }, /* 43 */
    /***/function (module, exports) {
      /* WEBPACK VAR INJECTION */(function (global) {
        'use strict';

        exports.__esModule = true;
        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
            $Handlebars = root.Handlebars;
          /* istanbul ignore next */
          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }
            return Handlebars;
          };
        };
        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());

      /***/
    }
    /******/])
  );
});

;
},{}],"templates/gallery-items.hbs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var templateFunction = _handlebars.default.template({
  "1": function _(container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return "  <li type=\"none\" class=\"gallery__item\">\r\n    <div class=\"gallery__thumb\">\r\n      <img src=\"" + alias4((helper = (helper = lookupProperty(helpers, "flag") || (depth0 != null ? lookupProperty(depth0, "flag") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "flag",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 16
        },
        "end": {
          "line": 4,
          "column": 24
        }
      }
    }) : helper)) + "\" alt=\"???????? " + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "name",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 36
        },
        "end": {
          "line": 4,
          "column": 44
        }
      }
    }) : helper)) + "\" />\r\n    </div>\r\n    <h2>" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "name",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 6,
          "column": 8
        },
        "end": {
          "line": 6,
          "column": 16
        }
      }
    }) : helper)) + "</h2>\r\n    <p><b>??????????????:</b>" + alias4((helper = (helper = lookupProperty(helpers, "capital") || (depth0 != null ? lookupProperty(depth0, "capital") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "capital",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 7,
          "column": 22
        },
        "end": {
          "line": 7,
          "column": 33
        }
      }
    }) : helper)) + "</p>\r\n    <p><b>????????:</b>" + alias4((helper = (helper = lookupProperty(helpers, "language") || (depth0 != null ? lookupProperty(depth0, "language") : depth0)) != null ? helper : alias2, _typeof(helper) === alias3 ? helper.call(alias1, {
      "name": "language",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 8,
          "column": 19
        },
        "end": {
          "line": 8,
          "column": 31
        }
      }
    }) : helper)) + "</p>\r\n\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "infected") : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(2, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 10,
          "column": 4
        },
        "end": {
          "line": 12,
          "column": 11
        }
      }
    })) != null ? stack1 : "") + "  </li>\r\n";
  },
  "2": function _(container, depth0, helpers, partials, data) {
    return "      <p style=\"font-size:24px; color: red;\"><b>The end</b></p>\r\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function main(container, depth0, helpers, partials, data) {
    var stack1,
      lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined;
      };
    return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 9
        }
      }
    })) != null ? stack1 : "";
  },
  "useData": true
});
var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"js/04-galery.js":[function(require,module,exports) {
"use strict";

var _countries = _interopRequireDefault(require("./countries.json"));
var _galleryItems = _interopRequireDefault(require("../templates/gallery-items.hbs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var galleryRef = document.querySelector(".js-gallery");
var markup = (0, _galleryItems.default)(_countries.default);
galleryRef.insertAdjacentHTML("beforeend", markup);
console.log(markup);
},{"./countries.json":"js/countries.json","../templates/gallery-items.hbs":"templates/gallery-items.hbs"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "13761" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/04-galery.js"], null)
//# sourceMappingURL=/04-galery.a4bfaf91.js.map
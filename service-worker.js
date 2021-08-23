/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7dd3ca44d6f70703a9196a6a1faa54fd"
  },
  {
    "url": "annotations.html",
    "revision": "990bcd7db7013014860dc5c453ef76ba"
  },
  {
    "url": "assets/css/0.styles.8095d402.css",
    "revision": "23eb5fe01105536e3e2c7c08b49cebac"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.006bbd57.js",
    "revision": "af18055309cad434c1d5b5e90c86b8ef"
  },
  {
    "url": "assets/js/11.b613c56a.js",
    "revision": "4ca5dcf955ccfa67308e2278bc57cb78"
  },
  {
    "url": "assets/js/12.357d0ba5.js",
    "revision": "d79c1e925eec98ee32ed5555fa3c4a11"
  },
  {
    "url": "assets/js/13.8d1e6983.js",
    "revision": "e622df1f31f7d9fd53697a7d965db2cc"
  },
  {
    "url": "assets/js/14.361d3799.js",
    "revision": "1ea809781df7228fcc8de06c130623a1"
  },
  {
    "url": "assets/js/15.ee24ce00.js",
    "revision": "42ddda5916d8dfbe04e16731468b70ea"
  },
  {
    "url": "assets/js/16.46d23f66.js",
    "revision": "fda42eaf88b3a18dd8a7612ac218225c"
  },
  {
    "url": "assets/js/17.4650993a.js",
    "revision": "2f8ee99ca807dec40e48add4879d8fea"
  },
  {
    "url": "assets/js/18.51577473.js",
    "revision": "6a9ec773708501e200b4c8ff5bdc9e3a"
  },
  {
    "url": "assets/js/19.ad8ed279.js",
    "revision": "48fd6d774cc91176cded9f10669a50ee"
  },
  {
    "url": "assets/js/2.80be49a5.js",
    "revision": "5738c1d783205d67c4cccd812ebbb75d"
  },
  {
    "url": "assets/js/20.a59c17cf.js",
    "revision": "6d7d052b25a6b1c0027d59f7dcb14f41"
  },
  {
    "url": "assets/js/21.e9b1560f.js",
    "revision": "c2d42e0f892acfc70599f26abc628f01"
  },
  {
    "url": "assets/js/22.768f5308.js",
    "revision": "6ae57c61ae51b75220d6b841fe44cb9d"
  },
  {
    "url": "assets/js/23.cc6050e2.js",
    "revision": "43cfc9f8391cd116fd32b7ea9c927a83"
  },
  {
    "url": "assets/js/24.054f5663.js",
    "revision": "f119f2be9fe2e43e3ce1606347fdd93f"
  },
  {
    "url": "assets/js/25.26ede546.js",
    "revision": "d3e1ade1a07d35eb0263ce44b63579cd"
  },
  {
    "url": "assets/js/26.81f7206a.js",
    "revision": "9a078a5895261a94359b96a332a25c29"
  },
  {
    "url": "assets/js/3.81a249af.js",
    "revision": "80df865a678415e5f699fbea51fed4a7"
  },
  {
    "url": "assets/js/4.767283c4.js",
    "revision": "0651d9603511aa6a2aa44b3ff5e61ca0"
  },
  {
    "url": "assets/js/5.854c0520.js",
    "revision": "b9b9d56a696f5f6f009fb2ecc7b0c2a5"
  },
  {
    "url": "assets/js/6.e8445b13.js",
    "revision": "77d91070fdb05375c37cf4f2e0dbe497"
  },
  {
    "url": "assets/js/7.3f8df6cc.js",
    "revision": "8b484cfb08dcfad41b6f5bd36c6c6fb4"
  },
  {
    "url": "assets/js/8.98a69bdd.js",
    "revision": "be050d34ffa73e7452268fca9bcab6e2"
  },
  {
    "url": "assets/js/9.5f39e1cf.js",
    "revision": "ac556cbe2f31977a78bf740b28210d49"
  },
  {
    "url": "assets/js/app.50c212aa.js",
    "revision": "95db8a8599d2eed9d0a13f29509fbc4b"
  },
  {
    "url": "authentication.html",
    "revision": "1aca0e6ae04ba91b8c2e917be839fdbe"
  },
  {
    "url": "decorators.html",
    "revision": "be6974ae4c34e793cd330e5cebd8b6af"
  },
  {
    "url": "descriptions.html",
    "revision": "6c3ced571c2d6876f4655a4dc9f3a5a7"
  },
  {
    "url": "di.html",
    "revision": "52c324dcf7c4cd2aefc078edad4d937d"
  },
  {
    "url": "error-handling.html",
    "revision": "94a5be8eae6d6745e06776877c49c22a"
  },
  {
    "url": "examples.html",
    "revision": "c0ce1330203412e43d8a1b20515f55d6"
  },
  {
    "url": "faq.html",
    "revision": "81c520b3bd20fd21c11a463b73db4c3b"
  },
  {
    "url": "file-upload.html",
    "revision": "5ff195dd85e7ef2bb3e7033bf45172c1"
  },
  {
    "url": "generating.html",
    "revision": "3524fb6c6f58c7e5d490bd57207e702f"
  },
  {
    "url": "getting-started.html",
    "revision": "380f59ac074630fec218fedc8d57f180"
  },
  {
    "url": "index.html",
    "revision": "fd63c1514d4a3e2800bd25d0d08cb3a8"
  },
  {
    "url": "introduction.html",
    "revision": "174e8fb013bb5b3d9848e64df6d8d29d"
  },
  {
    "url": "live-reloading.html",
    "revision": "2a58166db93fea922438172a33fbc13a"
  },
  {
    "url": "path-mapping.html",
    "revision": "b75c681d32a7187bfb35d3aae1ca2eb5"
  },
  {
    "url": "routes.html",
    "revision": "ecffdcaebd066153d8381d239fa112f8"
  },
  {
    "url": "templates.html",
    "revision": "34c8554f8251851d0ae6a7d5fbf63798"
  },
  {
    "url": "upgrading.html",
    "revision": "f271340991d3a0e1e2c4bf101a2b35dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

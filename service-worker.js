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
    "revision": "583ac66c748262a1fe93629df3504628"
  },
  {
    "url": "assets/css/0.styles.27325227.css",
    "revision": "f2bede69bf687ed44fe20c73a3981146"
  },
  {
    "url": "assets/img/champion.8739e9cb.jpeg",
    "revision": "8739e9cb64bb3b19114fe651c4e30cc9"
  },
  {
    "url": "assets/img/nanshancup.06707e7d.jpeg",
    "revision": "06707e7d34f34ceb40c755c04eb815e6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wellcome.3f76d0ac.jpeg",
    "revision": "3f76d0ace9680066cfec0ee06d03ee4f"
  },
  {
    "url": "assets/js/1.5c1f270a.js",
    "revision": "a0b43df7a95bd94ce79a649c16c0fafc"
  },
  {
    "url": "assets/js/10.49d2a25c.js",
    "revision": "da6ee00f72bddb8d78e6c3f31524d8a3"
  },
  {
    "url": "assets/js/11.6b5d7e6f.js",
    "revision": "047fdab8c40a421fcfda0419a53cccea"
  },
  {
    "url": "assets/js/12.26b93a1d.js",
    "revision": "e3061f02ab2680e969230470f1b9ccee"
  },
  {
    "url": "assets/js/13.8c6ee9dc.js",
    "revision": "155f6e5afc5df01ffcedb3c818cd7722"
  },
  {
    "url": "assets/js/14.27e0a025.js",
    "revision": "b4262d55fbb4b353fac7927f2bbf3ba0"
  },
  {
    "url": "assets/js/15.72e00ef7.js",
    "revision": "6c4c06ebf91677911c496c1d2ffa1047"
  },
  {
    "url": "assets/js/16.fbbaf643.js",
    "revision": "a43c3e6a85892fd1007132a3847b9f17"
  },
  {
    "url": "assets/js/17.f00c7a24.js",
    "revision": "61312083e1a63fe66ef4f6dfd497d82d"
  },
  {
    "url": "assets/js/18.1dddb2e1.js",
    "revision": "1a9fb4fd416fafc6ccda863c09192e08"
  },
  {
    "url": "assets/js/19.21d0dc7c.js",
    "revision": "5da7f5501ad3d4487dfb6b16a5226712"
  },
  {
    "url": "assets/js/2.6e1150a8.js",
    "revision": "b8395ef51f8688b49722b1b5d0e96b6b"
  },
  {
    "url": "assets/js/20.38e2aacc.js",
    "revision": "af8dfa2f596aab62ff5061169be6ec4e"
  },
  {
    "url": "assets/js/21.038e3c68.js",
    "revision": "1bfe9999d67dfe2e972743609e75560b"
  },
  {
    "url": "assets/js/22.d6265a42.js",
    "revision": "f76ac20bd0b149a50b4d00f2a7c1007f"
  },
  {
    "url": "assets/js/23.ee1e992c.js",
    "revision": "88f93342dbcfdde72f50f29ce17acecd"
  },
  {
    "url": "assets/js/24.6bc92607.js",
    "revision": "3403bd3cffd11cf460040f45cec1114f"
  },
  {
    "url": "assets/js/25.be8a3cbd.js",
    "revision": "74dd8a72c0a8e440298a5f396c1f7e65"
  },
  {
    "url": "assets/js/26.8d455bea.js",
    "revision": "425324cf3e1f90a8043cfa3165d4fc61"
  },
  {
    "url": "assets/js/27.7ff31c5f.js",
    "revision": "46bbb401714885e897cd8e84e3a027d0"
  },
  {
    "url": "assets/js/28.79c5a583.js",
    "revision": "e603bd4bb6c16fd71801b0ebb3b8f09c"
  },
  {
    "url": "assets/js/29.caa95ecc.js",
    "revision": "0795a5b65660c9fe9386422381a71a0f"
  },
  {
    "url": "assets/js/3.299c96bb.js",
    "revision": "eed5e8eae44bb5d317982df952c81f49"
  },
  {
    "url": "assets/js/30.e33d2e6e.js",
    "revision": "1297e95a611dcaf430206c92f243adde"
  },
  {
    "url": "assets/js/4.1035398e.js",
    "revision": "719acef495049662d8872268a499b82d"
  },
  {
    "url": "assets/js/5.350e3a6f.js",
    "revision": "80c29e02fd23c904a60fc64f1b77cdd1"
  },
  {
    "url": "assets/js/6.e2054d0d.js",
    "revision": "929bfadff2bdfc084cdca0a96bf5b5d2"
  },
  {
    "url": "assets/js/7.9c606eda.js",
    "revision": "c506835b14d811873f235ac9a2e08a59"
  },
  {
    "url": "assets/js/app.111c9ec1.js",
    "revision": "f68e25ad3484f2a3882340fb7c9cf558"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "en/get-started.html",
    "revision": "fabbaab59fa41cb619653407cd385098"
  },
  {
    "url": "en/index.html",
    "revision": "c6ab9effd031d85cc9ee47be387a4f86"
  },
  {
    "url": "get-started.html",
    "revision": "baaf01d158d972cc11db84a176b8f42d"
  },
  {
    "url": "hire.html",
    "revision": "c0b13eb33d61946fbc29033b1e004967"
  },
  {
    "url": "index.html",
    "revision": "3b1fe13b2e01cc8fd3a8810abfebc693"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "7aa442b8d73e0b058d4b09c04f6fb3be"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "e35301b10cd869b5946975d26726d13e"
  },
  {
    "url": "weixin_qr.png",
    "revision": "aeb26b126400b554d8b8af388f80ee40"
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

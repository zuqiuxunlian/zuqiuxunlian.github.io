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
    "revision": "fdd72e5ace939e820f9797e19d829184"
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
    "url": "assets/js/1.d0d3b459.js",
    "revision": "c30248b77882928130b10670ebb9acdf"
  },
  {
    "url": "assets/js/10.c80ea8c3.js",
    "revision": "91d6b6af15bdfae1aa4adc3e9090dd00"
  },
  {
    "url": "assets/js/11.6b5d7e6f.js",
    "revision": "047fdab8c40a421fcfda0419a53cccea"
  },
  {
    "url": "assets/js/12.fa0810c0.js",
    "revision": "015cb1d0ec02bd04bb724ce9b94fe826"
  },
  {
    "url": "assets/js/13.8880aea2.js",
    "revision": "cbaa7e887a4f4bff21177f1cb9867475"
  },
  {
    "url": "assets/js/14.9ea9d125.js",
    "revision": "ebdb08f444d5bdaa108b78d4261f45ce"
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
    "url": "assets/js/25.acc6b4f0.js",
    "revision": "74ced382425c3cc6f6922013b30a6b06"
  },
  {
    "url": "assets/js/26.0085b4f9.js",
    "revision": "fed3b2e8ad5016ee342b60562dedd9e4"
  },
  {
    "url": "assets/js/27.9db8f191.js",
    "revision": "393e3c65e67719f5d6b04c08ebcf2d51"
  },
  {
    "url": "assets/js/28.a8508fad.js",
    "revision": "49085954cd446ac0985bbeb5a3018c70"
  },
  {
    "url": "assets/js/29.ff7a9cc4.js",
    "revision": "d4c59101abdb44944b736c06d18cfb88"
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
    "url": "assets/js/app.cba6bf01.js",
    "revision": "45bc326085d21f5ac3e2b7a1e547ca21"
  },
  {
    "url": "assets/js/vendors~docsearch.5e758b7f.js",
    "revision": "8259fdbb94020e921a7272f277903b38"
  },
  {
    "url": "en/get-started.html",
    "revision": "0b64959ef2d415924dc203ea599bf635"
  },
  {
    "url": "en/index.html",
    "revision": "c954ed035ed31fcf30637234121003c1"
  },
  {
    "url": "get-started.html",
    "revision": "4c64e2d833735c18af9dde014533dfa6"
  },
  {
    "url": "hire.html",
    "revision": "67e66c9b2c1bd401290d58ac6032026f"
  },
  {
    "url": "index.html",
    "revision": "f8e5ab9d7c062569f13fb2f8650b2078"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "6ab0efb6c1cb8954618f21f1737882b1"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "6535a9cc296f256294934e5ee576ef02"
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

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
    "revision": "99aa5230fe6adc34b94a8fad554df08d"
  },
  {
    "url": "assets/css/0.styles.27325227.css",
    "revision": "f2bede69bf687ed44fe20c73a3981146"
  },
  {
    "url": "assets/img/001.f43a98a7.jpg",
    "revision": "f43a98a7dc7e03f868319f95f313a901"
  },
  {
    "url": "assets/img/037.96b3ac90.jpg",
    "revision": "96b3ac901b9e0d611906b92be07dd444"
  },
  {
    "url": "assets/img/133.761ce896.jpg",
    "revision": "761ce896432c4cc986e9b44a5058d9bf"
  },
  {
    "url": "assets/img/160.d795c87a.jpg",
    "revision": "d795c87a22c2428e48a6f55e9388c6b0"
  },
  {
    "url": "assets/img/172.f8a5d0e5.jpg",
    "revision": "f8a5d0e56fd2d6afe7246ee7288d6c67"
  },
  {
    "url": "assets/img/176.85fc5995.jpg",
    "revision": "85fc599581dadbc99c2153de500bd7ba"
  },
  {
    "url": "assets/img/185.d43803ac.jpg",
    "revision": "d43803ac6edd16fbd0384384dd8a0968"
  },
  {
    "url": "assets/img/199.f4f6c521.jpg",
    "revision": "f4f6c5215ed2f1085daca848a98b4f85"
  },
  {
    "url": "assets/img/2020-event.46e9909f.png",
    "revision": "46e9909f7ab08aa28a6fa421230448e5"
  },
  {
    "url": "assets/img/2020-finance.94fdc591.png",
    "revision": "94fdc591ba37831ae3485a15fd3e1764"
  },
  {
    "url": "assets/img/2021-event.a8e1ef38.png",
    "revision": "a8e1ef38c46789364b5fdb49352a9ae7"
  },
  {
    "url": "assets/img/2021-finance.78c83c3d.png",
    "revision": "78c83c3da78b9dc62b4436bd1c552a01"
  },
  {
    "url": "assets/img/2022-event.53f0d17f.png",
    "revision": "53f0d17f38aff43aa653b8a5b8924e9c"
  },
  {
    "url": "assets/img/2022-finance.52b33856.png",
    "revision": "52b3385640dcfcd10a5a73d51a67d38a"
  },
  {
    "url": "assets/img/2023-event.6ac851e0.png",
    "revision": "6ac851e0cff5de0cbdc4e8a421d1a66f"
  },
  {
    "url": "assets/img/2023-finance.d500475e.png",
    "revision": "d500475e14e19fec541f9e9393d38938"
  },
  {
    "url": "assets/img/2024-event.5bb675f5.png",
    "revision": "5bb675f50843b1b615a7e4b10eadea67"
  },
  {
    "url": "assets/img/2024-finance.b8777d77.png",
    "revision": "b8777d776f6ba8bcdec9b15d9d9c39b4"
  },
  {
    "url": "assets/img/208.38751adb.jpg",
    "revision": "38751adbad6848d65abcd625b44b9e87"
  },
  {
    "url": "assets/img/213.0e16713b.jpg",
    "revision": "0e16713ba143eaa6427f3e5e17ee667a"
  },
  {
    "url": "assets/img/215.e80805e9.jpg",
    "revision": "e80805e99db5bf943aa6f3e9205db472"
  },
  {
    "url": "assets/img/champion.8739e9cb.jpeg",
    "revision": "8739e9cb64bb3b19114fe651c4e30cc9"
  },
  {
    "url": "assets/img/dabaolu.4bdd3a6a.jpg",
    "revision": "4bdd3a6aa88e037dac2abc5f5c349bd2"
  },
  {
    "url": "assets/img/Juca.331cee0a.jpg",
    "revision": "331cee0a94d59a6017209f6010a89eb0"
  },
  {
    "url": "assets/img/Maciel.f591c5f3.jpg",
    "revision": "f591c5f33f541365380373f73fc50700"
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
    "url": "assets/img/Ten.7731ca3e.jpg",
    "revision": "7731ca3e63823fc061792b8d45eec940"
  },
  {
    "url": "assets/img/training.dc29935f.jpg",
    "revision": "dc29935ffdb28ccb823dee2e55a04401"
  },
  {
    "url": "assets/js/1.2e53285f.js",
    "revision": "a4a380f7f5d2a37d4186e4df2264ba41"
  },
  {
    "url": "assets/js/10.ff393a42.js",
    "revision": "966f6616177e5515b92d21948b7d73f8"
  },
  {
    "url": "assets/js/11.4e31f1f9.js",
    "revision": "dd92a2eff9fe818e761e4e0f63e4006b"
  },
  {
    "url": "assets/js/12.f493dc5e.js",
    "revision": "9340e9d69ec27fff5c5397b662a8cd88"
  },
  {
    "url": "assets/js/13.a8a4421e.js",
    "revision": "c0c6136c4b60d00acc57cbf03db85b18"
  },
  {
    "url": "assets/js/14.ba3886ad.js",
    "revision": "62dba9364936d1815534e91bd33599b1"
  },
  {
    "url": "assets/js/15.4f1111b5.js",
    "revision": "7aa9292a3abfba14e6502c26e6516f25"
  },
  {
    "url": "assets/js/16.994a0a2b.js",
    "revision": "179fdd219ab22250cc7e5c68703fd7d4"
  },
  {
    "url": "assets/js/17.1e5924ee.js",
    "revision": "cde169e11032535e23803b84cea215f1"
  },
  {
    "url": "assets/js/18.de1ffa5a.js",
    "revision": "e3a64b2a36e92bddd806cd00d64f48aa"
  },
  {
    "url": "assets/js/19.e1517aae.js",
    "revision": "ee8314f10d9664363760b6f56263fbd9"
  },
  {
    "url": "assets/js/2.7f970d9a.js",
    "revision": "6fab5357c79b155baf4a1f42a2234f6d"
  },
  {
    "url": "assets/js/20.278bcb4f.js",
    "revision": "019bf700f78dd1949ad033d413b1b303"
  },
  {
    "url": "assets/js/21.3f9a1ad1.js",
    "revision": "88551755ed9d88cfbd72b607ab4fb4c3"
  },
  {
    "url": "assets/js/22.bd3ccd16.js",
    "revision": "8dfa468011b186c78b27003db64c10bd"
  },
  {
    "url": "assets/js/23.72b4cf51.js",
    "revision": "0956aa4c303b59cc83b9ee47acb6c3f2"
  },
  {
    "url": "assets/js/24.eeb55729.js",
    "revision": "201e2dd4b15e2fa24b512931283ef90b"
  },
  {
    "url": "assets/js/25.a6ba06ee.js",
    "revision": "7a3350b7214a216047e48a6f7efb1e43"
  },
  {
    "url": "assets/js/26.f68c475e.js",
    "revision": "5fc987b8c9a1b4776dc2b9e70d8e0636"
  },
  {
    "url": "assets/js/27.264a7a92.js",
    "revision": "3cb4f16c669ada7dc45e75b17b2aa69e"
  },
  {
    "url": "assets/js/28.2c64dea8.js",
    "revision": "22cd97af0105da3d2f7156b4b22ba0a5"
  },
  {
    "url": "assets/js/29.7f333790.js",
    "revision": "6a4d2a309bd974dbf60d7e50bf59e173"
  },
  {
    "url": "assets/js/3.55aeaf7b.js",
    "revision": "cf57999dfe87742df402a8b77c9ddcfc"
  },
  {
    "url": "assets/js/30.0afd1739.js",
    "revision": "9dad3b256fea05ceacaada8ac4e0e770"
  },
  {
    "url": "assets/js/31.c8d2bb95.js",
    "revision": "dade0f0821ba4e8d8ab0cc2fdea6832f"
  },
  {
    "url": "assets/js/32.42d7e430.js",
    "revision": "b7652e4b9e2a078a719a2d982e5fd356"
  },
  {
    "url": "assets/js/33.162d2198.js",
    "revision": "9a1f5e7b6ad3c8bb5d1023444d19c7e5"
  },
  {
    "url": "assets/js/4.a94b099e.js",
    "revision": "cec17636538a6db4c87983b97fe05a1f"
  },
  {
    "url": "assets/js/5.93296458.js",
    "revision": "44f2444a3ae3598049ad267828ff3750"
  },
  {
    "url": "assets/js/6.3abf217c.js",
    "revision": "f3bfda6be877ef56ed6258044ec6f38b"
  },
  {
    "url": "assets/js/7.2f484470.js",
    "revision": "5c4968cf2029a6b22b67d4539dc1eed0"
  },
  {
    "url": "assets/js/app.d4d8b3fe.js",
    "revision": "2aa824c4fdbf48166fb9fd582390ccf8"
  },
  {
    "url": "assets/js/vendors~docsearch.c1a240f3.js",
    "revision": "2d16fdf2420fc814db0d5636c46e9ebb"
  },
  {
    "url": "en/get-started.html",
    "revision": "b826b62e8ebf15d3ee37b7bd0d21d78e"
  },
  {
    "url": "en/index.html",
    "revision": "e3fdaf79369b81adcaf45c77172f4e69"
  },
  {
    "url": "finance.html",
    "revision": "ce9f40bc0ae25df262137b504057ea44"
  },
  {
    "url": "get-started.html",
    "revision": "037f9ae06f127e5af3d0d1d520fc7352"
  },
  {
    "url": "hire.html",
    "revision": "5cd40288cd63ed1958ab2041b456d2f7"
  },
  {
    "url": "index.html",
    "revision": "b23227fc91abd77fd00beebc87f63511"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "manage-team.html",
    "revision": "9c2a73d3b542b0e41b53c9e1fad76fc9"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "5ae329970d935df39c84978d9bc6c728"
  },
  {
    "url": "members.html",
    "revision": "47c5a5be347c72e51848fc10c99e716a"
  },
  {
    "url": "shipinhao.jpg",
    "revision": "8f2ac5acd2aaef3844b900e8813c6d1e"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "113801d974d674e0ce097d7c18a4f037"
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

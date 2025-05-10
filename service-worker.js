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
    "revision": "b1d518fda69d021fd5b7607c3f1b6810"
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
    "url": "assets/js/1.fea7b739.js",
    "revision": "41f56ee52010021b18e6cc6cc92a3962"
  },
  {
    "url": "assets/js/10.f584821d.js",
    "revision": "3d29c03a5e7f89e59a5029666ade0b27"
  },
  {
    "url": "assets/js/11.4e31f1f9.js",
    "revision": "dd92a2eff9fe818e761e4e0f63e4006b"
  },
  {
    "url": "assets/js/12.c47bd1fe.js",
    "revision": "dfb3b459a393ee0d68f1741972401c75"
  },
  {
    "url": "assets/js/13.1926bfef.js",
    "revision": "7d1e2a430817b4bacbf9d977e8b7a2ef"
  },
  {
    "url": "assets/js/14.fc78ec94.js",
    "revision": "bcc8863bba9c7508ee5a4cd1ee18b2d6"
  },
  {
    "url": "assets/js/15.4f1111b5.js",
    "revision": "7aa9292a3abfba14e6502c26e6516f25"
  },
  {
    "url": "assets/js/16.a207a9ac.js",
    "revision": "74b6b4242643e723b94e4f3031c3c258"
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
    "url": "assets/js/2.facd1022.js",
    "revision": "c21edec527df54aaf1ac03aac73868a0"
  },
  {
    "url": "assets/js/20.85bcd3b4.js",
    "revision": "f646aefa3a2e85a15a4f5f02612a32e3"
  },
  {
    "url": "assets/js/21.8388137f.js",
    "revision": "2248013ad14dbc8334a53d2094e5491d"
  },
  {
    "url": "assets/js/22.bd3ccd16.js",
    "revision": "8dfa468011b186c78b27003db64c10bd"
  },
  {
    "url": "assets/js/23.95565f95.js",
    "revision": "b11bdcbc9b5a99639336664165188dfc"
  },
  {
    "url": "assets/js/24.c514cc16.js",
    "revision": "9718be6a5bf7d89d496bc25d95ca89e1"
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
    "url": "assets/js/28.3aec70cc.js",
    "revision": "ba6ab7b3ac1d3a0e13a777b018388a51"
  },
  {
    "url": "assets/js/29.ed4deae3.js",
    "revision": "80ddc3bddeaec4afc9dfee346b23db25"
  },
  {
    "url": "assets/js/3.55aeaf7b.js",
    "revision": "cf57999dfe87742df402a8b77c9ddcfc"
  },
  {
    "url": "assets/js/30.98784cc4.js",
    "revision": "89fdb9ca437d8dda4a4c9f7a34cfc449"
  },
  {
    "url": "assets/js/31.c8d2bb95.js",
    "revision": "dade0f0821ba4e8d8ab0cc2fdea6832f"
  },
  {
    "url": "assets/js/32.cc674e32.js",
    "revision": "4f2040f37e500a6b7e973a7d518d406d"
  },
  {
    "url": "assets/js/33.df4391ae.js",
    "revision": "7234b6e62d328501fa0ce678bedd55cf"
  },
  {
    "url": "assets/js/4.0c73ed0f.js",
    "revision": "3dcf63838e65911f617fd3213caa8184"
  },
  {
    "url": "assets/js/5.29c70f65.js",
    "revision": "4c79d40df6dbf501f06a7dd5c7f1ad72"
  },
  {
    "url": "assets/js/6.3f7a27d8.js",
    "revision": "5a56d6913b368a479ad48ee86c22629c"
  },
  {
    "url": "assets/js/7.427f7432.js",
    "revision": "892e52a5dc7157b7d2b50470ba0c7c8a"
  },
  {
    "url": "assets/js/app.f33f3dc7.js",
    "revision": "9d9fe8c8db7693969eafa1bf095a4ba6"
  },
  {
    "url": "assets/js/vendors~docsearch.9268c32e.js",
    "revision": "bdf7b936295b51467ec62b3d8a9a92f8"
  },
  {
    "url": "en/get-started.html",
    "revision": "c3360e79eb8d056960fe7cceed0422c2"
  },
  {
    "url": "en/index.html",
    "revision": "50fe369eb548b01e36ed92d0e6907d2b"
  },
  {
    "url": "finance.html",
    "revision": "f4e392ae64fcc0c5dac9261e965fe756"
  },
  {
    "url": "get-started.html",
    "revision": "fd7d6d01fb40c3adba8c04ae874ebc7e"
  },
  {
    "url": "hire.html",
    "revision": "489baf06cbd9db887bf862957b77f1c5"
  },
  {
    "url": "index.html",
    "revision": "fa42be00364f002ad206a3c71d302d2c"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "manage-team.html",
    "revision": "af5be40750716523f9467cc8bfffc214"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "2d50bcc716ec29bf1d5819aaaebb2a2d"
  },
  {
    "url": "members.html",
    "revision": "67fc9c752b81c768bb1e499bb1e7aab8"
  },
  {
    "url": "shipinhao.jpg",
    "revision": "8f2ac5acd2aaef3844b900e8813c6d1e"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "06b2f492b939c77fcfee00703b1022e9"
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

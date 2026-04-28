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
    "revision": "e4a8c4f51cbe6af8daef7976a4544903"
  },
  {
    "url": "assets/css/0.styles.48943fff.css",
    "revision": "8cae073722f35cf5eeb526365b01c67f"
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
    "url": "assets/img/2025-event.44fe6ac2.png",
    "revision": "44fe6ac2a075ead1486cbd68a31b214b"
  },
  {
    "url": "assets/img/2025-finance.3f966217.png",
    "revision": "3f9662178d21ab3aef5ed996d0981b5b"
  },
  {
    "url": "assets/img/211.dfaab6a5.jpg",
    "revision": "dfaab6a5a71d956f6c177072bddd9367"
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
    "url": "assets/img/217.86918423.jpg",
    "revision": "869184239f810ac46b68e8c5f19985b6"
  },
  {
    "url": "assets/img/221.f2df829e.jpg",
    "revision": "f2df829ef802bb0ff58b42fbc6e2b16d"
  },
  {
    "url": "assets/img/222.65cbfced.jpg",
    "revision": "65cbfced6c82bfaba8310eb22ae2c4f9"
  },
  {
    "url": "assets/img/champion.8739e9cb.jpeg",
    "revision": "8739e9cb64bb3b19114fe651c4e30cc9"
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
    "url": "assets/img/Ouyang.48afe9ab.jpg",
    "revision": "48afe9abef4759f190ca59b04aa49a90"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Sidine.baea7a3b.jpg",
    "revision": "baea7a3b506287c0bb35ea53b773f2b2"
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
    "url": "assets/js/1.bfe19181.js",
    "revision": "d6f3e326194d7385828d9580db2e797f"
  },
  {
    "url": "assets/js/10.f624df0b.js",
    "revision": "3ae12b68cc62754a87a837ed231a469a"
  },
  {
    "url": "assets/js/11.6429d9a3.js",
    "revision": "e6dd3c71f868c57b49458cfe057773ec"
  },
  {
    "url": "assets/js/12.53d9935a.js",
    "revision": "3a3e449bd6a2f4a9036b6d2bb5201d8e"
  },
  {
    "url": "assets/js/13.532034bb.js",
    "revision": "03168bb6edc21875ce863dd10e357545"
  },
  {
    "url": "assets/js/14.89fa574b.js",
    "revision": "4f7f02950ca8ef89a39b766b00648d50"
  },
  {
    "url": "assets/js/15.398faed6.js",
    "revision": "5f1ae2faa780d87d1ffe9274c0a31991"
  },
  {
    "url": "assets/js/16.3a62944f.js",
    "revision": "fd63984822c309c7e1443833a23ce298"
  },
  {
    "url": "assets/js/17.6dd35814.js",
    "revision": "884abec74fe280bccaf63653fc1afa9a"
  },
  {
    "url": "assets/js/18.f1091819.js",
    "revision": "7575f39507ea041a9ade82013b9d7434"
  },
  {
    "url": "assets/js/19.042ec2e3.js",
    "revision": "173df447d64771914136b24c1a57bb52"
  },
  {
    "url": "assets/js/2.7e5cf0e3.js",
    "revision": "9921d4fc2fa67d2ee3b6cbb9ef248dee"
  },
  {
    "url": "assets/js/20.1ae453ad.js",
    "revision": "82855dfaad63898afe86a13d4c246f94"
  },
  {
    "url": "assets/js/21.5955229a.js",
    "revision": "703b92964bd44afeddfa4966a552ba9c"
  },
  {
    "url": "assets/js/22.bc9af783.js",
    "revision": "face716d3d431957100e52c8be5e876e"
  },
  {
    "url": "assets/js/23.ab45842f.js",
    "revision": "797fdeb2f82607541390d56369666112"
  },
  {
    "url": "assets/js/24.ee34ba7d.js",
    "revision": "9ef47b04a14fc5e30644bd1099768b40"
  },
  {
    "url": "assets/js/25.c63d4764.js",
    "revision": "341df7abb0c5f7651cfdb9b697bcc759"
  },
  {
    "url": "assets/js/26.07570cfc.js",
    "revision": "e6182510421a35a6725cb1f1b87a44c9"
  },
  {
    "url": "assets/js/27.9a152656.js",
    "revision": "b4e8161a53de25b0a58e161723c3d6e7"
  },
  {
    "url": "assets/js/28.f5bbaec1.js",
    "revision": "e9b367031fc51e7a87900839ac2b4c43"
  },
  {
    "url": "assets/js/29.3d4efdb5.js",
    "revision": "1569aa9376645663f649e4689791ea2d"
  },
  {
    "url": "assets/js/3.85f7c176.js",
    "revision": "a7a0fc6a089f59bd1466c07c3299c763"
  },
  {
    "url": "assets/js/30.03511060.js",
    "revision": "fad5a38d617a04b6d8f82d62eb022ac5"
  },
  {
    "url": "assets/js/31.71ff2725.js",
    "revision": "ecd28e5b645585a57a93c5f8d50e1b22"
  },
  {
    "url": "assets/js/32.514317fb.js",
    "revision": "900f99d2755c9e1f877a5f2946887919"
  },
  {
    "url": "assets/js/33.02c53755.js",
    "revision": "53574c74be12b8550566afe2004078a6"
  },
  {
    "url": "assets/js/4.cd0fcadb.js",
    "revision": "a4cf3e57703dfc2153e4b4b870d6b290"
  },
  {
    "url": "assets/js/5.acfcef4b.js",
    "revision": "ea9cba1b9080408a56efa8e02169b6c4"
  },
  {
    "url": "assets/js/6.21e77dfb.js",
    "revision": "ceeceff4994a73ce61fc4b40308061f5"
  },
  {
    "url": "assets/js/7.8ba66430.js",
    "revision": "21787204a8e0380d0b85c7b295f8866d"
  },
  {
    "url": "assets/js/app.15fdb745.js",
    "revision": "854861a6fd2916483999191b64b44791"
  },
  {
    "url": "assets/js/vendors~docsearch.65d77edd.js",
    "revision": "7f9ec815a4ee7409f932eefd9f649e79"
  },
  {
    "url": "en/get-started.html",
    "revision": "4bc95500600d3b510da5c1caa4973cd1"
  },
  {
    "url": "en/index.html",
    "revision": "c527becac487644fe672708b352e4afe"
  },
  {
    "url": "finance.html",
    "revision": "9e1541b31f13bbad8e826f6b754992ad"
  },
  {
    "url": "get-started.html",
    "revision": "f9158871822d210c75c90ee0f8696999"
  },
  {
    "url": "hire.html",
    "revision": "3daf58a9abf9cc1f3605186e9f538169"
  },
  {
    "url": "index.html",
    "revision": "87444cb1be98c595931f3cf2f53865f8"
  },
  {
    "url": "logo.png",
    "revision": "03ea45a1c37ffa4e41dab04e0b2a4fda"
  },
  {
    "url": "manage-team.html",
    "revision": "b75f19958220d0d18d8b8d877bb2d7db"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "c92adbb4d080a4ccef9aa719f1c29067"
  },
  {
    "url": "members.html",
    "revision": "49dbb651a74a66b740b426071ecff4b5"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "7004a6597eb67987f21c66bde0631064"
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

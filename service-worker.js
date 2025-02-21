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
    "revision": "3680ebc4a862f7f72f755e15483eed82"
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
    "url": "assets/img/159.94ab40a6.jpg",
    "revision": "94ab40a67db16123ab17ba9d0de3b566"
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
    "url": "assets/js/1.779819ff.js",
    "revision": "bb6a58fc77babd550b0e0d31b3e43861"
  },
  {
    "url": "assets/js/10.825de620.js",
    "revision": "804f510727b9ba8329341b8b71b81449"
  },
  {
    "url": "assets/js/11.e6eb8b26.js",
    "revision": "9be89ac4b672ffcf91491275c2614241"
  },
  {
    "url": "assets/js/12.5b44a93c.js",
    "revision": "8206d835d225883a68a6386fed07ec39"
  },
  {
    "url": "assets/js/13.b2545216.js",
    "revision": "6df00a220d51a4b37fc387c83fb5873a"
  },
  {
    "url": "assets/js/14.99bb4f91.js",
    "revision": "72b239940e11bf1f23f93e6bf31417c4"
  },
  {
    "url": "assets/js/15.b2543e62.js",
    "revision": "565c88c71cf1251ba9d3826e4ccbd410"
  },
  {
    "url": "assets/js/16.622cf2d6.js",
    "revision": "5dfad89c9129f47a15d5fd01879e447c"
  },
  {
    "url": "assets/js/17.d370dadf.js",
    "revision": "fb5c18b0bf2b96a5aa0ab809470f6716"
  },
  {
    "url": "assets/js/18.91e99208.js",
    "revision": "a57cc168e16e80e5d6ca414cc0d4aa49"
  },
  {
    "url": "assets/js/19.d96b40a2.js",
    "revision": "061e83dc873c3038377cd051659091cd"
  },
  {
    "url": "assets/js/2.86ada153.js",
    "revision": "4cf1c00dcb8662fa1e0fc763826f80e5"
  },
  {
    "url": "assets/js/20.89579d4e.js",
    "revision": "47bddaa21855c71f0857bb87e53038c8"
  },
  {
    "url": "assets/js/21.39081168.js",
    "revision": "f970191fd0bd8c869add69df532733ed"
  },
  {
    "url": "assets/js/22.bcbf0d54.js",
    "revision": "c04974412047924ceebfefe764d255fd"
  },
  {
    "url": "assets/js/23.67bad7d3.js",
    "revision": "8225a561ab23ef32246ee550821ac9fd"
  },
  {
    "url": "assets/js/24.fb84ce4c.js",
    "revision": "301a31de784f0be80b791c79a12ce332"
  },
  {
    "url": "assets/js/25.1e85367c.js",
    "revision": "b5af62bac2f4b2c29a4b46e84503d68d"
  },
  {
    "url": "assets/js/26.fa8989e1.js",
    "revision": "b53382e3060ce65f95c686a03828f28c"
  },
  {
    "url": "assets/js/27.c7904c11.js",
    "revision": "e6c445c4748f8d889383a224dd2b5bd2"
  },
  {
    "url": "assets/js/28.d444dabb.js",
    "revision": "c7eee7195aeccebdd8789fdb724c300d"
  },
  {
    "url": "assets/js/29.c1291263.js",
    "revision": "008607d6e33a5ed67b5952ef4f786ca9"
  },
  {
    "url": "assets/js/3.aabd5b54.js",
    "revision": "0536592a6419ceebbebb2629b89b0511"
  },
  {
    "url": "assets/js/30.3027fcc1.js",
    "revision": "bad7effd33cded5323637f20aa13248f"
  },
  {
    "url": "assets/js/31.e1160482.js",
    "revision": "6237d826197ce03a1fd6a89b4027f355"
  },
  {
    "url": "assets/js/32.38ed0b6e.js",
    "revision": "50bb955c0cb1473bd4050ed49fd915e4"
  },
  {
    "url": "assets/js/33.df4391ae.js",
    "revision": "7234b6e62d328501fa0ce678bedd55cf"
  },
  {
    "url": "assets/js/4.bd92510f.js",
    "revision": "a71cfcf5d8f508239541487f1e8180ed"
  },
  {
    "url": "assets/js/5.1259bb07.js",
    "revision": "8a33f0d42c8bf88e0ef680f497a5ff1a"
  },
  {
    "url": "assets/js/6.063b8512.js",
    "revision": "7326c63cb538a54fc53c8a73140142ea"
  },
  {
    "url": "assets/js/7.8a5681b1.js",
    "revision": "f0bf521df894fb8d5b3a4984eca6fb48"
  },
  {
    "url": "assets/js/app.fb6a7d3d.js",
    "revision": "15103decabd03bbab85b923126a4ea70"
  },
  {
    "url": "assets/js/vendors~docsearch.9268c32e.js",
    "revision": "bdf7b936295b51467ec62b3d8a9a92f8"
  },
  {
    "url": "en/get-started.html",
    "revision": "cb309c1d2931f72c9904d9ea18a9269d"
  },
  {
    "url": "en/index.html",
    "revision": "e70aa217a4d7a36eae1bd010c454a514"
  },
  {
    "url": "finance.html",
    "revision": "2fadef57b1c0b77df0e7eedde8b588c2"
  },
  {
    "url": "get-started.html",
    "revision": "a1dc98e98146fb323cd928489adb781e"
  },
  {
    "url": "hire.html",
    "revision": "a06726647b0d11e96b4a6f895b4e28fe"
  },
  {
    "url": "index.html",
    "revision": "0db9496ce5b1ce9e78f6b652c3c34172"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "manage-team.html",
    "revision": "ec049cb7e84a449c9ae0b13c80da54b7"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "db1eb9d88658d4e5ffea2505aa6c2bb8"
  },
  {
    "url": "members.html",
    "revision": "6357b172f5d258a620a4cbd5c404e0e1"
  },
  {
    "url": "shipinhao.jpg",
    "revision": "8f2ac5acd2aaef3844b900e8813c6d1e"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "654206ceb48560d2a9126b6a2fd8cea5"
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

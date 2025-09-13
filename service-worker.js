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
    "revision": "2312db52a3cd130ec85daa4576b0e3c8"
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
    "url": "assets/img/172.f8a5d0e5.jpg",
    "revision": "f8a5d0e56fd2d6afe7246ee7288d6c67"
  },
  {
    "url": "assets/img/185.d43803ac.jpg",
    "revision": "d43803ac6edd16fbd0384384dd8a0968"
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
    "url": "assets/img/Ouyang.48afe9ab.jpg",
    "revision": "48afe9abef4759f190ca59b04aa49a90"
  },
  {
    "url": "assets/img/Ryan.a7b97804.jpg",
    "revision": "a7b97804db768d304b70b26d09a27d87"
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
    "url": "assets/js/1.7c709e13.js",
    "revision": "65b22d8125988ad773c6e7dcc1d87654"
  },
  {
    "url": "assets/js/10.67e4a9d1.js",
    "revision": "fc04b2a3cd8b9b35b797876c16714ebb"
  },
  {
    "url": "assets/js/11.8d5809cd.js",
    "revision": "b289858a7eb5e77b219787446def4f37"
  },
  {
    "url": "assets/js/12.408c408d.js",
    "revision": "fc43cfbba9db775697e770c1f2c551e6"
  },
  {
    "url": "assets/js/13.7cc2d825.js",
    "revision": "f368d7e4e87e5338defbe72441d0af1e"
  },
  {
    "url": "assets/js/14.e055fc83.js",
    "revision": "d76b0de294a729c3f67ed88c41cc8ddc"
  },
  {
    "url": "assets/js/15.b1757ba4.js",
    "revision": "36f07dd998747965ca5f6badd27cdc39"
  },
  {
    "url": "assets/js/16.1ef76c23.js",
    "revision": "5e755886cacf68125c5f9ea04359ad9d"
  },
  {
    "url": "assets/js/17.cc97b547.js",
    "revision": "4253d0840647a4a1a2cf63f8405e5f9a"
  },
  {
    "url": "assets/js/18.bb830c23.js",
    "revision": "2f838dafb0650266467efe888af3d575"
  },
  {
    "url": "assets/js/19.9b21571f.js",
    "revision": "7593fc81096fb5af28be4d41d93b7171"
  },
  {
    "url": "assets/js/2.fdb45f69.js",
    "revision": "8b4dfe475776c28eebed47670fb98b30"
  },
  {
    "url": "assets/js/20.17704c60.js",
    "revision": "2860a615fe3d519e74298988c3d9ee1a"
  },
  {
    "url": "assets/js/21.ac20d4bc.js",
    "revision": "4a4c16446713ba0badf1b82a325f876a"
  },
  {
    "url": "assets/js/22.1fcd0223.js",
    "revision": "6a4f26155ba969d9a30b026f69798ce5"
  },
  {
    "url": "assets/js/23.28c5e294.js",
    "revision": "e9fd08679e384dab0893856dcb0da811"
  },
  {
    "url": "assets/js/24.a64d4146.js",
    "revision": "859afc5bdf1ac726561514217fc1e09d"
  },
  {
    "url": "assets/js/25.995ad097.js",
    "revision": "b746bd4be8489c7e685cbd4d90f3ba9f"
  },
  {
    "url": "assets/js/26.6daaf3a9.js",
    "revision": "d8cbf46c8f05161e1e76717e420aa160"
  },
  {
    "url": "assets/js/27.28ed80e5.js",
    "revision": "c6d32ee1eba7a0825a3ad59391097588"
  },
  {
    "url": "assets/js/28.61893c86.js",
    "revision": "4e220a13a24f14b5ddc009af402d97d2"
  },
  {
    "url": "assets/js/29.e7950765.js",
    "revision": "45fad0bdb15bfbc2eefe53dc3d16a4fc"
  },
  {
    "url": "assets/js/3.539f43a8.js",
    "revision": "f6677b02d4d6c68a22d378f3bbcb0962"
  },
  {
    "url": "assets/js/30.44de71e4.js",
    "revision": "2d59200d064388c254e077a698c73546"
  },
  {
    "url": "assets/js/31.f09ed9f5.js",
    "revision": "41d3a6c798ce08a2ce41d08cff94e878"
  },
  {
    "url": "assets/js/32.b8d80cd0.js",
    "revision": "f158edfd2a3c0926cba3057501c4828f"
  },
  {
    "url": "assets/js/33.34076987.js",
    "revision": "22f7d44007e1cc180463f3f42b50491e"
  },
  {
    "url": "assets/js/4.214d31d1.js",
    "revision": "0acb4b3d5b200f954e130c012d9ec412"
  },
  {
    "url": "assets/js/5.8f318332.js",
    "revision": "5c9befd5434fd9eca6a7308d1a616cfc"
  },
  {
    "url": "assets/js/6.200002e0.js",
    "revision": "1250560364cc17e455c6112681a6da33"
  },
  {
    "url": "assets/js/7.dfaa098d.js",
    "revision": "825a84f65c533e905a4485403f387e6b"
  },
  {
    "url": "assets/js/app.afa7cacc.js",
    "revision": "9fa11228c644b9bb30d20173fee6b75e"
  },
  {
    "url": "assets/js/vendors~docsearch.c6e69708.js",
    "revision": "1f0e2c5a040eb5b6fbc0855ca08c6867"
  },
  {
    "url": "en/get-started.html",
    "revision": "d765ee32dbec7df70725d2c4cdc96ae6"
  },
  {
    "url": "en/index.html",
    "revision": "86fef71643ab08afb230b553e1069c3e"
  },
  {
    "url": "finance.html",
    "revision": "b4d9ad1df8a819291c1d7800c247d94a"
  },
  {
    "url": "get-started.html",
    "revision": "ede5fb5730e2ae0fc22a3f01fbc59a8f"
  },
  {
    "url": "hire.html",
    "revision": "6db8801655a510270b9db9402847b858"
  },
  {
    "url": "index.html",
    "revision": "11cc82fccdd0248570cf5e1837ce926f"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "manage-team.html",
    "revision": "795c6741389cae7a87fcb4a36479dead"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "d0d4aaea5eec2ad97957ae9a507e2cb0"
  },
  {
    "url": "members.html",
    "revision": "0c454f1e924836bf9f33e1d34706648a"
  },
  {
    "url": "shipinhao.jpg",
    "revision": "8f2ac5acd2aaef3844b900e8813c6d1e"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "54940da70ee9fc9b6fff2bd150394bcb"
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

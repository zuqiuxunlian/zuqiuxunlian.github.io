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
    "revision": "fa3ae2f980a503eb28e4f4a9e16f6e33"
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
    "url": "assets/js/1.ee615ef0.js",
    "revision": "893fbbed072cdae6d96e29aa05f85c46"
  },
  {
    "url": "assets/js/10.7b828590.js",
    "revision": "070751253c68a453ce22ac17293d0163"
  },
  {
    "url": "assets/js/11.bf0e534b.js",
    "revision": "e5122267c101ea90bbd6e0c0826d92b6"
  },
  {
    "url": "assets/js/12.53d9935a.js",
    "revision": "3a3e449bd6a2f4a9036b6d2bb5201d8e"
  },
  {
    "url": "assets/js/13.fe912ac3.js",
    "revision": "0699c7bda5dd13ec7f2a205da6ff3022"
  },
  {
    "url": "assets/js/14.51e42c36.js",
    "revision": "c3ed41d1b8c33ec40762f4c98df31be4"
  },
  {
    "url": "assets/js/15.784a359e.js",
    "revision": "b77c6487ad4758646b9932861d3409ea"
  },
  {
    "url": "assets/js/16.5bad9e03.js",
    "revision": "00f98d51cc8865894b4b6e4042cc18bf"
  },
  {
    "url": "assets/js/17.6dd35814.js",
    "revision": "884abec74fe280bccaf63653fc1afa9a"
  },
  {
    "url": "assets/js/18.c8266955.js",
    "revision": "c0c61d8a77d0b6657d2bda181aa1e4f5"
  },
  {
    "url": "assets/js/19.042ec2e3.js",
    "revision": "173df447d64771914136b24c1a57bb52"
  },
  {
    "url": "assets/js/2.62079a88.js",
    "revision": "c0707a7c48036e80f6d237478fe2bef8"
  },
  {
    "url": "assets/js/20.1ae453ad.js",
    "revision": "82855dfaad63898afe86a13d4c246f94"
  },
  {
    "url": "assets/js/21.becb3fa0.js",
    "revision": "c4f0f3418d082e6b1d409d3fd462711e"
  },
  {
    "url": "assets/js/22.5211354b.js",
    "revision": "d859cdc7ef4ed88b848f2a24dfe0b6dd"
  },
  {
    "url": "assets/js/23.154b2a43.js",
    "revision": "1eff2f532bbd13dc0d783290205a5840"
  },
  {
    "url": "assets/js/24.6ffd17cc.js",
    "revision": "cc1e304a2ca9c55e4865b4cc703c57e8"
  },
  {
    "url": "assets/js/25.43e402ae.js",
    "revision": "b0a4acccbef93bd7c31156b8e10c89e6"
  },
  {
    "url": "assets/js/26.469bbd67.js",
    "revision": "1b6b13c8aebe1499102a48145ddd3c0d"
  },
  {
    "url": "assets/js/27.9a152656.js",
    "revision": "b4e8161a53de25b0a58e161723c3d6e7"
  },
  {
    "url": "assets/js/28.421ba71f.js",
    "revision": "5d8cc14cc90fce4a7f3b35cbafea8d35"
  },
  {
    "url": "assets/js/29.fa52b447.js",
    "revision": "c691567a7d7e8502c6c8a4a524a02b0b"
  },
  {
    "url": "assets/js/3.8127e179.js",
    "revision": "5081211ed24b96da5d68e7bf707905a6"
  },
  {
    "url": "assets/js/30.2551d6bc.js",
    "revision": "dc16fd22e1c4e08ff1b3817c99c80cf7"
  },
  {
    "url": "assets/js/31.f3abea9c.js",
    "revision": "44303c391a791a6cdb79d3bae8cd0fd4"
  },
  {
    "url": "assets/js/32.9751e596.js",
    "revision": "7c86bd7f8525c135596e9ef2b9df0c89"
  },
  {
    "url": "assets/js/33.cf535bbc.js",
    "revision": "2514e3b3248ff589f5b0ea4a17234da8"
  },
  {
    "url": "assets/js/4.d9142f65.js",
    "revision": "fcdff6c4c6969edf61fbdee67a3790fa"
  },
  {
    "url": "assets/js/5.3d473114.js",
    "revision": "318454ffab9bca66a26ce1b3d8c05682"
  },
  {
    "url": "assets/js/6.8633606c.js",
    "revision": "a198d50339fd2d2d57447f6919fc5433"
  },
  {
    "url": "assets/js/7.d3ed8db5.js",
    "revision": "113cf4d1322f5644e264ec87034e7447"
  },
  {
    "url": "assets/js/app.8e3b594c.js",
    "revision": "9d2ae79a387bbb3803d434b4c107d409"
  },
  {
    "url": "assets/js/vendors~docsearch.9d121541.js",
    "revision": "9ca4aed877b7e93b4ae7be8f9d1fed93"
  },
  {
    "url": "en/get-started.html",
    "revision": "b8def9bb511fe51e93c3dfacb4978097"
  },
  {
    "url": "en/index.html",
    "revision": "450273b78ce3a2fe8a468f95f9d3d4be"
  },
  {
    "url": "finance.html",
    "revision": "5cabaa9db2a8ba99c076c28a45e501bd"
  },
  {
    "url": "get-started.html",
    "revision": "73dc845c44704adc61ccbe5a3c6fb932"
  },
  {
    "url": "hire.html",
    "revision": "670775d4c9ba129eb4000935fa638a56"
  },
  {
    "url": "index.html",
    "revision": "ddfa838381e89b6d6f34c6fa9eea9325"
  },
  {
    "url": "logo.png",
    "revision": "9c64d5cc7f10deba965fb55604b8abce"
  },
  {
    "url": "manage-team.html",
    "revision": "3ee206c1d0f5c1d456003bae4c7d2a9f"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "e188414bf83f3e4f70f2e15cad6273bf"
  },
  {
    "url": "members.html",
    "revision": "d8d8688ca9dde5a8e0d4772ca1ccc99f"
  },
  {
    "url": "shipinhao.jpg",
    "revision": "8f2ac5acd2aaef3844b900e8813c6d1e"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "fda19f0322b65163ab3fcb223fd27ea5"
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

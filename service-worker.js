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
    "revision": "df234d3e6817c55282fc6b6b9304ad4f"
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
    "url": "assets/img/Juca.331cee0a.jpg",
    "revision": "331cee0a94d59a6017209f6010a89eb0"
  },
  {
    "url": "assets/img/Maciel.f591c5f3.jpg",
    "revision": "f591c5f33f541365380373f73fc50700"
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
    "url": "assets/js/1.57df3ade.js",
    "revision": "e8a352ca9a97608456dfb9f15f86a31a"
  },
  {
    "url": "assets/js/10.4c156494.js",
    "revision": "d33d3ec5df508adfac8e29a4de5b27cb"
  },
  {
    "url": "assets/js/11.18c22bab.js",
    "revision": "b24605c758623d60d77eac5b782f87e0"
  },
  {
    "url": "assets/js/12.53d9935a.js",
    "revision": "3a3e449bd6a2f4a9036b6d2bb5201d8e"
  },
  {
    "url": "assets/js/13.4ec61aab.js",
    "revision": "bc3a417487587a3568b24fc038775033"
  },
  {
    "url": "assets/js/14.1a96f8fa.js",
    "revision": "edf8c9c2fa72764943baca1dc7d53827"
  },
  {
    "url": "assets/js/15.2c94e80a.js",
    "revision": "5c1456df57b11ef324ec1cdfca391dea"
  },
  {
    "url": "assets/js/16.3a9857fb.js",
    "revision": "3af5daf91e236a59ea39c9c8f14e56bf"
  },
  {
    "url": "assets/js/17.6dd35814.js",
    "revision": "884abec74fe280bccaf63653fc1afa9a"
  },
  {
    "url": "assets/js/18.e0d57a72.js",
    "revision": "9474fd4ceae11235c31174bcd5695094"
  },
  {
    "url": "assets/js/19.55ee838f.js",
    "revision": "6a0672462017b550f8bc2eb0b9bc63ff"
  },
  {
    "url": "assets/js/2.e1b1b467.js",
    "revision": "f16d9d9840048dcb91be330334affaba"
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
    "url": "assets/js/22.26b0278d.js",
    "revision": "e9837c9d2c0341d97959ad9a092e8e2f"
  },
  {
    "url": "assets/js/23.17c20462.js",
    "revision": "135ab4805ae9a3ecae2aa9d62927baea"
  },
  {
    "url": "assets/js/24.7cdd35d4.js",
    "revision": "6b13938054ba87bbf676d98e6a1c38a5"
  },
  {
    "url": "assets/js/25.e2f6cd72.js",
    "revision": "c7f96e75f64e432aa4c1d57d2533fd32"
  },
  {
    "url": "assets/js/26.48337de9.js",
    "revision": "4dcd672393c8caca82810c0edb65187d"
  },
  {
    "url": "assets/js/27.3be78ba3.js",
    "revision": "3d17fd4790bb1b633c0303b1828736a3"
  },
  {
    "url": "assets/js/28.f64605d3.js",
    "revision": "5b368668d4d0481e59b772f8478c66d6"
  },
  {
    "url": "assets/js/29.3d4efdb5.js",
    "revision": "1569aa9376645663f649e4689791ea2d"
  },
  {
    "url": "assets/js/3.dd4d52b7.js",
    "revision": "fba43f51c5c68daa9ecbcc281e1f7548"
  },
  {
    "url": "assets/js/30.4f1173b6.js",
    "revision": "e40d7c40b656bc6e2e855ef31accd665"
  },
  {
    "url": "assets/js/31.714757c2.js",
    "revision": "3cbf4d4f9635e8c271b2c63d15a7b674"
  },
  {
    "url": "assets/js/32.aa8d907a.js",
    "revision": "ea66c9edb87664a25cffc013b217de6c"
  },
  {
    "url": "assets/js/33.3106bc6e.js",
    "revision": "a87ecb9557b22d72a65e73c7f8d9fb7b"
  },
  {
    "url": "assets/js/4.f93f61db.js",
    "revision": "2f81959547a85b1ce4890e23af5ebcf1"
  },
  {
    "url": "assets/js/5.1813b5ac.js",
    "revision": "4db2e2b65aa569867c9ede97b92127dc"
  },
  {
    "url": "assets/js/6.7af6cb64.js",
    "revision": "e0823075b50a244ebdbda972abefa7d8"
  },
  {
    "url": "assets/js/7.cad087f9.js",
    "revision": "d738d15eaf97185215340df6af6e32b1"
  },
  {
    "url": "assets/js/app.07cb809a.js",
    "revision": "b06a392fbcd0e1328e9fa0c883d625bf"
  },
  {
    "url": "assets/js/vendors~docsearch.ca22f6c5.js",
    "revision": "494ab4d4ff844ab7138c7e426ff2c378"
  },
  {
    "url": "en/get-started.html",
    "revision": "17bdc33d9e70616d98f228fd692aaf89"
  },
  {
    "url": "en/index.html",
    "revision": "c5c19a8e642109aa9a421098d8cf194d"
  },
  {
    "url": "finance.html",
    "revision": "1e11a48d06c5360f0019b66a9a825bd0"
  },
  {
    "url": "get-started.html",
    "revision": "ea0e3d56d2b829fbd6104b30fb96191e"
  },
  {
    "url": "hire.html",
    "revision": "5c8fa21f4204a952c40fa03db1e7f2e0"
  },
  {
    "url": "index.html",
    "revision": "ad50439877853285d06f6466088d95c5"
  },
  {
    "url": "logo.png",
    "revision": "03ea45a1c37ffa4e41dab04e0b2a4fda"
  },
  {
    "url": "manage-team.html",
    "revision": "2bd7f431d9365adb24ce98a61cc5b3eb"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "c4cf7a8c7732bed088da307bf388053c"
  },
  {
    "url": "members.html",
    "revision": "17436a1db463a6fb7feff22b9dd0701b"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "ad586bbf1815add9a9dfbe908d4016cb"
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

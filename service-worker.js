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
    "revision": "1d801204ce6813e4c8dbccf92456b35e"
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
    "url": "assets/js/11.18e78333.js",
    "revision": "07383ceca0b4365f8986b46d65c2f59d"
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
    "url": "assets/js/18.9a8c77d4.js",
    "revision": "c23327e13e9c401200d51506390ede91"
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
    "url": "assets/js/22.b3badb9b.js",
    "revision": "148734b8feac89317a7f8c54c698ec59"
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
    "url": "assets/js/26.dde2a3bb.js",
    "revision": "a21d22ba705bdd1e9de2a3899f7099b9"
  },
  {
    "url": "assets/js/27.9a152656.js",
    "revision": "b4e8161a53de25b0a58e161723c3d6e7"
  },
  {
    "url": "assets/js/28.20852f12.js",
    "revision": "3d482f0bbfd3385191183c7d086ce939"
  },
  {
    "url": "assets/js/29.86ec77a0.js",
    "revision": "1480993a58df0c00de1dc13f9d326ce0"
  },
  {
    "url": "assets/js/3.85f7c176.js",
    "revision": "a7a0fc6a089f59bd1466c07c3299c763"
  },
  {
    "url": "assets/js/30.e8e42721.js",
    "revision": "d0fbe8c522ac4e41fe057528b20ed672"
  },
  {
    "url": "assets/js/31.714757c2.js",
    "revision": "3cbf4d4f9635e8c271b2c63d15a7b674"
  },
  {
    "url": "assets/js/32.d1dbcc91.js",
    "revision": "a9e4851d66ce0b2e1d1d7f62a64077b7"
  },
  {
    "url": "assets/js/33.d2ff3d39.js",
    "revision": "226669dc8c4beb9b379f7b47625e2407"
  },
  {
    "url": "assets/js/34.203d0895.js",
    "revision": "840a82a9f36753d31daf237b8d669fd1"
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
    "url": "assets/js/app.cf3a899c.js",
    "revision": "d00afe5e3f206acdb76df42e966e4177"
  },
  {
    "url": "assets/js/vendors~docsearch.65d77edd.js",
    "revision": "7f9ec815a4ee7409f932eefd9f649e79"
  },
  {
    "url": "en/get-started.html",
    "revision": "7d233c8126749c954d0bb5161db02807"
  },
  {
    "url": "en/index.html",
    "revision": "69705e071292117d5b7e1cac0401d17e"
  },
  {
    "url": "finance.html",
    "revision": "679c96c3951d66f84aafba57d94680c2"
  },
  {
    "url": "get-started.html",
    "revision": "4a0dfecffc191e86dccd01282851a85e"
  },
  {
    "url": "hire.html",
    "revision": "b055d7a1cdbd8bb6f0d4e094c50ec214"
  },
  {
    "url": "index.html",
    "revision": "0956d44850f0528ea34514d470545a76"
  },
  {
    "url": "logo.png",
    "revision": "03ea45a1c37ffa4e41dab04e0b2a4fda"
  },
  {
    "url": "manage-team.html",
    "revision": "4d9f56ef44c092e04842816ffbf4bda7"
  },
  {
    "url": "medical-emergency-action-plan.html",
    "revision": "ce16524169adb687ffcf4ce45691ebe3"
  },
  {
    "url": "members.html",
    "revision": "9cfe5d5750db3409acc01974b2eee884"
  },
  {
    "url": "schedule.html",
    "revision": "b5c9ea04f3f7f8b3c32605d4835854b7"
  },
  {
    "url": "wechat-official-accounts.html",
    "revision": "68f6cdda46e91bfbd80ae841b042875c"
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fc3669e70454357e1b222f8adbfb23ed",
"assets/AssetManifest.bin.json": "bad23acdc333c55f349e0c29498cc7b3",
"assets/AssetManifest.json": "3664c3aa225ed48cd75a0370ac7740a3",
"assets/assets/circles_1.png": "82f27e73fb85b595def59df2097d2d6b",
"assets/assets/logo.png": "afbf863a6a1a449f3049a772faa447b0",
"assets/assets/me.png": "27144925889e00a3c84e576358ed50a0",
"assets/assets/placeholder.png": "1df0fdd672cbe7bb378f56dfa0f1410f",
"assets/assets/portfolios/3i_mobiss.jpg": "fae09d94714650a2cbfe71f0b4a518f5",
"assets/assets/portfolios/absensi_labusel.jpg": "c708cca0a5e4f47cc392868c0107bac4",
"assets/assets/portfolios/aduakting.jpg": "f93a4b999381ce37fe054893eb905f59",
"assets/assets/portfolios/artenov_parents.jpg": "7bc0acc4bfee3f74db127a6d5cc5f066",
"assets/assets/portfolios/artenov_student.jpg": "8809fa553d4367fe3eab63008bb59f2b",
"assets/assets/portfolios/artenov_teacher.jpg": "4060491a7f699c439e416e798cc51f85",
"assets/assets/portfolios/bmp.jpg": "856b4884fc6cd0a9e35ee591b35dc3c3",
"assets/assets/portfolios/car_mobile_spaj.jpg": "690bd131152d724385abd91b7bd4a055",
"assets/assets/portfolios/feedback.jpg": "68327c06efd0b11c839203c28d999ea1",
"assets/assets/portfolios/labuan_bajo.jpg": "74e45bc5485046f6d114d70b0cfdbde3",
"assets/assets/portfolios/lolbooth.jpg": "caa0515565abfec15d9bb7b7fca9b703",
"assets/assets/portfolios/lolphotobooth.jpg": "e2cbe7507d208296e366c9da573d8851",
"assets/assets/portfolios/majalah_harian.jpg": "a7826fb892ec179a0a8926e65851058d",
"assets/assets/portfolios/masteronline.jpg": "e2272341edf74aa1d5f4f437e8d83088",
"assets/assets/portfolios/nikha.jpg": "ba82abb7225e7096cc4c0c0a40ec286d",
"assets/assets/portfolios/ppmwt.jpg": "0e58124132aaab89f553654f3571bbc1",
"assets/assets/portfolios/svprt.jpg": "750d47b1c5cbecd14704ff097b168890",
"assets/assets/skills/ffmpeg_logo.png": "d9e0c8acf938e19652bda9a50cadf3ea",
"assets/assets/skills/firebase_logo.png": "55eb1fdf2aabc7c318baddd3d70e6a89",
"assets/assets/skills/flutter_logo.png": "559e4d30a1835bdba792c074adec07a5",
"assets/assets/skills/html_css_logo.png": "c039f0940eca08b64f4b6e7d4838f69f",
"assets/assets/skills/js_logo.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/skills/kotlin_logo.png": "714f8db8b100b67ed2094090f51c5699",
"assets/assets/skills/mysql_logo.png": "c89c837abfabd927ecb42421b6fcd576",
"assets/assets/skills/net_logo.png": "eecc6e2fd427a4627f1a468ed061acaf",
"assets/assets/skills/nextjs_logo.png": "0bf6a51e62993abc48f6e5b62e00dbc7",
"assets/assets/skills/node_logo.png": "846a64a94ea7123a36298175cef9d931",
"assets/assets/skills/postgre_logo.png": "9bde80b6898c214e7e643d2fe4c43b0d",
"assets/assets/skills/qt_logo.png": "9c28be555dc1c4179cf41f2c8cda8883",
"assets/assets/skills/raspberry_pi_logo.png": "938076431983b4e95a8fe1dc6f751b13",
"assets/assets/skills/react_logo.png": "b5226e0f22b473738b88d67c73ce4fb9",
"assets/assets/skills/swift_logo.png": "89f25e636acae5059465ba313f0bf6ac",
"assets/assets/skills/tailwind_logo.png": "5f7155ff3856596c4f9eb5221522f39e",
"assets/assets/skills/xamarin_logo.png": "6f4601f1e29a18ab1f2c9185107642b7",
"assets/assets/videos/5-dicE95rDg.jpg": "e8d26b81804656ac3954344b1a507433",
"assets/assets/videos/iDESi4EQuaU.jpg": "c3e6a4d2fb83cd15a96bc2baa0df0a0f",
"assets/assets/videos/KtrgA8gjIcc.jpg": "e354972c7d2d980dfa39c84c366ac675",
"assets/assets/videos/M21kag6XWdI.jpg": "e49756bd47657c8b40c87eca26664099",
"assets/assets/videos/OleoTZeGHl8.jpg": "08be6dcb34e8c6a9d4b7d1e25365fa90",
"assets/assets/videos/owQutUYNPIs.jpg": "13d695633df7c1889d29abfb8e686586",
"assets/assets/videos/sb8NM42oN_M.jpg": "2ae93dae1c734021dc655c5167a7bc43",
"assets/assets/videos/XAvl3hrJ4gc.jpg": "420e5f7e9b7ecc001a3af958263c24b1",
"assets/assets/videos/XRxRtgJWhjU.jpg": "50849ab847e6f7997b0c7dfce6d4aa54",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "faffaecab5e2541c278ba3042f56a796",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d4757bdeeeb0db634c15e836dc7bbd26",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7d7f57f383ddf1f6e13bae68b7b290fa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "3b62018cf9ff1b4e4edf6ab4ecb1abd5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2e0f47e121e6154cfd8d1b4f73a1820c",
"icons/Icon-192.png": "a6aa00d09de20fb940fa84171b58c6f4",
"icons/Icon-512.png": "90696e6def30c65ca8df5034f8c98b1d",
"icons/Icon-maskable-192.png": "9a9fb87578bfd29fe2a93a9b07dec8ca",
"icons/Icon-maskable-512.png": "ba3a00d310b9b2548055f01b9f140add",
"index.html": "8313751c4f66a0a780bd3569bc83aacf",
"/": "8313751c4f66a0a780bd3569bc83aacf",
"main.dart.js": "104db9f73f470e4d64e656aa1f026b9a",
"manifest.json": "7c3cd4266489990be70faf49ddc4af0e",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

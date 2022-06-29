'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4687b5dc84b5d0b52e09c96505186633",
"index.html": "04b7bbf3f58488bad95687d342dc762e",
"/": "04b7bbf3f58488bad95687d342dc762e",
"main.dart.js": "824d44d164ed89572d8a3bab732612e3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4615bab42af90fac71e7ba4486b6c738",
"assets/AssetManifest.json": "2d434289fa6dc2f6209cdcc548508393",
"assets/NOTICES": "87e28338249486939f009aece96c24e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/riv/success-check.riv": "dc7999d252e6512c467a6a8e7deb1942",
"assets/assets/riv/loading-rave.json": "a1a5d005fa9d57680ef6975fcc58bf91",
"assets/assets/logo/rave_by_stickearn_2.png": "ddf7c7abadcdc7adc521cc51294e4c46",
"assets/assets/logo/main_rave_logo.png": "358c3aefb4d7a4f90dcda68a1e91f484",
"assets/assets/logo/rave_by_stickearn_logo.png": "f6ed421f575eb1ce13435ff75ac60533",
"assets/assets/icons/upload_active.png": "cc56d1a7a7e23598dfb26ee2e6543bd9",
"assets/assets/icons/angle_up_icon.png": "4d95abae3d0b03a22481a35d9ca5cee6",
"assets/assets/icons/ic_twitter.svg": "1adba2f8c7d58774f7089d53759fc7e4",
"assets/assets/icons/ic_equalizer.svg": "58ae132c489f7da3eb120a68af744484",
"assets/assets/icons/link_icon.png": "11149e1304b7109cea3a78faf60113a4",
"assets/assets/icons/ic_facebook.svg": "b26cea39037988d51e9ff2b9725951bb",
"assets/assets/icons/ic_tiktok.svg": "674233266c257360b4f682b0c7cbf136",
"assets/assets/icons/do_icon.png": "f1cc9eb054252c63d5996d4604d1ba3b",
"assets/assets/icons/instagram_icon.png": "97bd5b3589c7a4f8cc488b9ad82d2358",
"assets/assets/icons/dont_icon.png": "db3ad444f3451721156c319b146a4c86",
"assets/assets/icons/tiktok_icon.png": "3a427b5d745afe4a5a0b5ee30c44d434",
"assets/assets/icons/upload_icon.png": "f25469fe1e887f7315dd127c36c44518",
"assets/assets/icons/batalkan_icon.png": "0ce9d7c1471da586421180559d106705",
"assets/assets/icons/search_icon.png": "c046fd628adf74f37f2c27cac8d56d9a",
"assets/assets/icons/ic_youtube.svg": "72bca6b7472d92938ec218053be3c526",
"assets/assets/icons/ic_launcher.png": "e4f81026089384407c1682212df66c85",
"assets/assets/icons/komisi_icon.png": "f1e114ca0fb18d882f525dfe5450d4ad",
"assets/assets/icons/facebook_icon.png": "3cb042bca4a83e51162c0bb9407572eb",
"assets/assets/icons/clock_icon.png": "d619dd8c7d39403590de43cc8fa1ad5f",
"assets/assets/icons/money_icon.png": "effb21404efba3dfd2b0805650c45ab3",
"assets/assets/icons/upload_inactive.png": "b895ca8af8209f4a20410cbeeb9683a2",
"assets/assets/icons/angle_down_icon.png": "0558ff062586991f311c607fc33c416a",
"assets/assets/icons/ikut_campaign_icon.png": "664d2d3e8757b31943e1ee45e429ae1e",
"assets/assets/icons/plus_icon.png": "6109c7eaf12c3a8f1ddd636e817906d6",
"assets/assets/icons/twitter_icon.png": "8d4af3144b5ae7577478ead8f19320a9",
"assets/assets/icons/copy_icon.png": "8f7be5df21fbb60e5030727583b6d900",
"assets/assets/icons/preview_icon.png": "bee1c3dcbbcb53406ac652cf89d691ca",
"assets/assets/icons/ic_instagram.svg": "6ba503c59e80117435dd83f2a927f83b",
"assets/assets/nav/megaphone_inactive.png": "4468b68c3aeae50f6f2869e4828cd94e",
"assets/assets/nav/account_active.png": "cf3bdd8ee66de83a9654744a22dc0496",
"assets/assets/nav/notification_active.png": "0a662cc284deb31677c9b8100719c70f",
"assets/assets/nav/project_active.png": "7a0d2ce73948acb23387f8167f3a6b0a",
"assets/assets/nav/notification_inactive.png": "628174e270ad4764754931ba5b5ad32a",
"assets/assets/nav/megaphone_active.png": "ec28a77c472ecf9fb0925fcb7a8530d1",
"assets/assets/nav/project_inactive.png": "69e223b9e4080685404b6832b3b7d150",
"assets/assets/nav/account_inactive.png": "f77035e9008ceeada90339034cde5959",
"assets/assets/onboarding/onboarding_1.png": "b459053bfd1c0f1f7f9fe2e4aaa3e455",
"assets/assets/onboarding/test1.png": "e2e1830e2e07dfcd156d305cdd6d17c3",
"assets/assets/onboarding/onboarding_3.png": "391f8a16ebab6149c7c25644520f4f11",
"assets/assets/onboarding/onboarding_2.png": "3eab5b1c506ea395aabb147c2e10a049",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

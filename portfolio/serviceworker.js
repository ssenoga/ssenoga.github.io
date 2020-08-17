const self = this; //just not to be confused what self is

//cache name
const CACHE_NAME = "V2";

//assets to cache
// const CACHE_ASSETS = ["index.html"];

// 1 step: Install the service worker
self.addEventListener("install", (e) => {
  console.log("Installing");
  //   e.waitUntil(
  //     caches
  //       .open(CACHE_NAME)
  //       .then((cache) => cache.addAll(CACHE_ASSETS))
  //       .then(() => self.skipWaiting())
  //   );
});

// 1 step: activate the service worker
self.addEventListener("activate", (e) => {
  //remove all the old caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            // delete the old caches
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 1 step: fetch the service worker
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //make a clone or a copy of the entire response
        const resClone = res.clone();
        //open cache
        caches.open(CACHE_NAME).then((cache) => {
          //add the entire response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request).then((res) => res))
  );
});

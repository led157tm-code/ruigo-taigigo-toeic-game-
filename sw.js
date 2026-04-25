const CACHE_NAME = "toeic-app-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./correct.mp3",
  "./wrong.mp3",
  "./bgm.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
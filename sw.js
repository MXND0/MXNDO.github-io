const CACHE_NAME = 'neon-creator-v1';
const urlsToCache = [
  const urlsToCache = [
    '/',
'/index.html',
'/manifest.json',
'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&family=Inter:wght@300;400;500;600;700&display=swap'
  ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

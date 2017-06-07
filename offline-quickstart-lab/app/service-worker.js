(function() {
  'use strict';

  var CACHE_NAME = 'static-cache';

  var urlsToCache = [
    '.',
    'index.html',
    'styles/main.css'
  ];

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });

  // TODO 2.2 - Fetch from the cache

})();

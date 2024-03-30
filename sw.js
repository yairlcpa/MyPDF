// This code executes in its own worker or thread
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {return cache.addAll([
      "./", "./index.js", "./main.js", "./style.css",
      "./src/pdf-lib.js", "./src/bootstrap.css", 
      "./src/logo.png", "./src/logo144.png", "./src/logo192.png", "./src/logo512.png",
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      // "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
})
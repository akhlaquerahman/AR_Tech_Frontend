// Service Worker stub: unregisters legacy/stale workers to eliminate 404 errors in browser
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.registration
      .unregister()
      .then(() => self.clients.matchAll())
      .then((clients) => {
        clients.forEach((client) => {
          if (client.url && "navigate" in client) {
            // No reload needed; legacy worker deregistration completes cleanly
          }
        });
      })
  );
});

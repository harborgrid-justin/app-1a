// FESW001.js

// This checks if service workers are supported in the current browser.
if ('serviceWorker' in navigator) {

    // Registering the service worker
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
        console.error('Service Worker registration failed:', error);
    });

}

/**
 * Function to handle the installation of the service worker.
 */
self.addEventListener('install', (event) => {
    // Here, you can perform any actions required during the install phase, like caching static assets.
    event.waitUntil(
        caches.open('app-static-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/app.js',
                // ... any other assets or scripts ...
            ]);
        })
    );
});

/**
 * Function to handle fetch requests.
 * This can serve cached content, or fetch from the network.
 */
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

/**
 * Function to handle the activation of a service worker.
 * This is typically used to clean up old caches.
 */
self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['app-static-v1'];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


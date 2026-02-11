const CACHE_NAME = 'control-teca-v1.0.0';
const urlsToCache = [
  '/control-carga-carrillo/',
  '/control-carga-carrillo/index.html',
  '/control-carga-carrillo/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Error al abrir cache:', err);
      })
  );
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de cache: Network First, fallback to Cache
self.addEventListener('fetch', event => {
  // Solo cachear solicitudes GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Verificar si recibimos una respuesta válida
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clonar la respuesta
        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(() => {
        // Si la red falla, intentar obtener de cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Si no está en cache, retornar página offline personalizada
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/control-carga-carrillo/index.html');
            }
          });
      })
  );
});

// Manejo de mensajes desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Sincronización en segundo plano (para futuras funcionalidades)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-viajes') {
    event.waitUntil(syncViajes());
  }
});

async function syncViajes() {
  // Funcionalidad futura para sincronizar datos cuando haya conexión
  console.log('Sincronizando viajes...');
}

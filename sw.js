var C="servis-v4";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","./index.html","./manifest.json","./ikon-192-2.png","./ikon-512-2.png"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(h){h.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});

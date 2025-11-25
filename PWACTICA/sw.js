const cache_name='portafolio-Leo';
self.addEventListener('install', e => {
const cacheProm = caches.open(cache_name).then(cache=>{
  return  cache.addAll([
    '/',
    '/index.html',
    '/css/style.css',
    '/img/logo.png',
    '/js/app.js',
    '/js/script.js']);
});
e.waitUntil(cacheProm);
});
// cache only
self.addEventListener('fetch', e => {
const respuesta = caches.match(e.request).then(res =>{
    if (res) return res;
    // no existe
    console.log('No existe', e.request.url);
    return fetch(e.request).then(newRes =>{
        caches.open(cache_name).then(cache => {
            cache.put(e.request, newRes);
        });
        return newRes.clone();
    });
});
e.respondWith(respuesta);
});




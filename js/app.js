if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('./sw.js');
}
if (window.caches) {
    caches.open('portafolio').then(cache=>{
            cache.addAll([
                '/index.html',
                '/css/style.css',
                '/img/logo.png'

            ]).then(()=>{
               cache.put('index.html', new Response('funciona'))
            });
    })
    
}
caches.keys().then(keys => {
    console.log(keys);
} )

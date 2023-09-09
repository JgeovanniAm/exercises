let point = [
  '/',
  '../index.html',
  '../manifest.json',
  '../js/script.js',
  '../css/style.css',
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('jimmyv1')
      .then(function (cache) {
        console.log('opened cache')
        return cache.addAll(point)
      })
  )
})

self.addEventListener('fetch', function (event) {
  console.log('fetch jimmy event for ', event.request.url)
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log('found jimmy  ', event.request.url)
        return response
      }
      return fetch(event.request)
    }).catch(function (error) {
      console.log('Error jimmy fetching data from network')
      console.log(error)
      return new Response('Not Found', { status: 404 })
    })
  )
})
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");


// custom
workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.css",
    "revision": "11ab21f4d59d56bd76be56943373cfac"
  },
  {
    "url": "imagenes/001-think.png",
    "revision": "23530aa70683b3cb8540720ef61c31a9"
  },
  {
    "url": "imagenes/002-paint.png",
    "revision": "804d84e586a266396c958bce0208ed10"
  },
  {
    "url": "imagenes/003-print-proof.png",
    "revision": "d597cdf3e35e334e7529bd6c6c42f961"
  },
  {
    "url": "imagenes/004-brainstorm.png",
    "revision": "888ed128cf044ae98a113872f1fa07e3"
  },
  {
    "url": "imagenes/005-merge.png",
    "revision": "184c406372b0e792e714ff67c8778982"
  },
  {
    "url": "imagenes/006-notes.png",
    "revision": "741bbf4285e4eaee4ba3a1d029edbafe"
  },
  {
    "url": "imagenes/007-ux-design.png",
    "revision": "4144279f299b55e82f6413a737b93c33"
  },
  {
    "url": "imagenes/008-creativity.png",
    "revision": "3016f90ae21f483e0c2064a78d30466a"
  },
  {
    "url": "imagenes/010-responsive.png",
    "revision": "547a71e9fbd4cde95d3a4d9069e59b48"
  },
  {
    "url": "imagenes/011-notebook.png",
    "revision": "facb1e10f91158f517a1bd570740f7e6"
  },
  {
    "url": "imagenes/012-game-development.png",
    "revision": "27bf20a615e33a4d5180da8a2fd305cb"
  },
  {
    "url": "imagenes/013-exam.png",
    "revision": "77b430c8ff9f96fefa9a7cd008dd8423"
  },
  {
    "url": "imagenes/ask.png",
    "revision": "8be60941c1850ac96234aa7db9a724d7"
  },
  {
    "url": "imagenes/goblin.png",
    "revision": "28d3f8ad7a068920f94824e80636b04b"
  },
  {
    "url": "imagenes/information.png",
    "revision": "0bd38917c334a485b16dc1a2cd69ee54"
  },
  {
    "url": "imagenes/light1.png",
    "revision": "d84aef14121f4abe8c64238566f792f5"
  },
  {
    "url": "imagenes/question.png",
    "revision": "3719bb6dd3e076f7423c7de60078ee5b"
  },
  {
    "url": "imagenes/robot.png",
    "revision": "5e1b6ab7c693aa4afdcc1bcf2195ac60"
  },
  {
    "url": "imagenes/yeti.png",
    "revision": "e6d73d95252fe68c9269093ecb9a9625"
  },
  {
    "url": "imagenes/zombie.png",
    "revision": "5496703593dff6755920d5ec07a2f357"
  },
  {
    "url": "index.html",
    "revision": "de5490324f3723530902521719324f2d"
  },
  {
    "url": "js/game.js",
    "revision": "99a8025382e439037b0a1d54d2af3cfd"
  },
  {
    "url": "js/register.js",
    "revision": "a679d2fe5f07af0c56d01cdee44569e8"
  },
  {
    "url": "play.html",
    "revision": "b0ceb2367d2b1806fb635d57cfae15f1"
  }
]);
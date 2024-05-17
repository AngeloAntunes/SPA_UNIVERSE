import { Router } from './router.js'

const router = new Router()

router.add('/Home', '/pages/home.html')
router.add('/Universo', '/pages/universo.html')
router.add('/Exploracao', '/pages/exploracao.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()

window.route = (event, routeName) => {
  event.preventDefault();
  changeBackground(routeName)
  router.route()
}

function changeBackground(routeName) {
  const body = document.getElementById('custom');

  switch (routeName) {
    case 'home':
      body.style.backgroundImage = "url('/assets/mountains-universe-1.png')";
      break;
    case 'universo':
      body.style.backgroundImage = "url('/assets/mountains-universe02.png')";
      break;
    case 'exploracao':
      body.style.backgroundImage = "url('/assets/mountains-universe-3.png')";
      break;
    default:
      body.style.backgroundImage = "url('/assets/mountains-universe-1.png')";
  }
}
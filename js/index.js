import { Router } from './router.js';

const router = new Router()
router.add('/spa-universe/', "/pages/home.html")
router.add('/spa-universe/ouniverso', "/pages/ouniverso.html")
router.add('/spa-universe/exploracao', "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

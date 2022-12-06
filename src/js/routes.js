
import HomePage from '../pages/home.f7'
import NotFoundPage from '../pages/404.f7'
import QRCameraPage from '../pages/qr/camera.f7'
import QRScanPage from '../pages/qr/scan.f7'
import SignInPage from '../pages/signin.f7'
import LogInPage from '../pages/login.f7'
import GamePage from '../pages/game/index.f7'
import GameResultPage from '../pages/game/result.f7'
import CreditsPage from '../pages/credits.f7'

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/qr/camera/',
    component: QRCameraPage,
  },
  {
    path: '/qr/scan/',
    component: QRScanPage,
  },
  {
    path: '/signin/',
    component: SignInPage,
  },
  {
    path: '/login/',
    component: LogInPage,
  },
  {
    path: '/game/:id',
    component: GamePage,
  },
  {
    path: '/game/',
    component: GamePage,
  },
  {
    path: '/credits/',
    component: CreditsPage,
  },
  {
    name: 'result',
    path: '/game/result/:id',
    component: GameResultPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
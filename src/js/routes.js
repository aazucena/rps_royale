
import HomePage from '../pages/home.f7'
import NotFoundPage from '../pages/404.f7'
import QRGeneratePage from '../pages/qr/generate.f7'
import QRScanPage from '../pages/qr/scan.f7'
import SignInPage from '../pages/signin.f7'
import LogInPage from '../pages/login.f7'

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/qr/generate/',
    component: QRGeneratePage,
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
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
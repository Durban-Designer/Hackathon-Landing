
export default [
  {path: '/', component: () => import('pages/Home'),
  {path: '/Register', component: () => import('pages/Register'),

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AirsoftSystem/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AirsoftSystem"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 452, hash: '2ec3fc80793405831cf8aa6453e29ed1e9627d72d86249b3ef1b3f8d97a78124', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 965, hash: '022beec99253225a1e03d8746181709342428878766f8e2e17f91ae92c8713b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21570, hash: '5817f6e8c2ce697c6055d2875a9653f7af4099b4fdd9c82ffa21ddfb991e64dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

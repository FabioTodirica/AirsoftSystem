
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'AirsoftSystem',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AirsoftSystem"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 450, hash: '7f6e2aa6296ad5e63c89b1983bb2c26e4a4fc251972e23d43dfb7f116e6df5ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: '657ca5fc789a102fb7443793abf6345d7436391658548a1d59295d28fa65003b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

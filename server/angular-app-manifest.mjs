
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bmejbandt-tech-lang-portfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23610, hash: '8e83bcdf55e3537c4514b8820c684af7398b6599fabfff0d116cdd6b97dc7254', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17184, hash: 'efebad26b6594c8bd3f575254c6bb063e4daa3623026cb94827ecc1db2013eb7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};

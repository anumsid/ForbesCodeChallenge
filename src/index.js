// import {
//   destroyModal,
//   populatePage,
//   createPageNav
// } from './utils';
// import './index.scss';
//
// const root = document.getElementById('root');
//
// const pageNav = document.createElement('div');
// pageNav.setAttribute('id', 'pageNav');
//
// const pageView = document.createElement('div');
// pageView.setAttribute('id', 'page');
//
// const backdrop = document.createElement('div');
// backdrop.setAttribute('class', 'backdrop');
// backdrop.addEventListener('click', e => {
//   destroyModal(overlay, backdrop);
// });
//
// const overlay = document.createElement('div');
// overlay.setAttribute('class', 'overlay');
//
// root.append(pageView)
// root.append(pageNav);
// root.append(backdrop);
// root.append(overlay);
// createPageNav(pageNav, pageView, overlay, backdrop);
// populatePage(0, pageView, overlay, backdrop);

import PageNav from './Nav';
import Gallery from './Gallery';
import './index.scss';

const root = document.getElementById('root');

const initApp = async () => {
  const gallery = new Gallery();
  await gallery.populatePage({ page: 0 });
  const pageNav = new PageNav({ gallery });
  [gallery, pageNav].forEach(item => {
    root.appendChild(item.render());
  });
};

initApp();

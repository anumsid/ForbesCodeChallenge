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

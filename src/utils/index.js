import getPage from '../adapter';

const pages = [1, 2, 3, 4, 5, 6]

export const buildModal = (content, overlay, backdrop) => {
  overlay.append(content);
  overlay.style.display = 'block';
  backdrop.style.display = 'block';
}

export const destroyModal = (overlay, backdrop) => {
  overlay.innerHTML = '';
  overlay.style.display = null;
  backdrop.style.display = null;
}

export const populatePage = (page, pageView, overlay, backdrop) => {
  pageView.innerHTML = '';
  getPage(page).then(data => {
    data.map((item, i) => {
      const aTag = document.createElement('a');
      aTag.setAttribute('href', '#');

      const img = document.createElement('img')
      img.setAttribute('id', i);
      img.setAttribute('src', item.urls.thumb);

      aTag.addEventListener('click', (e) => {
        e.preventDefault();
        const displayImage = img.cloneNode();
        buildModal(displayImage, overlay, backdrop);
      });

      aTag.append(img);
      pageView.append(aTag);
    });
  })
}

export const createPageNav = (pageNav, pageView, overlay, backdrop) => {
  pages.map((p, i) => {
    const page = document.createElement('a');
    page.setAttribute('href', '#');
    page.setAttribute('class', 'page-nav');
    page.addEventListener('click', e => {
      e.preventDefault();
      populatePage(i, pageView, overlay, backdrop);
    })
    page.innerHTML = p;
    pageNav.append(page);
  })
}

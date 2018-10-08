/* eslint-disable no-new */
import Modal from '../Modal';
import Adapter from '../Adapter';

export default class Gallery {
  constructor () {
    this.pageView = document.createElement('div');
    this.pageView.setAttribute('id', 'page');
    this.adapter = new Adapter();
    this.populatePage = this.populatePage.bind(this);
    this.render = this.render.bind(this);
  }

  async populatePage ({ page }) {
    this.pageView.innerHTML = '';
    let data;
    if (process.env.debug && process.env.debug !== 'true') data = await this.adapter.getRealPage(page);
    else data = await this.adapter.getMockPage(page);

    data.map((item, i) => {
      const aTag = document.createElement('a');
      aTag.setAttribute('href', '#');

      const img = document.createElement('img');
      img.setAttribute('id', i);
      img.setAttribute('src', item.urls.thumb);

      aTag.addEventListener('click', e => {
        e.preventDefault();
        const content = img.cloneNode();
        new Modal({ content });
      });

      aTag.append(img);
      this.pageView.append(aTag);
    });
  }

  render () {
    return this.pageView;
  }
}

import Adapter from '../Adapter';

export default class PageNav {
  constructor ({ gallery }) {
    this.pageNav = document.createElement('div');
    this.pageNav.setAttribute('id', 'pageNav');
    this.adapter = new Adapter();
    this.adapter.getPageArray().map((p, i) => {
      const page = document.createElement('a');
      page.setAttribute('href', '#');
      page.setAttribute('class', 'page-nav');
      page.addEventListener('click', e => {
        e.preventDefault();
        gallery.populatePage({ page: i });
      });
      page.innerHTML = p;
      this.pageNav.appendChild(page);
    });
    this.render = this.render.bind(this);
  }

  render () {
    return this.pageNav;
  }
}

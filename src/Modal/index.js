export default class Modal {
  constructor ({ content }) {
    this.overlay = document.createElement('div');
    this.overlay.setAttribute('class', 'overlay');
    this.overlay.appendChild(content);
    this.backdrop = document.createElement('div');
    this.backdrop.setAttribute('class', 'backdrop');
    this.backdrop.addEventListener('click', () => {
      this.destroyModal();
    });
    document.body.appendChild(this.backdrop);
    document.body.appendChild(this.overlay);
    this.destroyModal = this.destroyModal.bind(this);
  }

  destroyModal () {
    document.body.removeChild(this.overlay);
    document.body.removeChild(this.backdrop);
  }
}

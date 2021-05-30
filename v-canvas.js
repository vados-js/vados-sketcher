export class VCanvas {
  /**@param {HTMLElement} container */
  constructor(container) {
    this.container = container;

    this.cnv = document.createElement('canvas');
    this.ctx = this.cnv.getContext('2d');

    this.cnv.style.setProperty('box-shadow',
      `0px 2px 5px rgba(0,0,0,.25),
      0px -2px 5px rgba(0,0,0,.25),
      2px 0px 5px rgba(0,0,0,.25),
      -2px 0px 5px rgba(0,0,0,.25)
    `);
    this.cnv.style.setProperty('width', '100%');
    this.cnv.style.setProperty('height', '100%');

    this.container.appendChild(this.cnv);

    this.cnv.width = this.cnv.offsetWidth;
    this.cnv.height = this.cnv.offsetHeight;

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);

    const down = () => {
      this.cnv.addEventListener('mousemove', move);
      this.cnv.addEventListener('mouseup', up);

      this.ctx.strokeStyle = this.strokeStyle;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.beginPath();
    };
    const move = (evt) => {
      this.ctx.lineTo(evt.x, evt.y);
      this.ctx.stroke();
    };
    const up = () => {
      this.cnv.removeEventListener('mousemove', move);
      this.cnv.removeEventListener('mouseup', up);
    };

    this.strokeStyle = 'red';
    this.lineWidth = 15;

    this.cnv.addEventListener('mousedown', down);
  }
}
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

    this.clear();

    const down = () => {
      this.cnv.addEventListener('mousemove', move);
      this.cnv.addEventListener('mouseup', up);

      this.ctx.strokeStyle = this.strokeStyle;
      this.ctx.fillStyle = this.strokeStyle;
      this.ctx.lineWidth = this.lineWidth;
    };
    const move = (evt) => {
      this.ctx.beginPath();
      this.ctx.arc(evt.x, evt.y, this.lineWidth, 0, Math.PI * 2);
      this.ctx.fill();
    };
    const up = () => {
      this.cnv.removeEventListener('mousemove', move);
      this.cnv.removeEventListener('mouseup', up);
    };

    this.setStrokeStyle('red');
    this.setLineWidth(15);

    this.cnv.addEventListener('mousedown', down);
  }
  clear(){
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height);
  }
  /** @param {string} style */
  setStrokeStyle(style){
    this.strokeStyle = style;
  }
  /** @param {number} width */
  setLineWidth(width){
    this.lineWidth = width;
  }
  updateSize(){
    this.cnv.width = this.cnv.offsetWidth;
    this.cnv.height = this.cnv.offsetHeight;
  }
}
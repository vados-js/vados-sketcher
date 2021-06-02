import { VCanvas } from "./v-canvas.js";

export class VToolbar{
  /**
   * @param {VCanvas} vCanvas 
   * @param {HTMLElement} container 
   */
  constructor(vCanvas, container){
    this.vCanvas = vCanvas;
    this.container = container || vCanvas.container;

    this.BAR_HEIGHT = '3em';

    this.bar = document.createElement('div');
    this.bar.style.setProperty('width', '100%');
    this.bar.style.setProperty('display', 'flex');
    this.bar.style.setProperty('height', this.BAR_HEIGHT);
    this.bar.style.setProperty('box-shadow', '0px -2px 5px rgba(0,0,0,.25)');
    this.bar.style.setProperty('position', 'relative');
    this.bar.style.setProperty('background-color', 'whitesmoke');
    this.container.appendChild(this.bar);

    this.vCanvas.cnv.style.setProperty('height', `calc(100% - ${this.BAR_HEIGHT})`);
    this.vCanvas.updateSize();
  }
}
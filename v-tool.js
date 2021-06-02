export class VTool {
  constructor({ id = uuidv4(), name = id || '', label = name || '' }) {
    this.id = id;
    this.name = name;
    this.label = label;
    /**@type {HTMLElement} */
    this._control = null;
  }
  get control() {
    if (!this._control) {
      this._control = document.createElement('div');
      this._control.textContent = this.label;
    }
    return this._control;
  }
}

export class VButton extends VTool {
  constructor({ action = (e) => { console.warn(`no action in ${this.name}`) }, color = 'black', mode = VButton.mods.text, ...props }) {
    super(props);
    this.action = action;
    /**@type {HTMLButtonElement} */
    this._control = null;
    this.color = color;
    this.mode = mode;
  }
  get control() {
    if (!this._control) {
      this._control = document.createElement('button');
      this.mode();
      this._control.addEventListener('click', this.action);
    }
    return this._control;
  }
}
VButton.mods = {
  text() {
    this._control.textContent = this.label;
  },
  color() {
    this._control.style.setProperty('background-color', this.color);
  }
};

export class VRange extends VButton {
  constructor({ min = 0, max = 100, step = 1, value = step, ...props }) {
    super(props);
    this.min = min;
    this.max = max;
    this.step = step;
    /**@type {HTMLInputElement} */
    this._control = null;
    this.value = value;
  }
  get control() {
    if (!this._control) {
      this._control = document.createElement('input');
      this._control.type = 'range';
      this._control.min = String(this.min);
      this._control.max = String(this.max);
      this._control.step = String(this.step);
      this._control.value = this.value;
      this._control.addEventListener('input', (e) => {
        this.value = parseFloat(this._control.value);
        this.action(e);
      });
    }
    return this._control;
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
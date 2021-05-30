export class VTool{
  constructor({ id = uuidv4(), name = id || '', label = name ||''}){
    this.id = id;
    this.name = name;
    this.label = label;
    /**@type {HTMLElement} */
    this._control = null;
  }
  get control(){
    if (!this._control){
      this._control = document.createElement('div');
      this._control.textContent = this.label;
    }
    return this._control;
  }
}

export class VButton extends VTool{
  constructor({action = () => {console.warn(`no action in ${this.name}`)}, ...props}){
    super(props);
    this.action = action;
    /**@type {HTMLButtonElement} */
    this._control = null;
  }
  get control() {
    if (!this._control) {
      this._control = document.createElement('button');
      this._control.textContent = this.label;
      this._control.addEventListener('click', this.action);
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
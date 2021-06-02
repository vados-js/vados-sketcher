import {VCanvas} from './v-canvas.js';
import { VButton, VRange } from './v-tool.js';
import { VToolbar } from './v-toolbar.js';
const container = document.getElementById('container');
const canvas = new VCanvas(container);
const toolBar = new VToolbar(canvas, container);

const greenBtn = new VButton({ color: 'green', mode: VButton.mods.color, action: () => { canvas.setStrokeStyle('green') }});
toolBar.bar.appendChild(greenBtn.control);

const redBtn = new VButton({ color: 'red', mode: VButton.mods.color, action: () => { canvas.setStrokeStyle('red') }});
toolBar.bar.appendChild(redBtn.control);

const blackBtn = new VButton({ color: 'black', mode: VButton.mods.color, action: () => { canvas.setStrokeStyle('black') }});
toolBar.bar.appendChild(blackBtn.control);

const range = new VRange({ label: 'size', max: 50, action: () => { canvas.setLineWidth(range.value) } });
range.value = canvas.lineWidth;
toolBar.bar.appendChild(range.control);

const clearBtn = new VButton({ label: 'CLEAR', action: () => { canvas.clear() } });
toolBar.bar.appendChild(clearBtn.control);
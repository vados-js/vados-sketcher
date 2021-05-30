import {VCanvas} from './v-canvas.js';
import { VToolbar } from './v-toolbar.js';
const container = document.getElementById('container');
const canvas = new VCanvas(container);
const toolBar = new VToolbar(canvas, container);

const btn = document.createElement('button');
btn.textContent = 'green';
btn.addEventListener('click', () => {canvas.setStrokeStyle('green')});
toolBar.bar.appendChild(btn);
import '@vaadin/vaadin-checkbox/theme/material/vaadin-checkbox.js';
import '../../src/vaadin-grid-pro-edit-checkbox.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="material-grid-pro-edit-checkbox" theme-for="vaadin-grid-pro-edit-checkbox">
  <template>
    <style include="material-checkbox">
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

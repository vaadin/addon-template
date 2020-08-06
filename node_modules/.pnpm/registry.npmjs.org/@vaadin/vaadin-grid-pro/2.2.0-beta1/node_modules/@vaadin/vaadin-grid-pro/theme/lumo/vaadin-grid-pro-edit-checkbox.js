import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js';
import '../../src/vaadin-grid-pro-edit-checkbox.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="lumo-grid-pro-edit-checkbox" theme-for="vaadin-grid-pro-edit-checkbox">
  <template>
    <style include="lumo-checkbox">
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

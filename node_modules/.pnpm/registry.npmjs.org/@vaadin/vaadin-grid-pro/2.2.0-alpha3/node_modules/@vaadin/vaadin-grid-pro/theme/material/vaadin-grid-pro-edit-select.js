import '@vaadin/vaadin-select/theme/material/vaadin-select.js';
import '@vaadin/vaadin-list-box/theme/material/vaadin-list-box.js';
import '@vaadin/vaadin-item/theme/material/vaadin-item.js';
import './vaadin-grid-pro-edit-text-field.js';
import '../../src/vaadin-grid-pro-edit-select.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="material-grid-pro-edit-select" theme-for="vaadin-grid-pro-edit-select">
  <template>
    <style include="material-select">
    </style>
  </template>
</dom-module><dom-module id="material-grid-pro-edit-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style include="material-select-text-field material-grid-pro-edit-text-field">
      :host([theme~="grid-pro-editor"]) [part="input-field"] ::slotted([part="value"]) {
        /* prevent selection on editor focus */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

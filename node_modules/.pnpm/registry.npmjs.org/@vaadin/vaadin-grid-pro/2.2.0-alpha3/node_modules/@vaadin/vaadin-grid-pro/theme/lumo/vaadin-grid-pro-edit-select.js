import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/vaadin-item/theme/lumo/vaadin-item.js';
import './vaadin-grid-pro-edit-text-field.js';
import '../../src/vaadin-grid-pro-edit-select.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="lumo-grid-pro-edit-select" theme-for="vaadin-grid-pro-edit-select">
  <template>
    <style include="lumo-select">
      :host([theme~="grid-pro-editor"]) [part="toggle-button"] {
        margin-right: var(--lumo-space-xs);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-grid-pro-edit-select-text-field" theme-for="vaadin-select-text-field">
  <template>
    <style include="lumo-select-text-field lumo-grid-pro-editor">
      :host([theme~="grid-pro-editor"]) [part="input-field"] ::slotted([part="value"]) {
        padding: 0 var(--lumo-space-m);
        font-size: var(--lumo-font-size-m);

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

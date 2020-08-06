import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-checkbox/theme/material/vaadin-checkbox.js';
import '@vaadin/vaadin-grid/theme/material/vaadin-grid-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="material-grid-pro-styles" theme-for="vaadin-grid-pro">
  <template>
    <style include="material-grid">
      /* keep the focus-ring on active */
      :host([navigating]) [part~="cell"]:active {
        box-shadow: inset 0 0 0 2px var(--material-primary-color);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

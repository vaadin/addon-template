package org.vaadin.addons.mygroup;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("")
public class AddonView extends Div {

    public AddonView() {
        TheAddon theAddon = new TheAddon();
        theAddon.setId("theAddon");
        add(theAddon);
    }
}

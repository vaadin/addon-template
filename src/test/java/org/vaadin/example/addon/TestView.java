package org.vaadin.example.addon;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("")
public class TestView extends Div {

    public TestView() {
        TheAddon theAddon = new TheAddon();
        theAddon.setId("theAddon");
        add(theAddon);
    }
}

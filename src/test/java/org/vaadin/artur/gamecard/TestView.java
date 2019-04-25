package org.vaadin.artur.gamecard;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("")
public class TestView extends Div {

    public TestView() {
        add(new TheAddon());
    }
}

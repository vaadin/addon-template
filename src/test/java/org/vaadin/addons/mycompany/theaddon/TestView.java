package org.vaadin.addons.mycompany.theaddon;

import org.vaadin.addons.mycompany.theaddon.TheAddon;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

/**
 * Test View for our {@link TheAddon} add-on class. This class and others in the
 * test folder will not be included in the final JAR.
 */
@Route("")
public class TestView extends Div {

    public TestView() {
        add(new TheAddon());
    }
}

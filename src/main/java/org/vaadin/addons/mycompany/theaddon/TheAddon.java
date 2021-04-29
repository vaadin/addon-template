package org.vaadin.addons.mycompany.theaddon;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JavaScript;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;

/**
 * This is the main add-on Component class, similar to e.g. the Button or
 * VerticalLayout classes.
 * <p>
 * You can inherit any Component class and run any Java code here.
 * <p>
 * You can also use {@link JavaScript}, {@link CssImport} and others; the
 * referred files should be put under the
 * <code>src/main/resources/META-INF/resources/frontend</code> directory to be
 * included in the final packaged JAR.
 * <p>
 * <strong>Note</strong> that this class can also extend a HTML
 * {@link PolymerTemplate}.
 */
public class TheAddon extends Div {

    public TheAddon() {
        setText("Hello");
    }
}

package org.vaadin.addons.mygroup;

import com.vaadin.flow.component.html.testbench.DivElement;
import org.junit.Assert;
import org.junit.Test;


public class AddonIT extends AbstractViewTest {

    @Test
    public void addonTextIsRendered() {
        DivElement divElement = $(DivElement.class).id("theAddon");
        Assert.assertNotNull(divElement);
        Assert.assertEquals("Hello", divElement.getText());
    }
}

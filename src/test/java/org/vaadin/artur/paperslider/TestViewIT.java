package org.vaadin.artur.paperslider;

import com.vaadin.flow.component.html.testbench.DivElement;
import org.junit.Assert;
import org.junit.Test;


public class TestViewIT extends AbstractViewTest {

    @Test
    public void clickingButtonShowsNotification() {
        DivElement divElement = $(DivElement.class).id("theAddon");
        Assert.assertNotNull(divElement);
        Assert.assertEquals("Hello", divElement.getText());
    }
}

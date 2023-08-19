import static org.junit.Assert.assertEquals;

import org.junit.Test;

import components.set.Set;
import components.set.Set1L;

public abstract class SetTest {
 
    protected abstract Set<String> constructor();
   
    @Test
    public final void testAddEmpty() {
        Set<String> s = this.constructor();
        s.add("green");
        assertEquals("{green}", s.toString());
    }   

    @Test
    public final void testEntryAtSingleEntry() {
        Set<String> s = this.createFromArgs("red");
        Boolean x = s.contains("red");
        assertEquals(true, x);
    } 
}
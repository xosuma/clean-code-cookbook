public abstract class SetTest {
 
    protected abstract Set<String> constructor();
   
    @Test
    public final void testAddEmpty() {
        Set<String> s = this.constructor();
        s.add("green");
        s.add("blue");
        assertEquals("{green. blue}", s.toString());
       // 집합 순서에 따라 달라지고 수학 집합은 정의상 정렬되지 않기 때문에 취약합니다.
    }   
}
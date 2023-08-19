public class Name {
    private final String name; 

    public Name(String name) {
        this.name = name;
        // Name has its own creation rules, comparison etc.
        // Might be different than a string
    }
}
  
public class Person {
    private final Name name; 

    public Person(Name name) {
        // name is created as a valid one,
        // we don't need to add validations here 
        this.name = name;
    }
}
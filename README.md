# Visitor_pattern
Visitor is a behavioral design pattern that allows adding new behaviors to existing class hierarchy without altering any existing code.






Visitor pattern is used when we have to perform an operation on a group of similar kind of Objects with the help of visitor pattern, we can move the operational logic from the objects to another class. For example, think of a Shopping cart where we can add different type of items (Elements).

The visitor pattern consists of two parts, a method called Visit() which is implemented by the visitor and is called for every element in the data structure. visitable classes providing Accept() methods that accept a visitor.
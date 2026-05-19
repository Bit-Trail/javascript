function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hi I am " + this.name);
}

const p1 = new Person("Shanks", 22);
const p2 = new Person("Zoro", 21);

p1.greet();
p2.greet();
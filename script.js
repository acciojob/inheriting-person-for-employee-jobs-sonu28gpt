// complete this js code
function Person(name, age) {

	this.name=name;
	this.age=age;
}
Person.prototype.greet=function(){
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
Person.call(this,name,age);
this.jobTitle=jobTitle;
}

Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
Employee.prototype.jobGreet=function(){
console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}
// let p=new Person("alice",25);
// let e=new Employee("bob",30,"manager");



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
// complete this js code
function Person(name, age) {
	
		this.name=name;
		this.age=age;
	
	
}
Person.prototype.greet=function(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}




function Employee(name, age, jobTitle) {
	let obj=Person(name,age);
	obj.jobTitle=jobTitle;
	obj.jobGreet=function () {
		console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old, and my job title is ${obj.jobTitle}.`)
	}
	return obj;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

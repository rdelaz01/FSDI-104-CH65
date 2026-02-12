//Rollie 
let name = "Rollie";
let lastName = "Delacruz";
let email = "rollie.delacruz@example.com"

//thalia
let thaliaName = "Thalia";
let thaliaLastName = "Smith";
let thaliaEmail = "thalia.smith@example.com"

//object literal
let person1 = {
    name: "Rollie",
    lastName: "Delacruz",
    email: "rollie.delacruz@example.com"
};

let person2 = {
    name: "Thalia",
    lastName: "Smith",
    email: "thalia.smith@example.com"
};

let person3 = {
    name: "Liam",
    lastName: "Johnson",
    email: "liam.johnson@example.com"
};

//acessing object attributes of an object
console.log(person1.name);

//Display the person names in the html browser
let paragraphs = document.createElement("p");
paragraphs.innerHTML = person2.name;                               
document.body.appendChild(paragraphs);

let personList = [person1, person2, person3];
console.log(personList[0]); // example of accessing the info of the first person in the list ". to access specific attributes of the person object"

//.1 Get the list
let list = document.getElementById("personList");

for (let i = 0; i < personList.length; i++) {



//.2 create the list item HTML element
let li = document.createElement("li");

//.3 Asign the person name to the list item 
li.innerHTML = `<b>${personList[i].name}</b>`; // example of using template literals to assign the person name to the list item

//.4 Add the list item to the list

list.appendChild(li);
}

//=================
//   CONSTRUCTOR
//=================

//constructor function
function Student(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
}

// create an object using the constructor function
let student1 = new Student("Peter", "Parker", "peter.parker@example.com");

// print in the console the student name
console.log(student1.name); // example of creating an object using a constructor function and accessing its attributes  
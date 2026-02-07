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
//object literal
let pet1 = {
    name: "Stitch",
    age: "5",
    gender: "male",
    service: "grooming",
    breed: "french bulldog"
};

let pet2 = {
    name: "Chuy",
    age: "3",
    gender: "female",
    service: "vaccination",
    breed: "boxer"
};

let pet3 = {
    name: "Chug",
    age: "2",
    gender: "male",
    service: "checkup",
    breed: "pug mix"
    
};

//let petList = [pet1, pet2, pet3];
//let petDisplay=document.getElementById("petNames");

//for (let i = 0; i < petList.length; i++) {
//    let pet = petList[i];
//    console.log(petList[i].name);
//    petDisplay.innerHTML+=`<li>${pet.name}</li>`;
//}

let petList = [pet1, pet2, pet3];

let list = document.getElementById("petNames");

for (let i = 0; i < petList.length; i++) {

let li = document.createElement("li");

li.innerHTML = `<b>${petList[i].name}</b>`;

list.appendChild(li);
}


const petForm = document.querySelector("Form");
const petTable = document.getElementById("petTable");


//=================
//   CONSTRUCTOR
//=================

function Pet(name, age, gender, service, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}

function onSubmintPet(event) {
    event.preventDefault();

    console.log("Register button clicked");
        

// Constructed pet4, pet5, pet6
//let pet4 = new Pet("Luna", "4", "female", "grooming", "shih tzu");
//let pet5 = new Pet("Bubba", "6", "male", "vaccination", "English bulldog");
//let pet6 = new Pet("Bella", "1", "female", "checkup", "beagle mix");
    const name = petForm.elements["petName"].value;
    const age = petForm.elements["petAge"].value;
    const gender = petForm.elements["petGender"].value;
    const service = petForm.elements["petService"].value;
    const breed = petForm.elements["petBreed"].value;

    const newPet = new Pet(name, age, gender, service, breed);
    console.log(newPet);
    addRow(newPet);

    petForm.reset();
    
}

function addRow(newPet) {
    const row = document.createElement("tr");

    row.innerHTML = 
    `<td> ${newPet.name} </td>
    <td> ${newPet.age} </td>
    <td> ${newPet.gender} </td>
    <td> ${newPet.service} </td>
    <td> ${newPet.breed} </td>
    <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>
    `;

    
    petTable.appendChild(row);
    }

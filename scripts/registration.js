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

//list.appendChild(li);
}


const petForm = document.querySelector("form");
const petTable = document.getElementById("petTable");


//=================//
//   CONSTRUCTOR   //
//=================//

function Pet(name, age, gender, service, breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}



// Constructed pet4, pet5, pet6
const initialPets = [
    new Pet("Luna", "4", "female", "grooming", "shih tzu"),
    new Pet("Bubba", "6", "male", "vaccination", "English bulldog"),
    new Pet("Bella", "1", "female", "checkup", "beagle mix")
];

function loadInitialPets() {
    initialPets.forEach(pet => addRow(pet));
}


function onSubmitPet(event) {
    event.preventDefault();
    console.log("Register button clicked");

    // Getting values from the form
    const name = petForm.elements["petName"].value;
    const age = petForm.elements["petAge"].value;
    const gender = petForm.elements["petGender"].value;
    const service = petForm.elements["petService"].value;
    const breed = petForm.elements["petBreed"].value;

    const newPet = new Pet(name, age, gender, service, breed);
    addRow(newPet);

    petForm.reset();
}


function addRow(pet) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td>${pet.breed}</td>
        <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>
    `;

    petTable.appendChild(row);
}

//  DELETE FUNCTION
function deleteRow(button) {

    const row = button.parentNode.parentNode;
    row.remove();
}

petForm.addEventListener("submit", onSubmitPet);


loadInitialPets();

$("#darkModeToggle").on("click", function() {
    const currentTheme = $("html").attr("my-theme");
    
    if (currentTheme === "dark") {
        $("html").removeAttr("my-theme");
        $(this).text("☀️");
    } else {
        $("html").attr("my-theme", "dark");
        $(this).text("🌙");
    }
});
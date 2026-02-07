//object literal
let pet1 = {
    name: "stitch",
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


//Display the pet names in the html browser
let ol = document.querySelector("ol");
let li1 = document.createElement("li");
li1.innerHTML = pet1.name;
ol.appendChild(li1);

let li2 = document.createElement("li");
li2.innerHTML = pet2.name;
ol.appendChild(li2);

let li3 = document.createElement("li");
li3.innerHTML = pet3.name;
ol.appendChild(li3);

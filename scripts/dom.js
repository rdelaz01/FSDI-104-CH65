function changeTitle() {
    
    //Get the HTML element with id="title" and store it in a variable
    var title = document.getElementById("title");

    //Change the text content of the title element
    title.innerHTML = "Title has been changed!";

    //Get all the elements with class name "text" and store them in a variable
    var paragraphs = document.getElementsByClassName("text");

    paragraphs[0].style.color = "blue";
    paragraphs[1].style.color = "red";
}

function addItem() {
    let inputValue = document.getElementById("itemInput").value;

    let list = document.getElementById("list");
    
    let li = document.createElement("li");

    li.innerHTML = inputValue;

    list.appendChild(li);

    


}
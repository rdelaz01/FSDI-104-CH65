console.log("registration script is working");

//1. Identfy the form
const productForm = document.querySelector("Form"); //search the html element

//2. Define the constructo 
function Product(name, price, category ){
    this.name = name;
    this.price = price;
    this.category = category;
}

//3. Pull the information / retrieve the information
function registerProduct(event){
    event.preventDefault(); //prevents the default behavior of the form
    
    //test the button snd function connectivity
    console.log("button is working");

    //pull the information from the form
    //use the input name to pull the data
    const name = productForm.elements["productName"].value;
    const price = productForm.elements["productPrice"].value;
    const category = productForm.elements["productCategory"].value;
    
    //4. Construct the object
    const newProduct = new Product(name, price, category);
    console.log(newProduct);

    //5. Display the information - create the row on the table


}

$("#servicesForm").submit(function(event){
    event.preventDefault();
    //console.log(event);

    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val().trim();

    let isValid = true;

    //2 Validate the values
    if(name == "" || description == "" || price <= 0){

    }

    if(!name){
        $("#serviceName").css("border", "solid 2px red");
        isValid = false;
    } else {
        $("serviceName").css("border", "");
    }

    if(!description){
        $("#serviceDescription").css("border", "solid 2px red");
        isValid = false;
    } else {
        $("#serviceDescription").removeAttr("style");
    }

    if(!price || price <= 0){
        $("#servicePrice").css("border", "solid 2px red");
        isValid = false;
    } else {
        $("#servicePrice").removeAttr("style");
    }     

    if(isValid){
        console.log("Form is valid. Submitting...");
        this.reset();
    } else {
        console.log("Form is invalid. Please correct the errors.");
    }
});

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


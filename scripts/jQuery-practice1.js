console.log("connected"); 

//=======How to trigger an event clicking button on Jquery==========//

//Selector           Action   anonymous function
$("#triggerEventButton").click( function(){
    alert("You clicked the trigger event button!");
});

$("#hideButton").click( function(){
    $("p").hide();
});

$("#showButton").click( function(){
    $("p").show();
});

$("#toggleButton").click( function(){
    $("p").toggle();
});

$("#changeTextButton").click( function(){
    $("p").text("The text has been changed!");
});

$("#addCssButton").click( function(){
    $("p").css("color", "blue")
    .css("border", "2px solid black")
    .css("background-color", "lightgray");
});

$("#applyCssButton").click( function(){
    $("p").addClass("my-class");
});
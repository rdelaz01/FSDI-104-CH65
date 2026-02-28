//display salon info
let displayInfo = document.getElementById("displayInfo");

displayInfo.innerHTML = `<p>Welcome to our pet salon! We are located at 123 Main St, Anytown, USA 12345. Our hours are 9am - 6pm. You can reach us at 619-559-6967.</p>`;

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
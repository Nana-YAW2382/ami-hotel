document.getElementById("bookingForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let date = document.getElementById("date").value;

    if (name === "" || email === "" || date === "") {
        alert("Please fill all fields!");
    } else {
        alert(`Thank you, ${name}! Your booking is confirmed.`);
        this.reset();
    }
});

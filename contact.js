document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("9pqB7hySi5e0x4L9Y"); // Replace with your EmailJS Public Key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // EmailJS parameters (must match template)
        let params = {
            name: name,   // Matches {{from_name}} in template
            email: email, // Matches {{from_email}} in template
            message: message   // Matches {{message}} in template
        };

        emailjs.send("service_3ir6p6g", "template_x3dv4hb", params)
            .then(function (response) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                alert("Failed to send message. Try again later.");
                console.log("Error:", error);
            });
    });
});

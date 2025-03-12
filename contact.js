document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
   
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        
        const name = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }
        contactForm.classList.remove("d-none");
        contactForm.textContent = "Votre message a bien été envoyé !";
        
        
        contactForm.reset();
    });


    const socialIcons = document.querySelectorAll(".social-icon-hover");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "transform 0.3s";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
        });
    });
});

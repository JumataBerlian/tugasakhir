document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();
        const submitButton = form.querySelector("button");
        
        if (name && email && message) {
            submitButton.textContent = "Mengirim...";
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
                form.reset();
                submitButton.textContent = "Kirim";
                submitButton.disabled = false;
            }, 1500);
        } else {
            alert("Harap isi semua bidang formulir.");
        }
    });

    // Animasi input saat fokus
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.style.borderColor = "#007bff";
            this.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.5)";
        });
        input.addEventListener("blur", function() {
            this.style.borderColor = "#ccc";
            this.style.boxShadow = "none";
        });
    });
});

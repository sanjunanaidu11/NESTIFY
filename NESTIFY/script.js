function filterProfiles() {
    const ageFilter = document.getElementById('age').value;
    const genderFilter = document.getElementById('gender').value;
    
    document.querySelectorAll('.profile-card').forEach(profile => {
        const age = parseInt(profile.dataset.age);
        const gender = profile.dataset.gender;
        
        const ageMatch = 
            (ageFilter === "0-5" && age <= 5) ||
            (ageFilter === "6-10" && age >= 6 && age <= 10) ||
            (ageFilter === "11-15" && age >= 11 && age <= 15) ||
            (ageFilter === "16-18" && age >= 16) ||
            (!ageFilter);

        const genderMatch = !genderFilter || genderFilter === gender;

        profile.style.display = ageMatch && genderMatch ? "block" : "none";
    });
}

document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    event.target.reset();
});
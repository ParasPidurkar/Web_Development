document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action

    var formData = {
        firstname: document.getElementById('fname').value,
        lastname: document.getElementById('lname').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        age: document.getElementById('age').value,
        country: document.getElementById('country').value,
        bio: document.getElementById('bio').value,
        interests: []
    };

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        formData.interests.push(checkboxes[i].value);
    }

    console.log(formData); // Here you can do something with the form data

    // Example: Storing the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
});
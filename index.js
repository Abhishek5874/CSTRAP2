// Function to validate email
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return inputText.match(mailformat) !== null;
}

document.getElementById('accommodationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const emailInput = document.getElementsByName('email')[0].value;
    if (!ValidateEmail(emailInput)) {
        alert("You have entered an invalid email address!");
        return false;
    }

    const formData = new FormData(this);

    fetch('/accommodation_inquiry', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response:', data);
        alert("Form submitted successfully!");
         // Alert the user about successful submission
        // You can redirect to another page or do further handling if needed
    })
    .catch(error => console.error('Error:', error));
});

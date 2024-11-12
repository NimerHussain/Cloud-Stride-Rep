
function changeStyle(element){
    element.style.color = 'white'
    element.style.fontFamily = 'Helvetica'
    element.style.backgroundColor = 'black'

}


function returStyle(element){
    element.style.color = 'black'
    element.style.fontFamily = 'Courier New'
    element.style.backgroundColor = ''

}

const logo = document.getElementById('logo');


function updateFloridaTime() {
    // Create a new Date object
    const date = new Date();

    // Set the options to display the time in the correct format (Florida - EST/EDT timezone)
    const options = {
        timeZone: "America/New_York", // Florida falls under the "America/New_York" timezone
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true
    };

    // Format the date according to the Florida timezone
    const floridaTime = date.toLocaleString('en-US', options);

    // Set the formatted date/time to the div
    document.getElementById('florida-time').textContent = floridaTime;
}

// Update the time every second
setInterval(updateFloridaTime, 1000);

// Call the function initially to display the time right away
updateFloridaTime();


// Function to change the logo on mouseover
logo.addEventListener('mouseover', () => {
    logo.src = './Pictures/Logo B.black.jpg';  // Replace with the path of your new logo
    logo.style.width = '300px';
});

// Function to revert back to the original logo on mouseout
logo.addEventListener('mouseout', () => {
    logo.src = './Pictures/Symbol B.white.jpg';  // Path of your original logo
    logo.style.width = '150px';
});

 // Function to trigger the custom alert
 function showCustomAlert() {
    Swal.fire({
        title: 'Welcome to Cloud Stride!',
        text: 'Your One Stop Solution for all your IT Needs.',
        icon: 'info',
        background: '#FF5722', // Custom background color (orange)
        color: '#fff',         // Text color (white)
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#333', // Button color (black)
        customClass: {
            popup: 'custom-popup',  // Custom class for popup styling
        }
    });
}

// Optionally, trigger this alert on page load or any event
window.onload = function() {
    showCustomAlert();  // Show the alert when the page loads
};



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display response
    const response = document.getElementById("response");
    response.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Reset form
    this.reset();
});

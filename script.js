function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Validate that all fields are filled out
    if (!firstName || !lastName || !email || !phone || !message) {
      alert('Please fill out all fields.');
      return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Validate phone number format (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number (10 digits).');
      return false;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    return true;
  }
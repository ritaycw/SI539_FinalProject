function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;

    var contactByPhone = document.getElementById("contactByPhone").checked;
    var contactByEmail = document.getElementById("contactByEmail").checked;

    // You can perform further validation or send the data to a server here
    // For a simple demonstration, we'll just log the data to the console
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Contact by Phone: " + contactByPhone);
    console.log("Contact by Email: " + contactByEmail);
    console.log("Comments: " + comments);
    console.log("Contact By Phone: " + contactByPhone);
    console.log("Contact By Email: " + contactByEmail);

    // Reset the form after submission
    document.getElementById("contactForm").reset();
  }
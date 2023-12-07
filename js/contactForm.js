function validateForm() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var comments = document.getElementById("comments").value;

  if (name === '') {
      document.getElementById("nameError").style.display = "block";
      return false;
  } else {
      document.getElementById("nameError").style.display = "none";
  }

  if (phone === '') {
      document.getElementById("phoneError").style.display = "block";
      return false;
  } else {
      document.getElementById("phoneError").style.display = "none";
  }

  if (email === '') {
      document.getElementById("emailError").style.display = "block";
      return false;
  } else {
      document.getElementById("emailError").style.display = "none";
  }

  if (comments === '') {
      document.getElementById("commentsError").style.display = "block";
      return false;
  } else {
      document.getElementById("commentsError").style.display = "none";
  }

  return true;
}

function submitForm() {
  if (validateForm()) {
      alert("Thank you! Form submitted successfully!");

      console.log("Name: " + name);
      console.log("Phone: " + phone);
      console.log("Email: " + email);
      console.log("Contact by Phone: " + contactByPhone);
      console.log("Contact by Email: " + contactByEmail);
      console.log("Comments: " + comments);
      console.log("Contact By Phone: " + contactByPhone);
      console.log("Contact By Email: " + contactByEmail);

      document.getElementById("contactForm").reset();
  }
}

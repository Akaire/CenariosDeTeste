function validateForm() {
    var username = document.forms["signupForm"]["username"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var passwordConfirm = document.forms["signupForm"]["password-confirm"].value;
    if (username == "") {
      alert("Username must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    if (passwordConfirm == "") {
      alert("Password confirmation must be filled out");
      return false;
    }
    if (password != passwordConfirm) {
      alert("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert("Password must contain at least one letter and one number");
      return false;
    }
    return true;
  }
let username, password, role;

function loginPortal() {
  username = prompt("Enter your username: ");
  password = prompt("Enter your password: ");
  role = prompt("Enter your role: ");

  if (username === "" || username === null || password === "" || password === null || role === "" || role === null) {
    alert("Input should not be empty.");
  } else {
    switch (role) {
      case "admin":
      case "Admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
      case "Teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
      case "Student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
    }
  }
}

function calculateAverage() {
  var number1 = parseFloat(prompt("Enter number 1:"));
  var number2 = parseFloat(prompt("Enter number 2:"));
  var number3 = parseFloat(prompt("Enter number 3:"));
  var number4 = parseFloat(prompt("Enter number 4:"));

  var average = (number1 + number2 + number3 + number4) / 4;
  average = Math.round(average);

  console.log("Rounded average: " + average);

  if (average <= 74) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A");
  } else if (average > 96) {
    console.log("Hello, student, your average is " + average + ". The letter equivalent is A+");
  }
}

loginPortal();
calculateAverage();

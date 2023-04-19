let accessAlowed = false;

function sendEmail() {
  let permittedEmail = ["mail@1", "mail@2", "mail@3", "mail@4"];

  let userEmail = document.getElementById("userEmail").value;

  for (let counter = 0; counter < permittedEmail.length; counter++) {
    let mailLIst = permittedEmail[counter];

    if (userEmail == mailLIst) {
      accessAlowed = true;
    }
  }
  if (accessAlowed == true) {
    alert("Welcome");
  } else {
    alert("Not welcome");
  }
}

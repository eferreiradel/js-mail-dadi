function sendEmail() {
  let permittedEmail = ["mail@1", "mail@2", "mail@3", "mail@4"];

  let userEmail = document.getElementById("userEmail").value;

  for (let counter = 0; counter < permittedEmail.length; counter++) {
    let mailLIst = permittedEmail[counter + 1];

    if (userEmail == mailLIst) {
      alert("welcome");
    }
  }
}

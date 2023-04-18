var userEmail = prompt("Qual'è la tua e-mail?");

var permittedEmail = ["mail@1", "mail@2", "mail@3", "mail@4"];
for (let counter = 1; counter < permittedEmail.length; counter++) {
  let mailLIst = permittedEmail[counter];

  if (mailLIst == userEmail) {
    alert("email approvata!");
  } else {
    alert("Riprova!");
  }
}

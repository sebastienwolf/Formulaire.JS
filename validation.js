document.getElementById("validation").addEventListener("submit", function (vérif) {

  var age = document.getElementById('age').value
  if (age < 18) {
    window.alert("vous n'êtes pas majeur");
  } else if (age >= 18) {
    window.alert("vous pouvez voter")
  }
})
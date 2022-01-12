function ageVerif() {

  var age = document.getElementById("ageDate").value;
  console.log("age =" + age);

  var mSeconde = Date.parse(age);
  console.log("mSeconde=" + mSeconde);

  const today = new Date();
  console.log("today = " + today);

  var todayM = today.setHours(0, 0, 0);
  console.log("todayM = " + todayM);

  var dif = today - mSeconde;
  console.log("dif =" + dif);

  var difAnnée = dif / 31556952000;
  console.log("difAnnée =" + difAnnée);

  if (difAnnée < 18) {
    window.alert("vous n'êtes pas majeur!")
  } else if (difAnnée >= 18) {
    window.alert("vous êtes majeur!")
  }
}
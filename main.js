var salaire = getElemenntById("salaire").value;
var heuresSemaineReg = getElemenntById("heures-semaine-reg").value;
var heuresSemaineSup = getElemenntById("heures-semaine-sup").value;

function salaireSemaineBrut() {
  //taux horaire heure supplementaire
  var tauxHeureSup = salaire / 2 + salaire;
  var result = salaire * heuresSemaineReg + heuresSemaineSup * tauxHeureSup;
  document.getElementById("salaire-brut").innerHTML = result + "$ brut";
}

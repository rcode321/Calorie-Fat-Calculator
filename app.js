const clearBtn = document.getElementById("clear");
const calorieName = document.getElementById("calorie");
const fatName = document.getElementById("fats");
const resulta = document.querySelector(".label");

document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".loader").style.display = "block";

  setTimeout(calculate, 2000);
});

function calculate() {
  document.querySelector(".loader").style.display = "none";

  // Calculate the Calorie from Fats
  const currentCalo = Math.floor(
    parseFloat(fatName.value / calorieName.value) * 100
  );

  if (isNaN(currentCalo)) {
    return (
      errorAlert("Please check the numbers"),
      (document.querySelector(".label").style.display = "none")
    );
  } else if (currentCalo === 20) {
    resulta.appendChild(document.createTextNode("Recomended "));
  } else if (currentCalo >= 40) {
    resulta.appendChild(document.createTextNode("Need Moderation "));
  } else if (currentCalo >= 40) {
    resulta.appendChild(document.createTextNode("Risky "));
  }

  resulta.appendChild(document.createTextNode(currentCalo + "%"));

  document.querySelector(".label").style.display = "block";

  // Clear input Fields
  calorieName.value = "";
  fatName.value = "";

  document.getElementById("clear").addEventListener("click", function () {
    while (resulta.firstChild) {
      resulta.removeChild(resulta.firstChild);
    }
  });
  console.log(currentCalo);
}

function errorAlert(error) {
  // create element for error

  const errorUI = document.createElement("div");

  const parentHero = document.querySelector(".card-body");
  const parentheHeading = document.querySelector(".heading");
  errorUI.className = "alert alert-danger";

  errorUI.appendChild(document.createTextNode(error));

  parentHero.insertBefore(errorUI, parentheHeading);

  setTimeout(removeError, 2000);
  console.log(errorUI);
}

function removeError() {
  document.querySelector(".alert").remove();
}

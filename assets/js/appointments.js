console.log("@appointments.js");

function cicleLocations() {
  let xRandNum = Math.floor(Math.random() * 300) + 100;
  let yRandNum = Math.floor(Math.random() * 50) + 20;
  let xRandNum2 = Math.floor(Math.random() * 300) + 100;
  let yRandNum2 = Math.floor(Math.random() * 50) + 20;

  let circle1 = document.querySelector(".circle1");
  let circle2 = document.querySelector(".circle2");

  circle1.setAttribute(
    "style",
    "margin-top: " +
      xRandNum +
      "px; margin-left: " +
      yRandNum +
      "%; overflow: hidden; height: " +
      xRandNum +
      "px; width: " +
      xRandNum +
      "px;"
  );
  circle2.setAttribute(
    "style",
    "margin-top: " +
      xRandNum2 +
      "px; margin-left: " +
      yRandNum2 +
      "%; overflow: hidden; height: " +
      xRandNum2 +
      "px; width: " +
      xRandNum2 +
      "px;"
  );
}

cicleLocations();

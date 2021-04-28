console.log("@appointments.js");

function cicleLocations() {
  let xRandNum = Math.floor(Math.random() * 100);
  let yRandNum = Math.floor(Math.random() * 100);
  let xRandNum2 = Math.floor(Math.random() * 100);
  let yRandNum2 = Math.floor(Math.random() * 100);

  let circle1 = document.querySelector(".circle1");
  let circle2 = document.querySelector(".circle2");

  circle1.setAttribute(
    "style",
    "margin-top: " +
      xRandNum +
      "px; margin-left: " +
      yRandNum +
      "%; overflow: hidden;"
  );
  circle2.setAttribute(
    "style",
    "margin-top: " +
      xRandNum2 +
      "px; margin-left: " +
      yRandNum2 +
      "%; overflow: hidden;"
  );
}

cicleLocations();

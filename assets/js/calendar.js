console.log("@calendar.js");

const Year = {
  Months: [
    {
      name: "January",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "February",
      days: "28",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "March",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "April",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "May",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "June",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "July",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "August",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "September",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "October",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "November",
      days: "30",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
    {
      name: "December",
      days: "31",
      holidays: [
        {
          name: "ABC holiday",
          date: 10,
        },
        {
          name: "DEF holiday",
          date: 20,
        },
      ],
    },
  ],
  Week: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  WeekAbrv: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

let todaysDate = new Date();

let dislayDateChanger = todaysDate.getMonth();
let plusMinusCounter = 0;
console.log(dislayDateChanger);
let myNum = dislayDateChanger;

function setDates(myNum) {
  console.log("@setDates() in calendar.js");
  document.querySelector("#date").innerHTML = "";
  document.querySelector("#days").innerHTML = "";
  // Sets the Dates and adds them to the calendar

  if (dislayDateChanger < 0) {
    dislayDateChanger = 11;
    --plusMinusCounter;
  }
  if (dislayDateChanger > 11) {
    dislayDateChanger = 0;
    ++plusMinusCounter;
    console.log("Inside");
  }
  console.log("TEST: ", dislayDateChanger);
  let date = new Date();

  let thisMonth = Year.Months[dislayDateChanger].name;
  let curretMonth = Year.Months[date.getMonth()].name;
  let currentYear = date.getFullYear();
  let thisYear = date.getFullYear() + plusMinusCounter;
  let thisDay = date.getDate();
  let thisDayofWeek = Year.Week[date.getDay()];

  let fullDate =
    "Today's Date: " +
    "<br>" +
    thisDayofWeek +
    " " +
    curretMonth +
    " " +
    thisDay +
    ", " +
    currentYear;

  let monthArrows = document.createElement("div");
  monthArrows.setAttribute("id", "arrowsBox");
  monthArrows.setAttribute("class", "text-center");

  let spacerBox = document.createElement("div");
  let spacerBox1 = document.createElement("div");
  let spacerBox2 = document.createElement("div");
  let spacerBox3 = document.createElement("div");

  let arrowBoxLeft = document.createElement("div");
  arrowBoxLeft.setAttribute("class", "fa fa-arrow-left grid-item arrow");
  arrowBoxLeft.setAttribute("onClick", "minusCalDay()");

  let arrowBoxRight = document.createElement("div");
  arrowBoxRight.setAttribute("class", "fa fa-arrow-right grid-item arrow");
  arrowBoxRight.setAttribute("onClick", "plusCalDay()");

  let monthBoxMiddle = document.createElement("div");
  monthBoxMiddle.innerHTML = thisMonth + " " + thisYear;
  monthBoxMiddle.setAttribute("class", "grid-item");

  let monthElement = document.createElement("div");

  monthElement.appendChild(arrowBoxLeft);
  monthElement.appendChild(spacerBox);
  monthElement.appendChild(spacerBox1);
  monthElement.appendChild(monthBoxMiddle);
  monthElement.appendChild(spacerBox2);
  monthElement.appendChild(spacerBox3);
  monthElement.appendChild(arrowBoxRight);
  monthElement.setAttribute("class", "grid-container monthEl");

  let fullDateEl = document.createElement("div");
  fullDateEl.setAttribute("class", "fullDate");
  fullDateEl.innerHTML = fullDate;

  monthArrows.appendChild(monthElement);

  let lineBreak = document.createElement("br");

  let todayBtn = document.createElement("div");
  todayBtn.setAttribute("class", "fa fa-home homeButton");
  todayBtn.setAttribute(
    "style",
    " width: 20px; font-size: 20px; color: white; border-radius: 30px"
  );
  todayBtn.setAttribute("onClick", "refreshPage()");

  let listBtn = document.createElement("div");
  listBtn.setAttribute("class", "fa fa-list homeButton");
  listBtn.setAttribute(
    "style",
    "position: absolute; width: 20px; font-size: 20px; color: white;"
  );

  document.querySelector("#date").appendChild(listBtn); // full date;
  document.querySelector("#date").appendChild(todayBtn); // full date;
  document.querySelector("#date").appendChild(fullDateEl); // full date;
  document.querySelector("#date").appendChild(lineBreak); // full date;
  document.querySelector("#date").appendChild(monthArrows); //month and arrow boxes

  createDays(
    date,
    thisYear,
    thisDay,
    thisDayofWeek,
    plusMinusCounter,
    thisMonth,
    curretMonth,
    currentYear
  );
}

function createDays(
  date,
  thisYear,
  thisDay,
  thisDayofWeek,
  plusMinusYearCounter,
  thisMonth,
  curretMonth,
  currentYear
) {
  console.log("@createDays() in calendar.js");

  let weekAbrv = Year.WeekAbrv;

  // Gets First Day of the Month
  let firstDayLongV = new Date(
    date.getFullYear() + plusMinusYearCounter,
    dislayDateChanger,
    1,
    0
  );
  let firstDay = firstDayLongV.toString();

  console.log("FIRSTDAY: ", firstDay);

  for (let k = 0; k < weekAbrv.length; k++) {
    if (firstDay.includes(weekAbrv[k])) {
      firstDay = Year.Week[k];
      console.log("First Day: " + firstDay);
    }
  }

  ////////////////////////////////

  //Calculate Spacer Days
  let spacerDays = Year.Week.indexOf(firstDay);
  console.log("Spacer days: " + spacerDays);
  ////////////////////////////////
  let calendar = document.createElement("div");
  calendar.classList.add("grid-container", "calendar", "text-center");

  for (let h = 0; h < spacerDays; h++) {
    let newSpacerDays = document.createElement("div");
    newSpacerDays.classList.add("grid-item", "day", "container");
    newSpacerDays.setAttribute("style", "visibility: hidden");
    calendar.appendChild(newSpacerDays);
  }

  //Create Calendar
  for (let i = 0; i < Year.Months[dislayDateChanger].days; ++i) {
    let calNum = i + 1;
    let dayForm = document.createElement("form");
    dayForm.setAttribute("method", "get");
    dayForm.setAttribute("action", "/appointments");
    let day = document.createElement("button");
    let newId =
      Year.Months[dislayDateChanger].name + "-" + calNum + "-" + thisYear;

    let idForForm = document.createElement("input");
    idForForm.setAttribute("style", "display: none");
    idForForm.innerHTML = newId;

    day.classList.add("grid-item", "day", "container");
    day.innerHTML = calNum;
    day.setAttribute("style", "margin-top: 10px; margin-bottom:10px");
    day.setAttribute("id", newId);
    day.setAttribute("type", "submit");

    if (
      calNum === thisDay &&
      thisMonth === curretMonth &&
      thisYear === currentYear
    ) {
      day.classList.add("todayDate");
    }

    dayForm.appendChild(idForForm);
    dayForm.appendChild(day);
    calendar.appendChild(dayForm);
  }
  document.querySelector("#days").appendChild(calendar);
}

function plusCalDay() {
  ++dislayDateChanger;
  setDates(dislayDateChanger);
}

function minusCalDay() {
  --dislayDateChanger;
  setDates(dislayDateChanger);
}

setDates();

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

function refreshPage() {
  window.location.reload();
}

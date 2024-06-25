

const female = document.querySelector(".female");
const male = document.querySelector(".male");
let gen = 0;

const darkmode = document.querySelector(".darkmode");

male.addEventListener("click", (e) => {
  male.style.background = "#695";
  female.style.background = "#577b8d";
  gen = 0;
});

female.addEventListener("click", (e) => {
  female.style.background = "#625";
  male.style.background = "#577b8d";
  gen = 0;
});

const weightInput = document.querySelector(".weight-input");
const weightCounter = document.querySelector(".weight-counter");
let weightValue = 50;

weightInput.addEventListener("input", (e) => {
  weightValue = weightInput.value * 1;
  weightCounter.textContent = weightValue;
});

const heightCounter = document.querySelector(".height-counter");
const heightMinus = document.querySelector(".height-minus");
const heightPlus = document.querySelector(".height-plus");
let heightValue = 160;

heightMinus.addEventListener("click", (e) => {
  heightValue = heightCounter.textContent * 1 - 1;
  heightCounter.textContent = heightValue;
});
heightPlus.addEventListener("click", (e) => {
  heightValue = heightCounter.textContent * 1 + 1;
  heightCounter.textContent = heightValue;
});

const ageCounter = document.querySelector(".age-counter");
const ageMinus = document.querySelector(".age-minus");
const agePlus = document.querySelector(".age-plus");
let ageValue = 20;

ageMinus.addEventListener("click", (e) => {
  ageValue = ageCounter.textContent * 1 - 1;
  ageCounter.textContent = ageValue;
});
agePlus.addEventListener("click", (e) => {
  ageValue = ageCounter.textContent * 1 + 1;
  ageCounter.textContent = ageValue;
});

const indexLink = document.querySelector("#index-link");
const resultLink = document.querySelector("#result-link");

const indexMain = document.querySelector(".index-main");
const resultMain = document.querySelector(".result-main");

const resulTitle = document.querySelector(".result-title");
const resultCounter = document.querySelector(".result-counter");

indexLink.style.display = "none";
resultLink.addEventListener("click", (e) => {
  indexLink.style.display = "flex";
  resultLink.style.display = "none";
  resultMain.style.display = "flex";
  indexMain.style.display = "none";
  let result = weightValue / ((heightValue / 100) * (heightValue / 100));
  result = Math.trunc(result);
  resultCounter.textContent = result;

  console.log(result);
  console.log(gen);
  console.log(ageValue);
  console.log(weightValue);
  console.log(heightValue);

  if (result <= 16) {
    resulTitle.textContent = "Qattiq noziklik";
    resulTitle.style.color = "#088395";
  } else if (result == NaN || result == undefined) {
    resulCounter.textContent = " 0";
    resulTitle.textContent = "Ma'lumotlarni to'ldiring";
    resulTitle.style.color = "#F5E7B2";
  } else if (result > 16 || result >= 17) {
    resulTitle.textContent = "O'rtacha noziklik";
    resulTitle.style.color = "#088395";
  } else if (result > 17 || result >= 18) {
    resulTitle.textContent = "Yengil noziklik";
    resulTitle.style.color = "#37B7C3";
  } else if (result > 18 || result >= 25) {
    resulTitle.textContent = "Sog'lom";
    resulTitle.style.color = "#F5E7B2";
  } else if (result > 25 || result >= 30) {
    resulTitle.textContent = "Ortiqcha vazn";
    resulTitle.style.color = "#973131";
  } else if (result > 30 || result >= 35) {
    resulTitle.textContent = "Semirib ketgan I sinf";
  } else if (result > 35 || result >= 40) {
    resulTitle.textContent = "Semirib ketgan II sinf";
  } else if (result > 40) {
    resulTitle.textContent = "Semirib ketgan III sinf";
    resulTitle.style.color = "#973131";
  }

  //   localStorage.setItem("Vazni", weightValue);
  //   localStorage.setItem("Bo'yi", heightValue);
  //   localStorage.setItem("Yoshi", ageValue);
  //   localStorage.setItem("BMI", result - 1);
  //   localStorage.setItem("Jinsi", true ? "Erkak" : "Ayol");
  //   localStorage.setItem("Darkmode", darkModeValue);
});

indexLink.addEventListener("click", (e) => {
  indexLink.style.display = "none";
  resultLink.style.display = "flex";
  resultMain.style.display = "none";
  indexMain.style.display = "flex";
  //   localStorage.clear();
});

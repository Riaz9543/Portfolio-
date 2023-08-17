let Bangla = document.getElementById("Bangla");
let English = document.getElementById("English");
let math = document.getElementById("math");
function cal(BanglaG,EnglishG,mathG) {
  let x = BanglaG+EnglishG+mathG;
  let y = 3;
  if (BanglaG&&EnglishG&&mathG=='0') {
    console.log('Fail');
  } else {
  let result = (x / y);
  console.log(result);
  }
}
Button.addEventListener("click", function () {
  let BanglaM = Bangla.value;
  let EnglishM = English.value;
  let mathM = math.value;
  if (BanglaM > 100) {
    alert("Number mist be under 100");
  } else if (BanglaM >= 80) {
    BanglaG = 5;
  } else if (BanglaM >= 70) {
    BanglaG = 4;
  } else if (BanglaM >= 60) {
    BanglaG = 3;
  } else if (BanglaM >= 50) {
    BanglaG = 2.50;
  } else if (BanglaM >= 40) {
    BanglaG = 2;
  } else if (BanglaM >= 33) {
    BanglaG = 1;
  } else {
    BanglaG = 0;
  }
  if (EnglishM > 100) {
    alert("Number over 100");
  } else if (EnglishM >= 80) {
    EnglishG = 5;
  } else if (EnglishM >= 70) {
    EnglishG = 4;
  } else if (EnglishM >= 60) {
    EnglishG = 3;
  } else if (EnglishM >= 50) {
    EnglishG = 2.50;
  } else if (EnglishM >= 40) {
    EnglishG = 2;
  } else if (EnglishM >= 33) {
    EnglishG = 1;
  } else {
    EnglishG = 0;
  }
  if (mathM > 100) {
    alert("Number over 100");
  } else if (mathM >= 80) {
    mathG = 5;
  } else if (mathM >= 70) {
    mathG = 4;
  } else if (mathM >= 60) {
    mathG = 3;
  } else if (mathM >= 50) {
    mathG = 2.50;
  } else if (mathM >= 40) {
    mathG = 2;
  } else if (mathM >= 33) {
    mathG = 1;
  } else {
    mathG = 0;
  }
  cal(BanglaG,EnglishG,mathG);
});
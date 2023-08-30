let relocateX = 100;
let relocateY = 200;

function relocateNoButton() {
  const noButton = document.getElementById("noButton");
  noButton.style.left = `${relocateX}px`;
  noButton.style.top = `${relocateY}px`;
}

function showHappyFace() {
  const resultDiv = document.getElementById("result");
  const emoji = document.getElementById("emoji");
  emoji.innerHTML = "😍";
  resultDiv.style.display = "block";
}

function goBack() {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "none";
}

  


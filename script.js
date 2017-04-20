
function hideAll() {
  document.getElementById('jeden').className = "hide";
  document.getElementById('dwa').className = "hide";
  document.getElementById('trzy').className = "hide";
}

function pokaz1() {
  document.getElementById("jeden").className = "show";
  document.getElementById("dwa").className = "hide";
  document.getElementById("trzy").className = "hide";
}

function pokaz2() {
  document.getElementById("jeden").className = "hide";
  document.getElementById("dwa").className = "show";
  document.getElementById("trzy").className = "hide";
}

function pokaz3() {
  document.getElementById("jeden").className = "hide";
  document.getElementById("dwa").className = "hide";
  document.getElementById("trzy").className = "show";
}

hideAll();

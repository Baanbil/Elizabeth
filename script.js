const messBtn = document.getElementById("message");
const container1 = document.getElementById("main");
const container2 = document.getElementById("content");
const backBtn = document.getElementById("back");
const container3 = document.getElementById("content2");
const nxtBtn = document.getElementById("next");
const clickBtn = document.getElementById("click");
const container4 = document.getElementById("miss")

messBtn.onclick = function(){
  container1.style.display = "none"
  container2.style.display = "block"
}
backBtn.onclick = function(){
  container2.style.display = "none";
  container1.style.display = "block";
}
nxtBtn.onclick = function(){
  container2.style.display = "none";
  container3.style.display = "block";
}
clickBtn.onclick = function(){
  clickBtn.style.display = "none";
  container4.style.display = "block";
}
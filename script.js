const on = document.getElementById("on");
const off = document.getElementById("off");
const onbtn = document.getElementById("onbtn");
const offbtn = document.getElementById("offbtn");
const aud = document.getElementById("aud");

onbtn.onclick = () => {
  off.style.display = "none";
  on.style.display = "block";
  onbtn.style.display = "none";
  offbtn.style.display = "flex";
  aud.play();
};

offbtn.onclick = () => {
  off.style.display = "block";
  on.style.display = "none";
  onbtn.style.display = "flex";
  offbtn.style.display = "none";
  aud.play();
};

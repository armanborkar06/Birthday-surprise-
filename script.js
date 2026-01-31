let friendName = "My Best Friend Mohini 💙";

let memories = [
  "😄 First day of college – nervous & excited",
  "💻 BSc IT practicals & debugging nights",
"🔥 DYF best moments – full enjoy & memories",
"😂 Assignment center – deadline se pehle magic solutions 📚✨",
  "🎓 Last year – but friendship forever"
];

let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let memIndex = 0;
let imgIndex = 0;

document.getElementById("name").innerText = friendName;

function nextMemory() {
  if (memIndex < memories.length) {
    document.getElementById("memoryText").innerText = memories[memIndex];
    document.getElementById("bar").style.width =
      ((memIndex + 1) / memories.length) * 100 + "%";
    memIndex++;
  } else {
    showSurprise();
  }
}

function showSurprise() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");

  document.getElementById("song").play();
  startSlideshow();
  startHearts();
  startConfetti();

  if (navigator.vibrate) {
    navigator.vibrate([300, 200, 300]);
  }
}

function startSlideshow() {
  setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("slide").src = images[imgIndex];
  }, 2500);
}

/* Floating hearts */
function startHearts() {
  setInterval(() => {
    let heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

/* Confetti */
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    let conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.top = "-10px";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.width = "8px";
    conf.style.height = "8px";
    conf.style.background =
      `hsl(${Math.random() * 360},100%,50%)`;
    conf.style.animation =
      `fall ${2 + Math.random() * 3}s linear`;
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 5000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);
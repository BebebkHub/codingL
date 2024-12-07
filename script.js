document.getElementById("revealBtn").addEventListener("click", function () {
  const message = document.getElementById("message");
  message.style.opacity = 1; // Show the message
});

function createStar() {
  const star = document.createElement("div");
  star.classList.add("stars");

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = 5 + Math.random() * 3 + "s";
  star.style.animationDelay = Math.random() * 2 + "s";

  document.body.appendChild(star);

  star.addEventListener("animationend", () => {
    star.remove();
  });
}

for (let i = 0; i < 100; i++) {
  createStar();
}

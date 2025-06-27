function toggleLove() {
  const msg = document.getElementById("message");
  const audio = document.getElementById("audio");

  if (msg.style.display === "none" || msg.style.display === "") {
    msg.innerText = "¡Te amo! 💘";
    msg.style.display = "block";
  } else {
    msg.innerText = "Haz clic en el corazón";
    msg.style.display = "none";
  }

  audio.play();
}

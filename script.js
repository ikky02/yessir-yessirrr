function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "MieAyamEnak" && password === "mamahakutakut") {
    window.location.href = "game.html";
  } else {
    document.getElementById("error-msg").innerText = "Username atau password salah!";
  }
}

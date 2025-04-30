const questions = [
  { q: "Kenapa ayam menyeberang jalan?", a: "karena mau nyebrang" },
  { q: "Kenapa kucing gak suka air?", a: "karena basah" },
  { q: "Apa bedanya kamu dan kalender?", a: "kalender ada tanggal pastinya" }
];
let timeLeft = 30;
let timer;
let current = 0;

function startGame() {
  document.getElementById("question").innerText = questions[current].q;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Waktu: " + timeLeft + " detik";
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("result").innerText = "Waktu habis!";
    }
  }, 1000);
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  if (answer === questions[current].a.toLowerCase()) {
    document.getElementById("result").innerText = "Benar!";
    clearInterval(timer);
  } else {
    document.getElementById("result").innerText = "Salah, coba lagi!";
  }
}

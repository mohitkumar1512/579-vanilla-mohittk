document.getElementById("themeBtn").onclick = () =>
  document.body.classList.toggle("dark");

const quotes = [
  "Hello from Mohit!",
  "My uniqname is mohittk!",
  "SI 579 is a great course!",
  "JavaScript is fun!",
  "You can do it!",
  "Keep pushing forward!",
];

document.getElementById("quoteBtn").onclick = () => {
  document.getElementById("quoteBox").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
};

document.getElementById("msg").oninput = (e) =>
  document.getElementById("count").innerText = e.target.value.length;

let clicks = 0;
document.getElementById("counter").onclick = () => {
  clicks++;
  document.getElementById("num").innerText = clicks;
};

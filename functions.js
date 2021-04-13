document.getElementById("showShort").addEventListener("click", function(e) {
  hideSection("long", "showLong");
  hideSection("contact", "showContact");
  hideSection("blog", "showBlog");
  showSelection("short", "showShort");
})

document.getElementById("showLong").addEventListener("click", function(e) {
  hideSection("short", "showShort");
  hideSection("contact", "showContact");
  hideSection("blog", "showBlog");
  showSelection("long", "showLong");
})

document.getElementById("showContact").addEventListener("click", function(e) {
  hideSection("long", "showLong");
  hideSection("short", "showShort");
  hideSection("blog", "showBlog");
  showSelection("contact", "showContact");
})

document.getElementById("showBlog").addEventListener("click", function(e) {
  hideSection("contact", "showContact");
  hideSection("short", "showShort");
  hideSection("long", "showLong");
  showSelection("blog", "showBlog");
})

document.getElementById("wizard").addEventListener("click", function() {
  if (document.body.classList.contains("theme-dark")) { return; }

  gtag('event', 'click-wizard');
  document.body.classList.add("theme-dark");
  const container = document.querySelector(".sparticles-container");
  new Sparticles(container, { count: 100, shape: "star" });
})

function showSelection(textID, buttonID) {
  document.getElementById(textID).classList.remove("hidden");
  document.querySelector(`#${buttonID} span`).classList.remove('hidden');
}

function hideSection(textID, buttonID) {
  document.getElementById(textID).classList.add("hidden");
  document.querySelector(`#${buttonID} span`).classList.add('hidden');
}
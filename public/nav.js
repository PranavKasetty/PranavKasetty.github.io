// Homepage only: mark the nav link for the section currently in view.
(function () {
  if (location.pathname !== "/") return;
  var links = {
    about: document.querySelector('.site-nav a[href="/"]'),
    research: document.querySelector('.site-nav a[href="/#research"]'),
    writing: document.querySelector('.site-nav a[href="/#writing"]'),
  };
  var sections = ["research", "writing"].map(function (id) { return document.getElementById(id); });
  function update() {
    var y = window.scrollY + window.innerHeight * 0.35, current = "about";
    sections.forEach(function (s) { if (s && s.offsetTop <= y) current = s.id; });
    if (links.writing && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) current = "writing";
    Object.keys(links).forEach(function (k) {
      if (!links[k]) return;
      if (k === current) links[k].setAttribute("aria-current", "page");
      else links[k].removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

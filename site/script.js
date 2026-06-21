(function () {
  var revealItems = document.querySelectorAll(".section-reveal");
  var betaForm = document.querySelector("[data-prototype-form]");
  var formStatus = document.getElementById("form-status");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (betaForm && formStatus) {
    betaForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // TODO: Connect this to a privacy-reviewed email capture service after
      // consent, retention, and sensitive-data handling are defined.
      formStatus.textContent =
        "This prototype does not submit yet. For now, contact the maintainer directly.";
    });
  }
})();

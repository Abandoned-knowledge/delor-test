const navLinks = document.querySelectorAll("#headerDownNav .nav-link");

navLinks.forEach(link => link.addEventListener("click", function () {
    navLinks.forEach(el => el.classList.remove("nav-link__active"));
    this.classList.add("nav-link__active");
}))
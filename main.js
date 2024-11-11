document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Web Developer", "Java Developer", "Traveller"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
});

document.querySelector('.btn-box').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'assets/renukacv2.pdf';
    link.download = 'renukacv2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

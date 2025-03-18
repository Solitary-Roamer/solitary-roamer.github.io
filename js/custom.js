document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_self');
    });
});

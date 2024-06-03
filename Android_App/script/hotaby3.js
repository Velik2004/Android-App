document.addEventListener('DOMContentLoaded', function () {
    const panel = document.getElementById('panel');
    const handle = document.querySelector('.handle');

    handle.addEventListener('click', function () {
        if (panel.classList.contains('open')) {
            panel.classList.remove('open');
        } else {
            panel.classList.add('open');
        }
    });
});


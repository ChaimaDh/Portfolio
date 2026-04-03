function test(){
    alert('0_0')
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle-button');
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.overlay');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        // le5i shil yitifhim hetha bech ki tizil il bara mil side bar yistaka
        if (!sidebar.contains(event.target) && event.target !== toggleButton) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});
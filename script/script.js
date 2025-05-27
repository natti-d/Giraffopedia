function goIndex() {
    window.location.href = './index.html'
}

function goGallery(id) {
    window.location.href = ('./gallery.html#' + id)
}

let topB = document.getElementById('goToTop');
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topB.style.display = "block"
    }
    else {
        topB.style.display = "none"
    }
}

topB.addEventListener("click", function () {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})
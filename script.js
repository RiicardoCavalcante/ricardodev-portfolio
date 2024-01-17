function skills() {
    let iconHTML = document.querySelector('.icon-html');
    let iconCSS = document.querySelector('.icon-css');
    let iconJS = document.querySelector('.icon-js');
    let contentHTML = document.querySelector('.content-html');
    let contentCSS = document.querySelector('.content-css');
    let contentJS = document.querySelector('.content-js');

    function showContent(element) {
        setTimeout(function () {
            element.style.display = 'block';
        }, 300);
    }

    function hideContent(element) {
        element.style.display = 'none';
    }

    iconHTML.addEventListener("mouseenter", function () {
        showContent(contentHTML);
    });
    iconHTML.addEventListener("mouseleave", function () {
        hideContent(contentHTML);
    });

    iconCSS.addEventListener("mouseenter", function () {
        showContent(contentCSS);
    });
    iconCSS.addEventListener("mouseleave", function () {
        hideContent(contentCSS);
    });

    iconJS.addEventListener("mouseenter", function() {
        showContent(contentJS);
    });

    iconJS.addEventListener("mouseleave", function() {
        hideContent(contentJS);
    });
}

skills();

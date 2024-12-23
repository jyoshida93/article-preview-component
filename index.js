const postInfo = document.getElementById('post-info');
const iconBar = document.getElementById('icon-bar');
const footerSection = document.getElementById('bottom-footer');
const mediaQuery = window.matchMedia("(min-width: 40rem)");
document.getElementById("share-button").addEventListener('click', () => {
    iconBar.classList.toggle('icon-bar--hidden')
    if (!mediaQuery.matches) {
        postInfo.classList.toggle('post-info--hidden')
        footerSection.classList.toggle('card__footer--dark');
    }
});

mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
        footerSection.classList.remove('card__footer--dark');
        postInfo.classList.remove('post-info--hidden')
    } else {
        if (!iconBar.classList.contains('icon-bar--hidden')) {
            postInfo.classList.add('post-info--hidden');
            footerSection.classList.add('card__footer--dark');
        }
    }
});
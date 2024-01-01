const likeIcon = "./icons/star-plus-outline.svg";
const haveLikedIcon = "./icons/star-check-outline.svg";
const watchIcon = "icons/eye-check-outline.svg";
const onWatchlistIcon = "icons/eye-plus-outline.svg";



const likeButtons = document.querySelectorAll('.icon-favourite');
likeButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        const src = btn.getAttribute('src');
        if (src===likeIcon){
            btn.setAttribute('src',haveLikedIcon);
        } else {
            btn.setAttribute('src',likeIcon);
        }
    })
})

const watchButtons = document.querySelectorAll('.icon-watchlist');
watchButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        const src = btn.getAttribute('src');
        if (src===watchIcon){
            btn.setAttribute('src',onWatchlistIcon);
        } else {
            btn.setAttribute('src',watchIcon);
        }
    })
})
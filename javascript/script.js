const displayShareSocialLinks = (shareButton) => {
    const socialsLinksContainer = document.querySelector('.socials__linksContainer');
    if (!socialsLinksContainer) {
        const socialsLinksContainer = document.createElement('div');
        socialsLinksContainer.classList.add('socials__linksContainer');
        socialsLinksContainer.innerHTML = `
            <h3>Share</h3> 
            <div class="socials__links"> 
                <a href="#"><img src="images/icon-facebook.svg" alt="facebook icon" class="socials__icon"></a>
                <a href="#"><img src="images/icon-twitter.svg" alt="twitter icon" class="socials__icon"></a>
                <a href="#"><img src="images/icon-pinterest.svg" alt="pinterest icon" class="socials__icon"></a>
            </div>
           `
        shareButton.classList.toggle('active');
        const cardContentAuthor = document.querySelector('.card__contentAuthor');
        cardContentAuthor.appendChild(socialsLinksContainer);
    } else {
        socialsLinksContainer.remove();
        shareButton.classList.toggle('active');
    }

}

window.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.getElementById('share-button');
    shareButton.addEventListener('click', () => {
        displayShareSocialLinks(shareButton)
    });

})
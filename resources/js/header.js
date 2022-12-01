const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const loginImg = $('.header-login');
const profileLogin = $('.profile');

const showHideProfile = function () {
    loginImg.onclick = function () {
        if (profileLogin.classList.contains('active-profile')) {
            profileLogin.classList.remove('active-profile');
        } else {
            profileLogin.classList.add('active-profile');
        }
    }
}
showHideProfile();

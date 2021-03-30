import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.css';

window.onscroll = function (e) {
    const nav = document.querySelector('.navbar')
    if (window.scrollY > 0) {
        nav.classList.add('affix');
    }
    if (window.scrollY === 0) {
        nav.classList.remove('affix')
    }
};
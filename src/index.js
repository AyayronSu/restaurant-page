import { onPageLoad } from "./pageLoad.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

onPageLoad();
loadMenu();
loadContact();

const mainContainer = document.getElementById('content');
const navBtns = document.querySelectorAll('button');

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        mainContainer.innerHTML = '';

        if (e.target.value == 'home') {
            onPageLoad();
        }
    })
});

console.log("test");

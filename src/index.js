import { onPageLoad } from "./pageLoad.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const mainContainer = document.getElementById('content');
const navBtns = document.querySelectorAll('button');

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        mainContainer.innerHTML = '';

        if (e.target.value == 'home') {
            onPageLoad();
        }
        else if (e.target.value == 'menu') {
            loadMenu();
        }
        else {
            loadContact();
        }
    })
});

onPageLoad();

console.log("test");

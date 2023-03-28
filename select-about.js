let tablink = document.querySelector(".tab-links");
let tabcontents = document.querySelector(".tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabContent of tabContents ) {
        tabContent.classList.remove("active-tab");
    }
};




let sidemeu = document.getElementById('sidemenu');

function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}






//const scriptURL = 'https://script.google.com/macros/s/AKfycby9bXkCbRuPdyDmzsoKdcR7kWqXTggoE0c82xKTDuU2CiJ2FcRRs5a8JED_nFpWqgYl6Q/exec'
//const form = document.forms['submit-to-google-sheet']

//form.addEventListener('submit', e => {
//    e.preventDefault()
//    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//    .then(response => console.log('Success!', response))
//    .catch(error => console.error('Error!', error.message))
//})

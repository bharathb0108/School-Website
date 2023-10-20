var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu=document.getElementById("navlinks");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwuzeLN7Fjzw1lxwTcocaubNiJ5EqANmPC8InDH_U6e_-Ss5K-QEA9ivdCurfr2leOy/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML ="Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


function initMap() { 
    var uluru = {lat:12.74717470, lng: 75.48226180}; 
    var map = new google.maps.Map(document.getElementById('map'), { 
    zoom: 4, 
    center: uluru 
    }); 
    var marker = new google.maps.Marker({ 
    position: uluru, 
    map: map 
    }); 
} 
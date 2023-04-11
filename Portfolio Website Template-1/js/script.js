console.log("Runnnniiiinnnggggg.....")
var header = document.querySelector(".header")
var ham = document.querySelector(".ham")
var closee = document.querySelector(".close")

ham.addEventListener("click", ()=>{
header.style.display = "block"
ham.style.display= "none"
setTimeout(() => {
    closee.style.display="block"
}, 500);

})

closee.addEventListener("click", ()=>{
    header.style.display = "none"
    ham.style.display= "block"
    closee.style.display="none"
    })

    var typed = new Typed('.auto-txt', {
        strings: ['George', 'An Artist','Freelancer'],
        typeSpeed: 100,
        backspeed:100,
        loop:true
      });
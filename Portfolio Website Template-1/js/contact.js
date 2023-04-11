console.log("helllooo")
var btn= document.querySelector(".form-btn")
var name_i =  document.querySelector(".name")
var name_warn = document.querySelector(".warning-name")
var no_warn = document.querySelector(".warning-number")
var m_warn = document.querySelector(".warning-message")
btn.addEventListener("click", ()=>{
    if (name_i.value=='') {
        name_warn.style.display = "block"
    } else{
        name_warn.style.display = "none"
    }

    if (document.querySelector(".i-text").value=='') {
       no_warn.style.display = "block"
    } else{
       no_warn.style.display = "none"
    }

    if (document.querySelector(".message").value=='') {
        m_warn.style.display = "block"
    } else{
        m_warn.style.display = "none"
    }

    
})



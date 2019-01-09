// drop-down menu
document.querySelectorAll(".dropbtn").forEach(function(el){
    el.addEventListener("click",function(e){
        var el = e.currentTarget.nextElementSibling;

        if (el.classList.contains("dropdown-content-show")){
            el.classList.remove("dropdown-content-show");
            el.classList.add("dropdown-content");
        } else{
            el.classList.remove("dropdown-content");
            el.classList.add("dropdown-content-show");
        }
    });
});



// show and hide
document.querySelectorAll(".more-less").forEach(function(el){
    el.addEventListener("click",function(e){
        var el = e.currentTarget.nextElementSibling;
        if (e.currentTarget.textContent == "See more »") {
            el.style.display = 'block';
            e.currentTarget.textContent = "See less »";
        } else {
            el.style.display = 'none';
            e.currentTarget.textContent = "See more »";
        }
    });
});
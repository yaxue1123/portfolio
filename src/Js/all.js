// when the DOM is ready, execute the JQuery code
$(document).ready(function () {
    // ----------------- slide show --------------------
    $(".prev").click(function (e) {
        plusSlides(-1);
    })

    $(".next").click(function (e) {
        plusSlides(1);
    })

    $(".dot").click(function (e) {
        let id = $(this).attr("id").substr(4);
        currentSlide(id);
    })

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = $(".slides");
        let dots = $(".dot");
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        try {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
        catch (err) {
        }
    }

    // ------------- education, internship and leadership ---------
    // control hide and show effect.
    $(".more-less").click(function (e) {
        let id = "detail-" + $(this).attr("id");
        // if going to show, hide all other showing items first.
        if ($("#" + id).css("display") == "none") {
            $(".hide").css("display", "none");
        }
        $("#" + id).toggle();
    })

    // -------------------------- project----------------------------
    // --------- show Back to Top Button ----------
    let scrollTrigger = 100, // px
        showBackToTop = function () {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };

    $(window).on('scroll', function () {
        showBackToTop();
    });

    // ---------- scroll to position -------
    // Scroll whole page to top when clicking the button.
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    // scroll to top of user's selection of a project.
    // when user selects a category.
    $('.project-sidebar h2').on('click', function (e) {
        // Create the id of element to be scrolled.
        let id = $(this).attr("id") + '-scroll';
        let top = $('#' + id).offset().top;
        $('html,body').animate({
            scrollTop: top - 100
        }, 400);
    });
    // when user selects a specific project.
    $('.project-sidebar p').on('click', function (e) {
        // Decide which row, 3 items per row.
        let row = parseInt(($(this).attr("id").split('-')[1] - 1) / 3) + 1;
        // Create the id of element to be scrolled.
        let id = $(this).attr("id").substr(0, 2) + '-scroll-' + row;
        let top = $('#' + id).offset().top;
        $('html,body').animate({
            scrollTop: top - 100
        }, 400);
    });

    // ----------------- mobile view --------------------------------
    // ----------------- drop-down menu -----------------------------
    $(".dropbtn").on('click', function (e) {
        let el = $(this).next();
        if (el.hasClass("dropdown-content-show")) {
            el.removeClass("dropdown-content-show");
            el.addClass("dropdown-content");
        } else {
            el.removeClass("dropdown-content");
            el.addClass("dropdown-content-show");
        }
    })
})








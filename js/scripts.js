window.addEventListener('resize', toggleMobileMenu);
window.addEventListener('load', toggleMobileMenu);


function toggleMobileMenu() {
    if (document.documentElement.clientWidth < 800) {
        useMobileMenu();
    } else {
        useDesktopMenu();
    }
}

function useMobileMenu() {
    document.getElementById("show-nav-btn").classList.remove('hidden');
    document.getElementById("toggle-nav").style.right = `-${document.getElementById("toggle-nav").offsetWidth}px`;
    document.getElementById("hide-nav-btn").classList.remove('hidden');
    document.getElementById("show-nav-btn").addEventListener('click', showNav);
    document.getElementById("hide-nav-btn").addEventListener('click', hideNav);
}

function useDesktopMenu() {
    document.getElementById("show-nav-btn").classList.add('hidden');
    document.getElementById("hide-nav-btn").classList.add('hidden');
    document.getElementById("overlay").classList.add('hidden');
    document.getElementById("toggle-nav").style.width = "auto";
}

function showNav(e) {
    document.getElementById("toggle-nav").style.right = "0px";
    document.getElementById("overlay").classList.remove('hidden');
}

function hideNav(e) {
    document.getElementById("toggle-nav").style.right = `-${document.getElementById("toggle-nav").offsetWidth}px`;
    document.getElementById("overlay").classList.add('hidden');
}

$("#contact-form").submit(function(e) {
    const data = {
        name: $('#contact-name').val(),
        email: $('#contact-email').val(),
        phone: $('#contact-phone').val(),
        message: $('#contact-message').val(),
    };
    $.ajax({
        type: "POST",
        url: '../php/sender.php',
        data: data,
        success: function() {
            $(".overlay").removeClass("hidden").delay(5000).queue(function(next) {
                $(this).addClass("hidden");
                next();
            });
            $(".success-msg").removeClass("hidden").delay(5000).queue(function(next) {
                $(this).addClass("hidden");
                next();
            });
            $('#contact-form').trigger('reset');
        }
    });

    e.preventDefault();
})


$('body').on('click', closeFormPopup);

function closeFormPopup(e) {
    if (!$(".success-msg").hasClass("hidden")) {
        if ($(e.target).hasClass("close-btn") || !$(e.target).hasClass("success-msg")) {
            $(".success-msg").addClass("hidden");
            $(".overlay").addClass("hidden");
        }
    }
}

$('a[href^="#"]').on('click', function(event) {
    const target = $(this.getAttribute('href'));
    $('.nav-active').removeClass('nav-active');
    if ($(this).hasClass('nav-link')) {
        $(this).addClass('nav-active');
    }

    if (target.length) {
        event.preventDefault();
        if (document.documentElement.clientWidth < 800) {
            hideNav();
        }
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

window.addEventListener('resize', sliderFix);
window.addEventListener('load', sliderFix);

function sliderFix() {
    const porfolioItemHeight = $(".porfolio-item").width() * 0.8;
    const slickDotsFullHeight = $(".slick-dots").outerHeight(true);
    const h2FullHeight = $("h2").outerHeight(true);
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const sliderWidth = $(".slick-slide");
    const sliderHeight = windowHeight - slickDotsFullHeight - h2FullHeight;

    $(".porfolio-item").parent().addClass('slider-row');
    $(".porfolio-item").height(porfolioItemHeight);
    $(".porfolio-item").width($(".porfolio-item").first().width());

};
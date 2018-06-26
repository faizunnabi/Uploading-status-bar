(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

})(jQuery); // End of use strict

function upload_image() {
    var bar = $('#bar');
    $('#myForm').ajaxForm({
        beforeSubmit: function() {
            document.getElementById("bar-container").style.display = "block";
            var percentVal = '0%';
            bar.width(percentVal);
            bar.html(percentVal);
        },

        uploadProgress: function(event, position, total, percentComplete) {
            var percentVal = percentComplete + '%';
            bar.width(percentVal);
            bar.html(percentVal);
        },

        success: function() {
            var percentVal = '100%';
            bar.width(percentVal);
            bar.html(percentVal);
        },

        complete: function(xhr) {
            if (xhr.responseText) {
                document.getElementById("output_image").innerHTML = xhr.responseText;
            }
        }
    });
}
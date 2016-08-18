var app = (function ($) {
    "use strict";

    /** Private properties */

    /** Private methods */
    var showSection;

    /**
     * Show after scroll
     * */
    showSection = function () {
        var reqSection = $('[data-order]'),
            reqSectionPos = reqSection.offset().top + 1;

        $('body, html').animate({scrollTop: reqSectionPos}, 500);
    };

    return {
        /**
         * Tabs
         *
         * use: data-tab-wrap, data-tab-link, data-tab-body
         * */
        tabs: function () {
            $('[data-tab-link]').on('click', function () {
                var index = $(this).data('tab-link');

                $(this)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');

                $(this)
                    .parents('[data-tab-wrap]')
                    .find('[data-tab-body="' + index + '"]')
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
            });
        },

        /**
         * Toggle mobile menu
         * */
        mobileMenu: function () {
            $('.nav_hamburger').on('click', function () {
                $(this).toggleClass('active');
            });
        },

        /**
         * Scroll to Application
         * */
        scrollToSection: function () {
            $('[data-order-link]').on('click', function (e) {
                e.preventDefault();

                showSection();
            });
        },

        /**
         * Popup
         * */
        openPopup: function() {
            $('[data-phone-popup]').on('click', function(){
                $.colorbox({
                    opacity: 1,
                    arrowKey: false,
                    close: '',
                    href: 'phone_popup.html'
                });
            });
        },

        init: function() {
            app.tabs();
            app.mobileMenu();
            app.scrollToSection();
            app.openPopup();
        }

    };

})(jQuery);

/**
 * Document ready
 * */
document.addEventListener("DOMContentLoaded", app.init);

/**
 * Window scroll
 * */
window.onscroll = function () {

};

/**
 * Window resize
 * */
window.onresize = function () {

};
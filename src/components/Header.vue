<template>
    <section>
        <nav class="navbar navbar-expand-lg custom_navbar custom-navbar-light mx-0 px-0 pt-2 pb-0  mb-2 mb-sm-5 navbar-fixed-top" id="custom-navbar">
            <div class="row mx-0 pt-3 pt-lg-0 w-100">
                <div class="col-12 col-md-3 offset-md-1 offset-lg-2">
                    <a href="#" class="navbar-brand"><h3>Best Trans B.V.</h3></a>
                </div>
                <div class="col-12 col-md-5">
                    <ul class="navbar-nav float-right">
                        <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#about" class="nav-link">Over&nbsp;ons</a></li>
                        <li class="nav-item"><a href="#services" class="nav-link">Diensten</a></li>
                        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'Header',
}

import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

$(window).on('scroll', function () {
    var custom_navbar = $('.custom_navbar');

    var scroll_position = $(window).scrollTop();

    if (scroll_position > 0) {
        $(custom_navbar).addClass('bg-white');
    } else if (scroll_position == 0) {
        $(custom_navbar).removeClass('bg-white');
    }
});
</script>

<style scoped>
nav .navbar-brand img {
    max-width: 50%;
}

.custom-navbar-light {
    background: transparent !important;
    left: 0;
    right: 0;
    z-index: 15;
    position: fixed;
}

.custom-navbar-light.bg-white {
    background: white !important;
    border-bottom: #707070 1px solid;
    -webkit-box-shadow: 0px 10px 59px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 59px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 59px -7px rgba(0, 0, 0, 0.75);
}

.custom-navbar-light h3 {
    color: #B43C39;
}

@media (max-width: 991.98px) {
    nav .navbar-brand img {
        max-width: 70%;
    }

    .custom-navbar-light {
        background: white !important;
        top: 0;
    }

    .custom-navbar-light .row:first-of-type {
        background: white !important;
    }
}

@media (max-width: 766px) {
    .row {
        width: 102% !important;
    }

    .col-12 {
        text-align: center;
    }

    .navbar-nav {
        float: none !important;
        justify-content: center;
    }
}

@media (max-width: 455px) {
    a.nav-link {
        padding: .5em .5em;
    }
}

@media (max-width: 991.98px) {
    .custom-navbar-light .navbar-nav {
        padding-bottom: 10px;
        flex-direction: row;
    }
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link {
    font-size: 14px;
    padding-top: .9rem;
    padding-bottom: .9rem;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 1px;
    color: #000;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 1 !important;
}

.custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
    color: #B43C39;
}

@media (max-width: 991.98px) {
    .custom-navbar-light .navbar-nav > .nav-item > .nav-link {
        padding: .5em .9em;
        color: black;
    }

    .custom-navbar-light .navbar-nav > .nav-item > .nav-link:hover {
        color: #B43C39;
    }
}
</style>

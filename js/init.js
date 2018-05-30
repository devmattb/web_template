$(document).ready(function(){
    /**
    *   PRELOADER INIT
    **/
    $("#preloader").fadeOut("slow");
    $("body").fadeIn("slow");

    /**
    *      NAV INITIALIZATION
    **/
    $(".button-collapse").sideNav({'closeOnClick': true}); // Initialize sidenav button
    $('.modal').modal(); // Initialize modal.
    $('select').material_select(); // Initialize select in materialize forms.
    $('ul.tabs').tabs(); // Initialize tabs component.
})

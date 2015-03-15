$(document).ready(function(){
    $('.sliderPart').load('slider.html');

    $('body').on('click','.menuClick',function(event){
        $('.mainMenu').removeClass('selectedMenu');
        $(this).closest('.mainMenu').addClass('selectedMenu');
        $('.page').hide();
        var pageName = $(this).attr('data-page');
        $('#'+pageName).show();
    });
});
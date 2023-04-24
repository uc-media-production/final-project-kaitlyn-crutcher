	
$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var cartColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.below img[data-image = ' + cartColor + ']').addClass('active');
        $(this).addClass('active');
    });
});

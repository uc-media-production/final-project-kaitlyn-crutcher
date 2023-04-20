	
$(document).ready(function() {
    $('.color-choose input').on('click', function() {
        const cartColor = $(this).attr('data-image');
        $('#product-image').attr('src', "../img/products/beyondfour/" + cartColor + ".jpg");
    });
});
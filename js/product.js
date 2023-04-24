	
$(document).ready(function() {
    $('.color-choose li').on('click', function() {
        const cartColor = $(this).attr('data-image');
        $('#product-image').attr('src', "../img/products/beyondfour/" + cartColor + ".jpg");
    });
});

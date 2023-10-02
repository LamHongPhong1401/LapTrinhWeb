$(document).ready(function () {
    $('.right').click(function (event) {
        var sldie_sau = $('.active').next();
        if(sldie_sau.length != 0){
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            sldie_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.item:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
    });

    $('.left').click(function (event) {
        var sldie_truoc = $('.active').prev();
        if(sldie_truoc.length != 0){
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            sldie_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }else {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.item:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }
    });
});
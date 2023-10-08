//check email
$(".submit").on("click", function (){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email = $('#email').val();
        if(!re.test(email)){
            $('.gmail').add('<p class="result-gmail"></p>').appendTo('.gmail');
            if($('.result-gmail').text() === ""){ $('.result-gmail').text("invalid");}
            $('.gmail, #email').css('background-color', '#ffcccc')
                .css('border', 'red');
        }else{
            $('.gmail, #email').css('background-color', '#f7f7f7')
                .css('border', 'f7f7f7')
            $('.gmail .result-gmail').remove();
        }

})
//active tk
$('.gmail, #email').on('click', function () {
    $('.gmail, #email').css('background-color', '#f7f7f7')
    $('.gmail .result-gmail').remove()
})
//check phone number
$(".submit").on("click", function (){
    const re = /^[0-9]{10}$/
    const sdt = $('#phone').val();
        if(!re.test(sdt) && !sdt == ""){
            $('.phone').add('<p class="result-phone"></p>').appendTo('.phone');
            if($('.result-phone').text() === ""){ $('.result-phone').text("invalid");}
            $('.phone, #phone').css('background-color', '#ffcccc')
                .css('border', 'red')
        }else{
            $('.phone, #phone').css('background-color', '#f7f7f7')
                .css('border', 'f7f7f7')
            $('.phone .result-phone').remove()
        }
})
//active mk
$('.phone, #phone').on('click', function () {
    $('.phone, #phone').css('background-color', '#f7f7f7')
    $('.phone .result-phone').remove()
})
//check fullname
$(".submit").on("click", function (){
    const fullname = $('#fullname').val();
    if(fullname == ""){
        $('.fullname').add('<p class="show"></p>').appendTo('.fullname');
        if($('.show').text() === ""){ $('.show').text("invalid");}
        $('.fullname, #fullname').css('background-color', '#ffcccc')
            .css('border', 'red')
    }else{
        $('.fullname, #fullname').css('background-color', '#f7f7f7')
            .css('border', 'f7f7f7')
        $('.fullname .show').remove()
    }
})
//active mk
$('.fullname, #fullname').on('click', function () {
    $('.fullname, #fullname').css('background-color', '#f7f7f7')
    $('.fullname .show').remove()
})


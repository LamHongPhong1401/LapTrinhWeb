//check tk
$(".sign-in-btn").on("click", function (){
    const username = $('.un').val();
    if(username == ""){
        $('.placehodel-tk').add('<p class="un-show"></p>').appendTo('.placehodel-tk');
        if($('.un-show').text() === ""){ $('.un-show').text("invalid");}
        $('.un').css('background-color', '#ffcccc')
    }else{
        $('.un').css('background-color', '#ffffff')
    }
})
//check mk
$(".sign-in-btn").on("click", function (){
    const password = $('.pw').val();
    if(password == ""){
        $('.placehodel-mk').add('<p class="pw-show"></p>').appendTo('.placehodel-mk');
        if($('.pw-show').text() === ""){ $('.pw-show').text("invalid");}
        $('.pw').css('background-color', '#ffcccc')
    }else{
        $('.pw').css('background-color', '#ffffff')
    }
})
//active tk
$('.put-data.un').on('click', function () {
    $('.put-data.un').css('background-color', '#ffffff')
    $('.un-show').remove()
})
//active mk
$('.put-data.pw').on('click', function () {
    $('.put-data.pw').css('background-color', '#ffffff')
    $('.pw-show').remove()
})
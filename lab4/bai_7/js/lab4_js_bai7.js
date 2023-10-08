
$(document).ready(function() {
    var buttonContainer = $("#button-container");
    var numbers = Array.from({ length: 64 }, (_, i) => i + 1); // Tạo danh sách từ 1 đến 64

    // Hàm kiểm tra sự kiện click
    function checkButtonClick(event) {
        var clickedNumber = parseInt($(this).text());

        if (clickedNumber === numbers[0]) {
            // Nếu nhấn đúng số thứ tự hiện tại
            numbers.shift(); // Xóa số đó khỏi danh sách
            $(this).css('visibility', 'hidden'); // Xóa button
            if (numbers.length === 0) {
                alert("Bạn đã hoàn thành!");
            }
        } else {
            alert("Bạn đã nhấn sai!");
        }
    }

    // Tạo button và gán sự kiện click cho mỗi button
    numbers.forEach(function(number) {
        var button = $("<button>" + number + "</button>");
        buttonContainer.append(button);
        button.click(checkButtonClick);
    });
});


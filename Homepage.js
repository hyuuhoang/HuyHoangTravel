// Lấy các phần tử một lần ngoài hàm để tối ưu hơn
const mybutton = document.getElementById("myBtn");
const myMessenger = document.getElementById("myMessenger");
const myPhoneCall = document.getElementById("myPhonecall");

// Mảng chứa tất cả các nút
const actionButtons = [mybutton, myMessenger, myPhoneCall];

window.onscroll = function() {

    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        actionButtons.forEach(button => {
            button.classList.add("visible");
        });
    } else {
        actionButtons.forEach(button => {
            button.classList.remove("visible");
        });
    }
}

function TopFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Chờ cho toàn bộ nội dung trang được tải xong
document.addEventListener('DOMContentLoaded', function() {

    // 1. Tìm tất cả các mục <li> trong header
    const menuItems = document.querySelectorAll('.header ul li');

    // 2. Lặp qua từng mục và lắng nghe sự kiện 'click'
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {

            // 3. Trước tiên, xóa lớp 'active' khỏi TẤT CẢ các mục
            menuItems.forEach(function(i) {
                i.classList.remove('active');
            });

            // 4. Sau đó, thêm lớp 'active' chỉ vào mục VỪA ĐƯỢC NHẤP
            item.classList.add('active');
        });
    });

});

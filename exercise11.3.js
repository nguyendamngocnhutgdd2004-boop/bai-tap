// 1. Nhập số từ người dùng và chuyển sang kiểu số nguyên
let number = Number(prompt("Nhập vào một số từ 0 đến 9:"));

// 2. Sử dụng switch...case để kiểm tra từng trường hợp
switch (number) {
    case 0:
        alert("Số Không");
        break;
    case 1:
        alert("Số Một");
        break;
    case 2:
        alert("Số Hai");
        break;
    case 3:
        alert("Số Ba");
        break;
    case 4:
        alert("Số Bốn");
        break;
    case 5:
        alert("Số Năm");
        break;
    case 6:
        alert("Số Sáu");
        break;
    case 7:
        alert("Số Bảy");
        break;
    case 8:
        alert("Số Tám");
        break;
    case 9:
        alert("Số Chín");
        break;
    default:
        alert('Chưa xử lý số lớn hơn 10');
        break;
}

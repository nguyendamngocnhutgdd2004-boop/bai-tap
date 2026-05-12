// 1. Nhập hai số a và b
let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

// 2. Nhập phép tính
let phepTinh = prompt("Nhập phép tính (+, -, *, /, %):");

// 3. Xử lý logic và hiển thị kết quả
let ketQua;

if (phepTinh === "+") {
    ketQua = a + b;
} else if (phepTinh === "-") {
    ketQua = a - b;
} else if (phepTinh === "*") {
    ketQua = a * b;
} else if (phepTinh === "/") {
    // Kiểm tra trường hợp chia cho 0
    ketQua = (b !== 0) ? (a / b) : "Không thể chia cho 0";
} else if (phepTinh === "%") {
    ketQua = a % b;
} else {
    ketQua = "Phép tính không hợp lệ!";
}

// 4. Hiển thị kết quả bằng alert
alert(`Kết quả của ${a} ${phepTinh} ${b} = ${ketQua}`);

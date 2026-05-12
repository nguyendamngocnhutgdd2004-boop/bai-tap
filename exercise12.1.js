let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

if (a % b === 0) {
    alert(a + " chia hết cho " + b);
} else {
    alert(a + " không chia hết cho " + b);
}
let tuoi = Number(prompt("Nhập tuổi học sinh:"));

if (tuoi < 15) {
    alert("Học sinh không đủ điều kiện vào học lớp 10.");
} else {
    alert("Học sinh đủ điều kiện vào học lớp 10.");
}
let soNguyen = Number(prompt("Nhập một số nguyên:"));

if (soNguyen > 0) {
    console.log("Số này lớn hơn 0");
} else if (soNguyen < 0) {
    console.log("Số này nhỏ hơn 0");
} else {
    console.log("Số này bằng 0");
}
let x = Number(prompt("Nhập số thứ nhất:"));
let y = Number(prompt("Nhập số thứ hai:"));
let z = Number(prompt("Nhập số thứ ba:"));

let max = x;
if (y > max) max = y;
if (z > max) max = z;

alert("Giá trị lớn nhất là: " + max);
let diemKT = Number(prompt("Nhập điểm kiểm tra:"));
let diemGK = Number(prompt("Nhập điểm giữa kỳ:"));
let diemCK = Number(prompt("Nhập điểm cuối kỳ:"));

let diemTB = (diemKT + diemGK * 2 + diemCK * 3) / 6;

let xepLoai = "";
if (diemTB >= 9) xepLoai = "Xuất Sắc";
else if (diemTB >= 8) xepLoai = "Giỏi";
else if (diemTB >= 6.5) xepLoai = "Khá";
else if (diemTB >= 5) xepLoai = "Trung Bình";
else xepLoai = "Yếu";

alert("Điểm TB: " + diemTB.toFixed(1) + " - Xếp loại: " + xepLoai);

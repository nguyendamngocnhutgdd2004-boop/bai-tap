// 1. Khai báo mảng số nguyên gồm 15 phần tử có sẵn
const numbers = [5, 3, 8, 5, 2, 9, 5, 7, 3, 5, 1, 8, 4, 5, 6];
console.log("Mảng hiện tại:", numbers);

// 2. Nhập số nguyên k cần kiểm tra từ người dùng
const userInput = prompt("Nhập vào một số nguyên k để kiểm tra:");
const k = parseInt(userInput); // Chuyển chuỗi nhập vào thành số nguyên

// 3. Khai báo biến đếm số lần xuất hiện
let count = 0;

// 4. Duyệt mảng bằng vòng lặp for và kiểm tra điều kiện
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === k) {
    count++; // Tăng biến đếm lên 1 nếu tìm thấy k
  }
}

// 5. Hiển thị kết quả ra màn hình
if (isNaN(k)) {
  alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
  alert("Số " + k + " xuất hiện " + count + " lần trong mảng.");
}

// 1. Định nghĩa hàm tính tổng sử dụng reduce()
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); // 0 là giá trị khởi tạo (initial value) cho biến tích lũy
}

// 2. Các mảng dữ liệu mẫu để chạy thử
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 40];
let array3 = [-5, 5, 2, 8, -2];

// 3. Gọi hàm và in kết quả ra console
console.log("Tổng mảng 1:", sumArray(array1)); // Kết quả: 15
console.log("Tổng mảng 2:", sumArray(array2)); // Kết quả: 100
console.log("Tổng mảng 3:", sumArray(array3)); // Kết quả: 8
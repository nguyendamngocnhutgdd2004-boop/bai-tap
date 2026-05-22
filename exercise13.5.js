// 1. Tạo mảng ngẫu nhiên từ 10 đến 20 phần tử (giá trị từ 1 đến 100)
const arrayLength = Math.floor(Math.random() * 11) + 10; 
const numbers = [];

for (let i = 0; i < arrayLength; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Mảng ngẫu nhiên được tạo:", numbers);

// 2. Khai báo biến lưu trữ tổng
let sumEven = 0; // Tổng số chẵn
let sumOdd = 0;  // Tổng số lẻ

// 3. Duyệt mảng bằng vòng lặp for và kiểm tra điều kiện if-else
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumEven += numbers[i]; // Nếu chia hết cho 2 là số chẵn
  } else {
    sumOdd += numbers[i];  // Ngược lại là số lẻ
  }
}

// 4. Hiển thị kết quả ra màn hình bằng alert()
alert("Tổng các số chẵn là: " + sumEven);
alert("Tổng các số lẻ là: " + sumOdd);

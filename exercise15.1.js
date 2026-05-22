// ====== BÀI 1: ĐẾM SỐ >= 10 ======

const arr1 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);
console.log("Mảng bài 1:", arr1);

let count1 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 10) {
        count1++;
    }
}
console.log(`Có ${count1} số nguyên lớn hơn hoặc bằng 10.`);


// ====== BÀI 2: TÌM PHẦN TỬ LỚN NHẤT VÀ VỊ TRÍ ======

const arr2 = [];
while (arr2.length < 10) {
    let num = Math.floor(Math.random() * 50) + 1;
    if (!arr2.includes(num)) arr2.push(num);  // Không trùng nhau
}
console.log("Mảng bài 2:", arr2);

let max2      = arr2[0];  // Giả sử phần tử đầu là lớn nhất
let maxIndex2 = 0;

for (let i = 1; i < arr2.length; i++) {  // Bắt đầu từ i=1 vì i=0 đã gán rồi
    if (arr2[i] > max2) {
        max2      = arr2[i];
        maxIndex2 = i;
    }
}
console.log(`Phần tử lớn nhất là ${max2} tại vị trí index: ${maxIndex2}`);


// ====== BÀI 3: TÌM MAX VÀ TÍNH TRUNG BÌNH ======

const arr3 = [5, 12, 8, 25, 30, 7];
console.log("Mảng bài 3:", arr3);

let max3 = arr3[0];
let sum3 = 0;

for (let i = 0; i < arr3.length; i++) {
    sum3 += arr3[i];          // Cộng dồn
    if (arr3[i] > max3) {
        max3 = arr3[i];
    }
}

let avg3 = sum3 / arr3.length;
console.log(`Giá trị lớn nhất: ${max3}`);
console.log(`Giá trị trung bình: ${avg3.toFixed(2)}`);  // toFixed(2): làm tròn 2 chữ số thập phân


// ====== BÀI 4: ĐẢO NGƯỢC MẢNG (không dùng reverse()) ======

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Mảng trước khi đảo:", arr4);

// Chỉ lặp tới giữa mảng, đổi chỗ 2 đầu vào nhau
for (let i = 0; i < Math.floor(arr4.length / 2); i++) {
    let temp              = arr4[i];
    arr4[i]               = arr4[arr4.length - 1 - i];
    arr4[arr4.length-1-i] = temp;
}
console.log("Mảng sau khi đảo:", arr4);


// ====== BÀI 5: ĐẾM SỐ NGUYÊN ÂM TRONG CHUỖI ======

const str  = "10 -3 5 -7 0 -12 8 -1";
const arr5 = str.split(" ").map(Number);  // Tách theo khoảng trắng → ép thành số

let countNegative = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < 0) {
        countNegative++;
    }
}
console.log(`Chuỗi gốc: "${str}"`);
console.log(`Số lượng số nguyên âm: ${countNegative}`);  // Kết quả: 4


// ====== BÀI 6: TÌM KIẾM TUYẾN TÍNH (Linear Search) ======

const arr6 = [3, 7, 12, 19, 24, 35, 41, 56, 68, 90];

let x;
do {
    x = parseInt(prompt("Bài 6: Nhập số nguyên X cần tìm:"));
    if (isNaN(x)) alert("Vui lòng nhập số nguyên hợp lệ!");
} while (isNaN(x));

let isFound = false;
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] === x) {
        isFound = true;
        break;  // Tìm thấy → dừng ngay, không duyệt tiếp
    }
}

if (isFound) {
    alert(`Number ${x} is in the array`);
} else {
    alert(`Number ${x} is not in the array`);
}


// ====== BÀI 7: SẮP XẾP GIẢM DẦN (Bubble Sort) ======

const arr7 = [45, 12, 89, 7, 34, 21, 66, 3, 99, 50];
console.log("Mảng trước khi xếp:", arr7);

// Mỗi lượt i "đẩy" phần tử nhỏ nhất xuống cuối
// Vòng j không cần xét phần đã sắp (arr7.length - 1 - i)
for (let i = 0; i < arr7.length - 1; i++) {
    for (let j = 0; j < arr7.length - 1 - i; j++) {
        if (arr7[j] < arr7[j + 1]) {  // Đổi chỗ nếu trái < phải (để giảm dần)
            let temp    = arr7[j];
            arr7[j]     = arr7[j + 1];
            arr7[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi xếp giảm dần:", arr7);


// ====== BÀI 8: NỐI 2 MẢNG ======

const a = [1,  2,  3,  4,  5,  6,  7,  8,  9,  10];
const b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c   = [];

for (let i = 0; i < b.length; i++) c.push(b[i]);  // Thêm b trước
for (let i = 0; i < a.length; i++) c.push(a[i]);  // Thêm a sau

console.log("Mảng c (b trước, a sau):", c);

// Cách ngắn gọn: c = [...b, ...a];
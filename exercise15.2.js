// ====== BÀI 1: ĐẢO NGƯỢC MẢNG KÝ TỰ ======

const chars1 = ['c', 's', 'c', '2', '6', '1'];

const result1 = chars1.reverse().join("");
// reverse() : đảo ngược mảng  → ['1','6','2','c','s','c']
// join("")  : nối lại thành chuỗi, ngăn cách bởi "" (rỗng)

console.log("Kết quả đảo ngược:", result1); // "261csc"


// ====== BÀI 2: ĐẾM KÝ TỰ SỐ TRONG MẢNG ======

const chars2 = ['a', 'c', '4', 'x', '9', '2', 'g'];
let digitCount = 0;

for (let i = 0; i < chars2.length; i++) {
    // So sánh chuỗi được: '0' <= '4' <= '9' → đúng
    if (chars2[i] >= '0' && chars2[i] <= '9') {
        digitCount++;
    }
}

console.log("Số lượng ký tự số:", digitCount); // 3


// ====== BÀI 3: ĐẾM SỐ KÝ TỰ TRONG CHUỖI ======

const str3 = "Hello JavaScript";

// .length đếm tất cả ký tự kể cả khoảng trắng
console.log(`Chuỗi "${str3}" có: ${str3.length} ký tự`); // 16


// ====== BÀI 4: SO SÁNH HAI CHUỖI ======

let stringA;
do {
    stringA = prompt("Nhập chuỗi thứ nhất:");
    if (stringA === null) { alert("Đã hủy!"); break; }
    if (stringA === "") alert("Chuỗi không được để trống!");
} while (stringA === "");

let stringB;
do {
    stringB = prompt("Nhập chuỗi thứ hai:");
    if (stringB === null) { alert("Đã hủy!"); break; }
    if (stringB === "") alert("Chuỗi không được để trống!");
} while (stringB === "");

if (stringA !== null && stringB !== null) {
    // === so sánh chính xác từng ký tự lẫn độ dài
    if (stringA === stringB) {
        alert("Hai chuỗi GIỐNG NHAU.");
    } else {
        alert("Hai chuỗi KHÁC NHAU.");
    }
}


// ====== BÀI 5: THAY THẾ (-) BẰNG (_) ======

const chars5 = ['m', 'i', '-', 'n', 'u', '-', 's'];
console.log("Mảng ban đầu:", [...chars5]); // Spread để in bản sao, không ảnh hưởng mảng gốc

for (let i = 0; i < chars5.length; i++) {
    if (chars5[i] === '-') {
        chars5[i] = '_'; // Gán thẳng vào vị trí i
    }
}

console.log("Mảng sau khi thay thế:", chars5);
// ['m', 'i', '_', 'n', 'u', '_', 's']
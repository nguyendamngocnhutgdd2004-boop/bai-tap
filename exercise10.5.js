// 1. Nhập số tiền Đô la Mỹ từ người dùng
let usd = Number(prompt('Nhập số tiền Đô la Mỹ (USD): '));

// 2. Khai báo tỷ giá
const TY_GIA = 25000;

// 3. Thuật toán tính toán
let vnd = usd * TY_GIA;

// 4. Định dạng và hiển thị kết quả
// Sử dụng toLocaleString để số tiền hiển thị có dấu phân cách hàng nghìn (ví dụ: 250.000)
let vndDinhDang = vnd.toLocaleString('vi-VN');

alert(`${usd}$ tương ứng với ${vndDinhDang} VNĐ`);
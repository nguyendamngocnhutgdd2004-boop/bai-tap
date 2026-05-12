// 1. Nhập điểm 3 môn từ người dùng
let math = Number(prompt('Nhập điểm môn Toán (Math): '));
let physics = Number(prompt('Nhập điểm môn Lý (Physics): '));
let chemistry = Number(prompt('Nhập điểm môn Hóa (Chemistry): '));

// 2. Tính điểm trung bình
// Lưu ý: Phải dùng ngoặc đóng mở để thực hiện phép cộng trước khi chia
let average = (math + physics + chemistry) / 3;

// 3. Hiển thị kết quả ra màn hình
// toFixed(2) dùng để làm tròn kết quả đến 2 chữ số thập phân
alert(`Điểm trung bình 3 môn là: ${average.toFixed(2)}`);

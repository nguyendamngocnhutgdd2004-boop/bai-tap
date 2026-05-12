// 1. Sử dụng prompt để lấy câu trả lời từ người dùng
let answer = prompt('What is the “official” name of JavaScript?');

// 2. Sử dụng cấu trúc if...else để kiểm tra điều kiện
if (answer === "ECMAScript") {
    // Nếu trả lời đúng
    alert("Right!");
} else {
    // Nếu trả lời sai hoặc nhấn Cancel
    alert("Didn’t know? ECMAScript!");
}

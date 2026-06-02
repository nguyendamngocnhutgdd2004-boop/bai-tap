// 1. Hàm kiểm tra chuỗi đối xứng
        function isPalindrome(str) {
// Chuyển về chữ thường để không phân biệt Hoa/Thường
            str = str.toLowerCase();
            
// Đảo ngược chuỗi
            let reversedStr = str.split('').reverse().join('');
            
// So sánh chuỗi gốc với chuỗi đảo ngược
            return str === reversedStr;
        }

// 2. Cho người dùng nhập chuỗi ký tự
        let inputString = prompt("Nhập vào chuỗi ký tự cần kiểm tra:");

// Kiểm tra tính hợp lệ của dữ liệu nhập vào
        if (inputString !== null && inputString.trim() !== "") {
            
// 3. Gọi hàm kiểm tra và hiển thị alert()
            if (isPalindrome(inputString)) {
                alert(`"${inputString}" là chuỗi đối xứng!`);
            } else {
                alert(`"${inputString}" KHÔNG PHẢI là chuỗi đối xứng!`);
            }
            
        } else {
            alert("Bạn chưa nhập chuỗi nào cả.");
        }
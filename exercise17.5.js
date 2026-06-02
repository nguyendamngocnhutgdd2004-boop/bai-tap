    // 1. Khai báo phần tử DOM
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginBtn = document.getElementById('loginBtn');
    
    const emailErr = document.getElementById('emailErr');
    const passErr = document.getElementById('passErr');

    // 2. Tài khoản fix cứng
    const validUsername = "huanrose@gmail.com";
    const validPassword = "123456";
    // 3. Hàm xóa lỗi
    function clearError(input, errEl) {
        input.classList.remove('error');
        errEl.classList.remove('show');
    }

    // 4. Xóa lỗi khi người dùng gõ lại
    emailInput.addEventListener('input', () => clearError(emailInput, emailErr));
    passwordInput.addEventListener('input', () => clearError(passwordInput, passErr));

    // 5. Xử lý sự kiện click nút Submit
    loginBtn.addEventListener('click', function() {
        const enteredEmail    = emailInput.value.trim();
        const enteredPassword = passwordInput.value;
        let valid = true;

        // Kiểm tra rỗng
        if (!enteredEmail) {
            emailInput.classList.add('error');
            emailErr.classList.add('show');
            valid = false;
        }
        if (!enteredPassword) {
            passwordInput.classList.add('error');
            passErr.classList.add('show');
            valid = false;
        }
        if (!valid) return;

        // Kiểm tra đúng/sai
        if (enteredEmail === validUsername && enteredPassword === validPassword) {
            alert("Đăng nhập thành công");
        } else {
            alert("Đăng nhập thất bại");
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    // 6. Cho phép nhấn Enter để đăng nhập
    [emailInput, passwordInput].forEach(el => {
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter') loginBtn.click();
        });
    });
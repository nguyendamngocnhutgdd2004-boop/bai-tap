// 1. Nhập cân nặng (kg) và chiều cao (m)
let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
let height = parseFloat(prompt("Nhập chiều cao của bạn (m):"));

// 2. Tính BMI = cân nặng / (chiều cao * chiều cao)
let bmi = weight / (height * height);

// 3. Phân loại dựa trên chỉ số BMI
let result = "";

if (bmi < 18.5) {
    result = "Gầy (Underweight)";
} else if (bmi < 25.0) {
    result = "Bình thường (Normal)";
} else if (bmi < 30.0) {
    result = "Thừa cân (Overweight)";
} else {
    result = "Béo phì (Obese)";
}

// 4. Hiển thị kết quả (làm tròn BMI đến 2 chữ số thập phân)
alert(`Chỉ số BMI của bạn là: ${bmi.toFixed(2)}\nPhân loại: ${result}`);
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành!");
    }
}
let nhietDo = Number(prompt("Nhập nhiệt độ hiện tại:"));
if (nhietDo > 100) {
    alert("Vui lòng giảm nhiệt độ!");
} else if (nhietDo < 20) {
    alert("Vui lòng tăng nhiệt độ!");
} else {
    alert("Nhiệt độ bình thường.");
}
let a = 0, b = 1, temp;
let result = "";
for (let i = 0; i < 20; i++) {
    result += a + " ";
    temp = a + b;
    a = b;
    b = temp;
}
console.log("Dãy Fibonacci: " + result);
let a = 0, b = 1, temp;
while (true) {
    if (a !== 0 && a % 5 === 0) {
        console.log("Số Fibonacci đầu tiên chia hết cho 5 là: " + a);
        break;
    }
    temp = a + b;
    a = b;
    b = temp;
}
let a = 0, b = 1, temp, tong = 0;
for (let i = 0; i < 20; i++) {
    tong += a;
    temp = a + b;
    a = b;
    b = temp;
}
console.log("Tổng 20 số Fibonacci đầu tiên là: " + tong);
let count = 0, num = 0, tong = 0;
while (count < 30) {
    if (num % 7 === 0) {
        tong += num;
        count++;
    }
    num++;
}
console.log("Tổng 30 số đầu tiên chia hết cho 7 là: " + tong);
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

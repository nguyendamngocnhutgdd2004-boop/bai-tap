let c = Number(prompt("Nhập độ C:"));
let f = c * 9 / 5 + 32;
alert(c + " độ C = " + f + " độ F");
let m = Number(prompt("Nhập số mét:"));
let ft = m * 3.2808;
alert(m + "m = " + ft.toFixed(2) + " feet");
let a = Number(prompt("Nhập cạnh a:"));
let dienTich = a * a;
alert("Diện tích hình vuông là: " + dienTich);
let a = Number(prompt("Nhập cạnh a:"));
let b = Number(prompt("Nhập cạnh b:"));
alert("Diện tích hình chữ nhật là: " + (a * b));
let a = Number(prompt("Nhập cạnh kề a:"));
let b = Number(prompt("Nhập cạnh kề b:"));
alert("Diện tích tam giác vuông là: " + (0.5 * a * b));
let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));

if (a === 0) {
    if (b === 0) alert("Phương trình vô số nghiệm");
    else alert("Phương trình vô nghiệm");
} else {
    alert("Nghiệm x = " + (-b / a));
}
let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));
let c = Number(prompt("Nhập c:"));

if (a === 0) {
    // Quay lại giải phương trình bậc 1
    alert("Nghiệm: " + (-c / b));
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) alert("Phương trình vô nghiệm");
    else if (delta === 0) alert("Nghiệm kép x = " + (-b / (2 * a)));
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Có 2 nghiệm: x1 = " + x1 + ", x2 = " + x2);
    }
}
let tuoi = Number(prompt("Nhập một số:"));

if (Number.isInteger(tuoi) && tuoi > 0 && tuoi < 120) {
    alert(tuoi + " là tuổi của một người.");
} else {
    alert("Đây không phải là tuổi người.");
}

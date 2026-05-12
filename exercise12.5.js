// Hàm tiện ích: in tiêu đề + nội dung ra trang
function hienThi(tieuDe, noiDung) {
  const h = document.createElement("h2");
  h.textContent = tieuDe;
  document.body.appendChild(h);

  const pre = document.createElement("pre");
  pre.textContent = noiDung;
  document.body.appendChild(pre);
}

// ============================================================
// Bài 1: Dãy Fibonacci  (for)
// ============================================================
const n = parseInt(prompt("Bài 1 — Nhập số lượng số Fibonacci:"));
let a = 0, b = 1, fib = [];
for (let i = 1; i <= n; i++) {
  fib.push(a);
  [a, b] = [b, a + b];
}
hienThi("Bài 1: Dãy Fibonacci", fib.join("  "));

// ============================================================
// Bài 2: Giai thừa  (while)
// ============================================================
const num = parseInt(prompt("Bài 2 — Nhập số tính giai thừa:"));
let ketQua = 1n, i = 1n;
while (i <= BigInt(num)) { ketQua *= i; i++; }
hienThi("Bài 2: Giai thừa", `${num}! = ${ketQua}`);

// ============================================================
// Bài 3: Tam giác vuông  (for lồng nhau)
// ============================================================
const cc = parseInt(prompt("Bài 3 — Nhập chiều cao tam giác:"));
let tam = "";

// 3.1: tăng dần, căn trái       3.2: giảm dần, căn trái
// *                              *****
// **                             ****
// ***                            ***
// ****                           **
// *****                          *

const GAP = "     "; // khoảng cách giữa các tam giác
for (let i = 1; i <= cc; i++) {
  const t1 = "*".repeat(i).padEnd(cc);               // tăng, căn trái
  const t2 = "*".repeat(cc - i + 1).padEnd(cc);      // giảm, căn trái
  const t3 = " ".repeat(cc - i) + "*".repeat(i);     // tăng, căn phải
  const t4 = " ".repeat(i - 1) + "*".repeat(cc - i + 1); // giảm, căn phải
  tam += t1 + GAP + t2 + GAP + t3 + GAP + t4 + "\n";
}

hienThi("Bài 3: Tam giác vuông", tam);

// ============================================================
// Bài 4: Hình chữ nhật rỗng  (for lồng nhau)
// ============================================================
const dai  = parseInt(prompt("Bài 4 — Nhập chiều dài hình chữ nhật:"));
const rong = parseInt(prompt("Bài 4 — Nhập chiều rộng hình chữ nhật:"));
let hcn = "";
for (let i = 1; i <= rong; i++) {
  if (i === 1 || i === rong) hcn += "*".repeat(dai);
  else                        hcn += "*" + " ".repeat(dai - 2) + "*";
  hcn += "\n";
}
hienThi("Bài 4: Hình chữ nhật rỗng", hcn);

// ============================================================
// Bài 5: Lãi kép ngân hàng  (do-while)
// ============================================================
const von     = parseFloat(prompt("Bài 5 — Nhập vốn ban đầu (VNĐ):"));
const soThang = parseInt(prompt("Bài 5 — Nhập số tháng gửi:"));
const laiSuat = parseFloat(prompt("Bài 5 — Nhập lãi suất hàng tháng (VD: 0.01 = 1%):"));

let tongTien = von, t = 1, bang = "";
do {
  tongTien += tongTien * laiSuat;
  bang += `Tháng ${String(t).padStart(3)}: ${tongTien.toLocaleString("vi-VN")}đ\n`;
  t++;
} while (t <= soThang);

bang += "─".repeat(35) + "\n";
bang += `Tổng tiền : ${tongTien.toLocaleString("vi-VN")}đ\n`;
bang += `Tiền lãi  : ${(tongTien - von).toLocaleString("vi-VN")}đ`;

hienThi("Bài 5: Lãi kép ngân hàng", bang);
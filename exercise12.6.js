  const state = { ten: null, tuoi: null };
  let dlgResolve = null;

  // ── Custom prompt thay thế window.prompt ──────────────────
  function hoi(msg, type = "text") {
    return new Promise(res => {
      dlgResolve = res;
      document.getElementById('dlg-label').textContent = msg;
      const inp = document.getElementById('dlg-input');
      inp.type = type;
      inp.value = "";
      document.getElementById('overlay').classList.add('show');
      inp.focus();
    });
  }

  function dlgOK() {
    const v = document.getElementById('dlg-input').value.trim();
    document.getElementById('overlay').classList.remove('show');
    if (dlgResolve) { dlgResolve(v); dlgResolve = null; }
  }

  document.getElementById('dlg-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') dlgOK();
  });

  // ── hienThi ───────────────────────────────────────────────
  function hienThi(tieuDe, noiDung) {
    const out = document.getElementById('output');
    const h = document.createElement('h2');
    h.textContent = tieuDe;
    out.appendChild(h);
    const pre = document.createElement('pre');
    pre.textContent = noiDung;
    out.appendChild(pre);
    h.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  // ── Các chức năng ─────────────────────────────────────────
  async function chon(n) {
    switch (n) {
      case 1: {
        const ten = await hoi("Nhập tên của bạn:");
        if (!ten) return showToast("⚠ Chưa nhập tên!");
        state.ten = ten;
        hienThi("Lựa chọn 1: Nhập tên", `✔ Đã lưu tên: ${ten}`);
        break;
      }
      case 2: {
        const v = await hoi("Nhập tuổi của bạn:", "number");
        const tuoi = parseInt(v);
        if (isNaN(tuoi) || tuoi < 0) return showToast("⚠ Tuổi không hợp lệ!");
        state.tuoi = tuoi;
        hienThi("Lựa chọn 2: Nhập tuổi", `✔ Đã lưu tuổi: ${tuoi}`);
        break;
      }
      case 3: {
        const ten  = state.ten  ?? "Chưa nhập";
        const tuoi = state.tuoi ?? "Chưa nhập";
        hienThi("Lựa chọn 3: Tên & Tuổi",
          `👤 Tên : ${ten}\n🎂 Tuổi: ${tuoi}`);
        break;
      }
      case 4: {
        const v = await hoi("Nhập số cần in bảng cửu chương:", "number");
        const num = parseInt(v);
        if (isNaN(num) || num < 1) return showToast("⚠ Vui lòng nhập số nguyên dương!");
        let r = `${"═".repeat(28)}\n   BẢNG CỬU CHƯƠNG SỐ ${num}\n${"═".repeat(28)}\n`;
        for (let i = 1; i <= 10; i++)
          r += `  ${num} × ${String(i).padStart(2)} = ${String(num * i).padStart(3)}\n`;
        r += "═".repeat(28);
        hienThi("Lựa chọn 4: Bảng cửu chương", r);
        break;
      }
      case 5: {
        const v = await hoi("Nhập một số nguyên:", "number");
        const num = parseInt(v);
        if (isNaN(num)) return showToast("⚠ Vui lòng nhập số nguyên!");
        hienThi("Lựa chọn 5: Chẵn / Lẻ",
          num % 2 === 0 ? `✔ ${num} là số CHẴN.` : `✔ ${num} là số LẺ.`);
        break;
      }
      case 6: {
        const v = await hoi("Nhập N:", "number");
        const N = parseInt(v);
        if (isNaN(N) || N < 1) return showToast("⚠ N phải ≥ 1!");
        const tong = N * (N + 1) / 2;
        hienThi("Lựa chọn 6: Tổng từ 1 đến N",
          `✔ Tổng từ 1 đến ${N} = ${tong}`);
        break;
      }
      case 7: {
        const v = await hoi("Nhập dãy số (cách nhau bởi dấu cách):");
        const parts = v.split(/\s+/).filter(Boolean);
        if (!parts.length) return showToast("⚠ Chưa nhập dãy số!");
        const ok = [], bad = [];
        for (const p of parts) isNaN(p) ? bad.push(p) : ok.push(Number(p));
        let r = "";
        if (ok.length)  r += `✔ Dãy số hợp lệ  : [${ok.join(", ")}]\n`;
        if (bad.length) r += `⚠ Giá trị lỗi    : [${bad.join(", ")}]`;
        hienThi("Lựa chọn 7: In dãy số", r.trim());
        break;
      }
      case 8: {
        const v = await hoi("Nhập một số nguyên dương:", "number");
        const num = parseInt(v);
        if (isNaN(num) || num < 1) return showToast("⚠ Vui lòng nhập số nguyên dương!");
        let laNT = num >= 2;
        if (laNT) for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) { laNT = false; break; }
        hienThi("Lựa chọn 8: Kiểm tra số nguyên tố",
          laNT ? `✔ ${num} LÀ số nguyên tố.` : `✔ ${num} KHÔNG phải số nguyên tố.`);
        break;
      }
      case 9: {
        const v = await hoi("Nhập chuỗi cần đảo ngược:");
        if (!v) return showToast("⚠ Chưa nhập chuỗi!");
        const dao = v.split("").reverse().join("");
        hienThi("Lựa chọn 9: Đảo ngược chuỗi",
          `Gốc     : ${v}\nĐảo ngược: ${dao}`);
        break;
      }
    }
  }

  function thoat() {
    document.getElementById('menu').style.display = 'none';
    const out = document.getElementById('output');
    const h = document.createElement('h2');
    h.textContent = "Lựa chọn 10: Thoát";
    out.appendChild(h);
    const pre = document.createElement('pre');
    pre.textContent = "👋 Chương trình đã kết thúc. Tạm biệt!";
    out.appendChild(pre);
    pre.scrollIntoView({ behavior: 'smooth' });
  }
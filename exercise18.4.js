const textarea = document.getElementById('output');
  const keyboard = document.getElementById('keyboard');
 
  // 26 chữ cái A-Z chia thành 3 hàng: 10 / 10 / 6+Xóa
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const layout  = [
    letters.slice(0, 10),   // A-J
    letters.slice(10, 20),  // K-T
    letters.slice(20, 26),  // U-Z + Xóa
  ];
 
  layout.forEach((rowKeys, ri) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'row';
 
    rowKeys.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'key';
      btn.textContent = letter;
 
      // CREATE / thêm chữ vào textarea
      btn.addEventListener('click', () => {
        textarea.value += letter;
        textarea.focus();
      });
 
      rowEl.appendChild(btn);
    });
 
    // Thêm nút Xóa vào cuối hàng cuối
    if (ri === layout.length - 1) {
      const del = document.createElement('button');
      del.className = 'key del';
      del.textContent = 'Xóa';
 
      // DELETE — xóa ký tự cuối
      del.addEventListener('click', () => {
        textarea.value = textarea.value.slice(0, -1);
        textarea.focus();
      });
 
      rowEl.appendChild(del);
    }
 
    keyboard.appendChild(rowEl);
  });
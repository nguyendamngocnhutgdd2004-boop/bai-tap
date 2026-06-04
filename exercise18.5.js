// ===== Dữ liệu mẫu =====
    let danhSach = [
      { id: 1, ten: 'Huấn', tuoi: 18, lop: 'A1' },
      { id: 2, ten: 'Cường', tuoi: 22, lop: 'A1' },
    ];
    let nextId = 3;
    let editingId = null;
 
    // ===== DOM References =====
    const inpTen     = document.getElementById('inp-ten');
    const inpTuoi    = document.getElementById('inp-tuoi');
    const inpLop     = document.getElementById('inp-lop');
    const inpSearch  = document.getElementById('inp-search');
    const tbody      = document.getElementById('tbody');
    const countBadge = document.getElementById('count-badge');
    const toast      = document.getElementById('toast');
    let toastTimer   = null;
 
    // ===== Toast =====
    function showToast(msg, type = 'success') {
      const colors = {
        success: '#10b981',
        error:   '#ef4444',
        info:    '#2563eb',
        warn:    '#f59e0b',
      };
      toast.textContent = msg;
      toast.style.background = colors[type] || colors.success;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
    }
 
    // ===== Escape HTML (bảo mật XSS) =====
    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
 
    // ===== Render bảng =====
    function renderTable() {
      const keyword = inpSearch.value.trim().toLowerCase();
      const filtered = keyword
        ? danhSach.filter(sv => sv.ten.toLowerCase().includes(keyword))
        : [...danhSach];
 
      countBadge.textContent = `${filtered.length} sinh viên${keyword ? ' (đang lọc)' : ''}`;
 
      if (filtered.length === 0) {
        tbody.innerHTML = `
          <tr class="empty-row">
            <td colspan="5">
              <span class="empty-icon">📋</span>
              ${keyword ? 'Không tìm thấy sinh viên phù hợp' : 'Chưa có sinh viên nào'}
            </td>
          </tr>`;
        return;
      }
 
      tbody.innerHTML = filtered.map((sv, index) => {
        if (editingId === sv.id) {
          return `
            <tr>
              <td>${index + 1}</td>
              <td><input class="edit-input" id="edit-ten-${sv.id}" value="${escapeHtml(sv.ten)}" placeholder="Tên..." /></td>
              <td><input class="edit-input" id="edit-tuoi-${sv.id}" type="number" value="${sv.tuoi}" min="1" max="99" style="max-width:80px" /></td>
              <td><input class="edit-input" id="edit-lop-${sv.id}" value="${escapeHtml(sv.lop)}" placeholder="Lớp..." style="max-width:90px" /></td>
              <td>
                <div class="action-cell">
                  <button class="btn btn-save" onclick="luuSua(${sv.id})">💾 Lưu</button>
                  <button class="btn btn-cancel" onclick="huyEdit()">Hủy</button>
                </div>
              </td>
            </tr>`;
        }
        return `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(sv.ten)}</td>
            <td>${sv.tuoi}</td>
            <td>${escapeHtml(sv.lop)}</td>
            <td>
              <div class="action-cell">
                <button class="btn btn-edit" onclick="batDauSua(${sv.id})">✏️ Sửa</button>
                <button class="btn btn-delete" onclick="xoaSinhVien(${sv.id})">🗑️ Xóa</button>
              </div>
            </td>
          </tr>`;
      }).join('');
 
      if (editingId !== null) {
        const el = document.getElementById(`edit-ten-${editingId}`);
        if (el) { el.focus(); el.select(); }
      }
    }
 
    // ===== Thêm sinh viên =====
    function themSinhVien() {
      const ten  = inpTen.value.trim();
      const tuoi = parseInt(inpTuoi.value.trim());
      const lop  = inpLop.value.trim();
 
      if (!ten)                           { showToast('Vui lòng nhập tên sinh viên!', 'error'); inpTen.focus(); return; }
      if (!tuoi || tuoi < 1 || tuoi > 99) { showToast('Vui lòng nhập tuổi hợp lệ (1–99)!', 'error'); inpTuoi.focus(); return; }
      if (!lop)                           { showToast('Vui lòng nhập lớp!', 'error'); inpLop.focus(); return; }
 
      danhSach.push({ id: nextId++, ten, tuoi, lop });
      inpTen.value = ''; inpTuoi.value = ''; inpLop.value = '';
      inpTen.focus();
      renderTable();
      showToast(`Đã thêm sinh viên "${ten}" thành công!`, 'success');
    }
 
    // ===== Xóa sinh viên =====
    function xoaSinhVien(id) {
      const sv = danhSach.find(s => s.id === id);
      if (!sv) return;
      danhSach = danhSach.filter(s => s.id !== id);
      if (editingId === id) editingId = null;
      renderTable();
      showToast(`Đã xóa sinh viên "${sv.ten}"`, 'warn');
    }
 
    // ===== Bắt đầu sửa =====
    function batDauSua(id) {
      editingId = id;
      renderTable();
    }
 
    // ===== Lưu sửa =====
    function luuSua(id) {
      const ten  = document.getElementById(`edit-ten-${id}`).value.trim();
      const tuoi = parseInt(document.getElementById(`edit-tuoi-${id}`).value.trim());
      const lop  = document.getElementById(`edit-lop-${id}`).value.trim();
 
      if (!ten)                           { showToast('Tên không được để trống!', 'error'); return; }
      if (!tuoi || tuoi < 1 || tuoi > 99) { showToast('Tuổi không hợp lệ!', 'error'); return; }
      if (!lop)                           { showToast('Lớp không được để trống!', 'error'); return; }
 
      const sv = danhSach.find(s => s.id === id);
      if (sv) { sv.ten = ten; sv.tuoi = tuoi; sv.lop = lop; }
      editingId = null;
      renderTable();
      showToast('Đã cập nhật thông tin sinh viên!', 'info');
    }
 
    // ===== Hủy sửa =====
    function huyEdit() {
      editingId = null;
      renderTable();
    }
 
    // ===== Event Listeners =====
    document.getElementById('btn-them').addEventListener('click', themSinhVien);
    inpSearch.addEventListener('input', renderTable);
    inpTen.addEventListener('keydown',  e => { if (e.key === 'Enter') inpTuoi.focus(); });
    inpTuoi.addEventListener('keydown', e => { if (e.key === 'Enter') inpLop.focus(); });
    inpLop.addEventListener('keydown',  e => { if (e.key === 'Enter') themSinhVien(); });
 
    // ===== Khởi tạo =====
    renderTable();
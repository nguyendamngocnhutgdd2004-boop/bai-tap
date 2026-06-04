// ============================================================
    // BÀI 1
    // ============================================================
    let products = [
      { id: 1, name: 'Milk',   count: 100 },
      { id: 2, name: 'Orange', count: 100 },
      { id: 3, name: 'Butter', count: 100 },
    ];
 
    // 1. Thêm đối tượng mới
    products.push({ id: 4, name: 'Cheese', count: 50 });
 
    // 2. Xóa đối tượng có id = 2
    products = products.filter(item => item.id !== 2);
 
    // 3. Cập nhật count = 0 cho id = 3
    const product3 = products.find(item => item.id === 3);
    if (product3) product3.count = 0;
 
    // 4. Tìm kiếm từ khóa "Butter"
    const keyword = "Butter";
    const found = products.find(item => item.name === keyword);
 
    // Render bảng products
    function renderProducts() {
      const tbody = document.getElementById('productTable');
      tbody.innerHTML = '';
      products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.id}</td><td>${p.name}</td><td>${p.count}</td>`;
        tbody.appendChild(tr);
      });
    }
 
    renderProducts();
 
    // Hiển thị kết quả tìm kiếm
    const searchEl = document.getElementById('searchResult');
    if (found) {
      searchEl.innerHTML = `Tìm "<strong>${keyword}</strong>": id=${found.id}, name=${found.name}, count=${found.count}`;
    } else {
      searchEl.textContent = 'Không có dữ liệu bạn tìm kiếm';
    }
 
 
    // ============================================================
    // BÀI 2
    // ============================================================
    let courses = [
      { name: 'HTML',                       complete: false },
      { name: 'CSS',                        complete: false },
      { name: 'Basic of javascript',        complete: false },
      { name: 'Node package Manager (npm)', complete: false },
      { name: 'Git',                        complete: false },
    ];
 
    function renderCourses() {
      const ul = document.getElementById('courseList');
      ul.innerHTML = '';
      courses.forEach((c, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${i + 1}. ${c.name}<br>
          <span class="complete-${c.complete}">Complete: ${c.complete}</span>`;
        ul.appendChild(li);
      });
    }
 
    function setMsg(text) {
      document.getElementById('courseMsg').textContent = text;
    }
 
    renderCourses();
 
    // C — Thêm khóa học
    function handleC() {
      const name = prompt("Tên khóa học mới:");
      if (!name) return;
      const comp = prompt("Trạng thái hoàn thành (true/false):").trim() === 'true';
      courses.push({ name: name.trim(), complete: comp });
      renderCourses();
      setMsg(`Đã thêm khóa học "${name.trim()}".`);
    }
 
    // R — Xem danh sách
    function handleR() {
      renderCourses();
      setMsg("Đã làm mới danh sách.");
    }
 
    // U — Cập nhật
    function handleU() {
      const pos = parseInt(prompt(`Nhập vị trí muốn update (1 - ${courses.length}):`));
      if (isNaN(pos) || pos < 1 || pos > courses.length) {
        setMsg("Vị trí không tồn tại!"); return;
      }
      const newName = prompt("Tên mới:", courses[pos - 1].name);
      if (!newName) return;
      const newComp = prompt("Trạng thái mới (true/false):", courses[pos - 1].complete).trim() === 'true';
      courses[pos - 1].name     = newName.trim();
      courses[pos - 1].complete = newComp;
      renderCourses();
      setMsg(`Đã cập nhật vị trí ${pos}.`);
    }
 
    // D — Xóa
    function handleD() {
      const pos = parseInt(prompt(`Nhập vị trí muốn xóa (1 - ${courses.length}):`));
      if (isNaN(pos) || pos < 1 || pos > courses.length) {
        setMsg("Vị trí không tồn tại!"); return;
      }
      const removed = courses.splice(pos - 1, 1)[0];
      renderCourses();
      setMsg(`Đã xóa khóa học "${removed.name}".`);
    }
 
    // E — Thoát
    function handleE() {
      setMsg("Cảm ơn bạn đã đến với Rikkei Academy");
    }
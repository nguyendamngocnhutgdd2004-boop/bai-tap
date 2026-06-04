// ── Helper: render object vào tbody ──────────────────────
    function renderTable(tbodyId, obj) {
      const tbody = document.getElementById(tbodyId);
      for (const [key, value] of Object.entries(obj)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${key}</td><td>${value}</td>`;
        tbody.appendChild(tr);
      }
    }
 
    // ── BÀI 1 ───────────────────────────────────────────────
    const person = {
      name: "Nguyễn Văn A",
      age: 25,
      address: "123 Lê Lợi, TP.HCM",
      phone: "0901234567"
    };
    renderTable('table1', person);
 
    // ── BÀI 2 ───────────────────────────────────────────────
    const student = {
      id: 1,
      name: "Nguyễn Văn A",
      gender: "nam",
      age: 20,
      mark: 8
    };
 
    const newStudent = {
      id: 2,
      name: "Trần Thị B",
      gender: "nữ",
      age: 21,
      mark: 9
    };
 
    const students = [student, newStudent];
    renderTable('table2', students[1]);
 
    // ── BÀI 3 ───────────────────────────────────────────────
    let best = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].mark > best.mark) {
        best = students[i];
      }
    }
    renderTable('table3', best);
    document.getElementById('bestMark').textContent = 'mark: ' + best.mark;
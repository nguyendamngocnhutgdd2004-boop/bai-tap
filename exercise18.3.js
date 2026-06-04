// Dữ liệu ban đầu 
  let todos = [
    { id: 1, title: "Xin việc ở Google",           done: true  },
    { id: 2, title: "Mua biệt thự",                done: true  },
    { id: 3, title: "Cưới vợ",                     done: false },
    { id: 4, title: "Mua xe hơi",                  done: false },
    { id: 5, title: "Sinh con",                    done: false },
    { id: 6, title: "Đi du lịch vòng quanh thế giới", done: false },
  ];
  let nextId = 7;
 
  //  Render 
  function render() {
    const ul = document.getElementById('todoList');
    ul.innerHTML = '';
 
    // Xếp: done lên trước
    const sorted = [...todos.filter(t => t.done), ...todos.filter(t => !t.done)];
 
    sorted.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.done ? ' done' : '');
      li.dataset.id = todo.id;
 
      li.innerHTML = `
        <span class="tick" onclick="toggleDone(${todo.id})">${todo.done ? '✓' : ''}</span>
        <span class="todo-text" ondblclick="startEdit(${todo.id})">${todo.title}</span>
        <div class="actions">
          <button class="btn-icon btn-edit" onclick="startEdit(${todo.id})">✏️</button>
          <button class="btn-icon btn-del"  onclick="deleteTodo(${todo.id})">🗑</button>
        </div>
      `;
      ul.appendChild(li);
    });
  }
 
  // ── CREATE ───────────────────────────────────────────────
  function addTodo() {
    const input = document.getElementById('newTitle');
    const title = input.value.trim();
    if (!title) return;
    todos.push({ id: nextId++, title, done: false });
    input.value = '';
    render();
  }
 
  // Enter để thêm
  document.getElementById('newTitle').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTodo();
  });
 
  // ── READ (toggle done) ───────────────────────────────────
  function toggleDone(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
    render();
  }
 
  // ── UPDATE 
  function startEdit(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
 
    const li = document.querySelector(`.todo-item[data-id="${id}"]`);
    const textSpan = li.querySelector('.todo-text');
    const actions  = li.querySelector('.actions');
 
    // Thay text bằng input
    const input = document.createElement('input');
    input.className = 'edit-input';
    input.value = todo.title;
    li.replaceChild(input, textSpan);
 
    // Thay nút edit/del bằng nút save/cancel
    actions.innerHTML = `
      <button class="btn-icon btn-save"   onclick="saveEdit(${id})">Lưu</button>
      <button class="btn-icon btn-cancel" onclick="render()">Hủy</button>
    `;
    input.focus();
 
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  saveEdit(id);
      if (e.key === 'Escape') render();
    });
  }
 
  function saveEdit(id) {
    const li    = document.querySelector(`.todo-item[data-id="${id}"]`);
    const input = li.querySelector('.edit-input');
    const value = input ? input.value.trim() : '';
    if (!value) return;
    const todo = todos.find(t => t.id === id);
    if (todo) todo.title = value;
    render();
  }
 
  // DELETE
  function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    render();
  }
 
  // Khởi chạy
  render();
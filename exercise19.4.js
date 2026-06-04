const STORAGE_KEY = 'todo_app_tasks';
 
  //  State
  let todos = load();
 
  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }
 
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
 
  // Render
  function render() {
    const list = document.getElementById('todoList');
    const count = todos.filter(t => !t.done).length;
    document.getElementById('footerCount').textContent =
      `You have ${count} pending task${count !== 1 ? 's' : ''}`;
 
    list.innerHTML = '';
    if (todos.length === 0) {
      list.innerHTML = '<p class="empty-hint">No tasks yet. Add one above!</p>';
      return;
    }
 
    todos.forEach((todo, idx) => {
      const item = document.createElement('div');
      item.className = 'todo-item' + (todo.done ? ' done' : '');
 
      // Checkbox
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'todo-checkbox';
      cb.checked = todo.done;
      cb.title = 'Mark as done';
      cb.addEventListener('change', () => toggleDone(idx));
 
      // Text / edit
      const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = todo.text;
      span.title = 'Double-click to edit';
      span.addEventListener('dblclick', () => startEdit(idx, item, span));
 
      // Delete
      const del = document.createElement('button');
      del.className = 'btn-delete';
      del.title = 'Delete';
      del.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
      del.addEventListener('click', () => deleteTodo(idx));
 
      item.append(cb, span, del);
      list.appendChild(item);
    });
  }
 
  // CRUD 
  function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });
    save();
    render();
    input.value = '';
    input.focus();
  }
 
  function deleteTodo(idx) {
    todos.splice(idx, 1);
    save(); render();
  }
 
  function toggleDone(idx) {
    todos[idx].done = !todos[idx].done;
    save(); render();
  }
 
  function clearAll() {
    if (todos.length === 0) return;
    if (confirm('Xóa tất cả tasks?')) {
      todos = [];
      save(); render();
    }
  }
 
  function startEdit(idx, item, span) {
    const editInput = document.createElement('input');
    editInput.className = 'todo-edit-input';
    editInput.value = todos[idx].text;
    item.replaceChild(editInput, span);
    editInput.focus();
    editInput.select();
 
    function commit() {
      const val = editInput.value.trim();
      if (val) todos[idx].text = val;
      save(); render();
    }
    editInput.addEventListener('blur', commit);
    editInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') commit();
      if (e.key === 'Escape') render();
    });
  }
 
  //Events 
  document.getElementById('addBtn').addEventListener('click', addTodo);
  document.getElementById('todoInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTodo();
  });
  document.getElementById('clearBtn').addEventListener('click', clearAll);
 
  //Init 
  render();
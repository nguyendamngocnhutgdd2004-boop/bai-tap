const STORAGE_KEY = 'bookmark_app_data';
 
  let bookmarks = [];
  try { bookmarks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}
 
  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks)); }
 
  function getFavicon(url) {
    try {
      const origin = new URL(url).origin;
      return `https://www.google.com/s2/favicons?sz=32&domain_url=${encodeURIComponent(origin)}`;
    } catch { return ''; }
  }
 
  function normalizeUrl(url) {
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    return url;
  }
 
  function isValidUrl(url) {
    try { new URL(url); return true; } catch { return false; }
  }
 
  function render() {
    const grid = document.getElementById('bookmarkGrid');
    grid.innerHTML = '';
    bookmarks.forEach((bm, idx) => {
      const card = document.createElement('a');
      card.className = 'bookmark-card';
      card.href = bm.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
 
      const favicon = document.createElement('img');
      favicon.className = 'bookmark-favicon';
      favicon.src = getFavicon(bm.url);
      favicon.onerror = () => { favicon.style.display = 'none'; };
 
      const label = document.createElement('span');
      label.className = 'bookmark-label';
      label.textContent = `${bm.name} – ${bm.desc || getDesc(bm.url)}`;
 
      const del = document.createElement('button');
      del.className = 'btn-remove';
      del.textContent = '✕';
      del.title = 'Remove bookmark';
      del.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        bookmarks.splice(idx, 1);
        save(); render();
      });
 
      card.append(favicon, label, del);
      grid.appendChild(card);
    });
  }
 
  function getDesc(url) {
    try {
      const host = new URL(url).hostname.replace('www.', '');
      const parts = host.split('.');
      return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    } catch { return ''; }
  }
 
  // Modal
  const overlay = document.getElementById('modalOverlay');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const saveBtn  = document.getElementById('saveBtn');
  const nameInput = document.getElementById('siteName');
  const urlInput  = document.getElementById('siteUrl');
  const urlError  = document.getElementById('urlError');
 
  function openModal() {
    nameInput.value = '';
    urlInput.value = '';
    urlError.classList.remove('show');
    overlay.classList.add('active');
    nameInput.focus();
  }
  function closeModal() { overlay.classList.remove('active'); }
 
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
  saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    let url = urlInput.value.trim();
    urlError.classList.remove('show');
 
    if (!name || !url) return;
 
    url = normalizeUrl(url);
    if (!isValidUrl(url)) { urlError.classList.add('show'); return; }
 
    bookmarks.push({ name, url });
    save(); render();
    closeModal();
  });
 
  [nameInput, urlInput].forEach(inp => {
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') saveBtn.click(); });
  });
 
  render();
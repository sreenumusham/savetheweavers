// Logo upload
function initLogoUpload() {
  const el = document.getElementById('logoDisplay');
  if (!el) return;
  el.addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const r = new FileReader();
      r.onload = ev => {
        el.innerHTML = '';
        el.style.background = 'none';
        el.style.fontSize = '0';
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.style.cssText = 'height:50px;width:50px;border-radius:50%;object-fit:cover;border:2px solid #E8651A;';
        el.appendChild(img);
      };
      r.readAsDataURL(e.target.files[0]);
    };
    input.click();
  });
}

// Highlight active nav link
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// Toast notification
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// Donate amount selector
function initAmountBtns() {
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      const customBox = document.getElementById('customAmtBox');
      if (customBox) customBox.style.display = this.querySelector('.amt').textContent === 'Other' ? 'block' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLogoUpload();
  setActiveNav();
  initAmountBtns();
});
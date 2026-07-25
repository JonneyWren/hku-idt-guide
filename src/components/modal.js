// Modal utility
const container = () => document.getElementById('modal-container');

export function showModal({ title, content, confirmText = '确定', cancelText = '取消', onConfirm, onCancel }) {
  container().innerHTML = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <div class="modal-title">${title || ''}</div>
        ${content ? `<div style="font-size:13px;color:#5b5f66;margin-bottom:12px">${content}</div>` : ''}
        <div class="modal-btns">
          <div class="m-btn cancel" id="modal-cancel">${cancelText}</div>
          <div class="m-btn confirm" id="modal-confirm">${confirmText}</div>
        </div>
      </div>
    </div>`;
  document.getElementById('modal-cancel').onclick = () => { closeModal(); onCancel && onCancel(); };
  document.getElementById('modal-confirm').onclick = () => { closeModal(); onConfirm && onConfirm(); };
  document.getElementById('modal-mask').onclick = (e) => { if (e.target === e.currentTarget) { closeModal(); onCancel && onCancel(); } };
}

export function closeModal() {
  container().innerHTML = '';
}

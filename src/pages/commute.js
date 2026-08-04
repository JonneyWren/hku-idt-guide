import { ROUTES, GENERAL_TIPS } from '../data/commute.js';
import { renderTabbar } from '../components/tabbar.js';

let expandedId = '';

function render() {
  const container = document.getElementById('page-container');
  container.innerHTML = `
    <style>
      .route{padding-bottom:12px}
      .route-name{font-size:16px;font-weight:600;color:#14312a;margin-right:8px}
      .route-summary{font-size:12px;color:#5b5f66;margin-top:6px}
      .chips{display:flex;flex-wrap:wrap;margin-top:8px}
      .chip{font-size:10px;background:#f0f1f4;color:#4b5563;border-radius:999px;padding:2px 10px;margin:0 6px 4px 0}
      .expand-hint{font-size:11px;color:#00573f;margin-top:6px;cursor:pointer}
      .step{display:flex;margin-bottom:4px}
      .step-left{display:flex;flex-direction:column;align-items:center;width:24px;flex-shrink:0}
      .step-dot{width:18px;height:18px;border-radius:50%;background:#00573f;color:#fff;font-size:10px;text-align:center;line-height:18px}
      .step-line{width:1px;flex:1;background:#cfe3da;margin:2px 0}
      .step-content{flex:1;padding:0 0 12px 8px}
      .step-text{font-size:13px;color:#1f2430;font-weight:500}
      .step-detail{font-size:11px;color:#8a8f99;margin-top:2px}
      .route-tips{background:#f4f8f6;border-radius:8px;padding:10px 12px;margin-top:8px}
      .route-tips-title{font-size:11px;font-weight:600;color:#00573f;margin-bottom:4px}
      .tip{font-size:11px;color:#5b5f66;margin-bottom:4px}
    </style>
    <div style="padding:16px 16px 4px">
      <div style="font-size:18px;font-weight:700;color:#14312a">深圳 → 香港大学 通勤路线</div>
      <div style="font-size:11px;color:#8a8f99;margin-top:4px">耗时与费用为经验参考,以港铁/巴士公司/口岸公告为准</div>
    </div>
    ${ROUTES.map(r => `
      <div class="card route">
        <div class="route-head" data-id="${r.id}">
          <div style="display:flex;align-items:center"><span class="route-name">${r.name}</span><span class="tag">${r.badge}</span></div>
          <div class="route-summary">${r.summary}</div>
          <div class="chips"><span class="chip">${r.totalTime}</span><span class="chip">${r.totalCost}</span></div>
          <div class="expand-hint">${expandedId === r.id ? '收起步骤 ▲' : '查看详细步骤 ▼'}</div>
        </div>
        ${expandedId === r.id ? `
          <div style="margin-top:12px;border-top:1px solid #eef0f2;padding-top:12px">
            <div style="display:inline-block;font-size:11px;color:#b8741a;background:#fdf3e3;border-radius:4px;padding:3px 10px;margin-bottom:12px">口岸时间:${r.borderTime}</div>
            ${r.steps.map((step, i) => `
              <div class="step">
                <div class="step-left"><div class="step-dot">${i+1}</div>${i < r.steps.length-1 ? '<div class="step-line"></div>' : ''}</div>
                <div class="step-content"><div class="step-text">${step.text}</div><div class="step-detail">${step.detail}</div></div>
              </div>
            `).join('')}
            <div class="route-tips">
              <div class="route-tips-title">贴士</div>
              ${r.tips.map(t => `<div class="tip">· ${t}</div>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `).join('')}
    <div class="section-title">通用贴士</div>
    <div class="card">${GENERAL_TIPS.map(t => `<div class="tip" style="font-size:12px;margin-bottom:8px">· ${t}</div>`).join('')}</div>
  `;

  container.querySelectorAll('.route-head').forEach(el => {
    el.onclick = () => {
      const id = el.dataset.id;
      expandedId = expandedId === id ? '' : id;
      render();
    };
  });

  renderTabbar();
  const disc=document.createElement('div');
  disc.innerHTML='    <div style="background:#fafbfc;border-top:1px solid #e8eaee;padding:12px 16px;margin-top:16px;font-size:10px;color:#8a8f99;line-height:1.7;text-align:center">\\n      📋 所有信息均来自 2026.8.4 的 HKU 官方数据。本站仅作为公益开放工具。使用时如有出入请登录官方系统并以官方最新公布信息为准。\\n    </div>';
  container.appendChild(disc);
}

export default function commutePage() {
  expandedId = '';
  render();
}

import './TaskDetail.css';
import '../Badge/Badge.css';

const historyData = [
  { filled: true, text: '박현주님이 업무를 김나영님에게 위임하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '김은우님이 업무를 박현주님에게 위임하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
  { filled: false, text: '업무가 시작되었습니다.', date: '2017.08.17 11:32' },
];

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.tag]
 * @param {string} [props.requester]
 * @param {string} [props.reqDate]
 * @param {string} [props.dueDate]
 * @param {string} [props.activeTab]
 */
export const createTaskDetail = ({
  title = '개발팀 명함 주문요청',
  tag = '긴급',
  requester = '김생민',
  reqDate = '2017.09.01 13:57',
  dueDate = '2017.09.01 13:57',
  activeTab = 'history',
} = {}) => {
  const el = document.createElement('aside');
  el.className = 'detail-panel';

  const tabs = ['request', 'status', 'comment', 'history'];
  const tabLabels = { request: '요청내용', status: '진행상태', comment: '의견', history: '업무이력' };

  el.innerHTML = `
    <div class="detail-header">
      <div class="detail-header-row1">
        <span class="detail-star">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </span>
        ${tag ? `<span class="tag tag-urgent">${tag}</span>` : ''}
        <span class="detail-title">${title}</span>
        <label class="detail-check"><input type="checkbox" aria-label="완료 체크"></label>
        <button class="detail-share-btn" aria-label="공유">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
      </div>
      <div class="detail-meta">
        <span>${requester}</span>
        <span class="detail-meta-divider">|</span>
        <span>업무요청일 ${reqDate}</span>
        <span class="detail-meta-divider">|</span>
        <span>완료요청일 ${dueDate}</span>
      </div>
    </div>

    <div class="detail-tabs">
      ${tabs.map(t => `<button class="detail-tab${t === activeTab ? ' active' : ''}" data-tab="${t}">${tabLabels[t]}</button>`).join('')}
    </div>

    <div class="detail-body">
      <div class="tab-content${activeTab === 'request' ? ' active' : ''}" data-tab-content="request">
        <div class="request-content">
          <div class="request-field">
            <div class="request-label">업무 유형</div>
            <div>명함 주문요청</div>
          </div>
          <div class="request-field">
            <div class="request-label">요청 내용</div>
            <div>개발팀 신규 입사자 명함 주문 요청드립니다.<br>수량: 200매 (앞뒤 양면)<br>디자인: 기존 회사 표준 디자인<br>배송지: 본사 3층 개발팀</div>
          </div>
          <div class="request-field">
            <div class="request-label">첨부파일</div>
            <div style="color:var(--primary);cursor:pointer">📎 명함_시안_v2.pdf (1.2MB)</div>
          </div>
        </div>
      </div>

      <div class="tab-content${activeTab === 'status' ? ' active' : ''}" data-tab-content="status">
        <div class="request-content">
          <div class="progress-step">
            <span class="progress-step-dot done">✓</span>
            <span>요청 접수</span>
            <span style="margin-left:auto;color:var(--text-muted);font-size:12px">2017.09.01</span>
          </div>
          <div class="progress-step">
            <span class="progress-step-dot done">✓</span>
            <span>검토 중</span>
            <span style="margin-left:auto;color:var(--text-muted);font-size:12px">2017.09.02</span>
          </div>
          <div class="progress-step">
            <span class="progress-step-dot current">3</span>
            <span>처리 진행</span>
            <span style="margin-left:auto;color:var(--text-muted);font-size:12px">진행중</span>
          </div>
          <div class="progress-step">
            <span class="progress-step-dot pending">4</span>
            <span>완료</span>
            <span style="margin-left:auto;color:var(--text-muted);font-size:12px">-</span>
          </div>
        </div>
      </div>

      <div class="tab-content${activeTab === 'comment' ? ' active' : ''}" data-tab-content="comment">
        <div class="request-content">
          <div style="padding:12px;background:var(--bg-light);border-radius:8px;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span class="vip-avatar" style="width:28px;height:28px;font-size:11px;border-radius:50%;background:#E8D5B7;display:flex;align-items:center;justify-content:center;color:#8B7355">박</span>
              <strong style="font-size:13px">박현주</strong>
              <span style="font-size:11px;color:var(--text-muted)">2017.09.03 10:20</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary)">명함 시안 확인했습니다. 전화번호 수정 부탁드립니다.</div>
          </div>
          <div style="padding:12px;background:var(--bg-light);border-radius:8px">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span class="vip-avatar" style="width:28px;height:28px;font-size:11px;border-radius:50%;background:#E8D5B7;display:flex;align-items:center;justify-content:center;color:#8B7355">김</span>
              <strong style="font-size:13px">김생민</strong>
              <span style="font-size:11px;color:var(--text-muted)">2017.09.03 14:15</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary)">수정 완료하여 재첨부합니다.</div>
          </div>
        </div>
      </div>

      <div class="tab-content${activeTab === 'history' ? ' active' : ''}" data-tab-content="history">
        <div class="detail-count">총 <strong>${historyData.length}</strong>건</div>
        <div class="timeline-list">
          ${historyData.map(item => `
            <div class="timeline-item">
              <span class="timeline-dot${item.filled ? ' filled' : ''}"></span>
              <span class="timeline-text">${item.text}</span>
              <span class="timeline-date">${item.date}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Wire up tab switching
  el.querySelectorAll('.detail-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      el.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
      el.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const content = el.querySelector(`[data-tab-content="${tab.dataset.tab}"]`);
      if (content) content.classList.add('active');
    });
  });

  return el;
};

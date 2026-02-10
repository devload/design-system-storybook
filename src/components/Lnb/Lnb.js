import './Lnb.css';

const chevronSvg = '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M6 9l6 6 6-6"/></svg>';
const settingsSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.activeCategory] - Active menu item
 */
export const createLnb = ({ activeCategory = 'progress' } = {}) => {
  const el = document.createElement('aside');
  el.className = 'left-panel';

  el.innerHTML = `
    <div class="request-btn-wrap">
      <button class="request-btn">
        업무 요청하기
        <span class="btn-arrow">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
    </div>

    <div class="panel-section">
      <div class="section-header" data-toggle>
        <span class="section-toggle">${chevronSvg}</span>
        <span class="section-title">받은 업무함</span>
      </div>
      <div class="section-body">
        <div class="menu-item${activeCategory === 'waiting' ? ' active' : ''}" data-category="waiting">대기중인 요청업무 <span class="count">3</span></div>
        <div class="menu-item${activeCategory === 'progress' ? ' active' : ''}" data-category="progress">진행중인 요청업무 <span class="count">7</span></div>
        <div class="menu-item${activeCategory === 'done' ? ' active' : ''}" data-category="done">완료된 요청업무</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="section-header" data-toggle>
        <span class="section-toggle">${chevronSvg}</span>
        <span class="section-title">보낸 업무함</span>
      </div>
      <div class="section-body">
        <div class="menu-item" data-category="sent-waiting">대기중인 나의요청 <span class="count">1</span></div>
        <div class="menu-item" data-category="sent-progress">진행중인 나의요청</div>
        <div class="menu-item" data-category="sent-rejected">거절/보류된 나의요청 <span class="count danger">8</span></div>
        <div class="menu-item" data-category="sent-done">완료된 나의요청</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="menu-item" style="padding-left:8px">
        <span style="margin-right:4px">🚩</span> 플래그 업무 <span class="count">3</span>
      </div>
    </div>

    <div class="panel-section">
      <div class="section-header" data-toggle>
        <span class="section-toggle">${chevronSvg}</span>
        <span class="section-title">VIP 업무</span>
        <div class="section-actions">
          <button class="section-action-btn" aria-label="설정">${settingsSvg}</button>
        </div>
      </div>
      <div class="section-body">
        <div class="vip-item"><span class="vip-avatar">김</span> 김광수 팀장님</div>
        <div class="vip-item"><span class="vip-avatar">박</span> 박민혁 대리</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="section-header" data-toggle>
        <span class="section-toggle">${chevronSvg}</span>
        <span class="section-title">키워드 업무</span>
        <div class="section-actions">
          <button class="section-action-btn" aria-label="설정">${settingsSvg}</button>
        </div>
      </div>
      <div class="section-body">
        <div class="keyword-item">휴가 사용 신청</div>
        <div class="keyword-item">영수증 처리 신청</div>
        <div class="keyword-item">경조 휴가 신청</div>
      </div>
    </div>

    <div class="panel-section">
      <div class="section-header" data-toggle>
        <span class="section-toggle">${chevronSvg}</span>
        <span class="section-title">개인 보관함</span>
        <div class="section-actions">
          <button class="section-action-btn" aria-label="추가">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <button class="section-action-btn" aria-label="설정">${settingsSvg}</button>
        </div>
      </div>
      <div class="section-body">
        <div class="folder-item expanded">
          <span class="folder-toggle"><svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M9 6l6 6-6 6"/></svg></span>
          [완료] 프로젝트
        </div>
        <div class="folder-children">
          <div class="folder-child">GUI</div>
          <div class="folder-child">기획 UI</div>
        </div>
        <div class="folder-item">
          <span class="folder-toggle"><svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M9 6l6 6-6 6"/></svg></span>
          [진행중] 개인
        </div>
      </div>
    </div>

    <div class="left-panel-bottom">
      <div class="settings-link">
        ${settingsSvg}
        설정
      </div>
    </div>
  `;

  // Toggle sections
  el.querySelectorAll('[data-toggle]').forEach(header => {
    header.addEventListener('click', () => header.classList.toggle('collapsed'));
  });

  // Menu item click
  el.querySelectorAll('.menu-item[data-category]').forEach(item => {
    item.addEventListener('click', () => {
      el.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
      item.classList.add('active');
    });
  });

  return el;
};

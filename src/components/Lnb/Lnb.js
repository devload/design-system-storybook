import './Lnb.css';
import { createNavMenuItem } from '../MenuItem/MenuItem.js';
import { createCollapsibleSection } from '../CollapsibleSection/CollapsibleSection.js';
import { createTreeItem } from '../TreeItem/TreeItem.js';

const settingsSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>';
const plusSvg = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.activeCategory] - Active menu item
 */
export const createLnb = ({ activeCategory = 'progress' } = {}) => {
  const el = document.createElement('aside');
  el.className = 'left-panel';

  // Request button
  const btnWrap = document.createElement('div');
  btnWrap.className = 'request-btn-wrap';
  btnWrap.innerHTML = `
    <button class="request-btn">
      업무 요청하기
      <span class="btn-arrow">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </button>
  `;
  el.appendChild(btnWrap);

  // 받은 업무함 (CollapsibleSection + NavMenuItem)
  const receivedBody = document.createElement('div');
  receivedBody.appendChild(createNavMenuItem({ label: '대기중인 요청업무', count: 3, active: activeCategory === 'waiting' }));
  receivedBody.appendChild(createNavMenuItem({ label: '진행중인 요청업무', count: 7, active: activeCategory === 'progress' }));
  receivedBody.appendChild(createNavMenuItem({ label: '완료된 요청업무', active: activeCategory === 'done' }));
  el.appendChild(createCollapsibleSection({ title: '받은 업무함', children: receivedBody }));

  // 보낸 업무함
  const sentBody = document.createElement('div');
  sentBody.appendChild(createNavMenuItem({ label: '대기중인 나의요청', count: 1 }));
  sentBody.appendChild(createNavMenuItem({ label: '진행중인 나의요청' }));
  sentBody.appendChild(createNavMenuItem({ label: '거절/보류된 나의요청', count: 8, countVariant: 'danger' }));
  sentBody.appendChild(createNavMenuItem({ label: '완료된 나의요청' }));
  el.appendChild(createCollapsibleSection({ title: '보낸 업무함', children: sentBody }));

  // 플래그 업무 (standalone)
  const flagSection = document.createElement('div');
  flagSection.className = 'panel-section';
  flagSection.appendChild(createNavMenuItem({ label: '플래그 업무', count: 3, icon: '🚩' }));
  el.appendChild(flagSection);

  // VIP 업무
  const vipBody = document.createElement('div');
  vipBody.innerHTML = `
    <div class="vip-item"><span class="vip-avatar">김</span> 김광수 팀장님</div>
    <div class="vip-item"><span class="vip-avatar">박</span> 박민혁 대리</div>
  `;
  el.appendChild(createCollapsibleSection({
    title: 'VIP 업무',
    actions: [{ icon: settingsSvg, label: '설정' }],
    children: vipBody,
  }));

  // 키워드 업무
  const keywordBody = document.createElement('div');
  keywordBody.innerHTML = `
    <div class="keyword-item">휴가 사용 신청</div>
    <div class="keyword-item">영수증 처리 신청</div>
    <div class="keyword-item">경조 휴가 신청</div>
  `;
  el.appendChild(createCollapsibleSection({
    title: '키워드 업무',
    actions: [{ icon: settingsSvg, label: '설정' }],
    children: keywordBody,
  }));

  // 개인 보관함 (CollapsibleSection + TreeItem)
  const folderBody = document.createElement('div');
  folderBody.appendChild(createTreeItem({ label: '[완료] 프로젝트', expanded: true, children: ['GUI', '기획 UI'] }));
  folderBody.appendChild(createTreeItem({ label: '[진행중] 개인' }));
  el.appendChild(createCollapsibleSection({
    title: '개인 보관함',
    actions: [
      { icon: plusSvg, label: '추가' },
      { icon: settingsSvg, label: '설정' },
    ],
    children: folderBody,
  }));

  // Bottom settings
  const bottom = document.createElement('div');
  bottom.className = 'left-panel-bottom';
  bottom.innerHTML = `
    <div class="settings-link">
      ${settingsSvg}
      설정
    </div>
  `;
  el.appendChild(bottom);

  // Menu item click handlers
  el.querySelectorAll('.nav-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      el.querySelectorAll('.nav-menu-item').forEach(m => m.classList.remove('active'));
      item.classList.add('active');
    });
  });

  return el;
};

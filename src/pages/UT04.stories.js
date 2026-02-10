import { createHeader } from '../components/Header/Header.js';
import { createLnb } from '../components/Lnb/Lnb.js';
import { createBottomTabBar } from '../components/BottomTabBar/BottomTabBar.js';
import { createMobileLayout } from '../layouts/Mobile.js';
import '../components/TaskDetail/TaskDetail.css';
import '../components/Badge/Badge.css';

export default {
  title: 'Pages/UT04 모바일 상세',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile' },
  },
};

const createMobileHeader = () => {
  const header = document.createElement('header');
  header.className = 'top-header';
  header.style.padding = '0 12px';
  header.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;flex:1">
      <button style="color:rgba(255,255,255,0.7);display:flex;align-items:center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <span style="font-size:14px;font-weight:600;color:#fff">메뉴타이틀</span>
    </div>
    <div class="header-actions">
      <button style="color:rgba(255,255,255,0.7);display:flex;align-items:center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button>
      <button style="color:rgba(255,255,255,0.7);display:flex;align-items:center">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>
  `;
  return header;
};

const createMobileDetailContent = () => {
  const el = document.createElement('div');
  el.style.cssText = 'flex:1;overflow-y:auto;background:var(--bg-white);padding:16px;';
  el.innerHTML = `
    <h2 style="font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:12px">페이지명의 값이가 길어</h2>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px;display:flex;align-items:center;gap:8px">
      <span style="display:inline-flex;align-items:center;gap:4px">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        2017.09.01
      </span>
      <span class="status-badge progress" style="font-size:11px">Buttons</span>
    </div>
    <div style="font-size:13px;color:var(--text-secondary);line-height:1.8;margin-bottom:24px">
      <p>교육수강 신청합니다. 기간: 교육수강 신청합니다.</p>
      <p style="margin-top:8px"><strong>교육수강 신청합니다. 기간: 교육수강 신청합니다.</strong></p>
      <p style="margin-top:8px">교육수강 신청합니다. 기간: 교육수강 신청합니다.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
      <div style="padding:12px;background:var(--bg-light);border-radius:8px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="width:28px;height:28px;border-radius:50%;background:#E8D5B7;display:flex;align-items:center;justify-content:center;font-size:11px;color:#8B7355">김</span>
          <strong style="font-size:13px">김생민, 기업여 팀장님</strong>
        </div>
        <div style="font-size:13px;color:var(--text-secondary)">교육수강 신청합니다.</div>
      </div>
      <div style="padding:12px;background:var(--bg-light);border-radius:8px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <span style="width:28px;height:28px;border-radius:50%;background:#C8E6C9;display:flex;align-items:center;justify-content:center;font-size:11px;color:#2E7D32">박</span>
          <strong style="font-size:13px">박현주</strong>
        </div>
        <div style="font-size:13px;color:var(--text-secondary)">수강신청 합니다.</div>
      </div>
    </div>
  `;
  return el;
};

/** UT04 GNB TOP - 모바일 콘텐츠 상세 */
export const GnbTop = {
  render: () => createMobileLayout({
    header: createMobileHeader(),
    content: createMobileDetailContent(),
    bottomTabBar: createBottomTabBar({ activeTab: 'task' }),
  }),
};

/** UT04 GNB TOP + LNB OPEN - 모바일 상세 + LNB 슬라이드 */
export const GnbTopLnbOpen = {
  render: () => createMobileLayout({
    header: createMobileHeader(),
    content: createMobileDetailContent(),
    bottomTabBar: createBottomTabBar({ activeTab: 'menu' }),
    lnb: createLnb(),
    lnbOpen: true,
  }),
};

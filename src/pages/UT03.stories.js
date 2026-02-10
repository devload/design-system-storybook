import { createHeader } from '../components/Header/Header.js';
import { createLnb } from '../components/Lnb/Lnb.js';
import { createTaskList } from '../components/TaskList/TaskList.js';
import { createBottomTabBar } from '../components/BottomTabBar/BottomTabBar.js';
import { createMobileLayout } from '../layouts/Mobile.js';

export default {
  title: 'Pages/UT03 모바일 리스트',
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0', // TODO: 실제 Figma URL로 교체하세요
    },
  },
};

const createMobileHeader = () => {
  const header = document.createElement('header');
  header.className = 'top-header';
  header.style.padding = '0 12px';
  header.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;flex:1">
      <span style="font-size:14px;font-weight:600;color:#fff">메뉴타이틀</span>
    </div>
    <div class="search-bar" style="min-width:0;flex:1">
      <input type="text" placeholder="검색" aria-label="검색" style="min-width:60px">
      <button class="search-btn" aria-label="검색">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      </button>
    </div>
    <div class="header-actions">
      <button class="notification-btn" aria-label="알림">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>
      </button>
    </div>
  `;
  return header;
};

/** UT03 GNB TOP - 모바일 리스트 (하단 탭바) */
export const GnbTop = {
  render: () => createMobileLayout({
    header: createMobileHeader(),
    content: createTaskList({ title: '페이지명' }),
    bottomTabBar: createBottomTabBar({ activeTab: 'task' }),
  }),
};

/** UT03 GNB TOP + LNB OPEN - 모바일 + LNB 슬라이드 열림 */
export const GnbTopLnbOpen = {
  render: () => createMobileLayout({
    header: createMobileHeader(),
    content: createTaskList({ title: '페이지명' }),
    bottomTabBar: createBottomTabBar({ activeTab: 'menu' }),
    lnb: createLnb(),
    lnbOpen: true,
  }),
};

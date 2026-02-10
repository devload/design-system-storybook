import './TaskList.css';
import '../Badge/Badge.css';
import '../Toolbar/Toolbar.css';
import { createToolbar } from '../Toolbar/Toolbar.js';

const sampleTasks = [
  { id: 1, title: '2017 명함 주문요청', tags: ['긴급','보안'], dday: 'D-day', assignee: '김광욱', type: '신청', hasAttach: true, status: '진행중' },
  { id: 2, title: '개발팀 명함 주문요청', tags: ['긴급'], dday: 'D-1', assignee: '김광욱', type: '신청', hasAttach: true, status: '보류' },
  { id: 3, title: '개발 파견 주문요청', tags: [], dday: 'D-3', assignee: '김광욱', type: '신청', hasAttach: true, status: '진행중' },
  { id: 4, title: '2017 명함 주문요청', tags: [], dday: 'D-3', assignee: '김광욱', type: '협업', hasAttach: true, status: '진행중' },
  { id: 5, title: '개발 기능리스트 요청 업무', tags: [], dday: 'D-4', assignee: '김기욱', type: '취합', hasAttach: true, status: '진행중' },
  { id: 6, title: '노사 협의회 회의요청', tags: [], dday: 'D-3', assignee: '민우혁', type: '신청', hasAttach: true, status: '진행중' },
  { id: 7, title: '2017 명함 주문요청', tags: [], dday: 'D-3', assignee: '김광욱', type: '신청', hasAttach: true, status: '보류' },
  { id: 8, title: '자리이동 이사', tags: [], dday: 'D-3', assignee: '김광욱', type: '취합', hasAttach: true, status: '진행중' },
];

const pinSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v5"/><path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.89A2 2 0 0115 10.76V6h1a2 2 0 002-2 2 2 0 00-2-2H8a2 2 0 00-2 2 2 2 0 002 2h1v4.76a2 2 0 01-1.11 1.79l-1.78.89A2 2 0 005 15.24z"/></svg>';
const clipSvg = '<svg class="task-clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.title] - Content header title
 * @param {number} [props.totalCount] - Total items count
 * @param {number} [props.selectedTaskId] - Currently selected task ID
 */
export const createTaskList = ({
  title = '진행중인 요청업무',
  totalCount = 450,
  selectedTaskId = 2,
} = {}) => {
  const el = document.createElement('section');
  el.className = 'task-list-section';

  // Content header
  const headerEl = document.createElement('div');
  headerEl.className = 'content-header';
  headerEl.innerHTML = `
    <h1 class="content-title">${title}</h1>
    <div class="content-counter">
      <strong>${sampleTasks.length}</strong> / ${totalCount}
      <button class="reload-btn" aria-label="새로고침">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>
      </button>
    </div>
  `;
  el.appendChild(headerEl);

  // Toolbar
  el.appendChild(createToolbar());

  // Task List
  const listEl = document.createElement('div');
  listEl.className = 'task-list';
  listEl.innerHTML = sampleTasks.map(t => {
    const tagsHtml = t.tags.map(tag => {
      if (tag === '긴급') return '<span class="tag tag-urgent">긴급</span>';
      if (tag === '보안') return '<span class="tag tag-security">보안</span>';
      return '';
    }).join('');
    const ddayClass = (t.dday === 'D-day' || t.dday === 'D-1') ? ' urgent' : '';
    const statusClass = t.status === '진행중' ? 'progress' : t.status === '보류' ? 'hold' : 'complete';
    const activeClass = t.id === selectedTaskId ? ' active' : '';

    return `<div class="task-item${activeClass}" data-id="${t.id}">
      <label class="task-check" onclick="event.stopPropagation()">
        <input type="checkbox" aria-label="선택">
      </label>
      <span class="task-pin">${pinSvg}</span>
      <div class="task-body">
        <div class="task-row1">${tagsHtml}<span class="task-title-text">${t.title}</span></div>
        <div class="task-row2">
          <span class="task-assignee">${t.assignee} · ${t.type}</span>
          ${t.hasAttach ? clipSvg : ''}
        </div>
      </div>
      <div class="task-right">
        <span class="task-dday${ddayClass}">${t.dday}</span>
        <span class="status-badge ${statusClass}">${t.status}</span>
      </div>
    </div>`;
  }).join('');
  el.appendChild(listEl);

  // Pagination
  const paginationEl = document.createElement('div');
  paginationEl.className = 'pagination-bar';
  paginationEl.innerHTML = `
    <button class="page-btn disabled" aria-label="첫 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
    </button>
    <button class="page-btn disabled" aria-label="이전 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="page-btn active">1</button>
    <button class="page-btn">2</button>
    <button class="page-btn" aria-label="다음 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
    <button class="page-btn" aria-label="마지막 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
    </button>
    <div class="page-info">
      <input type="text" value="1" aria-label="페이지 번호">
      <span>/ 9</span>
    </div>
  `;
  el.appendChild(paginationEl);

  // Wire up task item clicks
  listEl.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', () => {
      listEl.querySelectorAll('.task-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  return el;
};

import './TaskList.css';
import '../Toolbar/Toolbar.css';
import { createToolbar } from '../Toolbar/Toolbar.js';
import { createTaskItem } from '../TaskItem/TaskItem.js';
import { createContentHeader } from '../ContentHeader/ContentHeader.js';

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

  // Content header (extracted component)
  el.appendChild(createContentHeader({ title, current: sampleTasks.length, total: totalCount }));

  // Toolbar
  el.appendChild(createToolbar());

  // Task List (using TaskItem components)
  const listEl = document.createElement('div');
  listEl.className = 'task-list';
  sampleTasks.forEach(t => {
    const item = createTaskItem({
      title: t.title,
      tags: t.tags,
      dday: t.dday,
      assignee: t.assignee,
      type: t.type,
      status: t.status,
      hasAttach: t.hasAttach,
      active: t.id === selectedTaskId,
    });
    item.dataset.id = t.id;
    listEl.appendChild(item);
  });
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

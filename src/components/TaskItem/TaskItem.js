import './TaskItem.css';
import { createTag } from '../Tag/Tag.js';
import { createStatusBadge } from '../StatusBadge/StatusBadge.js';
import { createDdayBadge } from '../DdayBadge/DdayBadge.js';

const pinSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17v5"/><path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.89A2 2 0 0115 10.76V6h1a2 2 0 002-2 2 2 0 00-2-2H8a2 2 0 00-2 2 2 2 0 002 2h1v4.76a2 2 0 01-1.11 1.79l-1.78.89A2 2 0 005 15.24z"/></svg>';
const clipSvg = '<svg class="task-item__clip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>';

/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string[]} [props.tags]
 * @param {string} [props.dday]
 * @param {string} [props.assignee]
 * @param {string} [props.type]
 * @param {string} [props.status]
 * @param {boolean} [props.hasAttach]
 * @param {boolean} [props.active]
 */
export const createTaskItem = ({
  title = '업무 제목',
  tags = [],
  dday = 'D-3',
  assignee = '담당자',
  type = '신청',
  status = '진행중',
  hasAttach = false,
  active = false,
} = {}) => {
  const el = document.createElement('div');
  el.className = `task-item${active ? ' active' : ''}`;

  // Build row1 with tags + title
  const row1 = document.createElement('div');
  row1.className = 'task-item__row1';
  tags.forEach(tag => {
    const variant = tag === '긴급' ? 'urgent' : tag === '보안' ? 'security' : 'info';
    row1.appendChild(createTag({ label: tag, variant }));
  });
  const titleSpan = document.createElement('span');
  titleSpan.className = 'task-item__title';
  titleSpan.textContent = title;
  row1.appendChild(titleSpan);

  // Build row2
  const row2 = document.createElement('div');
  row2.className = 'task-item__row2';
  const assigneeSpan = document.createElement('span');
  assigneeSpan.className = 'task-item__assignee';
  assigneeSpan.textContent = `${assignee} · ${type}`;
  row2.appendChild(assigneeSpan);
  if (hasAttach) row2.insertAdjacentHTML('beforeend', clipSvg);

  // Build right side
  const right = document.createElement('div');
  right.className = 'task-item__right';
  right.appendChild(createDdayBadge({ value: dday }));
  const statusMap = { '진행중': 'progress', '보류': 'hold', '완료': 'complete' };
  right.appendChild(createStatusBadge({ label: status, status: statusMap[status] || 'progress' }));

  // Assemble
  el.innerHTML = `
    <label class="task-item__check" onclick="event.stopPropagation()">
      <input type="checkbox" aria-label="선택">
    </label>
    <span class="task-item__pin">${pinSvg}</span>
  `;
  const body = document.createElement('div');
  body.className = 'task-item__body';
  body.appendChild(row1);
  body.appendChild(row2);
  el.appendChild(body);
  el.appendChild(right);

  return el;
};

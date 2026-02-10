import './ProgressStep.css';

/**
 * @param {Object} props
 * @param {Array<{label:string, date:string, status:'done'|'current'|'pending'}>} props.steps
 */
export const createProgressStep = ({
  steps = [
    { label: '요청 접수', date: '2017.09.01', status: 'done' },
    { label: '검토 중', date: '2017.09.02', status: 'done' },
    { label: '처리 진행', date: '진행중', status: 'current' },
    { label: '완료', date: '-', status: 'pending' },
  ],
} = {}) => {
  const el = document.createElement('div');
  el.className = 'progress-steps';

  el.innerHTML = steps.map((step, i) => {
    const dotContent = step.status === 'done' ? '✓' : (i + 1);
    return `
      <div class="pstep ${step.status}">
        <span class="pstep-dot ${step.status}">${dotContent}</span>
        <span class="pstep-label">${step.label}</span>
        <span class="pstep-date">${step.date}</span>
      </div>
    `;
  }).join('');

  return el;
};

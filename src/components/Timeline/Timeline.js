import './Timeline.css';

/**
 * @param {Object} props
 * @param {Array<{text:string, date:string, filled?:boolean, variant?:string}>} props.items
 */
export const createTimeline = ({
  items = [
    { filled: true, text: '박현주님이 업무를 김나영님에게 위임하였습니다.', date: '2017.08.17 11:32' },
    { filled: false, text: '박현주님이 업무를 반송하였습니다.', date: '2017.08.17 11:32' },
    { filled: false, text: '요청자가 업무 내용을 수정하였습니다.', date: '2017.08.17 11:32' },
    { filled: false, text: '김은우님이 업무를 박현주님에게 위임하였습니다.', date: '2017.08.17 11:32' },
    { filled: false, text: '업무가 시작되었습니다.', date: '2017.08.17 11:32' },
  ],
} = {}) => {
  const el = document.createElement('div');
  el.className = 'timeline';

  el.innerHTML = items.map(item => {
    const variantClass = item.variant ? ` ${item.variant}` : '';
    return `
      <div class="tl-item">
        <span class="tl-dot${item.filled ? ' filled' : ''}${variantClass}"></span>
        <span class="tl-text">${item.text}</span>
        <span class="tl-date">${item.date}</span>
      </div>
    `;
  }).join('');

  return el;
};

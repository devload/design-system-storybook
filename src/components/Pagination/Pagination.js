import './Pagination.css';

/**
 * @param {Object} props
 * @param {number} [props.currentPage]
 * @param {number} [props.totalPages]
 * @param {number} [props.visiblePages] - How many page numbers to show
 */
export const createPagination = ({
  currentPage = 1,
  totalPages = 9,
  visiblePages = 5,
} = {}) => {
  const el = document.createElement('div');
  el.className = 'pagination';

  const arrowSvgs = {
    first: '<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',
    prev: '<polyline points="15 18 9 12 15 6"/>',
    next: '<polyline points="9 18 15 12 9 6"/>',
    last: '<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>',
  };

  const isFirst = currentPage === 1;

  // First / Prev
  el.innerHTML = `
    <button class="pg-btn${isFirst ? ' disabled' : ''}" aria-label="첫 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">${arrowSvgs.first}</svg>
    </button>
    <button class="pg-btn${isFirst ? ' disabled' : ''}" aria-label="이전 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">${arrowSvgs.prev}</svg>
    </button>
  `;

  // Page numbers
  const start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const end = Math.min(totalPages, start + visiblePages - 1);
  for (let i = start; i <= end; i++) {
    const btn = document.createElement('button');
    btn.className = `pg-btn${i === currentPage ? ' active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      el.querySelectorAll('.pg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    el.appendChild(btn);
  }

  const isLast = currentPage === totalPages;
  const navHtml = `
    <button class="pg-btn${isLast ? ' disabled' : ''}" aria-label="다음 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">${arrowSvgs.next}</svg>
    </button>
    <button class="pg-btn${isLast ? ' disabled' : ''}" aria-label="마지막 페이지">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">${arrowSvgs.last}</svg>
    </button>
    <div class="pg-info">
      <input type="text" value="${currentPage}" aria-label="페이지 번호">
      <span>/ ${totalPages}</span>
    </div>
  `;
  el.insertAdjacentHTML('beforeend', navHtml);

  return el;
};

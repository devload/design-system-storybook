export default {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component: '타이포그래피 토큰 — 폰트 크기, 굵기, 줄 간격 가이드입니다.',
      },
    },
  },
};

export const FontSizes = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const sizes = [
      { token: '--font-size-xs', value: '11px', desc: '날짜, 카운트, 라벨' },
      { token: '--font-size-sm', value: '12px', desc: '보조 텍스트, 메타 정보' },
      { token: '--font-size-md', value: '13px', desc: '본문, 리스트 아이템' },
      { token: '--font-size-lg', value: '14px', desc: '섹션 제목, 카드 헤더' },
      { token: '--font-size-xl', value: '16px', desc: '상세 패널 제목' },
      { token: '--font-size-2xl', value: '18px', desc: '페이지 제목' },
      { token: '--font-size-3xl', value: '20px', desc: '큰 제목' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">폰트 크기 (Font Size)</h3>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${sizes.map(s => `
          <div style="display:flex;align-items:baseline;gap:16px;border-bottom:1px solid #F0F0F0;padding-bottom:12px">
            <code style="font-size:11px;color:#4096FF;min-width:140px">${s.token}</code>
            <span style="font-size:${s.value};color:#3D3D3D;flex:1">업무 요청 텍스트 (${s.value})</span>
            <span style="font-size:11px;color:#94A3B8;min-width:140px;text-align:right">${s.desc}</span>
          </div>
        `).join('')}
      </div>
    `;
    return wrap;
  },
};

export const FontWeights = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const weights = [
      { token: '--font-weight-normal', value: '400', desc: '일반 본문' },
      { token: '--font-weight-medium', value: '500', desc: '리스트 항목 제목' },
      { token: '--font-weight-semibold', value: '600', desc: '섹션 제목, 라벨' },
      { token: '--font-weight-bold', value: '700', desc: '페이지 제목, 강조' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">폰트 굵기 (Font Weight)</h3>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${weights.map(w => `
          <div style="display:flex;align-items:baseline;gap:16px;border-bottom:1px solid #F0F0F0;padding-bottom:12px">
            <code style="font-size:11px;color:#4096FF;min-width:180px">${w.token}</code>
            <span style="font-size:16px;font-weight:${w.value};color:#3D3D3D;flex:1">업무 요청 텍스트 (${w.value})</span>
            <span style="font-size:11px;color:#94A3B8;min-width:120px;text-align:right">${w.desc}</span>
          </div>
        `).join('')}
      </div>
    `;
    return wrap;
  },
};

export const LineHeights = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const lines = [
      { token: '--line-height-tight', value: '1.2', desc: '제목, 뱃지' },
      { token: '--line-height-normal', value: '1.5', desc: '본문 기본' },
      { token: '--line-height-relaxed', value: '1.8', desc: '요청 내용, 긴 텍스트' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">줄 간격 (Line Height)</h3>
      <div style="display:flex;flex-direction:column;gap:24px">
        ${lines.map(l => `
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <code style="font-size:11px;color:#4096FF">${l.token}</code>
              <span style="font-size:11px;color:#94A3B8">${l.value} — ${l.desc}</span>
            </div>
            <div style="font-size:13px;color:#3D3D3D;line-height:${l.value};background:#F8FAFC;padding:12px;border-radius:4px;border:1px solid #F0F0F0">
              개발팀 신규 입사자 명함 주문 요청드립니다. 수량: 200매 (앞뒤 양면). 디자인: 기존 회사 표준 디자인. 배송지: 본사 3층 개발팀으로 부탁드립니다.
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return wrap;
  },
};

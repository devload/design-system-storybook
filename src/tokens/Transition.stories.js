export default {
  title: 'Foundations/Transition',
  parameters: {
    docs: {
      description: {
        component: '전환(Transition) 토큰 — 인터랙션 애니메이션 속도 가이드입니다. 각 박스를 호버하여 전환 효과를 확인하세요.',
      },
    },
  },
};

export const TransitionSpeeds = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const transitions = [
      { token: '--transition-fast', value: '0.1s ease', desc: '버튼 호버, 체크박스, 즉각 피드백' },
      { token: '--transition-normal', value: '0.15s ease', desc: '탭 전환, 메뉴 호버, 일반 인터랙션' },
      { token: '--transition-slow', value: '0.3s ease', desc: '섹션 접기/펴기, 패널 전환' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:8px">전환 속도 스케일</h3>
      <p style="font-size:12px;color:#94A3B8;margin-bottom:24px">각 박스에 마우스를 올려 전환 효과를 확인하세요.</p>
      <div style="display:flex;flex-direction:column;gap:24px">
        ${transitions.map(t => `
          <div style="display:flex;align-items:center;gap:16px">
            <div class="transition-demo" style="width:80px;height:48px;background:#E6F4FF;border:2px solid #4096FF;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;color:#4096FF;font-weight:600;cursor:pointer;transition:all ${t.value}">
              Hover
            </div>
            <div style="flex:1">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <code style="font-size:12px;color:#4096FF">${t.token}</code>
                <span style="font-size:12px;color:#5D5D5D;font-weight:600">${t.value}</span>
              </div>
              <span style="font-size:11px;color:#94A3B8">${t.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add hover effects
    wrap.querySelectorAll('.transition-demo').forEach(demo => {
      demo.addEventListener('mouseenter', () => {
        demo.style.background = '#4096FF';
        demo.style.color = '#fff';
        demo.style.transform = 'scale(1.1)';
      });
      demo.addEventListener('mouseleave', () => {
        demo.style.background = '#E6F4FF';
        demo.style.color = '#4096FF';
        demo.style.transform = 'scale(1)';
      });
    });

    return wrap;
  },
};

export const ZIndex = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const layers = [
      { token: '--z-dropdown', value: '100', desc: '드롭다운 메뉴' },
      { token: '--z-overlay', value: '200', desc: '오버레이, 메뉴 패널' },
      { token: '--z-modal', value: '300', desc: '모달 다이얼로그' },
      { token: '--z-toast', value: '400', desc: '토스트 알림' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">Z-index 레이어</h3>
      <div style="position:relative;height:200px;margin-bottom:24px">
        ${layers.map((l, i) => `
          <div style="position:absolute;left:${i * 30}px;bottom:${i * 40}px;width:180px;height:60px;background:${['#E6F4FF', '#D1E9FF', '#A3D3FF', '#4096FF'][i]};border:2px solid #4096FF;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:${i === 3 ? '#fff' : '#3D3D3D'};z-index:${l.value};box-shadow:0 2px 8px rgba(0,0,0,0.1)">
            z-index: ${l.value}
          </div>
        `).join('')}
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="border-bottom:2px solid #EBEBEB">
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">토큰</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">값</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">용도</th>
          </tr>
        </thead>
        <tbody>
          ${layers.map(l => `
            <tr style="border-bottom:1px solid #F0F0F0">
              <td style="padding:8px 12px"><code style="color:#4096FF;font-size:12px">${l.token}</code></td>
              <td style="padding:8px 12px;font-weight:600">${l.value}</td>
              <td style="padding:8px 12px;color:#5D5D5D">${l.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return wrap;
  },
};

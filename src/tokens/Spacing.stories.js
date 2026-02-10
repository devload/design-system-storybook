export default {
  title: 'Foundations/Spacing & Layout',
  parameters: {
    docs: {
      description: {
        component: '레이아웃 크기 토큰과 간격 가이드입니다.',
      },
    },
  },
};

export const LayoutTokens = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const tokens = [
      { name: '--header-height', value: '56px', desc: '상단 헤더 높이' },
      { name: '--icon-sidebar-width', value: '66px', desc: 'GNB 사이드바 너비' },
      { name: '--left-panel-width', value: '230px', desc: 'LNB 패널 너비' },
      { name: '--detail-panel-width', value: '360px', desc: '상세 패널 너비' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">레이아웃 토큰</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="border-bottom:2px solid #EBEBEB">
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">토큰</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">값</th>
            <th style="text-align:left;padding:8px 12px;color:#3D3D3D;font-weight:600">설명</th>
          </tr>
        </thead>
        <tbody>
          ${tokens.map(t => `
            <tr style="border-bottom:1px solid #F0F0F0">
              <td style="padding:8px 12px"><code style="color:#4096FF;font-size:12px">${t.name}</code></td>
              <td style="padding:8px 12px;font-weight:600">${t.value}</td>
              <td style="padding:8px 12px;color:#5D5D5D">${t.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return wrap;
  },
};

export const SpacingScale = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px';

    const spacings = [
      { token: '--spacing-1', value: '4px', desc: '아이콘 간격, 미세 조정' },
      { token: '--spacing-2', value: '8px', desc: '인라인 요소 간격, 태그 갭' },
      { token: '--spacing-3', value: '12px', desc: '리스트 항목 패딩, 작은 여백' },
      { token: '--spacing-4', value: '16px', desc: '섹션 패딩, 카드 내부 여백' },
      { token: '--spacing-5', value: '20px', desc: '콘텐츠 좌우 패딩' },
      { token: '--spacing-6', value: '24px', desc: '섹션 간 간격, 그리드 갭' },
      { token: '--spacing-8', value: '32px', desc: '큰 섹션 간격' },
      { token: '--spacing-10', value: '40px', desc: '페이지 상하 여백' },
      { token: '--spacing-12', value: '48px', desc: '최대 여백' },
    ];

    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">간격 스케일 (4px 기반)</h3>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${spacings.map(s => `
          <div style="display:flex;align-items:center;gap:12px;padding:4px 0">
            <code style="font-size:11px;color:#4096FF;min-width:110px">${s.token}</code>
            <div style="width:${s.value};height:16px;background:#4096FF;border-radius:2px;flex-shrink:0"></div>
            <span style="font-size:12px;font-weight:600;min-width:36px">${s.value}</span>
            <span style="font-size:11px;color:#94A3B8">${s.desc}</span>
          </div>
        `).join('')}
      </div>
    `;
    return wrap;
  },
};

export const LayoutDiagram = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px';
    wrap.innerHTML = `
      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin-bottom:16px">GNB SIDE 레이아웃</h3>
      <div style="width:700px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:grid;grid-template-columns:66px 230px 1fr 360px;grid-template-rows:56px 1fr;overflow:hidden">
        <div style="grid-column:1/-1;background:#2A3046;display:flex;align-items:center;padding:0 16px;color:#fff;font-size:12px;font-weight:600">
          Header (56px)
        </div>
        <div style="background:#fff;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:10px;color:#5B628A;writing-mode:vertical-rl">GNB (66px)</div>
        <div style="background:#F8FAFC;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">LNB (230px)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;border-right:1px solid #EBEBEB">Content (flex)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Detail (360px)</div>
      </div>

      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin:24px 0 16px">GNB TOP 레이아웃</h3>
      <div style="width:700px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:grid;grid-template-columns:230px 1fr 360px;grid-template-rows:56px 1fr;overflow:hidden">
        <div style="grid-column:1/-1;background:#2A3046;display:flex;align-items:center;padding:0 16px;color:#fff;font-size:12px;font-weight:600;gap:16px">
          Header + GNB Top (56px)
        </div>
        <div style="background:#F8FAFC;border-right:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">LNB (230px)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;border-right:1px solid #EBEBEB">Content (flex)</div>
        <div style="background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Detail (360px)</div>
      </div>

      <h3 style="font-size:14px;font-weight:700;color:#3D3D3D;margin:24px 0 16px">모바일 레이아웃</h3>
      <div style="width:375px;height:400px;border:2px solid #EBEBEB;border-radius:8px;display:flex;flex-direction:column;overflow:hidden">
        <div style="height:56px;background:#2A3046;display:flex;align-items:center;padding:0 12px;color:#fff;font-size:12px;font-weight:600;flex-shrink:0">Header (56px)</div>
        <div style="flex:1;background:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D">Content (flex)</div>
        <div style="height:56px;background:#fff;border-top:1px solid #EBEBEB;display:flex;align-items:center;justify-content:center;font-size:11px;color:#5D5D5D;flex-shrink:0">BottomTabBar (56px)</div>
      </div>
    `;
    return wrap;
  },
};

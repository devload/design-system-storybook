export default {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component: 'HANDYSOFT 디자인 시스템의 타이포그래피 가이드. 시스템 폰트(-apple-system, Malgun Gothic)를 사용하며, base font-size는 13px입니다.',
      },
    },
  },
};

export const AllStyles = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:600px;display:flex;flex-direction:column;gap:20px';
    wrap.innerHTML = `
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">HEADING / 18px / Bold</p>
        <h1 style="font-size:18px;font-weight:700;color:#3D3D3D">페이지 제목 (content-title)</h1>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">HEADING / 16px / Bold</p>
        <h2 style="font-size:16px;font-weight:700;color:#3D3D3D">상세 패널 제목 (detail-title)</h2>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">SUBTITLE / 14px / Medium</p>
        <h3 style="font-size:14px;font-weight:500;color:#3D3D3D">버튼 텍스트, 섹션 제목</h3>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">BODY / 13px / Regular</p>
        <p style="font-size:13px;color:#5D5D5D;line-height:1.5">기본 본문 텍스트입니다. 업무 리스트, 상세 내용, 메뉴 아이템 등에 사용됩니다. 줄간격은 1.5입니다.</p>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">BODY-BOLD / 13px / SemiBold</p>
        <p style="font-size:13px;font-weight:600;color:#3D3D3D">강조 본문 텍스트 (활성 메뉴, 탭)</p>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">CAPTION / 12px / Regular</p>
        <p style="font-size:12px;color:#94A3B8">보조 텍스트, 날짜, 담당자, 메타 정보</p>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">MICRO / 11px / SemiBold</p>
        <p style="font-size:11px;font-weight:600;color:#5D5D5D">배지 텍스트, 태그, 툴바 버튼</p>
      </div>
      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:4px;font-weight:600">LABEL / 9px / Regular</p>
        <p style="font-size:9px;color:#5B628A">GNB 사이드 아이콘 라벨</p>
      </div>

      <hr style="border:none;border-top:1px solid #EBEBEB;margin:8px 0">

      <div>
        <p style="font-size:11px;color:#94A3B8;margin-bottom:8px;font-weight:600">FONT FAMILY</p>
        <code style="font-size:12px;color:#5D5D5D;background:#F8FAFC;padding:8px 12px;border-radius:4px;display:block">
          -apple-system, BlinkMacSystemFont, 'Malgun Gothic', '맑은 고딕', 'Segoe UI', Roboto, sans-serif
        </code>
      </div>
    `;
    return wrap;
  },
};

export const TextColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:400px;display:flex;flex-direction:column;gap:12px';
    const colors = [
      { name: 'text-primary', value: '#3D3D3D', desc: '주요 텍스트' },
      { name: 'text-secondary', value: '#5D5D5D', desc: '보조 텍스트' },
      { name: 'text-muted', value: '#94A3B8', desc: '비활성 텍스트' },
      { name: 'primary', value: '#4096FF', desc: '링크, 강조' },
      { name: 'danger', value: '#E74C3C', desc: '에러, 긴급' },
      { name: 'gbn-text', value: '#5B628A', desc: 'GNB 사이드바' },
    ];
    colors.forEach(c => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:12px';
      row.innerHTML = `
        <span style="width:12px;height:12px;border-radius:50%;background:${c.value};flex-shrink:0"></span>
        <span style="font-size:13px;color:${c.value};flex:1">${c.desc}</span>
        <code style="font-size:11px;color:#94A3B8">${c.name} ${c.value}</code>
      `;
      wrap.appendChild(row);
    });
    return wrap;
  },
};

import { createIconButton } from './IconButton.js';

export default {
  title: 'Components/IconButton',
};

const shareIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

export const GhostMd = {
  render: () => createIconButton({ icon: shareIcon, label: '공유', size: 'md', variant: 'ghost' }),
};

export const OutlinedMd = {
  render: () => createIconButton({ icon: shareIcon, label: '공유', size: 'md', variant: 'outlined' }),
};

export const AllSizes = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '12px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createIconButton({ icon: shareIcon, label: '공유', size: 'sm', variant: 'ghost' }));
    wrapper.appendChild(createIconButton({ icon: shareIcon, label: '공유', size: 'md', variant: 'ghost' }));
    wrapper.appendChild(createIconButton({ icon: shareIcon, label: '공유', size: 'lg', variant: 'ghost' }));
    return wrapper;
  },
};

export const AllVariants = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '12px';
    wrapper.style.alignItems = 'center';
    wrapper.style.padding = '20px';
    wrapper.appendChild(createIconButton({ icon: shareIcon, label: '공유', size: 'md', variant: 'ghost' }));
    wrapper.appendChild(createIconButton({ icon: shareIcon, label: '공유', size: 'md', variant: 'outlined' }));
    return wrapper;
  },
};

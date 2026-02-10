import { createIconButton } from './IconButton.js';
import { action } from 'storybook/actions';

export default {
  title: 'Atoms/IconButton',
  render: (args) => {
    const el = createIconButton(args);
    el.addEventListener('click', action('onClick'));
    return el;
  },
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['ghost', 'outlined'] },
  },
  parameters: {
    design: {
      type: 'figma',
      // TODO: 실제 Figma URL로 교체하세요
      url: 'https://www.figma.com/file/XXXXX/HANDYSOFT-DS?node-id=0:0',
    },
  },
};

const shareIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

export const GhostMd = {
  args: { icon: shareIcon, label: '공유', size: 'md', variant: 'ghost' },
};

export const OutlinedMd = {
  args: { icon: shareIcon, label: '공유', size: 'md', variant: 'outlined' },
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

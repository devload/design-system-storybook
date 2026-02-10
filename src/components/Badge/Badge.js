import './Badge.css';
import { createTag } from '../Tag/Tag.js';
import { createStatusBadge as _createStatusBadge } from '../StatusBadge/StatusBadge.js';

export const createBadge = createTag;
export const createStatusBadge = _createStatusBadge;

import { writable, type Writable } from 'svelte/store';

import type { CursorVariantT } from './cursor.types';

export const cursorVariant: Writable<CursorVariantT> = writable('default');

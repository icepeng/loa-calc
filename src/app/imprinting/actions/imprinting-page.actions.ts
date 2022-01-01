import { createAction, props } from '@ngrx/store';
import { Item } from '../models';

export const reset = createAction(
  '[Imprinting Page] Reset',
  props<{ items: Item[] }>()
);

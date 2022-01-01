import { createAction, props } from '@ngrx/store';
import { Item } from '../models';

export const loadItems = createAction(
  '[Item] Load Items',
  props<{ items: Item[] }>()
);

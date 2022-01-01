import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ItemActions } from '../actions';
import { Item } from '../models';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Item> {}

export const adapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: (book: Item) => book.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(ItemActions.loadItems, (state, { items }) => adapter.addMany(items, state))
);

import { createSelector, createFeatureSelector } from '@ngrx/store';
import {TitleState} from "./title.state";

export const selectTitleState = createFeatureSelector<TitleState>('title');

export const selectTitle = createSelector(
  selectTitleState,
  (state) => state?.title
);

import { createReducer, on } from '@ngrx/store';
import * as TitleActions from './title.actions';
import {TitleState} from "./title.state";

export const initialState: TitleState = {
  title: 'Home',
};

export const titleReducer = createReducer(
  initialState,
  on(TitleActions.setTitle, (state, { title }) => ({ ...state, title })),
);

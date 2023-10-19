import { createAction } from '@ngrx/store';

export const setTitle = createAction('[Title] Set Title', (title: string) => ({ title }));

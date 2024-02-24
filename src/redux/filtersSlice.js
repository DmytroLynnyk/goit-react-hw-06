import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeFilter = createAction('filters/changeFilter');

const filtersInitialState = {
  name: '',
};

export const filtersReducer = createReducer(filtersInitialState, builder =>
  builder.addCase(changeFilter, (state, action) => {
    state.name = action.payload;
  })
);

import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

export const addUser = createAction('user/addUser', value => {
  return {
    payload: {
      id: nanoid(),
      name: value.name,
      number: value.number,
    },
  };
});

export const deleteUser = createAction('user/deleteUser', value => {
  return {
    payload: {
      id: value,
    },
  };
});

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsReducer = createReducer(contactsInitialState, builder =>
  builder
    .addCase(addUser, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(deleteUser, (state, action) => {
      state.items = [
        ...state.items.filter(item => item.id !== action.payload.id),
      ];
    })
);

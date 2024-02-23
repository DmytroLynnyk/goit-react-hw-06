import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from '@reduxjs/toolkit';

export const addUser = ({ name, number }) => {
  return {
    type: 'user/addUser',
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteUser = id => {
  console.log(id);
  return {
    type: 'user/deleteUser',
    payload: { id },
  };
};

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  //   filters: {
  //     name: '',
  //   },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/addUser':
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload
      );
      return {
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };

    case 'user/deleteUser':
      return {
        contacts: {
          items: [
            ...state.contacts.items.filter(
              item => item.id !== action.payload.id
            ),
          ],
        },
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer, devToolsEnhancer());

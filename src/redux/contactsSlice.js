import {
  createAction,
  createReducer,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'user',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },

  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      prepare: ({ name, number }) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteUser: {
      reducer: (state, action) => {
        state.items = [
          ...state.items.filter(item => item.id !== action.payload.id),
        ];
      },
      prepare: id => {
        return { payload: { id } };
      },
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

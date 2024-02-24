import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
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

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

const filtersInitialState = {
  name: '',
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/changeFilter':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export const changeFilter = newFilter => {
  return {
    type: 'filters/changeFilter',
    payload: newFilter,
  };
};

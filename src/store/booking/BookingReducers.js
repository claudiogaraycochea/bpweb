import mockOffices from './../mock/offices.json';

const initialState = {
  offices: mockOffices,
  officeSelected: {}
};

export default function system(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_OFFICES':
      return {
        ...state,
        offices: action.offices
      };
    case 'GET_OFFICE':
      return {
        ...state,
        officeSelected: action.office
      };
    case 'SET_OFFICE_BOOKING':
      return {
        ...state,
        officeSelected: action.office
      };
    default:
      return state;
  }
}

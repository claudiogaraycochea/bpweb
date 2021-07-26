import mockOffices from './../mock/offices.json';

const searchOffices = function searchOffices(query) {
  const offices = mockOffices.filter((office) => office.name.includes(query));
  return {
    type: 'SEARCH_OFFICES',
    offices
  };
};

const getOffice = function getOffice(officeId) {
  const office = mockOffices.find((office) => office.id === officeId);
  return {
    type: 'GET_OFFICE',
    office
  };
};

const setOfficeBooking = function setOfficeBooking(officeId) {
  const office = mockOffices.find((office) => office.id === officeId);
  office.available = false;
  return {
    type: 'GET_OFFICE',
    office
  };
};

export { searchOffices, getOffice, setOfficeBooking };

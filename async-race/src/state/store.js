import { COLORS } from '../constants';

export const store = {
  carsPage: 1,
  carsPerPage: 7,
  inputName: '',
  inputColor: COLORS.white,
  id: 0,
  dataApi: {
    items: [],
    count: '4',
  },
  winnersPage: 1,
  winnerId: 0,
  animation: {},
  dataWinners: {
    items: [],
    count: '4',
  },
};

import { COLORS } from '../common/constants';

export const store = {
  carsPage: 1,
  carsPerPage: 7,
  inputName: '',
  inputColor: COLORS.white,
  id: 0,
  dataApi: {
    items: [],
    count: '0',
  },
  winnersPage: 1,
  winnerId: 0,
  animation: {},
  dataWinners: {
    items: [],
    count: '0',
  },
  sort: 'wins',
  order: 'asc',
  winnerName: '',
  winnerTime: 0,
  isAnimated: false,
};

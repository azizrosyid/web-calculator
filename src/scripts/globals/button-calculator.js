const BASIC_CALCULATOR = [
  {
    symbol: '+',
    type: 'OPERATOR',
    order: 20,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '-',
    type: 'OPERATOR',
    order: 16,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '×',
    type: 'OPERATOR',
    order: 12,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '÷',
    type: 'OPERATOR',
    order: 8,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '1',
    type: 'NUMBER',
    order: 17,
  },
  {
    symbol: '2',
    type: 'NUMBER',
    order: 18,
  },
  {
    symbol: '3',
    type: 'NUMBER',
    order: 19,
  },
  {
    symbol: '4',
    type: 'NUMBER',
    order: 13,
  },
  {
    symbol: '5',
    type: 'NUMBER',
    order: 14,
  },
  {
    symbol: '6',
    type: 'NUMBER',
    order: 15,
  },
  {
    symbol: '7',
    type: 'NUMBER',
    order: 9,
  },
  {
    symbol: '8',
    type: 'NUMBER',
    order: 10,
  },
  {
    symbol: '9',
    type: 'NUMBER',
    order: 11,
  },
  {
    symbol: '0',
    type: 'NUMBER',
    order: 22,
  },
  {
    symbol: '.',
    type: 'NUMBER',
    order: 23,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '%',
    type: 'NUMBER',
    order: 1,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '√',
    type: 'NUMBER',
    order: 2,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '±',
    type: 'NEGATION',
    order: 21,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '=',
    type: 'EQUAL',
    order: 24,
    classModifier: ['btn--grey'],
  },
  {
    symbol: 'x²',
    type: 'POWER',
    order: 3,
    classModifier: ['btn--grey'],
  },
  {
    symbol: 'x³',
    type: 'POWER',
    order: 4,
    classModifier: ['btn--grey'],
  },
  {
    symbol: 'CE',
    type: 'CLEAR_ALL',
    order: 5,
    classModifier: ['btn--grey'],
  },
  {
    symbol: 'C',
    type: 'CLEAR',
    order: 6,
    classModifier: ['btn--grey'],
  },
  {
    symbol: '⌫',
    type: 'BACKSPACE',
    order: 7,
    classModifier: ['btn--grey'],
  },
];

export default BASIC_CALCULATOR;

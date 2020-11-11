// TS build this happily, but then it crashes at runtime
import { LETTER_A } from 'lib';
// For `npm start` to not crash at runtime, I need to instead:
//   import { LETTER_A } from '../lib';
//                        HERE ^^^

console.log('LETTER_A is:', LETTER_A);
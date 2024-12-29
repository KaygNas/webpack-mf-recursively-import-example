import { getA } from './entryA';
import { getB } from './entryB';

export function getC() {
  return [getA(), getB(), 'C'].join('_');
}

const logC = () => {
  console.log('debug: C');
};

logC();

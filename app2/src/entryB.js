import { getA } from './entryA';

export function getB() {
  return [getA(), 'B'].join('_');
}

const logB = () => {
  console.log('debug: B');
};

logB();

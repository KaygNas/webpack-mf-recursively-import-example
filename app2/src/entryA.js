import { getC } from './entryC';

export function getA() {
  return 'A';
}

const logA = () => {
  console.log('debug: A');
  console.log('debug: ', getC());
};

logA();

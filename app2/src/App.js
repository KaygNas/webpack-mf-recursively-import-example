import { getC } from './entryC';
import { getA } from './entryA';

const App = () => {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = 'App2';

  const h2 = document.createElement('h2');
  h2.textContent = getC();

  const h3 = document.createElement('h3');
  h3.textContent = getA();

  root.appendChild(h1);
  root.appendChild(h2);
  root.appendChild(h3);
};

export default App;

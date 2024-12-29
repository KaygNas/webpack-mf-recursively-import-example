const RemoteApp = () => import('app2/App');

const App = () => {
  const root = document.querySelector('#root');
  const h1 = document.createElement('h1');
  h1.textContent = 'App1';
  root.appendChild(h1);
  RemoteApp().then((m) => m.default());
};

export default App;

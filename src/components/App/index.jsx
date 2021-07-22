import Header from '../Header';
import Content from '../Content';

import style from './style.module.css'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;

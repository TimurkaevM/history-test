import HeaderLinks from './HeaderLinks';
import HeaderInfo from './HeaderInfo';

import style from "./style.module.css";

function Header() {
  return (
    <div className={style.header}>
      <HeaderInfo />
      <HeaderLinks />
    </div>
  );
}

export default Header;

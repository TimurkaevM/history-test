import { NavLink, Route, Switch } from 'react-router-dom';
import Material from './Material';
import Photo from './Photo';
import jwt_decode from "jwt-decode";

import style from './style.module.css';

function Contribution() {
  const token = localStorage.getItem('token');
  const decode = jwt_decode(token);

  console.log(decode);

  return (
    <div className={style.contribution}>
      
      {/* aside */}
      <div className={style.aside}>
        
        <div className={style.aside__onprocessing}>
          <div className={style.aside__title}>На обработке</div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/onprocessing/material"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/onprocessing/material"
              >
                Материалы
              </NavLink>
            </div>
          </div>
        </div>

        <div className={style.aside__processed}>
          <div className={style.aside__title}>Обработано</div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/photo"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/photo"
              >
                фото
              </NavLink>
            </div>
          </div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/document"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/document"
              >
                документы
              </NavLink>
            </div>
          </div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/video"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/video"
              >
                видео
              </NavLink>
            </div>
          </div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/audio"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/audio"
              >
                Аудио
              </NavLink>
            </div>
          </div>
          <div className={style.nav}>
            <div>
              <NavLink
                className={style.nav__count}
                activeClassName={style.active}
                to="/history/contribution/material"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/history/contribution/material"
              >
                Материалы
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className={style.aside__filter}>

        </div>

      </div>
      
      {/* //routes */}
      <div className={style.routes}>
        <Switch>
          <Route exact path="/history/contribution/onprocessing/material" component={Material} />
          <Route path="/history/contribution/photo" component={Photo} />
        </Switch>
      </div>
        
    </div>
  );
}

export default Contribution;

import { NavLink, Route, Switch } from 'react-router-dom';
import Material from './Material';
import Photo from './Photo';

import style from './style.module.css';

function Contribution() {
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
                to="/contribution/onprocessing/material"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/onprocessing/material"
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
                to="/contribution/photo"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/photo"
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
                to="/contribution/document"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/document"
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
                to="/contribution/video"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/video"
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
                to="/contribution/audio"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/audio"
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
                to="/contribution/material"
              >
                0
              </NavLink>
            </div>
            <div>
              <NavLink
                className={style.nav__name}
                activeClassName={style.active}
                to="/contribution/material"
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
          <Route path="/contribution/onprocessing/material" component={Material} />
          <Route path="/contribution/photo" component={Photo} />
        </Switch>
      </div>
        
    </div>
  );
}

export default Contribution;

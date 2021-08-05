import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';

function ContributionSidebar() {
  const materials = useSelector(state => state.contribution.material);


  return (
    <div className={style.aside}>
    <div className={style.aside__onprocessing}>
      <div className={style.aside__title}>На обработке</div>
      <div className={style.nav}>
        <div>
          <NavLink
            className={style.nav__count}
            activeClassName={style.active}
            to="/history/contribution/material"
          >
            {materials.length}
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
            to="/history/contribution/materials"
          >
            0
          </NavLink>
        </div>
        <div>
          <NavLink
            className={style.nav__name}
            activeClassName={style.active}
            to="/history/contribution/materials"
          >
            Материалы
          </NavLink>
        </div>
      </div>
    </div>
    
    <div className={style.aside__filter}>

    </div>

  </div>
  )
}

export default ContributionSidebar;

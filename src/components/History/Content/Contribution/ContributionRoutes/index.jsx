import { Route, Switch } from 'react-router-dom';
import Material from '../Materials/index';
import Photo from '../Photos/index';
import Video from '../Videos';
import Audio from '../Audios';
import Document from '../Documents';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function ContributionRoutes() {
  const document = useSelector(state => state.contribution.document);

  console.log(document)

  return (
    <div className={style.routes}>
      <Switch>
        <Route exact path="/history/contribution/material" component={Material} />
        <Route path="/history/contribution/photo" component={Photo} />
        <Route path="/history/contribution/audio" component={Audio} />
        <Route path="/history/contribution/video" component={Video} />
        <Route path="/history/contribution/document" component={Document} />
      </Switch>
    </div>
  )
}

export default ContributionRoutes;

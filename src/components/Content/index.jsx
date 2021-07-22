import Main from './Main';
import Workshop from './Workshop';
import Send from './Send';
import Contribution from './Contribution';
import Chat from './Chat';
import { Route, Switch } from "react-router-dom";

import style from "./style.module.css";

function Content() {
  return (
    <div className={style.content}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/send' component={Send} />
        <Route path='/workshop' component={Workshop} />
        <Route path='/contribution' component={Contribution} />
        <Route path='/chat' component={Chat} />
      </Switch>
    </div>  
  );
}

export default Content;

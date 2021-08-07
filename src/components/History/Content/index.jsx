import Main from './Main';
import Workshop from './Workshop';
import Send from './Send';
import Contribution from './Contribution';
import Messenger from './Messenger';
import { Route, Switch } from "react-router-dom";

import style from "./style.module.css";

function Content() {
  return (
    <div className={style.content}>
      <Switch>
        <Route exact path='/history' component={Main} />
        <Route path='/history/send' component={Send} />
        <Route path='/history/workshop' component={Workshop} />
        <Route path='/history/contribution' component={Contribution} />
        <Route path='/history/chat' component={Messenger} />
      </Switch>
    </div>
  );
}

export default Content;

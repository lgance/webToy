import React, { Fragment } from 'react';
import { Route , Switch} from 'react-router-dom';

import { HomePage,BoardPage,NotFoundPage } from 'pages';

const App = () =>{
    return(
      <Fragment>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/board/:category" component={BoardPage}/>
              <Route component={NotFoundPage}/>
          </Switch>
      </Fragment>

    );

};

export default App;

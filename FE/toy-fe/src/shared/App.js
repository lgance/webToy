import React, {Component, Fragment } from 'react';
import { Route , Switch} from 'react-router-dom';

import { HomePage,BoardListPage,NotFoundPage,EditorPage } from 'pages';




class App extends Component {
    render() {
        return (
            <Fragment>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/board/editor" component={EditorPage}/>
                <Route path="/boardList/:category" component={BoardListPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Fragment>
  
        );
    }
}

export default App;

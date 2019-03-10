import React, { Component,Fragment } from 'react';

import BlogHeader from './template/BlogHeader';
import BlogNav from './template/BlogNav';
import '../styles/common.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="Main_wrapper">
           <BlogHeader></BlogHeader>
           <BlogNav></BlogNav>
        </div>
      </Fragment>
    );
  }
}

export default App;

import React, { Component,Fragment } from 'react';

import BlogHeader from './template/BlogHeader';
import BlogNav from './template/BlogNav';
import '../styles/common.scss';

class App extends Component {

  state = {
    versionText:"v0.0.1",
    navMenu:[
      {id:"home",text:"HOME",disabled:false,activate:true},
      {id:"node",text:"Node.js",disabled:false,activate:false},
      {id:"js",text: "JavaScript",disabled:false,activate:false},
      {id:"test",text:"test",disabled:false,activate:false},
      {id:"navDaily",text:"Daily",disabled:false,activate:false},
    ]
  }

   handleNavClick = async (id,event)=>{
    let {navMenu} = this.state;

    const activateIndex = navMenu.findIndex(index => index.activate=== true);

        let changed = {
          ...navMenu[activateIndex],
          activate:!navMenu[activateIndex].activate
        }

      await this.setState({
          navMenu:[
            ...navMenu.slice(0,activateIndex),
            changed,
            ...navMenu.slice(activateIndex+1 ,navMenu.length)
          ]
        })

    // current Value activate Change Index
    navMenu = this.state.navMenu;
    const selectIndex = navMenu.findIndex(index => index.id === id);

    changed = {
      ...navMenu[selectIndex],
      activate:!navMenu[selectIndex].activate
    }

    await this.setState({
      navMenu:[
        ...navMenu.slice(0,selectIndex),
        changed,
        ...navMenu.slice(selectIndex +1 ,navMenu.length)
      ]
    })

    
  }
  render() {
    const { navMenu, versionText} = this.state;
    const { handleNavClick }
    = this;
    
    return (
      <Fragment>
        <div className="Main_wrapper">
           <BlogHeader version={versionText}></BlogHeader>
           <BlogNav items={navMenu} navHandle = {handleNavClick}></BlogNav>
        </div>
      </Fragment>
    );
  }
}

export default App;

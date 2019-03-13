import React, { Component,Fragment } from 'react';
import { Route , Switch} from 'react-router-dom';
import BlogHeader from 'components/template/BlogHeader';
import { Board } from 'pages';
import 'styles/common.scss';
import 'styles/reset.scss';

class App extends Component {

  state = {
    versionText:"v0.0.1",
    navMenu:[
      {id:"home",text:"HOME",disabled:false,activate:true},
      {id:"node",text:"Node.js",disabled:false,activate:false},
      {id:"js",text: "JavaScript",disabled:false,activate:false},
      {id:"test",text:"test",disabled:false,activate:false},
      {id:"navDaily",text:"Daily",disabled:false,activate:false},
      {id:"issueBoard",text:"Issue",disabled:false,activate:false},
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
  
  console.warn('test');
    return (
      <Fragment>
        <div className="Main_wrapper">
            <BlogHeader version={versionText} 
            navMenu={navMenu} 
            navHandle = {handleNavClick}></BlogHeader>
              <Switch>
                <Route path="/board/:category" component={Board} /> 
                <Route path="/board" component={Board} />  
              </Switch>
        </div>

      </Fragment>
    );
  }
}

export default App;

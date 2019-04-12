import { combineReducers  } from 'redux';
import noticeList from './noticeList';
import blognavigation from './blognavigation';


export default combineReducers({
    noticeList,
    blognavigation
});



// 기본적인 것이지만 Note ***********
/*
 **************index.js**************

 export default combineReducers({
        ...reducers

 });
 
 **************configure.js**************
  import rootReducer from './modules 
 createStore(rootReducer); 

 또는 

 **************index.js**************
 export { default as noticeList } from './noticeList;

 **************configure.js

 import * as modules from './modules';
 const reducers = combineReducers(modules);
 createStore(reducers);
 
 * 
 * 
 * 
 */
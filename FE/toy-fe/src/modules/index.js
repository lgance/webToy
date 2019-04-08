import { combineReducers  } from 'redux';
import noticeList from './noticeList';
import blognavigation from './blognavigation';

export default combineReducers ({
    noticeList,
    blognavigation
});

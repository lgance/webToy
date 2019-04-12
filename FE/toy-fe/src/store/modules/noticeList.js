
const ADDNOTICE = 'noticeList/ADDNOTICE';

export const addnotice = noticeitem =>({type:ADDNOTICE,text:noticeitem});

const initialState = {
   noticeList:["공지입니다."]
}

export default function noticeList (state = initialState,action){

    switch(action.type){
        case ADDNOTICE:
            return {
                ...state,
                noticeList:action.text
            };
        default:
        return state;
    }
  }

const ADDNOTICE = 'noticeList/ADDNOTICE';

export const addnotice = noticeitem =>({type:ADDNOTICE,text:noticeitem});

const initialState = {
   noticeList:[
      {title:"공지사항입니다.",createDate:"2019-04-21",modifyDate:""},
      {title:"GDL Blog 디자인 작업 중입니다.",createDate:"2019-04-21",modifyDate:""},
      {title:"공지는 최대 4개까지 보여집니다 ",createDate:"2019-04-21",modifyDate:""}
    ]
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
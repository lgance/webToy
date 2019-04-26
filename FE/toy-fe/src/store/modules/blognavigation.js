

const ADDMENU = 'blognavigation/ADDMENU';
const DELETEMENU = 'blognavigation/DELETEMENU';
const CHANGEMENU = 'blognavigation/CHANGEMENU';

export const addmenu = menu => ({type:ADDMENU,text:menu});
export const deletemenu = () =>({type:DELETEMENU});
export const changemenu = () =>({type:CHANGEMENU});

const initialState = {
    blognavlist:[
        {id:"home",text:"HOME"},
        {id:"node",text:"Node.js"},
        {id:"js",text:"JavaScript"},
        {id:"selenium",text:"Selenium"},
        {id:"issue",text:"Issue"},
        {id:"profile",text:"Profile"},
        {id:"editor",text:"Editor"}
    ]
}

export default function blognavigation(state = initialState,action){
        switch(action.type){
            case ADDMENU:
                return {
                    ...state,
                    blognavlist:[]
                };
            case DELETEMENU:
                return {
                    ...state,
                    blognavlist:[]        
                };
            // case CHANGEMENU:  이후에 기능 추가 및 설정 
            //     return {
            //         ...state,
                 
            //     }; 아직 동작 X
            default:
                return state;
        }
}
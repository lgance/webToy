

const ADDMENU = 'blognavigation/ADDMENU';
const DELETEMENU = 'blognavigation/DELETEMENU';

export const addmenu = menu => ({type:ADDMENU,text:menu});
export const deletemenu = () =>({type:DELETEMENU});


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
            default:
                return state;
        }
}
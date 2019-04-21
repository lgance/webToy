

const GETCATEGORY = 'categoryList/GETCATEGORY';

export const getcategory = () => ({type:GETCATEGORY});


const initialState = {
    categoryList:[
        {title:"카테고리 테스트 샘플입니다."}
    ]
}

export default function categoryList (state=initialState,action){
    switch(action.type){
        case GETCATEGORY:
            return{
                ...state,
                categoryList:action.text
            };
        default:
            return state;
    }
}



const GETCATEGORY = 'categoryList/GETCATEGORY';

export const getcategory = () => ({type:GETCATEGORY});


const initialState = {
    categoryList:[
        {title:"한식,일식 가리지 않고 OK ! 청년 키움식당에서 청년 쉐프의 꿈을 키운다!",thumbnail:"top.png",
        count:1,registeredDate:"2019-04-25"},
        // {title:"청년창업, 창작활동 활성화의 열쇠! 메이커 문화 확산 사업",thumbnail:"top.png",
        // count:1,registeredDate:"2019-03-26"},
        // {title:"청년정책 전통시장에 입점할 수 있는 찬스!! 청년몰 예비상인 모집 떴음!",thumbnail:"top.png",
        // count:1,registeredDate:"2019-04-04"},
        // {title:"장대한 믿고간드아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ!!!",thumbnail:"top.png",
        // count:1,registeredDate:"2019-04-21"},
        // {title:"우리동네 네넴띤을 먹어보자",thumbnail:"top.png",
        // count:1,registeredDate:"2019-02-22"},
        // {title:"괄도네넴띤!!!!!",thumbnail:"top.png",
        // count:5,registeredDate:"2019-02-25"},
        // {title:"병열이 머머리 각!!!!!",thumbnail:"top.png",
        // count:1,registeredDate:"2019-01-25"},
        // {title:"[공지사항] 농촌은 새로운 도전지? 귀농하고 싶은 청년을 위한 청년창 업농장 1,600명을모집합니다. (여기부턴 짤려야 합니다. 하하하하하하하하핳)",thumbnail:"top.png",
        // count:1,registeredDate:"2019-04-25"},
        // {title:"어벤져스 앤드게임 개봉!! 현재 많은 사람들이 스포 ( 일명 스포일러 ) 에 시달림이 많다고 합니다. ",thumbnail:"top.png",
        // count:1,registeredDate:"2019-04-25"},
        // {title:"한식,일식 가리지 않고 OK ! 청년 키움식당에서 청년 쉐프의 꿈을 키운다!",thumbnail:"top.png",
        // count:1,registeredDate:"2019-01-25"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        // {title:"테스트중입니다.",thumbnail:"top.png",count:0,registeredDate:"1111-11-11"},
        

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

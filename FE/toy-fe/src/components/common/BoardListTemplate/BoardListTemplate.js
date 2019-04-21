import React from 'react';
import BoardListContainer from 'containers/BoardListContainer';
const BoardListTemplate = ({
    category
}) =>{
    return (
        <BoardListContainer category={category}></BoardListContainer>
    )
}
export default BoardListTemplate; 

//    {/* <div>
//                 <label>
//                 카테고리는 {match.params.category} 
//                 </label>
//                 <br/>
//                {detail && 
//                     <label>
//                        상세보기 페이지이며 번호는 {pageNumber}
//                     </label>
//                 } 
//             </div> */}
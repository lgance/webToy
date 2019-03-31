import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import BoardListTemplate from 'components/common/BoardListTemplate';
import queryString from 'query-string';

const BoardPage = ({location,match}) =>{
    const query = queryString.parse(location.search);
    console.log(query);
    const category = match.params.category;
    const detail = query.detail === 'true';
    const pageNumber = query.pageNumber;

// 보드리스트 를 보여줌 

// 일단 테스트용으로 보드 디테일 
        return(
            <PageTemplate>
                <BoardListTemplate category={category}></BoardListTemplate>
            </PageTemplate>
        )
}

export default BoardPage;

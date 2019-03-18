import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';

const BoardPage = ({location,match}) =>{
    const query = queryString.parse(location.search);
    console.log(query);

    const detail = query.detail === 'true';
    const pageNumber = query.pageNumber;


        return(
            <PageTemplate>
            <div>
                <label>
                카테고리는 {match.params.category}
                </label>
                <br/>
               {detail && 
                    <label>
                       상세보기 페이지이며 번호는 {pageNumber}
                    </label>
                } 
            </div>
            </PageTemplate>
        )
}

export default BoardPage;

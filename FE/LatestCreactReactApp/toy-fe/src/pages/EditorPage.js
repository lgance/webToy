import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import queryString from 'query-string';

import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
const EditorPage = ({location,match}) =>{
    const query = queryString.parse(location.search);
    console.log(query);

        return(
            <PageTemplate>
                    <EditorTemplate
                     header={<EditorHeader/>}
                     editor="에디터"
                     preview="프리뷰"
                    ></EditorTemplate>
            </PageTemplate>
        )
}

export default EditorPage;
 
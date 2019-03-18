import React from 'react';
import PageTemplate from 'components/common/PageTemplate';

/**
 *  history -> push, replace 경로 이동 또는 앞뒤 페이지 변경 
 *  location -> 현재 경로에 대한 정보 ex:  /about?foo=bar
 *  match -> 어떤 라우트에 매칭이 되었지에 대한 정보 params에는 /about/:name 을 가짐
 */


const HomePage = ()=>{
    return(
        <PageTemplate >
                <label>HomePages s 넘기는 문자열을 만듭니다. ggggggggggggggggggggggggggggggggggggggggggggggg   gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</label>
        </PageTemplate>
     )
}

export default HomePage;




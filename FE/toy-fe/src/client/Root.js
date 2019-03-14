import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';


// import { Provider } from 'react-redux';
// import configure from 'store/configure';
const Root = () =>(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;
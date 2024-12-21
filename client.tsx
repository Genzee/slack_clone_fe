import React from 'react';
//import { render } from 'react-dom';
//react 18 부터 createRoot 를 사용하여 컴포넌트를 랜더링함
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from '@layouts/App';

const container = document.querySelector('#app');
if (!container) throw new Error("Can't find #app");
const root = ReactDOM.createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);

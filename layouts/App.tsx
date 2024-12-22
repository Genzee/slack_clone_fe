//App.tsx

import React from 'react';
//import { Switch, Route, Redirect } from 'react-router-dom';
//react router version6 부터 변경
import { Routes, Route, Navigate } from 'react-router-dom';
/*
import Login from '@pages/Login';
import Signup from '@pages/Signup';
const Login = loadable(() => import('@page/Login));
*/
//Suspense를 이용하여 지연중일때 표시할 UI를 포함 할 수 있다.
//React.lazy를 이용해 적용
import { Suspense } from 'react';
//import Workspace from './Workspace';

const Login = React.lazy(() => import('@pages/Login'));
const Signup = React.lazy(() => import('@pages/Signup'));
const Workspace = React.lazy(() => import('@layouts/Workspace'));


const App = () => {
    return (<Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element = {<Login />}/>
                <Route path="/signup" element = {<Signup />}/>
                <Route path="/workspace" element = {<Workspace />}/>
              </Routes>
            </Suspense>);
}

export default App;
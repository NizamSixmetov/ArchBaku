import React from 'react';
import { Routes, Route, } from 'react-router';
import { MyRoutes } from '../MyRoutes';

const Routing = () => {
    return (
        <Routes>
            {
                MyRoutes.map(({id, path, element, title}) => {
                    return (
                        <Route key={id} path={path} element={element} title={title} />
                    )
                })
            }
        </Routes>
    )
}

export default Routing
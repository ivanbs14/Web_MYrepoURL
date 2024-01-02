import { Routes, Route } from "react-router-dom";

import { HomeUser } from '../pages/HomeUser/index';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomeUser />}/>
        </Routes>
    )
}
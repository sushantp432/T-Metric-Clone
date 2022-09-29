import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from '../Pages/Account/Login'
import Singup from '../Pages/Account/Singup'

import { Homepage } from '../Pages/HomePage/Homepage';
import RequiredAuth from '../Pages/RequiredAuth/RequiredAuth';
import SlideTask from '../Pages/TMETRIC_Pages/SlideTask';
import SlideTime from '../Pages/TMETRIC_Pages/SlideTime';
import SlideMyWork from '../Pages/TMETRIC_Pages/SlideMyWork';
import SlideMember from '../Pages/TMETRIC_Pages/SlideMember';
import SlideTeam from '../Pages/TMETRIC_Pages/SlideTeam';
import SlideProject from '../Pages/TMETRIC_Pages/Manage/SlideProject';
import SlideClient from '../Pages/TMETRIC_Pages/Manage/SlideClient';
import NewSideClient from '../Pages/TMETRIC_Pages/Manage/NewSideClient';

function MainRoutes() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/singup' element={<Singup />} />



                <Route path='/' element={<Homepage />} />

                {/* 
                <Route
                    path='/sidebar'
                    element={
                        <RequiredAuth>
                        <SideBar />
                        </RequiredAuth>
                    }
                /> */}
                <Route path='/time' element={<SlideTime />} />
                <Route path='/mywork' element={<SlideMyWork />} />
                <Route path='/member' element={<SlideMember />} />
                <Route path='/task' element={<SlideTask />} />
                <Route path='/team' element={<SlideTeam />} />


                {/* manage Routes */}

                <Route path='/project' element={<SlideProject />} />
                <Route path='/client' element={<SlideClient />} />
                <Route path='/client/new' element={<NewSideClient />} />

                <Route path='*' element={"Page Not Found"} />

            </Routes>
        </>

    )
}

export default MainRoutes

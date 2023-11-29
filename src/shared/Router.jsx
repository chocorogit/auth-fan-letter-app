import Detail from 'pages/Detail';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Profile from 'pages/Profile';
import Login from 'pages/Login';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import ButtonDisplay from "./components/ButtonDisplay";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard";
import RacerDisplay from "./components/RacerDisplay"
import RacerDisplayClass from "./components/RacerDisplayClass";
import Register from "./components/Register"

export default function App(){

    const [myName, setMyName] = useState('');
    const [myCity, setMyCity] = useState('');


    function updateUserInfo(username, usercity){
    setMyName(username);
    setMyCity(usercity);
};

    return (
    <>
    <Navbar name = {myName} city = {myCity} updateUser={updateUserInfo} />
    <div className="container">
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/buttons" element={<ButtonDisplay myName={myName} />} />
            <Route path="/standings" element={<RacerDisplay />} />
        </Routes>
        {/* <ButtonDisplay myName={myName}/> */}
        {/* <RacerDisplay /> */}
        {/* <RacerDisplayClass /> */}
    </div>   
    </>
    );
};
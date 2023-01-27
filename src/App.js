import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import AlertMessage from "./components/AlertMessage";
import ButtonDisplay from "./components/ButtonDisplay";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard";
import RacerDisplay from "./components/RacerDisplay"
import RacerDisplayClass from "./components/RacerDisplayClass";
import Register from "./components/Register"
import Login from "./components/Login";

export default function App(){

    const [myName, setMyName] = useState('');
    const [myCity, setMyCity] = useState('');

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);


    function updateUserInfo(username, usercity){
    setMyName(username);
    setMyCity(usercity);
};

    function flashMessage(message, category){
        setMessage(message)
        setCategory(category)
    }

    return (
    <>
    <Navbar name = {myName} city = {myCity} updateUser={updateUserInfo} />
    <div className="container">
        {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buttons" element={<ButtonDisplay myName={myName} />} />
            <Route path="/standings" element={<RacerDisplay />} />
            <Route path="/register" element={<Register flashMessage={flashMessage}/>} />
            <Route path='/login' element={<Login flashMessage={flashMessage} />} />
        </Routes>
        {/* <ButtonDisplay myName={myName}/> */}
        {/* <RacerDisplay /> */}
        {/* <RacerDisplayClass /> */}
    </div>   
    </>
    );
};
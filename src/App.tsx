import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
            <Header title="yourplanet" />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/my-page" element={<MyPage />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </main>
        </>
    );
}

export default App;

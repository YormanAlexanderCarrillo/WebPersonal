import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import HomePage from '../pages/Home/HomePage'
import ContactPage from '../pages/Contact/ContactPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'


const Routess = () => {
    return (
        <Router>
            <div className="w-full min-h-screen">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Routess
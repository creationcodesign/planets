import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Space from './views/Space'
import NotFound from './views/NotFound'

export default function RoutesNavBar() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/space' element={<Space />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

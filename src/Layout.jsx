import React from 'react'
import NavBar from './components/Header/NavBar.jsx'
import Footer from './components/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout

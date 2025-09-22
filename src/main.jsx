import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/About/about.css'
import './components/nav.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
import { Home, About, Contact, Categories, AllCourses } from "./components";
// import Online_course_platform from './Online_course_platform.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="all-courses" element={<AllCourses/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

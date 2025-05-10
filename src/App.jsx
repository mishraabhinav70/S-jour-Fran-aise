import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Courses from './pages/Courses/Courses'
import ContactUs from './pages/ContactUs/ContactUs'
import KidTeenCourse from './pages/Courses/KidTeenCourse'
import FocusFrenchCourses from './pages/Courses/FocusFrenchCourses'
import TcfTefCourse from './pages/Courses/TcfTefCourse'
import OrientationTest from './pages/Courses/OrientationTest'
import PrivateTuition from './pages/Courses/PrivateTuition'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="/courses/kids" element={<KidTeenCourse />} />
        <Route path="/courses/focus-french" element={<FocusFrenchCourses />} />
        <Route path="/private-tuition" element={<PrivateTuition />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/tcftef' element={<TcfTefCourse/>}/>
        <Route path='/orientationtest' element={<OrientationTest/>}/>
        <Route path='/PrivateTuition' element={<PrivateTuition />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App


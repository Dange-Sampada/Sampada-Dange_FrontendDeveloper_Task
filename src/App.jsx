import { useContext, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar'
import ThemeContext, { ThemeProvider } from './context/ThemeContext'
import "./assets/theme1.css";
import "./assets/theme2.css";
import "./assets/theme3.css";
import './App.css'

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div>
        {theme === "theme2" ? (
          <>
            <Header />
            <Sidebar />
          </>
        ) : (
          <>
            <Header />
          </>
        )}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )

}
function App() {

  return (
    <>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
function App() {

  const ConditionalNavbar = () => {
    const location = useLocation(); // Get the current location
    return location.pathname === '/sign_in' ? null : <Navbar />; // Render Navbar only on '/' route
  };
  return (
    <>
<Router>
<ConditionalNavbar />

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/sign_in' element={<SignIn/>}></Route>

  </Routes>
</Router>
    </>
  )
}

export default App


import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import News from './pages/News'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Excecutive from './pages/Excecutive'
import Legislative from './pages/Legislative'
import Judiciciary from './pages/Judiciary'
// import QuizGame from './pages/QuizGame'
import Snakegame from './pages/Snakegame'
import Flipcardgame from './pages/Flipcardgame'
import Profile from './pages/Profile'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Wikipedia from './Links/Wikipedia'
import Wikipedia2 from './Links/Wikipedia2'
import Wikipedia3 from './Links/Wikipedia3'

import { UserContextProvider } from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Navbar />
    <Toaster position='bottom-rigth' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='register' element={<Register />} />

      <Route path='login' element={<Login />} />

      <Route path='dashboard' element={<Dashboard />} />

      <Route path='excecutive' element={<Excecutive />} />
      
      <Route path='legislative' element={<Legislative />} />

      <Route path='Judiciary' element={<Judiciciary />} />

      <Route path="/News" element={<News />} />

      {/* <Route path="/Quizgame" element={<QuizGame />} /> */}

      <Route path='/Snakegame' element={<Snakegame />} />

      <Route path='flip-card-game' element={<Flipcardgame />} />

      <Route path='profile' element={<Profile />} />

      <Route path='Wikipedia' element={<Wikipedia />} />

      <Route path='Wikipedia2' element={<Wikipedia2 />} />
      
      <Route path='Wikipedia3' element={<Wikipedia3 />} />
       
    </Routes>
    <Footer/>
    </UserContextProvider>
  )
}

export default App

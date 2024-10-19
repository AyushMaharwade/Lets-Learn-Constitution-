
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Excecutive from './pages/Excecutive'
import Legislative from './pages/Legislative'
import Judiciciary from './pages/Judiciciary'
import Quizgame from './pages/Quizgame'
import Snakegame from './pages/Snakegame'
import Flipcardgame from './pages/Flipcardgame'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/register' element={<Register />} />

      <Route path='login' element={<Login />} />

      <Route path='dashboard' element={<Dashboard />} />

      <Route path='excecutive' element={<Excecutive />} />
      
      <Route path='legislative' element={<Legislative />} />

      <Route path='Judiciary' element={<Judiciciary />} />

      <Route path='quiz-game' element={<Quizgame />} />

      <Route path='Snake-game' element={<Snakegame />} />

      <Route path='flip-card-game' element={<Flipcardgame />} />
    </Routes>
    </>
  )
}

export default App

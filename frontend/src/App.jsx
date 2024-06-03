
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/home'
import Login from './page/login/login'
import Signup from './page/signup/signup'
import { Toaster } from'react-hot-toast';
import { useAuthContext } from './context/AuthContext'


function App() {
 const {authUser} = useAuthContext()
  return (
    <div className='p-4 flex h-screen items-center justify-center'>
      <Routes>
        <Route path='/' element= {authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element= {authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element= {authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      <Toaster />
   </div>
  )
}

export default App

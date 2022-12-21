import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Users from './pages/Users'
import Admin from './pages/Admin'
import Orders from './pages/Orders'
import Error from './pages/Error'
import Login from './pages/Login'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Dashboard/>} />
            <Route path='products' element={<Products/>} />
            <Route path='categories' element={<Categories />}/>
            <Route path='users' element={<Users />}/>
            <Route path='admins' element={<Admin />}/>
            <Route path='orders' element={<Orders />}/>
            <Route path='login' element={<Login />}/>
            <Route path='*' element={<Error />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

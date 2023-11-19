
import React from 'react'
import LoginPage from './pages/loginPage'
import store from './redux/store/store'
import { Provider } from "react-redux"
import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import DashBoard from './components/main/DashBoard';
export default function App() {
  return (
   <>
   <Provider store={store}>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<LoginPage/>}/>
   <Route path="/dash-board" element={<DashBoard/>}/>
   </Routes>
   </BrowserRouter>
   <ToastContainer/>
   
   </Provider>
  
   </>
  )
}

import './App.css';
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ForgetPasswordPage from './Pages/ForgetPasswordPage';
import NewPasswordPage from './Pages/NewPasswordPage';
import ProductListPage from './Pages/ProductListPage';
import ProductViewPage from './Pages/ProductViewPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ErrorPage from './Pages/ErrorPage';

function App() {

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <>
   
     <Routes>
      <Route path='/' element={<Homepage/>} />

      {!userInfo && <>
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/forgetPassword' element={<ForgetPasswordPage/>} />
            <Route path='/newPassword' element={<NewPasswordPage/>} />
      </>
      }
      <Route path='/ProductList' element={<ProductListPage/>} />
      <Route path='/productview/:productid' element={<ProductViewPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App;
 
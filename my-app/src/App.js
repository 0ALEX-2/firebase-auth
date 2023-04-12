
import './App.css';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Header from './components/Header';
import ProtectedRoute from './Protected/ProtectedRoute';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
     <Route path='/dashboard' element={<ProtectedRoute Dashboard={Dashboard}/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;


import './App.css';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/registration' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;

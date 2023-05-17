
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Homee from './Homee';
import Add from './Add';
import Edit from './Edit';
import View from './View';








function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='' element={<Homee/>}></Route>
      <Route path='add' element={<Add/>}></Route>
      <Route path='edit/:id' element={<Edit/>}></Route>
      <Route path='view/:id' element={<View/>}></Route>

      </Routes>
    
    
      <Footer></Footer>
    </div>
  );
}

export default App;

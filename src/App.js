import './App.css';
import Index from './components/Index'
import Cate from './components/pages/Categories/Categories'
import Manage from './components/pages/Managing/Managing'
import Quiz from './components/pages/Quiz/Quiz'
import Response from './components/pages/Response/Response'
import User from './components/pages/User/User'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/categories' element={<Cate/>}/>
        <Route path='/managing' element={<Manage/>}/>
        <Route path='/quiz/:id' element={<Quiz/>}/>
        <Route path='/response/:id' element={<Response/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>

    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">

      <div className='container'>
        
        <Routes>          
          <Route path={"/"} element={<Home />} />
          
          <Route path={"/posts"} element={<Posts />} /> 

          <Route path={"/post/:id"} element={<Post />} /> 
        </Routes>
      </div>

    </div>
  );
}

export default App;

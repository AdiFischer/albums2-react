import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import SingleAlbum from './scenes/Home';
import AddAlbum from './scenes/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/albums/new' element={<AddAlbum/>}/>
      <Route path='/albums/:albumId' element={<SingleAlbum/>}/>
    </Routes>
    </div>
  );
}

export default App;

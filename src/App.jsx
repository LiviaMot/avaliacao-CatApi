import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatApi from './pages/Cat Api'
import Home from './pages/Home'
import Details from './pages/details';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catApi" element={<CatApi />} />
        <Route path='/details/:id' element={<Details />}/>
      </Routes>
    </>
  )
}

export default App
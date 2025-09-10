import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatApi from './pages/Cat Api'
import Home from './pages/Home'
import Contador from './pages/Contador'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catApi" element={<CatApi />} />
        <Route path="/count" element={<Contador />} />
      </Routes>
    </>
  )
}

export default App
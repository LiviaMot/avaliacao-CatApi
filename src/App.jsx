import { Route, Routes } from 'react-router-dom'
import './App.css'
import CatApi from './pages/Cat Api'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catApi" element={<CatApi />} />
      </Routes>
    </>
  )
}

export default App
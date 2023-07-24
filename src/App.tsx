import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Login} from "./pages/Login"
import {Home} from  "./pages/home/home"
import {Navbar} from "./components/navbar"
import './App.css'
import { CreatePost } from './pages/create-post/create-post'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

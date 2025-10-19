import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';


export default function App(){
return (
<BrowserRouter>
<header className="app-header">
<Link to="/">Foodie</Link>
<nav>
<Link to="/login">Login</Link>
<Link to="/signup">Sign up</Link>
</nav>
</header>
<main>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
</Routes>
</main>
</BrowserRouter>
)
}
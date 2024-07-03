import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Favorites from './pages/Favorites';
import Painel from './pages/Painel';
import './style.scss';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/home" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/user-panel" element={ <Painel /> } />
      </Route>
    </Routes>
  );
}

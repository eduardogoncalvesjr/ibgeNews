import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import './style.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/home" element={ <Home /> } />
      </Route>
    </Routes>
  );
}

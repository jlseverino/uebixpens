import { BrowserRouter, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import SaldoPage from './pages/SaldoPage';
import PresupuestoPage from './pages/PresupuestoPage';
import InformesPage from './pages/InformesPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import HomeCategoryPage from './pages/HomeCategoryPage';
import AddGasto from './pages/AddGasto';
import HomeEditExpend from './pages/HomeEditExpend';
import HomeCategoryEdit from './pages/HomeCategoryEdit';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import JSONPretty from 'react-json-pretty';


function App() {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/saldo' element={<SaldoPage />} />
          <Route path='/presupuesto' element={<PresupuestoPage />} />
          <Route path='/informes' element={<InformesPage />} />
          <Route path='/selecCateg' element={<HomeCategoryPage />} />
          <Route path='/agregarGasto' element={<AddGasto />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/editExpend/:id' element={<HomeEditExpend />} />
          <Route path='/editCategory' element={<HomeCategoryEdit />} />
        </Routes>
      </BrowserRouter>
    );
  }else {
    return (
      <Login />
    )
  }

}

export default App;

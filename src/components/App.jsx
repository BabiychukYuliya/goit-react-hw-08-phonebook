import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {

  return (
      // <AppBar />
    
        <Routes>
      <Route path="/" element={<AppBar />} />
       <Route
          index
          element={
              <HomePage />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    
  );
};

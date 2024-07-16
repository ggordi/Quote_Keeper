import './App.css';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyQuotesPage from './pages/MyQuotesPage';
import ExplorePage from './pages/ExplorePage';
import PrivateRoute from './components/PrivateRoute';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<HomePage />} />
            <Route element={<PrivateRoute />}>
                <Route path="/my-quotes" element={<MyQuotesPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/explore" element={<ExplorePage />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;

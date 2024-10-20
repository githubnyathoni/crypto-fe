import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFound';
import ProtectedRoute from './components/middleware/ProtectedRoute';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

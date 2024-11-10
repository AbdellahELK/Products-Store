import { Routes,Route } from 'react-router-dom';
import Navbar from './pages/NavBar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-product" element={<CreatePage />} />
    </Routes>

  </>
  );
}

export default App;

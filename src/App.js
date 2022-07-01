import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinProvider } from './components/context/CoinContext';
import Coins from './components/coins/Coins';
import Navbar from './components/navbar/Navbar';
import Coin from './pages/Coin';

function App() {
  return (
    <CoinProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":id" element={<Coin />} />
          </Route>
        </Routes>
      </Router>
    </CoinProvider>
  );
}

export default App;

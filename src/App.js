import { db } from './utils/config';
import Header from './components/public/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;

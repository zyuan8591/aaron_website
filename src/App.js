import { db } from './utils/config';
import Header from './components/public/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import Test from './practice/Test';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

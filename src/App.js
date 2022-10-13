import { db } from './utils/config';
import Header from './components/public/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import TodoList from './pages/TodoList';
import Test from './practice/Test';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/aaron_website/" element={<Homepage />} />
        <Route path="/aaron_website/posts" element={<Posts />} />
        <Route path="/aaron_website/todo" element={<TodoList />} />
        <Route path="/aaron_website/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

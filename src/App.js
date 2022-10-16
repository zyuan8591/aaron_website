import { db } from './utils/config';
import Header from './components/public/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import TodoList from './pages/TodoList';
import Test from './practice/Test';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

export const postsContent = [
  <>
    <h2>安裝－install</h2>
    <Code>npm i react-router-dom</Code>
    <h2>基本設定－BrowserRouter & Routes & Route</h2>
    <Code>
      {`import {(BrowserRouter, Routes, Route)} from 'react-router-dom;
<BrowserRouter basename={'/aaron_website'}>
  <Routes>
    // 符合 path 條件，顯示 element 元件
    <Route path='/' element={<Homepage/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='*' element={<NotFound />} />
  </Routes>
</BrowserRouter>`}
    </Code>
    <h2>Link－使用 Link 取代 a 作為 SPA 內部網頁連結</h2>
    <Code>
      {`import { Link } from 'react-router-dom';
<Link to={'/posts'}>POSTS<Link>
`}
    </Code>
    <h2>useNavigate－前往指定網頁</h2>
    <Code>
      {`import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
// 前往 /home
navigate('/home');
// 上一頁
navigate(-1);
`}
    </Code>
    <h2>Outlet－當 path 符合條件，僅會改變 Outlet 為 element 內元件</h2>
    <Code>
      {`import { Routes, Route, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <Header />
      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}
`}
    </Code>
    <h2>Location－取得目前網址路徑</h2>
    <Code>{`import { useLocation } from 'react-router-dom';
const { pathname } = useLocation(); // /posts/1
`}</Code>
    <h2>NavLink－當網址符合條件時給予 className</h2>
    <Code>
      {`import { NavLink } from 'react-router-dom';
<NavLink to='/recipe' className={(nav) => (nav.isActive ? 'active' : '')}>
<NavLink />`}
    </Code>
  </>,
];

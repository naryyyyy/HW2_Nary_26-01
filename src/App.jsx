
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage";
import PostCommentsPage from './pages/PostCommentsPage'
import CreatePostPage from './pages/CreatePost' // импорт компонента CreatePostPage

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<SinglePostPage />}>
            <Route path="comments" element={<PostCommentsPage />} />
          </Route>
          <Route path="create-post" element={<CreatePostPage />} /> {/* новый маршрут */}
          {/* http://localhost:5173/posts */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get("https://dummyjson.com/posts")
      .then((resp) => setPosts(resp.data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <div>Произошла ошибка при загрузке постов. <button onClick={() => window.location.reload()}>Повторить</button></div>;
  }

  return (
    <div className="posts-list">
      <h1>Список постов</h1>
      <ul>
        {Array.isArray(posts) && posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-post">Создать пост</Link>
    </div>
  );
};

export default PostsPage;
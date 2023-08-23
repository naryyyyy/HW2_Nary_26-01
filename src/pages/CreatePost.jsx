import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("https://dummyjson.com/posts", { title, body }).then(() => navigate("/posts"));
  };

  return (
    <div className="create-post">
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Заголовок:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Текст:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
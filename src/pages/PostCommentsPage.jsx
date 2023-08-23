import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

const PostCommentsPage = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/posts/${id}/comments`).then((resp) => setComments(resp.data));
  }, []);

  return (
    <div className="comments-list">
      <ol>{comments && comments.map((c) => <li>{c.name}</li>)}</ol>
    </div>
  );
};
export default PostCommentsPage;


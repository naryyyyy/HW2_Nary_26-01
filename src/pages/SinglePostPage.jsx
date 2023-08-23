import { useParams, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/posts/${id}`).then((resp) => setPost(resp.data));
  }, [id]);
  //   console.log(params);

  return (
    <div className="single-post-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="btn" onClick={() => navigate(`/posts/${id}/comments`)}>
        Comments
      </button>
      <Outlet />
    </div>
  );
};
export default SinglePostPage;

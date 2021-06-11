import React, { useState, useEffect } from "react";
import axios from "axios";
import CommenCreate from "./CommentCreate";
import CommentList from "./CommentList";

interface PostType {
  id: string;
  title: string;
  comments: [];
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostType>({
    id: "",
    title: "",
    comments: [],
  });

  const fetchPosts = async () => {
    //Post to queryService
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post: PostType) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body" key={post.id}>
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommenCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;

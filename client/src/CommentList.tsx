import React from "react";

interface PropsChildren {
  comments: [] | undefined;
}

interface CommentType {
  id: string;
  content: string;
  comments: [] | undefined;
}

const CommentList: React.FC<PropsChildren> = ({ comments }) => {
  //unused but working
  // const [comments, setComments] = useState<CommentType[]>([
  //   {
  //     id: "",
  //     content: "",
  //   },
  // ]);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   if (postId !== undefined) fetchData();
  // }, []);

  const renderedComments =
    comments &&
    comments.map((comment: CommentType) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;

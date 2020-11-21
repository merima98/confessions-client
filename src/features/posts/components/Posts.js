import React, { useEffect } from "react";
function Posts() {
  const [posts, setPosts] = React.useState([]);
  const { REACT_APP_HOST } = process.env;
  const { REACT_APP_PORT } = process.env;

  useEffect(async () => {
    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/`
      );
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      {posts.map((item) => {
        return <div key={item._id}>{item.body} </div>;
      })}
    </div>
  );
}
export default Posts;

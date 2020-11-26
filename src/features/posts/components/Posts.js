import React, { useEffect } from "react";
import Post from "./Post";

import Header from "../../header/components/Header";
import Home from "./Home";
import Footer from "./Footer";
import styled from "styled-components";

function Posts(props) {
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
  }, [setPosts]);
  const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #454545;
    opacity: 0.5;
  `;

  const Container = styled.div`
    padding: 64px 20px;
    max-width: 992px;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 20px;
    }
  `;
  const PostsContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 576px;
    @media (min-width: 1090px) {
      margin: initial;
      width: initial;
      max-width: initial;
    }
  `;
  // const PostEmpty = styled.p`
  //   font-size: 0.8rem;
  //   text-align: center;
  //   color: ${(props) => props.theme.primary};
  // `;

  const SidebarContainer = styled.div`
    display: none;
    margin-left: 500px;
    @media (min-width: 1090px) {
      display: flex;
      flex-direction: column;
    }
  `;

  const Sidebar = styled.div`
    position: sticky;
    top: 64px;
  `;
  const Approve = styled.button`
    background-color: #454545;
    color: white;
    border-radius: 1px solid #454545;
    box-shadow: none;
    width: 100px;
    height: 25px;
    display: inline;
  `;
  const Condemn = styled.button`
    background-color: #454545;
    color: white;
    border-radius: 1px solid #454545;
    box-shadow: none;
    width: 100px;
    height: 25px;
    display: inline;
  `;

  return (
    <Wrapper>
      <Header />
      <Container>
        <PostsContainer>
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <Post key={post._id} body={post.body} date={post.date} />
                <Approve>Approve</Approve> <Condemn>Condemn</Condemn>
              </div>
            );
          })}
        </PostsContainer>
        <SidebarContainer>
          <Sidebar>
            <Home />
            <Footer />
          </Sidebar>
        </SidebarContainer>
      </Container>
    </Wrapper>
  );
}
export default Posts;

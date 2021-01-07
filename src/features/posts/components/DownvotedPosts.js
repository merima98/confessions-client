import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Post from "./Post";
import Paginator from "../../header/components/Paginator";
import { BREAKPOINTS } from "../../../constants";

const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.body};
`;

const Container = styled.div`
  padding: 64px 20px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;
const PostsContainer = styled.div`
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border-bottom: 1px solid #3e4042;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    flex-direction: row;
  }
`;

const Approve = styled.div`
  cursor: pointer;
  color: #65676b;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 15px;
  margin-bottom: 2px;
  font-family: Segoe UI Historic;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    border-radius: 2%;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;

const Condemn = styled.div`
  cursor: pointer;
  color: #65676b;
  display: grid;
  grid-template-columns: 1fr;
  font-size: 15px;
  font-family: Segoe UI Historic;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    border-radius: 2%;
  }

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;

const PostsDiv = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
`;
function DownvotedPosts(props) {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);

  const pages = totalPage;

  function handleAprove(id) {
    axios
      .put(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/${id}/${1}`)
      .then(async () => {
        const response = await fetch(
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/2/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }
  async function loadPosts(currentPage) {
    let nextPage = Number(currentPage) + Number(1);

    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/3/${nextPage}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadPreviousPosts(currentPage) {
    let nextPage = Number(currentPage) - Number(1);

    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/3/${nextPage}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {
      console.log(err);
    }
  }

  function handleCondemn(id) {
    axios
      .put(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/${id}/${0}`)
      .then(async () => {
        const response = await fetch(
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/3/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }

  useEffect(async () => {
    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/3/${0}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {
      console.log(err);
    }
  }, [setPosts, setCurrentPage]);

  return (
    <Wrapper>
      <Container>
        <PostsContainer>
          {posts.map((post) => {
            return (
              <PostsDiv key={post._id}>
                <Post key={post._id} body={post.body} date={post.date} />
                <Buttons>
                  <Approve onClick={() => handleAprove(post._id)}>
                    Approve {post.totalUpvotes}
                  </Approve>{" "}
                  <Condemn onClick={() => handleCondemn(post._id)}>
                    Condemn {post.totalDownvotes}
                  </Condemn>
                </Buttons>
              </PostsDiv>
            );
          })}
        </PostsContainer>
        <Paginator
          currentPage={currentPage}
          lastPage={totalPage}
          pages={pages}
          onNext={() => loadPosts(currentPage)}
          onPrevious={() => loadPreviousPosts(currentPage)}
        />
      </Container>
    </Wrapper>
  );
}
export default DownvotedPosts;

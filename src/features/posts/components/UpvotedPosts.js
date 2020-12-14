import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Post from "./Post";
import Footer from "./Footer";
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
    max-width: 992px;
    width: 40%;
    margin: 0 auto;
  }
`;
const PostsContainer = styled.div``;

const SidebarContainer = styled.div`
  margin-bottom: 0;
  right: 0.5rem;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: block;
    flex-direction: column;
    padding-top: 8px;
    position: fixed;
    top: 10%;
    width: 25%;
  }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 64px;
  font: 13px Segoe UI Historic;
`;
const Approve = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  color: #999999;
  height: 10px;
  margin-top: 10px;
  display: inline;
  text-align: center;

  flex: 10%;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
  font: 7px Segoe UI Historic;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;
const Buttons = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 100%;
  }
`;
const Condemn = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  color: #999999;
  height: 10px;
  margin-top: 10px;
  display: inline;
  text-align: center;
  flex: 10%;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 5px;
  font: 7px Segoe UI Historic;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;

const PostsDiv = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  border-radius: 20px;
  padding-bottom: 1%;
  margin-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    background-color: ${(props) => props.theme.colors.background};
    padding-right: 10%;
    padding-left: 10%;
  }
`;
function UpvotedPosts(props) {
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
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/2/${nextPage}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadPreviousPosts(currentPage) {
    let nextPage = Number(currentPage) - Number(1);

    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/2/${nextPage}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleCondemn(id) {
    axios
      .put(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/${id}/${0}`)
      .then(async () => {
        const response = await fetch(
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/2/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }

  useEffect(async () => {
    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/2/${0}`
      );
      const data = await response.json();
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);

      console.log(data);
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
        <SidebarContainer>
          <Sidebar>
            <Footer />
          </Sidebar>
        </SidebarContainer>
      </Container>
    </Wrapper>
  );
}
export default UpvotedPosts;

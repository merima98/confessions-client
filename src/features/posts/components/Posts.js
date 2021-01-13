import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Post from "./Post";
import Paginator from "../../header/components/Paginator";
import Header from "../../header/components/Header";
import Spinner from "../../spinner/Spinner";
import { BREAKPOINTS } from "../../../constants";
import NewPostForm from "./NewPostForm";
import api from "../../../api/queries";
import mutations from "../../../api/mutations";

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

function Posts() {
  const location = useLocation();
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const pages = totalPage;

  function getSort() {
    if (location.pathname === "/sort/random") {
      return 1;
    }
    if (location.pathname === "/sort/upvoted") {
      return 2;
    }
    if (location.pathname === "/sort/downvoted") {
      return 3;
    }
    if (location.pathname === "/sort/lastadded" || location.pathname === "/") {
      return 0;
    }
  }

  async function handleApprove(id) {
    await mutations.rate(id, 1);
    const editedPosts = posts.map((post) => {
      if (id === post._id) {
        return { ...post, totalUpvotes: post.totalUpvotes + 1 };
      }
      return post;
    });
    setPosts(editedPosts);
  }
  async function loadPosts(currentPage) {
    const nextPage = Number(currentPage) + Number(1);
    try {
      const response = await api.confessions(nextPage, getSort());
      const data = await response.data;
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {}
  }

  async function loadPreviousPosts(currentPage) {
    const nextPage = Number(currentPage) - Number(1);
    try {
      const response = await api.confessions(nextPage, getSort());
      const data = await response.data;
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {}
  }

  async function loadFirstPosts() {
    try {
      const response = await api.confessions(0, getSort());
      const data = await response.data;
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);
    } catch (err) {}
  }

  async function handleCondemn(id) {
    await mutations.rate(id, 0);
    const editedPosts = posts.map((post) => {
      if (id === post._id) {
        return { ...post, totalDownvotes: post.totalDownvotes + 1 };
      }
      return post;
    });
    setPosts(editedPosts);
  }

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await api.confessions(0, getSort());
      const data = await response.data;
      setPosts(data.posts);
      setCurrentPage(data.pagination.current_page);
      setTotalPage(data.pagination.total_page);

      if (data) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    } catch (err) {}
  }, [setPosts, setCurrentPage, setTotalPage, location.pathname]);

  return (
    <Wrapper>
      <Header onFirst={() => loadFirstPosts(currentPage)} />
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <PostsContainer>
            {location.pathname === "/" && (
              <NewPostForm
                mutations={mutations}
                posts={posts}
                setPosts={setPosts}
              />
            )}
            {posts.map((post) => {
              return (
                <PostsDiv key={post._id}>
                  <Post
                    key={post._id}
                    body={post.body}
                    date={post.date}
                    id={post._id}
                    totalDownvotes={post.totalDownvotes}
                    totalUpvotes={post.totalUpvotes}
                  />
                  <Buttons>
                    <Approve onClick={() => handleApprove(post._id)}>
                      Approve
                    </Approve>{" "}
                    <Condemn onClick={() => handleCondemn(post._id)}>
                      Condemn
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
      )}
    </Wrapper>
  );
}
export default Posts;

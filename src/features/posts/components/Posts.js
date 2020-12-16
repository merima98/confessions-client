import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

import Post from "./Post";
import Footer from "./Footer";
import Paginator from "../../header/components/Paginator";
import { BREAKPOINTS } from "../../../constants";
import NewPostForm from "./NewPostForm";

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
    border-radius: 2.5%;
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
    border-radius: 2.5%;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 50%;
  }
`;

const PostsDiv = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  padding-bottom: 1%;
  padding-top: 1%;
  margin-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const FormPosts = styled.form`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  padding-top: 2.5%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding-top: 5%;
  }
`;
const LabelPosts = styled.label`
  color: ${(props) => props.theme.colors.color};
  text-align: center;
  display: block;
  padding-top: 4px;
  padding-bottom: 8px;
  height: 5%;
  font: 7px Segoe UI Historic;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    font: 9px Segoe UI Historic;
    padding-bottom: 4px;
    height: 0%;
    padding-top: 0px;
  }
`;

const SpanPosts = styled.span`
  background-color: ${(props) => props.theme.colors.background};
  color: white;
  text-align: center;
  display: block;
  padding-top: 4px;
  padding-bottom: 8px;
  height: 5%;
`;
const PostsTextArea = styled.textarea`
  color: #b0b3b8;
  width: 54%;
  resize: none;
  background-color: ${(props) => props.theme.colors.newPostBackground};
  border-radius: 20px;
  padding-bottom: 5%;
  padding-top: 5%;
  padding-left: 15%;
  padding-right: 30%;
  height: 10px;
  outline: 0;
  border-color: ${(props) => props.theme.colors.newPostBorderColor};
  font: 7px Segoe UI Historic;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    &:hover {
      background-color: ${(props) => props.theme.colors.newPostHover};
      cursor: pointer;
    }
    padding-top: 10px;
    font: 9px Segoe UI Historic;
    padding-bottom: 0%;
    height: 20px;
  }
`;
const SaveButton = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  color: #999999;
  height: 10px;
  margin: 0 auto;
  display: inline;
  text-align: center;
  width: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  font: 7px Segoe UI Historic;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
    border-radius: 2.5%;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 25%;
  }
`;

const validationSchema = Yup.object().shape({
  body: Yup.string()
    .max(280, "Max 280 characters")
    .min(20, "Must enter minimum 20 charasters!"),
});

function Posts(props) {
  let history = useHistory();
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);

  const pages = totalPage;

  function handleAprove(id) {
    axios
      .put(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/${id}/${1}`)
      .then(async () => {
        const response = await fetch(
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }
  async function loadPosts(currentPage) {
    let nextPage = Number(currentPage) + Number(1);

    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${nextPage}`
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
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${nextPage}`
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
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }

  const formik = useFormik({
    validationSchema,
    initialValues: {
      body: props.body || "",
    },
  });
  function onSubmit(values) {
    axios
      .post(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/`, {
        body: values,
      })
      .then((res) => {
        history.push("/sort/lastadded");
      });
  }

  useEffect(async () => {
    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${0}`
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
          {/* <FormPosts onSubmit={formik.handleSubmit}>
            <LabelPosts>Write new post here!</LabelPosts>
            {formik.touched.body && formik.errors.body && (
              <SpanPosts>{formik.errors.body}</SpanPosts>
            )}
            <PostsTextArea
              type="text"
              name="body"
              placeholder="What are you thinking about?"
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Buttons>
              <SaveButton
                type="submit"
                disabled={
                  formik.isSubmitting ||
                  formik.errors.body ||
                  formik.values.body.length === 0
                }
                onClick={() => onSubmit(formik.values.body)}
              >
                Leave post
              </SaveButton>
            </Buttons>
          </FormPosts> */}
          <NewPostForm />
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
export default Posts;

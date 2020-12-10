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
  padding: 2px 20px;
  height: 25px;
  display: block;
  margin-bottom: 2px;
  font: 9px Segoe UI Historic;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 2px 40px;
    display: inline;
  }
`;
const Condemn = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  color: #999999;
  padding: 2px 20px;
  height: 25px;
  display: block;
  margin-bottom: 2px;
  font: 9px Segoe UI Historic;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 2px 40px;
    display: inline;
  }
`;

const PostsDiv = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  padding-bottom: 10%;
  margin-bottom: 5%;
  margin-top: 5%;
  padding-top: 10%;
  padding-left: 15%;
  padding-right: 30%;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

const FormPosts = styled.form`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  padding-top: 10%;
  @media (min-width: 1090px) {
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    background-color: ${(props) => props.theme.colors.background};
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
  padding-top: 10%;
  padding-left: 15%;
  padding-right: 30%;
  border-color: #3a3b3c;
  font: 13px Segoe UI Historic;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    &:hover {
      background-color: ${(props) => props.theme.colors.newPostHover};
      cursor: pointer;
    }
    padding-top: 10px;
    font: 9px Segoe UI Historic;
    padding-bottom: 0%;
  }
`;
const SaveButton = styled.div`
  cursor: pointer;
  color: #999999;
  padding: 1px 40px;
  display: inline;
  font: 8px Segoe UI Historic;
  margin-left: 35%;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    padding: 1px 40px;
    margin-left: 30%;
  }
`;

function Posts(props) {
  let history = useHistory();

  console.log("posts - ", props);
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

      console.log(data);
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
          `http://${REACT_APP_HOST}:${REACT_APP_PORT}/${0}`
        );
        const data = await response.json();
        setPosts(data.posts);
      });
  }

  const validationSchema = Yup.object().shape({
    body: Yup.string()
      .max(280, "Max 280 characters")
      .min(20, "Must enter minimum 20 charasters!"),
  });
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
        console.log(res);
        console.log(res.data);
        // props.history.push("/");
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

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, [setPosts, setCurrentPage]);

  return (
    <Wrapper>
      <Container>
        <PostsContainer>
          <FormPosts onSubmit={formik.handleSubmit}>
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
          </FormPosts>
          {posts.map((post) => {
            return (
              <PostsDiv key={post._id}>
                <Post key={post._id} body={post.body} date={post.date} />
                <Approve onClick={() => handleAprove(post._id)}>
                  Approve {post.totalUpvotes}
                </Approve>{" "}
                <Condemn onClick={() => handleCondemn(post._id)}>
                  Condemn {post.totalDownvotes}
                </Condemn>
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

import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import Post from "./Post";
import Header from "../../header/components/Header";
import Footer from "./Footer";

const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #000000;
`;

const Container = styled.div`
  padding: 64px 20px;
  max-width: 992px;
  width: 40%;
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
  @media (min-width: 1090px) {
    padding-left: 5%;
    height: 100%;
  }
`;

const SidebarContainer = styled.div`
  display: none;
  width: 50%;
  top: 10%;
  right: 0.5rem;
  position: fixed;

  @media (min-width: 300px) {
    display: fixed;
    flex-direction: column;
    width: 25%;
  }
`;

const Sidebar = styled.div`
  position: sticky;
  top: 64px;
`;
const Approve = styled.div`
  background-color: #262626;
  cursor: pointer;
  color: #999999;
  padding: 2px 20px;
  height: 25px;
  display: block;
  margin-bottom: 2px;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: 1090px) {
    padding: 2px 40px;
    display: inline;
  }
`;
const Condemn = styled.div`
  background-color: #262626;
  cursor: pointer;
  color: #999999;
  padding: 2px 20px;
  height: 25px;
  display: block;
  margin-bottom: 2px;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: 1090px) {
    padding: 2px 40px;
    display: inline;
  }
`;

const PostsDiv = styled.div`
  margin: 0 auto;
  width: 50%;
  background-color: #262626;
  border-radius: 1%;
  padding-bottom: 10%;
  margin-bottom: 5%;
  margin-top: 5%;
  padding-top: 10%;
  padding-left: 15%;
  padding-right: 30%;
  @media (min-width: 1090px) {
    width: 100%;
    background-color: #262626;
  }
`;

const FormPosts = styled.form`
  margin: 0 auto;
  width: 50%;
  background-color: #262626;
  border-radius: 1%;
  padding-bottom: 10%;
  margin-bottom: 5%;
  margin-top: 5%;
  padding-top: 10%;
  padding-left: 15%;
  padding-right: 30%;
  @media (min-width: 1090px) {
    width: 100%;
    background-color: #262626;
  }
`;
const LabelPosts = styled.label`
  background-color: #262626;

  color: white;
  text-align: center;
  display: block;
  padding-top: 4px;
  padding-bottom: 8px;
  height: 5%;
`;

const SpanPosts = styled.span`
  background-color: #262626;

  color: white;
  text-align: center;
  display: block;
  padding-top: 4px;
  padding-bottom: 8px;
  height: 5%;
`;
const PostsTextArea = styled.textarea`
  top: 20px;
  left: 20px;
  bottom: 30px;
  color: white;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow-y: visible;
  resize: none;
  background-color: #262626;
  border-radius: 3%;
  padding-bottom: 10%;
  margin-top: 5%;
  padding-top: 10%;
  padding-left: 15%;
  padding-right: 30%;
  @media (min-width: 1090px) {
    width: 70%;
    background-color: #262626;
  }
`;
const SaveButton = styled.div`
  background-color: #262626;
  cursor: pointer;
  color: #999999;
  padding: 2px 20px;
  height: 25px;
  display: block;

  margin-bottom: 2px;
  &:hover {
    background-color: #4d4d4d;
  }
  @media (min-width: 1090px) {
    padding: 2px 40px;
    display: inline;
  }
`;

function handleAprove(id) {
  console.log(id);
}
function handleCondemn(id) {
  console.log(id);
}

function DownvotedPosts(props) {
  const [posts, setPosts] = React.useState([]);

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
        props.history.push("/");
      });
  }

  useEffect(async () => {
    try {
      const response = await fetch(
        `http://${REACT_APP_HOST}:${REACT_APP_PORT}/sort/3`
      );
      const data = await response.json();
      console.log(data);
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
  }, [setPosts]);

  return (
    <Wrapper>
      <Header />
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
            <br />
          </FormPosts>
          {posts.map((post) => {
            return (
              <PostsDiv key={post._id}>
                <Post key={post._id} body={post.body} date={post.date} />
                <Approve onClick={() => handleAprove(post._id)}>
                  Approve
                </Approve>{" "}
                <Condemn onClick={() => handleCondemn(post._id)}>
                  Condemn{" "}
                </Condemn>
              </PostsDiv>
            );
          })}
        </PostsContainer>
        <SidebarContainer>
          <Sidebar>
            <Footer />
          </Sidebar>
        </SidebarContainer>
      </Container>
    </Wrapper>
  );
}
export default DownvotedPosts;

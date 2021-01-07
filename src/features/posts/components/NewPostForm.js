import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDarkMode } from "../../../state";

const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;

const Wrapper = styled.div`
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.newPostBackground};
  padding: 0.5rem;
  border: 0;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  outline: 0;
`;

const SubmitButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 6px;
  font-size: 0.8rem;
  padding: 0.5rem 0;
  cursor: pointer;
  outline: 0;
`;

const validationSchema = Yup.object().shape({
  body: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function NewPostForm() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const formik = useFormik({
    initialValues: {
      body: "",
    },
    onSubmit,
    validationSchema,
  });

  function onSubmit(values) {
    console.log("Posted", values);
    axios({
      method: "POST",
      url: `http://${REACT_APP_HOST}:${REACT_APP_PORT}/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    }).then((res) => {
      setTimeout(() => window.location.reload(), 1000);
    });
  }

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="body"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          placeholder="What is on your mind?"
        />
        {isDarkMode ? (
          <SubmitButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            style={{
              backgroundColor: !(formik.isValid && formik.dirty)
                ? "#505151"
                : null,
              color: !(formik.isValid && formik.dirty) ? "#C0C4C8" : null,
            }}
          >
            Post
          </SubmitButton>
        ) : (
          <SubmitButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            style={{
              backgroundColor: !(formik.isValid && formik.dirty)
                ? "#E4E6EB"
                : null,
              color: !(formik.isValid && formik.dirty) ? "#C0C4C8" : null,
            }}
          >
            Post
          </SubmitButton>
        )}
      </form>
    </Wrapper>
  );
}

export default NewPostForm;

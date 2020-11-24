import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import classes from "./CreatePost.css";
import * as Yup from "yup";
import Message from "../components/UI/Message/Message";
const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;

function CreatePost(props) {
  const [showRule, setShowRule] = useState(props.clicked);

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
    onSubmit() {
      axios
        .post(`http://${REACT_APP_HOST}:${REACT_APP_PORT}/`, {
          body: formik.values.body,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          props.history.push("/");
        });
    },
  });

  function handleShow() {
    setShowRule(!showRule);
  }

  return (
    <div className={classes.Body}>
      {showRule ? (
        <Message clicked={showRule} />
      ) : (
        <form className={classes.Form} onSubmit={formik.handleSubmit}>
          <label onClick={handleShow} className={classes.Label}>
            Rules for approving confessions
          </label>

          {formik.touched.body && formik.errors.body && (
            <span className={classes.Span}>{formik.errors.body}</span>
          )}

          <textarea
            className={classes.Textarea}
            type="text"
            name="body"
            placeholder="Your confession here..."
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            className={classes.Button}
            type="submit"
            disabled={
              formik.isSubmitting ||
              formik.errors.body ||
              formik.values.body.length === 0
            }
          >
            Leave post
          </button>
          <br />
        </form>
      )}
    </div>
  );
}
export default CreatePost;

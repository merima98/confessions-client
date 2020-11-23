import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import classes from "./CreatePost.css";
const { REACT_APP_HOST } = process.env;
const { REACT_APP_PORT } = process.env;
function CreatePost(props) {
  const formik = useFormik({
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
        });
    },
  });
  return (
    <div>
      <body className={classes.Body}>
        <form className={classes.Form} onSubmit={formik.handleSubmit}>
          <label className={classes.Label}>Post</label>

          <input
            className={classes.Input}
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
      </body>
    </div>
  );
}
export default CreatePost;

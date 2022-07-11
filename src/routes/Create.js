import Navbar from "../components/Navbar";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./Create.css";
const Create = () => {
  const getDate = () => {
    let todayDate = new Date().toISOString().slice(0, 10);
    return todayDate;
  };
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h1>Create a new Quote</h1>
        <Formik
          initialValues={{
            title: "",
            author: "",
            quote: "",
            publishedDate: getDate(),
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .test(
                "len",
                "Must be between 1 and 50 characters long",
                (val) => {
                  if (val) {
                    return (
                      val.toString().length <= 40 && val.toString().length >= 1
                    );
                  }
                }
              )
              .required("Required"),
            author: Yup.string()
              .test(
                "len",
                "Must be between 1 and 50 characters long",
                (val) => {
                  if (val) {
                    return (
                      val.toString().length <= 40 && val.toString().length >= 1
                    );
                  }
                }
              )
              .required("Required"),
            quote: Yup.string()
              .test(
                "len",
                "Must be between 150 and 800 characters long",
                (val) => {
                  if (val) {
                    return (
                      val.toString().length < 800 && val.toString().length > 150
                    );
                  }
                }
              )
              .required("Required"),
          })}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));

            fetch("http://localhost:8080/quotes", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .catch((error) => console.error("Error:", error));
          }}
        >
          {({ formik }) => (
            <Form className="form">
              <label>Title</label>
              <Field name="title" />
              <ErrorMessage name="title" component="div" />
              <label>Author</label>
              <Field name="author" />
              <ErrorMessage name="author" component="div" />
              <label>Quote</label>
              <Field
                type="textarea"
                component="textarea"
                rows="4"
                name="quote"
                className="quote-input"
              />
              <ErrorMessage name="quote" component="div" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Create;

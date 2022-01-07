import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { Header, Footer } from "./Card";
class Bio extends React.Component {
  render() {
    return (
      <div className="card">
        <Header />
        <main className="cat_main">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("First Name is required"),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={(fields) => {
              alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <div className="form-group">
                  <Field
                    placeholder="* Name"
                    name="firstName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Field
                    placeholder="* Surname"
                    name="surname"
                    type="text"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="Surname"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Field
                    placeholder="Email ID- Optional"
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <Field
                    placeholder="* Mobile No"
                    name="mobileno"
                    type="mobileno"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="mobileno"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Button
                    color="black"
                    variant="contained"
                    fullWidth
                    type="submit"
                    //className="btn btn-primary mr-2"
                    className="button"
                  >
                    Register
                  </Button>
                  <Button
                    color="black"
                    variant="contained"
                    fullWidth
                    type="reset"
                    className="btn btn-secondary"
                  >
                    Reset
                  </Button>
                </div>
              </Form>
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export { Bio };

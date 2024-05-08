import React, { useState } from "react";
import userServices from "../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../validationSchema/loginValidationSchema";
import { Formik } from "formik";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          username: email,
          password: password,
        }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { username, password } = values;
          userServices
            .login(username, password)
            .then((response) => {
              alert(response.data.message);

              // clear the login form
              setEmail("");
              setPassword("");
              setTimeout(() => {
                navigate("/dashboard");
              }, 500);
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="row justify-content-center text-center mt-4">
              <div className="col-md-6">
                <h4>Log In</h4>
              </div>
            </div>

            <div className="row justify-content-center mt-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="username"
                  id="username"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-danger">{formik.errors.username}</div>
                )}
              </div>
            </div>

            <div className="row justify-content-center mt-3">
              <div className="col-md-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}
              </div>
            </div>

            <div className="row justify-content-center mt-3">
              <div className="col-md-3">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary float-end">
                  Log in
                </button>
              </div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center">
                <span>or</span>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <span>For create an account </span>
                <Link to="/signup">Click Here</Link>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;

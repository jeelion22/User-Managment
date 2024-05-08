import React from "react";
import { Formik } from "formik";
import userServices from "../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: email }}
      validationSchema={Yup.object({
        username: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { username } = values;
        userServices.forgotpassword(username).then((response) => {
          alert(response.data.message);
          setEmail("");
          setTimeout(() => {
            navigate("/login");
          }, 500).catch((error) => {
            alert(error.response.data.message);
          });
        });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-md-6">
              <h4>Forgot Password</h4>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your registered email address"
                aria-label="username"
                id="username"
                {...formik.getFieldProps("username")}
              />

              {formik.touched.username && formik.errors.username ? (
                <div className="email mt-2">{formik.errors.username}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Send Password Reset Link
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
              <span>or</span>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-3 d-flex">
              <div className="create-account">
                <span>For login your account </span>
                <span>
                  <Link to={"/login"}>Click Here</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ForgotPassword;

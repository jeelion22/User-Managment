import React, { useState } from "react";
import { registrationValidationSchema } from "../validationSchema/registrationValidationSchema";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import userServices from "../services/userServices";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ firstname, lastname, email, password, confirmPassword }}
        validationSchema={registrationValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { firstname, lastname, email, password } = values;

          userServices
            .register(firstname, lastname, email, confirmPassword)
            .then((response) => {
              alert(response.data.message);
              //   reset the form
              setFirstname("");
              setLastname("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");

              //   redirect to the login page
              setTimeout(() => {
                navigate("/login");
              }, 500);

              //   if (response.data) {
              //     toast.success("User created successfully!", {
              //       position: "top-center",
              //       autoClose: 5000,
              //       hideProgressBar: false,
              //       closeOnClick: true,
              //       pauseOnHover: true,
              //       draggable: true,
              //       progress: undefined,
              //       theme: "dark",
              //       transition: Bounce,
              //     });
              //     setTimeout(() => {
              //       navigateToLogin("/login");
              //     }, 500);
              //   }
            })
            .catch((error) => {
              alert(error.response.data.message);
              //   toast.error(
              //     `Error: ${
              //       error.response ? error.response.data.message : error.message
              //     }`,
              //     {
              //       position: "top-center",
              //       autoClose: 5000,
              //       hideProgressBar: false,
              //       closeOnClick: true,
              //       pauseOnHover: true,
              //       draggable: true,
              //       theme: "dark",
              //     }
              //   );
            });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="container-md-6  p-5">
              <div className="row">
                <div className="col">
                  <div className="row justify-content-center text-center mt-4">
                    <div className="col-md-6">
                      <h4>Register</h4>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="firstname"
                        id="firstname"
                        {...formik.getFieldProps("firstname")}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div>{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="lastname"
                        id="lastname"
                        {...formik.getFieldProps("lastname")}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div>{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="email"
                        id="email"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
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
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        aria-label="confirmPassword"
                        id="confirmPassword"
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword ? (
                        <div>{formik.errors.confirmPassword}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    <div className="col-md-3 d-flex">
                      <div className="existing-account">
                        <span>Already have an account? </span>
                        <span>
                          <Link to={"/login"}>Log In</Link>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 justify-content-end">
                      <div className=" d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">
                          Create An Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </form>
        )}
      </Formik>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      /> */}
    </>
  );
};

export default Register;

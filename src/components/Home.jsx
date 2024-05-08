import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">Home</div>
              <div className="card-body">
                <p>Welcome to JCompany</p>
                <p className="text-muted">
                  It is a simple application built with React and NodeJS. It
                  allows users to register, login, and view their profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

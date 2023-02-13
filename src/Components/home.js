import React from "react";

function Home({ createYourReplika }) {
  return (
    <>
      <div className="home-main-container">
        <header>
          <ul className="nav">
            <div className="nav-item">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </div>
            <div className="logo">1millionbot</div>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </header>
        <section>
          <div className="main-content">
            <h1>
              The AI Companion <br /> who cares
            </h1>
            <p className="main-para">
              Always here to listen and talk. <br />
              Always on your side
            </p>
            <br />
            <a href="#">
              <button onClick={createYourReplika}>Crea tu amigo virtual</button>
            </a>
            <br />
            <p>also avalible on</p>
            <div className="apple-andriod">
              <a href="">
                <i className="fa-brands fa-apple apple-icon"></i> IOS
              </a>
              <a href="">
                <i className="fa-brands fa-android android-icon"></i>Andriod
              </a>
              <a href="">
                <i className="fa-solid fa-gamepad oculus-icon"></i>Oculus
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;

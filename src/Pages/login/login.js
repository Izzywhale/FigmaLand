import classes from "./login.module.css";
import headicon from "../../images/headicon.png";
import mailicon from "../../images/mailicon.png";
import lockicon from "../../images/lockicon.png";
import eyecon from "../../images/eyecon.png";
import openeyecon from "../../images/openeye.png";
import { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [toggle, setToggle] = useState(false);

  //   const navButtonToggle = document.querySelector("[data-nav-btn-toggle]");
  //   navButtonToggle.addEventListener("click", function() {
  //     [this,value.password].forEach(_element => _element.classList.toggle("active"));
  // });

  // const usePasswordToggle = (e) => {
  //   const {visible,setvisibility} = useState({

  //   })

  // };

  return (
    <form className={classes.form}>
      <h1>Hello,</h1>
      <div className={classes.inputs}>
        <label htmlFor="">
          <img src={headicon} alt="/" />
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>

        <label htmlFor="">
          <img src={mailicon} alt="/" />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <img src={lockicon} alt="/" />
          <input
            type={toggle ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />

          {toggle ? (
            <img
              class="open"
              src={openeyecon}
              alt=""
              onClick={() => setToggle(false)}
            />
          ) : (
            <img
              class="close"
              src={eyecon}
              alt="/"
              onClick={() => setToggle(true)}
            />
          )}
        </label>

        <div className={classes.terms}>
          <input type="radio" />
          <p>
            I’ve read and agreed to the <span> Terms & Conditions.</span>{" "}
          </p>
          <span className={classes.checkmark}></span>
        </div>

        <div className={classes.btn}>
          <button>CREATE ACCOUNT</button>
          <p>
            Already registered? <span>Sign in</span>{" "}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;

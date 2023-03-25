import React from "react";
import classes from "./authLayout.module.css";
import coin from "../../images/coin.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <div className={classes.background}>
        <section>
          <div className={classes.leftpanel}>
            <Outlet />
          </div>
          <div className={classes.rightpanel}>
            <img src={coin} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;

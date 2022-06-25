import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
// props là path ,Component, vs exact lấy từ Hometemplate
export const HomeTemplate = (props) => {
  const { Component, path,exact } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(propsRoute) => {
        return (
          <>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </>
        );
      }}
    />
  );
};

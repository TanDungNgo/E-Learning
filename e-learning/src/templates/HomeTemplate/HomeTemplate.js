import React from "react";
import { Route } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header absolute={props.absoluteHeader} {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </>
        );
      }}
    />
  );
};

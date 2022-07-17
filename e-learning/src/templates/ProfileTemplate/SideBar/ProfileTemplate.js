import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Footer } from "../../HomeTemplate/Footer/Footer";
import { Header } from "../../HomeTemplate/Header/Header";
import SideBar from "./SideBar";
import "./Profile.css";

export const ProfileTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header {...propsRoute} absolute />
            <div className="bg-gray-100 grid overflow-hidden grid-cols-4 grid-rows-1 gap-5 pt-40 pb-12 px-24">
              <div className="">
                <SideBar {...propsRoute} />
              </div>
              <div className="col-span-3">
                <Component {...propsRoute} />
              </div>
            </div>
            <Footer {...propsRoute} />
          </>
        );
      }}
    />
  );
};

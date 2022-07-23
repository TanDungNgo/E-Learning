import React from "react";
import { NavLink } from "react-router-dom";
import { logoE_Learning } from "../../../utils/settings/config";

export const Footer = () => {
  return (
    <footer className="pt-10 pb-5 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-5 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="col-span-2">
          <NavLink to="/" className="flex space-x-3 ">
            <img src={logoE_Learning} alt="logo" style={{ height: 120 }} />
          </NavLink>
        </div>
        <div className=" text-sm col-span-3 grid grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50">
              Contacts
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center gap-2"
                >
                  <i
                    className="fa fa-facebook "
                    style={{
                      background: "#4267B2",
                      color: "white",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  ></i>
                  <span className="text-zinc-400	">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="flex items-center gap-2"
                >
                  <i
                    className="fa fa-linkedin "
                    style={{
                      background: "#0072B1",
                      color: "white",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  ></i>
                  <span className="text-zinc-400	">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/intl/vi/gmail/about/"
                  className="flex items-center gap-2"
                >
                  <i
                    className="fa fa-google "
                    style={{
                      background: "	#EA4335",
                      color: "white",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  ></i>
                  <span className="text-zinc-400	">Gmail</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-50">
              Affiliate Partner
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://dungmori.com/ "
                >
                  <img
                    src="https://dungmori.com/assets/img/dmr-square-logo.png"
                    alt="Dũng Mori"
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="text-zinc-400	"> Dũng Mori</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.hust.edu.vn/"
                  className="flex items-center gap-2"
                >
                  <img
                    src=" https://dangkytuyensinh.hust.edu.vn/assests/logo_medium.jpg"
                    alt="Đại học Bách Khoa Hà Nội"
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="text-zinc-400	"> HUST</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://sun-asterisk.vn/"
                >
                  <img
                    src="https://static.topcv.vn/company_logos/ecHp4oaaPynwoPw34FLd6rQMLOUYjIp8_1637640159____01109901bbb2a679ea6c633ebb10716d.jpg"
                    alt="Sun "
                    style={{ width: 30, height: 30 }}
                  />
                  <span className="text-zinc-400	"> Sun *</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">More Information</h3>
            <ul className="space-y-1">
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://sun-asterisk.vn/"
                  style={{ height: 30 }}
                >
                  <i className="fa fa-paper-plane"></i>
                  <span className="text-zinc-400	">Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://sun-asterisk.vn/"
                  style={{ height: 30 }}
                >
                  <i className="fa fa-minus-circle text-red-600"></i>
                  <span className="text-zinc-400	">Complain</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="https://sun-asterisk.vn/"
                  style={{ height: 30 }}
                >
                  <i className="fa fa-question text-yellow-500"></i>
                  <span className="text-zinc-400	 ">Contact help</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 text-sm text-center dark:text-gray-400">
        © 500 Server Error
      </div>
    </footer>
  );
};

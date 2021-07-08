import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss"; 
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { FiCheckSquare } from "react-icons/fi"; 

export const Footer = (props) => {
  let dark = props.theme;
  const [submited, setSubmited] = useState(false);
  //email state
  const [email, setEmail] = useState("");
  //setting email error
  const [emailErr, setEmailErr] = useState({});

  const emailValidation = (email) => {
    let isValid = true;
    const emailErr = {};
    // eslint-disable-next-line
    const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!emailRegex.test(email)) {
      emailErr.emailRequired = "* Please enter valid Email";
      isValid = false;
    }
    if (!email.trim()) {
      emailErr.emailRequired = "* Email is required";
      isValid = false;
    }
    setEmailErr(emailErr);
    return isValid;
  };

  const validation = () => {
    let isValid = true;
    //email
    isValid = emailValidation(email);
    return isValid;
  };

  //setting up validations onChange
  const handleEmailChange = (e) => {
    let isValid = true;
    let email = e.target.value;
    setEmail(email);
    isValid = emailValidation(email);
    return isValid;
  };

  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //if isValid = true, form submission trigger
    const isValid = validation();
    if (isValid) {
      setSubmited(true);
      //resetting email value in state after submission of form
      setEmail("");
    }
  };
  var date = new Date();
  var year = date.getFullYear();
  return (
    <React.Fragment>
      <footer
        className={
          dark
            ? `${style["footer"]} ${style["footer-dark"]}`
            : `${style["footer"]}`
        }
      > 
       <div className={style["footer-addr"]}>
          <h1
            className={dark ? style["footer-logo-dark"] : style["footer-logo"]}
          >
            E-Summit NIT Hamirpur
          </h1>
          <address>
            <i className="fas fa-map-marker-alt"></i> National Institute of
            Technology Hamirpur, Himachal Pradesh - India
            <br />
          </address>
          {submited ? (
            <React.Fragment>
              <div
                className={
                  dark
                    ? `${style["subscribe-card"]} ${style["subscribe-card-dark"]}`
                    : `${style["subscribe-card"]} `
                }
              >
                <h1
                  className={
                    dark
                      ? `${style["card-heading"]} ${style["card-heading-dark"]}`
                      : `${style["card-heading"]} `
                  }
                >
                  Successfully Signed up!! 
                  <FiCheckSquare className={style["newsletter-icon"]} />
                </h1>
              </div>
            </React.Fragment> 
          ) : (
         <React.Fragment>
              <div className={style["newsletter"]}>
                <h2
                  className={
                    dark ? style["nav-title-dark"] : style["nav-title"]
                  }
                >
                  Sign Up for all the Updates.
                </h2>
                <p>
                  Receive updates and news about various Events, Workshops, 
                  Expert Talks and Webinar.
                </p>
                <form
                  className="d-flex flex-column flex-md-row align-items-center mt-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    autoComplete="off"
                    type="text"
                    name="email"
                    className={
                      dark
                        ? `${style["input-field-footer"]} ${style["input-field-footer-dark"]}`
                        : `${style["input-field-footer"]}`
                    }
                    placeholder="Email Id"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <br />
                  {Object.keys(emailErr).map((key) => {
                    return (
                      <div
                        className={`${style["validation"]} d-sm-block d-md-none`}
                        key={key}
                      >
                        {emailErr[key]}
                      </div>
                    );
                  })}
                  <button
                    type="submit"
                    className={
                      dark
                        ? `mt-3 mt-md-0 ${style["submit-btn-footer"]} py-2 px-3 mt-3 mt-md-0 ${style["submit-btn-footer-dark"]} py-2 px-3 `
                        : `mt-3 mt-md-0 ${style["submit-btn-footer"]} py-2 px-3 `
                    }
                  >
                    Sign Up
                  </button>
                </form>
                {Object.keys(emailErr).map((key) => {
                  return (
                    <div
                      className={`${style["validation-new"]} validation-new d-sm-none d-md-block`}
                      key={key}
                    >
                      {emailErr[key]}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          
          )}
          </div> 
          <ul className={style["footer-nav"]}>
          <li>
            <h2 className={dark ? style["nav-title-dark"] : style["nav-title"]}>
              Social
            </h2>
            <ul className={dark ? style["nav-ul-dark"] : style["nav-ul"]}>
              <li>Make sure to mail us if any Queries and give us a Follow on below Social Links.</li> 
              <p> Email: entrepreneurshipcellnith@gmail.com </p> 
              <p> Contact: </p>
            </ul>
            <div className={`col ${style["col"]}`}>
              <ul className={dark ? style["social-dark"] : style["social"]}>
              <li>
                  <a
                    href="Mailto:entrepreneurshipcellnith@gmail.com"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <MailIcon style={{color: "#ee4d55"}}/> 
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                     href="https://www.linkedin.com/company/entrepreneurshipcellnith/"
                       target="blank" 
                       rel="noreferrer"
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}> 
                      <LinkedInIcon style={{color: "#ee4d55" }} />
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ecell_nith/"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <InstagramIcon style={{color: "#ee4d55" }} />
                      </div>
                    </div>
                  </a>
                </li> 
                <li>
                  <a
                    href="https://youtube.com/channel/UCGOp-u-AUwfGOqKBiEGHWJw"
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <YouTubeIcon style={{color: "#ee4d55" }} />
                      </div>
                    </div>
                  </a>
                </li> 
                <li>
                  <a
                    href="https://twitter.com/ecellnith" target="blank"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <TwitterIcon style={{color: "#ee4d55" }} />
                      </div>
                    </div>
                  </a>
                </li> 
                <li>
                  <a
                    href="https://www.facebook.com/eclubnith" target="blank"
                    target="_blank" 
                    rel="noreferrer"
                    
                  >
                    <div className={style["outer"]}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style["inner"]}>
                      <FacebookIcon style={{color: "#ee4d55" }} />
                      </div>
                    </div>
                  </a>
                </li>
                
                
              </ul>
            </div>
          </li>
        </ul>
        <div
          className={
            dark
              ? `${style["footer-dash"]} ${style["footer-dash-dark"]}`
              : `${style["footer-dash"]}`
          }
        >
          <div
            className={
              dark
                ? `${style["footer-text"]} ${style["footer-text-dark"]}`
                : `${style["footer-text"]}`
            }
          >
          </div>
        </div>
       </footer>

       <div
        className={
          dark
            ? `${style["cprt-text"]} ${style["cprt-text-dark"]}`
            : `${style["cprt-text"]}`
        }
      >
        <p className={`${style["cprt"]} py-2`}>
        © 2020-21 All Rights Reserved. Designed by E-Cell,NIT Hamirpur
        </p>
      </div>
    </React.Fragment>
  );
};
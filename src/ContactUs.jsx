import React, { useState } from "react";
import { Button2 } from "./Button";

import style from "./ContactUs.module.scss";
import Joi from "joi-browser";

export default function GWS() {
 

  const [formerrors, setFormErrors] = useState({});
  const [submited, setSubmited] = useState(false);

  const schema = {
    name: Joi.string().trim().required().min(3).label("Name"),
    email: Joi.string().trim().email().required().label("Email"),
    subject: Joi.string().trim().required().min(5).label("Subject"),
    message: Joi.string().trim().required().min(8).label("Message"),
  };
 
  const validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: schema[name] };
    const result = Joi.validate(obj, obj_schema);
    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formerrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors(errors);
  } 
  
  const [status,setStatus] = useState({})
  const contactUs = ()=>{
      return(
          fetch('/api/contactUs',{
              method:'POST',
              body: JSON.stringify(contactUs),
              headers: {
                  'Content-Type': 'application/json'
                },
          }).then(res=>res.json()).then(res=>{
              setStatus(res)
          }).catch(err => {
              console.log(err);
          })
      )
  }
  
  return (
    <div
      className={
    
           `${style["contact-section"]} ${style["contact-section-light"]}`
      }
    >
      <div className={style["contact-parent"]}>
        <div className={`${style["contact-child"]} ${style["child1"]}`}>
          <img
            src="https://media.istockphoto.com/vectors/call-center-flat-cartoon-style-vector-illustration-vector-id1149316189?k=6&m=1149316189&s=612x612&w=0&h=qCo3bVtUupZNTW2ahTkKTtVnx38R4P5JMaW5vbtr2mg="
            
            className={style["contact-image"]}
          />
        </div>
        <div className={`${style["contact-child"]} ${style["child2"]}`}>
          {submited ? (
            <React.Fragment>
              <div className={style["goodbye-card"]}>
                <h1 className={style["card-heading"]}>Hello There !</h1>
                <div className={style["inside-card"]}>
                  <p style={{ textAlign: "center" }}>
                    Thankyou for Contacting Us! 😄 <br />
                    We will get back to you very soon if required!
                  </p>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div
                className={
                 
               `${style["contact-card"]} ${style["contact-card-light"]}`
                }
              >
                <h1
                  className={
                    
                      `${style["contact-header-text"]} ${style["contact-header-text-light"]}`
                  }
                >
                  Get In Touch
                </h1>
                <div className={style["inside-contact"]}>
                  <form onSubmit={(e)=>{e.preventDefault();contactUs()}}>
                    <div
                      className={
                       
                           `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        autoFocus="on"
                        autoComplete="off"
                        name="name"
                        id="txt_name"
                        type="text"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                      <i className="fas fa-user"></i>
                      {formerrors["name"] ? (
                        <div className={style["validation"]}>
                          * {formerrors["name"]}
                        </div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                    <div
                      className={
                       
                          `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        name="email"
                        autoComplete="off"
                        id="txt_email"
                        type="text"
                        placeholder="Your Email"
                        onChange={handleChange}
                      />
                      <i className="fas fa-envelope-open-text"></i>
                      {formerrors["email"] ? (
                        <div className={style["validation"]}>
                          * {formerrors["email"]}
                        </div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                    <div
                      className={
                       
                          `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        autoComplete="off"
                        name="subject"
                        id="txt_subject"
                        type="text"
                        placeholder="Your Subject"
                        onChange={handleChange}
                      />
                      <i className="fas fa-pencil-alt"></i>
                      {formerrors["subject"] ? (
                        <div className={style["validation"]}>
                          * {formerrors["subject"]}
                        </div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                    <div
                      className={
                       
                          `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <textarea
                        autoComplete="off"
                        name="message"
                        id="txt_message"
                        rows="4"
                        cols="20"
                        placeholder="Your Message"
                        onChange={handleChange}
                      ></textarea>
                      <i className="fas fa-comment-dots"></i>
                      {formerrors["message"] ? (
                        <div className={style["validation"]}>
                          * {formerrors["message"]}
                        </div>
                      ) : (
                        <div>&nbsp; &nbsp;</div>
                      )}
                    </div>
                    
                    <br></br>
                    <div className={style["submit-btn"]}>
                      <Button2
                        className={style["submit-btn-text"]}
                        label="Contact Us!"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

import { React, useEffect, useRef, useState } from "react";
import "../styles/contactform.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isVisable, setIsVisable] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    inq: null,
  });
  const ref = useRef(null);
  console.log(process.env.SERVICE_ID);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        setIsVisable(entry[0].isIntersecting);
      },
      { rootMargin: "0px", threshold: 1 }
    );
    observer.observe(ref.current);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm(
        "service_p27nful",
        "template_gokx9s8",
        e.target,
        'L1IVY7EW2D0W_Ew6p'
      )
      .then(
        (result) => {
          // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div id="borderholder">
      <div id="contactcontainer">
        <p>Contact Me</p>
        <form ref={ref} onSubmit={onSubmit}>
          <div id="formtextinputs">
            <div id="nameemail">
              <label htmlFor="name">NAME:</label>
              <input
                type="text"
                name="name"
                required={true}
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="email">EMAIL:</label>
              <input
                type="email"
                name="email"
                required={true}
                onChange={onChange}
              />
            </div>
            <div id="inq">
              <label htmlFor="inq">INQUISITION:</label>
              <textarea
                name="inq"
                id="inqinput"
                required={true}
                onChange={onChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" id="contactsubmit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

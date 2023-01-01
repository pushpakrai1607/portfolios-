import "./contact.css";
import Email from "../../img/email.png";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
  const fromRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode


  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_5ktly5v', 'template_5p5zxam', fromRef.current, 'EY5dyhXQVBZH9huO2')
      .then((result) => {
        setDone(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss the project</h1>
          <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +1 2232 332 23
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                Pushpakrai!6@h.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                Mumbai,India
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b>
              Get in touch . Always Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Libero cum provident, suscipit repellat quod non
              distinctio at aspernatur quo accusamus harum
            </p>
            <form ref={fromRef} onSubmit={handleSubmit}>
              <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
              <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="subject" name="user_subject" />
              <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="email" name="user_email" />
              <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="message" name="message"></textarea>
              <button>Submit</button>
              {done && "thank you"}
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;

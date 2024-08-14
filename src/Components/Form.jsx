import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
           For any query or assistance contact us either phsically or fimd me online my contact information is given below:
          </p>
          <div className="info">
            <div className="information">
              <p>Usman Wala Lahore Punjab Pakistan PO 55010</p>
            </div>
            <div className="information">
              <p>freelancermawais@gmail.com</p>
            </div>
            <div className="information">
              <p>+92 324-0208835</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/muhammad-awais-39314a2bb/"> <img src="../Images/linkedin.png" alt="" /> </a>
       <a href="https://www.instagram.com/bussiness_booster_pro/"> <img src="../Images/insta.png" alt="" /></a>
       <a href="https://web.facebook.com/profile.php?id=100085048854649"> <img src="../Images/facebook.png" alt="" /></a>
       <a href="https://github.com/awaiszul"> <img src="../Images/github.png" alt="" /></a>
            </div>
            <br />
            
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form action="index.html" autocomplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
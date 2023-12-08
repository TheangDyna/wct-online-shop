// Footer.js

import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <h3>CATEGORIES</h3>
        <a href="#"> Women </a>
        <a href="#"> Men </a>
        <a href="#"> Shoes </a>
        <a href="#"> Watches </a>
      </div>
      <div className="col-2">
        <h3>HELP</h3>
        <a href="#"> Trackorder </a>
        <a href="#"> Returns </a>
        <a href="#"> Shipping </a>
        <a href="#"> FAQs </a>
      </div>
      <div className="col-3">
        <h3>GET TOUCH</h3>
        <p>
          Any questions? Let us know in store at 8th floor,<br />
          379 Hudson St, New York, NY 10018 or <br />
          call us on (+1) 96 716 6879
        </p>
        <div className="icon-media">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-pinterest"></a>
        </div>
      </div>
      <div className="col-4">
        <h3>NEWSLETTER</h3>
        <form>
          <input type="email" placeholder="input your email" /> <br />
          <br />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

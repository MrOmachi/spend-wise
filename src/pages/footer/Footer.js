import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillRecordFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer_section">
      <section className="footer_section1">
        <div>
          <h2>Start building with Mono</h2>
          <center>
            <p>Access high-quality financial data and start processing</p>
            <p>payments directly from bank accounts in minutes</p>
          </center>
          <div className="btn_footer_section1">
            <button className="btn_Start">
              Start now for free &nbsp; <BsArrowRightShort />
            </button>
            <button className="btn_talk">
              Talk to Sales &nbsp; <BsArrowRightShort />
            </button>
          </div>
        </div>
      </section>

      <section className="footer_section2">
        <div>
          <h6>Products</h6>
          <ul>
            <li>
              <a href="#">Connect</a>{" "}
            </li>
            <li>
              <a href="#">Statement Pages</a>
            </li>
            <li>
              <a href="#">DirectPay</a>
            </li>
            <li>
              <a href="#">DirectPay Pages</a>
            </li>
            <li>
              <a href="#">Portal</a>
            </li>
            <li>
              <a href="#">Transactions</a>
            </li>
            <li>
              <a href="#">Income</a>
            </li>
            <li>
              <a href="#">Information</a>
            </li>
            <li>
              <a href="#">Data Sync</a>
            </li>
          </ul>
        </div>

        <div>
          <h6>Resources</h6>
          <ul>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">SDKs</a>
            </li>
            <li>
              <a href="#">Demo</a>
            </li>
            <li>
              <a href="#">Join Slack</a>
            </li>
            <li>
              <a href="#">Consumers</a>
            </li>
          </ul>
        </div>

        <div>
          <h6>Company</h6>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Partner stories</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Coverage</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h6>Legal</h6>
          <ul>
            <li>
              <a href="#">End-User Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Developer Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
      </section>

      {/* <hr className="cross_line" /> */}

      <section className="footer_section3">
        <div className="footer-sec-3A">
          <img
            src="https://monoassets.com/f/118499/x/8594c87134/footer-logo.svg"
            alt=""
          />
          <span> &copy; Mono Technology Nigeria Limited</span>
        </div>

        <div className="footer-sec-3B">
          <p>
            <BsTwitter /> Twitter &nbsp;
          </p>
          <p className="dot">
            <BsFillRecordFill />
          </p>
          <p>
            <BsLinkedin /> LinkedIn
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

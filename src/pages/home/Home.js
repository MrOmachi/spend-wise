import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardSection from "../../components/card/CardSection";

function Home() {
  return (
    <>
      <div className="jumbo-tron">
        <div className="jumbo-heading-text">
          <div className="jumbo-new">
            <Link className="jumbo-new-link">
              <span className="span-new">NEW</span>{" "}
              <span className="span-mono">mono is live in kenya</span>{" "}
              <AiOutlineArrowRight />
            </Link>
          </div>
          <h1 className="jumbo-head">Reliably access bank accounts</h1>
          <div className="jumpa-paragraph">
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </div>
          <div className="jumbo-buttons">
            <button className="button-one">
              Get started for free <AiOutlineArrowRight />
            </button>
            <button className="button-two">
              Contact Sales <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="jumbo-images">
          <img
            src="https://user-images.githubusercontent.com/97337740/209867074-6cd68d38-3582-4664-ab95-d2f4dec2a45e.jpeg"
            alt="jumbo-image"
          />
        </div>
      </div>

      <div className="truested-by-contain ">
        <p>Trusted by</p>
        <div className="trusted-by">
          <img
            src="https://monoassets.com/f/118499/x/bcea3ba6e5/carbon-logo.svg"
            alt="carbon"
          />
          <img
            src="https://monoassets.com/f/118499/x/f1f896ba4f/image-13autochek.svg"
            alt="auto-check"
          />
          <img
            src="https://monoassets.com/f/118499/x/8147ab4312/group-45flw.svg"
            alt="flutta"
          />
          <img
            src="https://monoassets.com/f/118499/x/b3ceb27492/image-10evolve_credit.svg"
            alt="evolve"
          />
        </div>
      </div>

      <div className="middle-banner">
        <h1>
          Build for the future <br /> of digital financem{" "}
        </h1>
        <p>
          Bring tomorrow's solutions to life, with our customer-focused
          solutions, today.
        </p>

        <div className="middle-banner-hero-cards">
          <div className="middle-banner-hero">
            <div className="middle-banner-hero-content">
              <img
                src="https://monoassets.com/f/118499/x/26e5185f10/vector-6.svg"
                alt="connect-logo"
              />
              <h1>Connect</h1>
              <p>
                Securely access financial accounts for <br /> statements,
                transactions, and identity
              </p>
              <Link>
                Start with Connect
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
          <div className="middle-banner-card">
            <div className="card-one">
              <img
                src="https://monoassets.com/f/118499/x/4f8eb638fd/vector-1get-started-icon.svg"
                alt=""
              />
              <h1>DirectPay</h1>
              <p>
                Collect bank payments in your web or mobile app. No cards. No
                chargebacks
              </p>
              <Link>
                Start with DirectPay
                <AiOutlineArrowRight />
              </Link>
              <div className="in-partner">
                <p>In partnership with</p>
                <img
                  src="https://monoassets.com/f/118499/x/8147ab4312/group-45flw.svg"
                  alt="flutta"
                />
              </div>
            </div>
            <div className="card-two">
              <img
                src="            https://monoassets.com/f/118499/x/e9eb8d1c26/union.svg
                  "
                alt="flutta"
              />
              <h1>Percent</h1>
              <p>
                Money operations and reconciliation for all your corporate
                accounts, in one dashboard
              </p>
              <Link>
                Request access
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
    </>
  );
}

export default Home;

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardSection from "../../components/card/CardSection";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsArrowRightShort,
  BsFillRecordFill,
} from "react-icons/bs";
import { CgQuote } from "react-icons/cg";

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
        <h1 className="desktop">
          Build for the future <br /> of digital financem{" "}
        </h1>
        <h1 className="mobile">Build for the future of digital financem </h1>
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

      <div className="row4">
        <h2>Businesses building</h2>
        <h2>with Mono</h2>
        <div className="Biz_building">
          <p className="desktop-p">
            Here are some if the interesting features and
          </p>
          <p className="desktop-p">experiences powered by Mono.</p>
          <p className="mobile-p">
            Here are some if the interesting features and experiences powered by
            Mono.
          </p>
        </div>
      </div>

      <div className="loan-offers">
        <div className="loan-offer-contents">
          <button className="btn-lending">Lending</button>
          <p>Financial Management</p>
          <p>Account Verification</p>
          <p>Payments</p>
        </div>

        <div className="loan-offer-content1">
          <div className="loan-offer-text">
            <h1>
              Carbon personalized <br /> loan offers
            </h1>
            <div className="loan-offer-text1">
              <p>carbon wanted to make their risk assessment and</p>
              <p>borrower qualification better with high-quality data.</p>
            </div>

            <div className="loan-offer-text1">
              <p>Using Mono's Statement Pages, Carbon can receive its</p>
              <p>users' bank statements in minutes. They get cash flow</p>
              <p>on the accounts for up to 12 months, all seamlessly</p>
              <p>without writing a single line of code.</p>
            </div>
            <b>
              Read more about Statement Pages &nbsp; <BsArrowRightShort />
            </b>
          </div>

          <div className="loan-offer-img">
            <img
              src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2Fx%2Fa991888bce%2Fcarbon.svg&w=1920&q=75"
              alt="est_income-view"
            />
            <div className="diamond">
              <img
                src="https://monoassets.com/f/118499/x/547cef85d5/carbon-logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="market-leaders">
        <h2 className="desktop-p">Why market leaders are</h2>
        <h2 className="desktop-p">choosing Mono</h2>

        <h2 className="mobile-p">Why market leaders are choosing Mono</h2>

        <div className="Biz_building">
          <p>Here's what some of them are saying.</p>
        </div>
      </div>

      <div className="quotes">
        <div className="quote1">
          <div>
            <div className="leaders-quote">
              <p>
                <CgQuote />
              </p>
              <p>It's important to go</p>
              <p>with a data provider</p>
              <p>that inspires</p>
              <p>confidence in users</p>
              <p>to give consent to</p>
              <p>share their data; this</p>
              <p>is one of our</p>
              <p>favorite things</p>
              <p>about Mono.</p>
            </div>

            <div className="article">
              <div className="article-sec1">
                <img
                  src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2Fd3f0ea76d0%2Fbarima-effah-adjei-float.png&w=128&q=75"
                  alt="co-founder"
                />
                <img
                  className="article-logo"
                  src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F48x48%2F9076fbe04e%2Ffloat-logo.png&w=48&q=75"
                  alt="logo"
                />
              </div>

              <div className="article-sec2">
                <div>
                  <p>Barima Effah-Adei</p>
                  <p className="role">Co-founder, Float</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quote1">
          <div>
            <div className="leaders-quote">
              <p>
                <CgQuote />
              </p>
              <p>The onboarding and</p>
              <p>integration process</p>
              <p>with Mono was</p>
              <p>smooth. Our</p>
              <p>Engineering and</p>
              <p>Product teams use</p>
              <p>the dashboard to</p>
              <p>oversee our</p>
              <p>statement collection</p>
              <p>process.</p>
            </div>

            <div className="article">
              <div className="article-sec1">
                <img
                  src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F100x100%2Fca9cb4505c%2Femmanuel-aella.png&w=128&q=75"
                  alt="co-founder"
                />
                <img
                  className="article-logo"
                  src="https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F48x48%2Fa06f541752%2Faella-logo.png&w=48&q=75"
                  alt="logo"
                />
              </div>

              <div className="article-sec2">
                <div>
                  <p>Emmanuel Ogunsola</p>
                  <p className="role">Product Manager, Aella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right-arrow">
        <div className="arrow1">
          <p className="dotted-indicator1">
            <BsFillRecordFill />
          </p>
          <p className="dotted-indicator2">
            <BsFillRecordFill />
          </p>
        </div>

        <div className="arrow2">
          <p className="arrow-signal1">
            <BsArrowLeftCircleFill />
          </p>
          <p className="arrow-signal2">
            <BsArrowRightCircleFill />
          </p>
        </div>
      </div>

      <CardSection />
    </>
  );
}

export default Home;

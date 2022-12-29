import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbo-tron">
      <div className="jumbo-heading-text">
        <div className="jumbo-new">
          <Link className="jumbo-new-link">
            <span className="span-new">NEW</span> <span className="span-mono">mono is live in kenya</span>{" "}
            <AiOutlineArrowRight />
          </Link>
        </div>
        <h1 className="jumbo-head">
          Reliably access <br /> bank accounts
        </h1>
        <div className="jumpa-paragraph">
          Mono helps businesses to access high-quality <br /> financial data and
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
      <div className="jumbo-images"></div>
    </div>
  );
}

export default Home;

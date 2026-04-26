import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row my-5">
        <p className="text-center my-5 text-muted fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
        </p>
      </div>

      <h2 className="text-center my-3 fs-3">The Zerodha Universe</h2>
      <p className="text-center mb-5 fs-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="container p-4 m-4">
      <div className="row prod-universe text-muted px-5 ">
        <div className="col">
          <a target="_blank" href="https://www.zerodhafundhouse.com/">
            <img src="media/image/zerodhafundhouse.png" />
            <br />
            <p className="text-secondary my-3 fs-7">
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </a>
          <br />
          <a target="_blank" href="https://streak.tech">
            <img src="media/image/streakLogo.png" />
            <br />
            <p className="text-secondary my-3 fs-7">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col">
          <a target="_blank" href="https://sensibull.com">
            <img src="media/image/sensibullLogo.svg" />
            <br />
            <p className="text-secondary my-3 fs-7 ">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and <br />examine 
              data points like open interest, FII/DII.
            </p>
          </a>
          <br />
          <a target="_blank" href="https://smallcase.zerodha.com">
            <img src="media/image/smallcaseLogo.png" />
            <br />
            <p className="text-secondary my-3 fs-7">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col">
          <a target="_blank" href="https://goldenpi.com/">
            <img src="media/image/goldenpiLogo.png" />
            <br />
            <p className="text-secondary mt-3 mb-4">
              India's most trusted online platforms
              <br /> to invest in fixed income securities.
              <br/>
            </p>
          </a>
          <br />
          <a target="_blank" href="https://joinditto.in/">
            <img src="media/image/dittoLogo.png" />
            <br />
            <p className="text-secondary my-3 fs-7">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </a>
        </div>
      </div>
      </div>
      
       <div className="row text-center">
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
       </div>
      
    </div>
  );
}

export default Universe;

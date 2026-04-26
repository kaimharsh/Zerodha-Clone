import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/image/logo.svg" style={{ width: "60%" }} alt="Zerodha Logo" />
            <p className='mt-2 text-muted' style={{ fontSize: "12px" }}>
              &copy;2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
            </p>
          </div>
          <div className="col text-muted account-link">
            <h5 style={{ marginBottom: "18px" }}>Account</h5>
            <a href="/signup">Open demat account</a><br />
            <a href="/signup">Minor demat account</a><br />
            <a href="/signup">NRI demat account</a><br />
            <a href='/signup'>HUF demat account</a><br />
            <a href="/signup">Commodity</a><br />
            <a href="/signup">Dematerialisation</a><br />
            <a href="/signup">Fund transfer</a><br />
            <a href="/signup">MTF</a><br />
          </div>
          <div className="col text-muted support-link">
            <h5 style={{ marginBottom: "18px" }}>Support</h5>
            <a href="/support">Contact us</a><br />
            <a href="/support">Support portal</a><br />
            <a href="/support">How to file a complaint?</a><br />
            <a href="/support">Status of your complaints</a><br />
            <a href="/support">Bulletin</a><br />
            <a href="/support">Circular</a><br />
            <a href="/support">Z-Connect blog</a><br />
            <a href="/support">Downloads</a><br />
          </div>
          <div className="col text-muted company-link">
            <h5 style={{ marginBottom: "18px" }}>Company</h5>
            <a href="/about">About</a><br />
            <a href="/about">Philosophy</a><br />
            <a href="/about">Press & media</a><br />
            <a href="/about">Careers</a><br />
            <a href="/about">Zerodha Cares (CSR)</a><br />
            <a href="/about">Zerodha.tech</a><br />
            <a href="/about">Open source</a><br />
            <a href="/about">Referral program</a><br />
          </div>
          <div className="col text-muted quick-link">
            <h5 style={{ marginBottom: "18px" }}>Quick links</h5>
            <a href="/products">Upcoming IPOs</a><br />
            <a href="/pricing">Brokerage charges</a><br />
            <a href="/products">Market holidays</a><br />
            <a href="/products">Economic calendar</a><br />
            <a href="/pricing">Calculators</a><br />
            <a href="/products">Markets</a><br />
            <a href="/products">Sectors</a><br />
            <a href="/products">Gift Nifty</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
        </div>

        <div className="footer-links mt-4 pb-4">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
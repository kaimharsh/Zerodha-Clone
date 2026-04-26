import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="accordion" id="supportAccordion">
        {/* Dropdowmn 1 */}
        <div className="accordion-item border-top">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc1"
            >
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-plus-circle"></i>
                <span>Account Opening</span>
              </div>
            </button>
          </h2>

          <div
            id="acc1"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        {/* Dropdown 2*/}
        <div className="accordion-item border-top ">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc2"
            >
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-user-circle"></i>
                <span>Your Zerodha Account</span>
              </div>
            </button>
          </h2>

          <div
            id="acc2"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Your Profile</li>
                <li>Account modification</li>
                <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                <li>Nomination</li>
                <li>Transfer and conversion of securities</li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        {/* Dropdown 3*/}
        <div className="accordion-item border-top">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc3"
            >
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-compass"></i>
                <span>Kite</span>
              </div>
            </button>
          </h2>

          <div
            id="acc3"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>IPO</li>
                <li>Trading FAQs</li>
                <li>Margin Trading Facility (MTF) and Margins</li>
                <li>Charts and orders</li>
                <li>Alerts and Nudges</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        {/* Dropdown 4*/}
        <div className="accordion-item border-top">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc4"
            >
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-inr"></i>
                <span>Funds</span>
              </div>
            </button>
          </h2>

          <div
            id="acc4"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Add money</li>
                <li>Withdraw money</li>
                <li>Add bank accounts</li>
                <li>eMandates</li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        {/* Dropdown 5*/}
        <div className="accordion-item border-top">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc5"
            >
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-dot-circle-o"></i>
                <span>Console</span>
              </div>
            </button>
          </h2>

          <div
            id="acc5"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Portfolio</li>
                <li>Corporate actions</li>
                <li>Funds statement</li>
                <li>Reports</li>
                <li>Profile</li>
                <li>Segments</li>
              </ul>
            </div>
          </div>
        </div>

        <br />

        {/* Dropdown 6*/}
        <div className="accordion-item border-top">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#acc6"
            >
              
              <div class="d-flex align-items-center gap-3">
                <i class="fa fa-circle-o"></i>

                <span>Coin</span>
              </div>
            </button>
          </h2>

          <div
            id="acc6"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Mutual funds</li>
                <li>National Pension Scheme (NPS)</li>
                <li>Fixed Deposit (FD)</li>
                <li>Features on Coin</li>
                <li>Payments and Orders</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>

        <br />
      </div>
    </div>
  );
}

export default CreateTicket;

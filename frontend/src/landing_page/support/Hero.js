import React from 'react';


function Hero() {
   return  <div className="w-100 bg-light">
      <div className="container py-4 py-md-5 mb-5">

        {/* Header Row */}
        <div className="d-flex flex-wrap justify-content-between align-items-center pb-3 pb-md-4 gap-2">
          
          <h2 className="fw-semibold mb-0">
            <a href="/support" className="text-decoration-none text-dark fs-1">
              Support Portal
            </a>
          </h2>

          <a
            target="_blank"
            rel="noreferrer"
            href="/login?next=https%3A%2F%2Fsupport.zerodha.com%2Ftickets%2F"
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <span className="fw-medium">My tickets</span>
          </a>
        </div>

        {/* Search Box */}
        <div
          className="position-relative d-flex align-items-center border rounded px-3"
          style={{ height: "60px", background: "#fff" }}
        >
          {/* Search Icon (Desktop Only) */}
          <span className="d-none d-md-block text-muted me-2">
            <i className="fa fa-search"></i>
          </span>

          {/* Input */}
          <input
            id="searchInput"
            type="text"
            autoComplete="off"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            autoFocus
            className="form-control border-0 shadow-none"
          />

         
        </div>

      </div>
    </div>
}

export default Hero;
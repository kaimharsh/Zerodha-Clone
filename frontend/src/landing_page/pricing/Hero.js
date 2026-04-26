import React from 'react';


function Hero() {
    return <section className="charges-header">
        <div className="container text-center py-5 px-3">
            <h1>Charges</h1>
            <p className="text-secondary ">List of all charges and taxes</p>
        </div>

        <div className="row text-center p-5 m-5">
        <div className="col-4 p-5 ">
            <img src="media\image\pricing0.svg" alt="" style={{width:"60%"}}/>
            <h2 className="fs-2 m-4">Free equity delivery</h2>
            <p className="text-muted px-2">
            All equity delivery investments (NSE, BSE), are absolutely free
            — ₹ 0 brokerage.
            </p>
        </div>
        <div className="col-4 p-5 " >
            <img src="media\image\intradayTrades.svg" alt="" style={{width:"60%"}}/>
            <h2 className="fs-2 m-4">Intraday and F&amp;O trades</h2>
            <p className="text-muted px-2">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
        </div>
        <div className="col-4 p-5 ">
            <img src="media\image\pricing0.svg" alt="" style={{width:"60%"}}/>
            <h2 className="fs-2 m-4">Free direct MF</h2>
            <p className="text-muted px-2">
            All direct mutual fund investments are absolutely free —
            ₹ 0 commissions &amp; DP charges.
            </p>
        </div>
        </div>
    </section>
}

export default Hero;
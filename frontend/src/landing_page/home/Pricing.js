import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col'>
                            <img src='media/image/pricing0.svg' style={{ width: "80%" }} />
                            <p>Free account
                                opening</p>
                        </div>
                        <div className='col'>
                            <img src='media/image/pricing0.svg' style={{ width: "80%" }} />
                            <p> Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col'>
                            <img src='media/image/intradayTrades.svg' style={{ width: "80%" }} />
                            <p> Intraday and
                                F&O</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
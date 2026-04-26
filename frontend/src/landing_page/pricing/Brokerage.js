import React from "react";

function Brokerage() {
  return <div className="container">
    <h2>Charges explained</h2>
    <div class="row between">
                <div class="col-6 p-3">
                    <p className="fs-5">Securities/Commodities transaction tax</p>
                    <p class="text-muted fs-6">Tax by the government when transacting on the exchanges. Charged as
                        above on both buy and sell sides when trading equity delivery. Charged only on selling side when
                        trading intraday or on F&amp;O.</p>
                    <p class="text-muted fs-6">When trading at Zerodha, STT/CTT can be a lot more than the brokerage
                        we charge. Important to keep a tab.</p>
                    <p className="fs-5">Transaction/Turnover Charges</p>
                    <p class="text-muted fs-6">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p class="text-muted fs-6">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
                        ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.fext-muted fs-6.2017)</p>
                    <p class="text-muted fs-6">BSE has revised transaction charges in SS and ST groups to ₹1,00,000
                        per crore of gross turnover.</p>
                    <p class="text-muted fs-6">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p class="text-muted fs-6">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <p className="fs-5">Call &amp; trade</p>
                    <p class="text-muted fs-6">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <p className="fs-5">Stamp charges</p>
                    <p class="text-muted fs-6">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <p className="fs-5">NRI brokerage charges</p>
                    <ul class="text-muted fs-6 list-items">
                        <li>
                            For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&amp;O (whichever is lower).
                        </li>
                        <li>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                    <p className="fs-5">Account with debit balance</p>
                    <p class="text-muted fs-6">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <p className="fs-5">Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul class="list-items text-muted fs-6">
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                    <p className="fs-5">Margin Trading Facility (MTF)</p>
                    <ul class="list-items text-muted fs-6">
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>

                
                <div class="col-6 p-3">
                    <p className="fs-5">GST</p>
                    <p class="text-muted fs-6">Tax levied by the government on the services rendered. 18% of (
                        brokerage + SEBI charges + transaction charges)</p>
                    <p className="fs-5">SEBI Charges</p>
                    <p class="text-muted fs-6">Charged at ₹10 per crore + GST by Securities and Exchange Board of
                        India for regulating the markets.</p>
                    <p className="fs-5">DP (Depository participant) charges</p>
                    <p class="text-muted fs-6">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p class="text-muted fs-6">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p class="text-muted fs-6">Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <p className="fs-5">Pledging charges</p>
                    <p class="text-muted fs-6">₹30 + GST per pledge request per ISIN.</p>
                    <p className="fs-5">AMC (Account maintenance charges)</p>
                    <p class="text-muted fs-6">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">Click here</a></p>
                    <p class="text-muted fs-6">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">Click here</a></p>
                    <p className="fs-5">Corporate action order charges</p>
                    <p class="text-muted fs-6">₹20 plus GST will be charged for OFS / buyback / takeover / delisting
                        orders placed through Console.</p>
                    <p className="fs-5">Off-market transfer charges</p>
                    <p class="text-muted fs-6">₹25 per transaction.</p>
                    <p className="fs-5">Physical CMR request</p>
                    <p class="text-muted fs-6">First CMR request is free. ₹20 + ₹100 (courier charge) +
                        18% GST for subsequent requests.</p>
                    <p className="fs-5">Payment gateway charges</p>
                    <p class="text-muted fs-6">₹9 + GST (Not levied on transfers done via UPI)</p>
                    <p className="fs-5">Delayed Payment Charges</p>
                    <p class="text-muted fs-6">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges">Learn more</a>.</p>
                    <p className="fs-5">Trading using 3-in-1 account with block functionality</p>
                     <ul class="list-items text-muted fs-6">
                        <li><b>Delivery &amp; MTF Brokerage:</b> 0.5% per executed order.</li>
                        <li><b>Intraday Brokerage:</b> 0.05% per executed order.</li>
                    </ul>
                </div>
            </div>
  </div>
}

export default Brokerage;

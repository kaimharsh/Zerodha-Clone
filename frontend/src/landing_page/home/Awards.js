import React from 'react';


function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='media/image/largestBroker.svg'/>
            </div>
            
            <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in :</p>
            <div className='row m-4'>
             <div className='col-6'>
                <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
              </div>
              <div className='col-6'>
                <ul>
                    <li>
                        <p>Stock & IPOs</p>
                    </li>
                    <li>
                        <p>Direct muual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>
                </ul>
              </div>
            </div>
            <img src='media/image/pressLogos.png' style={{width:"90%"}}></img>
            </div>
        </div>
       </div>
     );
}

export default Awards;
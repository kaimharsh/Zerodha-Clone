import React from 'react';


function RightSection({rgTitle,prodDesc,link1,imgURL}) {
    return <div className='container m-5'>
        <div className='row m-5'>
            <div className='col-6 p-5'>
                    <h1>{rgTitle}</h1>
                    <p>{prodDesc}</p>
                    <div className='p-2 text-muted'>
                    <a href=''>{link1} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
            </div>
            <div className='col-6'>
                <img src={imgURL} style={{width:"95%"}}/>
            </div>
        </div>

    </div>
}

export default RightSection;
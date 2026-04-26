import React from 'react';


function LeftSection({imageURL,prodName,prodDesc,tryDemo,learnMore,googlePlay,appStore}) {
    return <div className='container m-5'>
        <div className='row m-5'>
            <div className='col-6'>
                <img src={imageURL}/>
            </div>
             <div className='col-6 p-5'>
                <h1>{prodName}</h1>
                <p>{prodDesc}</p>
                <div className='p-2 text-muted'>
                <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"80px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='p-2'>
                  <a href={googlePlay}><img src='media/image/googlePlayBadge.svg'/></a>
                <a href={appStore} className='mx-4'><img src='media/image/appstoreBadge.svg'/></a>
                </div>
                

             </div>
        </div>
    </div>
}

export default LeftSection;
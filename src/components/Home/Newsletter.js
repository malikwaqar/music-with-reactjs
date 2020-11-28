import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter">
                 <div className="newsletter__container">
                     <div className="newsletter__heading">
                     <h3>Subscribe to my newsletter</h3>
                     </div>
                    
                    <div className="newsletter_form">
                    <input type="text" placeholder="Enter your Email" className="form-control" value="" />
                    <button>SEND</button>
                    </div>
                    
                 </div>
             </div>
    )
}

export default Newsletter

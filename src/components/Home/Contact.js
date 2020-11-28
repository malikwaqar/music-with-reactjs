import React from 'react';
import './Contact.css';
import Singer from './../images/singer.jpg';

const Contact = () => {
    return (
        <div className="contact">
            <div className="overlay">
                <div className="contact__heading">
                    <h3>Contact for Booking</h3>
                    <hr className="divider" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>

                <div className="contact__container">
                <div className="contact__form">
                <form id="contact-form" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="6" value="" />
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>

                <div className="contact__img">
                <img src={Singer} alt='Singer Image' />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;

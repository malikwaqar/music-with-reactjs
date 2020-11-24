import React from 'react';
import './Albums.css';
import Album1 from './../images/album-1.png';
import Album2 from './../images/album-2.png';

const Albums = () => {
    return (
        <div className="albums">
            <div className="overlay">
                <div className="albums__heading">
                    <h3>Latest Albums</h3>
                    <hr />
                </div>
                <div className="albums__container">
                    <div className="albums__content">
                        <div className="albums__image">
                            <img src={Album1} alt='Album 1' />
                        </div>
                        <div className="albums__info">
                        <h5>$34.99</h5>
                        <h3>- The Colors of Love</h3>
                        <p>Released: 10/5/2020</p>
                        <p>Label: Universal Sounds Group</p>
                        <p>Format: Digital Download, CD</p>
                        <div className="albums__icons">
                            <i class="fa fa-android" aria-hidden="true"></i>
                            <i class="fa fa-apple" aria-hidden="true"></i>
                            <i class="fa fa-soundcloud" aria-hidden="true"></i>
                            <i class="fa fa-spotify" aria-hidden="true"></i>
                        </div>
                        </div>
                        
                    </div>

                    <div className="albums__content">
                    <div className="albums__image">
                    <img src={Album2} alt='Album 2' />
                    </div>
                    <div className="albums__info">
                        <h5>$34.99</h5>
                        <h3>- The Colors of Love</h3>
                        <p>Released: 10/5/2020</p>
                        <p>Label: Universal Sounds Group</p>
                        <p>Format: Digital Download, CD</p>
                        <div className="albums__icons">
                            <i class="fa fa-android" aria-hidden="true"></i>
                            <i class="fa fa-apple" aria-hidden="true"></i>
                            <i class="fa fa-soundcloud" aria-hidden="true"></i>
                            <i class="fa fa-spotify" aria-hidden="true"></i>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Albums;

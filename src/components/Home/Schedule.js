import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule__heading">
            <h3>Tour Dates</h3>
            </div>
                <div className="schedule__tours">
                    <div className="schedule__cards">
                        <div className="card__content">
                            <h5>13.08.2020</h5>
                            <h4>New York, New York Stadium</h4>
                            <button>BUY TICKETS</button>
                        </div>
                    </div>
                    <div className="schedule__cards">
                        <div className="card__content">
                            <h5>13.08.2020</h5>
                            <h4>New York, New York Stadium</h4>
                            <button>BUY TICKETS</button>
                        </div>
                    </div>
                </div>

                <div className="schedule__tours">
                    <div className="schedule__cards">
                        <div className="card__content">
                            <h5>13.08.2020</h5>
                            <h4>New York, New York Stadium</h4>
                            <button>BUY TICKETS</button>
                        </div>
                    </div>
                    <div className="schedule__cards">
                        <div className="card__content">
                            <h5>13.08.2020</h5>
                            <h4>New York, New York Stadium</h4>
                            <button>BUY TICKETS</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Schedule;

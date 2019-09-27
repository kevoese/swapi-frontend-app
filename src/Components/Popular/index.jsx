import React from 'react';
import './Popular.scss';

const Popular = ({ children, name, hideViewMore }) => {
    return (
        <div className="popular">
            <div className="popular__title">
                <p >
                    {`Popular ${name}`}
                </p>
                <div>
                </div>
            </div>
            
            <div className="popular__container">
                {children}
            </div>

           { hideViewMore ? '' : <button className="popular__view-more">
                VIEW MORE
            </button>}
        </div>
    )
}

export default Popular;

import React from 'react';
import { Link } from 'react-router-dom';
import './Popular.scss';

const Popular = ({ children,search, name, hideViewMore, viewLink }) => {
    return (
        <div className="popular">
            <div className="popular__title">
                <p >
                    {`${search ? 'Search Results for ' :'Popular '} ${name}`}
                </p>
                <div>
                </div>
            </div>
            
            <div className="popular__container">
                {children}
            </div>

           { hideViewMore ? '' : <Link to={viewLink}><button className="popular__view-more">
                VIEW MORE
            </button></Link>}
        </div>
    )
}

export default Popular;

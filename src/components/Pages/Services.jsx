import React, {useState} from 'react';
import {useGlobalContext} from "../context/Context.jsx";
import { NavLink } from "react-router-dom";
import { Button } from "../style/Button.jsx";
import {ServicesWrapper} from "../style/ServicesStyle.jsx";

const Services = (props) => {
    const {services} = useGlobalContext();
    const [limit, setLimit] = useState(6); 
    const showNext =() =>{
        setLimit(limit+6)
    }
    const limitServices = services.slice(0, limit);
    const mt15 = props.emptyMt.marginTop15;
    
    return (
        <ServicesWrapper className="section">
            <div style={{marginTop: mt15}}></div>
            <h2 className="common-heading"><span>Our Services</span></h2>
            <div className="container grid grid-three-column">
                {limitServices.map((curElem) => {
                    const { id, title, thumbnail, description } = curElem;
                    return (
                        <div key={id} className="card">
                            <figure>
                                <img src={thumbnail} alt={title} />
                            </figure>
                            <div className="card-data">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <NavLink to="/services">
                                    <Button className="btn">Read More</Button>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="btn-container grid grid-one-column">
                <Button className="btn" onClick={showNext}>Show More</Button>
            </div>
        </ServicesWrapper>
    );
};
 
export default Services;

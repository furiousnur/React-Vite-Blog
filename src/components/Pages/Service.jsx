import React, {useEffect, useState} from 'react'; 
import { useParams} from "react-router-dom"; 
import {ServicesWrapper} from "../style/ServicesStyle.jsx";
import {useGlobalContext} from "../context/Context.jsx";

const Service = (props) => { 
    const {title} = useParams();
    const mt15 = props.emptyMt.marginTop15;
    const {services} = useGlobalContext();
    const [service, setService] = useState(""); 
    useEffect(() => { 
        const service = services.filter((service)=>service.title === title); 
        setService(service[0]);
    }, []);


    return (
        <ServicesWrapper className="section">
            <div style={{marginTop: mt15}}></div> 
            <div className="container grid grid-one-column"> 
                <div  className="card">
                    <figure>
                        <img src={service.thumbnail} alt={title} />
                    </figure>
                    <div className="card-data">
                        <h3>{title}</h3>
                        <p>{service.description}</p>
                    </div>
                </div> 
            </div> 
        </ServicesWrapper>
    );
};

export default Service;

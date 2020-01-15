import React from 'react';
import {Button} from 'reactstrap';
import './Actions.css';

const CallToAction = () =>{
    return (
        <div className="offering_action_continer">
            <h1>ADVERTISE ON ADWORKSCOM</h1>
            <h2>GEO-TARGETED| MEMORABLE| AFFORDABLE</h2>
            <div className="offering_action_ctadiv">
            <Button outline color="info" className="offergin_action_ctagroup">Create Ad</Button>
            <Button outline color="info" className="offergin_action_ctagroup">Contact Us</Button>
            </div>
        </div>
    );
};

export default CallToAction;
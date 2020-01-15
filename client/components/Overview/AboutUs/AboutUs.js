import React from 'react';
import {Button} from 'reactstrap';
import './AboutUs.css';

const AboutUs = () =>{
    return (
        <div className="offering_aboutus_container">
            <h1>How AdWorksCom works?</h1>
            <h2>You can create a template from the portal and choose where to place the Ad. We have a wide range of placing available including but not limited to cabs, busses, hoardings, social media etc. You can customise your campaign to your needs. If you are not sure how to get started, you can contact us!</h2>
            <div className="offering_aboutus_ctadiv">
            <Button outline color="info" className="offering_aboutus_ctagroup">Contact Us</Button>
            </div>
        </div>
    );
};

export default AboutUs;
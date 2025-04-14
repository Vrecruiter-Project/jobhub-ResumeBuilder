import React from 'react'
import { useRef } from 'react';
import {Whatsapp,Facebook,Envelope, Instagram} from 'react-bootstrap-icons'
import PageComponent from "./PageComponent";
import AboutBannerImage from "./Images/bgImage.png";
import AboutHeaderImage from "./Images/AboutHeaderImage.svg"
import OurVissionMission from "./OurVisionMission";
import JobDetails from "./JobDetails";
import JobProcess from "./JobProcess";
import PartnerSection from "./PartnerSection";
import HeaderPage from "./HeaderPage" 

function AboutUs() {

     const targetSectionRef = useRef(null);

    // Function to handle scroll
    const scrollToSection = () => {
        targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
        <PageComponent>
            <HeaderPage
                backgroundImage={AboutBannerImage}
                headerText={<>
                    About Us <span style={{color: "green"}}>Page</span>
                </>}
                subText="Your trusted partner in job search and recruitment. At, we help job seekers find their dream jobs and assist employers in discovering top talent across industries."
                    buttonTitle1="Scroll Down"
                    
                imgSrc={AboutHeaderImage}
                style={{
                    width: "75%",
                    height: "auto",  
                    }}
                    buttonAction2={scrollToSection}
            />   
                <div ref={targetSectionRef}>
                    <OurVissionMission />
            </div>
            <JobDetails />
            <JobProcess />
            <PartnerSection/>
        </PageComponent>
    </div>
    )
}

export default AboutUs;

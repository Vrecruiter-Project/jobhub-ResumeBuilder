import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { templateImagesPaths } from '../Data/Data'//templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from 'react-redux'
import { updateState } from '../../ReduxManager/dataStoreSlice'
import shortid from 'shortid';
import HeaderPage from '../AboutUs/HeaderPage'
import AboutBannerImage from "../AboutUs/Images/bgImage.png"
import homeBG from './Images/homebg.png'


function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')//this state is used to display 'useTemplate' button when user hovers over the template

    const dispatch = useDispatch();


    const targetSectionRef = useRef(null);

    // Function to handle scroll
    const scrollToSection = () => {
        targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
{/*             <HeaderPage
                backgroundImage={AboutBannerImage}
                headerText={<>
                    Resume <span style={{ color: "green" }}>Builder </span>
                </>}
                subText="Your trusted partner in job search and recruitment. We empower job seekers to land their dream roles and help employers connect with exceptional talent across various industries.."
                buttonTitle1="Choose a Template"

                 imgSrc={homeBG}
                style={{
                    width: "75%",
                    height: "auto",
                }}
                buttonAction2={scrollToSection}
            /> */}
            <div style={{ minWidth: '300px' }}>


            <div ref={targetSectionRef}>
                <div className='d-flex justify-content-center mt-5' >

                    <h3 className='p-2 rounded' style={{ backgroundColor: 'aliceblue' }}>Select a Template to get started! Choose Best One</h3>
                </div>
            </div>


                <div className='container' style={{ color: '#1f4287', }}>

                    <div className='row'>
                        {templateImagesPaths.map((currentTemplate) => {
                            return (
                                <div className='col col-lg-3 col-md-6  col-12 mt-5' key={shortid.generate()}>
                                    <div
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => {
                                            //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it by setting state's value to the targeted template name.//
                                            setIsMouseOver(currentTemplate.name)
                                        }}
                                        onMouseOut={() => {
                                            //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                            setIsMouseOver('MouseIsNotOver')
                                        }}
                                    >
                                        <div className='w-100 d-flex justify-content-center'><h3>{currentTemplate.name}</h3></div>
                                        <img className="w-100 image-aspect-ratio" src={currentTemplate.imageSource} alt='template' />
                                        {isMouseOver === currentTemplate.name           //this conditional rendering is showing 'useTemplate' button when isMouseOver === currentTemplate.name //
                                            ? <Link to="/detailsfillingpage/personalinfo">
                                                <button className='btn btn-success'
                                                    style={{ position: 'absolute', top: '50%', right: '30%', }}
                                                    onClick={() => {
                                                        dispatch(updateState({  //this dispatch function is used to update value of 'selectedTemplate' with the targetedTemplate in dataStoreSlice.js//
                                                            key: 'selectedTemplate',
                                                            value: currentTemplate.name
                                                        }))
                                                    }}
                                                >
                                                    Use Template by Hariom Kumar
                                                </button>
                                            </Link>
                                            : null
                                        }
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>


            </div>

        </>
    )
}

export default Home

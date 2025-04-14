import React from 'react'
import { useSelector } from 'react-redux'
import shortid from 'shortid';

function Template3() {
    const dataStore = useSelector(state => state.dataStore)
    const personalInfo = useSelector(state => state.dataStore.personalInfo);
    return (
        <div className='w-100' style={{ backgroundColor: "#f7eebb", height:'1700px' }}>
            <div className='row m-0'>
                <div className='col col-4 d-flex ' style={{ backgroundColor: "#583131", flexDirection: "column", height:"1700px" }}>
                    {dataStore.imageFile ? (
                        <div className="col-2 text-center media">
                            <img
                                className="rounded align-self-center mx-auto"
                                src={dataStore.imageFile}
                                alt='profile-pic'
                                style={{ maxHeight: '180px', minHeight: "120px", width: '100px', background: 'grey', padding: 0 }}
                            />
                        </div>
                    ) : (
                        <div className="col-2" style={{ visibility: 'hidden', display: 'none' }} /> // Use visibility to maintain layout
                    )}
                    <div className=" mt-3 font-weight-bold " style={{ fontFamily: "Serif", }}>
                        <div className='' style={{ color: "white", fontSize: "70px" }}>{dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}</div>
                        <h5 className='d-flex ' style={{ fontSize: "40px", color: "grey", fontWeight: "bold" }}>{personalInfo.jobTitle}</h5>
                    </div>
                    <div className=" " style={{marginTop:"30%"}}>
                        <div className=' pe-5' style={{ fontSize: "25px", display: "inline-block" }}>
                            <div className=" px-2 mb-2 " style={{ backgroundColor: 'white', color: "black" }}>Email:</div>
                            <div style={{ color: '#f7f7f7' }}>{dataStore.personalInfo.Email}</div>
                            <div className=" px-2 mb-2 mt-2" style={{ backgroundColor: 'white', color: "black" }}>Contact:</div>
                            <div style={{ color: '#f7f7f7' }}>{dataStore.personalInfo.Mobile}</div>
                            <div className=" px-2 mb-2 mt-2 " style={{ backgroundColor: 'white', color: "black" }}>Address:</div>
                            <div style={{ color: '#f7f7f7' }}>{dataStore.personalInfo.Address1 + ", " + dataStore.personalInfo.Address2
                                + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
                            </div>
                        </div>
                    </div>
                    <div className="bg-light text-left"  style={{marginTop:"47.5%"}}>
                                <h3 style={{ color: "#4b6982",fontSize:"40px" }}><b>Key Skills</b></h3>
                            </div>
                            <div className=" text-left mb-4" style={{ fontSize: "25px", color:"white" }}>
                                {dataStore.skills.map((skill) => {
                                    return (
                                        <div key={shortid.generate()}><li>{skill.skillName}</li></div>
                                    )
                                })
                                }
                            </div>
                </div>
                <div className='col col-8 '>
                    <div>
                        <div className="text-justify mt-4 " style={{ fontSize: "25px" }}>{dataStore.personalInfo.Objective}</div>
                        <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                    </div>
                    <div className="" style={{ fontFamily: "Serif", }}>
                        <div className="">
                            <div className=" text-left bg-light mb-4 " style={{ color: "#4b6982", fontSize: "40px" }}> <p><b>Professional Experience</b> </p></div>
                            <div className=" text-left " style={{ fontSize: "25px" }}>
                                {dataStore.workEx.map((item) => {
                                    return (
                                        <div key={shortid.generate()}>
                                            <div className='mt-2' style={{ fontSize: "35px" }}><p>{item.orgName}</p></div>
                                            <div className='mt-2' style={{ fontSize: "35px" }}><b>{item.title}</b></div>

                                            <div className='mt-2 mb-3'>
                                                <div>Worked in {item.orgName} from {item.startYear} to {item.endYear}.</div>
                                                <div>{item.jobDescription}</div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <div className="w-100 mt-4"> </div>
                            <hr style={{ height: "5px", backgroundColor: "#4b6982" }} />
                            <div className="bg-light text-left" style={{ color: "#4b6982", fontSize: "40px" }}><p><b>Education</b></p></div>
                            <div className=" text-left" >
                                <div style={{ fontSize: "25px" }}>
                                    {dataStore.education.map((item) => {
                                        return (
                                            <div key={shortid.generate()}>
                                                <p style={{ fontSize: "35px" }}> {item.Degree}</p>
                                                <div> I have persued my {item.Type} <b style={{ fontSize: '30px' }}> from {item.University}</b> </div>
                                                <p>Duration: {" " + item.Start + " - " + item.End}</p>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className="w-100 mt-4"> </div>
                            {/* <hr style={{ height: "5px", backgroundColor: "#4b6982" }} /> */}

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Template3

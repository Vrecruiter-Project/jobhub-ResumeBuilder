
import React from 'react'
import { useSelector } from 'react-redux'
import shortid from 'shortid';

function Template2() {
    const dataStore = useSelector(state => state.dataStore)
    const personalInfo = useSelector(state => state.dataStore.personalInfo);
    return (
        <div className="" style={{ backgroundColor: "#fffeec", height:'1700px' }}>
            <div >
                <div className="d-flex m-0  justify-content-between align-content-center ">
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
                    <div className={dataStore.imageFile ? "col-6 text-left font-weight-bold" : " text-left font-weight-bold"} style={{ fontFamily: "Serif" }}>
                        <div className='' style={{ color: "#00adb5", fontSize: "55px" }}>
                            {dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}
                        </div>
                        <h5  className='d-flex ' style={{fontSize:"30px", fontWeight:"bold" }}>{personalInfo.jobTitle}</h5>
                    </div>
                    <div className="  ">
                        <div className=' p-3' style={{ fontSize: "25px", maxWidth: "min-content", width: "auto", paddingLeft: "80px", alignContent: "center" }}>
                            <div >{dataStore.personalInfo.Email}</div>
                            <div>{dataStore.personalInfo.Mobile}</div>
                            <div>{dataStore.personalInfo.Address1 + ", " + dataStore.personalInfo.Address2
                                 + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ height: "5px", backgroundColor: "#f0bebe" }} />
            <div className="text-justify mx-4">{dataStore.personalInfo.Objective}</div>
            <hr style={{ height: "5px", backgroundColor: "#f0bebe" }} />

            <div style={{ fontFamily: "Serif", }}>
                <div className="row">
                    <div className="col-3 text-left  " style={{ color: "#de5b7b" }}> <h3> Professional Experience</h3></div>
                    <div className="col-9 text-left" style={{ fontSize: "25px" }}>
                            {dataStore.workEx.map((item) => (
                                <div key={shortid.generate()}>
                                    <div className='mt-2'><b>{item.title}</b></div>
                                    <div className='mt-2'>
                                        Worked at {item.orgName} from {item.startYear} to {item.endYear}.
                                    </div>
                                    <div>{item.jobDescription}</div>
                                </div>
                            ))}
                        </div>
                    <div className="w-100 mt-4"> </div>
                    <hr style={{ height: "5px", backgroundColor: "#f0bebe" }} />
                    <div className="col-3 text-left" style={{ color: "#de5b7b" }}><h3>Education</h3></div>
                    <div className="col-9 text-left" >
                        <div style={{ fontSize: "18px" }}>
                            {dataStore.education.map((item) => {
                                return (
                                    <div key={shortid.generate()}>
                                        <b> {item.Degree}</b>
                                        <div> I have persued my {item.Type} in {item.Degree} from {item.University}</div>
                                        <p>Duration: {" " + item.Start + " - " + item.End}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="w-100 mt-4 "> </div>
                    <hr style={{ height: "5px", backgroundColor: "#f0bebe" }} />
                    <div className="col-3 text-left mb-3 " >
                        <h3 style={{ color: "#de5b7b" }}>Key Skills</h3>
                    </div>
                    <div className="col-9 text-left mb-3" style={{ fontSize: "18px" }}>

                        {dataStore.skills.map((skill) => {
                            return (
                                <div key={shortid.generate()}>
                                    <li style={{ listStyle: "none" }}>{skill.skillName}</li>
                                </div>
                            )

                        })}
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Template2

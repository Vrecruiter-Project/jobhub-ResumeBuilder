import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template1() {
    const dataStore = useSelector(state => state.dataStore);
    const personalInfo = useSelector(state => state.dataStore.personalInfo);

    
    return ( 
        <div className="px-1" style={{ backgroundColor: "white", display: "flex", flexDirection: "column", height:'1700px'}}>
            <div style={{ flex: 1 }}>
                <div className="d-flex m-0 justify-content-between align-content-center" style={{width:"100%"}}>
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
                        <div className="col-2" style={{ visibility: 'hidden', display: 'none' }} />
                    )}
                    <div className={dataStore.imageFile ? "col-6 text-left font-weight-bold" : "text-left font-weight-bold  "} style={{ fontFamily: "Serif", marginLeft:"10px" }}>
                        <div style={{ color: "#00adb5", fontSize: "55px" }}>
                            {personalInfo.firstName + " " + personalInfo.lastName}
                        </div>
                        <h5  className='d-flex ' style={{fontSize:"30px", fontWeight:"bold" }}>{personalInfo.jobTitle}</h5> {/* Updated to use jobTitle directly */}
                    </div>

                    <div  style={{ fontSize: "25px",maxWidth:"min-content", width: "auto", alignContent:"center", marginRight:"10px"}}>
                        <div>{personalInfo.Email}</div>
                        <div>{personalInfo.Mobile}</div>
                        <div>{`${personalInfo.Address1}, ${personalInfo.Address2} ${personalInfo.City}, ${personalInfo.State}, ${personalInfo.Pin}`}</div>
                        {/* </div> */}
                        </div>

                </div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                <div className="text-justify mx-4" style={{ fontSize: "25px" }}>{personalInfo.Objective}</div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

                <div style={{ fontFamily: "Serif" }}>
                    <div className="row">
                        <div className="col-3 text-left" style={{ color: "#00adb5" }}>
                            <h4>Professional Experience</h4>
                        </div>
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
                        <div className="w-100 mt-4"></div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left" style={{ color: "#00adb5" }}>
                            <h4>Education</h4>
                        </div>
                        <div className="col-9 text-left">
                            <div style={{ fontSize: "25px" }}>
                                {dataStore.education.map((item) => (
                                    <div key={shortid.generate()}>
                                        <b>{item.Degree}</b>
                                        <div>I have pursued my {item.Type} in {item.Degree} from {item.University}</div>
                                        <p>Duration: {item.Start} - {item.End}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mt-4"></div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left">
                            <h4 style={{ color: "#00adb5" }}>Key Skills</h4>
                        </div>
                        <div className="col-7 text-left" style={{ fontSize: "25px" , display:"flex", justifyContent:"space-between" }}>
                            {dataStore.skills.map((skill) => (
                                <div key={shortid.generate()}>
                                    <li className=' px-2' style={{ listStyle: "none", border:"2px solid aqua", borderRadius:"20%" }}>{skill.skillName}</li>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template1;
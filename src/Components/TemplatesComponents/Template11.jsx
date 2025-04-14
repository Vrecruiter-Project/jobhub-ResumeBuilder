import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template12() {
    const dataStore = useSelector(state => state.dataStore);
    const personalInfo = useSelector(state => state.dataStore.personalInfo);

    return (
        <div style={{ backgroundColor: "#f3e5f5", padding: "40px", fontFamily: "Arial, sans-serif", color: "#333", height:'1700px' }}>
            <div style={{ margin: "0 auto"}}>
                {/* Header Section */}
                <div style={{ backgroundColor: "#6a1b9a", color: "#fff", padding: "20px", textAlign: "center" ,borderRadius:"10px"}}>
                    <h1 style={{ margin: "0" }}>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                    <h3 style={{ margin: "0" }}>{personalInfo.jobTitle}</h3>
                </div>

                <div style={{ display: "flex" }}>
                    {/* Left Column: Personal Info */}
                    <div style={{ flex: "1", padding: "20px", borderRight: "1px solid #ccc" }}>
                        {dataStore.imageFile && (
                            <div className="text-center mb-4">
                                <img
                                    className="rounded-circle"
                                    src={dataStore.imageFile}
                                    alt='profile-pic'
                                    style={{ maxHeight: '150px', width: '150px', background: 'grey' }}
                                />
                            </div>
                        )}
                        <h4>Contact Information</h4>
                        <p><strong>Email:</strong> {dataStore.personalInfo.Email}</p>
                        <p><strong>Contact:</strong> {dataStore.personalInfo.Mobile}</p>
                        <p><strong>Address:</strong> {`${dataStore.personalInfo.Address1}, ${dataStore.personalInfo.Address2}, ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</p>
                    </div>

                    {/* Right Column: Main Content */}
                    <div style={{ flex: "2", padding: "20px" }}>
                        <div style={{ backgroundColor: "#e1bee7", padding: "10px", borderRadius: "5px" }}>
                            <h4>Objective</h4>
                            <p>{dataStore.personalInfo.Objective}</p>
                        </div>

                        <h4>Professional Experience</h4>
                        {dataStore.workEx.map(item => (
                            <div key={shortid.generate()} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                                <h5 style={{ margin: "0", color: "#6a1b9a" }}>{item.orgName}</h5>
                                <p style={{ margin: "5px 0" }}><strong>{item.title}</strong> ({item.startYear} - {item.endYear})</p>
                                <p>{item.jobDescription}</p>
                            </div>
                        ))}

                        <h4>Education</h4>
                        {dataStore.education.map(item => (
                            <div key={shortid.generate()} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                                <h5 style={{ margin: "0", color: "#6a1b9a" }}>{item.Degree}</h5>
                                <p>{`Pursued ${item.Type} from ${item.University}`}</p>
                                <p>{`Duration: ${item.Start} - ${item.End}`}</p>
                            </div>
                        ))}

                        <h4>Key Skills</h4>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {dataStore.skills.map(skill => (
                                <li key={shortid.generate()} style={{ marginBottom: "5px" }}>• {skill.skillName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template12;
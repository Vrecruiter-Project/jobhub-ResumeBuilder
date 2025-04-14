import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template12() {
    const dataStore = useSelector(state => state.dataStore);
    const personalInfo = useSelector(state => state.dataStore.personalInfo);

    return (
        <div style={{ backgroundColor: "#d4edda", padding: "40px", fontFamily: "Arial, sans-serif", color: "#333", height:'1700px' }}>
            <div style={{ margin: "0 auto" }}>
                {/* Header Section */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    {dataStore.imageFile && (
                        <img
                            src={dataStore.imageFile}
                            alt='profile-pic'
                            style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "10px" }}
                        />
                    )} 
                    <h1 style={{ margin: "0", fontSize: "28px", color: "#4a4a4a" }}>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                    <h3 style={{ margin: "0", fontSize: "20px", color: "#777" }}>{personalInfo.jobTitle}</h3>
                </div>

                {/* Contact Information */}
                <div style={{ marginBottom: "20px" }}>
                    <h4 style={{  paddingBottom: "5px" }}>Contact Information</h4>
                    <p><strong>Email:</strong> {dataStore.personalInfo.Email}</p>
                    <p><strong>Phone:</strong> {dataStore.personalInfo.Mobile}</p>
                    <p><strong>Address:</strong> {`${dataStore.personalInfo.Address1}, ${dataStore.personalInfo.Address2}, ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}</p>
                </div>

                {/* Objective Section */}
                <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ borderBottom: "2px solid #4a4a4a", paddingBottom: "5px" }}>Objective</h4>
                    <p>{dataStore.personalInfo.Objective}</p>
                </div>

                {/* Professional Experience Section */}
                <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ borderBottom: "2px solid #4a4a4a", paddingBottom: "5px" }}>Professional Experience</h4>
                    {dataStore.workEx.map(item => (
                        <div key={shortid.generate()} style={{ marginBottom: "15px" }}>
                            <h5 style={{ margin: "0", color: "#4a4a4a" }}>{item.orgName}</h5>
                            <p style={{ margin: "5px 0" }}><strong>{item.title}</strong> ({item.startYear} - {item.endYear})</p>
                            <p>{item.jobDescription}</p>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ borderBottom: "2px solid #4a4a4a", paddingBottom: "5px" }}>Education</h4>
                    {dataStore.education.map(item => (
                        <div key={shortid.generate()} style={{ marginBottom: "15px" }}>
                            <h5 style={{ margin: "0", color: "#4a4a4a" }}>{item.Degree}</h5>
                            <p>{`Pursued ${item.Type} from ${item.University}`}</p>
                            <p>{`Duration: ${item.Start} - ${item.End}`}</p>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div>
                    <h4 style={{ borderBottom: "2px solid #4a4a4a", paddingBottom: "5px" }}>Key Skills</h4>
                    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                        {dataStore.skills.map(skill => (
                            <li key={shortid.generate()} style={{ marginBottom: "5px" }}>• {skill.skillName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Template12;
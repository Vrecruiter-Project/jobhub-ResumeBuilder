import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template5() {
  const dataStore = useSelector((state) => state.dataStore);
  const personalInfo = useSelector((state) => state.dataStore.personalInfo);

  return (
    <div
      style={{
        backgroundColor: '#848884',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
        , height:'1700px'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '2.5em', color: '#fff' }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h3 style={{ margin: '5px 0', color: '#fff' }}>
          {personalInfo.jobTitle}
        </h3>
        <p style={{ margin: '5px 0', color: '#fff' }}>
          {personalInfo.Email} | {personalInfo.Mobile}
        </p>
        <p style={{ margin: '5px 0', color: '#fff' }}>
          {personalInfo.Address1}, {personalInfo.Address2}, {personalInfo.City},{' '}
          {personalInfo.State}, {personalInfo.Pin}
        </p>
        <hr style={{ border: '1px solid #fff' }} />
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2 style={{ color: '#313C4E' }}>Objective</h2>
        <p style={{ fontSize: '1.1em', color: '#fff' }}>
          {personalInfo.Objective}
        </p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2 style={{ color: '#313C4E' }}>Professional Experience</h2>
        {dataStore.workEx.map((item) => (
          <div key={shortid.generate()} style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0', color: '#fff' }}>
              {item.title} at {item.orgName}
            </h4>
            <p style={{ margin: '5px 0', color: '#fff' }}>
              {item.startYear} - {item.endYear}
            </p>
            <p style={{ fontSize: '1em', color: '#fff' }}>
              {item.jobDescription}
            </p>
          </div>
        ))}
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2 style={{ color: '#313C4E' }}>Education</h2>
        {dataStore.education.map((item) => (
          <div key={shortid.generate()} style={{ marginBottom: '15px' }}>
            <h4 style={{ margin: '0', color: '#fff' }}>{item.Degree}</h4>
            <p style={{ margin: '5px 0', color: '#fff' }}>
              {item.Type} from {item.University} ({item.Start} - {item.End})
            </p>
          </div>
        ))}
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2 style={{ color: '#313C4E' }}>Key Skills</h2>
        <ul style={{ listStyleType: 'none', padding: '0', color: '#fff' }}>
          {dataStore.skills.map((skill) => (
            <li key={shortid.generate()} style={{ marginBottom: '5px' }}>
              - {skill.skillName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Template5;

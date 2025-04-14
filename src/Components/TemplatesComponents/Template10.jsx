import React from 'react'
import { useSelector } from 'react-redux'
import shortid from 'shortid'

function Template10() {
  const dataStore = useSelector((state) => state.dataStore)
  const personalInfo = useSelector((state) => state.dataStore.personalInfo)

  return (
    <div
      className='container'
      style={{
        fontFamily: 'Verdana, sans-serif'
, height:'1700px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        maxWidth: '70%',
        margin: 'auto',
      }}
    > 
      <div className='row'>
        <div
          className='col-12 d-flex flex-column align-items-center'
          style={{
            backgroundColor: '#34495e',
            color: '#ffffff',
          }}
        >
          {dataStore.imageFile && (
            <img
              className='rounded-circle'
              src={dataStore.imageFile}
              alt='profile-pic'
              style={{
                height: '120px',
                width: '120px',
                border: '3px solid #ffffff',
                marginBottom: '15px',
              }}
            />
          )}
          <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>
            {dataStore.personalInfo.firstName +
              ' ' +
              dataStore.personalInfo.lastName}
          </h2>
          <h4
            style={{ fontWeight: 'normal', fontSize: '18px', marginTop: '5px' }}
          >
            {personalInfo.jobTitle}
          </h4>
        </div>

        <div
          className='col-12'
          style={{
            backgroundColor: '#f7f7f7',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Contact Information</h3>
          <p>
            <strong>Email:</strong> {dataStore.personalInfo.Email}
          </p>
          <p>
            <strong>Contact:</strong> {dataStore.personalInfo.Mobile}
          </p>
          <p>
            <strong>Address:</strong>{' '}
            {`${dataStore.personalInfo.Address1}, ${dataStore.personalInfo.Address2}, ${dataStore.personalInfo.City}, ${dataStore.personalInfo.State}, ${dataStore.personalInfo.Pin}`}
          </p>
        </div>

        <div
          className='col-12'
          style={{
            backgroundColor: '#ecf0f1',
            borderRadius: '15px',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Objective</h3>
          <p style={{ fontSize: '16px' }}>{dataStore.personalInfo.Objective}</p>
        </div>

        <div
          className='col-12'
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Professional Experience</h3>
          {dataStore.workEx.map((item) => (
            <div key={shortid.generate()}>
              <h4 style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                {item.orgName}
              </h4>
              <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
                {item.title}
              </p>
              <p style={{ fontSize: '14px' }}>
                Worked from {item.startYear} to {item.endYear}
              </p>
              <p style={{ fontSize: '14px' }}>{item.jobDescription}</p>
            </div>
          ))}
        </div>

        <div
          className='col-12'
          style={{
            backgroundColor: '#ecf0f1',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Education</h3>
          {dataStore.education.map((item) => (
            <div key={shortid.generate()}>
              <h4 style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                {item.Degree}
              </h4>
              <p>
                Pursued {item.Type} <b>from {item.University}</b>
              </p>
              <p>
                Duration: {item.Start} - {item.End}
              </p>
            </div>
          ))}
        </div>

        <div
          className='col-12'
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          <h3 style={{ color: '#2c3e50' }}>Key Skills</h3>
          <ul
            style={{
              listStyleType: 'square',

              fontSize: '16px',
            }}
          >
            {dataStore.skills.map((skill) => (
              <li key={shortid.generate()} style={{ color: '#34495e' }}>
                {skill.skillName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Template10

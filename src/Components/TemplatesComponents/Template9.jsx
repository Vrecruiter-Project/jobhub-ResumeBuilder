import React from 'react'
import { useSelector } from 'react-redux'
import shortid from 'shortid'

function Template9() {
  const dataStore = useSelector((state) => state.dataStore)
  const personalInfo = useSelector((state) => state.dataStore.personalInfo)

  return (
    <div
      className='w-100'
      style={{
        marginTop: '40px',
        fontFamily: 'Arial, sans-serif'
        , height:'1700px'
      }}
    >
      <div className='row m-0'>
        <div
          className='col col-4 d-flex flex-column align-items-center p-4'
          style={{
            backgroundColor: '#4b6982',
            color: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          {dataStore.imageFile ? (
            <div className='text-center'>
              <img
                className='rounded-circle'
                src={dataStore.imageFile}
                alt='profile-pic'
                style={{
                  maxHeight: '150px',
                  width: '150px',
                  border: '3px solid #ffffff',
                }}
              />
            </div>
          ) : (
            <div style={{ visibility: 'hidden', display: 'none' }} />
          )}
          <h2 className='mt-3' style={{ fontSize: '28px' }}>
            {dataStore.personalInfo.firstName +
              ' ' +
              dataStore.personalInfo.lastName}
          </h2>
          <h5 style={{ fontSize: '20px', fontWeight: 'normal' }}>
            {personalInfo.jobTitle}
          </h5>
          <div className='mt-4' style={{ textAlign: 'left', fontSize: '16px' }}>
            <div style={{ marginBottom: '10px' }}>
              <strong>Email:</strong> {dataStore.personalInfo.Email}
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Contact:</strong> {dataStore.personalInfo.Mobile}
            </div>
            <div>
              <strong>Address:</strong>{' '}
              {dataStore.personalInfo.Address1 +
                ', ' +
                dataStore.personalInfo.Address2 +
                ', ' +
                dataStore.personalInfo.City +
                ', ' +
                dataStore.personalInfo.State +
                ', ' +
                dataStore.personalInfo.Pin}
            </div>
          </div>
        </div>
        <div className='col col-8'>
          <div
            className='text-left'
            style={{
              padding: '20px',
              backgroundColor: '#f0f0f0',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ color: '#4b6982' }}>Objective</h3>
            <p
              style={{
                width: '90%',
                height: '200px',
                fontSize: '18px',
              }}
            >
              {dataStore.personalInfo.Objective}
            </p>

            <hr style={{ height: '2px', backgroundColor: '#4b6982' }} />
            <h3 style={{ color: '#4b6982' }}>Professional Experience</h3>
            {dataStore.workEx.map((item) => (
              <div
                key={shortid.generate()}
                style={{
                  marginBottom: '20px',
                  resize: 'horizontal',
                  overflow: 'auto',
                  wordWrap: 'break-word',
                }}
              >
                <h4 style={{ color: '#4b6982' }}>{item.orgName}</h4>
                <b>{item.title}</b>
                <div className='mt-2'>
                  <span>
                    Worked in {item.orgName} from {item.startYear} to{' '}
                    {item.endYear}.
                  </span>
                  <p>{item.jobDescription}</p>
                </div>
              </div>
            ))}
            <hr style={{ height: '2px', backgroundColor: '#4b6982' }} />
            <h3 style={{ color: '#4b6982' }}>Education</h3>
            {dataStore.education.map((item) => (
              <div key={shortid.generate()} style={{ marginBottom: '20px' }}>
                <h5 style={{ color: '#4b6982' }}>{item.Degree}</h5>
                <p>
                  I have pursued my {item.Type} <b>from {item.University}</b>
                </p>
                <p>
                  Duration: {item.Start} - {item.End}
                </p>
              </div>
            ))}
            <hr style={{ height: '2px', backgroundColor: '#4b6982' }} />
            <h3 style={{ color: '#4b6982' }}>Key Skills</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              {dataStore.skills.map((skill) => (
                <li
                  key={shortid.generate()}
                  style={{ fontSize: '16px', color: '#313131' }}
                >
                  - {skill.skillName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template9

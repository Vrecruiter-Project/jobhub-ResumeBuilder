import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';

function Template3() {
  const dataStore = useSelector((state) => state.dataStore);
  const personalInfo = useSelector((state) => state.dataStore.personalInfo);
  return (
    <div className='w-100' style={{ backgroundColor: '#F6F6F6', height:'1700px' }}>
      <div className='row m-0'>
        <div
          className='col col-3 d-flex align-items-center pt-5'
          style={{ backgroundColor: '#E7E7E7', flexDirection: 'column' }}
        >
          {dataStore.imageFile ? (
            <div className='col-2 text-center media'>
              <img
                className='rounded align-self-center mx-auto'
                src={dataStore.imageFile}
                alt='profile-pic'
                style={{
                  maxHeight: '180px',
                  minHeight: '120px',
                  width: '100px',
                  background: '#313131',
                  padding: 0,
                }}
              />
            </div>
          ) : (
            <div
              className='col-2'
              style={{ visibility: 'hidden', display: 'none' }}
            /> // Use visibility to maintain layout
          )}
          <div
            className=' mt-3 font-weight-bold '
            style={{ fontFamily: 'Serif' }}
          >
            <div className='' style={{ color: '#313131', fontSize: '45px' }}>
              {dataStore.personalInfo.firstName +
                ' ' +
                dataStore.personalInfo.lastName}
            </div>
            <h5
              className='d-flex '
              style={{ fontSize: '25px', color: 'grey', fontWeight: 'bold' }}
            >
              {personalInfo.jobTitle}
            </h5>
          </div>
          <div className=' '>
            <div
              className='p-5 ms-4'
              style={{ fontSize: '18px', display: 'inline-block' }}
            >
              <div
                className=' px-2 mb-2 '
                style={{ backgroundColor: '#212121', color: 'white' }}
              >
                Email:
              </div>
              <div style={{ color: '#313131' }}>
                {dataStore.personalInfo.Email}
              </div>
              <div
                className=' px-2 mb-2 mt-2'
                style={{ backgroundColor: '#212121', color: 'white' }}
              >
                Contact:
              </div>
              <div style={{ color: '#313131' }}>
                {dataStore.personalInfo.Mobile}
              </div>
              <div
                className=' px-2 mb-2 mt-2 '
                style={{ backgroundColor: '#212121', color: 'white' }}
              >
                Address:
              </div>
              <div style={{ color: '#313131' }}>
                {dataStore.personalInfo.Address1 +
                  ', ' +
                  dataStore.personalInfo.Address2 +
                  dataStore.personalInfo.City +
                  ', ' +
                  dataStore.personalInfo.State +
                  ', ' +
                  dataStore.personalInfo.Pin}
              </div>
            </div>
          </div>
        </div>
        <div className='col col-9'>
          <div>
            <div className='text-justify mt-4'>
              {dataStore.personalInfo.Objective}
            </div>
            <hr style={{ height: '5px', backgroundColor: '#313131' }} />
          </div>
          <div className='' style={{ fontFamily: 'Serif' }}>
            <div className=''>
              <div
                className=' text-left bg-light mb-4 '
                style={{ color: '#4b6982' }}
              >
                {' '}
                <h3>
                  <b>Professional Experience</b>{' '}
                </h3>
              </div>
              <div className=' text-left ' style={{ fontSize: '18px' }}>
                {dataStore.workEx.map((item) => {
                  return (
                    <div key={shortid.generate()}>
                      <div className='mt-2'>
                        <h4>{item.orgName}</h4>
                      </div>
                      <div className='mt-2'>
                        <b>{item.title}</b>
                      </div>

                      <div className='mt-2 mb-3'>
                        <div>
                          Worked in {item.orgName} from {item.startYear} to{' '}
                          {item.endYear}.
                        </div>
                        <div>{item.jobDescription}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='w-100 mt-4'> </div>
              <hr style={{ height: '5px', backgroundColor: '#4b6982' }} />
              <div className='bg-light text-left' style={{ color: '#4b6982' }}>
                <h3>
                  <b>Education</b>
                </h3>
              </div>
              <div className=' text-left'>
                <div style={{ fontSize: '18px' }}>
                  {dataStore.education.map((item) => {
                    return (
                      <div key={shortid.generate()}>
                        <h5> {item.Degree}</h5>
                        <div>
                          {' '}
                          I have persued my {item.Type}{' '}
                          <b> from {item.University}</b>{' '}
                        </div>
                        <p>Duration: {' ' + item.Start + ' - ' + item.End}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='w-100 mt-4'> </div>
              <hr style={{ height: '5px', backgroundColor: '#4b6982' }} />
              <div className='bg-light text-left '>
                <h3 style={{ color: '#4b6982' }}>
                  <b>Key Skills</b>
                </h3>
              </div>
              <div className=' text-left mb-4' style={{ fontSize: '18px' }}>
                {dataStore.skills.map((skill) => {
                  return (
                    <div key={shortid.generate()}>
                      <li>{skill.skillName}</li>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;

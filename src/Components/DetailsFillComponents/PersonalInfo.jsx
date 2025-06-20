import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfilePicUploadComponent from './ProfileUpload';
import { stateNames } from '../Data/Data';
import TextField from '../InputComponents/TextField';
import TextArea from '../InputComponents/TextArea';
import BottomNavigation from './BottomNavigation';
import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice';

// This component renders the Personal Info page inside the details filling page.
function PersonalInfo(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const personalInfo = useSelector(state => state.dataStore.personalInfo); // This state is used to store personalInfo object of dataStoreSlice.
  const dispatch = useDispatch();


useEffect(() => {
  const savedInfo = JSON.parse(localStorage.getItem('resumeInfo'));
  if (savedInfo) {
    for (const key in savedInfo) {
  dispatch(updatePersonalInfo({ key, value: savedInfo[key] }));
}

  }
  setIsLoaded(true);
}, [])

useEffect(() => {
  localStorage.setItem('resumeInfo', JSON.stringify(personalInfo));
}, [personalInfo]);

  const onChangeHandler = (key, value, errorMessage) => {
    dispatch(updatePersonalInfo({ key, value }));
    if (errorMessage) {
      dispatch(updateErrorMessages({ key, value: errorMessage }));
    } else {
      // Clear the error message if the input is valid
      dispatch(updateErrorMessages({ key, value: '' }));
    }
  };
  if (!isLoaded) return null;
  return (
    <div style={{ padding: "15px", textAlign: "left" }}>
      <ProfilePicUploadComponent />
      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="jobTitle" className="col-form-label">Job Title*</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="text"
                elementId="jobTitle"
                placeholder="Job Title"
                value={personalInfo.jobTitle}
                onChange={(value, errorMessage) => onChangeHandler('jobTitle', value, errorMessage)}
                validation={{ required: true }} // Only this field is required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="firstname" className="col-form-label">First Name</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="text"
                elementId="firstname"
                placeholder="First name"
                value={personalInfo.firstName}
                onChange={(value, errorMessage) => onChangeHandler('firstName', value, errorMessage)}
                validation={{ required: false }} // Not required
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="lastname" className="col-form-label">Last Name</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="text"
                elementId="lastname"
                placeholder="Last name"
                value={personalInfo.lastName}
                onChange={(value) => onChangeHandler('lastName', value)}
                validation={{ required: true }} // Not required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Email</label>
            </div>
            <div className="col-sm-10 col-12">
              <TextField
                type="text"
                elementId="staticEmail"
                placeholder='users@example.com'
                validation={{ checkType: 'email', required: true }} // Not required
                value={personalInfo.Email}
                onChange={(value, errorMessage) => onChangeHandler('Email', value, errorMessage)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="mobile" className="col-sm-1 col-form-label">Mobile No.</label>
            </div>
            <div className="col-sm-10 col-12">
              <TextField
                type="number"
                elementId="Mobile"
                validation={{ maxLengthRequired: 10, required: true }} // Not required
                value={personalInfo.Mobile}
                onChange={(value, errorMessage) => onChangeHandler('Mobile', value, errorMessage)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="inputAddress1" className="col-sm-1 col-form-label">Address1</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="text"
                elementId="inputAddress1"
                value={personalInfo.Address1}
                onChange={(value) => onChangeHandler('Address1', value)}
                validation={{ required: false }} // Not required
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="inputAddress2" className="col-sm-1 col-form-label">Address2</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="text"
                elementId="inputAddress2"
                value={personalInfo.Address2}
                onChange={(value) => onChangeHandler('Address2', value)}
                validation={{ required: false }} // Not required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="inputCity" className="col-sm-1 col-form-label">City</label>
            </div>
            <div className="col-sm-10 col-12">
              <TextField
                type="text"
                elementId="inputCity"
                validation={{ required: true }} // Not required
                value={personalInfo.City}
                onChange={(value, errorMessage) => onChangeHandler('City', value, errorMessage)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="inputState" className="col-sm-1 col-form-label">State</label>
            </div>
            <div className='col-sm-10 col-12'>
              <select
                id="inputState"
                className="form-control"
                value={personalInfo.State}
                onChange={(e) => {
                  dispatch(updatePersonalInfo({
                    key: 'State',
                    value: e.target.value
                  }));
                }}
              >
                <option>Select State</option>
                {stateNames.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-6 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-sm-2 col-12'>
              <label htmlFor="pin" className="col-sm-1 col-form-label">Pincode</label>
            </div>
            <div className='col-sm-10 col-12'>
              <TextField
                type="number"
                className="form-control"
                id="pin"
                value={personalInfo.Pin}
                onChange={(value) => onChangeHandler('Pin', value)}
                validation={{ required: true }} // Not required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row font">
        <div className="col-lg-12 col-12 pt-5 px-4">
          <div className='row'>
            <div className='col-lg-1 col-sm-2 col-12'>
              <label htmlFor="Textarea" className="col-sm-1 col-form-label">Objective</label>
            </div>
            <div className='col-lg-11 col-sm-10 col-12'>
              <TextArea
                elementId="Textarea"
                rows="3"
                value={personalInfo.Objective}
                onChange={(value) => onChangeHandler('Objective', value)}
                validation={{ required: false }} // Not required
              />
            </div>
          </div>
        </div>
      </div>

      {/* This BottomNavigation component displays 'previous' and 'next' button below the details fill form and will redirect the user to the 'previous page Path' and the 'nextPagePath' respectively. */}
      <BottomNavigation prevPagePath='/' nextPagePath='/detailsfillingpage/workex' isFormValid={props.isFormValid} />
    </div>
  );
}

export default PersonalInfo;
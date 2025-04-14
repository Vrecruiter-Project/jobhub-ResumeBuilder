import { createSlice } from '@reduxjs/toolkit'

export const dataStoreSlice = createSlice({
  name: 'dataStore',
  initialState: {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Developer",
      Email: "abc@gmail.com",
      Mobile: "5478963214",
      Address1: "xyz street abc road mainhall",
      Address2: "",
      City: "California City",
      State: "USA",
      Pin: "654789",
      Objective: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sint at vel perferendis officia itaque fuga ducimus, nemo eos, dolor fugiat enim obcaecati, animi illo modi! Veritatis unde libero error magnam quis tempora totam ipsum voluptatum vitae enim architecto excepturi ut odio necessitatibus eligendi, qui provident accusamus autem quo officiis."
    },
    workEx: [
      {
        title: "Developer",
        orgName: "IT Solutions",
        startYear: "2000",
        endYear: "2001",
        jobDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sint at vel perferendis officia itaque fuga ducimus, nemo eos, dolor fugiat enim obcaecati, animi illo modi! Veritatis unde libero error magnam quis tempora totam ipsum voluptatum vitae enim architecto excepturi ut odio necessitatibus eligendi, qui provident accusamus autem quo officiis.",
      }
    ],
    education: [
      {
        Type: "Graduation",
        University: "Southhall",
        Degree: "BTech",
        Start: "2003",
        End: "2005"
      }],
    skills: [{ skillName: "" }],
    selectedTemplate: "",
    imageFile: null,
    errorMessages: {},
    showErrorMessages: false,
  },


  reducers: {

    updatePersonalInfo: (state, action) => {
      //this function updates the targeted key of the personalInfo element of dataStore //
      state.personalInfo[action.payload.key] = action.payload.value
    },

    updateWorkEx: (state, action) => {
      //this function updates the targeted key of the workEx element of dataStore //
      state.workEx[action.payload.index][action.payload.key] = action.payload.value
    },
    updateEducation: (state, action) => {
      //this function updates the targeted key of the education element of dataStore //
      state.education[action.payload.index][action.payload.key] = action.payload.value
    },
    updateKeySkills: (state, action) => {
      //this function updates the targeted key of the keySkills element of dataStore //
      state.skills[action.payload.index][action.payload.key] = action.payload.value
    },
    updateState: (state, action) => {
      //this function can be called to update any targeted element of dataStore //
      state[action.payload.key] = action.payload.value
    },
    updateErrorMessages: (state, action) => {
      //this function updates errorMessages element of dataStore //
      let key = action.payload.key
      if (action.payload.index) {
        key += '_' + action.payload.index
      }
      state.errorMessages[key] = action.payload.value
    },
    addArrayElement: (state, action) => {
      //this function is used to push a blank object in the array of elements(workEx,education& keySkills)
      //when the user clicks on the Add-new button to add more related details//
      state[action.payload.key].push(action.payload.element)
    },
    removeArrayElement: (state, action) => {
      //this function deletes the latest saved details in the array of elements(workEx,education& keySkills), when the user clicks on the remove button// 
      state[action.payload.key].pop()
    },

  }
})

export const { updatePersonalInfo, updateWorkEx, updateEducation, updateKeySkills,
  updateErrorMessages, updateState, addArrayElement, removeArrayElement } = dataStoreSlice.actions

export default dataStoreSlice.reducer
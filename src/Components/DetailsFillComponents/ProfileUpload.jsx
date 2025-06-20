import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateState} from '../../ReduxManager/dataStoreSlice'
  
function App() {
    const imageFile= useSelector(state=> state.dataStore.imageFile)
    const dispatch = useDispatch();
    
    function handleChange(e) {
        //this function is used to update 'imageFile' in dataStoreSlice with the user given input ,
        //which will be reflected in personalInfo as the profile image.
        let file = e.target.files[0]
        const  fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            let temp=URL.createObjectURL(file)

            dispatch(updateState({
                key:'imageFile',
                value:temp,
            }))
        }
        else{
            alert('Uploaded file type should be jpg/png!')
        }
    }
    return (
        <div className="container d-flex align-items-center gap-3">
    
            <div className="row ">
                <img style={{height:'50px', width:'50px', background:'grey',padding:0, borderRadius:'50%', objectFit:'cover'}} src={imageFile} alt='profile'/>
            </div>
            <div className="row ">
                <input type="file" onChange={handleChange} />
            </div>
            
  
        </div>
    );
} 
export default App;
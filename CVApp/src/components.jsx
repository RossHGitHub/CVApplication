import { useState } from "react";
import React from "react";
import './style.css';
import { EducationInfoSection } from "./educationComponentTest";

function PersonalInfoSection({editMode, handleChange, handlePersonalSubmit, personalFormData, handleEdit}){

  return(
    <div className="Input-Form-container">
      <p className="input-header">Personal Info</p>
      <form className="Input-Form" onSubmit={handlePersonalSubmit}>

        <label htmlFor="firstName" >First Name:</label>
        {editMode ? (
          <input name="firstName" id="firstName" value={personalFormData.firstName} onChange={handleChange}></input>
        ) : (
          <p>{personalFormData.firstName}</p>
        )}

        <label htmlFor="lastName">Last Name:</label>
        {editMode ? (
          <input name="lastName" id="lastName" value={personalFormData.lastName} onChange={handleChange}></input>
        ) : (
          <p>{personalFormData.lastName}</p>
        )}

        <label htmlFor="personalEmail">Email:</label>
        {editMode ? (
          <input name="personalEmail" id="personalEmail" type="email" value={personalFormData.personalEmail} onChange={handleChange}></input>
        ) : (
          <p>{personalFormData.personalEmail}</p>
        )}

        <label htmlFor="personalContactNo">Contact Number:</label>
        {editMode ? (
          <input name="personalContactNo" id="personalContactNo" type="number" value={personalFormData.personalContactNo} onChange={handleChange}></input>
        ) : (
          <p>{personalFormData.personalContactNo}</p>
        )}

        <label htmlFor="personalAbout">Personal About:</label>
        {editMode ? (
          <textarea name="personalAbout"  id="personalAbout" type="textarea" value={personalFormData.personalAbout} onChange={handleChange}></textarea>
        ) : (
          <p className="longFieldInput"> {personalFormData.personalAbout}</p>
        )}

        {editMode && <button type="submit">Submit</button>}
        <button type="button" onClick={handleEdit}>Edit</button>
      </form>

    </div>
  )
}


function CV({personalData, editMode, educationFields}){
  return (
    <div id="CV" className="Input-Form-container">
      <p id="CVTitle">Curriculum Vitae</p>
      <section className="CVSection" id="CVPersonalInfo">
        <p className="CVSectionTitle">Personal Info</p>
      <p>Name: {editMode ? ('') : (`${personalData.firstName} ${personalData.lastName}`)}</p>
      <p>Email: {editMode ? ('') : (personalData.personalEmail)}</p>
      <p>Number: {editMode ? ('') : (personalData.personalContactNo)}</p>
      <div>About: <p className="longFieldInput">{editMode ? ('') : (personalData.personalAbout)}</p></div>
      </section>

      <section className="CVSection" id="CVEducationInfo">
        <p className="CVSectionTitle">Educational Info</p>

        {editMode ? ('') : (educationFields.map((field, index) => (
          <div key={index}> 
            <p>Institution: {field.Institute}</p>
            <p>Year: {field.Year}</p>
            <p>Qualification: {field.Qualification}</p>
            <p>Grade: {field.Grade}</p>
            </div>
        )))}
        
      </section>
    </div>
    
  )
}


function App(){
  const [personalFormData, setPersonalFormData] = useState({
    firstName: '',
    lastName: '',
    personalEmail: '',
    personalContactNo: '',
    personalAbout: ''
  });

  const handlePersonalInfoChange = (e) => {
    const {name, value} = e.target;
    setPersonalFormData({...personalFormData, [name]: value})
  }

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  }

  const [educationFields, setEducationFields] = useState([{
    Institute: '',
    Year: '',
    Qualification: '',
    Grade: ''
  }]);

  // Function to handle changes in educational fields
  const handleEducationFieldChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...educationFields];
    updatedFields[index][name] = value;
    setEducationFields(updatedFields);
  };

  // Function to add new educational field
  const addEducationField = (e) => {
    e.preventDefault();
    setEducationFields([...educationFields, { Institute: '', Year: '', Qualification: '', Grade: '' }]);
  };

  const removeEducationField = (e) => {
    e.preventDefault();
    setEducationFields([...educationFields.slice(-1)])
  }





  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true)
  }
 
  const [editMode, setEditMode] = useState(true);

  return(
    <>
    <PersonalInfoSection editMode = {editMode} handleChange={handlePersonalInfoChange} handlePersonalSubmit={handlePersonalSubmit} personalFormData={personalFormData} handleEdit={handleEdit}/>
    <EducationInfoSection educationFields={educationFields} handleEducationFieldChange={handleEducationFieldChange} addEducationField={addEducationField} editMode={editMode} handleEdit={handleEdit} handleSubmit={handlePersonalSubmit} removeEducationField={removeEducationField}/>
    <CV personalData = {personalFormData} editMode={editMode} educationFields={educationFields}/> 
    </>
  )
}


export {App}
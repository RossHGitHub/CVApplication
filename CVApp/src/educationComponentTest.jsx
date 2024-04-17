import './style.css';
import { useState } from "react";


export {EducationInfoSection};

function EducationInfoSection({ educationFields, handleEducationFieldChange, addEducationField, editMode, handleEdit, handleSubmit, removeEducationField}){

  return (
    <section className="Input-Form-container">
      <p className="input-header">Education</p>
      <form onSubmit={handleSubmit} className='Input-Form'>
        {educationFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`institution-${index}`}>Institution:</label>
            {editMode ? (
              <input
                type="text"
                id={`institution-${index}`}
                name="Institute"
                value={field.Institute || ''}
                onChange={(e) => handleEducationFieldChange(index, e)}
              />
            ) : (
              <p>{field.Institute}</p>
            )}
  
            <label htmlFor={`year-${index}`}>Year:</label>
            {editMode ? (
              <input
                type="text"
                id={`year-${index}`}
                name='Year'
                value={field.Year || ''}
                onChange={(e) => handleEducationFieldChange(index, e)}
              />
            ) : (
              <p>{field.Year}</p>
            )}
  
            <label htmlFor={`qualification-${index}`}>Qualification:</label>
            {editMode ? (
              <input
                type="text"
                id={`qualification-${index}`}
                name='Qualification'
                value={field.Qualification || ''}
                onChange={(e) => handleEducationFieldChange(index, e)}
              />
            ) : (
              <p>{field.Qualification}</p>
            )}
  
            <label htmlFor={`grade-${index}`}>Grade:</label>
            {editMode ? (
              <input
                type="text"
                id={`grade-${index}`}
                name='Grade'
                value={field.Grade || ''}
                onChange={(e) => handleEducationFieldChange(index, e)}
              />
            ) : (
              <p>{field.Grade}</p>
            )}
          </div>
        ))}
        
        {/* Add the "Add Education" button */}
        {editMode && <button className="EducationFieldsBtn" onClick={addEducationField}>Add Education</button>}
        {editMode && <button className="EducationFieldsBtn" onClick={removeEducationField}>Remove Last Education</button>}
        
        {/* Add buttons for edit and submit */}
        {editMode && <button className='submitBtn' type="submit">Submit</button>}
        <button onClick={handleEdit}>Edit</button>
      </form>
    </section>
  );
  
  }
  
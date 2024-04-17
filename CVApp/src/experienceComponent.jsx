import React from "react";
import { useState } from "react";

function ExperienceInfoSection({experienceFields, handleExperienceFieldChange, handleSubmit, editMode, addExperienceField, removeExperienceField, handleEdit}){
    return(
<>
<section className="Input-Form-container">
<p className="input-header">Experience</p>
    <form onSubmit={handleSubmit} className='Input-Form'>
    {experienceFields.map((field, index) => (
          <div key={index}>
            <label htmlFor={`Title-${index}`}>Title:</label>
            {editMode ? (
              <input
                type="text"
                id={`Title-${index}`}
                name="Title"
                value={field.Title || ''}
                onChange={(e) => handleExperienceFieldChange(index, e)}
              ></input>
            ) : (
              <p>{field.Title}</p>
            )}

            <label htmlFor={`Company-${index}`}>Company:</label>
            {editMode ? (
              <input
                type="text"
                id={`Company-${index}`}
                name='Company'
                value={field.Company || ''}
                onChange={(e) => handleExperienceFieldChange(index, e)}
              ></input>
            ) : (
              <p>{field.Company}</p>
            )}

            <label htmlFor={`Dates-${index}`}>Dates:</label>
            {editMode ? (
              <input
                type="text"
                id={`Dates-${index}`}
                name='Dates'
                value={field.Dates || ''}
                onChange={(e) => handleExperienceFieldChange(index, e)}
              ></input>
            ) : (
              <p>{field.Dates}</p>
            )}

             <label htmlFor={`About-${index}`}>About:</label>
            {editMode ? (
              <textarea
                type="textarea"
                className="aboutSection"
                id={`About-${index}`}
                name='About'
                value={field.About || ''}
                onChange={(e) => handleExperienceFieldChange(index, e)}
              ></textarea>
            ) : (
              <p>{field.About}</p>
            )}
          </div>
        ))}

    {editMode && <button className="EducationFieldsBtn" onClick={addExperienceField}>Add Experience</button>}
    {editMode && <button className="EducationFieldsBtn" onClick={removeExperienceField}>Remove Experience</button>}

    {editMode && <button className="submitBtn" type="submit">Submit</button>}
    <button onClick={handleEdit}>Edit</button>
      </form>
    </section>
</>
    )
}

export {ExperienceInfoSection};
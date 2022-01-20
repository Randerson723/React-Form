import React, { useState } from 'react';
import Signup from './SignUp'
import PersonalInfo from './PersonalInfo';
import OtherForm from './OtherForm'

export default function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      userName: "",
      companyName: "",
      occupation: "",
  })

  const FormTitles = ['Sign Up', 'Personal Info', 'Other'];

  const PageDisplay = () => {
      if (page === 0) {
          return <Signup formData={formData} setFormData={setFormData}/>;
       }else if (page === 1) {
           return <PersonalInfo formData={formData} setFormData={setFormData} />        
       }else{
           return <OtherForm formData={formData} setFormData={setFormData} />;
       }
  }
//Line 25 is the logic that fills the progress bar at top of Form container across all pages
  return (
    <div className="form">
        <div className="progressbar">
          <div 
            style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
          ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
                if (page === FormTitles.length - 1) {
                    alert("Form Submitted")
                    console.log(formData)//Console is here in place of an API call to send data object to be saved
                }else {
                setPage((currPage) => currPage + 1);
                }
            }}
          >
            { page === FormTitles.length - 1 ? "Sumbit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

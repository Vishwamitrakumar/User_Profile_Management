import React, { useState } from 'react';
import '../App.css'
const Personal_Details = ({ data, onChange, next, prev }) => {
     const [errors, setErrors] = useState({});

     const validate = () => {
          const e = {};
          if (!data.profession) e.profession = "Profession is required";
          if (data.profession === "Entrepreneur" && !data.companyName.trim()) {
               e.companyName = "Company Name required ";
          }
          if (!data.addressLine1.trim()) e.addressLine1 = "Address is required";

          setErrors(e);
          return Object.keys(e).length === 0;
     };

     const handleNext = () => {
          if (validate()) next();
     };

     return (
          <div style={{ width: '400px', margin: '0 auto' }}>
               <h2 style={{paddingLeft:"35px"}}>Professional Details</h2>

               <label style={{fontSize:"25px"}}>Profession:</label>
               <select value={data.profession} onChange={e => onChange('profession', e.target.value)} className="info">
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Developer">Developer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
               </select>
               {errors.profession && <div style={{ color: 'red' }}>{errors.profession}</div>}
               <br />
               {data.profession === 'Entrepreneur' && (
                    <>
                         <label>Company Name:</label>
                         <input
                              type="text"
                              value={data.companyName}
                              onChange={e => onChange('companyName', e.target.value)}
                              className="info"
                         />
                         {errors.companyName && <div style={{ color: 'red' }}>{errors.companyName}</div>}
                         <br />
                         <br />
                    </>
               )}
               <br />
               <label style={{fontSize:"25px"}}>Address &nbsp;</label>
               <input
                    type="text"
                    value={data.addressLine1}
                    onChange={e => onChange('addressLine1', e.target.value)}
                    placeholder="Address"
                    className="info"
               />
               {errors.addressLine1 && <div style={{ color: 'red' }}>{errors.addressLine1}</div>}
               <br /><br />

               <button onClick={prev} className="inf">Back</button>&nbsp;&nbsp;
               <button onClick={handleNext} className="inf">Next</button>
          </div>
     );
};

export default Personal_Details;

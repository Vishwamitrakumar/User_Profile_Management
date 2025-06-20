import React, { useState } from 'react';
import '../App.css'
const Personal_Info = ({ data, onChange, next }) => {
     const [errors, setErrors] = useState({});

     const validate = () => {
          const e = {};
          if (!data.profilePhoto) e.profilePhoto = "Profile photo required";
          if (!data.username || data.username.length < 4 || data.username.length > 20) {
               e.username = "Username must be 4-20 chars, no spaces";
          }
          if (data.newPassword && !data.currentPassword ) {
               e.currentPassword = "Required if changing password";
          }
         
          const strong = /[0-9]/.test(data.newPassword) && /[!@#$%^&*]/.test(data.newPassword);
          if (data.newPassword && (data.newPassword.length < 8 || !strong)) {
               e.newPassword = "Weak password";
          }
          setErrors(e);
          return Object.keys(e).length === 0;
     };

     const handleNext = () => {
          if (validate()) next();
     };

     return (
          <div style={{ width: '400px', margin: '0 auto' }}>
               <h2 style={{
    paddingLeft: "50px",
  }}> Personal Information</h2>
               <input type="file" accept="image/*" onChange={e => onChange('profilePhoto', e.target.files[0])}  className="info" />
               {errors.profilePhoto && <div style={{color:"red"}}>{errors.profilePhoto}</div>}
               <br />
               <br />
               <input type="text" value={data.username} onChange={e => onChange('username', e.target.value)} placeholder="Username" className="info"/>
               {errors.username && <div style={{color:"red"}}>{errors.username}</div>}
               <br />
               <br />
               <input type="password" value={data.newPassword} onChange={e => onChange('newPassword', e.target.value)} placeholder="New Password" className="info"/>
               {errors.newPassword && <div  style={{color:"red"}}>{errors.newPassword}</div>}
               <br />
               <br />
               <input type="password" value={data.currentPassword} onChange={e => onChange('currentPassword', e.target.value)} placeholder="Current Password" className="info"/>
               {errors.currentPassword && <div  style={{color:"red"}}>{errors.currentPassword}</div>}
               <br />
               <br />
               <button onClick={handleNext} className="info">Next</button>
          </div>
     );
};

export default Personal_Info;

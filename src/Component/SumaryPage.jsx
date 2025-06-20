import React from 'react';
import '../App.css';
const SummaryPage = ({ formData, prev, onSubmit }) => {

const handle_submit = () => {
  onSubmit();
}
  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>CHECK THE ALL INFORMATION</h2>

      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Profession:</strong> {formData.profession}</p>
      {formData.profession === 'Entrepreneur' && (
        <p><strong>Company Name:</strong> {formData.companyName}</p>
      )}
      <p><strong>Address:</strong> {formData.addressLine1}</p>
      <p><strong>Country:</strong> {formData.country?.label}</p>
      <p><strong>State:</strong> {formData.state?.label}</p>
      <p><strong>City:</strong> {formData.city?.label}</p>
      <p><strong>Plan:</strong> {formData.subscriptionPlan}</p>
      <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
      <p><strong>Profile URL:</strong> {formData.profilePhoto?.name}</p>

      <br />
      <button onClick={prev} className="inf">◀️ Back</button>&nbsp;&nbsp;
      <button onClick={handle_submit} className="inf">✅ Final Submit</button>
    </div>
  );
};

export default SummaryPage;

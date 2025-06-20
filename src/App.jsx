
import React, { useState } from 'react';
import Personal_Details from './Component/Personal_Details';
import Personal_Info from './Component/Personal_Info';
import Pre from './Component/Pre';
import SummaryPage from './Component/SumaryPage';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    username: '',
    currentPassword: '',
    newPassword: '',
    profession: '',
    companyName: '',
    addressLine1: '',
    country: null,
    state: null,
    city: null,
    subscriptionPlan: '',
    newsletter: true,
  });

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFinalSubmit = async () => {
    const data = new FormData();
    const cleanData = {
      ...formData,
      country: formData.country?.label || '',
      state: formData.state?.label || '',
      city: formData.city?.label || ''
    };
    
    for (let key in cleanData) {
        data.append(key, cleanData[key]);
      }
    const res = await fetch('http://localhost:5000/user', {
      method: 'POST',
      body: data
    });
    const result = await res.json();
    alert(result.message || 'Submitted');
    setFormData({
      profilePhoto: null,
      username: '',
      currentPassword: '',
      newPassword: '',
      profession: '',
      companyName: '',
      addressLine1: '',
      country: null,
      state: null,
      city: null,
      subscriptionPlan: '',
      newsletter: true,
    });

    setStep(1);
    
  };

  return (
    <>
      {step === 1 && <Personal_Info data={formData} onChange={handleChange} next={next} />}
      {step === 2 && <Personal_Details data={formData} onChange={handleChange} next={next} prev={prev} />}
      {step === 3 && <Pre data={formData} onChange={handleChange} prev={prev} next={next} />}
      {step === 4 && <SummaryPage formData={formData}  prev={prev} onSubmit={handleFinalSubmit} />}
    </>
  );
};

export default App;

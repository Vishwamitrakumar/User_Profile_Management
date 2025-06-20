import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import '../App.css'

const Pre = ({ data, onChange, prev , next }) => {
     const [errors, setErrors] = useState({});

     const countryOptions = Country.getAllCountries().map((c) => ({
          value: c.isoCode,
          label: c.name,
     }));

     const stateOptions = data.country
          ? State.getStatesOfCountry(data.country.value).map((s) => ({
               value: s.isoCode,
               label: s.name,
          }))
          : [];

     const cityOptions = data.state
          ? City.getCitiesOfState(data.country.value, data.state.value).map((c) => ({
               value: c.name,
               label: c.name,
          }))
          : [];

     const validate = () => {
          const e = {};
          if (!data.country) e.country = 'Country is required';
          if (!data.state) e.state = 'State is required';
          if (!data.city) e.city = 'City is required';
          if (!data.subscriptionPlan) e.subscriptionPlan = 'Please select a subscription plan';
          setErrors(e);
          return Object.keys(e).length === 0;
     };

    
     const handleNext = () => {
          if (validate()) next();
     };

     return (
          <div  style={{ width: '400px', margin: '0 auto' }}>
               <h2 style={{paddingTop:"20px"}}> PREFERENCES</h2>
               <label>Country:</label>
               <Select 
                    options={countryOptions}
                    value={countryOptions.find(c => c.label === data.country)}
                    onChange={(val) => {
                         onChange('country', val);
                         onChange('state', val);
                         onChange('city', val);
                    }}
                    placeholder="Select Country"
                    isSearchable
                    styles={{ container: (base) => ({ ...base, width: '300px' }) }}
                    className="info"
               />
               {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
               <br />

               <label>State:</label>
               <Select
                    options={stateOptions}
                    value={stateOptions.find(c => c.label === data.state)}
                    onChange={(val) => {
                         onChange('state', val);
                         onChange('city', val);
                    }}
                    placeholder="Select State"
                    isSearchable
                    styles={{ container: (base) => ({ ...base, width: '300px' }) }}
                    className="info"
               />
               {errors.state && <div style={{ color: 'red' }}>{errors.state}</div>}
               <br />

               
               <label>City:</label>
               <Select
                    options={cityOptions}
                    value={cityOptions.find(c => c.label === data.city)}
                    onChange={(val) => onChange('city', val)}
                    placeholder="Select City"
                    isSearchable
                    styles={{ container: (base) => ({ ...base, width: '300px' }) }}
                    className="info"
               />
               {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
               <br />

               
               <label>Subscription Plan:</label><br />
               {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                    <label key={plan} style={{ marginRight: '15px' }}>
                         <input
                              type="radio"
                              name="subscriptionPlan"
                              value={plan}
                              checked={data.subscriptionPlan === plan}
                              onChange={(e) => onChange('subscriptionPlan', e.target.value)}
                              
                         />{' '}
                         {plan}
                    </label>
               ))}
               {errors.subscriptionPlan && <div style={{ color: 'red' }}>{errors.subscriptionPlan}</div>}
               <br /><br />

               <label>
                    <input
                         type="checkbox"
                         checked={data.newsletter}
                         onChange={(e) => onChange('newsletter', e.target.checked)}
                         
                    />{' '}
                    Subscribe to newsletter
               </label>

               <br /><br />
               <button onClick={prev}   className="inf">Back</button>&nbsp;&nbsp;
               <button onClick={handleNext}   className="inf">Next</button>
          </div>
     );
};

export default Pre;

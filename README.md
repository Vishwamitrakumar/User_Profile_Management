This is a full-stack MERN (MongoDB, Express, React, Node.js) project that allows users to create and manage their profiles using a multi-step form. The application supports image uploads, form validations and saves the data into MongoDB. It is designed to be clean, responsive, and efficient with real-world validations and conditional form logic.

Features: 
Multi-Step Form:
Divided into 3 steps (Personal Info, Professional Details, Preferences) 
Profile Photo Upload: JPEG/PNG only with backend storage using Multer
Strong Validations: Username: Unique, 4-20 characters
Passwords: With conditions
Conditional fields (e.g., Company Name visible only if profession = Entrepreneur) 
Dynamic Country → State → City Dropdown: Auto-updated options based on selection

Backend:

Express API with routes to create, fetch, delete users
Multer used for image file handling MongoDB
Integration: Schema-based storage with Mongoose Summary Page before final submission And then redirect first page Success Page + Reset Form after final submit.

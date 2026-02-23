# Student CGPA API 

## 📘 Postman Documentation 👉 https://documenter.getpostman.com/view/50871260/2sBXcGCeXp 

--- 

## 📌 Objective This project is a RESTful API built using **Node.js** and **Express.js** to manage student academic performance records stored in an in-memory JSON array. The API provides endpoints to retrieve student data, calculate statistics like average CGPA, and filter students based on ID and branch.
 
--- 

## 🚀 Features
 - Retrieve all students
 - Find topper student
 - Calculate average CGPA
 - Count total students
 - Get student by ID
 - Filter students by branch

--- 
   
## 🛠️ Tech Stack - Node.js
 - Express.js
 - Render (Deployment)
 - Postman (API Documentation)

 --- 

## 📂 API Routes ### Static Routes - **GET /students** → Get all students
 - **GET /students/topper** → Get student with highest CGPA
 - **GET /students/average** → Get average CGPA
 - **GET /students/count** → Get total number of students

 ### Dynamic Routes
  - **GET /students/:id** → Get student by ID
  - **GET /students/branch/:branchName** → Get students by branch

 --- 
 
 ## 🌐 Live API (Render) 👉 https://students-cgpa-api.onrender.com 
 
 ### Example Endpoints 
https://students-cgpa-api.onrender.com/students
https://students-cgpa-api.onrender.com/students/topper
https://students-cgpa-api.onrender.com/students/average
https://students-cgpa-api.onrender.com/students/count
https://students-cgpa-api.onrender.com/students/3
https://students-cgpa-api.onrender.com/students/branch/CSE

---

 ## ▶️ Run Locally

 **bash**
  npm install
  node index.js
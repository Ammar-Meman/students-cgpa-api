const express = require("express");
const app = express();
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

app.get("/students",(req,res)=>{
  res.status(200).json(students);
})



app.get("/students/topper",(req,res)=>{
  if(students.length===0){
    return res.status(404).json({message:"No students found"});
  }

  let topper = students[0];
  for(let i = 0; i<students.length; i++){
    if(students[i].cgpa>topper.cgpa){
      topper = students[i];
    }
  }
  res.status(200).json(topper);
})



app.get("/students/average",(req,res)=>{
  if(students.length===0){
    return res.status(404).json({message:"No studetns found"});
  }

  let totalCgpa = 0;
  for(let i = 0; i<students.length; i++){
    totalCgpa = totalCgpa + students[i].cgpa;
  }

  let averageCgpa = totalCgpa/students.length;

  return res.status(200).json({averageCgpa:averageCgpa});
})



app.get("/students/count",(req,res)=>{
  let totalStudents = students.length
  return res.status(200).json({totalStudents:totalStudents})
})



app.get("/students/:id",(req,res)=>{
  const id = parseInt(req.params.id);

  const student = students.find(s=>s.id === id);

  if(!student){
    return res.status(404).json({message:"Student not found"});
  }

  res.json(student)
})



app.get("/students/branch/:branchName",(req,res)=>{
  const branchName = req.params.branchName.toLowerCase();

  const filterStudents = students.filter(s=>s.branch.toLowerCase() == branchName);

  if(!filterStudents){
    return res.status(404).json({message:"Student not found"});
  }
  
  return res.json(filterStudents)
})



app.listen(3000,()=>{
  console.log("Server started on port 3000")
})


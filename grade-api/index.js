const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function Student(name, marks){
    this.name = name;
    this.marks = marks;
}

const gradeManager = {
    students : [],
    addStudent : function(name, marks){
        const newStud = new Student(name, marks);
        this.students.push(newStud);
        return "Student created successfully";
    },
    getAllStudents : function(){
        return new Promise((resolve, reject)=>{
            resolve(this.students);
        });
    },
    getTopStudents :  function(){
        const aboveAvergae = this.students.filter(x=> x.marks>60);
        return new Promise((resolve, reject) => {
            resolve(aboveAvergae);
        });
    },
    getTotalMarks :  function(){
        const totalMarks = this.students.reduce((res, cur)=> res+cur.marks, 0);
        return new Promise((resolve, reject)=> {
            resolve(totalMarks);
        });
    },
    getAverage :  function(){
        const totalMarks = this.students.reduce((res, cur)=> res+cur.marks, 0);
        const avg = totalMarks/this.students.length;
        return new Promise((resolve, reject)=> {
            resolve(avg);
        });
    }
}

app.get("/", ( req, res )=>{
    res.json([]);
});

app.post("/create-student", (req,res)=>{
    const name = req.body.name;
    const marks = req.body.marks;
    res.send(gradeManager.addStudent(name, marks));
});

app.get("/students", ( req, res )=>{
    res.send(gradeManager.students);
});

app.get("/top-students", async ( req, res )=>{
    const toppers = await gradeManager.getTopStudents();
    res.send(toppers);
});

app.get("/total-marks", async ( req, res )=>{
    const totalMarks = await gradeManager.getTotalMarks();
    res.json(totalMarks);
});

app.get("/getAverage", async ( req, res )=>{
    const getAverage = await gradeManager.getAverage();
    res.json(getAverage);
});

app.listen(port, ()=>{
    console.log("Grade Api is listening on port: "+port);
});
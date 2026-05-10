function Student(name, marks){
    this.name = name;
    this.marks = marks;
}

const gradeManager = {
    students : [],
    addStudent : function(name, marks){
        const newStud = new Student(name, marks);
        this.students.push(newStud); 
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


gradeManager.addStudent("shanks",98);
gradeManager.addStudent("zoro",58);
gradeManager.addStudent("luffy",59);
gradeManager.addStudent("ussop",95);
async function studentData(){
    try {
        const allStudents = await gradeManager.getAllStudents();
        console.log(allStudents);
        const toppers = await gradeManager.getTopStudents();
        console.log(toppers);
        const totalMarks = await gradeManager.getTotalMarks();
        console.log(totalMarks);
        const averageMarks = await gradeManager.getAverage();
        console.log(averageMarks);
    } catch (error) {
        console.log(error);
    }
}
studentData();
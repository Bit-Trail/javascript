// Write these 3 things from scratch without looking:

// A promise that rejects with "something went wrong" and catches the error
// const p = new Promise((resolve, reject)=> {
//     reject("Something Went Wrong");
// });

// p.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })


// A promise that resolves after 3 seconds with your name
const p = new Promise((resolve, reject)=>{
    let name = "Shanks";
    setTimeout(()=>{resolve("Hi "+ name);},300);
});
// p.then((value)=>{console.log(value);}).catch((err)=>{console.log(err);})



// Same as 2 but using async/await
async function fetchData(){
    try {
        const res = await p;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
fetchData();
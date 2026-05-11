const carsData = require('./data.json')


function getCars(){
    return new Promise((resolve,reject)=> {resolve(carsData);});
}

function addCar(car){
    carsData.push(car);
    return new Promise((resolve, reject)=> {
        resolve("Car Added Successfully");
    });

}

function updateCar(model, updates){
    const getModel = carsData.find(car => car.carModel === Number(model));
    console.log(getModel);
    const result = Object.assign(getModel, updates);
    console.log(result);
    return new Promise((resolve, reject)=>{
        resolve("Car Updated successfully");
    });
}

function deleteCar(model){
    const findCarPosition = carsData.findIndex(car => car.carModel === Number(model));
    if (findCarPosition!= -1){
        carsData.splice(findCarPosition,1);
    }
    return new Promise((resolve,reject)=>{
        resolve("Car deleted successfully");
    });
}

function getAvailableCars(){
    const availablity = carsData.filter(car => car.carAvailablity == "Available");
    return new Promise((resolve,reject)=>{
        resolve(availablity);
    });
}

function getBudgetCars(){
    const minBudget = carsData.filter(car => car.carPrice <= 500000);
    return new Promise((resolve,reject)=>{
        resolve(minBudget);
    });
}

module.exports = {
    getCars,
    addCar,
    updateCar,
    deleteCar,
    getAvailableCars,
    getBudgetCars
}
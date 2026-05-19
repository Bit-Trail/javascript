const pool = require('./db');

async function  getCars(){
    const getAllCars = await pool.query('SELECT * FROM cars ORDER BY car_id');
    return getAllCars.rows;
}

async function  addCar(car){
    const newCar = await pool.query('INSERT INTO cars(car_name, car_model, car_price, availability) VALUES ($1,$2,$3,$4)',[car.car_name,car.car_model,car.car_price,car.availability]);
    if(newCar.rowCount === 1){
        return "Car Added Successfully";
    }else {
        return "Error Please check the details";
    }
}

async function  updateCar(carId, car){
    const updateCar = await pool.query('UPDATE  cars SET car_name = $2, car_model = $3, car_price = $4, availability = $5, updated_at = NOW() WHERE car_id = $1',[carId, car.car_name,car.car_model,car.car_price,car.availability]);
    if(updateCar.rowCount === 1){
        return "Car Updated Successfully";
    }else {
        return "Error Please check the details";
    }
}

async function  deleteCar(carId){
    const deleteACar = await pool.query('DELETE FROM cars WHERE car_id = $1',[carId]);
    if(deleteACar.rowCount === 1){
        return "Car Deleted Successfully";
    }else {
        return "Error Please check the details";
    }
}

async function  getAvailableCars(){
    const getAvailabililty = await pool.query('SELECT * FROM cars WHERE availability = $1 ORDER BY car_id',['available']);
    if(getAvailabililty.rowCount > 0){
        return getAvailabililty.rows;
    }else {
        return "No available cars";
    }
}

async function  getBudgetCars(maxBudget){
    const getinBudgets = await pool.query('SELECT * FROM cars WHERE car_price <= $1 ORDER BY car_id',['maxBudget']);
    if(getinBudgets.rowCount > 0){
        return getinBudgets.rows;
    }else {
        return "No Budget cars";
    }
}  

module.exports = {
    getCars,
    addCar,
    updateCar,
    deleteCar,
    getAvailableCars,
    getBudgetCars
}
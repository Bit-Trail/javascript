const data = require('./db');

async function getAllCars(){
    const getCarData = await data.query('SELECT * FROM cars ORDER BY car_id');
    return getCarData.rows;
}

async function addCars(car) {
    const addACar = await data.query('INSERT INTO cars (car_name, car_model, car_price) VALUES ($1,$2,$3)',[car.car_name,car.car_model,car.car_price]);
    if(addACar.rowCount == 1){
        return "Car Added Successfully";
    } else {
        return "Please check backend there is an error";
    }
}

async function getAllCustomers(){
    const getCustomerData = await data.query('SELECT * FROM customers ORDER BY customer_id');
    return getCustomerData.rows;
}

async function addCustomers(customer) {
    const addACustomer = await data.query('INSERT INTO customers (customer_name, customer_address, customer_phoneno) VALUES ($1,$2,$3)',[customer.customer_name, customer.customer_address, customer.customer_phoneno]);
    if(addACustomer.rowCount == 1){
        return "Customer Added Successfully";
    } else {
        return "Please check backend there is an error";
    }
}

async function getAllRentals(){
    const getRentalData = await data.query('SELECT * FROM rentals ORDER BY rental_id');
    return getRentalData.rows;
}

async function addRentals(rental) {
    const addARental = await data.query('INSERT INTO rentals (customer_id, car_id, start_date, end_date, rent_cost) VALUES ($1,$2,$3,$4,$5) RETURNING *',[rental.customer_id, rental.car_id, rental.start_date, rental.end_date, rental.rent_cost]);
    return addARental.rows[0];
}

async function getRentalHistory(){
    const rentalHistory = await data.query('SELECT customer_name, car_name, start_date, end_date, rent_cost FROM rentals LEFT JOIN customers ON rentals.customer_id = customers.customer_id LEFT JOIN cars ON rentals.car_id = cars.car_id');
    return rentalHistory.rows;
}



module.exports ={
    getAllCars,
    addCars,
    getAllCustomers,
    addCustomers,
    getAllRentals,
    addRentals,
    getRentalHistory
}
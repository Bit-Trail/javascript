const express = require('express');
const app = express();
const port = 3000;
const data = require('./query');

app.use(express.json());


app.get("/cars", async(req,res)=>{
    const allCars = await data.getAllCars();
    res.send(allCars);
});

app.post("/car", async(req,res)=>{
    const car = {
        "car_name" : req.body.car_name,
        "car_model" : req.body.car_model,
        "car_price" : req.body.car_price
    }
    const addAcar = await data.addCars(car);
    res.send(addAcar);
});

app.get("/customers", async(req,res)=>{
    const allCustomers = await data.getAllCustomers();
    res.send(allCustomers);
});

app.post("/customer", async(req,res)=>{
    const customer = {
        "customer_name" : req.body.customer_name,
        "customer_address" : req.body.customer_address,
        "customer_phoneno" : req.body.customer_phoneno
    }
    const addAcustomer = await data.addCustomers(customer);
    res.send(addAcustomer);
});

app.get("/rentals", async(req,res)=>{
    const allRentals = await data.getAllRentals();
    res.send(allRentals);
});

app.post("/rentals", async(req,res)=>{
    const rental = {
        "customer_id" : req.body.customer_id,
        "car_id" : req.body.car_id,
        "start_date" : req.body.start_date,
        "end_date" : req.body.end_date,
        "rent_cost" : req.body.rent_cost
    }
    try {
        const addARental = await data.addRentals(rental);
        res.status(201).json(addARental);
    } catch (error) {
        res.status(500).json({ error: "Failed to create rental" });
    }
});

app.get("/rental-history", async(req,res)=>{
    const rentalHistory = await data.getRentalHistory();
    res.send(rentalHistory);
});

app.listen(port,()=>{
    console.log("Backend is running in port: ", port);
});
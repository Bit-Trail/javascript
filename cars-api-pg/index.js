const express = require('express');
const app = express();
const data = require('./query');
const port = 3030;

app.use(express.json());

app.get("/", async (req,res)=>{
    const getcars = await data.getCars();
    res.send(getcars);
});

app.post("/add-car", async (req,res)=>{
    const car = {
        "car_name" : req.body.car_name,
        "car_model" : req.body.car_model,
        "car_price" : req.body.car_price,
        "availability" : req.body.availability
    }
    const newCar = await data.addCar(car);
    res.send(newCar);
});

app.put("/update-car/:carId", async (req,res)=>{
    const car = {
        "car_name" : req.body.car_name,
        "car_model" : req.body.car_model,
        "car_price" : req.body.car_price,
        "availability" : req.body.availability
    }
    const updatedCar = await data.updateCar(req.params.carId,car);
    res.send(updatedCar);
});

app.delete("/delete-car/:carId", async (req,res)=>{
    const deletedCar = await data.deleteCar(req.params.carId);
    res.send(deletedCar);
});

app.get("/available-cars", async (req,res)=>{
    const getAvailabililtyCars = await data.getAvailableCars();
    res.send(getAvailabililtyCars);
});

app.get("/budget-cars/:maxBudget", async (req,res)=>{
    const getLowBudgetcars = await data.getBudgetCars(req.params.maxBudget);
    res.send(getLowBudgetcars);
});

app.listen(port,()=>{
    console.log("Your backend is listening in the port: " + port);
});
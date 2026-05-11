const express = require('express');
const app = express();
const data = require('./data')
const port = 3000;

app.use(express.json());

app.get('/', async (req,res)=>{
    const getAllCars = await data.getCars();
    res.send(getAllCars);
});

app.post('/add-car', async (req,res)=>{
    const newCar = {
        "carName" : req.body.carName,
        "carModel" : req.body.carModel,
        "carPrice" : req.body.carPrice,
        "carStatus" : req.body.carStatus,
        "carAvailablity" : req.body.carAvailablity
    }
    const addNewCar = await data.addCar(newCar);
    res.send(addNewCar);
});

app.put('/update-car/:model', async (req,res)=>{
    const update = {
        "carName" : req.body.carName,
        "carModel" : req.body.carModel,
        "carPrice" : req.body.carPrice,
        "carStatus" : req.body.carStatus,
        "carAvailablity" : req.body.carAvailablity
    }
    const updateACar = await data.updateCar(req.params.model, update);
    res.send(updateACar);
});

app.delete('/delete-car/:model', async (req, res)=>{
    const deleteAcar = await data.deleteCar(req.params.model);
    res.send(deleteAcar);
});

app.get('/available-cars', async (req,res)=>{
    const onlyAvailableCars = await data.getAvailableCars();
    res.send(onlyAvailableCars);
});

app.get('/budget-cars', async (req,res)=>{
    const minPriceCars = await data.getBudgetCars();
    res.send(minPriceCars);
});

app.listen(port, ()=>{
    console.log("Car Backend is listening to port : " + port);
});
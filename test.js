const {Vehicle} = require ('./service/vehicle.js');

const option = {
    "project_id" : "<Your Project Id>",
    "token": "<One of the desired Token(Admin/Consumer/Driver)>"
}

async function run(){
    const vehicle = new Vehicle(option);
    const req = {
        "vehicle_id":"FRHMW8F_SFG3TM0"
    }
    const vehicleInfo = await vehicle.getVehicle(req);
    console.log(vehicleInfo);
}

run();

###Under development....please do not use it now...

###Ue it like below

```
const { Odrd,Vehicle } = require('google-odrd');
const option = {
    "project_id" : "<project_id>",
    "token": "<the_token>"
}

async function run(){
    const vehicle = new Vehicle(option);
    const req = {
        "vehicle_id":"<vehicle_id>"
    }
    const vehicleInfo = await vehicle.getVehicle(req);
    console.log(vehicleInfo);
}

run();
```
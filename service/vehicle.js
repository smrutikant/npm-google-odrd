const {Odrd} = require('../client/odrd.js');

class Vehicle{
    constructor(option){
        this.projectId = option.project_id;
        this.odrdInstance = new Odrd(option.token);
        this.vehicleClient = this.odrdInstance.vehicleClient;
        this.tripClient = new Odrd(option.token).tripClient;
    }

    /*
        attributes : [
                    {key:"body_type",value:"sedan/hatch...""},
                    {key:"make",value:"toyota..."},
                    {key:"model",value:"qualis..."}
                    .
                    .
                    .
                    ...
                ],
        vehicleState:"ONLINE/OFFLINE(default)"
        maximumCapacity:<int 1-7(recomended)>
        vehicleType:{category: <TAXI/AUTO/TRUCK>}
        supportedTripTypes : ["EXCLUSIVE"] or ["SHARED"] or ["EXCLUSIVE","SHARED"]
     */
    async createVehicle(req){
        const ODRD = await getOdrdInstance();
        const vehicleId = req.vehicle_id;
        try{
            const vehicle = {
                attributes:req.attribute,
                vehicleState:"OFFLINE",
                vehicleType:{category:req.category},
                maximumCapacity:req.capacity,
                supportedTripTypes:req.supportedTrips
            }
            const createVehicle = await ODRD.vehicleClient.createVehicle(
                {
                    parent: `providers/${this.projectId}`, 
                    vehicleId: vehicleId,
                    vehicle:vehicle
                }
            );
            return createVehicle;
        }catch(err){
            throw(err)
        }
    }

    async getVehicle(req){
        try{
            const fleetVehicleId = req.vehicle_id;
            const vehicle = this.vehicleClient.getVehicle({
                name: `providers/${this.projectId}/vehicles/${fleetVehicleId}`
            });
            return vehicle;
        }catch(err){
            throw(err);
        }
    }
}
module.exports = {Vehicle};
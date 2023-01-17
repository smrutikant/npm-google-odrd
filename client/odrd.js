const fleetengine = require("@googlemaps/fleetengine");
const { GoogleAuth } = require('google-auth-library');

class Odrd{
    constructor(token){
        this.google_auth = new GoogleAuth();
        this.google_auth.cachedCredential = {
            getRequestMetadata: function(url, callback){
                callback(null, {'authorization': `Bearer ${token}`});
            }   
        };
        this.vehicleClient = new fleetengine.VehicleServiceClient({ auth: this.google_auth });
        this.tripClient = new fleetengine.TripServiceClient({ auth: this.google_auth });
    }
}
module.exports = {Odrd}
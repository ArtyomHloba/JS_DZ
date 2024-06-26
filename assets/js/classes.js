// class Vehicle{
//     constructor(dimensions, brand, model, manufactureDate){
//         this.dimensions = dimensions
//         this.brand = brand;
//         this.model = model;
//         this.manufactureDate = new Date(manufactureDate);
//     }
//     getFullInfo(){
//         return `${this.brand} ${this.model} ${this.manufactureDate}`
//     }


//     get age() {
//         const currentYear = new Date().getFullYear();
//         const manufactureYear = this.manufactureDate.getFullYear();
//         const age = currentYear - manufactureYear;
//         return age;
//     }

// }

// const vehicle1 = new Vehicle(
//     {length: 4.5, width: 1.8, height: 1.6},
//     "Toyota",
//     "Corolla",
//     "2015-06-15",
// );

// console.log(vehicle1);

// class PassengerTransport extends Vehicle{
//     constructor(dimensions, brand, model, manufactureDate, passengerLimit, passengerCount){
//         super(dimensions, brand, model, manufactureDate);
//         this.passengerLimit = passengerLimit;
//         this.passengerCount = passengerCount;
//     }

//     addPassenger() {
//         if (this.passengerLimit - this.passengerCount > 0) {
//             this.passengerCount++;
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// const passengerVehicle = new PassengerTransport(
//     { length: 5, width: 2, height: 2 },
//     "Ford",
//     "Transit",
//     "2018-07-20",
//     4,
//     5
// );

// console.log(passengerVehicle);
// console.log(passengerVehicle.addPassenger());
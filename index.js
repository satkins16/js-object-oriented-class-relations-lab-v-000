let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Drivers {
  constructor(name) {
    this.id = ++driverId
    this.name = name
  }
}

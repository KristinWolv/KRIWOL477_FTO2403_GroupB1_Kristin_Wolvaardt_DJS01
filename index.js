/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Unit conversion function
const convertAccToKmPerHourSquared = (acc) => {
  if (typeof acc !== 'number' || acc < 0) {
    throw new Error("Acceleration must be a postive number in m/s^2.");
  }
  return acc * 12960; // 1 m/s^2 = 12960 km/h^2
}

// Validation Function (catching errors)
const validateParams = ({ vel, acc, time, d, fuel, fbr }) => {
  if (typeof vel !== 'number' || vel < 0) {
    throw new Error("Velocity must be a positive number in km/h.");
  }
  if (typeof acc !== 'number' || acc < 0) {
    throw new Error("Acceleration must be a positive number in m/s^2.");
  }
  if (typeof time !== 'number' || time < 0) {
    throw new Error("Time must be a positive number in seconds.");
  }
  if (typeof d !== 'number' || d < 0) {
    throw new Error("Distance must be a positive number in km.");
  }
  if (typeof fuel !== 'number' || fuel < 0) {
    throw new Error("Fuel must be a positive number in kg.");
  }
  if (typeof fbr !== 'number' || fbr < 0) {
    throw new Error("Fuel burnout must be a positive number in kg/s.");
  }
};

// Calculation function
// Velosity
const calcNewVel = (vel, acc, time) => {
  acc = convertAccToKmPerHourSquared(acc); // Converts acc to km/h^2
  return vel + (acc * (time / 3600)); //Calculate the new vel, converting time into hours
};

//distance
const calcNewDist = (vel, time, d) => {
  return d + (vel * (time / 3600));
};

// fuel
const calcRemainingFuel = (fuel, fbr, time) => {
  return fuel - (fbr * time); // calculates remaining fuel
};


// calc new values
const vel2 = calcNewVel(vel, acc, time);
const d2 = calcNewDist(vel, time, d);
const rf = calcRemainingFuel(fuel, fbr, time);

console.log(`Corrected New Velocity: ${vel2.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${d2.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${rf.toFixed(2)} kg`);

// FULL CODE EXPLANATION IN README







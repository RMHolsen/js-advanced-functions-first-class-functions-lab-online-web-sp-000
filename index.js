// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0, 2);
}
// with the const funcName = () => { } work for this?
// YES YES IT WILL.

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    return function (fare) {
        return fare * int;
    }
}
// This is a what a higher-order function looks like

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, driverFunc) => {
    return driverFunc(arrayOfDrivers)
}
// calls on the function passed in the second argument
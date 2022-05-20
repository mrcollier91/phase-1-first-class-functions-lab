const returnFirstTwoDrivers = (array) => {return [...array.slice(0,2)]}

const returnLastTwoDrivers = (array) => {return [...array.slice(2)]}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (array, driverFunction) => {
    return driverFunction(array)
}
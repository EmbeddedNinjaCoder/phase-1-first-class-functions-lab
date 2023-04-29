const returnFirstTwoDrivers = (arrayOfScubaDrivers) => { 
    const drivers = arrayOfScubaDrivers.slice(0,2)
    return drivers
}


const returnLastTwoDrivers = (arrayOfLastTwoScubaDrivers) => { 
    const drivers = arrayOfLastTwoScubaDrivers.slice(-2)
    return drivers
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (multiplier) => { 
    return (fare) => fare * multiplier
}


const fareDoubler = (fare) => { 
    const doubledFare = createFareMultiplier(2)
    return doubledFare(fare)
}


const fareTripler = (fare) => { 
    const tripledFare = createFareMultiplier(3)
    return tripledFare(fare)
}


const selectDifferentDrivers = (arrayOfDrivers, slicingFunction) => { 
    return slicingFunction(arrayOfDrivers)
}


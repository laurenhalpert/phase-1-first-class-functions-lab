const returnFirstTwoDrivers = array => [array[0], array[1]];
//returnFirstTwoDrivers();

const returnLastTwoDrivers = array => [array[array.length-2], array[array.length-1]];
//returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function (fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (array, fn) {
    return fn(array);
}
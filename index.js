// Code your solution in this file!
let blockDist
let locHQ = 42
let feetDist
let travelDist
let travelPrice
function distanceFromHqInBlocks(someBlocks) {
    blockDist = someBlocks - locHQ;
    return Math.abs(blockDist)
}

function distanceFromHqInFeet(someFeet) {
    blockDist = someFeet - locHQ;
    feetDist = blockDist * 264;
    return Math.abs(feetDist)
}

function distanceTravelledInFeet(start, destination) {
    travelDist = (destination - start) * 264;
    return Math.abs(travelDist)
}

function calculatesFarePrice(start, destination) {
    travelDist = Math.abs(destination - start) * 264;
    if (travelDist < 400) {
        travelPrice = 0;
    } else if (travelDist < 2000) {
        travelDist = travelDist - 400;
        travelPrice = travelDist * 0.02;
    } else if (travelDist < 2500) {
        travelPrice = 25;
    } else if (travelDist > 2500) {
        travelPrice = 'cannot travel that far'
    }
    return travelPrice
}
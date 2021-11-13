function findMatching(driverNames, possibleName) {
    return driverNames.filter(name =>
        name.toLowerCase() === possibleName.toLowerCase());
};

function fuzzyMatch(driverNames, possibleName) {
    return driverNames.filter(name => name[0] === possibleName[0]);
};

function matchName(driver, input) {
    return driver.filter(property => property.name === input);
} 
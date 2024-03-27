
function findMatching(drivers, attribute) {
    const lowerCaseAttribute = attribute.toLowerCase(); 
    return drivers.filter(function (driver) { 
      return driver.toLowerCase() === lowerCaseAttribute; 
    });
  }
  
function fuzzyMatch(drivers, letters) {
    const fuzzyDrivers = [];

    for (let i = 0; i < drivers.length; i++) {
        const firstLetters = drivers[i].slice(0, letters.length).toLowerCase(); 

        if (firstLetters === letters.toLowerCase()) {
            fuzzyDrivers.push(drivers[i]);
        }
    }

    return fuzzyDrivers;
}

function matchName(drivers, name) {
    const matchingNames = [];

    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].name.toLowerCase() === name.toLowerCase()) {
            matchingNames.push(drivers[i]);
        }
    }

    return matchingNames;
}

module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};

// Code your solution here
function findMatching(drivers, name){
    const matched = [];
    for (const driver of drivers){
        if(driver.toLowerCase() == name.toLowerCase()){
            matched.push(driver);
        }
    }
    return matched;
}
function fuzzyMatch(drivers, name){
    const matched = [];
    const length = name.length
    for (const driver of drivers){
        if(driver.toLowerCase().slice(0,length) == name.toLowerCase()){
            matched.push(driver);
        }
    }
    return matched
}
function matchName(drivers, name){
    const matched = [];
    for (const driver of drivers){
        if(driver.name.toLowerCase() == name.toLowerCase()){
            matched.push(driver);
        }
    }
    return matched
}
// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

//First function
function updateEmployeeWithKeyAndValue (obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj
}

//second function
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj
}

//third function for assignment
function deleteFromEmployeeByKey (obj, key) {
    const newObj = { ...obj }
    delete newObj[key]

    return newObj
}

//fourth function for assignment
function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key]
    return obj
}
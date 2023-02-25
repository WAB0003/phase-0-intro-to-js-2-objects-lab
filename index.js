// Write your solution in this file!
//object should log emplyee information:
    //name
    //address

const employee = {
    name:"Bilbo" ,
    streetAddress: "111 Shire Lane",
};


//create the following functions for the lab:

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const updatedEmployee = {...employeeObject};
    updatedEmployee[key] = value;
    return updatedEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value
    return employeeObject
};

function deleteFromEmployeeByKey(employeeObject, key) {
    const updatedEmployee = {...employeeObject}
    delete updatedEmployee[key]
    return updatedEmployee
};

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
};

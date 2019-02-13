const buildTaskObject = (firstNameParam, lastNameParam, emailParam, phoneParam, birthdayParam, departmentParam, isSupervisor) => {
    return {
        firstName: firstNameParam,
        lastName: lastNameParam,
        email: emailParam,
        phone: phoneParam,
        birthday: birthdayParam,
        department: departmentParam,
        supervisor: isSupervisor
    };
}
document.querySelector("#add-btn").addEventListener("click", () => {
    const firstNameValue = document.querySelector("#firstName").value;
    const lastNameValue = document.querySelector("#lastName").value;
    const emailValue = document.querySelector("#email").value;
    const phoneValue = document.querySelector("#phone").value;
    const birthDayValue = document.querySelector("#birthDay").value;
    const deptValue = document.querySelector("#dept").value;
    const supervisorCheck = document.querySelector("#checkbox").value;


const employeeToAdd = {
    firstName: firstNameValue,
    lastName:   lastNameValue,
    email: emailValue,
    phone: phoneValue,
    birthday: birthDayValue,
    department: deptValue,
    supervisor: supervisorCheck
};

createEmployee(employeeToAdd).then(() => {
    printAllEmployees();
});
});



checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        const checkbox = document.querySelector("input[name=checkbox]");
         
    } else {
        // Checkbox is not checked..
    }
});
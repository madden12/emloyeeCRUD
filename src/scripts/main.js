printAllEmployees();

// event listener for adding a new task
document.querySelector("#add-btn").addEventListener("click", () => {
    const firstNameValue = document.querySelector("#firstName").value;
    const lastNameValue = document.querySelector("#lastName").value;
    const emailValue = document.querySelector("#email").value;
    const phoneValue = document.querySelector("#phone").value;
    const birthdayValue = document.querySelector("#birthday").value;
    const departmentValue = document.querySelector("#department").value;
    const supervisorCheck = document.querySelector("#checkbox").checked;


    const employeeToAdd = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        phone: phoneValue,
        birthday: birthdayValue,
        department: departmentValue,
        supervisor: supervisorCheck
    };
    console.log(supervisorCheck);
    createEmployee(employeeToAdd).then(() => {
        printAllEmployees();
    });
});
document.querySelector("#employee-container").addEventListener("click", () => {
    if (event.target.classList.contains("delete-btn")) {
        const taskId = event.target.id.split("-")[1];
        deleteEmployee(taskId)
            .then(() => {
                printAllEmployees()
            })
    } else if (event.target.classList.contains("checkbox")) {
        const taskId = event.target.id.split("-")[1];
        if (document.querySelector(`#checkbox-${taskId}`).checked) {
            markAsSupervisor(taskId)
        } else {
            markAsNotSupervisor(taskId)
        }
    } else if (event.target.classList.contains("edit-btn")) {
        const taskId = event.target.id.split("-")[1];
        getOneEmployee(taskId)
            .then((singleEmployeeInfo) => {
                console.log(singleEmployeeInfo);
                document.querySelector(`#task-${taskId}`).innerHTML = buildEditForm(singleEmployeeInfo);
            })
    } else if (event.target.classList.contains("save-btn")) {
        const itemId = event.target.id.split("-")[3];
        console.log(itemId);

        const editedFirstName = document.querySelector(`#firstName-input-edit-${itemId}`).value;
        const editedLastName = document.querySelector(`#lastName-input-edit-${itemId}`).value;
        const editedEmail = document.querySelector(`#email-input-edit-${itemId}`).value;
        const editedPhone = document.querySelector(`#phone-input-edit-${itemId}`).value;
        const editedBirthday = document.querySelector(`#birthday-input-edit-${itemId}`).value;
        const editedDepartment = document.querySelector(`#department-input-edit-${itemId}`).value;
        const editedSupervisor = document.querySelector(`#supervisor-edit-input-${itemId}`).value;

        const editedEmployeeObject = buildTaskObject(editedFirstName, editedLastName, editedEmail, editedPhone, editedBirthday, editedDepartment, editedSupervisor)

        console.log(editedEmployeeObject);

        editTask(itemId, editedEmployeeObject)
            .then(printAllEmployees)

    }
});
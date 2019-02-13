const createEmployee = employeeObject => {
    return fetch("http://localhost:8088/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)

    })
}

const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json()
    )
}
const deleteEmployee = taskId => {
    return fetch(`http://localhost:8088/employees/${taskId}`, {
        method: "DELETE"
    });
};
const getOneEmployee = taskId => fetch(`http://localhost:8088/employees/${taskId}`).then(singleEmployee => singleEmployee.json())

const markAsSupervisor = idParam => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: "true" })
    });
};
const markAsNotSupervisor = idParam => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: "false" })
    });
};
const editTask = (idParam, employeeObject) => {
    return fetch(`http://localhost:8088/employees/${idParam}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObject)
    })
}
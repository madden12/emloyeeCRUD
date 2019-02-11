const printAllEmployees = () => {
    document.querySelector("#employee-container").innerHTML = "";
    getAllEmployees()
    .then(allEmployees => {
      allEmployees.forEach(singleEmployee => {
          document.querySelector("#employee-container").innerHTML += buildSingleEmployee(singleEmployee)
      })
    })
}
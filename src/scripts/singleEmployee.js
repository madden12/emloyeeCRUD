const buildSingleEmployee = (singleEmployeeObject) => {
    return `<div>
    <label>
      <input type="checkbox" />
      <span>${singleEmployeeObject.firstName}</span>
      <p>${singleEmployeeObject.lastName}</p>
      <p>${singleEmployeeObject.phone}</p>
      <p>${singleEmployeeObject.email}</p>
      <p>${singleEmployeeObject.birthDay}</p>
      <p>${singleEmployeeObject.dept}</p>
      <p>${singleEmployeeObject.supervisor}</p>
    </label>
  </div>`
}
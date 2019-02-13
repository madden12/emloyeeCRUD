const buildSingleEmployee = (singleEmployeeObject) => {
  return `<div class="task" id="task-${singleEmployeeObject.id}">
      <span>${singleEmployeeObject.firstName}</span>
      <span>${singleEmployeeObject.lastName}</span>
      </label>
      <p>${singleEmployeeObject.phone}</p>
      <p>${singleEmployeeObject.email}</p>
      <p>${singleEmployeeObject.birthday}</p>
      <p>${singleEmployeeObject.department}</p>
      <p>${singleEmployeeObject.supervisor? "supervisor": "not supervisor"}</p>
    
    <a class="btn-floating btn-small waves-effect waves-light orange"><i id="delete-${singleEmployeeObject.id}" class="material-icons delete-btn">delete</i></a>
    <a class="btn-floating btn-small waves-effect waves-light orange"><i id="edit-${singleEmployeeObject.id}" class="material-icons edit-btn">edit</i></a>`
}
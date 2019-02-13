const buildEditForm = (singleEmployeeParam) => {
    return `<section class="row" id="new-task-form">
    <div class="input-field col s6">
        <input value="${singleEmployeeParam.firstName}" id="firstName-input-edit-${singleEmployeeParam.id}" type="text" class="validate">
    </div>
    <div class="input-field col s6">
        <input value="${singleEmployeeParam.lastName}" id="lastName-input-edit-${singleEmployeeParam.id}" type="text" class="validate">
    </div>
    <div class="input-field col s4">
        <input id="phone-input-edit-${singleEmployeeParam.id}" type="text" class="validate" value="${singleEmployeeParam.phone}">
    </div>
    <div class="input-field col s4">
        <input id="email-input-edit-${singleEmployeeParam.id}" type="text" class="validate" value="${singleEmployeeParam.email}">
    </div>
    <div class="input-field col s4">
        <input id="birthday-input-edit-${singleEmployeeParam.id}" type="date" class="validate" value="${singleEmployeeParam.birthday}">
    </div>
    <div class="input-field col s8">
        <input id="department-input-edit-${singleEmployeeParam.id}" value="${singleEmployeeParam.department}" type="text" class="validate">
    </div><label><input type="checkbox"${singleEmployeeParam.supervisor? "checked": ""} id="supervisor-edit-input-${singleEmployeeParam.id}" value=${singleEmployeeParam.supervisor}/><span>Supervisor</span></label>
        <div class="col s3 valign-wrapper">
            <a class="btn-floating btn waves-effect waves-light teal accent-3"><i id="save-edit-btn-${singleEmployeeParam.id}" class="material-icons save-btn">save</i></a>
        </div>
        </section>`}
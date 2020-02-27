exports.generateHTML = function(data) {
    return `<div class="card float-left bg-success" style="width: 18rem;">    
    <div class="card">
      <h2 class="card-header bg-primary">${data.name}</h5>
      <h5 class="card-text"><i class="fal fa-transgender-alt">${data.getRole()}</i></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-info">ID: ${data.id} </li>
      <li class="list-group-item text-info">Email: ${data.email} </li>
      <li class="list-group-item text-info">School: ${data.getSchool()} </li>
    </ul>
</div>`}
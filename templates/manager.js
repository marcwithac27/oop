exports.generateHTML = function(data) {
    return `<div class="card float-left bg-success" style="width: 18rem;">    
    <div class="card">
      <h2 class="card-header bg-warning">${data.name}</h5>
      <h5 class="card-text bg-success"><i class="fas fa-mug-marshmallows">${data.getRole()}</i></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-info">ID: ${data.id} </li>
      <li class="list-group-item text-info">Email: ${data.email} </li>
      <li class="list-group-item text-info">Office: ${data.getOfficeNumber()} </li>
    </ul>
</div>`}
exports.generateHTML = function(data) {
    return `<div class="card float-left bg-success" style="width: 18rem;">    
    <div class="card-body">
      <h2 class="card-title">${data.name}</h5>
      <h5 class="card-text"><i class="fas fa-mug-marshmallows">${data.getRole()}</i></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item">Email: ${data.email} </li>
      <li class="list-group-item">Office: ${data.getOfficeNumber()} </li>
    </ul>
</div>`}
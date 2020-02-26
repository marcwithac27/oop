exports.generateHTML = function(data) {
    return `<div class="card float-left" style="width: 18rem;">    
    <div class="card-body">
      <h2 class="card-title">${data.name}</h5>
      <h5 class="card-text"><i class="fas fa-mug-hot"></i> ${data.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id} </li>
      <li class="list-group-item">Email: ${data.email} </li>
      <li class="list-group-item">School: ${data.getSchool()} </li>
    </ul>
</div>`}
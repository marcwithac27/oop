exports.generateHTML = function(data) {
    return `<div class="card float-left bg-success" style="width: 18rem;">    
    <div class="card">
      <h2 class="card-header bg-secondary">${data.name}</h5>
      <h5 class="card-text"><i class="fab fa-wpbeginner">${data.getRole()}</i> </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-info">ID: ${data.id} </li>
      <li class="list-group-item text-info">Email: ${data.email} </li>
      <li class="list-group-item text-info"><a href="
      https://github.com/${data.getGithub()}" target="_blank">Github</a></li>
    </ul>
</div>`}
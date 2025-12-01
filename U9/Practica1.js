fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];

    const html = `
      <img src="${user.picture.large}" width="150">
      <p>Nombre: ${user.name.first} ${user.name.last}</p>
      <p>Email: ${user.email}</p>
      <p>Dirección: ${user.location.street.name} ${user.location.street.number}</p>
      <p>País: ${user.location.country}</p>
    `;

    document.getElementById("user").innerHTML = html;
  })
  .catch(error => {
    document.getElementById("user").innerText = "Error cargando usuario";
    console.error(error);
  });

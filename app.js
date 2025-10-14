const btn = document.querySelector(".btn");
btn.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let output = document.querySelector(".all-users");
      users.forEach((user) => {
        output.innerHTML += `
    <div class="name">NAME: ${user.name}</div>
<div class="username">USERNAME: ${user.username}</div>
<div class="email">EMAIL: ${user.email}</div>
<hr>
    `;
      });
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

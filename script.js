// Fetch users from API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then(users => {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear "Loading..." text

    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');

      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      `;

      userList.appendChild(userDiv);
    });
  })
  .catch(error => {
    document.getElementById('userList').innerHTML = 'Error loading data.';
    console.error('Error:', error);
  });
// Display loading message
function signUp() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Send a POST request to the server for sign-up
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert(data.message);
    })
    .catch(error => console.error('Error:', error));
  }
  
  function signIn() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
  
    // Send a POST request to the server for sign-in
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert(data.message);
  
      if (data.success) {
        // Redirect to index.html on successful sign-in
        window.location.href = 'index.html';
      }
    })
    .catch(error => console.error('Error:', error));
  }
  
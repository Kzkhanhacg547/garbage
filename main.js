function callAPI() {
  fetch('https://example.com/api')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

setInterval(callAPI, 5000);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const countries = document.getElementById('countries').value.split(',');
  const data = { name, countries };
  fetch('http://localhost:3000/views/ex2.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('result').textContent = data.message;
  })
  .catch(err => console.error(err));
});

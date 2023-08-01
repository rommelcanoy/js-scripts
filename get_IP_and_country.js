document.addEventListener('DOMContentLoaded', function () {

  const ip_address = document.getElementById('ip_address');
  const currency = document.getElementById('currency');
  const params = new URLSearchParams(window.location.search);
  const domain = params.get('domain');

  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      ip_address.textContent = data.ip;
      console.log(data.currency)
      currency.textContent = data.currency;
    })
    .catch(error => console.error('Error fetching IP address:', error));

});
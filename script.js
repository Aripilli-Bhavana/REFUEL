document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fuelType = document.getElementById('fuel-type').value;
    const location = document.getElementById('location').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Order placed for ${quantity} litres of ${fuelType} at ${location}.`);
});
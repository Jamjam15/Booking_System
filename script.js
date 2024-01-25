function submitBooking() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    fetch('http://localhost:3000/book-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            patientName,
            appointmentDate,
        }),
    })
    .then(response => response.json())
    .then(data => {
        const bookingStatus = document.getElementById('bookingStatus');
        bookingStatus.innerHTML = data.message;
    })
    .catch(error => console.error('Error:', error));
}

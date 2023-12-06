function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const month = months[now.getMonth()];
    const dayIndex = daysOfWeek[now.getDay()];


    const timeString = `${hours}:${minutes}:${seconds}`;
    const dayString = `${date}:${month}:${ dayIndex}`;
    
    document.getElementById('time').textContent = timeString;
    document.getElementById('days').textContent = dayString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately when the page loads
updateClock();

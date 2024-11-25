function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if hour is 0, make it 12
  
    // Pad single-digit values with leading zero
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Update the HTML content
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
  
    // Calculate the angle for each dot indicator
    const hoursRotation = (hours / 12) * 360;
    const minutesRotation = (minutes / 60) * 360;
    const secondsRotation = (seconds / 60) * 360;
  
    // Function to position each dot indicator at a specific angle along the circle
    function setDotPosition(element, angle, radius = 50) {
      const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
      const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  
    // Update the position of each indicator dot
    setDotPosition(document.getElementById('hours-dot'), hoursRotation, 45);
    setDotPosition(document.getElementById('minutes-dot'), minutesRotation, 45);
    setDotPosition(document.getElementById('seconds-dot'), secondsRotation, 45);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock();
  
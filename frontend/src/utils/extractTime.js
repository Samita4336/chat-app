export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const ampm = hours >= 12? 'PM' : 'AM';
    const hour = hours % 12 || 12;
    return `${hour}:${minutes} ${ampm}`;
}


function padZero(number) { 
    return number.toString().padStart(2, '0');
}
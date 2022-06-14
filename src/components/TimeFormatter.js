function TimeFormatter({ value }) {
  const currentTime = new Date().getTime() //time is milliseconds format
  const publishedTime = value * 1000; // changing into milliseconds
  const originalTime = (currentTime - publishedTime) /1000
  const mins = Math.floor(originalTime/60);
  const hours = Math.floor(originalTime/3600);
  const days = Math.floor(originalTime / 86400);
  if (days > 0) {
    return days === 1? `${days} day `: `${days} days `
  } else if (hours > 0 && hours < 24) {
    return hours === 1? `${hours} hour `: `${hours} hours `;
  } else if(mins > 0 && mins < 60){
     return mins === 1?`${mins} minute `:`${mins} minutes `
  }
}

export default TimeFormatter;

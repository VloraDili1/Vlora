const dateTime = new Date();
dateTime.setTime;
document.getElementById("time").innerHTML = dateTime;
document.getElementById("year").innerHTML = dateTime.getFullYear();
document.getElementById("month").innerHTML = dateTime.getMonth()+1;

const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = weekDay[dateTime.getDay()-1];
document.getElementById("day").innerHTML = day;

document.getElementById("hour").innerHTML = dateTime.getHours();
document.getElementById("minutes").innerHTML = dateTime.getMinutes();
document.getElementById("seconds").innerHTML = dateTime.getSeconds();
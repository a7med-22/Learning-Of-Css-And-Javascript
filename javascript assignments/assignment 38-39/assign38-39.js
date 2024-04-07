let day = "Saturday";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.substr(1);

switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Monday":
    case "thursday":
        console.log("from 10:00 AM to 5:00 PM");
        break;
    case "Tuesday":
        console.log("from 10:00 AM to 6:00 PM");
        break;
    case "Wednesday":
        console.log("from 10:00 AM to 7:00 PM");
        break;
    default: 
        console.log("Its not a valid day");
}
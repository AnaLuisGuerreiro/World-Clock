// Los Angeles
let losAngelesDateElement = document.querySelector("#los_angeles .date");
let losAngelesTimeElement = document.querySelector("#los_angeles .time");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = "01:02:23 <smal> Am </small>";

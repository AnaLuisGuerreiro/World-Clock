// Los Angeles
setInterval(function () {
  let losAngelesDateElement = document.querySelector("#los_angeles .date");
  let losAngelesTimeElement = document.querySelector("#los_angeles .time");

  let losAngeles = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngeles.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngeles.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}, 1000);

// Buenos Aires
setInterval(function () {
  let buenosairesDateElement = document.querySelector("#buenos_aires .date");
  let buenosairesTimeElement = document.querySelector("#buenos_aires .time");

  let buenosaires = moment().tz("America/Buenos_Aires");

  buenosairesDateElement.innerHTML = buenosaires.format("MMMM Do YYYY");
  buenosairesTimeElement.innerHTML = buenosaires.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}, 1000);

// Bangkok
setInterval(function () {
  let bangkokDateElement = document.querySelector("#bangkok .date");
  let bangkokTimeElement = document.querySelector("#bangkok .time");

  let bangkok = moment().tz("Asia/Bangkok");
  bangkokDateElement.innerHTML = bangkok.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkok.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}, 1000);

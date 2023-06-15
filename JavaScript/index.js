function showRealData() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los_angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngeles = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngeles.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngeles.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  // Buenos Aires
  let buenosairesElement = document.querySelector("#buenos_aires");
  if (buenosairesElement) {
    let buenosairesDateElement = buenosairesElement.querySelector(".date");
    let buenosairesTimeElement = buenosairesElement.querySelector(".time");

    let buenosaires = moment().tz("America/Buenos_Aires");

    buenosairesDateElement.innerHTML = buenosaires.format("MMMM Do YYYY");
    buenosairesTimeElement.innerHTML = buenosaires.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  // Bangkok
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");

    let bangkok = moment().tz("Asia/Bangkok");
    bangkokDateElement.innerHTML = bangkok.format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkok.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

showRealData();
setInterval(showRealData, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

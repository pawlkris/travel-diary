eventId = 0;
testTrip = {}

class App {

static resetButtonColors() {
      Array.from(document.getElementsByClassName("trip")).forEach(x => x.style.backgroundColor = "#57BC90")
      Array.from(document.getElementsByClassName("nav-button")).forEach(x => x.style.backgroundColor = "#57BC90")
    };

static hide(section) {
  section.style.display = "none";
};

static show(section) {
  section.style.display = "block";
};


};

document.addEventListener("DOMContentLoaded", function(event) {
  let user = 1;
  Adapter.getUsers();
  Adapter.getTrips(user);
  Adapter.getLocations();
  const tripList = document.getElementById("trip-list");
  const newBtn = document.getElementById("new-btn");
  const homeBtn = document.getElementById("home-btn");

  const tripDisplay = document.getElementById("trip-display");
  const formDisplay = document.getElementById("form-display");
  const homeDisplay = document.getElementById("home-display");




  tripList.addEventListener("click", function(event) {
    App.hide(formDisplay);
    App.hide(homeDisplay);
    App.show(tripDisplay);
    eventId = parseInt(event.path.filter(x => x.className === "trip")[0].id);

    ///reset all trip cards to default color and change clicked to selected color
    App.resetButtonColors();
    document.getElementById(eventId).style.backgroundColor = "#0074D9";

    let showTrip = Trip.getById(eventId);
    showTrip.updateShow();
  });

  newBtn.addEventListener("click", function(event) {
    App.show(formDisplay);
    App.hide(homeDisplay);
    App.hide(tripDisplay);
    App.resetButtonColors();
    newBtn.style.backgroundColor = "#0074D9";
  });

  formDisplay.addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let user_id = user;
    let location_id = Location.getIdOrCreateByName(document.getElementById("location").value);
    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;
  });

  homeBtn.addEventListener("click", function(event) {
    App.hide(formDisplay);
    App.show(homeDisplay);
    App.hide(tripDisplay);
    App.resetButtonColors();
    homeBtn.style.backgroundColor = "#0074D9";



  });



});

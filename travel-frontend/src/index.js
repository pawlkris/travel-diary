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

  static resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
    document.getElementById("start_date").value = "";
    document.getElementById("end_date").value = "";
  };


};

document.addEventListener("DOMContentLoaded", function(event) {
  let user = 1;
  Adapter.getUsers();
  Adapter.getTrips(user);
  Adapter.getLocations();

  // click listeners elements that change what displays in main show area
  const tripList = document.getElementById("trip-list");
  const newBtn = document.getElementById("new-btn");
  const homeBtn = document.getElementById("home-btn");
  const editBtn = document.getElementById("edit");

  // display area options
  const tripDisplay = document.getElementById("trip-display");
  const formDisplay = document.getElementById("form-display");
  const homeDisplay = document.getElementById("home-display");

  const submitBtn = document.getElementById("submit");




  tripList.addEventListener("click", function(event) {
    App.hide(formDisplay);
    App.hide(homeDisplay);
    App.show(tripDisplay);
    let eventId = parseInt(event.path.filter(x => x.className === "trip")[0].id);

    ///reset all trip cards to default color and change clicked to selected color
    App.resetButtonColors();
    document.getElementById(eventId).style.backgroundColor = "#0074D9";

    let showTrip = Trip.getById(eventId);
    showTrip.updateShow();
  });

  editBtn.addEventListener("click", function(event) {
    App.show(formDisplay);
    App.hide(homeDisplay);
    App.hide(tripDisplay);


    let editTrip = Trip.getById(parseInt(editBtn.dataset.id));


    document.getElementById("name").value = editTrip.name;
    document.getElementById("description").value = editTrip.description;
    document.getElementById("location").value = Location.nameById(editTrip.location_id);
    document.getElementById("start_date").value = editTrip.start_date;
    document.getElementById("end_date").value = editTrip.end_date;

  });

  newBtn.addEventListener("click", function(event) {
    App.show(formDisplay);
    App.hide(homeDisplay);
    App.hide(tripDisplay);
    App.resetButtonColors();
    newBtn.style.backgroundColor = "#0074D9";
    App.resetForm();


  });

  submitBtn.addEventListener("click", function(event) {
    debugger
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let user_id = user;
    let location_id = Location.getIdOrCreateByName(document.getElementById("location").value).id
    let start_date = document.getElementById("start_date").value;
    let end_date = document.getElementById("end_date").value;

    debugger
    // 
    // Trip.newTripDb(name, description, user_id, location_id, start_date, end_date);
    //
    // let eventId = Trip.all[Trip.all.length-1].id
    //
    // debugger
    //
    // App.hide(formDisplay);
    // App.hide(homeDisplay);
    // App.show(tripDisplay);
    //
    // debugger
    //
    // App.resetButtonColors();
    // document.getElementById(eventId).style.backgroundColor = "#0074D9";
    //
    // let showTrip = Trip.getById(eventId);
    // showTrip.updateShow();
    //
    // debugger

  });

  homeBtn.addEventListener("click", function(event) {
    App.hide(formDisplay);
    App.show(homeDisplay);
    App.hide(tripDisplay);
    App.resetButtonColors();
    homeBtn.style.backgroundColor = "#0074D9";



  });



});

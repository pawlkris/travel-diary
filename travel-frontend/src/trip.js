class Trip {

  constructor(data){
    this.id = data["id"]
    this.name = data["name"]
    this.description = data["description"]
    this.location_id = data["location_id"]
    this.user_id = data["user_id"]
    this.start_date = data["start_date"]
    this.end_date = data["end_date"]
    // this.people_involved = data["people_involved"]
    // this.photos = data["photos"]
    // this.events = data["events"]
    Trip.all.push(this)
  };

  // static newTripDb(note){
  //
  //   fetch(`http://localhost:3000/api/v1/notes`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
  //     body: JSON.stringify(note)
  //   })
  //     .then(resp => resp.json()).then(trip => {let newTrip = new Trip(trip)
  //       container.innerHTML += `
  //         <div id="${newNote.id}">
  //         <h1>${newNote.title}</h1>
  //         <p>${newNote.body}</p>
  //         <button id="delete${newNote.id}">Delete Note</button>
  //         </div>
  //       `
  //       document.getElementById('title_input').value = ""
  //       document.getElementById('body_input').value = ""
  //       document.getElementById('edit').dataset.id = "new"
  //     })

  static formatDate(date) {
    date = new Date(date);
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    ;
  }

  updateShow(){
    document.getElementById("trip-name").innerText = this.name
    document.getElementById("trip-dates").innerText = `${Trip.formatDate(this.start_date)}-${Trip.formatDate(this.end_date)}`
    document.getElementById("trip-location").innerText = Location.nameById(this.location_id)
    document.getElementById("trip-map").src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAv6zJzukQ3qrRUXJ1fGrHwd-6jq0hb-u0&q=${Location.nameForUrl(this.location_id)}`
    document.getElementById("trip-description").innerText = `Description: ${this.description}`
    // document.getElementById("people-involved").innerText = `People involved: ${this.people_involved}`
    // document.getElementById("events").innerText = `Highlighted events: ${this.events}`
  };


};

Trip.all = []

Trip.getById = function(id) {
  return Trip.all.find(x => x.id === id)
};

class Trip {

  constructor(data){
    this.id = data["id"]
    this.name = data["name"]
    this.description = data["description"]
    this.location_id = data["location_id"]
    this.user_id = data["user_id"]
    this.start_date = data["start_date"]
    this.end_date = data["end_date"]
    this.people_involved = data["people_involved"]
    this.photos = data["photos"]
    this.events = data["events"]
    Trip.all.push(this)
  };

};

Trip.all = []


// for show page:
//
// <h1>${t.name}</h1>
// <ul>
// <li>Location: ${Location.findById(t.location_id)}</li>
// <li>Dates: ${t.start_date} - ${t.send_date}</li>
// <li>People Visited or Travelling With: ${t.people_involved}</li>
// <li>Photos: ${t.photos}</li>
// <li>Events: ${t.events}</li>
// </ul>

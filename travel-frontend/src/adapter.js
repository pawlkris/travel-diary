
class Adapter {
  static getTrips(user){
    fetch(`http://localhost:3000/api/users/${user}`)
    .then(res => res.json())
    .then(json => this.createAndDisplayTrips(json))
  };

  static createAndDisplayTrips(json){
    json.trips.forEach(t => new Trip(t))
    let tripList = document.querySelector('#trip-list')


    // ///// USE FOR SORTING BY DATE
    // function compare(a,b) {
    //   if (a.start_date < b.start_date)
    //     return -1;
    //   if (a.start_date > b.start_date)
    //     return 1;
    //   return 0;
    // }

    Trip.all.forEach(t => tripList.innerHTML += t.addHTML())
  };

  static getUsers(){
    fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then(json => this.createUsers(json))
  };

  static createUsers(json){
    json.forEach(t => new User(t))
  }
  //   let userList = document.querySelector('#dropdown-user')
  //   User.all.forEach(t => userList.innerHTML += `
  //     <h3>${t.name}</h3>
  //     <p>Location: ${Location.findById(t.location_id)}</p>
  //     <p>Dates: ${t.start_date} - ${t.end_date}</p>
  //     `)
  // }

  static getLocations(){
    fetch("http://localhost:3000/api/locations")
    .then(res => res.json())
    .then(json => this.createLocations(json))
  };

  static createLocations(json){
    json.forEach(t => new Location(t))
  }


};

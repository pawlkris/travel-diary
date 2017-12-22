class Location {
  constructor(data){
    this.id = data.id
    this.name = data.name
    Location.all.push(this)
  };

};

Location.all = []

Location.findById = function(id) {
  return Location.all.find(x => x.id === id)
}

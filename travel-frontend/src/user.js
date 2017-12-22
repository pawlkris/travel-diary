class User {
  constructor(data){
    this.name = data.name
    User.all.push(this)
  }
};

User.all = [];

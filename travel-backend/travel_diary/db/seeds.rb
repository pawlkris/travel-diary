# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


paul = User.create(name: "Paul")
josh = User.create(name: "Josh")

# hawaii = Location.create(name: "Kona, HI")
# milwaukee = Location.create(name: "Milwaukee, WI")
# boston = Location.create(name: "Boston, MA")

trip1 = Trip.create(name: "Milwaukee Fall 2017", description: "Visited family before starting Flatiron", city:"Milwaukee", state:"WI", country:"USA" , user: User.all.first, start_date: Date.new(2017,10,14), end_date: Date.new(2017,10,17), people_involved: "Grandparents, Parents, Aunt Kay, Brother Danny, Ryan Shaw, Ryan Pilakowski, Amie Azad, Elyse Clouthier, Liam O'Brien", events: "Skatepark/Warehouse Punk Show, Hanging out and seeing people", work:false, leisure: true, beach: false, family:true, friends:true)
trip2 = Trip.create(name: "Pre-NYC Hawaii Trip!", description: "Vacation to Hawaii before working like a dog", city:"Kona", state:"HI", country:"USA", user: User.all.first, start_date: Date.new(2017,9,22), end_date: Date.new(2017,10,6), people_involved: "Narinè", events: "Beaches on Beaches, Jungle, Mountains, Desert, Pokè-eating", work:false, leisure: true, beach: true, family:false, friends:true)
trip3 = Trip.create(name: "Last Work Trip to Boston", description: "Trip to Boston to say goodbye to coworkers and teacher in BMTN", city:"Boston", state:"MA", country:"USA" , user: User.all.first, start_date: Date.new(2017,10,12), end_date: Date.new(2017,10,14), people_involved: "Toni/Kirk/Zipporah, all the NE teachers", events: "Filling in new staff on BMTN quirks, saying goodbyes", work:true, leisure: false, beach:false, family:false, friends:false)

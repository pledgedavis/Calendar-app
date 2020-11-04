# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Month.create(name: "July", year: "2021")
Month.create(name: "December", year: "2021")
Month.create(name: "March", year: "2022")
Month.create(name: "August")
Month.create(name: "June")
Month.create(name: "September")
Month.create(name: "October")
Month.create(name: "April")
Month.create(name: "May")
Month.create(name: "November")



Day.create(name: "Birthday", task: "Get ready for bday", priority: "High", length: "all-day", month_id: "1")
Day.create(name: "Christmas", task: "Get christmas tree", priority: "High", length: "all-day", month_id: "2")
Day.create(name: "Bill", task: "Need to pay rent", priority: "Very Important", length: "all-day", month_id: "3")



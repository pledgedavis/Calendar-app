# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Month.create(name: "January")
Month.create(name: "Febuary")
Month.create(name: "March")
Month.create(name: "April")
Month.create(name: "May")
Month.create(name: "June")
Month.create(name: "July")
Month.create(name: "August")
Month.create(name: "September")
Month.create(name: "October")
Month.create(name: "November")
Month.create(name: "December")




Day.create(name: "Monday", day_number: "1", task: "Get ready for bday", priority: "5", length: "all-day", month_id: "1")
Day.create(name: "Thursday", day_number: "10", task: "Get christmas tree", priority: "5", length: "all-day", month_id: "2")
Day.create(name: "Tuesday",  day_number: "5", task: "Need to pay rent", priority: "5", length: "all-day", month_id: "3")

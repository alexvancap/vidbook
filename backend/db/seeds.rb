# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
VideoLike.destroy_all
VideoComment.destroy_all

User.create({username: 'Alex', password: 'alex', adress: 'Belgium',})
User.create({username: 'David', password: 'd', adress: 'The Jones Building on main', degree: 'Software Engineering', current_role: 'studen', school: 'flatiron', email: 'david@flatiron.com'})
User.create({username: 'Mubarak', password: 'm', adress: 'The Jones Building on main', degree: 'none', current_role: 'studen', school: 'flatiron', email: 'mubarak@flatiron.com'})
User.create({username: 'George', password: 'g', adress: 'The Jones Building on main', degree: 'none', current_role: 'studen', school: 'flatiron', email: 'george_and_nate@flatiron.com'})
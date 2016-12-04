# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
karaoke = JSON.parse(File.read("#{Rails.root}/db/karaoke.json"))

karaoke.each do |song|
  Song.new(
      name: song['song'], 
      author: song['author'], 
      time: song['time'], 
      icon:  File.open("#{Rails.root}/public/#{song['icon']}")
    ).save
end


# Song.create(name: 'La Bamba',                
#               author: 'Mini Spring Roll with 10 pieces',                
#               time: '3:30',
#                 icon: File.open("#{Rails.root}/public/karaoke/014.jpg"))

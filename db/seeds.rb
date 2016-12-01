# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
karaoke = ActiveSupport::JSON.decode(File.read('db/seeds/karaoke.json'))

#karaoke.each do |song|
  #Song.create!(name: song['song'], author: song['author'], time: song['time'], icon_file_name: "#{Rails.root}/public#{song['icon']}", without_protection: True)
#end

Song.create(name: 'test', author: 'test_author',)
